"""GDELT DOC 2.0 API - free, no key. English-source filter enforced upstream
(sourcelang:eng). Requests are PACED (GDELT asks clients not to flood it) and
a 429 is retried once after a pause; every failure reports its real HTTP
status or response type so the status panel tells you what happened."""
from __future__ import annotations
import json
import time
from .base import Item, ConnectorResult
from ..classify import classify

NAME = "gdelt"
ENDPOINT = "https://api.gdeltproject.org/api/v2/doc/doc"
PACE_SECONDS = 6.0          # spacing between queries
BACKOFF_SECONDS = 20.0      # pause before the single retry on HTTP 429

QUERIES = [
    "Sri Lanka Chinese port sourcelang:eng",
    "Hambantota port China Merchants sourcelang:eng",
    "Colombo Port City China sourcelang:eng",
    "Sri Lanka research vessel sourcelang:eng",
    "Sri Lanka navy Trincomalee sourcelang:eng",
    "Sri Lanka air force Katunayake sourcelang:eng",
    "Mattala airport Sri Lanka sourcelang:eng",
    "Sri Lanka army Jaffna sourcelang:eng",
    "Sri Lanka fuel crisis refinery sourcelang:eng",
    "Trincomalee oil tank farm sourcelang:eng",
    "Sapugaskanda refinery sourcelang:eng",
    "Sinopec Hambantota refinery sourcelang:eng",
    "Sri Lanka nuclear power plan sourcelang:eng",
    "Sri Lanka undersea cable Colombo sourcelang:eng",
    "Sri Lanka cyber attack sourcelang:eng",
    "Sri Lanka debt China loans sourcelang:eng",
    "Sri Lanka defence attache China sourcelang:eng",
    "Sri Lanka submarine Colombo sourcelang:eng",
    "Colombo port shipping sourcelang:eng",
    "Colombo container terminal sourcelang:eng",
    "Sri Lanka Hormuz fuel shortage sourcelang:eng",
    "Colombo port congestion sourcelang:eng",
    "Lakvijaya power station sourcelang:eng",
    "Sri Lanka electricity coal sourcelang:eng",
    "Sri Lanka Northern Province security sourcelang:eng",
    "Sri Lanka Eastern Province navy sourcelang:eng",
    "Sri Lanka maritime security sourcelang:eng",
    "Sri Lanka Maldives China sourcelang:eng",
    "Sri Lanka Chinese investment sourcelang:eng",
    "Sri Lanka military base sourcelang:eng",
]


def configured() -> bool:
    return True


def _get(safe_http, q):
    params = {"query": q, "mode": "ArtList", "format": "json", "timespan": "3d",
              "maxrecords": "40", "sort": "DateDesc"}
    r = safe_http.safe_get(ENDPOINT, params=params)
    if r.status_code == 429:
        time.sleep(BACKOFF_SECONDS)
        r = safe_http.safe_get(ENDPOINT, params=params)
    return r


def fetch() -> ConnectorResult:
    from .. import safe_http
    items, errors = [], []
    for i, q in enumerate(QUERIES):
        if i:
            time.sleep(PACE_SECONDS)
        try:
            r = _get(safe_http, q)
            if r.status_code != 200:
                errors.append(f"'{q.split(' sourcelang')[0]}': HTTP {r.status_code}")
                continue
            try:
                data = json.loads(r.content)
            except ValueError:
                errors.append(f"'{q.split(' sourcelang')[0]}': non-JSON response (service busy or changed)")
                continue
            for a in data.get("articles", []):
                title = (a.get("title") or "").strip()
                if not title:
                    continue
                items.append(Item(
                    category=classify(title), label=title[:90], text=title,
                    source=a.get("domain", "GDELT"), date=a.get("seendate", ""),
                    url=a.get("url"), connector=NAME,
                ).to_dict())
        except safe_http.FetchError as e:
            errors.append(f"'{q.split(' sourcelang')[0]}': blocked ({e})")
        except Exception as e:
            errors.append(f"'{q.split(' sourcelang')[0]}': {type(e).__name__}")
    if not items and errors:
        return ConnectorResult(NAME, True, False, "; ".join(errors)[:300])
    msg = f"{len(items)} items across {len(QUERIES)} topic queries"
    if errors:
        msg += f" ({len(errors)} failed: {'; '.join(errors)[:200]})"
    return ConnectorResult(NAME, True, True, msg, items)
