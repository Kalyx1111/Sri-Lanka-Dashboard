"""Routes every headline into one of the China v6 dashboard's 15 headings, applied to Sri Lanka and the seas around it.
Order matters: the most specific headings come first; geopolitics is the default. Short words match whole words only."""
import re

HEADINGS = ["geo", "milops", "arms", "naval", "scs", "air", "space", "tech", "cyber", "darkweb",
            "econ", "mss", "social", "wellbeing", "hazard"]

RULES = [
    ("darkweb", ["dark web", "darknet", "onion", "ransomware", "leak site", "infostealer", "stealer", "data breach",
                 "data leak", "threat intel", "threat intelligence", "initial access broker"]),
    ("cyber", ["cyber", "hacker", "hacked", "hacking", "malware", "vulnerabilit", "intrusion", "phishing", "ddos", "zero-day",
               "cyberattack", "cert", "slcert", "signals corps", "wiper", "routers"]),
    ("hazard", ["earthquake", "tremor", "flood", "floods", "cyclone", "tsunami", "landslide", "drought", "heatwave", "heat wave",
                "monsoon", "storm", "wildfire", "lightning", "sea level", "erosion"]),
    ("mss", ["espionage", "spy", "spying", "arrested", "crackdown", "smuggling", "drug trafficking", "organised crime",
             "money laundering", "police raid", "sabotage"]),
    ("geo", ["courtesy call", "attaché", "attache", "defence diplomacy"]),
    ("milops", ["army", "troops", "soldiers", "soldier", "garrison", "division", "security forces", "military operation", "clashes",
                "insurgent", "shelling", "deploy", "deployment"]),
    ("naval", ["navy", "naval", "submarine", "submarines", "warship", "frigate", "corvette", "fleet", "dockyard", "colombo dockyard",
               "colombo-class", "patrol boat", "coast guard", "sea trial", "naval base"]),
    ("scs", ["research vessel", "research ship", "tracking ship", "moratorium", "strait", "straits", "shipping", "tanker", "vessel",
             "undersea cable", "subsea cable", "cable cut", "cable fault", "berth", "berthed", "container terminal", "seaport",
             "port call", "palk", "gulf of mannar", "sea lane", "sea lanes", "blockade", "chokepoint", "port authority", "congestion"]),
    ("air", ["air force", "airbase", "air base", "air-defence", "air defence", "air defense", "fighter", "helicopter", "airport",
             "aircraft", "airspace", "air surveillance", "radar squadron", "katunayake", "mattala", "china bay", "palaly"]),
    ("arms", ["nuclear", "reactor", "uranium", "radioactive", "missile", "ballistic", "weapon", "weapons", "ammunition", "arms deal",
              "arms sale", "warhead", "munitions"]),
    ("space", ["satellite", "space", "rocket", "launch", "orbit", "spacecraft", "tracking satellite"]),
    ("tech", [" ai ", "artificial intelligence", "semiconductor", "quantum", "digital", "technology", "export control"]),
    ("social", ["protest", "protests", "protesters", "strike", "strikes", "union", "unions", "human rights", "refugee", "refugees",
                "displaced", "civilians", "casualties", "students", "migrants", "famine", "hunger"]),
    ("econ", ["lease", "investment", "invest", "loan", "loans", "debt", "fuel", "oil", "refinery", "lng", "pipeline", "energy",
              "electricity", "power station", "power plant", "port city", "exports", "imports", "economy", "economic", "budget",
              "inflation", "imf", "tariff", "tender", "container"]),
    ("geo", ["agreement", "treaty", "pact", "talks", "summit", "diplomat", "diplomacy", "attaché", "attache", "visit", "courtesy call",
             "ceasefire", "bilateral", "cooperation", "partnership", "sovereignty", "policy"]),
    ("wellbeing", ["happiness", "wellbeing", "well-being", "life expectancy", "human development index"]),
]

_SHORT = {"army", "navy", "cert", "asd", "gcsb", "oil", "lng", "imf", "fuel", "ai", "spy", "uav", "strike", "strikes", "lease",
          "debt", "tender", "union", "unions", "visit", "launch", "orbit", "policy", "container", "garrison"}


def _has(text: str, word: str) -> bool:
    if " " in word or "-" in word or "'" in word or "." in word or "/" in word:
        return word in text
    if word in _SHORT or (len(word) <= 4 and word.isalpha()):
        return re.search(r"\b" + re.escape(word) + r"\b", text) is not None
    return word in text


def classify(text: str) -> str:
    t = " " + (text or "").lower() + " "
    for heading, words in RULES:
        if any(_has(t, w) for w in words):
            return heading
    return "geo"
