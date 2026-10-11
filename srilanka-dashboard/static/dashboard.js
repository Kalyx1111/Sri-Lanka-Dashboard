
(function(){
  "use strict";

  const PROJ = {"type": "laea", "lam0": 1.4097555122983731, "phi0": 0.1374735550670277, "sinp0": 0.13704094577313328, "cosp0": 0.9905653835974711, "n": 0, "F": 0, "rho0": 0, "scale": 14787.706051355995, "translate": [650.0000000000017, 866.1240809929507], "width": 1300, "height": 1731};
  const HEADING_KEYS = ["geo", "milops", "arms", "naval", "scs", "air", "space", "tech", "cyber", "econ", "mss", "social", "wellbeing", "hazard"];
  const SEED_DATA = {"updated_at": "offline-snapshot", "items_by_category": {"geo": [{"category": "geo", "label": "Hambantota port: a 99-year lease to China Merchants Port Holdings (2017)", "text": "Sri Lanka leased a controlling stake in Hambantota International Port to China Merchants Port Holdings on a 99-year lease in 2017, after it could not repay Chinese loans. The port was handed over in December 2017. The lease is widely cited in the debate over Chinese lending.", "source": "CSIS (Game of Loans); Wikipedia (Hambantota International Port)", "date": "2017", "url": null, "connector": "reference"}, {"category": "geo", "label": "Chinese defence attaché call on the Army Commander (16 July 2026)", "text": "The Chinese Defence Attaché and the Chinese Naval Attaché paid a courtesy call on the Army Commander at Army Headquarters on 16 July 2026. This is routine defence diplomacy and describes no deployment.", "source": "Sri Lanka Army (army.lk, Jul 2026)", "date": "Jul 2026", "url": null, "connector": "reference"}, {"category": "geo", "label": "Lakvijaya coal station: a Chinese contractor repaired it after a 2014 outage", "text": "The Lakvijaya coal power station at Puttalam was commissioned in 2014 at about US$1.35bn. After a 2014 cooling-system outage, a Chinese contractor (CMEC) repaired it. The Ceylon Electricity Board was dissolved on 9 March 2026 under the Sri Lanka Electricity Act.", "source": "Wikipedia (Ceylon Electricity Board)", "date": "2014-2026", "url": null, "connector": "reference"}], "naval": [{"category": "naval", "label": "Hambantota: no military base for any country, the government said in 2017", "text": "The Ports Minister said in 2017 that Hambantota would be a purely commercial port, and that routine port calls by foreign navies would be regulated by Sri Lanka, as in Colombo. The government says the port operates under Sri Lankan law.", "source": "Reuters (via Borneo Post, 30 Jul 2017)", "date": "Jul 2017", "url": null, "connector": "reference"}, {"category": "naval", "label": "Two Chinese submarines called at Colombo in 2014 (reported)", "text": "Two Chinese submarines called at Colombo in 2014, during the last year of the former president's term. Press reports differ on the type of boats, and this build did not verify them.", "source": "Reuters (via Borneo Post, 2017); Deccan Herald (2022)", "date": "2014", "url": null, "connector": "reference"}, {"category": "naval", "label": "Sri Lanka Navy commands: Eastern at the SLN Dockyard, Trincomalee; Western, Southern and Northern at Colombo, Galle and Karainagar", "text": "The Navy's headquarters is at Flagstaff Street in Colombo. Its Western Naval Command is at Colombo Harbour, Southern at Galle, Northern at Karainagar in Jaffna and Eastern at the SLN Dockyard in Trincomalee, which is the largest naval base. The Naval and Maritime Academy is at the dockyard.", "source": "Wikipedia (List of active ships of the Sri Lanka Navy; SLN Dockyard, 2026)", "date": "2026", "url": null, "connector": "reference"}], "scs": [{"category": "scs", "label": "Chinese research and tracking ships: Yuan Wang 5 (2022), Shi Yan 6 (2023), and a moratorium from 1 January 2024", "text": "The tracking ship Yuan Wang 5 berthed at Hambantota for replenishment in August 2022, after Colombo asked for a deferral over security concerns. Shi Yan 6 docked at Colombo for replenishment in October 2023. Sri Lanka imposed a one-year moratorium on foreign research vessels from 1 January 2024 and turned away Xiang Yang Hong 3. In 2026 the government was still finalising a standard operating procedure for foreign research vessels.", "source": "NBC News (2022); ThePrint (Oct 2023); ORF (Jan 2024); Maritime Executive (Jan 2024); Sunday Times (Mar 2026)", "date": "2022-2026", "url": null, "connector": "reference"}, {"category": "scs", "label": "Southern sea lanes carry energy and container traffic; Colombo handled 8.29 million TEU in 2025", "text": "Sea lanes passing south of Sri Lanka carry a large share of energy shipments and container traffic between the Middle East and Asia. The Port of Colombo handled 8.29 million TEUs in 2025, the highest on record. During the 2026 Hormuz crisis, Colombo was among the ports reporting congestion as ships were diverted.", "source": "Colombo Telegraph (2026); Seavantage (2026)", "date": "2025-2026", "url": null, "connector": "reference"}, {"category": "scs", "label": "Undersea cables: landing points at Colombo, Mount Lavinia and Matara; SEA-ME-WE 5 and 6 land at Matara", "text": "Sri Lanka has landing stations at Colombo (SEA-ME-WE 4, the Dhiraagu-SLT cable and FALCON), at Mount Lavinia (Sri Lanka Telecom) and at Matara (SEA-ME-WE 5 and 6). Sri Lanka Telecom is the national backbone network provider.", "source": "Submarine Networks (Sri Lanka); Wikipedia (SEA-ME-WE 4, 5 and 6)", "date": "2026", "url": null, "connector": "reference"}, {"category": "scs", "label": "Palk Strait and Gulf of Mannar: shallow waters on the north coast (general navigation information)", "text": "The Palk Strait and the Gulf of Mannar are shallow, which limits the movement of deep-draft ships. This is general navigation information and was not verified in this build.", "source": "Public information (not verified in this build)", "date": "2026", "url": null, "connector": "reference"}], "econ": [{"category": "econ", "label": "Colombo Port City: 269 hectares of reclaimed land; about US$1.4bn invested; a further US$300m committed (January 2026)", "text": "The Colombo Port City, a special economic zone on 269 hectares of reclaimed land beside Colombo Port, is being built by CHEC, a Chinese company. CHEC has invested about US$1.4bn. It confirmed a further US$300m in January 2026. Full completion is not expected before 2041.", "source": "Daily Mirror (Jul 2026); Gulf News (May 2025); Global Construction Review (2024)", "date": "2014-2041", "url": null, "connector": "reference"}, {"category": "econ", "label": "Sinopec refinery at Hambantota: still proposed; delayed over equity, tax, land and market access (June 2026)", "text": "A Sinopec refinery planned beside Hambantota port has been delayed by disputes over equity, tax concessions, market access and land allocation. The Central Environment Authority has issued terms of reference for an environmental impact study.", "source": "IANS (June 2026)", "date": "Jun 2026", "url": null, "connector": "reference"}, {"category": "econ", "label": "Trincomalee oil tank farm: 99 tanks; the Ceylon Petroleum Corporation renovates 29 more", "text": "The Trincomalee oil tank farm at China Bay has 99 tanks, and the Ceylon Petroleum Corporation owns 24. As of August 2026, two had been renovated and tenders had been called for three more. A ready request for proposals covers 29 tanks, with a two-year target. Other tanks are operated under separate arrangements, which this dashboard does not describe.", "source": "Tank Storage Magazine (Aug 2026); The Morning (2026)", "date": "Aug 2026", "url": null, "connector": "reference"}, {"category": "econ", "label": "Sapugaskanda refinery: 60 years old; expansion tender pending; a Rs 12.78 bn fuel pipeline tendered", "text": "The Ceylon Petroleum Corporation sought proposals to value its 60-year-old Sapugaskanda refinery before tenders for a long-delayed expansion. Bids closed on 15 June 2026. The corporation has also tendered a fuel pipeline from Colombo Port to Kolonnawa, valued at Rs 12.78 bn.", "source": "Sunday Times (May 2026)", "date": "May 2026", "url": null, "connector": "reference"}, {"category": "econ", "label": "The Foreign Minister calls the Trincomalee tank-farm redevelopment the long-term answer to the 2026 fuel shortage", "text": "The Foreign Minister described the redevelopment of Trincomalee's oil tank farms as the only credible long-term answer to the energy crisis caused by the conflict in West Asia.", "source": "Tamil Guardian (23 Mar 2026)", "date": "Mar 2026", "url": null, "connector": "reference"}], "air": [{"category": "air", "label": "Mattala Air Force station declared open (2 October 2026)", "text": "The Commander of the Air Force declared the Air Force station at Mattala open on 2 October 2026, under its inaugural commanding officer.", "source": "airforce.lk (Oct 2026)", "date": "Oct 2026", "url": null, "connector": "reference"}, {"category": "air", "label": "Air-surveillance and air-defence radar squadrons at China Bay, Hingurakgoda and Vavuniya", "text": "The Air Force operates air-surveillance and air-defence radar squadrons at China Bay (111 Air Surveillance Squadron and No. 6 Air Defence Radar Squadron), at Hingurakgoda (No. 2 Air Defence Radar Squadron) and at Vavuniya. Radar types and suppliers are not described in this dashboard.", "source": "migflug (2026)", "date": "2026", "url": null, "connector": "reference"}, {"category": "air", "label": "SLAF Katunayake: the largest air base, beside Bandaranaike International Airport; attacked in 2001", "text": "SLAF Katunayake is the Air Force's largest base, with two flying squadrons. Its high-security zone overlooks the runway shared with the international airport. The base and the airport were attacked in July 2001.", "source": "Wikipedia (Bandaranaike Airport attack; SLAF Katunayake)", "date": "2001", "url": null, "connector": "reference"}], "milops": [{"category": "milops", "label": "Army Headquarters housed in the Defence Headquarters Complex at Akuregoda", "text": "The Army Headquarters is housed in the Defence Headquarters Complex at Akuregoda, Sri Jayawardenepura Kotte. The complex houses the armed forces' headquarters and the Ministry of Defence as they move there from Colombo.", "source": "Wikipedia (Sri Lanka Army; Defence Headquarters Complex, 2026)", "date": "2026", "url": null, "connector": "reference"}, {"category": "milops", "label": "Army divisions: Jaffna's headquarters at Palaly commands 51, 52 and 55 Divisions; 11 Division defends Colombo", "text": "Except for 11 Division at Panagoda, which defends the capital, Army divisions and brigades are deployed in the Northern and Eastern provinces under regional Security Forces Headquarters. The Jaffna headquarters, at Palaly, commands 51, 52 and 55 Divisions, and 55 Division is based at Elephant Pass.", "source": "Wikipedia (Sri Lanka Army; Security Forces Headquarters Jaffna, 2026)", "date": "2026", "url": null, "connector": "reference"}, {"category": "milops", "label": "Security Forces Headquarters East at Trincomalee, with 22 Division", "text": "The Army's Security Forces Headquarters East and 22 Division are in Trincomalee, alongside the Eastern Naval Command and the Air Force's Eastern Zonal Command.", "source": "Wikipedia (Trincomalee Garrison, 2026)", "date": "2026", "url": null, "connector": "reference"}], "arms": [{"category": "arms", "label": "No nuclear power plant: five candidate sites identified for a first plant (IAEA review, July 2025)", "text": "Sri Lanka has identified five candidate sites for a first nuclear power plant, drafted a nuclear law and set up a procurement structure, according to an IAEA follow-up review mission (14-18 July 2025). The sites are not published here.", "source": "IAEA press release (Jul 2025); NewsFirst (Jul 2025); Nuclear Engineering International", "date": "Jul 2025", "url": null, "connector": "reference"}, {"category": "arms", "label": "The long-term electricity plan keeps nuclear as an option: a 600 MWe unit after 2040 is one scenario", "text": "The Ceylon Electricity Board's long-term plan includes nuclear power as an option. One scenario has a 600 MWe unit starting after 2040, and the plan notes that a single unit above 600 MWe would be hard for the grid to absorb. Small reactors could suit the country once they are proven.", "source": "World Nuclear Association (Jan 2026); Nuclear Engineering International (2025)", "date": "2025-2026", "url": null, "connector": "reference"}, {"category": "arms", "label": "No radioactive-waste repository: waste management still to be developed (IAEA, 2025)", "text": "The IAEA review said radioactive waste management needs further development. The energy minister has said that disposal and emergency procedures are being prepared. This dashboard plots no nuclear storage site for Sri Lanka.", "source": "IAEA (Jul 2025); EconomyNext (minister's statement)", "date": "2025", "url": null, "connector": "reference"}], "space": [{"category": "space", "label": "No space-launch facility and no missile base are listed in Sri Lanka in the sources reviewed", "text": "The sources reviewed for this build list no space-launch facility and no missile base in Sri Lanka, so none is plotted. The Chinese tracking ship that berthed at Hambantota in 2022 is described above as a visiting vessel, not a base.", "source": "Sources reviewed for this build (public information)", "date": "2026", "url": null, "connector": "reference"}], "cyber": [{"category": "cyber", "label": "The national CERT: a Coordination Centre at BMICH, Colombo, under the ICT Agency", "text": "The Sri Lanka CERT Coordination Centre, based at BMICH in Colombo, is the country's national CERT under the ICT Agency. In 2019, attacks on government and institutional websites were investigated by the CERT with the Signals Corps.", "source": "cert.gov.lk; Wikipedia (2019 cyberattacks on Sri Lanka)", "date": "2019-2026", "url": null, "connector": "reference"}], "social": [{"category": "social", "label": "The 2017 Hambantota sale: unions opposed it; the government used laws against industrial action", "text": "Trade unions opposed the 2017 sale of Hambantota port, and the government used laws against industrial action to stop a strike against the deal.", "source": "Reuters (via Borneo Post, 30 Jul 2017)", "date": "Jul 2017", "url": null, "connector": "reference"}], "wellbeing": [{"category": "wellbeing", "label": "World Happiness Report 2026: Sri Lanka's rank not verified in this build", "text": "The annual report ranks countries for wellbeing. Sri Lanka's rank was not verified in this build; check the report directly.", "source": "World Happiness Report (annual); not verified in this build", "date": "Mar 2026", "url": null, "connector": "reference"}], "darkweb": [{"category": "darkweb", "label": "Ransomware claims for Sri Lanka are group claims, not confirmed victims", "text": "The Ransomware.live feed filtered to Sri Lanka's country code lists claims made by groups on their own leak sites. Each claim is labelled unverified.", "source": "Ransomware.live (v2 feed)", "date": "live", "url": null, "connector": "reference"}]}, "markers": [{"id": "cap_kotte", "name": "Sri Jayawardenepura Kotte (legislative capital; Army and Defence Headquarters complex at Akuregoda)", "lat": 6.8906, "lon": 79.9075, "cat": "capital", "note": "Legislative capital. The Army Headquarters is housed in the Defence Headquarters Complex at Akuregoda; the Navy and Air Force headquarters are being moved to the same complex (Wikipedia, 2026).", "source": "Wikipedia (Sri Lanka Army; Defence Headquarters Complex, 2026)", "date": "", "linked_items": []}, {"id": "cap_colombo", "name": "Colombo (commercial capital; Naval Headquarters; Port of Colombo)", "lat": 6.9271, "lon": 79.8612, "cat": "capital", "note": "Commercial capital and the Sri Lanka Navy Headquarters at Flagstaff Street. Colombo Port, Colombo Port City and the Western Naval Command are here (Wikipedia, 2026).", "source": "Wikipedia (List of active ships of the Sri Lanka Navy, 2026)", "date": "", "linked_items": []}, {"id": "cap_kandy", "name": "Kandy (Central Province capital)", "lat": 7.2906, "lon": 80.6337, "cat": "capital", "note": "Capital of the Central Province (public information).", "source": "public information", "date": "", "linked_items": []}, {"id": "cap_galle", "name": "Galle (Southern Province capital; Southern Naval Command)", "lat": 6.0329, "lon": 80.2168, "cat": "capital", "note": "Southern Province capital; the Southern Naval Command headquarters (SLNS Dakshina) is in Galle (Wikipedia, 2026).", "source": "Wikipedia (List of active ships of the Sri Lanka Navy, 2026)", "date": "", "linked_items": []}, {"id": "cap_jaffna", "name": "Jaffna (Northern Province capital; Security Forces Headquarters Jaffna)", "lat": 9.6615, "lon": 80.0255, "cat": "capital", "note": "Northern Province capital. Security Forces Headquarters Jaffna is at Palaly, and the Northern Naval Command at Karainagar (Wikipedia, 2026).", "source": "Wikipedia (Security Forces Headquarters Jaffna; 2026)", "date": "", "linked_items": []}, {"id": "cap_trincomalee", "name": "Trincomalee (Eastern Province capital; Eastern Naval Command)", "lat": 8.5874, "lon": 81.2152, "cat": "capital", "note": "Eastern Province capital. The SLN Dockyard, the Eastern Naval Command and the Army's Security Forces Headquarters East are here (Wikipedia, 2026).", "source": "Wikipedia (SLN Dockyard; Trincomalee Garrison, 2026)", "date": "", "linked_items": []}, {"id": "cap_batticaloa", "name": "Batticaloa (Eastern Province; district centre)", "lat": 7.7102, "lon": 81.6924, "cat": "capital", "note": "District centre on the east coast (public information).", "source": "public information", "date": "", "linked_items": []}, {"id": "cap_hambantota", "name": "Hambantota (Southern district centre)", "lat": 6.124, "lon": 81.1185, "cat": "capital", "note": "Southern district centre. The Hambantota port is nearby (see foreign-linked facilities).", "source": "public information", "date": "", "linked_items": []}, {"id": "cap_matara", "name": "Matara (Southern Province; undersea cable landing)", "lat": 5.9485, "lon": 80.5353, "cat": "capital", "note": "Southern Province town where SEA-ME-WE 5 and 6 land (Wikipedia; Submarine Networks).", "source": "Wikipedia (SEA-ME-WE 5; SEA-ME-WE 6)", "date": "", "linked_items": []}, {"id": "cap_kurunegala", "name": "Kurunegala (North Western Province capital)", "lat": 7.4863, "lon": 80.3647, "cat": "capital", "note": "North Western Province capital (public information).", "source": "public information", "date": "", "linked_items": []}, {"id": "cap_anuradhapura", "name": "Anuradhapura (North Central Province capital)", "lat": 8.3114, "lon": 80.4037, "cat": "capital", "note": "North Central Province capital (public information).", "source": "public information", "date": "", "linked_items": []}, {"id": "cap_puttalam", "name": "Puttalam (North Western Province; district centre)", "lat": 8.0408, "lon": 79.8394, "cat": "capital", "note": "District centre. The Lakvijaya coal power station is nearby (see energy).", "source": "public information", "date": "", "linked_items": []}, {"id": "cap_mannar", "name": "Mannar (Mannar Island; north-west coast)", "lat": 8.981, "lon": 79.9044, "cat": "capital", "note": "Town on Mannar Island on the north-west coast (public information).", "source": "public information", "date": "", "linked_items": []}, {"id": "cap_vavuniya", "name": "Vavuniya (Northern Province; district centre)", "lat": 8.7514, "lon": 80.4971, "cat": "capital", "note": "District centre in the north. An air-surveillance squadron is listed here (see radar).", "source": "public information", "date": "", "linked_items": []}, {"id": "cap_kilinochchi", "name": "Kilinochchi (Northern Province; district centre)", "lat": 9.3803, "lon": 80.377, "cat": "capital", "note": "District centre; the Army's Security Forces Headquarters Kilinochchi is listed (not verified in this build).", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "cap_mullaitivu", "name": "Mullaitivu (Northern Province; district centre)", "lat": 9.2671, "lon": 80.8142, "cat": "capital", "note": "District centre; the Army's Security Forces Headquarters Mullaitivu is listed (not verified in this build).", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "cap_negombo", "name": "Negombo (Western Province; next to Katunayake)", "lat": 7.2083, "lon": 79.8358, "cat": "capital", "note": "Coastal town next to Bandaranaike International Airport and the Katunayake air base (public information).", "source": "public information", "date": "", "linked_items": []}, {"id": "cap_diyatalawa", "name": "Diyatalawa (Army training garrison)", "lat": 6.8101, "lon": 80.9585, "cat": "capital", "note": "Army training garrison in the hills (Global Military, 2026). Position approximate.", "source": "Global Military (2026)", "date": "", "linked_items": []}, {"id": "cap_badulla", "name": "Badulla (Uva Province capital)", "lat": 6.9934, "lon": 81.055, "cat": "capital", "note": "Uva Province capital (public information).", "source": "public information", "date": "", "linked_items": []}, {"id": "cap_ratnapura", "name": "Ratnapura (Sabaragamuwa Province capital)", "lat": 6.6828, "lon": 80.3992, "cat": "capital", "note": "Sabaragamuwa Province capital (public information).", "source": "public information", "date": "", "linked_items": []}, {"id": "slnd_trinco", "name": "SLN Dockyard (Trincomalee): Eastern Naval Command headquarters and the largest naval base", "lat": 8.582, "lon": 81.227, "cat": "navy_base", "note": "The largest naval base and a major shipyard of the Sri Lanka Navy. It hosts the Eastern Naval Command and the Naval and Maritime Academy (Wikipedia, 2026). Position approximate.", "source": "Wikipedia (SLN Dockyard; List of active ships of the Sri Lanka Navy, 2026)", "date": "", "linked_items": []}, {"id": "slnhq", "name": "SLNS Parakrama (Flagstaff Street, Colombo): Sri Lanka Navy Headquarters", "lat": 6.933, "lon": 79.8478, "cat": "navy_base", "note": "Naval Headquarters (Wikipedia, 2026). Position approximate.", "source": "Wikipedia (List of active ships of the Sri Lanka Navy, 2026)", "date": "", "linked_items": []}, {"id": "slnwest", "name": "SLNS Rangalla (Colombo Harbour): Western Naval Command headquarters", "lat": 6.948, "lon": 79.842, "cat": "navy_base", "note": "Western Naval Command headquarters at Colombo Harbour (Wikipedia, 2026). Position approximate.", "source": "Wikipedia (List of active ships of the Sri Lanka Navy, 2026)", "date": "", "linked_items": []}, {"id": "slnsouth", "name": "SLNS Dakshina (Galle): Southern Naval Command headquarters", "lat": 6.0268, "lon": 80.2178, "cat": "navy_base", "note": "Southern Naval Command headquarters (Wikipedia, 2026). Position approximate.", "source": "Wikipedia (List of active ships of the Sri Lanka Navy, 2026)", "date": "", "linked_items": []}, {"id": "slnnorth", "name": "SLNS Elara (Karainagar, Jaffna): Northern Naval Command headquarters", "lat": 9.781, "lon": 79.838, "cat": "navy_base", "note": "Northern Naval Command headquarters (Wikipedia, 2026). Position approximate.", "source": "Wikipedia (List of active ships of the Sri Lanka Navy, 2026)", "date": "", "linked_items": []}, {"id": "slnuttara", "name": "SLNS Uttara (Kankasanturai, Jaffna): Navy base", "lat": 9.813, "lon": 80.027, "cat": "navy_base", "note": "Navy base at Kankasanturai near Jaffna (Wikipedia, 2026). Position approximate.", "source": "Wikipedia (List of active ships of the Sri Lanka Navy, 2026)", "date": "", "linked_items": []}, {"id": "slnthammanna", "name": "SLNS Thammanna (Talaimannar): Navy base on the north-west coast", "lat": 9.1, "lon": 79.7, "cat": "navy_base", "note": "Navy base at Talaimannar on Mannar Island (Wikipedia, 2026). Position approximate.", "source": "Wikipedia (List of active ships of the Sri Lanka Navy, 2026)", "date": "", "linked_items": []}, {"id": "slnvijaya", "name": "SLNS Vijaya (Kalpitiya Fort, Puttalam): Navy base", "lat": 8.23, "lon": 79.76, "cat": "navy_base", "note": "Navy base at Kalpitiya Fort (Wikipedia, 2026). Position approximate.", "source": "Wikipedia (List of active ships of the Sri Lanka Navy, 2026)", "date": "", "linked_items": []}, {"id": "slnruhuna", "name": "SLNS Ruhuna (Tangalle, Hambantota district): Navy base", "lat": 6.024, "lon": 81.125, "cat": "navy_base", "note": "Navy base at Tangalle on the south coast (Wikipedia, 2026). Position approximate.", "source": "Wikipedia (List of active ships of the Sri Lanka Navy, 2026)", "date": "", "linked_items": []}, {"id": "welisara", "name": "Welisara naval complex (Colombo district): Naval barracks, logistics and the Volunteer Naval Force headquarters", "lat": 7.0817, "lon": 79.901, "cat": "navy_base", "note": "SLNS Gemunu (naval barracks), SLNS Mahasen (logistics) and SLNS Lanka (Volunteer Naval Force headquarters) are here (Wikipedia, 2026). Position approximate.", "source": "Wikipedia (List of active ships of the Sri Lanka Navy, 2026)", "date": "", "linked_items": []}, {"id": "cn_sub_colombo", "name": "Colombo port: two Chinese submarines called in 2014 (reported; boat type not verified)", "lat": 6.944, "lon": 79.844, "cat": "submarine_base", "note": "Two Chinese submarines called at Colombo in 2014; press reports differ on the boats' type, which was not verified in this build. Sri Lanka has no submarine of its own in the sources reviewed.", "source": "Borneo Post / Reuters (2017); Deccan Herald (2022)", "date": "", "linked_items": []}, {"id": "slaf_katunayake", "name": "SLAF Base Katunayake (beside Bandaranaike International Airport): largest Air Force base", "lat": 7.18, "lon": 79.884, "cat": "air_base", "note": "The largest air base of the Sri Lanka Air Force, with two lodger flying squadrons; its high-security zone adjoins the international airport (Wikipedia, 2026). Position approximate.", "source": "Wikipedia (Bandaranaike Airport attack; SLAF Katunayake); airforce.lk (Oct 2026)", "date": "", "linked_items": []}, {"id": "slaf_ratmalana", "name": "SLAF Base Ratmalana (Colombo district): Air Force Museum; former main international airport", "lat": 6.8219, "lon": 79.8861, "cat": "air_base", "note": "Air Force base at the former Ratmalana international airport; the Air Force Museum is here (Wikipedia). Position approximate.", "source": "Wikipedia (Ratmalana; Sri Lanka Air Force Museum)", "date": "", "linked_items": []}, {"id": "slaf_chinabay", "name": "SLAF China Bay (Trincomalee): Air Force Academy; air-surveillance and air-defence radar squadrons", "lat": 8.533, "lon": 81.18, "cat": "air_base", "note": "The Air Force Academy and training base; 111 Air Surveillance Squadron and No. 6 Air Defence Radar Squadron operate here (migflug, 2026). Position approximate.", "source": "migflug (2026); Wikipedia (List of Sri Lankan air force bases)", "date": "", "linked_items": []}, {"id": "slaf_hingurakgoda", "name": "SLAF Base Hingurakgoda (Polonnaruwa district): air-defence radar squadron and attack helicopters", "lat": 8.017, "lon": 81.048, "cat": "air_base", "note": "No. 2 Air Defence Radar Squadron and No. 9 Attack Helicopter Squadron are based here (migflug, 2026; airforce.lk, Oct 2026). Position approximate.", "source": "migflug (2026); airforce.lk (Oct 2026)", "date": "", "linked_items": []}, {"id": "slaf_palaly", "name": "SLAF Base Palaly (Jaffna): shared with Jaffna International Airport since 2019", "lat": 9.793, "lon": 80.066, "cat": "air_base", "note": "Air Force base shared with Jaffna International Airport since 2019; the Army's Security Forces Headquarters Jaffna is at the Palaly Military Base (Wikipedia, 2026). Position approximate.", "source": "Wikipedia (Security Forces Headquarters Jaffna; Sri Lanka Air Force, 2026)", "date": "", "linked_items": []}, {"id": "slaf_mattala", "name": "SLAF Station Mattala (Hambantota): declared open on 2 October 2026", "lat": 6.287, "lon": 81.124, "cat": "air_base", "note": "The Commander of the Air Force declared the Mattala station open on 2 October 2026 (airforce.lk, Oct 2026). The civil airport it shares was built with Chinese financing, according to public reporting that was not re-verified in this build.", "source": "airforce.lk (Oct 2026); public reporting (not re-verified in this build)", "date": "", "linked_items": []}, {"id": "slaf_anuradhapura", "name": "SLAF Base Anuradhapura (not verified in this build)", "lat": 8.323, "lon": 80.406, "cat": "air_base", "note": "Listed among current Sri Lanka Air Force bases (Wikipedia list). Position approximate; not verified in this build.", "source": "Wikipedia (List of Sri Lankan air force bases); not verified in this build", "date": "", "linked_items": []}, {"id": "slaf_vavuniya", "name": "SLAF Base Vavuniya (not verified in this build)", "lat": 8.754, "lon": 80.498, "cat": "air_base", "note": "Listed among current Sri Lanka Air Force bases, with a surveillance and radar squadron (migflug, 2026). Position approximate; not verified in this build.", "source": "migflug (2026); not verified in this build", "date": "", "linked_items": []}, {"id": "slaf_koggala", "name": "SLAF Base Koggala (Galle district) (not verified in this build)", "lat": 5.98, "lon": 80.33, "cat": "air_base", "note": "Listed among current Sri Lanka Air Force bases (Wikipedia list). Position approximate; not verified in this build.", "source": "Wikipedia (List of Sri Lankan air force bases); not verified in this build", "date": "", "linked_items": []}, {"id": "slaf_batticaloa", "name": "SLAF Base Batticaloa (not verified in this build)", "lat": 7.715, "lon": 81.685, "cat": "air_base", "note": "Listed among current Sri Lanka Air Force bases (Wikipedia list). Position approximate; not verified in this build.", "source": "Wikipedia (List of Sri Lankan air force bases); not verified in this build", "date": "", "linked_items": []}, {"id": "slaf_sigiriya", "name": "SLAF Base Sigiriya (not verified in this build)", "lat": 7.958, "lon": 80.76, "cat": "air_base", "note": "Listed among current Sri Lanka Air Force bases (Wikipedia list). Position approximate; not verified in this build.", "source": "Wikipedia (List of Sri Lankan air force bases); not verified in this build", "date": "", "linked_items": []}, {"id": "radar_chinabay", "name": "Air-surveillance and air-defence radar squadrons, China Bay (Trincomalee)", "lat": 8.533, "lon": 81.1815, "cat": "radar", "note": "111 Air Surveillance Squadron and No. 6 Air Defence Radar Squadron (migflug, 2026). Radar types and suppliers are not described here. Position approximate.", "source": "migflug (2026)", "date": "", "linked_items": []}, {"id": "radar_hingurakgoda", "name": "Air-defence radar squadron, Hingurakgoda (Polonnaruwa)", "lat": 8.017, "lon": 81.05, "cat": "radar", "note": "No. 2 Air Defence Radar Squadron (migflug, 2026). Radar types are not described here. Position approximate.", "source": "migflug (2026)", "date": "", "linked_items": []}, {"id": "radar_vavuniya", "name": "Air-surveillance radar squadron, Vavuniya (not verified in this build)", "lat": 8.754, "lon": 80.496, "cat": "radar", "note": "Listed with the Vavuniya surveillance squadron (migflug, 2026). Position approximate; not verified in this build.", "source": "migflug (2026); not verified in this build", "date": "", "linked_items": []}, {"id": "army_hq", "name": "Army Headquarters, Defence Headquarters Complex (Akuregoda, Sri Jayawardenepura Kotte)", "lat": 6.888, "lon": 79.91, "cat": "cantonment", "note": "The Army Headquarters is housed in the Defence Headquarters Complex at Akuregoda (Wikipedia, 2026). The complex also houses the Ministry of Defence and the Navy and Air Force headquarters as they move there. Position approximate.", "source": "Wikipedia (Sri Lanka Army; Defence Headquarters Complex, 2026)", "date": "", "linked_items": []}, {"id": "sfhq_jaffna", "name": "Security Forces Headquarters Jaffna (Palaly Military Base): 51, 52 and 55 Divisions", "lat": 9.795, "lon": 80.07, "cat": "cantonment", "note": "Most senior of the regional Security Forces Headquarters; it commands 51 Division (Jaffna), 52 Division (Jaffna Peninsula) and 55 Division (Elephant Pass) (Wikipedia, 2026). Position approximate.", "source": "Wikipedia (Security Forces Headquarters Jaffna; List of Sri Lanka Army formations, 2026)", "date": "", "linked_items": []}, {"id": "elephant_pass", "name": "Elephant Pass military base (Jaffna Peninsula): 55 Division", "lat": 9.6, "lon": 80.2, "cat": "cantonment", "note": "A modern military base built in 1952; the army lost control of Elephant Pass in 2000 and later regained it; 55 Division is based here (Wikipedia, 2026). Position approximate.", "source": "Wikipedia (Elephant Pass; 55 Division)", "date": "", "linked_items": []}, {"id": "sfhq_east", "name": "Security Forces Headquarters East (Trincomalee): 22 Division and the Fort Frederick garrison", "lat": 8.561, "lon": 81.233, "cat": "cantonment", "note": "The Army's eastern Security Forces Headquarters and 22 Division are in Trincomalee, alongside the Eastern Naval Command and the Air Force's Eastern Zonal Command (Wikipedia, 2026). Position approximate.", "source": "Wikipedia (Trincomalee Garrison, 2026)", "date": "", "linked_items": []}, {"id": "panagoda", "name": "11 Division (Panagoda Cantonment, Colombo district): defence of the capital", "lat": 6.829, "lon": 79.959, "cat": "cantonment", "note": "Responsible for the defence of the capital (Wikipedia, 2026). Position approximate.", "source": "Wikipedia (Sri Lanka Army; List of current Sri Lanka Army formations, 2026)", "date": "", "linked_items": []}, {"id": "sfhq_mullaitivu", "name": "Security Forces Headquarters Mullaitivu (not verified in this build)", "lat": 9.2671, "lon": 80.8142, "cat": "cantonment", "note": "Listed among the regional Security Forces Headquarters. Position approximate; not verified in this build.", "source": "Wikipedia (List of current Sri Lanka Army formations); not verified in this build", "date": "", "linked_items": []}, {"id": "sfhq_kilinochchi", "name": "Security Forces Headquarters Kilinochchi (not verified in this build)", "lat": 9.3803, "lon": 80.377, "cat": "cantonment", "note": "Listed among the regional Security Forces Headquarters (57, 66 and 68 Divisions, per an older list). Position approximate; not verified in this build.", "source": "Military history list (older); not verified in this build", "date": "", "linked_items": []}, {"id": "hambantota_port", "name": "Hambantota International Port: deep-water port on a 99-year lease to China Merchants Port Holdings", "lat": 6.115, "lon": 81.125, "cat": "foreign_base", "note": "Opened in 2010. Under a 2017 debt-for-equity deal China Merchants Port Holdings holds a 99-year lease (about US$1.12bn), handed over in December 2017 (CSIS; Wikipedia). Sri Lanka said in 2017 that it would not be a military base for any country. A Chinese replenishment call by the tracking ship Yuan Wang 5 was made in August 2022, after Colombo asked for a deferral over security concerns (NBC News; ORF). Position approximate.", "source": "CSIS (Game of Loans); Wikipedia (Hambantota International Port); Borneo Post / Reuters (2017); NBC News (2022); ORF (2024)", "date": "", "linked_items": []}, {"id": "colombo_port_city", "name": "Colombo Port City (CHEC): 269 hectares of reclaimed land, built from 2014", "lat": 6.94, "lon": 79.846, "cat": "foreign_base", "note": "Chinese-developed special economic zone on reclaimed land beside Colombo Port. CHEC has invested about US$1.4bn; it committed a further US$300m in January 2026 (Daily Mirror, Jul 2026). Full completion is not expected before 2041 (Global Construction Review, 2024). Position approximate.", "source": "Gulf News (May 2025); Global Construction Review (2024); Daily Mirror (Jul 2026)", "date": "", "linked_items": []}, {"id": "colombo_south", "name": "Colombo South Container Terminal (China Merchants Port Holdings)", "lat": 6.934, "lon": 79.848, "cat": "foreign_base", "note": "Run by China Merchants Port Holdings, where throughput has grown strongly (The Asset, 2016). Position approximate.", "source": "The Asset (2016); Wikipedia (China Merchants Port)", "date": "", "linked_items": []}, {"id": "shiyan6_colombo", "name": "Colombo port: research vessel Shi Yan 6 docked for replenishment (October 2023)", "lat": 6.945, "lon": 79.842, "cat": "foreign_base", "note": "The Chinese research vessel Shi Yan 6 docked in Colombo for replenishment in October 2023. Sri Lanka had said it would not allow joint research without permission (ThePrint, Oct 2023; ORF, Jan 2024). Position approximate.", "source": "ThePrint (Oct 2023); ORF (Jan 2024)", "date": "", "linked_items": []}, {"id": "colombo_dockyard", "name": "Colombo Dockyard PLC (Colombo Harbour): commercial shipyard that built the Colombo-class vessels for the Navy", "lat": 6.946, "lon": 79.843, "cat": "defense_industry", "note": "Built the Colombo-class ships for the Sri Lanka Navy (Wikipedia, 2026). Ownership is not described in this build. Position approximate.", "source": "Wikipedia (List of active ships of the Sri Lanka Navy, 2026)", "date": "", "linked_items": []}, {"id": "trinco_tank_farm", "name": "Trincomalee oil tank farm (China Bay): 99 tanks; Ceylon Petroleum Corporation owns 24", "lat": 8.533, "lon": 81.195, "cat": "pipeline", "note": "The Second World War-era tank farm has 99 tanks. As of August 2026, two CPC tanks had been renovated and tenders called for three more; an RFP for 29 tanks is ready, with a target of two years (CPC, Aug 2026). Other tanks are operated under separate arrangements (not described here). Position approximate.", "source": "Tank Storage Magazine (Aug 2026); The Morning (2026); Sunday Times (May 2026)", "date": "", "linked_items": []}, {"id": "sapugaskanda", "name": "Sapugaskanda oil refinery (Ceylon Petroleum Corporation): 60 years old; expansion tender pending (approximate position)", "lat": 6.955, "lon": 79.918, "cat": "pipeline", "note": "CPC sought consultancy bids to value the refinery before tenders for its long-delayed expansion; bids closed on 15 June 2026 (Sunday Times, May 2026). Position approximate.", "source": "Sunday Times (May 2026)", "date": "", "linked_items": []}, {"id": "planned_pipeline", "name": "Planned fuel pipeline, Colombo Port to Kolonnawa (tender; Rs 12.78 bn; CPC)", "lat": 6.932, "lon": 79.888, "cat": "pipeline", "note": "CPC's international tender for the pipeline drew several bidders (Sunday Times, May 2026). The route is planned, not built. Position approximate.", "source": "Sunday Times (May 2026)", "date": "", "linked_items": []}, {"id": "sinopec_refinery", "name": "Proposed Sinopec refinery, Hambantota port area (delayed; not built)", "lat": 6.1, "lon": 81.13, "cat": "pipeline", "note": "Delayed by disputes over equity, tax concessions, market access and land allocation (IANS, June 2026). An environmental impact study was ordered. Position approximate.", "source": "IANS (June 2026)", "date": "", "linked_items": []}, {"id": "lakvijaya", "name": "Lakvijaya coal power station (Puttalam; Ceylon Electricity Board)", "lat": 8.09, "lon": 79.77, "cat": "pipeline", "note": "Commissioned in 2014 at about US$1.35bn. A Chinese contractor, CMEC, repaired it after a 2014 cooling-system outage (Wikipedia, Ceylon Electricity Board). The Ceylon Electricity Board was dissolved on 9 March 2026 (Wikipedia). Position approximate.", "source": "Wikipedia (Ceylon Electricity Board; Lakvijaya Power Station)", "date": "", "linked_items": []}, {"id": "cable_colombo", "name": "Colombo cable landing stations: SEA-ME-WE 4 and Dhiraagu-SLT (Sri Lanka Telecom); FALCON (Lanka Bell)", "lat": 6.932, "lon": 79.848, "cat": "pipeline", "note": "Colombo's landing points carry SEA-ME-WE 4 and the Dhiraagu-SLT cable (Sri Lanka Telecom) and FALCON (Lanka Bell) (Submarine Networks; TeleGeography, 2026). Position approximate.", "source": "Submarine Networks (Sri Lanka); TeleGeography (2026); Wikipedia (SEA-ME-WE 4)", "date": "", "linked_items": []}, {"id": "cable_mount_lavinia", "name": "Mount Lavinia cable landing station (Sri Lanka Telecom)", "lat": 6.833, "lon": 79.862, "cat": "pipeline", "note": "Sri Lanka Telecom landing station on the south edge of Colombo (Submarine Networks). Position approximate.", "source": "Submarine Networks (Sri Lanka)", "date": "", "linked_items": []}, {"id": "cable_matara", "name": "Matara cable landing station: SEA-ME-WE 5 and SEA-ME-WE 6 (Sri Lanka Telecom)", "lat": 5.9485, "lon": 80.5353, "cat": "pipeline", "note": "Both cables land at Matara on the south coast (Wikipedia, SEA-ME-WE 5 and 6). Position approximate.", "source": "Wikipedia (SEA-ME-WE 5; SEA-ME-WE 6)", "date": "", "linked_items": []}, {"id": "cert_cc", "name": "Sri Lanka CERT | Coordination Centre (BMICH, Colombo 7): national CERT under the ICT Agency", "lat": 6.9065, "lon": 79.8715, "cat": "cyber_hub", "note": "The national computer emergency response team, set up under the ICT Agency of Sri Lanka. It investigated the 2019 attacks on government and institutional websites with the Signals Corps (Wikipedia; cert.gov.lk).", "source": "cert.gov.lk; Wikipedia (2019 cyberattacks on Sri Lanka)", "date": "", "linked_items": []}, {"id": "slt_datacentre", "name": "SLT National Data Centre (Pitipana, Colombo district) (approximate position)", "lat": 6.84, "lon": 79.97, "cat": "cyber_hub", "note": "Sri Lanka Telecom's national data centre (Submarine Networks, 2024). Position approximate.", "source": "Submarine Networks (Sri Lanka, 2024)", "date": "", "linked_items": []}, {"id": "palk_strait", "name": "Palk Strait: shallow strait on Sri Lanka's north coast (not verified in this build)", "lat": 9.55, "lon": 79.85, "cat": "chokepoint", "note": "Shallow waters limit navigation for deep-draft ships (general navigation information; not verified in this build).", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "gulf_mannar", "name": "Gulf of Mannar: shallow sea on the north-west coast (not verified in this build)", "lat": 8.6, "lon": 79.2, "cat": "chokepoint", "note": "Shallow sea area on the north-west coast (public information; not verified in this build).", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "southern_lanes", "name": "Southern sea lanes: east-west shipping passes south of the island", "lat": 5.5, "lon": 80.6, "cat": "chokepoint", "note": "Sea lanes passing south of the island carry large shares of energy shipments and container traffic between the Middle East and Asia (Colombo Telegraph, 2026). Colombo handled 8.29 million TEU in 2025, a record (Colombo Telegraph, 2026).", "source": "Colombo Telegraph (2026)", "date": "", "linked_items": []}], "connector_status": [{"name": "offline_seed", "configured": true, "ok": true, "message": "Offline snapshot: reference items and strategic sites only; backend not connected", "item_count": 29}], "total_items": 29};
  const CAT_META = {"military": {"label": "Military & Strategic", "color": "var(--amber)"}, "economic": {"label": "Economic & Trade", "color": "var(--cyan-h)"}, "political": {"label": "Political & Diplomatic", "color": "var(--green)"}, "hazard": {"label": "Natural Hazards", "color": "var(--violet)"}, "aviation": {"label": "Aviation & Maritime Notices", "color": "var(--violet)"}, "strategic": {"label": "Strategic & Arms Monitoring", "color": "var(--magenta)"}, "cyber": {"label": "Cyber & MSS", "color": "var(--red)"}, "space": {"label": "Space Program", "color": "var(--cyan-h)"}, "social_local": {"label": "Social pulse", "color": "var(--gold)"}, "social_global": {"label": "Social pulse (global)", "color": "var(--gold)"}};

  function escapeHtml(s){
    if(s === null || s === undefined) return "";
    return String(s).replace(/[&<>"']/g, function(c){
      return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];
    });
  }

  function project(lon, lat){
    const phi = lat * Math.PI/180, lam = lon * Math.PI/180;
    const dl = lam - PROJ.lam0;
    const cosc = PROJ.sinp0 * Math.sin(phi) + PROJ.cosp0 * Math.cos(phi) * Math.cos(dl);
    const k = Math.sqrt(2 / (1 + cosc));
    const x = k * Math.cos(phi) * Math.sin(dl);
    const y = k * (PROJ.cosp0 * Math.sin(phi) - PROJ.sinp0 * Math.cos(phi) * Math.cos(dl));
    return [PROJ.translate[0] + x*PROJ.scale, PROJ.translate[1] - y*PROJ.scale];
  }

  const MARKER_COLOR = {"capital": "#c9a35c", "flashpoint": "#ef5354", "chokepoint": "#f59e0b", "hazard": "#58c4ff", "submarine_base": "#fb923c", "navy_base": "#f97316", "carrier_port": "#fdba74", "cantonment": "#c084fc", "nuclear_site": "#facc15", "space_site": "#06b6d4", "satellite_station": "#60a5fa", "defense_industry": "#84cc16", "pipeline": "#4ade80", "nuclear_plant": "#eab308", "air_base": "#a78bfa", "airport": "#38bdf8", "seaport": "#22c55e", "custom": "#ffffff"};

  // ---------------- 72h / All-time window ----------------
  let timeWindow = "72h";   // default per request; stays until the user picks otherwise
  const WINDOW_MS = 72 * 3600 * 1000;

  // Robust across the formats the connectors actually emit: ISO, RFC-822 (RSS
  // "published"), GDELT "YYYYMMDDTHHMMSSZ", and USGS epoch-ms as a string.
  function parseItemDate(s){
    if(!s) return null;
    if(/^\d{13}$/.test(String(s))) return new Date(parseInt(s, 10));
    const g = /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z$/.exec(String(s));
    if(g) return new Date(Date.UTC(+g[1], +g[2]-1, +g[3], +g[4], +g[5], +g[6]));
    const d = new Date(s);
    return isNaN(d.getTime()) ? null : d;
  }
  function inWindow(it){
    if(timeWindow === "all") return true;
    const d = parseItemDate(it.date);
    // Strict by design: an item with no verifiable timestamp (background
    // reference entries dated "ongoing"/"background", or a date string that
    // can't be parsed) is NOT shown in the 72h view - claiming it's "last
    // 72 hours" news when nothing proves that would break the one rule this
    // toggle exists to enforce. Switch to All Time to see them.
    if(!d) return false;
    return (Date.now() - d.getTime()) <= WINDOW_MS;
  }
  function windowedCats(cats){
    const out = {};
    Object.keys(cats).forEach(function(k){ out[k] = (cats[k]||[]).filter(inWindow); });
    return out;
  }

  let currentData = null, isLive = false;
  // start activeLayers from whatever the checkboxes actually show as checked
  // in the HTML (event layers on, infrastructure layers off by default),
  // rather than hardcoding it separately and risking the two going out of sync
  let activeLayers = new Set(
    Array.from(document.querySelectorAll(".layer-cb")).filter(cb => cb.checked).map(cb => cb.dataset.layer)
  );
  let refreshTimer = null;
  let customMarkers = [];

  // ---------------- data loading ----------------
  async function loadData(manual){
    const btn = document.getElementById("refreshBtn");
    if(manual && btn){ btn.classList.add("spinning"); btn.disabled = true; }
    try {
      const url = manual ? "/api/refresh" : "/api/snapshot";
      const opts = manual ? {method:"POST"} : {cache:"no-store"};
      const res = await fetch(url, opts);
      if(!res.ok){
        if(res.status === 429){ const j = await res.json().catch(()=>({})); throw new Error(j.error || "rate limited"); }
        // try to surface the server's own error detail (e.g. a specific
        // connector/rendering failure), not just the bare status code
        const body = await res.json().catch(()=>null);
        throw new Error(body && body.error ? ("HTTP " + res.status + ": " + body.error) : ("HTTP " + res.status));
      }
      const data = await res.json();
      currentData = data; isLive = true;
      render(data, true, null);
    } catch(e) {
      currentData = SEED_DATA; isLive = false;
      render(SEED_DATA, false, e.message);
    } finally {
      if(btn){ btn.classList.remove("spinning"); btn.disabled = false; }
    }
  }

  // ---------------- render orchestration ----------------
  function render(data, live, errMsg){
    // apply the 72h / All-time window ONCE, then everything below (panels,
    // KPIs, map dots) reads from the same filtered view - they can't disagree
    const view = Object.assign({}, data, {items_by_category: windowedCats(data.items_by_category || {})});
    view.markers = (data.markers || []).map(function(m){
      return Object.assign({}, m, {linked_items: (m.linked_items || []).filter(inWindow)});
    });
    renderStatusBar(live, view, errMsg);
    renderKPIs(view);
    renderMarkers(view.markers, view.items_by_category);
    renderPanels(view.items_by_category);
    renderTicker(view);
    renderDarkWeb(view);
    renderConnectorStrip(view.connector_status || [], live);
    applyFilter(); // keep an active search query applied across re-renders
  }

  function renderStatusBar(live, data, errMsg){
    const pill = document.getElementById("statusPill");
    const txt = document.getElementById("statusPillText");
    const banner = document.getElementById("offlineBanner");
    const footerNote = document.getElementById("footerNote");
    const snapDate = document.getElementById("snapDate");
    if(live){
      pill.className = "status-pill live"; txt.textContent = "Live backend";
      banner.classList.remove("show");
      const when = data.updated_at ? new Date(data.updated_at*1000).toLocaleTimeString() : "just now";
      snapDate.textContent = "Backend last polled " + when;
      footerNote.innerHTML = "Live backend connected &middot; " + (data.total_items||0) + " items in feed &middot; not investment/operational advice, verify time-critical items against primary sources";
    } else {
      pill.className = "status-pill offline"; txt.textContent = "Offline snapshot";
      banner.classList.add("show");
      banner.innerHTML = "<b>Backend not reachable" + (errMsg ? " (" + escapeHtml(errMsg) + ")" : "") +
        "</b> &mdash; showing the embedded Aug 10, 2026 research snapshot instead of live data. " +
        "Run <code>python run.py</code> and reload this page to connect the real backend.";
      snapDate.textContent = "Offline snapshot - Aug 10, 2026";
      footerNote.textContent = "Offline snapshot mode - start the Python backend for live data.";
    }
  }

  function countItems(cats, dataObj){
    let n = 0;
    cats.forEach(c => n += (dataObj[c]||[]).length);
    return n;
  }

  function renderKPIs(data){
    const cats = data.items_by_category || {};
    document.getElementById("kpi-markers").textContent = (data.markers||[]).length;
    document.getElementById("kpi-military").textContent = (cats.milops||[]).length;
    document.getElementById("kpi-economic").textContent = (cats.econ||[]).length;
    document.getElementById("kpi-political").textContent = (cats.geo||[]).length;
    document.getElementById("kpi-hazard").textContent = (cats.hazard||[]).length;
    document.getElementById("kpi-darkweb").textContent = (cats.darkweb||[]).length;
    document.getElementById("count-markers").textContent = (data.markers||[]).length + " sites";
    const infraNote = document.getElementById("infraNote");
    if(infraNote){
      const info = data.infrastructure || {};
      if(isLive){
        infraNote.textContent = (info.airport_count||0) + " airports live from OurAirports (CC0 dataset) + " +
          "verified seaports/naval bases/defense HQs. Real-time ship/submarine positions aren't shown - " +
          "no open source publishes that for any navy (see README).";
      } else {
        infraNote.textContent = "Offline snapshot: infrastructure markers frozen from build time, not live.";
      }
    }
  }

  // ---------------- map markers ----------------
  function addMarkerEl(layer, m, color, extra){
    const [x,y] = project(m.lon, m.lat);
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("class", "marker");
    g.setAttribute("transform", "translate(" + x.toFixed(1) + "," + y.toFixed(1) + ")");
    g.dataset.name = m.name; g.dataset.note = m.note || "";
    g.dataset.source = m.source || ""; g.dataset.date = m.date || "";
    g.dataset.color = color;
    g.dataset.linked = JSON.stringify(m.linked_items || []);
    const pulse = (m.linked_items && m.linked_items.length) || (extra && extra.pulse);
    g.innerHTML = (pulse ? '<circle class="pulse" r="5" fill="none" stroke="'+color+'" stroke-width="1.6"/>' : '') +
                  '<circle class="core" r="3.4" fill="'+color+'"/>';
    layer.appendChild(g);
  }

  function renderMarkers(markers, cats){
    const layer = document.getElementById("markerLayer");
    if(!layer) return;
    layer.innerHTML = "";
    // 1. named strategic sites (pulse when a windowed headline mentions them)
    (markers || []).forEach(function(m){
      if(!activeLayers.has(m.cat)) return;
      addMarkerEl(layer, m, MARKER_COLOR[m.cat] || "#c9a35c");
    });
    // 2. any windowed item that carries its OWN coordinates (USGS quakes) -
    // a real lat/lon from the source, not a guess
    if(activeLayers.has("hazard")){
      Object.keys(cats || {}).forEach(function(k){
        (cats[k] || []).forEach(function(it){
          if(typeof it.lat === "number" && typeof it.lon === "number"){
            addMarkerEl(layer, {name: it.label, note: it.text, source: it.source, date: it.date,
              lat: it.lat, lon: it.lon, linked_items: []}, MARKER_COLOR.hazard, {pulse: true});
          }
        });
      });
    }
    // 3. the user's own plotted markers
    if(activeLayers.has("custom")){
      customMarkers.forEach(function(cm){
        addMarkerEl(layer, {name: cm.label, note: cm.remark || "(no remark)", source: "You",
          date: cm.added, lat: cm.lat, lon: cm.lon, linked_items: []}, MARKER_COLOR.custom, {pulse: true});
      });
    }
    wireMarkerEvents();
  }

  function wireMarkerEvents(){
    const wrap = document.getElementById("mapWrap");
    const tip = document.getElementById("mapTip");
    if(!wrap || !tip) return;
    function hideTip(){ tip.classList.remove("show"); }
    function positionTip(evt){
      const rect = wrap.getBoundingClientRect();
      let cx, cy;
      if(evt.touches && evt.touches[0]){ cx = evt.touches[0].clientX; cy = evt.touches[0].clientY; }
      else { cx = evt.clientX; cy = evt.clientY; }
      let x = cx - rect.left, y = cy - rect.top;
      const tw = 260, th = 130;
      if(x + tw + 24 > rect.width) x = x - tw - 18; else x = x + 16;
      if(y + th + 20 > rect.height) y = Math.max(4, y - th - 10); else y = y + 14;
      tip.style.left = x+"px"; tip.style.top = y+"px";
    }
    function showTip(m, evt){
      const name = m.dataset.name, note = m.dataset.note, source = m.dataset.source,
            date = m.dataset.date, color = m.dataset.color;
      let linked = [];
      try { linked = JSON.parse(m.dataset.linked || "[]"); } catch(e){ linked = []; }
      let html = '<div class="t-name" style="color:'+color+'">'+escapeHtml(name)+'</div>' +
                 '<div>'+escapeHtml(note)+'</div>' +
                 '<div class="t-meta">'+escapeHtml(source)+(date?(" &middot; "+escapeHtml(date)):"")+'</div>';
      if(linked.length){
        html += '<div class="t-meta" style="margin-top:6px;color:var(--text-dim);">Recent related items:</div>';
        linked.slice(0,3).forEach(function(li){
          html += '<div class="marker-tt-link">&bull; ' + escapeHtml((li.label||"").slice(0,60)) + '</div>';
        });
      }
      tip.innerHTML = html;
      positionTip(evt);
      tip.classList.add("show");
    }
    wrap.querySelectorAll(".marker").forEach(function(m){
      m.addEventListener("mouseenter", function(evt){ showTip(m, evt); });
      m.addEventListener("mousemove", positionTip);
      m.addEventListener("mouseleave", hideTip);
      m.addEventListener("click", function(evt){
        if(tip.classList.contains("show")){ hideTip(); } else { showTip(m, evt); }
      });
    });
    wrap.removeEventListener("mouseleave", hideTip);
    wrap.addEventListener("mouseleave", hideTip);
  }

  // layer toggle checkboxes
  document.querySelectorAll(".layer-cb").forEach(function(cb){
    cb.addEventListener("change", function(){
      const cat = cb.dataset.layer;
      if(cb.checked) activeLayers.add(cat); else activeLayers.delete(cat);
      if(currentData) renderMarkers(currentData.markers || []);
    });
  });

  // ---------------- panels ----------------
  // Only http(s) URLs ever become links. A feed-supplied "javascript:" / "data:" URL
  // would otherwise be a click-to-run XSS even though every text field is escaped.
  function safeUrl(u){
    if(!u) return null;
    try { const x = new URL(String(u)); return (x.protocol === "http:" || x.protocol === "https:") ? x.href : null; }
    catch(e){ return null; }
  }
  function fmtDate(s){
    const d = parseItemDate(s);
    return d ? d.toLocaleString([], {dateStyle:"medium", timeStyle:"short"}) : (s || "");
  }
  function itemHtml(it){
    const href = safeUrl(it.url);
    return '<div class="item" data-search="'+escapeHtml(((it.label||"")+" "+(it.text||"")).toLowerCase())+'">' +
      '<div class="lbl">'+escapeHtml(it.label)+'</div>' +
      (it.text && it.text !== it.label ? '<div class="txt">'+escapeHtml(it.text)+'</div>' : '') +
      '<div class="meta">'+escapeHtml(it.source)+(it.date?(" &middot; "+escapeHtml(fmtDate(it.date))):"")+
      (href ? ' &middot; <a href="'+escapeHtml(href)+'" target="_blank" rel="noopener noreferrer">source &#8599;</a>' : '')+
      '</div></div>';
  }

  function renderPanels(cats){
    const ids = HEADING_KEYS;
    ids.forEach(function(cat){
      const container = document.getElementById("items-"+cat);
      const countEl = document.getElementById("count-"+cat);
      if(!container) return;
      const list = (cats[cat] || []).slice(0, 25);
      if(countEl) countEl.textContent = list.length;
      container.innerHTML = list.length
        ? list.map(itemHtml).join("")
        : '<div class="empty-note">' + (timeWindow === "72h"
            ? (isLive
                ? 'Nothing in the last 72 hours for this heading. Switch to <b>All Time</b> (top right) to see older items.'
                : 'Backend offline - the embedded research snapshot is older than 72 hours, so it is hidden in this view. Switch to <b>All Time</b> to read it, or start the backend for live news.')
            : 'No items for this heading yet.') + '</div>';
    });
  }

  // ---------------- connector status strip ----------------
  function renderConnectorStrip(statuses, live){
    const el = document.getElementById("connectorStrip");
    const note = document.getElementById("methodNote");
    if(!live){
      el.innerHTML = '<span class="conn-badge off">offline snapshot - connectors not queried</span>';
      note.textContent = "Backend not connected. Start it with: python run.py  (see README.md)";
      return;
    }
    el.innerHTML = statuses.map(function(s){
      const cls = !s.configured ? "off" : (s.ok ? "ok" : "err");
      const label = s.name + (s.configured ? (s.ok ? " \u2713 " + s.item_count : " \u2717") : " (not set)");
      return '<span class="conn-badge '+cls+'" title="'+escapeHtml(s.message||"")+'">'+escapeHtml(label)+'</span>';
    }).join("");
    const okCount = statuses.filter(s=>s.ok).length;
    note.textContent = okCount + " of " + statuses.length + " connectors returned data this poll. " +
      "Hover a badge for its exact status message. Add API keys in .env or via secure_setup.py to enable more.";
  }

  // ---------------- search filter ----------------
  let lastQuery = "";
  function applyFilter(){
    const q = lastQuery;
    document.querySelectorAll(".item[data-search]").forEach(function(it){
      if(!q){ it.classList.remove("dim"); return; }
      const hay = it.getAttribute("data-search") || "";
      if(hay.indexOf(q) === -1) it.classList.add("dim"); else it.classList.remove("dim");
    });
  }
  const filterInput = document.getElementById("filterInput");
  if(filterInput){
    filterInput.addEventListener("input", function(){
      lastQuery = filterInput.value.trim().toLowerCase();
      applyFilter();
    });
  }

  // ---------------- refresh button ----------------
  const refreshBtn = document.getElementById("refreshBtn");
  if(refreshBtn) refreshBtn.addEventListener("click", function(){ loadData(true); });

  // ---------------- settings modal (API keys) ----------------
  const settingsBackdrop = document.getElementById("settingsBackdrop");
  const settingsBtn = document.getElementById("settingsBtn");
  const closeSettingsBtn = document.getElementById("closeSettingsBtn");
  const saveKeysBtn = document.getElementById("saveKeysBtn");
  const keyFieldsEl = document.getElementById("keyFields");
  const settingsMsg = document.getElementById("settingsMsg");

  async function openSettings(){
    settingsBackdrop.classList.add("show");
    settingsMsg.textContent = ""; settingsMsg.className = "modal-msg";
    keyFieldsEl.innerHTML = "Loading&hellip;";
    try {
      const res = await fetch("/api/keys");
      if(!res.ok) throw new Error("HTTP " + res.status);
      const fields = await res.json();
      keyFieldsEl.innerHTML = Object.keys(fields).map(function(name){
        const f = fields[name];
        return '<div class="key-field">' +
          '<label><span class="kf-status'+(f.configured?" on":"")+'"></span>' + escapeHtml(f.label) +
          (f.configured ? ' <span style="font-weight:400;color:var(--text-faint);">(set via '+escapeHtml(f.source)+')</span>' : '') +
          '</label>' +
          '<div class="kf-help">'+escapeHtml(f.help)+'</div>' +
          '<input type="password" data-key="'+name+'" placeholder="'+
            (f.configured ? "Already set - paste a new value to replace it" : "Paste key here, or leave blank to skip") +
          '" autocomplete="off"/></div>';
      }).join("");
    } catch(e) {
      keyFieldsEl.innerHTML = '<div class="modal-msg err">Could not load key status: ' + escapeHtml(e.message) +
        (isLive ? "" : " (backend not connected - start it with python run.py first)") + '</div>';
    }
  }
  function closeSettings(){ settingsBackdrop.classList.remove("show"); }

  if(settingsBtn) settingsBtn.addEventListener("click", openSettings);
  if(closeSettingsBtn) closeSettingsBtn.addEventListener("click", closeSettings);
  if(settingsBackdrop) settingsBackdrop.addEventListener("click", function(e){
    if(e.target === settingsBackdrop) closeSettings();
  });

  if(saveKeysBtn) saveKeysBtn.addEventListener("click", async function(){
    const inputs = keyFieldsEl.querySelectorAll("input[data-key]");
    const body = {};
    inputs.forEach(function(inp){ if(inp.value.trim()) body[inp.dataset.key] = inp.value.trim(); });
    if(!Object.keys(body).length){
      settingsMsg.textContent = "Nothing to save - all fields blank."; settingsMsg.className = "modal-msg";
      return;
    }
    saveKeysBtn.disabled = true; saveKeysBtn.textContent = "Saving\u2026";
    try {
      const res = await fetch("/api/keys", {method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify(body)});
      const j = await res.json();
      if(!res.ok) throw new Error(j.error || ("HTTP " + res.status));
      settingsMsg.textContent = "Saved " + j.saved.length + " key(s), encrypted. Reconnecting\u2026";
      settingsMsg.className = "modal-msg ok";
      await loadData(true);
      setTimeout(function(){ openSettings(); }, 400); // refresh the configured/not-configured status shown
    } catch(e) {
      settingsMsg.textContent = "Save failed: " + e.message;
      settingsMsg.className = "modal-msg err";
    } finally {
      saveKeysBtn.disabled = false; saveKeysBtn.textContent = "Save & reconnect";
    }
  });

  // ---------------- live clock ----------------
  function pad(n){ return n<10 ? "0"+n : n; }
  function tickClock(){
    const d = new Date();
    const el = document.getElementById("snapClock");
    if(el) el.textContent = pad(d.getHours())+":"+pad(d.getMinutes())+":"+pad(d.getSeconds())+" local";
  }
  tickClock(); setInterval(tickClock, 1000);

  // ---------------- running news ticker (unlocated news, newest first, bottom->top) ----------------
  function ts(it){ const d = parseItemDate(it.date); return d ? d.getTime() : 0; }
  function wireTickerPause(){
    const viewport = document.getElementById("tickerViewport");
    const track = document.getElementById("tickerTrack");
    if(!viewport || !track) return;
    viewport.onpointerenter = function(){ track.classList.add("paused"); };
    viewport.onpointerleave = function(){ track.classList.remove("paused"); };
    viewport.ontouchstart = function(){ track.classList.add("paused"); };
    viewport.ontouchend = function(){ track.classList.remove("paused"); };
  }
  function in72h(it){
    const d = parseItemDate(it.date);
    if(!d) return false;                       // undated background items never qualify as "latest news"
    return (Date.now() - d.getTime()) <= 72 * 3600 * 1000;
  }
  function renderTicker(view){
    // The running feed is ALWAYS the last 72 hours - it ignores the All-Time toggle.
    const track = document.getElementById("tickerTrack");
    const cnt = document.getElementById("count-ticker");
    if(!track) return;
    const src = (currentData && currentData.items_by_category) || {};
    const all = [];
    Object.keys(src).forEach(function(k){
      (src[k] || []).forEach(function(it){
        if(!(typeof it.lat === "number" && typeof it.lon === "number") && in72h(it)) all.push(it);
      });
    });
    all.sort(function(a, b){ return ts(b) - ts(a); });
    const list = all.slice(0, 80);
    if(cnt) cnt.textContent = list.length + " in 72h";
    if(!list.length){
      track.innerHTML = '<div class="empty-note" style="padding:14px;">No unlocated news in the last 72 hours yet.</div>';
      return;
    }
    const TAG = {geo:["GEO","var(--green)"], milops:["MIL","var(--amber)"], arms:["ARMS","var(--magenta)"],
      naval:["NAVAL","var(--cyan-h)"], scs:["SCS","var(--cyan-h)"], air:["AIR","var(--violet)"], space:["SPACE","var(--cyan-h)"],
      tech:["TECH","var(--gold)"], cyber:["CYBER","var(--red)"], darkweb:["DARK","var(--red)"], econ:["ECON","var(--cyan-h)"],
      mss:["MSS","var(--amber)"], social:["SOC","var(--gold)"], wellbeing:["WELL","var(--magenta)"], hazard:["HAZ","var(--violet)"]};
    const one = list.map(function(it){
      const t = TAG[it.category] || ["NEWS","var(--cyan-h)"];
      return '<div class="tick-item"><span class="tag" style="background:'+t[1]+'">'+t[0]+'</span>' +
        '<span class="txt">'+escapeHtml(it.label)+'</span>' +
        '<div class="meta">'+escapeHtml(it.source)+(it.date ? ' &middot; '+escapeHtml(fmtDate(it.date)) : '')+'</div></div>';
    }).join("");
    track.innerHTML = one + one;
    wireTickerPause();
  }

  function renderDarkWeb(view){
    const el = document.getElementById("items-darkweb");
    if(!el) return;
    const want = document.getElementById("darkwebFilter").value;
    const all = [];
    Object.keys(view.items_by_category || {}).forEach(function(k){
      (view.items_by_category[k] || []).forEach(function(it){
        if(it.category === "darkweb") all.push(it);
      });
    });
    all.sort(function(a, b){ return ts(b) - ts(a); });
    const shown = all.filter(function(it){ return want === "all" || it.in_region; }).slice(0, 80);
    document.getElementById("count-darkweb").textContent = shown.length + " of " + all.length;
    const LABEL = {ransomware_live:"Ransomware.live: ", telegram_public:"Telegram: ", darkweb_tor:"Dark web via Tor: "};
    const st = (view.connector_status || []).filter(function(s){ return LABEL[s.name]; })
      .map(function(s){ return LABEL[s.name] + s.message; });
    document.getElementById("darkwebStatus").textContent = st.join("   |   ");
    el.innerHTML = shown.length ? shown.map(function(it){
      const href = safeUrl(it.url);
      return '<div class="item"><div class="lbl">'+escapeHtml(it.label)+'</div><div class="meta">' +
        escapeHtml(it.source) + (it.country ? ' &middot; '+escapeHtml(it.country) : '') +
        (it.date ? ' &middot; '+escapeHtml(fmtDate(it.date)) : '') +
        (href ? ' &middot; <a href="'+escapeHtml(href)+'" target="_blank" rel="noopener noreferrer">source &#8599;</a>' : '') +
        '</div></div>';
    }).join("") : '<div class="empty-note">No dark-web or threat-intel claims in the current window. ' +
        (timeWindow === "72h" ? 'Switch to All Time (top right) to see older claims.' : '') + '</div>';
  }

  // ---------------- radar sweep: 2D scanner rotating over the map (off for reduced-motion) ----------------
  // Cosmetic only, so it is isolated: a missing animation API or any error here
  // must never stop the data panels from rendering. Falls back to a timer when
  // requestAnimationFrame is unavailable (older or embedded browsers).
  try {
    (function radar(){
      const g = document.getElementById("radarSweep");
      if(!g || (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches)) return;
      const cx = g.getAttribute("data-cx"), cy = g.getAttribute("data-cy");
      const raf = (typeof window.requestAnimationFrame === "function")
        ? function(f){ window.requestAnimationFrame(f); }
        : function(f){ setTimeout(f, 33); };
      let a = 0;
      (function step(){
        a = (a + 0.5) % 360;
        g.setAttribute("transform", "rotate(" + a + " " + cx + " " + cy + ")");
        raf(step);
      })();
    })();
  } catch(e) { /* sweep is decoration; the dashboard works without it */ }

  const dwFilter = document.getElementById("darkwebFilter");
  if(dwFilter) dwFilter.addEventListener("change", function(){ if(currentData) render(currentData, isLive, null); });

  // ---------------- 72h / All-time toggle ----------------
  document.querySelectorAll(".wt-btn").forEach(function(btn){
    btn.addEventListener("click", function(){
      timeWindow = btn.dataset.window;
      document.querySelectorAll(".wt-btn").forEach(b => b.classList.toggle("active", b === btn));
      // re-render from what we already have - no new network call needed
      if(currentData) render(currentData, isLive, null);
    });
  });

  // ---------------- Plot a location (lat/long + remark) ----------------
  const plotBackdrop = document.getElementById("plotBackdrop");
  const plotMsg = document.getElementById("plotMsg");

  async function loadCustomMarkers(){
    try {
      const res = await fetch("/api/custom-markers", {cache:"no-store"});
      if(!res.ok) throw new Error("HTTP " + res.status);
      customMarkers = (await res.json()).markers || [];
    } catch(e) { customMarkers = []; }
  }

  function renderCustomList(){
    const el = document.getElementById("customMarkersList");
    if(!customMarkers.length){ el.innerHTML = ""; return; }
    el.innerHTML = '<div style="font-size:11px;color:var(--text-faint);margin-bottom:6px;">Your plotted markers:</div>' +
      customMarkers.map(function(m, i){
        return '<div class="custom-marker-row"><span><b>'+escapeHtml(m.label)+'</b> ('+m.lat+', '+m.lon+')' +
          (m.remark ? '<br/><span style="color:var(--text-faint);">'+escapeHtml(m.remark)+'</span>' : '') +
          '</span><button data-idx="'+i+'" title="Remove">&times;</button></div>';
      }).join("");
    el.querySelectorAll("button[data-idx]").forEach(function(btn){
      btn.addEventListener("click", async function(){
        try {
          const res = await fetch("/api/custom-markers/" + btn.dataset.idx, {method:"DELETE"});
          const j = await res.json();
          if(!res.ok) throw new Error(j.error || ("HTTP " + res.status));
          customMarkers = j.markers || [];
          renderCustomList();
          if(currentData) render(currentData, isLive, null);
        } catch(e) {
          plotMsg.textContent = "Remove failed: " + e.message; plotMsg.className = "modal-msg err";
        }
      });
    });
  }

  const plotBtn = document.getElementById("plotBtn");
  if(plotBtn) plotBtn.addEventListener("click", async function(){
    plotBackdrop.classList.add("show");
    plotMsg.textContent = ""; plotMsg.className = "modal-msg";
    await loadCustomMarkers();
    renderCustomList();
  });
  document.getElementById("plotCloseBtn").addEventListener("click", () => plotBackdrop.classList.remove("show"));
  plotBackdrop.addEventListener("click", function(e){ if(e.target === plotBackdrop) plotBackdrop.classList.remove("show"); });

  document.getElementById("plotAddBtn").addEventListener("click", async function(){
    const label = document.getElementById("plotLabel").value.trim();
    const remark = document.getElementById("plotRemark").value.trim();
    const lat = parseFloat(document.getElementById("plotLat").value);
    const lon = parseFloat(document.getElementById("plotLon").value);
    if(!label || isNaN(lat) || isNaN(lon) || lat < -90 || lat > 90 || lon < -180 || lon > 180){
      plotMsg.textContent = "Enter a label and valid lat (-90 to 90) / lon (-180 to 180)."; plotMsg.className = "modal-msg err";
      return;
    }
    try {
      const res = await fetch("/api/custom-markers", {method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify({label: label, remark: remark, lat: lat, lon: lon})});
      const j = await res.json();
      if(!res.ok) throw new Error(j.error || ("HTTP " + res.status));
      customMarkers = j.markers || [];
      ["plotLabel","plotRemark","plotLat","plotLon"].forEach(id => document.getElementById(id).value = "");
      plotMsg.textContent = "Added."; plotMsg.className = "modal-msg ok";
      renderCustomList();
      if(currentData) render(currentData, isLive, null);
    } catch(e) {
      plotMsg.textContent = "Add failed: " + e.message; plotMsg.className = "modal-msg err";
    }
  });

  // ---------------- boot ----------------
  loadCustomMarkers().then(function(){ loadData(false); });
  // auto-update news & data every 3 minutes, per request
  refreshTimer = setInterval(function(){ loadData(false); }, 3*60*1000);

  // Test hooks (harmless in production) so the DOM regression test can drive
  // the real code paths instead of re-implementing them
  window.__TEST = {render: function(){ if(currentData) render(currentData, isLive, null); },
                   setData: function(d){ currentData = d; isLive = true; },
                   setWindow: function(w){ timeWindow = w; },
                   parseItemDate: parseItemDate, inWindow: inWindow};
})();
