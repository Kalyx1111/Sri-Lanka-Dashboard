# Sri Lanka DASHBOARD - v1

Covers Sri Lanka and the seas within 150 km of the island (about 78.3 to 83.3 degrees east and 4.6 to 11.2 degrees north). It uses the
China Dashboard v6 architecture: Flask with waitress, a supervisor with automatic restart, AES-256-GCM key storage, the same 15 headings
(the maritime heading is "Maritime Chokepoints & Sea Lanes"), layer toggles and live connectors.

**Nothing about India is plotted or described.** Neighbouring land at the edge of the frame appears as a plain outline only, and no
Indian deployment, facility or company appears in the data or the notes. The Indian Ocean and the Palk Strait appear only as sea names.

## Start

Windows: double-click `start.bat`. The dashboard runs at **http://127.0.0.1:8835/** (set in `run.py` and `start.bat`). The first pass of the
news connectors takes a few minutes, because GDELT is paced at six seconds per query. The page carries 86
points, each with its source.

## The 15 headings

Geopolitical & Diplomatic - Military Operations & Force Posture - Strategic Arms & Nuclear Program - Naval & Maritime Security - Maritime
Chokepoints & Sea Lanes - Air Force & Aviation - Space Tech & Aerospace - Critical Tech & AI Governance - Cyber Espionage & APTs - Darkweb &
Threat Intel - Economic & Trade - Internal Security & Intelligence Operations - Social Pulse & Public Sentiment - Happiness & Wellbeing Indices
- Natural Hazards & Environmental Risks.

Routing is rule-based (`app/classify.py`). A research ship's visit goes to the maritime heading; a fuel-tank tender goes to economics; a
Chinese defence attaché's courtesy call goes to diplomacy. Every reference item lands in one of these panels; a test enforces it.

## The map

- **Projection:** Lambert azimuthal equal-area, centred on the island (about 80.8 degrees east, 7.9 degrees north).
- **Shaded:** Sri Lanka. **Outlined:** the land at the edge of the frame. **Lines:** the nine provinces (25 boundary lines).
- **Rivers:** 4 segments. **Towns:** 14 places from Natural Earth, plus the towns and district centres in the site list.
- **Civil airports:** 9 large and medium airports (OurAirports, public domain). **Military-named airfields:** 4; a name is a clue,
  not a confirmation of use.
- **Seaports:** 3. **Sea labels:** the Gulf of Mannar, the Palk Strait, the Bay of Bengal and the Indian Ocean.

## What is plotted: 70 points, each with its status, date and source

Each tooltip gives the source. "Not verified in this build" marks public knowledge that this build's searches did not confirm
(13 points carry that flag). Positions are approximate unless the note says otherwise.

- **Navy (10 sites):** the Eastern Naval Command at the SLN Dockyard in Trincomalee, the largest naval base, with the Naval and
  Maritime Academy; Naval Headquarters at Flagstaff Street, Colombo; the Western Naval Command at Colombo Harbour; the Southern Naval Command at
  Galle; the Northern Naval Command at Karainagar; and the bases at Kankasanturai, Talaimannar, Kalpitiya, Tangalle and Welisara.
- **Submarines (1):** two Chinese submarines called at Colombo in 2014 (reported; the type was not verified). Sri Lanka has
  no submarine base in the sources reviewed.
- **Air Force (11 sites, with the military-named airfields):** Katunayake (the largest base, beside the international airport),
  Ratmalana, China Bay (the Academy and radar squadrons), Hingurakgoda (a radar squadron and attack helicopters), Palaly (shared with Jaffna's
  airport) and Mattala (declared open on 2 October 2026). Anuradhapura, Vavuniya, Koggala, Batticaloa and Sigiriya are listed but not verified.
- **Radar (3):** the air-surveillance and air-defence squadrons at China Bay and Hingurakgoda, and a surveillance squadron at Vavuniya
  (not verified). Radar types and suppliers are not described here.
- **Army (7 sites):** the Army Headquarters in the Defence Headquarters Complex at Akuregoda; the Security Forces Headquarters Jaffna
  at Palaly, commanding 51, 52 and 55 Divisions; Elephant Pass (55 Division); the Security Forces Headquarters East and 22 Division at Trincomalee; 11
  Division at Panagoda; and the Mullaitivu and Kilinochchi headquarters (not verified).
- **Chinese-linked strategic facilities (4):** Hambantota International Port under a 99-year lease to China Merchants Port
  Holdings (handed over in December 2017; the government says it will not be a military base for any country); Colombo Port City, built by CHEC on
  269 hectares, with about US$1.4bn invested and a US$300m commitment in January 2026; the Colombo South Container Terminal run by China Merchants; and
  the research ship Shi Yan 6 at Colombo in October 2023.
- **Energy, fuel and cables (8):** the Trincomalee oil tank farm (99 tanks, the Ceylon Petroleum Corporation's 24, and a 29-tank
  redevelopment); the Sapugaskanda refinery (expansion tender); a planned Colombo Port to Kolonnawa fuel pipeline (tender); the proposed Sinopec refinery
  at Hambantota (delayed); the Lakvijaya coal station at Puttalam (repaired by a Chinese contractor after a 2014 outage); and the cable landing
  stations at Colombo, Mount Lavinia and Matara, with an approximate Sri Lanka Telecom data centre.
- **Cyber (2):** the national CERT Coordination Centre at BMICH, Colombo, under the ICT Agency; and the Sri Lanka Telecom data centre
  (approximate).
- **Chokepoints (3):** the Palk Strait and the Gulf of Mannar (shallow waters; not verified); and the southern sea lanes that carry
  energy and container traffic between the Middle East and Asia (Colombo handled 8.29 million TEU in 2025).
- **Shipyard (1):** Colombo Dockyard PLC, which built the Colombo-class ships for the Navy (ownership not described).
- **Capitals and towns (20):** Kotte (the legislative capital), Colombo, Kandy, Galle, Jaffna, Trincomalee, Batticaloa, Hambantota,
  Matara, Kurunegala, Anuradhapura, Puttalam, Mannar, Vavuniya, Kilinochchi, Mullaitivu, Negombo, Diyatalawa, Badulla and Ratnapura.

**Nuclear, missile and space: none plotted.** Sri Lanka has no nuclear power plant and no radioactive-waste storage site in the sources
reviewed. An IAEA review in July 2025 found five candidate sites for a first plant; their locations are not published, so none is plotted. The
long-term electricity plan keeps nuclear as an option, with a 600 MWe unit after 2040 as one scenario. No missile base and no space-launch facility
is listed in Sri Lanka in the sources reviewed.

## Gaps (not verified in this build or not plotted)

- **Navy and coastal surveillance:** the coastal radar network, the other shore establishments and the Navy's patrol boat stations are not plotted.
- **Army and Air Force:** most garrisons below division level, the training sites and the logistics depots are not plotted; the radar types are not
  described; Ratmalana's radars were not verified.
- **Chinese-linked projects:** the financing of Mattala airport was not re-verified; the Sinopec refinery's position is approximate; the other
  terminals at Colombo are not described.
- **Energy:** the LNG terminal plans, the Kerawalapitiya site and the national grid are not plotted or verified.
- **Positions:** most base and facility positions are approximate; the Sri Lanka Telecom data centre is approximate.
- **News:** only seven verified global feeds are included. The regional press is reached through Google News search feeds, which are aggregators, so
  the outlets are not named by the feed.

## News, social and dark-web sources

- **Verified feeds (7):** USNI News and the USNI Blog, Breaking Defense, SpaceNews, Space.com, The Record and Al Jazeera.
- **Google News search feeds (12):** Chinese port projects, Hambantota, Colombo Port City, the Navy, the Air Force, fuel and refineries, nuclear
  plans, cyber, subsea cables, research vessels, the Army in the north, and debt and Chinese loans.
- **GDELT:** 30 English-language queries on the ports, the navies, the air bases, the fuel infrastructure, the cables, the nuclear plans, the cyber
  incidents and the Chinese-linked projects.
- **USGS earthquakes:** events inside the frame.
- **Ransomware.live:** claims filtered to Sri Lanka's country code. Group claims are labelled unverified.
- **X (Twitter):** official API v2 recent search with 10 queries. Set `X_BEARER_TOKEN`. Recent search needs a paid tier.
- **Facebook and Instagram:** official Graph and Business Discovery APIs. Set your tokens and list your own pages or accounts.
- **Telegram:** `data/telegram_channels.json` carries a public list from an earlier build. It has not been verified for Sri Lanka, so add the channels you
  verify.
- **Dark web (Tor):** none configured. Add onion sources you have verified on the outlet's own site.

## Reference items

29 dated items, each with its source: the Hambantota lease and the 2017 statements; the Chinese research and tracking ships and the
moratorium; the 2014 submarine calls; the Colombo Port City and its 2026 commitment; the Sinopec refinery; the Army Commander's courtesy call; the
Navy's commands; the Mattala opening; the radar squadrons; Katunayake; the Akuregoda headquarters; the Army's divisions; the nuclear review and
the long-term plan; the absence of a waste repository, a missile base and a space-launch facility; the tank farm, the refinery and the pipeline; the
Foreign Minister's fuel statement; the southern sea lanes; the national CERT; the cable landings; the Palk Strait and the Gulf of Mannar; the Lakvijaya
station; the 2017 union opposition; the World Happiness Report (not verified); and the ransomware claims.

## Tests

37 Python tests (`python -m pytest tests/`), including one that fails the build if any reference item would be hidden from every panel, and three
browser suites (`npm test`), which load the shipped page into a real DOM. The layer test fails the build if any toggle has no data behind it. The
outline and point alignment was checked by rendering the map.

## Security

- Keys and tokens are encrypted with AES-256-GCM and never appear in error messages.
- The server listens on 127.0.0.1 only.
- Strict Content-Security-Policy: no third-party scripts, fonts or trackers.
- Headlines and labels are escaped before display; only http and https links become clickable.
- Telegram handles, Instagram usernames and Facebook Page IDs are validated before any URL is built.
- Requests can go through a proxy you choose (`PROXY_URL`).

A dashboard cannot secure your whole PC or phone, and it cannot hide your IP address from the sites it fetches from unless you route traffic
through a VPN, which can still see your traffic.

## Honest limitations

- **Most positions are approximate.** Bases and facilities sit at their town or area centre; open sources do not publish perimeters. Each tooltip says so.
- **Some points are not verified in this build.** They are flagged in their tooltips and listed under Gaps.
- **Reported events and claims are attributed.** Financing, investment and debt figures come from the sources named in each note and are not re-audited.
- **Nothing about India is plotted or described.** If you want a view of the neighbourhood that includes other states' deployments, that needs a separate brief.
- **Events change daily.** The sources are current to reports up to 10 October 2026. Check them before you rely on any event.
- **No live news was fetched in the build sandbox,** which has no internet access. The status panel on your machine shows the real results.
- **The map is not a targeting product.** It maps publicly reported locations and events for analysis.
- **Single-user and local.** It runs on your machine while it is open.
