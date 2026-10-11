"""
Fixed reference points for the SRI LANKA dashboard: the island and the seas within 150 km of it. Indian territory appears
only as a plain outline; nothing about India is plotted here, and no Indian deployment, facility or company is described.

Each point carries its status, date and source in `note` and `source`. Points marked "not verified in this build" come from
public knowledge that this build's searches did not confirm; they are shown, but treat them as unconfirmed. Positions for bases
are approximate. Reported events are claims; the notes say so. Sri Lanka has no nuclear power plant, no nuclear storage site,
no missile base and no space-launch site in the sources reviewed; none is plotted. Nothing here is a targeting product.
"""
import json
import os


def M(id, name, lat, lon, cat, note, source, aliases=()):
    al = list(aliases) or [name.split(":")[0].split(" (")[0].strip().lower()]
    return {"id": id, "name": name, "lat": lat, "lon": lon, "cat": cat, "note": note, "source": source, "aliases": al}


MARKERS = [
    # ---------- Capitals and principal towns ----------
    M("cap_kotte", "Sri Jayawardenepura Kotte (legislative capital; Army and Defence Headquarters complex at Akuregoda)", 6.8906, 79.9075, "capital",
      "Legislative capital. The Army Headquarters is housed in the Defence Headquarters Complex at Akuregoda; the Navy and Air Force headquarters are being moved to the same complex (Wikipedia, 2026).",
      "Wikipedia (Sri Lanka Army; Defence Headquarters Complex, 2026)", aliases=("kotte", "sri jayawardenepura kotte")),
    M("cap_colombo", "Colombo (commercial capital; Naval Headquarters; Port of Colombo)", 6.9271, 79.8612, "capital",
      "Commercial capital and the Sri Lanka Navy Headquarters at Flagstaff Street. Colombo Port, Colombo Port City and the Western Naval Command are here (Wikipedia, 2026).",
      "Wikipedia (List of active ships of the Sri Lanka Navy, 2026)", aliases=("colombo",)),
    M("cap_kandy", "Kandy (Central Province capital)", 7.2906, 80.6337, "capital", "Capital of the Central Province (public information).", "public information"),
    M("cap_galle", "Galle (Southern Province capital; Southern Naval Command)", 6.0329, 80.2168, "capital",
      "Southern Province capital; the Southern Naval Command headquarters (SLNS Dakshina) is in Galle (Wikipedia, 2026).", "Wikipedia (List of active ships of the Sri Lanka Navy, 2026)"),
    M("cap_jaffna", "Jaffna (Northern Province capital; Security Forces Headquarters Jaffna)", 9.6615, 80.0255, "capital",
      "Northern Province capital. Security Forces Headquarters Jaffna is at Palaly, and the Northern Naval Command at Karainagar (Wikipedia, 2026).", "Wikipedia (Security Forces Headquarters Jaffna; 2026)"),
    M("cap_trincomalee", "Trincomalee (Eastern Province capital; Eastern Naval Command)", 8.5874, 81.2152, "capital",
      "Eastern Province capital. The SLN Dockyard, the Eastern Naval Command and the Army's Security Forces Headquarters East are here (Wikipedia, 2026).", "Wikipedia (SLN Dockyard; Trincomalee Garrison, 2026)"),
    M("cap_batticaloa", "Batticaloa (Eastern Province; district centre)", 7.7102, 81.6924, "capital", "District centre on the east coast (public information).", "public information"),
    M("cap_hambantota", "Hambantota (Southern district centre)", 6.1240, 81.1185, "capital", "Southern district centre. The Hambantota port is nearby (see foreign-linked facilities).", "public information"),
    M("cap_matara", "Matara (Southern Province; undersea cable landing)", 5.9485, 80.5353, "capital", "Southern Province town where SEA-ME-WE 5 and 6 land (Wikipedia; Submarine Networks).", "Wikipedia (SEA-ME-WE 5; SEA-ME-WE 6)"),
    M("cap_kurunegala", "Kurunegala (North Western Province capital)", 7.4863, 80.3647, "capital", "North Western Province capital (public information).", "public information"),
    M("cap_anuradhapura", "Anuradhapura (North Central Province capital)", 8.3114, 80.4037, "capital", "North Central Province capital (public information).", "public information"),
    M("cap_puttalam", "Puttalam (North Western Province; district centre)", 8.0408, 79.8394, "capital", "District centre. The Lakvijaya coal power station is nearby (see energy).", "public information"),
    M("cap_mannar", "Mannar (Mannar Island; north-west coast)", 8.9810, 79.9044, "capital", "Town on Mannar Island on the north-west coast (public information).", "public information"),
    M("cap_vavuniya", "Vavuniya (Northern Province; district centre)", 8.7514, 80.4971, "capital", "District centre in the north. An air-surveillance squadron is listed here (see radar).", "public information"),
    M("cap_kilinochchi", "Kilinochchi (Northern Province; district centre)", 9.3803, 80.3770, "capital", "District centre; the Army's Security Forces Headquarters Kilinochchi is listed (not verified in this build).", "public information (not verified in this build)"),
    M("cap_mullaitivu", "Mullaitivu (Northern Province; district centre)", 9.2671, 80.8142, "capital", "District centre; the Army's Security Forces Headquarters Mullaitivu is listed (not verified in this build).", "public information (not verified in this build)"),
    M("cap_negombo", "Negombo (Western Province; next to Katunayake)", 7.2083, 79.8358, "capital", "Coastal town next to Bandaranaike International Airport and the Katunayake air base (public information).", "public information"),
    M("cap_diyatalawa", "Diyatalawa (Army training garrison)", 6.8101, 80.9585, "capital", "Army training garrison in the hills (Global Military, 2026). Position approximate.", "Global Military (2026)"),
    M("cap_badulla", "Badulla (Uva Province capital)", 6.9934, 81.0550, "capital", "Uva Province capital (public information).", "public information"),
    M("cap_ratnapura", "Ratnapura (Sabaragamuwa Province capital)", 6.6828, 80.3992, "capital", "Sabaragamuwa Province capital (public information).", "public information"),

    # ---------- Navy ----------
    M("slnd_trinco", "SLN Dockyard (Trincomalee): Eastern Naval Command headquarters and the largest naval base", 8.5820, 81.2270, "navy_base",
      "The largest naval base and a major shipyard of the Sri Lanka Navy. It hosts the Eastern Naval Command and the Naval and Maritime Academy (Wikipedia, 2026). Position approximate.",
      "Wikipedia (SLN Dockyard; List of active ships of the Sri Lanka Navy, 2026)", aliases=("slnd", "sln dockyard", "trincomalee naval base", "eastern naval command")),
    M("slnhq", "SLNS Parakrama (Flagstaff Street, Colombo): Sri Lanka Navy Headquarters", 6.9330, 79.8478, "navy_base",
      "Naval Headquarters (Wikipedia, 2026). Position approximate.", "Wikipedia (List of active ships of the Sri Lanka Navy, 2026)", aliases=("naval headquarters", "slns parakrama")),
    M("slnwest", "SLNS Rangalla (Colombo Harbour): Western Naval Command headquarters", 6.9480, 79.8420, "navy_base",
      "Western Naval Command headquarters at Colombo Harbour (Wikipedia, 2026). Position approximate.", "Wikipedia (List of active ships of the Sri Lanka Navy, 2026)", aliases=("slns rangalla", "western naval command")),
    M("slnsouth", "SLNS Dakshina (Galle): Southern Naval Command headquarters", 6.0268, 80.2178, "navy_base",
      "Southern Naval Command headquarters (Wikipedia, 2026). Position approximate.", "Wikipedia (List of active ships of the Sri Lanka Navy, 2026)", aliases=("slns dakshina", "southern naval command")),
    M("slnnorth", "SLNS Elara (Karainagar, Jaffna): Northern Naval Command headquarters", 9.7810, 79.8380, "navy_base",
      "Northern Naval Command headquarters (Wikipedia, 2026). Position approximate.", "Wikipedia (List of active ships of the Sri Lanka Navy, 2026)", aliases=("slns elara", "northern naval command", "karainagar")),
    M("slnuttara", "SLNS Uttara (Kankasanturai, Jaffna): Navy base", 9.8130, 80.0270, "navy_base",
      "Navy base at Kankasanturai near Jaffna (Wikipedia, 2026). Position approximate.", "Wikipedia (List of active ships of the Sri Lanka Navy, 2026)", aliases=("slns uttara", "kankasanturai")),
    M("slnthammanna", "SLNS Thammanna (Talaimannar): Navy base on the north-west coast", 9.1000, 79.7000, "navy_base",
      "Navy base at Talaimannar on Mannar Island (Wikipedia, 2026). Position approximate.", "Wikipedia (List of active ships of the Sri Lanka Navy, 2026)", aliases=("slns thammanna", "talaimannar")),
    M("slnvijaya", "SLNS Vijaya (Kalpitiya Fort, Puttalam): Navy base", 8.2300, 79.7600, "navy_base",
      "Navy base at Kalpitiya Fort (Wikipedia, 2026). Position approximate.", "Wikipedia (List of active ships of the Sri Lanka Navy, 2026)", aliases=("slns vijaya", "kalpitiya")),
    M("slnruhuna", "SLNS Ruhuna (Tangalle, Hambantota district): Navy base", 6.0240, 81.1250, "navy_base",
      "Navy base at Tangalle on the south coast (Wikipedia, 2026). Position approximate.", "Wikipedia (List of active ships of the Sri Lanka Navy, 2026)", aliases=("slns ruhuna", "tangalle")),
    M("welisara", "Welisara naval complex (Colombo district): Naval barracks, logistics and the Volunteer Naval Force headquarters", 7.0817, 79.9010, "navy_base",
      "SLNS Gemunu (naval barracks), SLNS Mahasen (logistics) and SLNS Lanka (Volunteer Naval Force headquarters) are here (Wikipedia, 2026). Position approximate.",
      "Wikipedia (List of active ships of the Sri Lanka Navy, 2026)", aliases=("welisara", "slns gemunu")),
    M("cn_sub_colombo", "Colombo port: two Chinese submarines called in 2014 (reported; boat type not verified)", 6.9440, 79.8440, "submarine_base",
      "Two Chinese submarines called at Colombo in 2014; press reports differ on the boats' type, which was not verified in this build. Sri Lanka has no submarine of its own in the sources reviewed.",
      "Borneo Post / Reuters (2017); Deccan Herald (2022)", aliases=("colombo submarine", "2014 submarine call")),

    # ---------- Air Force, air bases and radar squadrons ----------
    M("slaf_katunayake", "SLAF Base Katunayake (beside Bandaranaike International Airport): largest Air Force base", 7.1800, 79.8840, "air_base",
      "The largest air base of the Sri Lanka Air Force, with two lodger flying squadrons; its high-security zone adjoins the international airport (Wikipedia, 2026). Position approximate.",
      "Wikipedia (Bandaranaike Airport attack; SLAF Katunayake); airforce.lk (Oct 2026)", aliases=("katunayake", "slaf katunayake", "bandaranaike international airport")),
    M("slaf_ratmalana", "SLAF Base Ratmalana (Colombo district): Air Force Museum; former main international airport", 6.8219, 79.8861, "air_base",
      "Air Force base at the former Ratmalana international airport; the Air Force Museum is here (Wikipedia). Position approximate.",
      "Wikipedia (Ratmalana; Sri Lanka Air Force Museum)", aliases=("ratmalana", "slaf ratmalana")),
    M("slaf_chinabay", "SLAF China Bay (Trincomalee): Air Force Academy; air-surveillance and air-defence radar squadrons", 8.5330, 81.1800, "air_base",
      "The Air Force Academy and training base; 111 Air Surveillance Squadron and No. 6 Air Defence Radar Squadron operate here (migflug, 2026). Position approximate.",
      "migflug (2026); Wikipedia (List of Sri Lankan air force bases)", aliases=("china bay", "slaf china bay")),
    M("slaf_hingurakgoda", "SLAF Base Hingurakgoda (Polonnaruwa district): air-defence radar squadron and attack helicopters", 8.0170, 81.0480, "air_base",
      "No. 2 Air Defence Radar Squadron and No. 9 Attack Helicopter Squadron are based here (migflug, 2026; airforce.lk, Oct 2026). Position approximate.",
      "migflug (2026); airforce.lk (Oct 2026)", aliases=("hingurakgoda", "slaf hingurakgoda")),
    M("slaf_palaly", "SLAF Base Palaly (Jaffna): shared with Jaffna International Airport since 2019", 9.7930, 80.0660, "air_base",
      "Air Force base shared with Jaffna International Airport since 2019; the Army's Security Forces Headquarters Jaffna is at the Palaly Military Base (Wikipedia, 2026). Position approximate.",
      "Wikipedia (Security Forces Headquarters Jaffna; Sri Lanka Air Force, 2026)", aliases=("palaly", "slaf palaly")),
    M("slaf_mattala", "SLAF Station Mattala (Hambantota): declared open on 2 October 2026", 6.2870, 81.1240, "air_base",
      "The Commander of the Air Force declared the Mattala station open on 2 October 2026 (airforce.lk, Oct 2026). The civil airport it shares was built with Chinese financing, according to public reporting that was not re-verified in this build.",
      "airforce.lk (Oct 2026); public reporting (not re-verified in this build)", aliases=("mattala", "mattala rajapaksa international airport")),
    M("slaf_anuradhapura", "SLAF Base Anuradhapura (not verified in this build)", 8.3230, 80.4060, "air_base",
      "Listed among current Sri Lanka Air Force bases (Wikipedia list). Position approximate; not verified in this build.", "Wikipedia (List of Sri Lankan air force bases); not verified in this build"),
    M("slaf_vavuniya", "SLAF Base Vavuniya (not verified in this build)", 8.7540, 80.4980, "air_base",
      "Listed among current Sri Lanka Air Force bases, with a surveillance and radar squadron (migflug, 2026). Position approximate; not verified in this build.",
      "migflug (2026); not verified in this build"),
    M("slaf_koggala", "SLAF Base Koggala (Galle district) (not verified in this build)", 5.9800, 80.3300, "air_base",
      "Listed among current Sri Lanka Air Force bases (Wikipedia list). Position approximate; not verified in this build.", "Wikipedia (List of Sri Lankan air force bases); not verified in this build"),
    M("slaf_batticaloa", "SLAF Base Batticaloa (not verified in this build)", 7.7150, 81.6850, "air_base",
      "Listed among current Sri Lanka Air Force bases (Wikipedia list). Position approximate; not verified in this build.", "Wikipedia (List of Sri Lankan air force bases); not verified in this build"),
    M("slaf_sigiriya", "SLAF Base Sigiriya (not verified in this build)", 7.9580, 80.7600, "air_base",
      "Listed among current Sri Lanka Air Force bases (Wikipedia list). Position approximate; not verified in this build.", "Wikipedia (List of Sri Lankan air force bases); not verified in this build"),
    M("radar_chinabay", "Air-surveillance and air-defence radar squadrons, China Bay (Trincomalee)", 8.5330, 81.1815, "radar",
      "111 Air Surveillance Squadron and No. 6 Air Defence Radar Squadron (migflug, 2026). Radar types and suppliers are not described here. Position approximate.",
      "migflug (2026)", aliases=("china bay radar",)),
    M("radar_hingurakgoda", "Air-defence radar squadron, Hingurakgoda (Polonnaruwa)", 8.0170, 81.0500, "radar",
      "No. 2 Air Defence Radar Squadron (migflug, 2026). Radar types are not described here. Position approximate.",
      "migflug (2026)", aliases=("hingurakgoda radar",)),
    M("radar_vavuniya", "Air-surveillance radar squadron, Vavuniya (not verified in this build)", 8.7540, 80.4960, "radar",
      "Listed with the Vavuniya surveillance squadron (migflug, 2026). Position approximate; not verified in this build.", "migflug (2026); not verified in this build"),

    # ---------- Army ----------
    M("army_hq", "Army Headquarters, Defence Headquarters Complex (Akuregoda, Sri Jayawardenepura Kotte)", 6.8880, 79.9100, "cantonment",
      "The Army Headquarters is housed in the Defence Headquarters Complex at Akuregoda (Wikipedia, 2026). The complex also houses the Ministry of Defence and the Navy and Air Force headquarters as they move there. Position approximate.",
      "Wikipedia (Sri Lanka Army; Defence Headquarters Complex, 2026)", aliases=("army headquarters", "akuregoda")),
    M("sfhq_jaffna", "Security Forces Headquarters Jaffna (Palaly Military Base): 51, 52 and 55 Divisions", 9.7950, 80.0700, "cantonment",
      "Most senior of the regional Security Forces Headquarters; it commands 51 Division (Jaffna), 52 Division (Jaffna Peninsula) and 55 Division (Elephant Pass) (Wikipedia, 2026). Position approximate.",
      "Wikipedia (Security Forces Headquarters Jaffna; List of Sri Lanka Army formations, 2026)", aliases=("sfhq jaffna", "palaly military base")),
    M("elephant_pass", "Elephant Pass military base (Jaffna Peninsula): 55 Division", 9.6000, 80.2000, "cantonment",
      "A modern military base built in 1952; the army lost control of Elephant Pass in 2000 and later regained it; 55 Division is based here (Wikipedia, 2026). Position approximate.",
      "Wikipedia (Elephant Pass; 55 Division)", aliases=("elephant pass",)),
    M("sfhq_east", "Security Forces Headquarters East (Trincomalee): 22 Division and the Fort Frederick garrison", 8.5610, 81.2330, "cantonment",
      "The Army's eastern Security Forces Headquarters and 22 Division are in Trincomalee, alongside the Eastern Naval Command and the Air Force's Eastern Zonal Command (Wikipedia, 2026). Position approximate.",
      "Wikipedia (Trincomalee Garrison, 2026)", aliases=("sfhq east", "fort frederick")),
    M("panagoda", "11 Division (Panagoda Cantonment, Colombo district): defence of the capital", 6.8290, 79.9590, "cantonment",
      "Responsible for the defence of the capital (Wikipedia, 2026). Position approximate.", "Wikipedia (Sri Lanka Army; List of current Sri Lanka Army formations, 2026)", aliases=("panagoda", "11 division")),
    M("sfhq_mullaitivu", "Security Forces Headquarters Mullaitivu (not verified in this build)", 9.2671, 80.8142, "cantonment",
      "Listed among the regional Security Forces Headquarters. Position approximate; not verified in this build.", "Wikipedia (List of current Sri Lanka Army formations); not verified in this build"),
    M("sfhq_kilinochchi", "Security Forces Headquarters Kilinochchi (not verified in this build)", 9.3803, 80.3770, "cantonment",
      "Listed among the regional Security Forces Headquarters (57, 66 and 68 Divisions, per an older list). Position approximate; not verified in this build.",
      "Military history list (older); not verified in this build"),

    # ---------- Foreign-operated or foreign-linked strategic facilities (Chinese-linked) ----------
    M("hambantota_port", "Hambantota International Port: deep-water port on a 99-year lease to China Merchants Port Holdings", 6.1150, 81.1250, "foreign_base",
      "Opened in 2010. Under a 2017 debt-for-equity deal China Merchants Port Holdings holds a 99-year lease (about US$1.12bn), handed over in December 2017 (CSIS; Wikipedia). Sri Lanka said in 2017 that it would not be a military base for any country. A Chinese replenishment call by the tracking ship Yuan Wang 5 was made in August 2022, after Colombo asked for a deferral over security concerns (NBC News; ORF). Position approximate.",
      "CSIS (Game of Loans); Wikipedia (Hambantota International Port); Borneo Post / Reuters (2017); NBC News (2022); ORF (2024)",
      aliases=("hambantota", "hambantota port", "hambantota international port")),
    M("colombo_port_city", "Colombo Port City (CHEC): 269 hectares of reclaimed land, built from 2014", 6.9400, 79.8460, "foreign_base",
      "Chinese-developed special economic zone on reclaimed land beside Colombo Port. CHEC has invested about US$1.4bn; it committed a further US$300m in January 2026 (Daily Mirror, Jul 2026). Full completion is not expected before 2041 (Global Construction Review, 2024). Position approximate.",
      "Gulf News (May 2025); Global Construction Review (2024); Daily Mirror (Jul 2026)", aliases=("port city", "colombo port city")),
    M("colombo_south", "Colombo South Container Terminal (China Merchants Port Holdings)", 6.9340, 79.8480, "foreign_base",
      "Run by China Merchants Port Holdings, where throughput has grown strongly (The Asset, 2016). Position approximate.",
      "The Asset (2016); Wikipedia (China Merchants Port)", aliases=("colombo south container terminal",)),
    M("shiyan6_colombo", "Colombo port: research vessel Shi Yan 6 docked for replenishment (October 2023)", 6.9450, 79.8420, "foreign_base",
      "The Chinese research vessel Shi Yan 6 docked in Colombo for replenishment in October 2023. Sri Lanka had said it would not allow joint research without permission (ThePrint, Oct 2023; ORF, Jan 2024). Position approximate.",
      "ThePrint (Oct 2023); ORF (Jan 2024)", aliases=("shi yan 6",)),

    # ---------- Defence industry ----------
    M("colombo_dockyard", "Colombo Dockyard PLC (Colombo Harbour): commercial shipyard that built the Colombo-class vessels for the Navy", 6.9460, 79.8430, "defense_industry",
      "Built the Colombo-class ships for the Sri Lanka Navy (Wikipedia, 2026). Ownership is not described in this build. Position approximate.",
      "Wikipedia (List of active ships of the Sri Lanka Navy, 2026)", aliases=("colombo dockyard",)),

    # ---------- Energy, fuel, pipelines and subsea cables ----------
    M("trinco_tank_farm", "Trincomalee oil tank farm (China Bay): 99 tanks; Ceylon Petroleum Corporation owns 24", 8.5330, 81.1950, "pipeline",
      "The Second World War-era tank farm has 99 tanks. As of August 2026, two CPC tanks had been renovated and tenders called for three more; an RFP for 29 tanks is ready, with a target of two years (CPC, Aug 2026). Other tanks are operated under separate arrangements (not described here). Position approximate.",
      "Tank Storage Magazine (Aug 2026); The Morning (2026); Sunday Times (May 2026)", aliases=("trincomalee oil tank farm", "china bay tank farm", "trinco tank farm")),
    M("sapugaskanda", "Sapugaskanda oil refinery (Ceylon Petroleum Corporation): 60 years old; expansion tender pending (approximate position)", 6.9550, 79.9180, "pipeline",
      "CPC sought consultancy bids to value the refinery before tenders for its long-delayed expansion; bids closed on 15 June 2026 (Sunday Times, May 2026). Position approximate.",
      "Sunday Times (May 2026)", aliases=("sapugaskanda",)),
    M("planned_pipeline", "Planned fuel pipeline, Colombo Port to Kolonnawa (tender; Rs 12.78 bn; CPC)", 6.9320, 79.8880, "pipeline",
      "CPC's international tender for the pipeline drew several bidders (Sunday Times, May 2026). The route is planned, not built. Position approximate.",
      "Sunday Times (May 2026)", aliases=("colombo kolonnawa pipeline",)),
    M("sinopec_refinery", "Proposed Sinopec refinery, Hambantota port area (delayed; not built)", 6.1000, 81.1300, "pipeline",
      "Delayed by disputes over equity, tax concessions, market access and land allocation (IANS, June 2026). An environmental impact study was ordered. Position approximate.",
      "IANS (June 2026)", aliases=("sinopec hambantota", "hambantota refinery")),
    M("lakvijaya", "Lakvijaya coal power station (Puttalam; Ceylon Electricity Board)", 8.0900, 79.7700, "pipeline",
      "Commissioned in 2014 at about US$1.35bn. A Chinese contractor, CMEC, repaired it after a 2014 cooling-system outage (Wikipedia, Ceylon Electricity Board). The Ceylon Electricity Board was dissolved on 9 March 2026 (Wikipedia). Position approximate.",
      "Wikipedia (Ceylon Electricity Board; Lakvijaya Power Station)", aliases=("lakvijaya", "norochcholai")),
    M("cable_colombo", "Colombo cable landing stations: SEA-ME-WE 4 and Dhiraagu-SLT (Sri Lanka Telecom); FALCON (Lanka Bell)", 6.9320, 79.8480, "pipeline",
      "Colombo's landing points carry SEA-ME-WE 4 and the Dhiraagu-SLT cable (Sri Lanka Telecom) and FALCON (Lanka Bell) (Submarine Networks; TeleGeography, 2026). Position approximate.",
      "Submarine Networks (Sri Lanka); TeleGeography (2026); Wikipedia (SEA-ME-WE 4)", aliases=("colombo cable", "colombo cable landing station")),
    M("cable_mount_lavinia", "Mount Lavinia cable landing station (Sri Lanka Telecom)", 6.8330, 79.8620, "pipeline",
      "Sri Lanka Telecom landing station on the south edge of Colombo (Submarine Networks). Position approximate.",
      "Submarine Networks (Sri Lanka)", aliases=("mount lavinia cable",)),
    M("cable_matara", "Matara cable landing station: SEA-ME-WE 5 and SEA-ME-WE 6 (Sri Lanka Telecom)", 5.9485, 80.5353, "pipeline",
      "Both cables land at Matara on the south coast (Wikipedia, SEA-ME-WE 5 and 6). Position approximate.",
      "Wikipedia (SEA-ME-WE 5; SEA-ME-WE 6)", aliases=("matara cable",)),

    # ---------- Cyber and data ----------
    M("cert_cc", "Sri Lanka CERT | Coordination Centre (BMICH, Colombo 7): national CERT under the ICT Agency", 6.9065, 79.8715, "cyber_hub",
      "The national computer emergency response team, set up under the ICT Agency of Sri Lanka. It investigated the 2019 attacks on government and institutional websites with the Signals Corps (Wikipedia; cert.gov.lk).",
      "cert.gov.lk; Wikipedia (2019 cyberattacks on Sri Lanka)", aliases=("cert", "sri lanka cert", "slcert")),
    M("slt_datacentre", "SLT National Data Centre (Pitipana, Colombo district) (approximate position)", 6.8400, 79.9700, "cyber_hub",
      "Sri Lanka Telecom's national data centre (Submarine Networks, 2024). Position approximate.",
      "Submarine Networks (Sri Lanka, 2024)", aliases=("pitipana", "slt data centre")),

    # ---------- Chokepoints and sea lanes ----------
    M("palk_strait", "Palk Strait: shallow strait on Sri Lanka's north coast (not verified in this build)", 9.5500, 79.8500, "chokepoint",
      "Shallow waters limit navigation for deep-draft ships (general navigation information; not verified in this build).",
      "public information (not verified in this build)", aliases=("palk strait",)),
    M("gulf_mannar", "Gulf of Mannar: shallow sea on the north-west coast (not verified in this build)", 8.6000, 79.2000, "chokepoint",
      "Shallow sea area on the north-west coast (public information; not verified in this build).",
      "public information (not verified in this build)", aliases=("gulf of mannar",)),
    M("southern_lanes", "Southern sea lanes: east-west shipping passes south of the island", 5.5000, 80.6000, "chokepoint",
      "Sea lanes passing south of the island carry large shares of energy shipments and container traffic between the Middle East and Asia (Colombo Telegraph, 2026). Colombo handled 8.29 million TEU in 2025, a record (Colombo Telegraph, 2026).",
      "Colombo Telegraph (2026)", aliases=("southern sea lanes",)),
]

_IGNORE = ()

for _m in MARKERS:
    if _m["id"] == "cap_hambantota":
        _m["aliases"] = ["hambantota district", "hambantota town"]
    if _m["id"] == "hambantota_port":
        _m["aliases"] = ["hambantota port", "hambantota international port", "china merchants hambantota"]
