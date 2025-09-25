# 1109354 648SRCDataDictionary

DEPARTMENT OF HEALTH SERVICES 
 
COUNTY OF LOS ANGELES 
 
SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
 
 
 
 
 
 
STEMI Receiving 
Center Data Dictionary 
Los Angeles County 
Emergency Medical Services Agency 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
REVISED: October 2024 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
EFFECTIVE 
OCTOBER 
2024 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
 
 
 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
i 
 
 
TABLE OF CONTENTS 
 
INCLUSION CRITERIA ................................................................................................1 
INCLUSION CRITERIA FOR STEMI PATIENTS AND CARDIAC ARREST 
PATIENTS .......................................................................................................... 2 
INCLUSION CRITERIA FOR STEMI PATIENT ALGORITHIM .......................... 3 
INCLUSION CRITERIA FOR ECPR CARDIAC ARREST PATIENTS ................ 4 
STEMI? .............................................................................................................. 5 
CARDIAC ARREST? ......................................................................................... 6 
ECPR? ............................................................................................................... 7 
GENERAL INFO ..........................................................................................................8 
SEQUENCE NUMBER ...................................................................................... 9 
PROVIDER ....................................................................................................... 10 
ALS UNIT # ...................................................................................................... 12 
DISPATCH DATE ............................................................................................. 13 
DISPATCH TIME .............................................................................................. 14 
PATIENT AGE .................................................................................................. 15 
PATIENT GENDER .......................................................................................... 16 
RACE/ETHNICITY ............................................................................................ 17 
PROVIDER IMPRESSION ............................................................................... 18 
CHIEF COMPLAINT ........................................................................................ 19 
SRC ED ARRIVAL DATE ................................................................................. 21 
SRC ED ARRIVAL TIME .................................................................................. 22 
ED OUTCOME ................................................................................................. 23 
HOSP. DISCHARGE DATE ............................................................................. 24 
HOSPITAL OUTCOME .................................................................................... 25 
ED PRONOUNCED TIME ............................................................................... 26 
DNR STATUS .................................................................................................. 27 
COMORBIDITIES ............................................................................................. 28 
COMMENT TO OTHER ................................................................................... 30 
HOSP. DISPOSITION ...................................................................................... 31 
TRANSFER RATIONALE................................................................................. 32 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
ii 
 
 
TRANSFER TO................................................................................................ 33 
COMMENT ....................................................................................................... 35 
SRC ........................................................................................................................... 36 
EARLIEST REPORTED SYMPTOM ONSET DATE ....................................... 37 
EARLIEST REPORTED SYMPTOM ONSET TIME ........................................ 38 
TRANSFER? .................................................................................................... 39 
TRANSFERRING FACILITY ............................................................................ 40 
SRF ED ARRIVAL DATE ................................................................................. 42 
SRF ED ARRIVAL TIME .................................................................................. 43 
1
st
 SRF ED ECG DATE ................................................................................... 44 
1
st
 SRF ED ECG TIME .................................................................................... 45 
NON-SYSTEM DELAYS TO SRF ECG? ......................................................... 46 
DELAYS TO SRF ED ECG .............................................................................. 47 
1
st
 SRF STEMI ECG DATE ............................................................................. 48 
1
st
 SRF STEMI ECG TIME .............................................................................. 49 
SRF ED DEPARTURE DATE .......................................................................... 50 
SRF ED DEPARTURE TIME ........................................................................... 51 
PREHOSPITAL ECG PERFORMED? ............................................................. 52 
1
st
 PREHOSPITAL ECG DATE ....................................................................... 53 
1
st
 PREHOSPITAL ECG TIME......................................................................... 54 
1
st
 PREHOSPITAL ECG PERFORMED BY .................................................... 55 
PRE-HOSPITAL ECG=STEMI? ....................................................................... 56 
1
st
 PREHOSPITAL STEMI ECG DATE ........................................................... 57 
1
st
 PREHOSPITAL STEMI ECG TIME ............................................................ 58 
SOFTWARE INTERPRETED STEMI? ............................................................ 59 
EMS INTERPRETED STEMI? ........................................................................ 60 
WAS THE PREHOSPITAL ECG RECEIVED PRIOR TO PATIENT ARRIVAL?
 ......................................................................................................................... 61 
PREHOSPITAL ECG RECEIVED DATE ......................................................... 62 
PREHOSPITAL ECG RECEIVED TIME .......................................................... 63 
WAS THE PREHOSPITAL ECG REVIEWED BY THE ED MD? ...................... 64 
ED MD PREHOSPITAL ECG REVIEW DATE ................................................ 65 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
iii 
 
 
ED MD PREHOSPITAL ECG REVIEW TIME ................................................. 66 
SRC ED ECG PERFORMED? ......................................................................... 67 
INITIAL SRC ED ECG DATE .......................................................................... 68 
INITIAL SRC ED ECG TIME ........................................................................... 69 
NON-SYSTEM DELAYS TO SRC ECG? ........................................................ 70 
DELAYS TO SRC ED ECG ............................................................................. 71 
STEMI IDENT. ON INITIAL SRC ED ECG? .................................................... 72 
STEMI IDENT. ON SUBSEQUENT SRC ED ECG? ....................................... 73 
SUBSEQUENT SRC ED STEMI ECG DATE ................................................. 74 
SUBSEQUENT SRC ED STEMI ECG TIME .................................................. 75 
SRC ED SBP ................................................................................................... 76 
SRC ED HR ..................................................................................................... 77 
ELEVATED TROPONIN? ................................................................................. 78 
PEAK TROPONIN VALUE .............................................................................. 79 
PEAK TROPONIN VALUE UNITS ................................................................... 80 
FIBRINOLYTIC INFUSION? ............................................................................ 81 
FIBRINOLYTIC INFUSION DATE ................................................................... 82 
FIBRINOLYTIC INFUSION TIME .................................................................... 83 
CL ACTIVATED FROM PRE-SRC OR SRC ED? ........................................... 84 
REASON CL NOT ACTIVATED ....................................................................... 85 
COMMENT TO OTHER ................................................................................... 86 
DIAGNOSIS AT DISCHARGE .......................................................................... 87 
CL .............................................................................................................................. 88 
PT LOCATION WHEN CL ACTIVATED ........................................................... 89 
CL ACTIVATION DATE .................................................................................... 90 
CL ACTIVATION TIME ..................................................................................... 91 
DID THE PATIENT GO TO THE CATH LAB? ................................................. 92 
REASON PT DID NOT GO TO CL .................................................................. 93 
COMMENT TO OTHER ................................................................................... 94 
LOCATION OF PATIENT WHEN ROUTED TO CATH LAB ............................ 95 
CL ARRIVAL DATE .......................................................................................... 96 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
iv 
 
 
CL ARRIVAL TIME ........................................................................................... 97 
CATH STATUS ................................................................................................ 98 
ARTERIAL ACCESS SITE ............................................................................... 99 
PCI PERFORMED? ....................................................................................... 100 
PCI PROCEDURE PERFORMED ................................................................. 101 
REASON PCI NOT PERFORMED ................................................................ 102 
COMMENT TO OTHER ................................................................................. 103 
PCI DATE....................................................................................................... 104 
PCI TIME ........................................................................................................ 105 
NON-SYSTEM DELAYS TO PCI? ................................................................. 106 
DELAYS TO PCI ............................................................................................ 107 
COMMENT TO OTHER ................................................................................. 108 
CULPRIT LESION? ....................................................................................... 109 
CULPRIT LESION LOCATION ...................................................................... 110 
PT INCURRED INTRA- OR POST-PROCEDURAL STROKE? ..................... 111 
PT REQUIRED INTRA- OR POST-PROCEDURE TRANSFUSION? ............ 112 
WAS A HEMODYNAMIC SUPPORT DEVICE USED? ................................. 113 
IF YES, WHAT TYPE OF DEVICE? .............................................................. 114 
COMMENT TO OTHER ................................................................................. 115 
WHEN WAS THE HEMODYNAMIC SUPPORT DEVICE PLACED? ............. 116 
CABG PERFORMED? ................................................................................... 117 
CABG STATUS .............................................................................................. 118 
CABG DATE .................................................................................................. 119 
CABG TIME ................................................................................................... 120 
CARDIAC ARREST ................................................................................................. 121 
ROSC? ........................................................................................................... 122 
SUSTAINED ROSC? ..................................................................................... 123 
INIT. CARDIAC ARREST DATE .................................................................... 124 
INIT. CARDIAC ARREST TIME ..................................................................... 125 
PRESUMED CARDIAC ARREST ETIOLOGY .............................................. 126 
IF OTHER, PLEASE EXPLAIN ..................................................................... 127 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
v 
 
 
INIT. CARDIAC ARREST LOCATION ........................................................... 128 
INIT. CARDIAC ARREST WITNESSED? ...................................................... 129 
INIT. CARDIAC ARREST WITNESSED BY .................................................. 130 
INIT. CARDIAC ARREST RHYTHM .............................................................. 131 
INIT. CARDIAC ARREST CPR INIT. BY ....................................................... 132 
CPR METHOD ............................................................................................... 133 
CPR MECHANICAL DEVICE ........................................................................ 134 
COMMENT TO OTHER ................................................................................. 135 
PRE-SRC DEFIB? ......................................................................................... 136 
PRE-SRC DEFIB BY ..................................................................................... 137 
WAS PATIENT IN CA UPON ARRIVAL TO ED? ........................................... 138 
INIT. ROSC DATE.......................................................................................... 139 
INIT. ROSC TIME ........................................................................................... 140 
INIT. ROSC LOCATION ................................................................................. 141 
1
st
 CARDIAC RHYTHM UPON ROSC .......................................................... 142 
1
st
 HEART RATE UPON ROSC .................................................................... 143 
1
st
 SYSTOLIC BLOOD PRESSURE UPON ROSC ...................................... 144 
1
st
 TEMPERATURE UPON ROSC ................................................................ 145 
1
st
 END TIDAL CO
2
 UPON ROSC ................................................................ 146 
1
st
 PaO
2
 ......................................................................................................... 147 
1
st
 pH VALUE UPON ROSC .......................................................................... 148 
1
st
 LACTATE VALUE UPON ROSC ............................................................... 149 
LACTATE VALUE UNITS ............................................................................... 150 
TOTAL GLASGOW COMA SCALE (GCS) UPON ROSC ............................. 151 
VASOPRESSORS IVP? ................................................................................ 152 
VASOPRESSORS VIA CONT. INF.? ............................................................. 153 
ECMO PERFORMED? .................................................................................. 154 
ECMO DATE .................................................................................................. 155 
ECMO TIME ................................................................................................... 156 
CPC SCALE AT DISCHARGE ....................................................................... 157 
CHANGE IN BASELINE FUNCTIONAL STATUS? ...................................... 158 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
vi 
 
 
TTM ......................................................................................................................... 159 
TTM INITIATED? ........................................................................................... 160 
TTM APPROACH ........................................................................................... 161 
REASONS NORMOTHERMIC TTM WITHHELD (LIST ALL THAT APPLY).. 162 
REASONS INDUCED HYPOTHERMIA NOT INITIATED (LIST ALL THAT 
APPLY) .......................................................................................................... 163 
TTM INITIATED DATE ................................................................................... 164 
TTM INITIATED TIME .................................................................................... 165 
TTM INITIATED LOCATION .......................................................................... 166 
TTM MODALITY USED ................................................................................. 167 
TARGET TEMPERATURE ............................................................................. 168 
TARGET TEMPERATURE RANGE ............................................................... 169 
TARGET TEMPERATURE REACHED? ........................................................ 170 
TARGET TEMPERATURE REACHED DATE ............................................... 171 
TARGET TEMPERATURE REACHED TIME ................................................ 172 
TARGET TEMPERATURE MANAGEMENT DURATION .............................. 173 
RE-WARMING INITIATED? ........................................................................... 174 
RE-WARMING INIT DATE ............................................................................ 175 
RE-WARMING INIT TIME ............................................................................. 176 
PATIENT DIED DURING RE-WARMING? .................................................... 177 
RE-WARMING ENDED DATE ....................................................................... 178 
RE-WARMING ENDED TIME ........................................................................ 179 
ADVERSE EVENTS DURING TTM .............................................................. 180 
ECPR ....................................................................................................................... 181 
ECPR ROUTING? .......................................................................................... 182 
ECPR NOTIFICATION? ................................................................................. 183 
NOTIFICATION DATE ................................................................................... 184 
NOTIFICATION TIME .................................................................................... 185 
ECPR TEAM ACTIVATED ............................................................................. 186 
ECPR PHYSICIAN ARRIVAL DATE .............................................................. 187 
ECPR PHYSICIAN ARRIVAL TIME.............................................................. 188 
ECPR CANNULATION .................................................................................. 189 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
vii 
 
 
ECPR LOCATION .......................................................................................... 190 
COMMENT TO OTHER ................................................................................. 191 
RATIONALE FOR NOT CANNULATING FOR ECPR .................................... 192 
POOR PROGNOSTIC INDICATOR ............................................................... 193 
COMMENT TO OTHER ................................................................................. 194 
PERSISTENT CARDIAC ARREST ................................................................ 195 
PT LOCATION WHEN ECPR TEAM ACTIVATED .......................................... 196 
ECPR TEAM ACTIVATION DATE .................................................................. 197 
ECPR ACTIVATION TIME .............................................................................. 198 
SHEATH SIZE ................................................................................................ 199 
SIDE OF CANNULATION .............................................................................. 200 
DISTAL CATHETER ...................................................................................... 201 
US GUIDED ................................................................................................... 202 
FLUOROSCOPY GUIDED ............................................................................. 203 
ECPR FLOW .................................................................................................. 204 
NO ECPR CANNULATION FLOW ................................................................. 205 
COMMENT TO OTHER ................................................................................. 206 
ECPR DATE ................................................................................................... 207 
ECPR TIME .................................................................................................... 208 
ECPR DC DATE ............................................................................................. 209 
ECPR DC TIME ............................................................................................. 210 
ECPR COMPLICATIONS .............................................................................. 211 
COMMENT TO OTHER ................................................................................. 212 
PRIOR EJECTION FRACTION MEASURED? ............................................... 213 
PRIOR EJECTION FRACTION ...................................................................... 214 
PRIOR EJECTION FRACTION DATE ........................................................... 215 
EJECTION FRACTION AT DISCHARGE ...................................................... 216 
AICD PLACEMENT ........................................................................................ 217 
mRS 30 .......................................................................................................... 218 
mRS 90 .......................................................................................................... 219 
DONATION .................................................................................................... 220 
 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
1 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
INCLUSION CRITERIA 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
2 
 
 
INCLUSION CRITERIA FOR STEMI PATIENTS 
AND CARDIAC ARREST PATIENTS 
 
 
1) STEMI and Cardiac Arrest patients from the age of 15 years and older require entry 
into the SRC Database 
 
2) STEMI patients need to meet one of the following: 
• Patients with STEMI identified prehospital by: 
➢ Provider Impression of Chest Pain – STEMI (CPMI) OR 
➢ Destination hospital was documented as a STEMI Receiving Center by 
EMS AND Software AND/OR Paramedic ECG interpretation of STEMI 
• Patients transported by 911 with an ED interpretation of STEMI: 
➢ Identified by physician over-read of a prehospital ECG OR 
➢ Identified on the first ED ECG within 1 hour of arrival and no prehospital 
ECG=STEMI OR 
➢ Identified on a subsequent ED ECG within 1 hour of arrival 
• ED inter-facility transfer (IFT) to the SRC suspected STEMI to be 
evaluated for emergent PCI if: 
➢ Transported via 911 to the SRF with an ECG identified as a STEMI within 
one hour of SRF ED arrival AND/OR  
➢ Transported via 911 from the SRF to the SRC 
3) Cardiac arrest patients need to meet one of the following: 
• Patients age 15 years and older with Cardiac Arrest identified prehospital by: 
➢ Provider Impression of Cardiac Arrest – Non-Traumatic (CANT) OR 
➢ Patients transported by 9-1-1 with non-traumatic out-of-hospital cardiac 
arrest (OHCA), where resuscitation is attempted by a 911 Responder 
(CPR and/or defibrillation), patients that receive an AED shock by a 
bystander prior to the arrival of 911 responders (with or without return of 
spontaneous circulation (ROSC) after EMS assessment) OR 
➢ Patient with STEMI complicated by cardiac arrest, with or without 
ROSC, at any point in the acute phase (prehospital, ED or cath lab) 
 
4) Cardiac Arrest due to hanging and/or drowning is defined as a non-traumatic cardiac 
arrest by asphyxiation, NOT a traumatic arrest and requires entry into the SRC 
Database 
 
5) Cardiac Arrest due to electrocution is defined as a non-traumatic cardiac arrest NOT 
a traumatic arrest and requires entry into the SRC Database 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
3 
 
 
Provider Impression 
= 
CPMI 
NO 
YES 
Destination 
= 
SRC 
NO 
YES 
Paramedic ECG Interpretation 
and/or Software ECG 
Interpretation 
= 
STEMI 
NO 
Physician overread of PH 
ECG=STEMI or ED ECG=STEMI 
within 1 hour of arrival 
 
 
INCLUSION CRITERIA FOR STEMI PATIENT 
ALGORITHIM 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
NO 
 
 
 
 
 
 
 
 
 
 
YES 
 
 
YES 
Patient meets 
inclusion criteria 
for database entry 
Patient DOES NOT 
meet inclusion 
criteria for database 
entry 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
4 
 
 
INCLUSION CRITERIA FOR ECPR CARDIAC 
ARREST PATIENTS 
 
 
 
1) ECPR patients that require entry into the SRC Database need to meet the cardiac 
arrest patient inclusion criteria AND one of the following: 
• The patient was routed for ECPR by EMS or by Base Hospital OR 
• Patient received emergent ECPR on arrival to SRC   

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
5 
 
 
 
 
STEMI? 
 
 
Definition 
Patients with a STEMI identified by prehospital Provider Impression of 
Chest Pain – STEMI (CPMI) or ED ECG of STEMI 
 
Field Values 
• Yes 
• No 
Additional Information 
• Includes one of the following: 
o Patients with STEMI identified prehospital by: 
➢ Provider Impression of Chest Pain – STEMI (CPMI) OR 
Destination hospital was documented as a STEMI Receiving Center by 
EMS AND Software AND/OR Paramedic ECG interpretation of STEMI 
o Patients transported by 911 with an ED interpretation of STEMI: 
➢ Identified by physician over-read of a prehospital ECG OR 
➢ Identified on the first ED ECG within 1 hour of arrival and no prehospital 
ECG=STEMI OR 
➢ Identified on a subsequent ED ECG within 1 hour of arrival 
o ED inter-facility transfer (IFT) to the SRC via 911 or other private ALS 
transport for suspected STEMI to be evaluated for emergent PCI (includes 
Nurse Specialty Care Interfacility Transports) if: 
➢ Identified on an ED ECG within 1 hour of arrival to the SRF AND 
➢ Transported via 911 either to the SRF or from the SRF to the SRC 
 
Uses 
• Identify patients for inclusion 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 
• SRC Log 
• ED Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
6 
 
 
 
 
CARDIAC ARREST? 
 
 
Definition 
Patients age 15 and older who suffer a non-traumatic OHCA, which includes 
patients where resuscitation is attempted by a 911 Responder (CPR and/or 
defibrillation), patients that receive an AED shock by a bystander prior to the arrival 
of 911 responders (with or without ROSC after EMS assessment), and STEMI 
patients transported by EMS that are complicated by cardiac arrest at any point in 
the acute phase (prehospital, ED, or cath lab) 
 
Field Values 
• Yes 
• No 
Additional Information 
• This includes patients in non-acute care facilities (SNF, LTC, etc.) 
• ‘Bystander’ is any person outside of an acute healthcare setting, including personnel 
working at skilled nursing facilities and other healthcare professionals not in a hospital 
setting 
• This does not include bystander-suspected cardiac arrest where ROSC was achieved 
without the need for defibrillation or 911 responder CPR 
• If EMS does not document PI=CANT or there is no evidence of cardiac arrest (AED 
defibrillation) prior to EMS arrival, patient should not be entered into the database 
Uses 
• Identify patients for inclusion 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 
• SRC Log 
• ED Records 
• Cath Lab Records 
  

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
7 
 
 
 
ECPR? 
 
 
Definition 
Cardiac Arrest patient that meets the cardiac arrest patient inclusion criteria AND the 
patient was routed for ECPR by EMS or a Base hospital, OR patient received 
emergent ECPR on arrival to SRC  
 
Field Values 
• Yes 
• No 
 
Additional Information: 
• Excludes interfacility transfers for ECMO and ECMO performed inpatient 
Uses 
•  Identify patients for inclusion 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 
• SRC Log 
• ED Records 
• Cath Lab Records 
 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
8 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
GENERAL INFO 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
9 
 
 
 
 
SEQUENCE NUMBER 
 
 
Definition 
Unique alphanumeric EMS record number found pre-printed at the top right corner 
of paper EMS Report Forms, or electronically assigned to electronic patient care 
records (ePCRs) by the EMS provider’s electronic capture device 
 
Field Values 
• Providers utilizing field electronic data capture devices will have a 12-digit alpha- 
numeric value, always beginning with the two-letter provider code followed by 
the two-digit year 
• Providers utilizing paper EMS Report Forms will have an 8-digit alpha-numeric 
value 
Additional Information 
• REQUIRED for all records - data entry cannot begin without this number 
• If the sequence number is missing or incorrectly documented, every effort must be 
taken by the SRC to obtain it – by reviewing the patient’s medical record, by 
contacting either the Prehospital Care Coordinator of the applicable base hospital, or 
the provider who transported the patient. Only after all efforts to obtain the actual 
sequence number have been exhausted may a request be made of the EMS Agency 
for assistance, or as a last resort, a ‘dummy’ sequence number, in a timely fashion 
• A fictitious sequence number should not be generated for any reason 
Uses 
• Unique patient identifier 
• Essential link between other EMS Agency databases 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 
• Base Hospital Log 
• Fire Station Logs 
• SRC Log 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
10 
 
 
 
 
PROVIDER 
 
 
Definition 
Two-letter code for the EMS provider primarily responsible for the patient’s prehospital care 
Field Values 
 
PUBLIC PROVIDERS 
AF Arcadia Fire LV La Verne Fire 
AH Alhambra Fire MB Manhattan Beach Fire 
AV Avalon Fire MF Monrovia Fire 
BA Burbank Airport Fire MO Montebello Fire 
BF Burbank Fire MP Monterey Park Fire 
BH Beverly Hills Fire ND Not Documented 
CC Culver City Fire OT Other Provider 
CF LA County Fire PF Pasadena Fire 
CG US Coast Guard RB Redondo Beach Fire 
CI LA City Fire SA San Marino Fire 
CM Compton Fire SG San Gabriel Fire 
CS LA County Sheriff SI Sierra Madre Fire 
DF Downey Fire SM Santa Monica Fire 
ES El Segundo Fire SP South Pasadena Fire 
FS U.S. Forest Service SS Santa Fe Springs Fire 
GL Glendale Fire TF Torrance Fire 
LB Long Beach Fire VE Ventura County Fire 
LH La Habra Heights Fire WC West Covina Fire 
PRIVATE PROVIDERS 
AA American Professional Ambulance Corp. LE EastWest Protot, Inc. dba Lifeline Ambulance 
AB AmbuLife Ambulance, Inc. LY Filyn Corporation, dba Lynch 
AN Antelope Ambulance Service MA Mauran Ambulance Service, Inc. 
AR American Medical Response of So. Calif. MD MedTrans, Inc. 
AT All Town Ambulance, LLC MI MedResponse, Inc. 
AU AmbuServe, Inc. MR MedReach, Inc. dba MedReach Ambulance 
AW Amwest, Inc. dba Amwest Ambulance MU Mercury Ambulance Services, LLC 
CA Falck Mobile Health Corp. dba Care Ambulance MY Mercy Air 
CL California Medical Response, Inc. dba Cal- Med 
Ambulance 
PE Premier Medical Transport, Inc. dba Premier 
Ambulance 
CO College Coastal Care, LLC PN PRN Ambulance, Inc 
CW Citywide Ambulance LLC RE REACH Air Medical Service, LLC 
EA Emergency Ambulance Service, Incorporated RR Rescue Services International, Ltd. dba Medic-1 
Ambulance 
EX Explorer 1 Ambulance & Medical Services, LLC RY Royalty Ambulance Services, Inc. 
FC First Rescue Ambulance, Inc. SO Symbiosis (Di Biassi) 
FM Firstmed Ambulance Services, Inc. SY Symons Emergency Specialties, Inc. dba Symbiosis 
GR Gentle Ride Ambulance, Inc. VA Viewpoint Ambulance, Inc. 
GU Guardian Ambulance Service VI Vital Care Ambulance 
HE Heart Ambulance Corporation WE Westcoast Ambulance, Inc. 
HN Horizon OC. LLC, dba Horizon OC Ambulance WM Westmed Ambulance, Inc. dba McCormick Ambulance 
JA 
Journey via Gurney, LLC., dba Journey 
Ambulance 
ZM 
Solartricity dba Zoom Medical Transportation 
LE EastWestProto, Inc. dba Lifeline Ambulance   

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
11 
 
 
 
 
 
Uses 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
12 
 
 
 
 
 
ALS UNIT # 
 
 
Definition 
Number assigned to the Advanced Life Support (ALS) provider unit that transported 
the patient 
 
Field Values 
• Up to five-digit alphabetic and numeric field 
• ND: Not Documented 
Uses 
• System evaluation and monitoring 
Data Hierarchy 
• EMS Record 
• Base Hospital Form 
• Base Hospital Log 
• SRC Log 
• ED Records

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
13 
 
 
 
 
DISPATCH DATE 
 
 
Definition 
Date the provider was notified by dispatch of the incident 
 
Field Values 
• Collected as MMDDYYYY 
• ND: Not Documented 
Uses 
• Establishes care intervals and incident timelines 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
14 
 
 
 
 
DISPATCH TIME 
 
 
Definition 
Time of day the provider was notified by dispatch of the incident 
 
Field Values 
• Collected as HHMM 
• Use 24-hour clock 
• ND: Not Documented 
Additional Information 
• Enter the time documented by EMS, even if the time does not align with other times 
documented in the EMS record 
• Enter the earliest dispatch time and if the earliest dispatch time is after the 
prehospital ECG date/time (and the patient did not come from the clinic, doctor’s 
office, or SRF), please put a comment that the time stamped on the prehospital ECG 
was before the first dispatch time 
Uses 
• Establishes care intervals and incident timelines 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
15 
 
 
 
 
PATIENT AGE 
 
 
Definition 
Numeric value for the age (actual or best approximation) of the patient 
 
Field Values 
• Up to three-digit numeric value 
• ND: Not Documented 
Uses 
• Allows for data sorting and tracking by age 
• Assists with patient identification 
• Epidemiological statistics 
• System evaluation and monitoring 
Data Source Hierarchy 
• Facesheet 
• ED Records 
• History and Physical 
• EMS Record 
• Base Hospital Form 
• Base Hospital Log 
• Billing Sheet/Medical Records Coding Summary Sheet 
• SRC Log 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
16 
 
 
 
 
PATIENT GENDER 
 
 
Definition 
Checkbox indicating the gender of the patient 
 
Field Values 
• F: Female 
• M: Male 
• N: Nonbinary 
Additional Information 
• Patients who are undergoing or have undergone a hormonal and/or surgical sex 
reassignment should be coded using their stated preference 
• Patients unable to state their preference should be coded according to best medical 
observation/judgment 
Uses 
• Assists with patient identification 
• Epidemiological statistics 
• System evaluation and monitoring 
Data Source Hierarchy 
• Facesheet 
• ED Records 
• History and Physical 
• EMS Record 
• Base Hospital Form 
• Base Hospital Log 
• Billing Sheet/Medical Records Coding Summary Sheet 
• SRC Log 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
17 
 
 
 
 
RACE/ETHNICITY 
 
 
Definition 
Checkbox indicating the race and/or ethnicity of the patient 
 
Field Values 
• A: Asian/Non-Pacific Islander: person having origins in any of the original 
peoples of the Far East, Southeast Asia, or the Indian subcontinent including, for 
example, Cambodia, China, India, Japan, Korea, Malaysia, Pakistan, the 
Philippine Islands, Thailand, and Vietnam 
• B: Black/African American: person having origins in any of the Black racial 
groups of Africa (includes Haitians) 
• H: Latino/Hispanic: person of Cuban, Mexican, Puerto Rican, South or 
Central American, or other Spanish culture or origin, regardless of race 
• N: Native American/Alaska Native: person having origins in any of the original 
peoples of North, Central, and South America and who maintains tribal affiliation 
or community attachment 
• P: Pacific Islander/Native Hawaiian: person having origins in any of the original 
peoples of Hawaii, Guam, Samoa, or other Pacific Islands 
• W: White: person having origins in any of the original peoples of Europe, 
the Middle East, or North Africa (e.g., Caucasian, Iranian, White) 
• O: Other 
• U: Unknown: race is unknown or not documented 
Additional Information 
• Patient race/ethnicity should be coded as stated by patient or family member 
• Select all race/ethnicity field values that apply 
Uses 
• Epidemiological statistics 
• System evaluation and monitoring 
Data Source Hierarchy 
• Facesheet 
• ED Records 
• History and Physical 
• Billing Sheet/Medical Records Coding Summary Sheet 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
18 
 
 
 
 
PROVIDER IMPRESSION 
 
 
Definition 
Four-letter code(s) representing the paramedic’s primary impression of the patient’s 
presentation 
 
Field Values 
ABOP Abdominal Pain/Problems DYRX Dystonic Reaction ODPO Overdose/Poisoning/Ingestion 
ALOC ALOC – Not Hypoglycemia or 
Seizure 
DYSR Cardiac Dysrhythmia PALP Palpitations 
ALRX 
Allergic Reaction 
ELCT Electrocution PREG Pregnancy Complications 
ANPH Anaphylaxis ENTP ENT/Dental Emergencies PSYC Behavioral/Psychiatric Crisis 
BRTH Childbirth (Mother) EXNT Extremity Pain/Swelling – Non- 
Traumatic 
RARF Respiratory Arrest/Failure 
BPNT Body Pain – Non-Traumatic EYEP 
Eye Problem – Unspecified 
RDOT Resp. Distress/Other 
BURN Burn FAIL Medical Device Malfunction – 
Fail 
SEAC Seizure – Active 
CHOK Airway Obstruction/Choking FEVR 
Fever 
SEPI Seizure – Postictal 
ETOH Alcohol Intoxication GUDO Genitourinary Weakness– 
Unspecified 
SEPS Sepsis 
CANT Cardiac Arrest– Non- 
Traumatic 
HEAT 
Hyperthermia 
SHOK Shock 
CHFF Resp. Distress/Pulmonary 
Edema/CHF 
HOTN Hypotension SMOK Smoke Inhalation 
COFL 
Cold/Flu Symptoms 
HPNT Head Pain – Non-Traumatic SOBB Resp. Distress/Bronchospasm 
COLD Hypothermia/Cold Injury HYPO Hypoglycemia STNG Stings/Venomous Bites 
COMO Carbon Monoxide HYPR Hyperglycemia STRK Stroke/CVA/TIA 
CPMI Chest Pain – STEMI HYTN Hypertension SYNC Syncope/Near Syncope 
CPNC Chest Pain – Non-Cardiac INHL Inhalation Injury TRMA Traumatic Injury 
CPSC Chest Pain – Suspected 
Cardiac 
LABR Pregnancy/Labor UPGI Upper GI Bleeding 
DCON 
HazMat Skin Exposure 
LOGI Lower GI Bleeding VABL Vaginal Bleeding 
DIZZ Dizziness/Vertigo NAVM Nausea/Vomiting WEAK Weakness – General 
DRHA Diarrhea NOBL Epistaxis - Nosebleed   
DRWN Submersion/Drowning NOMC No Medical Complaint 
  
 
Additional Information 
• Enter up to two provider impressions, if applicable, by pressing down and holding the 
“Ctrl” key while making your selections 
• Do not enter more than one copy of the same provider impression code 
Uses 
• System evaluation and monitoring 
• Epidemiological statistics 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
19 
 
 
 
 
CHIEF COMPLAINT 
 
 
Definition 
Two-letter code(s) representing the patient’s most significant medical complaints 
 
Field Values 
AP Abdominal/Pelvic Pain 
AR Allergic Reaction 
AL Altered Level of Consciousness 
AE Apneic Episode 
EH Behavioral (abnormal behavior of apparent mental or emotional origin) 
OS Bleeding: Other Site (NOT associated with trauma, e.g., dialysis shunt) 
CA Cardiac Arrest (NOT associated with trauma) 
CP Chest Pain (NOT associated with trauma) 
CH Choking/Airway Obstruction 
CC Cough/Congestion 
DC Device Complaint (associated with existing medical device, e.g., g-tube, AICD, ventilator, etc.) 
DI Dizzy (sensation of spinning or feeling off-balance) 
DY Dysrhythmia 
FE Fever 
FB Foreign Body (anywhere in body) 
GI Gastrointestinal Bleeding 
HP Head Pain (NOT associated with trauma) 
HY Hypoglycemia 
IM Inpatient Medical Interfacility Transfer (IFT) of an admitted, ill (NOT injured) patient, from one 
facility to an inpatient bed at another facility, excluding ER To ER transfers 
LN Local Neuro signs (e.g., weakness, numbness, paralysis, slurred speech, facial droop, aphasia) 
NV Nausea/Vomiting 
ND Near-Drowning/Drowning (submersion causing water inhalation, unconsciousness, or death) 
NB Neck/Back Pain (NOT associated with trauma) 
NC No Medical Complaint, or signs or symptoms of illness (NOT associated with trauma) 
NO Nosebleed (NOT associated with trauma) 
OB Obstetrics (any complaint possibly related to a known pregnancy, e.g., bleeding, pain, 
hypertension) 
OP Other Pain (pain at site not listed, NOT associated with trauma – e.g., toothache, earache, etc.) 
OD Overdose (dose greater than recommended or generally given) 
PO Poisoning (ingestion of or contact with a toxic substance) 
PS Palpitations 
RA Respiratory Arrest (cessation of breathing NOT associated with trauma) 
SE Seizure (NOT associated with trauma) 
SB Shortness of Breath 
SY Syncope 
VA Vaginal Bleeding 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
20 
 
 
 
 
 
WE Weakness 
OT Other (signs or symptoms not listed above, NOT associated with trauma) 
N/D Not Documented 
 
Additional Information 
• Enter up to three complaints, if applicable, by pressing down and holding the “Ctrl” 
key while making your selections 
• Electrical shock, lightning strike, and hanging are mechanisms of injury rather than 
chief complaints – use “Other” and document the injury description in the comment 
section of the General Info tab 
• Do not enter more than one copy of the same chief complaint code 
Uses 
• System evaluation and monitoring 
• Epidemiological statistics 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 
• Base Hospital Log 
• SRC Log 
• ED Records 
• History and Physical 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
21 
 
 
 
 
SRC ED ARRIVAL DATE 
 
 
Definition 
Date the patient arrived at the SRC ED 
 
Field Values 
• Collected as MMDDYYYY 
Additional Information 
• If the patient bypassed the ED and was transported directly to the cath lab, enter the 
cath lab door date 
Uses 
• Establishes care intervals and incident timelines 
• Assists with determination of appropriate treatment and transport 
• System evaluation and monitoring 
Data Source Hierarchy 
• SRC Log 
• ED Records 
• EMS Record 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
22 
 
 
 
 
SRC ED ARRIVAL TIME 
 
 
Definition 
Time of day the patient arrived at the SRC ED 
 
Field Values 
• Collected as HHMM 
• Use 24-hour clock 
Additional Information 
• If the patient bypassed the ED and was transported directly to the cath lab, enter the 
cath lab door time 
Uses 
• Establishes care intervals and incident timelines 
• Assists with determination of appropriate treatment and transport 
• System evaluation and monitoring 
Data Source Hierarchy 
• SRC Log 
• ED Records 
• EMS Record 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
23 
 
 
 
 
ED OUTCOME 
 
 
Definition 
Checkbox indicating the disposition of the patient from the emergency department (ED) 
 
Field Values 
• DC: Discharged 
• DE: Died in ED 
• AD: Admitted 
• TX: Transferred to Another Acute Care Facility 
Additional Information 
• If patient died in the ED, ‘ED Pronounced Time’ must have a value 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Hospital Discharge Summary 
• ED Records 
• Progress Notes 
• Billing Sheet/Medical Records Coding Summary Sheet 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
24 
 
 
 
 
HOSP. DISCHARGE DATE 
 
 
Definition 
Date the patient was discharged from the SRC acute care facility 
 
Field Values 
• MMDDYYYY 
• ND: Not Documented 
Additional Information 
• Applicable when the patient: 
o Expires 
o Is discharged 
o Leaves against medical advice (AMA) 
o Leaves without being seen (LWBS) or elopes 
o Is transferred to a rehabilitation, skilled nursing, or hospice unit (at your 
facility or another facility) 
o Is transferred to an acute inpatient unit at another facility 
o Is transferred to another facility for organ procurement 
• Patients with a CPC of 5 who are transferred for organ procurement should be 
documented as “died” in the Hospital Outcome field and the discharge date 
should be documented as the date that the patient is transferred to another facility 
from the SRC for organ procurement 
Uses 
• Provides documentation of care 
• System evaluation and monitoring 
Data Source Hierarchy 
• Hospital Discharge Summary 
• Progress Notes 
• Billing Sheet/Medical Records Coding Summary Sheet 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
25 
 
 
 
 
HOSPITAL OUTCOME 
 
 
Definition 
Checkbox indicating whether the patient lived or died during their hospital stay at your 
facility 
 
Field Values 
• L: Lived 
• CL: Died in Cath Lab 
• OT: Died in Other 
Additional Information 
• If patient is considered to have brain death (e.g. candidate for organ 
procurement), the patient should be entered as: 
o CL: Died in Cath Lab or 
o OT: Died in Other 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Hospital Discharge Summary 
• Progress Notes 
• Billing Sheet/Medical Records Coding Summary Sheet 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
26 
 
 
 
 
ED PRONOUNCED TIME 
 
 
Definition 
Time of day patient was pronounced dead at your facility’s Emergency Department, if 
applicable 
 
Field Values 
• HHMM 
• ND: Not Documented 
Uses 
• Establishes care intervals and incident timelines 
• Assists with determination of appropriate treatment and transport 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Hospital Discharge Summary 
• Billing Sheet/Medical Records Coding Summary Sheet 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
27 
 
 
 
 
DNR STATUS 
 
 
Definition 
Field indicating the patient’s Do Not Resuscitate (DNR) status 
 
Field Values 
• E: Existing (DNR order in place upon arrival) 
• NE: New (DNR order written during hospital stay) 
• NO: None (patient does not have a DNR order) 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment and transport 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• ED Records 
• Other Hospital Records 
• Progress Notes 
• Hospital Discharge Summary 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
28 
 
 
 
 
COMORBIDITIES 
 
 
Definition 
Field indicating whether co-morbid conditions or factors were present (check all that 
apply) 
 
Field Values 
• BM: Body Mass Index greater than 40 
• BP: Hypertension 
• CD:  Coronary Artery Disease 
• CG: Prior CABG 
• CH: Congestive Heart Failure 
• CO: Chronic Obstructive Pulmonary Disease 
• CS: Cardiogenic Shock on presentation 
• CV: Cerebrovascular Disease 
• DM: Diabetes 
• ES: End-stage Renal Disease 
• HX: Family History of Coronary Artery Disease (CAD) 
• HL: Hyperlipidemia 
• KD: Chronic Kidney Disease 
• MI: Prior Myocardial Infarction 
• NO: None 
• PC: Prior Percutaneous Coronary Intervention (PCI) 
• PV: Peripheral Vascular Disease 
• SM: Smoker - current/recent Tobacco (within 1 year) 
• VF: Prior VF/VT Arrest 
• ND: Not Documented 
• OT: Other 
 
Additional Information 
• Enter multiple selections, if applicable, by pressing down and holding the “Ctrl” key 
while making your selections 
• If Field Value of OT: Other is selected, a description of OT: Other in the comment 
section is required 
• Body Mass Index is calculated as weight in kg divided by height in meters-squared 
• Coronary Artery Disease is defined as patient had known coronary lesions based on a 
prior catheterization or coronary CT 
• Cardiogenic shock is defined as: 
o Sustained (>30 min) episode of systolic blood pressure <90mm Hg and/or 
o Cardiac index <2.2L/min/m
2 
determined to be secondary to cardiac 
dysfunction and/or 
o Requires parenteral inotropic or vasopressor agents OR 
o Requires mechanical support (from an IABP, extracorporeal circulation, 
ventricular assist devices, etc.) to maintain blood pressure and cardiac index 
above specified levels 
• Cerebrovascular disease is defined as history of TIA or stroke 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
29 
 
 
 
 
 
• Chronic Kidney Disease is defined as a history of chronic kidney disease without 
dialysis 
• End-stage renal disease is defined as patient receiving peritoneal or hemodialysis 
• Family history of coronary artery disease is defined as a parent or sibling with history 
of myocardial infarction, PCI and/or CABG 
• Prior VF/VT Arrest is defined as a cardiac arrest in the past where the initial 
rhythm was ventricular fibrillation or ventricular tachycardia 
Uses 
• Provides documentation of assessment 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Progress Notes 
• Hospital Discharge Summary 
• Billing Sheet/Medical Records Coding Summary Sheet 
 
 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
30 
 
 
 
 
COMMENT TO OTHER 
 
 
Definition 
Field provided to specify why “Other” was selected from the Comorbidities field 
 
Field Values 
• Free-text 
Additional Information 
• Do not enter information into this field unless ‘Comorbidities’ has a Field Value 
of “Other” 
Uses 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Progress Notes 
• Other Hospital Records

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
31 
 
 
 
 
HOSP. DISPOSITION 
 
 
Definition 
Checkbox indicating the patient’s destination upon discharge from the SRC acute 
care facility 
 
Field Values 
• Home: Home/Previous place of residence 
• SNF: Extended Care/Skilled Nursing Facility (SNF) 
• Subacute: Sub-Acute/Transitional Care/Rehabilitation Care Facility 
• Acute: Other Acute Care Facility 
• Hospice: Hospice Facility 
• Organ Procurement: Transferred to other facility for organ procurement 
• Morgue: Morgue/Mortuary 
• AMA: Left Against Medical Advice (AMA)/Eloped/Left Without Being Seen (LWBS) 
• Other: Other 
Additional Information 
• If a patient is discharged home with hospice care, enter “Home” 
• If Acute: Other Acute Care Facility is selected, also select the name of the facility 
listed from the field value list of hospitals 
• If a patient was residing in an Extended/Skilled Nursing Facility prior to hospital arrival 
and is discharged back to the same Extended/Skilled Nursing Facility, enter “Home” 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Hospital Discharge Summary 
• Progress Notes 
• Billing Sheet/Medical Records Coding Summary Sheet 
 
 
  

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
32 
 
 
 
 
TRANSFER RATIONALE 
 
 
Definition 
Checkbox indicating the rationale for transfer of the patient, if applicable 
 
Field Values 
 
EC Extended Care 
Extended  Care/Skilled  Nursing  Facility (SNF)/Long  term 
Care 
FI Financial 
Decision based on financial status (i.e., cash or self-pay, 
uninsured) 
HL Higher Level of Care 
Patient required higher level of care not available at 
transferring facility 
HS Hospice 
Patient transferred to hospice 
HP Health Plan Health Plan decision 
RH Rehab Patient required rehabilitation 
OT Other 
Transfer rationale other than above  
Additional Information 
• If a patient is discharged home with hospice care, enter “Home” 
• If a patient was residing in an Extended/Skilled Nursing Facility prior to hospital arrival 
and is discharged back to the same Extended/Skilled Nursing Facility, enter “Home” 
Uses 
• Provides documentation of assessment and/or care 
• System evaluation and monitoring 
Data Source Hierarchy 
• Hospital Discharge Summary 
• Progress Notes 
• Billing Sheet/Medical Records Coding Summary Sheet 
 
 
  

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
33 
 
 
 
 
TRANSFER TO 
 
 
Definition 
Three-letter code of the name of facility to which the patient was transferred to upon 
leaving the SRC, if applicable 
Field Values 
LOS ANGELES COUNTY 9-1-1 RECEIVING HOSPITALS 
ACH Alhambra Hospital Medical Center LBM MemorialCare Long Beach Medical Center 
AHM Catalina Island Medical Center LBV 
Veteran’s Administration Hospital - Long 
Beach 
AMH USC Arcadia Hospital LCH Palmdale Regional Medical Center 
AVH Antelope Valley Medical Center LCM 
Providence Little Company of Mary Medical 
Center Torrance 
BEV Adventist Health White Memorial Montebello LMC Los Angeles General Medical Center 
BMC Southern California Hospital at Culver City MCP Mission Community Hospital 
CAL 
Dignity Health - California Hospital Medical 
Center 
MHG Memorial Hospital of Gardena 
CHH Children’s Hospital Los Angeles MLK Martin Luther King Jr. Community Hospital 
CHP Community Hospital of Huntington Park MPH Monterey Park Hospital 
CNT Centinela Hospital Medical Center NOR Norwalk Community Hospital 
CPM Coast Plaza Hospital NRH 
Dignity Health - Northridge Hospital Medical 
Center 
CSM Cedars-Sinai Medical Center OTH Other (FACILITY NOT LISTED) 
DCH PIH Health Downey Hospital OVM Olive View - UCLA Medical Center 
DFM Cedars-Sinai Marina Del Rey Hospital PAC Pacifica Hospital of the Valley 
DHL UCI Health-Lakewood  PIH PIH Health Whittier Hospital 
ELA East Los Angeles Doctors Hospital PLB College Medical Center 
ENH Encino Hospital Medical Center PVC Pomona Valley Hospital Medical Center 
FPH Emanate Health Foothill Presbyterian Hospital QOA Hollywood Presbyterian Medical Center 
GAR Garfield Medical Center QVH Emanate Health Queen of the Valley Hospital 
GEM Greater El Monte Community Hospital SDC San Dimas Community Hospital 
GMH 
Dignity Health - Glendale Memorial Hospital and 
Health Center 
SFM St. Francis Medical Center 
GSH PIH Health Good Samaritan Hospital SGC San Gabriel Valley Medical Center 
GWT Adventist Health Glendale SJH Providence Saint John’s Health Center 
HBC Hyperbaric Chamber (NON-BASIC) SJS Providence Saint Joseph Medical Center 
HCH Providence Holy Cross Medical Center SMH 
Santa Monica - UCLA Medical Center and 
Orthopaedic Hospital 
HGH Harbor-UCLA Medical Center SMM Dignity Health - St. Mary Medical Center 
HMH Huntington Hospital SOC Sherman Oaks Hospital 
HMN Henry Mayo Newhall Hospital SPP 
Providence Little Company of Mary Medical 
Center San Pedro 
HWH UCLA West Valley Medical Center  TOR Torrance Memorial Medical Center 
ICH Emanate Health Inter-Community Hospital TRM 
Providence Cedars-Sinai Tarzana Medical 
Center 
KFA Kaiser Foundation Hospital - Baldwin Park UCL Ronald Reagan UCLA Medical Center 
KFB Kaiser Foundation Hospital - Downey VHH USC Verdugo Hills Hospital 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
34 
 
 
 
 
 
KFH Kaiser Foundation Hospital - South Bay VPH Valley Presbyterian Hospital 
KFL Kaiser Foundation Hospital – Los Angeles WHH Whittier Hospital Medical Center 
KFO Kaiser Foundation Hospital - Woodland Hills WMH Adventist Health - White Memorial 
KFP Kaiser Foundation Hospital - Panorama City WVA Wadsworth VA Medical Center 
KFW Kaiser Foundation Hospital - West Los Angeles 
  
 
ORANGE COUNTY 9-1-1 RECEIVING HOSPITALS 
ANH AHMC Anaheim Regional Medical Center LPI La Palma Intercommunity Hospital 
CHO Children’s Hospital of Orange County PLH Placentia-Linda Hospital 
FHP Fountain Valley Regional Hospital SJD St. Jude Medical Center 
KHA Kaiser Foundation Hospital - Anaheim UCI 
University of California, Irvine Medical 
Center 
KFI Kaiser Foundation Hospital - Irvine WMC Orange County Global Medical Center 
LAG UCI Health-Los Alamitos 
  
SAN BERNARDINO COUNTY 9-1-1 RECEIVING HOSPITALS 
ARM Arrowhead Regional Medical Center KFN Kaiser Foundation Hospital - Ontario 
CHI Chino Valley Medical Center LLU Loma Linda University Medical Center 
DHM Montclair Hospital Medical Center SAC San Antonio Regional Hospital 
KFF Kaiser Foundation Hospital - Fontana 
  
OTHER COUNTY 9-1-1 RECEIVING HOSPITALS 
LRR Los Robles Regional Medical Center (Ventura) SIM Adventist Health Simi Valley (Ventura) 
RCC Ridgecrest Regional Hospital (Kern) SJO 
Saint John’s Regional Medical Center 
(Ventura) 
 
Uses 
• Assists with determination of appropriate treatment and transport 
• System evaluation and monitoring 
Data Source Hierarchy 
• SRC Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
35 
 
 
 
 
COMMENT 
 
 
Definition 
Field provided to document relevant information regarding the patient’s care, not 
already captured by a defined data field 
 
Field Values 
• Free-text 
Uses 
• Assists with determination of appropriate treatment and transport destination and rationale 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Notes 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
36 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
SRC 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
37 
 
 
 
 
EARLIEST REPORTED SYMPTOM ONSET DATE 
 
 
Definition 
Date when the patient first noted to have symptoms lasting longer than ten minutes 
 
Field Values 
• Collected as MMDDYYYY 
• ND: Not Documented 
Additional Information 
• If symptoms are intermittent, symptom onset can be determined by when the 
symptoms became constant in quality or intensity 
• Symptoms may include jaw pain, arm pain, shortness of breath, nausea, 
vomiting, fatigue/malaise, or other symptoms suggestive of a myocardial 
infarction 
Uses 
• Establishes care intervals and incident timelines 
• Provides documentation of assessment 
• Assists with determination of appropriate treatment and transport 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Progress Notes 
• EMS Record 
• Base Hospital Form 
• Physician’s Office/Clinic/Urgent Care Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
38 
 
 
 
 
EARLIEST REPORTED SYMPTOM ONSET TIME 
 
 
Definition 
Time of day when the patient first noted to have symptoms lasting longer than ten 
minutes 
 
Field Values 
• Collected as HHMM 
• Use 24-hour clock 
• ND: Not Documented 
Additional Information 
• If symptom onset time is not specified, it may be recorded as: 
o 0700 for morning 
o 1200 for lunchtime 
o 1500 for afternoon 
o 1800 for dinnertime 
o 2200 for evening 
o 0300 if awakened from sleep 
Uses 
• Establishes care intervals and incident timelines 
• Provides documentation of assessment 
• Assists with determination of appropriate treatment and transport 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Progress Notes 
• EMS Record 
• Base Hospital Form 
• Physician’s Office/Clinic/Urgent Care Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
39 
 
 
 
 
TRANSFER? 
 
 
Definition 
Checkbox indicating whether the patient was transferred to the SRC from another 
acute care facility 
 
Field Values 
• Y: Yes 
• N: No 
• ND: Not Documented 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• SRC Log 
• ED Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
40 
 
 
 
 
TRANSFERRING FACILITY 
 
 
Definition 
Three-letter code of the facility from which the patient was transferred, if applicable 
Field Values 
LOS ANGELES COUNTY 9-1-1 RECEIVING HOSPITALS 
ACH Alhambra Hospital Medical Center LBM MemorialCare Long Beach Medical Center 
AHM Catalina Island Medical Center LBV Veteran’s Administration Hospital - Long Beach 
AMH USC Arcadia Hospital LCH Palmdale Regional Medical Center 
AVH Antelope Valley Medical Center LCM 
Providence Little Company of Mary Medical Center 
Torrance 
BEV Adventist Health White Memorial Montebello LMC Los Angeles General Medical Center 
BMC Southern California Hospital at Culver City MCP Mission Community Hospital 
CAL 
Dignity Health - California Hospital Medical 
Center 
MHG Memorial Hospital of Gardena 
CHH Children’s Hospital Los Angeles MLK Martin Luther King Jr. Community Hospital 
CHP Community Hospital of Huntington Park MPH Monterey Park Hospital 
CNT Centinela Hospital Medical Center NOR Norwalk Community Hospital 
CPM Coast Plaza Hospital NRH Dignity Health - Northridge Hospital Medical Center 
CSM Cedars-Sinai Medical Center OTH Other (FACILITY NOT LISTED) 
DCH PIH Health Downey Hospital OVM Olive View - UCLA Medical Center 
DFM Cedars-Sinai Marina Del Rey Hospital PAC Pacifica Hospital of the Valley 
DHL UCI Health-Lakewood  PIH PIH Health Whittier Hospital 
ELA East Los Angeles Doctors Hospital PLB College Medical Center 
ENH Encino Hospital Medical Center PVC Pomona Valley Hospital Medical Center 
FPH Emanate Health Foothill Presbyterian Hospital QOA Hollywood Presbyterian Medical Center 
GAR Garfield Medical Center QVH Emanate Health Queen of the Valley Hospital 
GEM Greater El Monte Community Hospital SDC San Dimas Community Hospital 
GMH 
Dignity Health - Glendale Memorial Hospital and 
Health Center 
SFM St. Francis Medical Center 
GSH PIH Health Good Samaritan Hospital SGC San Gabriel Valley Medical Center 
GWT Adventist Health Glendale SJH Providence Saint John’s Health Center 
HBC Hyperbaric Chamber (NON-BASIC) SJS Providence Saint Joseph Medical Center 
HCH Providence Holy Cross Medical Center SMH 
Santa Monica - UCLA Medical Center and 
Orthopaedic Hospital 
HGH Harbor-UCLA Medical Center SMM Dignity Health - St. Mary Medical Center 
HMH Huntington Hospital SOC Sherman Oaks Hospital 
HMN Henry Mayo Newhall Hospital SPP 
Providence Little Company of Mary Medical Center 
San Pedro 
HWH UCLA West Valley Medical Center TOR Torrance Memorial Medical Center 
ICH Emanate Health Inter-Community Hospital TRM Providence Cedars-Sinai Tarzana Medical Center 
KFA Kaiser Foundation Hospital - Baldwin Park UCL Ronald Reagan UCLA Medical Center 
KFB Kaiser Foundation Hospital - Downey VHH USC Verdugo Hills Hospital 
KFH Kaiser Foundation Hospital - South Bay VPH Valley Presbyterian Hospital 
KFL Kaiser Foundation Hospital – Los Angeles WHH Whittier Hospital Medical Center 
KFO Kaiser Foundation Hospital - Woodland Hills WMH Adventist Health - White Memorial 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
41 
 
 
 
 
 
KFP Kaiser Foundation Hospital - Panorama City WVA Wadsworth VA Medical Center 
KFW Kaiser Foundation Hospital - West Los Angeles 
  
 
ORANGE COUNTY 9-1-1 RECEIVING HOSPITALS 
ANH AHMC Anaheim Regional Medical Center LPI La Palma Intercommunity Hospital 
CHO Children’s Hospital of Orange County PLH Placentia-Linda Hospital 
FHP Fountain Valley Regional Hospital SJD St. Jude Medical Center 
KHA Kaiser Foundation Hospital - Anaheim UCI University of California, Irvine Medical Center 
KFI Kaiser Foundation Hospital - Irvine WMC Orange County Global Medical Center 
LAG UCI Health-Los Alamitos  
  
SAN BERNARDINO COUNTY 9-1-1 RECEIVING HOSPITALS 
ARM Arrowhead Regional Medical Center KFN Kaiser Foundation Hospital - Ontario 
CHI Chino Valley Medical Center LLU Loma Linda University Medical Center 
DHM Montclair Hospital Medical Center SAC San Antonio Regional Hospital 
KFF Kaiser Foundation Hospital - Fontana 
  
OTHER COUNTY 9-1-1 RECEIVING HOSPITALS 
LRR Los Robles Regional Medical Center (Ventura) SIM Adventist Health Simi Valley (Ventura) 
RCC Ridgecrest Regional Hospital (Kern) SJO Saint John’s Regional Medical Center (Ventura) 
 
Uses 
• Assists with determination of appropriate treatment and transport 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 
• SRC Log 
• SRC ED Records 
• SRC Progress Notes 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
42 
 
 
 
 
SRF ED ARRIVAL DATE 
 
 
Definition 
Date the patient arrived at the STEMI Referral Facility (SRF) ED 
 
Field Values 
• Collected as MMDDYYYY 
• ND: Not Documented 
Uses 
• Establishes care intervals and incident timelines 
• Assists with determination of appropriate treatment and transport 
• System evaluation and monitoring 
Data Source Hierarchy 
• SRF Facesheet 
• SRF Records 
• EMS Record 
• SRC Log 
• SRC ED Records 
• Other SRC Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
43 
 
 
 
 
SRF ED ARRIVAL TIME 
 
 
Definition 
Time of day the patient arrived at the SRF ED 
 
Field Values 
• Collected as HHMM 
• Use 24-hour clock 
• ND: Not Documented 
Uses 
• Establishes care intervals and incident timelines 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• SRF Facesheet 
• SRF Records 
• EMS Record 
• SRC Log 
• SRC ED Records 
• Other SRC Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
44 
 
 
 
 
1
st
 SRF ED ECG DATE 
 
 
Definition 
Date the initial ECG was performed at the STEMI Referral Facility (SRF) ED 
 
Field Values 
• Collected as MMDDYYYY 
• ND: Not Documented 
Uses 
• Establishes care intervals and incident timelines 
• Provides documentation of care 
• Assists with determination of appropriate treatment and transport 
• System evaluation and monitoring 
Data Source Hierarchy 
• SRF Facesheet 
• SRF Records 
• EMS Record 
• Other SRC Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
45 
 
 
 
 
1
st
 SRF ED ECG TIME 
 
 
Definition 
Time of day the initial ECG was performed at the SRF ED 
 
Field Values 
• Collected as HHMM 
• Use 24-hour clock 
• ND: Not Documented 
Uses 
• Establishes care intervals and incident timelines 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• SRF Facesheet 
• SRF Records 
• EMS Record 
  

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
46 
 
 
 
NON-SYSTEM DELAYS TO SRF ECG? 
 
 
Definition 
Checkbox indicating whether there were patient-related delays to performing SRF 
ED ECG 
 
Field Values 
• Y: Yes 
• N: No 
Uses 
• Establishes care intervals and incident timelines 
• Provides documentation of care 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Progress Notes 
• Other Hospital Records 
 
  

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
47 
 
 
 
DELAYS TO SRF ED ECG 
 
 
Definition 
Checkbox indicating patient-related delays to performing SRF ED ECG 
 
Field Values 
• CA: Cardiac Arrest 
• IN: Intubation Required 
Additional Information 
• Select Cardiac Arrest if the patient was in cardiac arrest with ongoing 
resuscitation in the SRF ED 
• Select Intubation for the patient who required emergent intubation on arrival to 
the SRF ED 
• Field allows multiple field value selections. Select all field values that apply 
• Enter multiple selections, if applicable, by pressing and holding the “Ctrl” key 
while making your selections 
Uses 
• Establishes care intervals and incident timelines 
• Provides documentation of care 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
48 
 
 
 
 
1
st
 SRF STEMI ECG DATE 
 
 
Definition 
Date the first ECG performed at the SRF was interpreted as STEMI 
 
Field Values 
• Collected as MMDDYYYY 
• ND: Not Documented 
Uses 
• Establishes care intervals and incident timelines 
• Assists with determination of appropriate treatment 
• Provides documentation of care 
• System evaluation and monitoring 
Data Source Hierarchy 
• SRF ED Records 
• SRF Progress Notes 
• SRF ECG Tracing 
• EMS Record 
• Base Hospital Form 
• SRC Log 
• SRC ED Records 
• Other SRC Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
49 
 
 
 
 
1
st
 SRF STEMI ECG TIME 
 
 
Definition 
Time of day the first ECG performed at the SRF was interpreted as STEMI 
 
Field Values 
• Collected as HHMM 
• Use 24-hour clock 
• ND: Not Documented 
Uses 
• Establishes care intervals and incident timelines 
• Assists with determination of appropriate treatment 
• Provides documentation of care 
• System evaluation and monitoring 
Data Source Hierarchy 
• SRF ED Records 
• SRF Progress Notes 
• SRF ECG Tracing 
• EMS Record 
• Base Hospital Form 
• SRC Log 
• SRC ED Records 
• Other SRC Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
50 
 
 
 
 
SRF ED DEPARTURE DATE 
 
 
Definition 
Date the patient left the SRF ED en route to the SRC ED 
 
Field Values 
• Collected as MMDDYYYY 
• ND: Not Documented 
Uses 
• Establishes care intervals and incident timelines 
• Assists with determination of appropriate treatment and transport 
• System evaluation and monitoring 
Data Source Hierarchy 
• SRF Facesheet 
• SRF Records 
• EMS Record 
• SRC Log 
• SRC ED Records 
• Other SRC Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
51 
 
 
 
 
SRF ED DEPARTURE TIME 
 
 
Definition 
Time of day the patient left the SRF en route to the SRC ED 
 
Field Values 
• Collected as HHMM 
• Use 24-hour clock 
• ND: Not Documented 
Additional Information 
• If departure time is not documented by the SRF, it is acceptable to use the departure 
time (‘Left’ time) documented by the medic on the EMS record 
Uses 
• Establishes care intervals and incident timelines 
• Assists with determination of appropriate treatment and transport 
• System evaluation and monitoring 
Data Source Hierarchy 
• SRF Facesheet 
• SRF ED Records 
• EMS Record 
• SRC Log 
• SRC ED Records 
• Other SRC Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
52 
 
 
 
 
PREHOSPITAL ECG PERFORMED? 
 
 
Definition 
Checkbox indicating whether an ECG was performed by EMS Personnel, 
Physician’s Office, Clinic or Urgent Care prior to the patient’s arrival at the SRC ED 
 
Field Values 
• Y: Yes 
• N: No 
• ND: Not Documented 
Uses 
• Assists with determination of appropriate treatment 
• Provides documentation of care 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 
• Physician’s Office/Clinic/Urgent Care Records 
• SRC Log 
• ED Records 
• Progress Notes 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
53 
 
 
 
 
1
st
 PREHOSPITAL ECG DATE 
 
 
Definition 
Date of the first ECG performed by EMS Personnel, Physician’s Office, Clinic or Urgent 
Care prior to the patient’s arrival at the SRC ED 
 
Field Values 
• Collected as MMDDYYYY 
• ND: Not Documented 
Additional Information 
• Enter the date of the first ECG performed, regardless of impression 
Uses 
• Establishes care intervals and incident timelines 
• Assists with determination of appropriate treatment 
• Provides documentation of care 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 
• Physician’s Office/Clinic/Urgent Care Records 
• SRC Log 
• ECG Tracing 
• ED Records 
• Progress Notes 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
54 
 
 
 
 
1
st
 PREHOSPITAL ECG TIME 
 
 
Definition 
Time of day of the first ECG performed by EMS Personnel, Physician’s Office, 
Clinic or Urgent Care prior to the patient’s arrival at the SRC ED 
 
Field Values 
• Collected as HHMM 
• Use 24-hour clock 
• ND: Not Documented 
Additional Information 
• Enter the time of the first ECG performed, regardless of impression 
• Enter the time documented by EMS, even if the time does not align with other times 
documented in the EMS record 
Uses 
• Establishes care intervals and incident timelines 
• Assists with determination of appropriate treatment 
• Provides documentation of care 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 
• Physician’s Office/Clinic/Urgent Care Records 
• SRC Log 
• ECG Tracing 
• ED Records 
• Progress Notes 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
55 
 
 
 
 
1
st
 PREHOSPITAL ECG PERFORMED BY 
 
 
Definition 
Checkbox indicating who performed the first ECG prior to the patient’s arrival at the 
SRC ED 
 
Field Values 
• EMS: EMS Personnel 
• Clinic: Physician’s office, clinic, urgent care, other facility where medical care 
provided, etc. 
• ND: Not Documented 
Additional Information 
• Enter the information from the first ECG performed, regardless of impression 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 
• Physician’s Office/Clinic/Urgent Care Records 
• ED Records 
• Progress Notes 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
56 
 
 
 
 
PRE-HOSPITAL ECG=STEMI? 
 
 
Definition 
Checkbox indicating whether any of the ECGs performed prior to the patient’s 
arrival at the SRC ED had an interpretation of STEMI 
 
Field Values 
• Y: Yes 
• N: No 
• ND: Not Documented 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment and transport 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 
• Physician’s Office/Clinic/Urgent Care Records 
• ED Records 
• Progress Notes 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
57 
 
 
 
 
1
st
 PREHOSPITAL STEMI ECG DATE 
 
 
Definition 
Date of the first ECG performed prior to the patient’s arrival at the SRC ED that was 
interpreted as STEMI 
 
Field Values 
• Collected as MMDDYYYY 
• ND: Not Documented 
Uses 
• Establishes care intervals and incident timelines 
• Assists with determination of appropriate treatment 
• Provides documentation of care 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 
• Physician’s Office/Clinic/Urgent Care Records 
• SRC Log 
• ECG Tracing 
• ED Records 
• Progress Notes 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
58 
 
 
 
 
1
st
 PREHOSPITAL STEMI ECG TIME 
 
 
Definition 
Time of day of the first ECG performed prior to the patient’s arrival at the SRC ED 
that was interpreted as STEMI, if applicable 
 
Field Values 
• Collected as HHMM 
• Use 24-hour clock 
• ND: Not Documented 
Additional Information 
• Enter the time documented by EMS, even if the time does not align with other times 
documented in the EMS record 
Uses 
• Establishes care intervals and incident timelines 
• Assists with determination of appropriate treatment 
• Provides documentation of care 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 
• Physician’s Office/Clinic/Urgent Care Records 
• SRC Log 
• ECG Tracing 
• ED Records 
• Progress Notes 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
59 
 
 
 
 
SOFTWARE INTERPRETED STEMI? 
 
 
Definition 
Checkbox indicating whether STEMI was interpreted by prehospital equipment software 
 
Field Values 
• Y: Yes 
• N: No 
• ND: Not Documented 
Additional Information 
• Indicate yes if the software interpretation is ***MEETS ST ELEVATION MI 
CRITERIA*** (Physio-Control) or ***STEMI*** (Zoll) or other manufacturer equivalent 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 
• ECG Tracing 
• ED Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
60 
 
 
 
 
EMS INTERPRETED STEMI? 
 
 
Definition 
Checkbox indicating whether STEMI was identified by EMS interpretation of the ECG 
 
Field Values 
• Y: Yes 
• N: No 
• ND: Not Documented 
Additional Information 
• Indicate yes if there is an EMS interpretation of STEMI with 1-2 mm of ST Elevation 
in two (2) contiguous leads 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 
• ECG Tracing 
• ED Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
61 
 
 
 
 
WAS THE PREHOSPITAL ECG RECEIVED PRIOR TO 
PATIENT ARRIVAL? 
 
 
Definition 
Checkbox indicating whether a transmitted copy of the prehospital ECG was 
received by the SRC ED prior to the patient’s arrival 
 
Field Values 
• Y: Yes 
• N: No 
• ND: Not Documented 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ECG Receiving Equipment (Cloud/Xchanger/Email/Fax) 
• SRC Log 
• ED Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
62 
 
 
 
 
PREHOSPITAL ECG RECEIVED DATE 
 
 
Definition 
Date the prehospital ECG was received by your facility’s ECG receiving equipment 
 
Field Values 
• Collected as MMDDYYYY 
• ND: Not Documented 
Additional Information 
• ECG receiving equipment includes the Cloud, Xchanger, email (Gmail, etc.), or fax 
• Enter “ND” if the prehospital ECG was not received by your facility’s ECG receiving 
equipment 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ECG Receiving Equipment 
• SRC Log 
• ED Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
63 
 
 
 
 
PREHOSPITAL ECG RECEIVED TIME 
 
 
Definition 
Time of day the prehospital ECG was received by your facility’s ECG receiving 
equipment 
 
Field Values 
• Collected as HHMM 
• Use 24-hour clock 
• ND: Not Documented 
Additional Information 
• ECG receiving equipment includes the Cloud, Xchanger, email (Gmail, etc.), or fax 
• Enter “ND” if the prehospital ECG was not received by your facility’s ECG receiving 
equipment 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ECG Receiving Equipment 
• SRC Log 
• ED Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
64 
 
 
 
 
WAS THE PREHOSPITAL ECG REVIEWED BY THE ED 
MD? 
 
 
Definition 
Checkbox indicating whether a transmitted copy of the prehospital ECG was 
reviewed by the SRC ED MD prior to the patient’s arrival 
 
Field Values 
• Y: Yes 
• N: No 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• SRC Log 
• ED Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
65 
 
 
 
 
ED MD PREHOSPITAL ECG REVIEW DATE 
 
 
Definition 
Date the prehospital ECG was reviewed by the SRC ED MD 
 
Field Values 
• Collected as MMDDYYYY 
• ND: Not Documented 
Additional Information 
• Enter “ND” if the prehospital ECG was not reviewed by the SRC ED MD 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• SRC Log 
• ED Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
66 
 
 
 
 
ED MD PREHOSPITAL ECG REVIEW TIME 
 
 
Definition 
Time of day the prehospital ECG was reviewed by the SRC ED MD 
 
Field Values 
• Collected as HHMM 
• Use 24-hour clock 
• ND: Not Documented 
Additional Information 
• Enter “ND” if the prehospital ECG was not reviewed by the SRC ED MD 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• 
• SRC Log 
• ED Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
67 
 
 
 
 
SRC ED ECG PERFORMED? 
 
 
Definition 
Checkbox indicating whether an ECG was performed in the SRC ED 
 
Field Values 
• Y: Yes 
• N: No 
• ND: Not Documented 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ECG Tracing 
• ED Records 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
68 
 
 
 
 
INITIAL SRC ED ECG DATE 
 
 
Definition 
Date the initial ECG was performed at the SRC ED 
 
Field Values 
• Collected as MMDDYYYY 
• ND: Not Documented 
Additional Information 
• Enter the date of the first ECG performed at the SRC ED, regardless of impression 
Uses 
• Establishes care intervals and incident timelines 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ECG Tracing 
• ED Records 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
69 
 
 
 
 
INITIAL SRC ED ECG TIME 
 
 
Definition 
Time of day the initial ECG was performed at the SRC ED 
 
Field Values 
• Collected as HHMM 
• Use 24-hour clock 
• ND: Not Documented 
Additional Information 
• Enter the time of the first ECG performed at the SRC ED, regardless of impression 
Uses 
• Establishes care intervals and incident timelines 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ECG Tracing 
• ED Records 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
70 
 
 
 
 
NON-SYSTEM DELAYS TO SRC ECG? 
 
 
Definition 
Checkbox indicating whether there were patient-related delays to performing SRC 
ED ECG 
 
Field Values 
• Y: Yes 
• N: No 
Uses 
• Establishes care intervals and incident timelines 
• Provides documentation of care 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
71 
 
 
 
 
DELAYS TO SRC ED ECG 
 
 
Definition 
Checkbox indicating patient-related delays to performing SRC ED ECG 
 
Field Values 
• CA: Cardiac Arrest 
• Intubation: Intubation Required 
Additional Information 
• Select Cardiac Arrest if the patient was in cardiac arrest with ongoing 
resuscitation in the SRC ED 
• Select Intubation for the patient who required emergent intubation on arrival to 
the SRC ED 
• Field allows multiple field value selections. Select all field values that apply 
• Enter multiple selections, if applicable, by pressing and holding the “Ctrl” key 
while making your selections 
Uses 
• Establishes care intervals and incident timelines 
• Provides documentation of care 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
72 
 
 
 
 
STEMI IDENT. ON INITIAL SRC ED ECG? 
 
 
Definition 
Checkbox indicating whether the initial ECG performed at the SRC ED had a physician 
interpretation of STEMI 
 
Field Values 
• Y: Yes 
• N: No 
• ND: Not Documented 
Uses 
• Provides documentation of assessment 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ECG Tracing 
• ED Records 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
73 
 
 
 
 
STEMI IDENT. ON SUBSEQUENT SRC ED ECG? 
 
 
Definition 
Checkbox indicating whether a subsequent ECG performed at the SRC ED had a 
physician interpretation of STEMI 
 
Field Values 
• Y: Yes 
• N: No 
• ND: Not Documented 
Additional Information 
• Only enter a value when the initial SRC ED ECG is negative for STEMI and there is a 
repeat ECG positive for STEMI 
Uses 
• Provides documentation of assessment 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ECG Tracing 
• ED Records 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
74 
 
 
 
 
SUBSEQUENT SRC ED STEMI ECG DATE 
 
 
Definition 
Date that a subsequent ECG performed at the SRC ED had a physician interpretation of 
STEMI 
 
Field Values 
• Collected as MMDDYYYY 
• ND: Not Documented 
Additional Information 
• Only enter the date of the subsequent SRC ED ECG when the initial SRC ED ECG is 
negative for STEMI and there is a repeat ECG positive for STEMI 
Uses 
• Establishes care intervals and incident timelines 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ECG Tracing 
• ED Records 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
75 
 
 
 
 
SUBSEQUENT SRC ED STEMI ECG TIME 
 
 
Definition 
Time of day that a subsequent ECG performed at the SRC ED had a physician 
interpretation of STEMI 
 
Field Values 
• Collected as HHMM 
• Use 24-hour clock 
• ND: Not Documented 
Additional Information 
• Only enter the time of the subsequent SRC ED ECG when the initial SRC ED ECG is 
negative for STEMI and there is a repeat ECG positive for STEMI 
Uses 
• Establishes care intervals and incident timelines 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ECG Tracing 
• ED Records 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
76 
 
 
 
 
SRC ED SBP 
 
 
Definition 
Patient’s initial SRC ED systolic blood pressure (SBP) 
 
Field values 
• Up to three-digit numeric field 
Additional Information 
• Value cannot be greater than 300 
• If the patient bypassed the ED and was transported directly to the cath lab, enter the 
initial cath lab SBP 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Progress Notes 
• Cath Lab Report 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
77 
 
 
 
 
SRC ED HR 
 
 
Definition 
Patient’s initial SRC ED heart rate (HR) 
 
Field values 
• Up to three-digit numeric field 
Additional Information 
• If the patient bypassed the ED and was transported directly to the cath lab, enter the 
initial cath lab HR 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Progress Notes 
• Cath Lab Report 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
78 
 
 
 
 
ELEVATED TROPONIN? 
 
 
Definition 
Checkbox indicating whether the troponin level was elevated above lab threshold within 
the first 24 hours from SRC ED arrival 
 
Field Values 
• Y: Yes 
• N: No 
• D: Not Drawn 
 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Lab Records 
• Progress Notes 
• Other Hospital Records 
• ED Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
79 
 
 
 
 
PEAK TROPONIN VALUE 
 
 
Definition 
The highest troponin value resulted within the first 24 hours from SRC ED arrival 
 
Field Values 
• Up to seven-digit numeric value 
Additional Information 
• Include decimals when indicated 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Lab Records 
• Progress Notes 
• Other Hospital Records 
• ED Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
80 
 
 
 
 
PEAK TROPONIN VALUE UNITS 
 
 
Definition 
The units associated with the highest troponin value resulted within the first 24 hours 
from SRC ED arrival 
 
Field Values 
• ngmL: ng/mL 
• ngL: ng/L 
• pgmL: pg/mL 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Lab Records 
• Progress Notes 
• Other Hospital Records 
• ED Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
81 
 
 
 
 
FIBRINOLYTIC INFUSION? 
 
 
Definition 
Checkbox indicating whether the patient received a fibrinolytic infusion at the 
SRF or SRC ED as an urgent treatment for a STEMI 
 
Field Values 
• Y: Yes 
• N: No 
• ND: Not Documented 
Additional Information: 
• Do not include the fibrinolytics used during percutaneous intervention (PCI) 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Medication Records 
• ED Records 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
82 
 
 
 
 
FIBRINOLYTIC INFUSION DATE 
 
 
Definition 
Date patient received a fibrinolytic infusion at the SRF or SRC ED, if applicable 
 
Field Values 
• Collected as MMDDYYYY 
• ND: Not Documented 
Uses 
• Establishes care intervals and incident timelines 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• SRF Records 
• Medication Records 
• ED Records 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
83 
 
 
 
 
FIBRINOLYTIC INFUSION TIME 
 
 
Definition 
Time of day the patient received a fibrinolytic infusion at the SRF or SRC ED, if 
applicable 
 
Field Values 
• Collected as HHMM 
• Use 24-hr clock 
• ND: Not Documented 
Additional Information 
• Enter the time the infusion began 
Uses 
• Establishes care intervals and incident timelines 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• SRF Records 
• Medication Records 
• ED Records 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
84 
 
 
 
 
CL ACTIVATED FROM PRE-SRC OR SRC ED? 
 
 
Definition 
Checkbox indicating whether the cath lab (CL) team was activated from pre-SRC or 
SRC ED 
 
Field Values 
• Y: Yes 
• N: No 
• ND: Not Documented 
Additional Information 
• Enter “No” if the patient was routed to the CL from an inpatient bed 
Uses 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Cath Lab Pager 
• ED Records 
• SRC Log 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
85 
 
 
 
 
REASON CL NOT ACTIVATED 
 
 
Definition 
Checkbox indicating the primary reason why the CL team was not activated from 
pre-SRC or SRC ED 
 
Field Values 
• MD Interpret.: Physician Interpretation is not a STEMI 
• Vasospasm: Vasospasm 
• DNR: DNR 
• Refused: Patient refused 
• Expired: Patient expired 
• Other: Other 
• ND: Not Documented 
Additional Information 
• MD Interpretation includes a review of the ECG by the ED Physician or 
Cardiologist and it is determined that the ECG does not show ST elevation 
• If “Other” is marked, must document reason in ‘Comment to Other’ field 
Uses 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• SRC Log 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
86 
 
 
 
 
COMMENT TO OTHER 
 
 
Definition 
Field provided to specify why “Other” was selected as the primary reason why the CL 
team was not activated 
 
Field Values 
• Free-text 
Additional Information 
• Do not enter information into this field unless ‘Reason CL Not Activated’ has a 
value of “Other” 
Uses 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
87 
 
 
 
 
DIAGNOSIS AT DISCHARGE 
 
 
Definition 
Checkbox indicating whether any of the below diagnoses were included in the list of 
final diagnoses for the patient 
 
Field Values 
• STEMI: STEMI 
• NSTEMI: NSTEMI 
• Neither: Neither 
Additional Information 
• Patients with a final diagnosis of STEMI would have any of the following ICD-10 
codes (and their sub lists, if applicable): 
o I21.0 
o I21.1 
o I21.2 
o I21.3 
o I22.0 
o I22.1 
o I22.8 
o I22.9 
• Patients with a final diagnosis of NSTEMI would have any of the following ICD- 
10 codes (and their sub lists, if applicable): 
o I21.4 
o I22.2 
Uses 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• SRC Log 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
88 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
CL 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
89 
 
 
 
 
PT LOCATION WHEN CL ACTIVATED 
 
 
Definition 
Patient’s location when the CL team was activated 
 
Field Values 
• Pre-SRC: Pre-SRC 
• SRC: SRC ED 
• ND: Not Documented 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• SRC Log 
• Cath Lab Report 
• EMS Record 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
90 
 
 
 
 
CL ACTIVATION DATE 
 
 
Definition 
Date the CL team was activated 
 
Field Values 
• Collected as MMDDYYYY 
• ND: Not Documented 
Additional Information 
• If the CL activation was cancelled and then re-activated, enter the date it was re- 
activated 
Uses 
• Establishes care intervals and incident timelines 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Cath Lab Pager 
• SRC Log 
• ED Records 
• Cath Lab Report 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
91 
 
 
 
 
CL ACTIVATION TIME 
 
 
Definition 
Time of day the CL team was activated 
 
Field Values 
• Collected as HHMM 
• Use 24-hour clock 
• ND: Not Documented 
Additional Information 
• If the CL activation was cancelled and then re-activated, enter the time it was re- 
activated 
Uses 
• Establishes care intervals and incident timelines 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Cath Lab Pager 
• SRC Log 
• ED Records 
• Cath Lab Report 
• Other Hospital Reports 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
92 
 
 
 
 
DID THE PATIENT GO TO THE CATH LAB? 
 
 
Definition 
Checkbox indicating whether the patient went to the cath lab 
 
Field Values 
• Y: Yes 
• N: No 
• ND: Not Documented 
Uses 
• Establishes care intervals and incident timelines 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• SRC Log 
• ED Records 
• Cath Lab Report 
• Other Hospital Reports 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
93 
 
 
 
 
REASON PT DID NOT GO TO CL 
 
 
Definition 
Checkbox indicating the primary reason why the patient was not transported to the 
cath lab directly from the field or ED 
 
Field Values 
• MD Interpret.: Physician Interpretation is not a STEMI 
• Age: Age 
• Allergy: Allergic to contrast 
• CL Not Avail: Cath lab not available 
• DNR: DNR 
• Co-morbid: Co-morbidities 
• Multi-vessel: Known multi-vessel disease 
• CABG: CABG (candidate or recent surgery) 
• Vasospasm: Vasospasm 
• Refused: Patient refused 
• Expired: Patient expired 
• Other: Other 
• ND: Not documented 
Additional Information 
• MD Interpretation includes a review of the ECG by the ED Physician or 
Cardiologist and it is determined that the ECG does not show ST elevation 
• If “Other” is marked, must document reason in ‘Comment to Other’ field 
Uses 
• Provides documentation of assessment 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Cath Lab Report 
• Progress Notes 
• ED Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
94 
 
 
 
 
COMMENT TO OTHER 
 
 
Definition 
Field provided to specify why “Other” was selected as the primary reason why 
patient did not go to cath lab directly from the field or ED 
 
Field Values 
• Free- text 
Additional Information 
• Do not enter information into this field unless ‘Reason Pt Did Not Go to CL’ has a 
value of “Other” 
Uses 
• Provides documentation of assessment 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Cath Lab Report 
• Progress Notes 
• ED Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
95 
 
 
 
 
LOCATION OF PATIENT WHEN ROUTED TO CATH LAB 
 
 
Definition 
Patient’s location when directed to the cath lab 
 
Field Values 
• E: SRC ED 
• P: Pre-SRC 
• I: Inpatient 
Additional Information 
• Enter “SRC ED” if the patient was transported to the cath lab from the SRC ED 
• Enter “Pre-SRC” if the patient was transported directly to the cath lab by EMS and did 
not stop in the SRC ED 
• Enter “Inpatient” if the patient was transported to the cath lab from an inpatient bed 
within 24 hours of hospital admission (time that admitting orders were placed) 
Uses 
• Establishes care intervals and incident timelines 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• SRC Log 
• ED Records 
• Cath Lab Report 
• Other Hospital Reports 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
96 
 
 
 
 
CL ARRIVAL DATE 
 
 
Definition 
Date patient arrived in the cath lab 
 
Field Values 
• Collected as MMDDYYYY 
• ND: Not Documented 
Uses 
• Establishes care intervals and incident timelines 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Cath Lab Report 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
97 
 
 
 
 
CL ARRIVAL TIME 
 
 
Definition 
Time of day patient arrived in the cath lab 
 
Field Values 
• Collected as HHMM 
• Use 24-hour clock 
• ND: Not Documented 
Uses 
• Establishes care intervals and incident timelines 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Cath Lab Report 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
98 
 
 
 
 
CATH STATUS 
 
 
Definition 
Checkbox indicating the urgency of the primary diagnostic catheterization 
 
Field Values 
• E: Emergent 
• U: Urgent 
• S: Salvage 
Additional Information 
• Emergent: there is a concern for ongoing STEMI 
• Urgent: inpatient procedure prior to discharge, includes non-salvage 
catheterization following ROSC 
• Salvage: last resort to save the patient’s life, defined by the presence of at least 
one of the following: 
o The patient is in cardiogenic shock at the start of the procedure OR 
o The patient has received chest compressions within ten minutes of the 
start of the procedure OR 
o The patient was on unanticipated extracorporeal support 
Uses 
• Provides documentation of assessment 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Cath Lab Report 
• Progress Notes 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
99 
 
 
 
 
ARTERIAL ACCESS SITE 
 
 
Definition 
Checkbox indicating the location used to gain vascular access for catheterization 
 
Field Values 
• F: Femoral only 
• B: Brachial only 
• R: Radial only 
• FB: Femoral then Brachial 
• FR: Femoral then Radial 
• BF: Brachial then Femoral 
• RF: Radial then Femoral 
• RB: Radial then Brachial 
• ND: Not Documented 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Cath Lab Report 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
100 
 
 
 
 
PCI PERFORMED? 
 
 
Definition 
Checkbox indicating whether a PCI, or placement of a device for the purpose of 
mechanical coronary revascularization, was performed 
 
Field Values 
• Y: Yes 
• N: No 
• ND: Not Documented 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Cath Lab Report 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
101 
 
 
 
 
PCI PROCEDURE PERFORMED 
 
 
Definition 
Checkbox indicating which type of PCI, or placement of a device for the purpose of 
mechanical coronary revascularization, was performed 
 
Field Values 
• Wire: Guidewire 
• Thrombectomy: Mechanical Thrombectomy 
• Balloon: Balloon Angioplasty 
• Stent: Cardiac Stent Placed 
• OT: Other 
Additional Information 
• Field allows multiple field value selections. Select all field values that apply 
• Enter multiple selections, if applicable, by pressing and holding the “Ctrl” key 
while making your selections 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Cath Lab Report 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
102 
 
 
 
 
REASON PCI NOT PERFORMED 
 
 
Definition 
Checkbox indicating the primary reason why PCI was not performed 
 
Field Values 
• CABG: Candidate for CABG 
• No Access: Unable to Gain Vascular Access 
• Lesion Unable: Unable to Cross Lesion 
• Multi-vessel: Multi-Vessel Disease 
• No Lesions: No Lesions Found/Normal Coronaries 
• Expired: Patient Expired in Cath Lab 
• Takotsubo: Takotsubo Syndrome 
• Spasm: Vessel Spasm 
• Other: Other 
• ND: Not Documented 
Additional Information 
• If “Other” is marked, must document reason in ‘Comment to Other’ field 
Uses 
• Provides documentation of assessment 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Cath Lab Report 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
103 
 
 
 
 
COMMENT TO OTHER 
 
 
Definition 
Field provided to specify why “Other” was selected as the primary reason why PCI 
was not performed 
 
Field Values 
• Free- text 
Additional Information 
• Do not enter information into this field unless ‘Reason PCI Not Performed’ has a 
value of “Other” 
Uses 
• Provides documentation of assessment 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Cath Lab Report 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
104 
 
 
 
 
PCI DATE 
 
 
Definition 
Date PCI was performed 
 
Field Values 
• Collected as MMDDYYYY 
• ND: Not Documented 
Additional Information 
• Use the date that the first device (excluding guidewire) intervened at the culprit lesion 
during the first PCI only 
Uses 
• Establishes care intervals and incident timelines 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Cath Lab Report 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
105 
 
 
 
 
PCI TIME 
 
 
Definition 
Time of day PCI was performed 
 
Field Values 
• Collected as HHMM 
• Use 24-hour clock 
• ND: Not Documented 
Additional Information 
• Use the time that the first device (excluding guidewire) intervened at the culprit lesion 
during the first PCI only 
• 
Uses 
• Establishes care intervals and incident timelines 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Cath Lab Report 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
106 
 
 
 
 
NON-SYSTEM DELAYS TO PCI? 
 
 
Definition 
Checkbox indicating whether there were patient-related delays to performing PCI 
 
Field Values 
• Y: Yes 
• N: No 
• ND: Not Documented 
Uses 
• Establishes care intervals and incident timelines 
• Provides documentation of care 
• System evaluation and monitoring 
Data Source Hierarchy 
• Cath Lab Report 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
107 
 
 
 
 
DELAYS TO PCI 
 
 
Definition 
Checkbox indicating patient-related delays to performing PCI 
 
Field Values 
• Access: Difficulty Obtaining Vascular Access 
• CA: Cardiac Arrest 
• Consent: Consent Delay 
• EC: Extracorporeal Membrane Oxygenation 
• IA: Intra Aortic Balloon Pump 
• IM: Impella Ventricular Support System 
• Intubation: Intubation Required 
• Lesion: Difficulty Crossing Lesion 
• Other: Other 
• ND: Not Documented 
Additional Information 
• If there is a change in approach, select “Access: Difficulty Obtaining Vascular 
Access” 
• If “Other” is marked, must document reason in ‘Comment to Other’ field 
• Enter multiple selections, if applicable, by pressing and holding the “Ctrl” key 
while making your selections 
Uses 
• Establishes care intervals and incident timelines 
• Provides documentation of care 
• System evaluation and monitoring 
Data Source Hierarchy 
• Cath Lab Report 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
108 
 
 
 
 
COMMENT TO OTHER 
 
 
Definition 
Field provided to specify why “Other” was selected as the reason why there were patient- 
related delays to performing PCI 
 
Field Values 
• Free-text 
Additional Information 
• Do not enter information into this field unless ‘Delays to PCI’ has a value of 
“Other” 
Uses 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Cath Lab Report 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
109 
 
 
 
 
CULPRIT LESION? 
 
 
Definition 
Checkbox indicating whether the primary lesion responsible for the acute coronary 
event was located 
 
Field Values 
• Y: Yes 
• N: No 
• ND: Not Documented 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Additional Information 
• Refers to the primary lesion responsible for the acute coronary event as 
documented by the interventionalist 
• If more than one lesion is stented, the lesion in the segment supplying blood to 
the largest area of myocardium should be considered the culprit lesion 
Data Source Hierarchy 
• Cath Lab Report 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
110 
 
 
 
 
CULPRIT LESION LOCATION 
 
 
Definition 
Checkbox indicating the segment where the primary lesion responsible for the 
acute coronary event was located 
 
Field Values 
 
Culprit Lesion Segment Location 
pRCA Proximal right coronary artery conduit mCIRC Mid-circumflex artery 
mRCA Mid-right coronary artery conduit dCIRC Distal circumflex artery 
dRCA Distal right coronary artery conduit 1
st
 OM First obtuse marginal branch 
rPDA Right posterior descending artery Lat 1
st
 OM Lateral first obtuse marginal branch 
rPAV Right posterior atrioventricular 2
nd
 OM Second obtuse marginal branch 
1
st
 RPL First right posterolateral Lat 2
nd
 OM Lateral second obtuse marginal branch 
2
nd
 RPL Second right posterolateral 3
rd
 OM Third obtuse marginal branch 
3
rd
 RPL Third right posterolateral Lat 3
rd
 OM Lateral third obtuse marginal branch 
pDSP Posterior descending septal perforators CIRC AV Circumflex artery AV groove continuation 
aMarg Acute marginal(s) 1
st
 LPL First left posterolateral branch 
LM Left main coronary artery 2
nd
 LPL Second left posterolateral branch 
pLAD Proximal LAD artery 3
rd
 LPL Third left posterolateral branch 
mLAD Mid - LAD artery LPDA Left posterolateral descending artery 
dLAD Distal LAD artery Ramus Ramus intermedius 
1
st
 Diag First diagonal branch Lat Ramus Lateral ramus intermedius 
Lat 1
st
 Diag Lateral first diagonal branch 3
rd
 Diag Third diagonal branch 
2
nd
 Diag Second diagonal branch Lat 3
rd
 Diag Lateral third diagonal branch 
Lat 2
nd
 Diag Lateral second diagonal branch OTH Other 
LAD SP LAD septal perforator ND Not Documented 
pCIRC Proximal circumflex artery 
  
 
Additional Information 
• If more than one lesion is stented, the lesion in the segment supplying blood to 
the largest area of myocardium should be considered the culprit lesion 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Cath Lab Report 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
111 
 
 
 
 
PT INCURRED INTRA- OR POST-PROCEDURAL 
STROKE? 
 
 
Definition 
Checkbox indicating whether the patient experienced stroke signs or symptoms during or 
immediately following the PCI procedure that did not resolve within 24 hours 
 
Field Values 
• Y: Yes 
• N: No 
• ND: Not Documented 
Additional Information 
• Check “Yes” if symptoms started during the PCI procedure and did not resolve within 
24 hours after the procedure 
Uses 
• Provides documentation of assessment 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Cath Lab Report 
• Progress Notes 
• Billing Sheet/ Medical Records Coding Summary Sheet 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
112 
 
 
 
 
PT REQUIRED INTRA- OR POST-PROCEDURE 
TRANSFUSION? 
 
 
Definition 
Checkbox indicating whether the patient experienced a vascular complication requiring 
transfusion of packed red blood cells (PRBCs) 
 
Field Values 
• Y: Yes 
• N: No 
• ND: Not Documented 
Uses 
• Provides documentation of assessment 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Cath Lab Report 
• Progress Notes 
• Billing Sheet/ Medical Records Coding Summary Sheet 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
113 
 
 
 
 
WAS A HEMODYNAMIC SUPPORT DEVICE USED? 
 
 
Definition 
Checkbox indicating whether the patient had a hemodynamic support device used 
 
Field Values 
• Y: Yes 
• N: No 
Additional Information 
• Hemodynamic support devices include Impella, IABP, or ECMO 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Operative Report 
• Cath Lab Report 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
114 
 
 
 
 
IF YES, WHAT TYPE OF DEVICE? 
 
 
Definition 
Checkbox indicating the type of hemodynamic support device that was used, if 
applicable 
 
Field Values 
• EC: ECMO 
• IA: Intra-Aortic Balloon Pump (IABP) 
• IM: Impella 
• OT: Other 
Additional Information 
• If “Other” is marked, must document reason in ‘Comment to Other’ field 
• Enter multiple selections, if applicable, by pressing and holding the “Ctrl” key 
while making your selections 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Operative Report 
• Cath Lab Report 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
115 
 
 
 
 
COMMENT TO OTHER 
 
 
Definition 
Field provided to specify what “Other” hemodynamic device was used 
 
Field Values 
• Free-text 
Additional Information 
• Do not enter information into this field unless ‘If Yes, What Type Of Device?” 
has a value of “Other” 
Uses 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Cath Lab Report 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
116 
 
 
 
 
WHEN WAS THE HEMODYNAMIC SUPPORT DEVICE 
PLACED? 
 
 
Definition 
Checkbox indicating whether the patient had a hemodynamic support device used prior 
to initiating the PCI procedure, intra PCI procedure or post-PCI procedure. 
 
Field Values 
• AP: After PCI Procedure 
• BP: Before PCI Procedure 
• HD: Hemodynamic Support Device Only 
Additional Information 
• If a hemodynamic support device was placed but PCI was not performed, select 
value “HD: Hemodynamic Device Only” 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Operative Report 
• Cath Lab Report 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
117 
 
 
 
 
CABG PERFORMED? 
 
 
Definition 
Checkbox indicating whether the patient had Coronary Artery Bypass Grafting (CABG) 
performed during the same hospitalization 
 
Field Values 
• Y: Yes 
• N: No 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Operative Report 
• Cath Lab Report 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
118 
 
 
 
 
CABG STATUS 
 
 
Definition 
Checkbox indicating the urgency of the CABG 
 
Field Values 
• U: Urgent 
• E: Emergent 
• S: Salvage 
• EL: Elective 
• ND: Not Documented 
Additional Information 
• Urgent: procedure required during same hospitalization to minimize deterioration 
• Emergent: patient has ischemic or mechanical dysfunction that is not responsive 
to any form of therapy except surgery 
• Salvage: last resort to save the patient’s life, defined by the presence of CPR en 
route to the operating room, or prior to induction of anesthesia 
• Elective: patient’s cardiac function has been stable prior to the operation, 
procedure can be deferred without risk of compromising cardiac outcome 
Uses 
• Provides documentation of assessment 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Operative Report 
• Progress Notes 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
119 
 
 
 
 
CABG DATE 
 
 
Definition 
Date the CABG was performed 
 
Field Values 
• Collected as MMDDYYYY 
• ND: Not Documented 
Uses 
• Establishes care intervals and incident timelines 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Operative Report 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
120 
 
 
 
 
CABG TIME 
 
 
Definition 
Time of day the CABG was performed 
 
Field Values 
• Collected as HHMM 
• Use 24-hour clock 
• ND: Not Documented 
Uses 
• Establishes care intervals and incident timelines 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Operative Report 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
121 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
CARDIAC ARREST 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
122 
 
 
 
 
ROSC? 
 
 
Definition 
Checkbox indicating whether ROSC occurred, which is defined as restoration of a 
spontaneous perfusing rhythm. Signs of ROSC include: palpable pulse, breathing (more 
than an occasional gasp), a measurable blood pressure, and/or a sudden rise in 
capnography to a normal to high reading 
 
Field Values 
• Y: Yes 
• N: No 
• ND: Not Documented 
Additional Info 
• Indicate yes if the patient had ROSC at any time during resuscitation, even if 
transiently 
Uses 
• Provides documentation of assessment 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• ED Records 
• Progress Notes 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
123 
 
 
 
 
SUSTAINED ROSC? 
 
 
Definition 
Checkbox indicating whether sustained ROSC occurred, which is defined as persistent 
signs of circulation, with no chest compressions required, for at least twenty (20) 
consecutive minutes 
 
Field Values 
• Y: Yes 
• N: No 
• ND: Not Documented 
Uses 
• Provides documentation of assessment 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• ED Records 
• Progress Notes 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
124 
 
 
 
 
INIT. CARDIAC ARREST DATE 
 
 
Definition 
Date of the initial cardiac arrest 
 
Field Values 
• Collected as MMDDYYYY 
• ND: Not Documented 
Uses 
• Establishes care intervals and incident timelines 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 
• ED Records 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
125 
 
 
 
 
INIT. CARDIAC ARREST TIME 
 
 
Definition 
Time of day of the initial cardiac arrest 
 
Field Values 
• Collected as HHMM 
• Use 24-hour clock 
• ND: Not Documented 
Additional Information 
• Enter the time documented by EMS, even if the time does not align with other times 
documented in the EMS record 
Uses 
• Establishes care intervals and incident timelines 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 
• ED Records 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
126 
 
 
 
 
PRESUMED CARDIAC ARREST ETIOLOGY 
 
 
Definition 
Checkbox indicating what likely caused the patient to first go into cardiac arrest 
 
Field Values 
PC 
Presumed Cardiac 
Etiology 
EX 
Exsanguination/Hemorrhage 
(non-traumatic) 
SE 
Sepsis 
DS 
Drowning/Submersion 
OD 
Drug Overdose 
OT Other 
EL 
Electrocution 
RA 
Respiratory/Asphyxia 
  
 
Additional Information 
• A non-traumatic cardiac arrest is presumed to be of cardiac etiology unless it is 
known, or likely to have been, caused by another reason 
• Exsanguination/hemorrhage includes GI bleeding, post-surgical complications, etc. 
• Respiratory/Asphyxia includes hangings 
• Examples of “Other” include end-stage cancer, carbon monoxide poisoning, etc. 
Uses 
• Provides documentation of assessment 
• Assists with determination of appropriate treatment and transport 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 
• ED Records 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
127 
 
 
 
 
IF OTHER, PLEASE EXPLAIN 
 
 
Definition 
Field provided to specify why “Other” was selected as the presumed cardiac arrest 
etiology, if applicable 
 
Field Values 
• Free text 
Additional Information 
• Do not enter information into this field unless ‘Presumed Cardiac Arrest Etiology’ has 
a value of “Other” 
Uses 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 
• ED Records 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
128 
 
 
 
 
INIT. CARDIAC ARREST LOCATION 
 
 
Definition 
Checkbox indicating where the patient was when the initial cardiac arrest occurred 
 
Field Values 
• Home: Home/Residence 
• SNF: Nursing Home/Assisted Living 
• Public: Public Building/Areas 
• Clinic: Physician Office/Clinic/Urgent Care 
• Industrial: Industrial Site 
• ED: Hospital Emergency Department 
• CL: Cath Lab 
• Other: Other 
• ND: Not Documented 
Uses 
• Provides documentation of assessment 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 
• ED Records 
• Cath Lab Report 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
129 
 
 
 
 
INIT. CARDIAC ARREST WITNESSED? 
 
 
Definition 
Checkbox indicating whether the initial cardiac arrest was witnessed 
 
Field Values 
• Y: Yes 
• N: No 
• ND: Not Documented 
Uses 
• Provides documentation of assessment 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 
• ED Records 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
130 
 
 
 
 
INIT. CARDIAC ARREST WITNESSED BY 
 
 
Definition 
Checkbox indicating who observed the initial cardiac arrest 
 
Field Values 
• C: Citizen 
• E: EMS 
• H: Healthcare Professional 
• ND: Not Documented 
Additional Information 
• “Healthcare professionals” are defined as medically trained, on-duty individuals at a 
healthcare facility (clinic, doctor’s office, nursing home, ED, etc.) 
• “Citizens” are defined as good Samaritans, such as off-duty healthcare professionals, 
law enforcement officers, and bystanders 
Uses 
• Provides documentation of assessment 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 
• ED Records 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
131 
 
 
 
 
INIT. CARDIAC ARREST RHYTHM 
 
 
Definition 
Checkbox indicating the initial cardiac rhythm observed during the initial cardiac arrest 
 
Field Values 
• AA: AED-Analyzed Only 
• AD: AED-Defibrillated 
• AG: Agonal 
• ASY: Asystole 
• IV: Idioventricular 
• PEA: Pulseless Electrical Activity 
• VT: Pulseless Ventricular Tachycardia 
• VF: Ventricular Fibrillation 
Uses 
• Provides documentation of assessment 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 
• ED Records 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
132 
 
 
 
 
INIT. CARDIAC ARREST CPR INIT. BY 
 
 
Definition 
Checkbox indicating who initiated CPR during the initial cardiac arrest 
 
Field Values 
• C: Citizen 
• E: EMS 
• H: Healthcare Professional 
• ND: Not Documented 
Additional Information 
• “Healthcare professionals” are defined as medically trained, on-duty individuals at a 
healthcare facility (clinic, doctor’s office, nursing home, ED, etc.) 
• “Citizens” are defined as good Samaritans, such as off-duty healthcare professionals, 
law enforcement officers, and bystanders 
Uses 
• Provides documentation of care 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 
• ED Records 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
133 
 
 
 
 
CPR METHOD 
 
 
Definition 
Checkbox indicating the method which was used to perform CPR during the initial 
cardiac arrest 
 
Field Values 
• Manual: Manual CPR Only 
• Manual to Mechanical: Manual CPR to Mechanical CPR 
• Mechanical: Mechanical CPR Only 
• ND: Not Documented 
Uses 
• Provides documentation of care 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 
• ED Records 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
134 
 
 
 
 
CPR MECHANICAL DEVICE 
 
 
Definition 
Checkbox indicating the type of mechanical device used to administer CPR during the 
initial cardiac arrest 
 
Field Values 
• LU: Lucas 
• AP: AutoPulse 
• NO: No Mechanical Device Used 
• OT: Other 
Uses 
• Provides documentation of care 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 
• ED Records 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
135 
 
 
 
 
COMMENT TO OTHER 
 
 
Definition 
Field provided to specify why “Other” was selected as the CPR mechanical device used 
to administer CPR during the initial cardiac arrest 
 
 
Field Values 
• Free-text 
Additional Information 
• Do not enter information into this field unless ‘CPR Mechanical Device’ has a value of 
“Other” 
Uses 
• Provides documentation of care 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• ED Records 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
136 
 
 
 
 
PRE-SRC DEFIB? 
 
 
Definition 
Checkbox indicating whether defibrillation occurred prior to arrival at the SRC 
 
Field Values 
• Y: Yes 
• N: No 
• ND: Not Documented 
Uses 
• Provides documentation of care 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 
• ED Records 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
137 
 
 
 
 
PRE-SRC DEFIB BY 
 
 
Definition 
Checkbox indicating who defibrillated the patient prior to arrival at the SRC 
 
Field Values 
• AC: AED Citizen 
• AE: AED EMS 
• ED: EMS Defibrillation 
• HP: Healthcare Professional 
• ND: Not Documented 
Additional Information 
• Enter multiple selections, if applicable, by pressing down and holding the “Ctrl” key 
while making your selections 
• “Healthcare professionals” are defined as medically trained, on-duty individuals at a 
healthcare facility (clinic, doctor’s office, nursing home, ED, etc.) 
• “Citizens” are defined as good Samaritans, such as off-duty healthcare professionals, 
law enforcement officers, and bystanders 
 
Uses 
• Provides documentation of care 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 
• ED Records 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
138 
 
 
 
 
WAS PATIENT IN CA UPON ARRIVAL TO ED? 
 
 
Definition 
Checkbox indicating whether the patient was in cardiac arrest upon arrival at the SRC 
ED 
 
Field Values 
• Y: Yes 
• N: No 
Uses 
• Provides documentation of care 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 
• ED Records 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
139 
 
 
 
 
INIT. ROSC DATE 
 
 
Definition 
Date initial ROSC occurred 
 
Field Values 
• Collected as MMDDYYYY 
• ND: Not Documented 
Additional Information 
• This is the date that ROSC was first obtained for any length of time 
Uses 
• Establishes care intervals and incident timelines 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 
• ED Records 
• Cath Lab Report 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
140 
 
 
 
 
INIT. ROSC TIME 
 
 
Definition 
Time of day initial ROSC occurred 
 
Field Values 
• Collected as HHMM 
• Use 24-hour clock 
• ND: Not Documented 
Additional Information 
• This is the time of day that ROSC was first obtained for any length of time 
• Enter the time documented by EMS, even if the time does not align with other times 
documented in the EMS record 
Uses 
• Establishes care intervals and incident timelines 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 
• ED Records 
• Cath Lab Report 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
141 
 
 
 
 
INIT. ROSC LOCATION 
 
 
Definition 
Checkbox indicating where the patient was when initial ROSC occurred 
 
Field Values 
• PRE: Pre-SRC 
• SRC: SRC ED 
• CL: Cath Lab 
• ND: Not Documented 
Uses 
• Establishes care intervals and incident timelines 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 
• ED Records 
• Cath Lab Report 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
142 
 
 
 
 
1
st
 CARDIAC RHYTHM UPON ROSC 
 
 
Definition 
First documented cardiac rhythm observed upon ROSC 
 
Field Values 
• AFI: Atrial Fibrillation 
• AFL: Atrial Flutter 
• AVR: Accelerated Ventricular 
• 1HB: 1
st 
Degree Heart Block 
• 2HB: 2
nd 
Degree Heart Block 
• 3HB: 3
rd 
Degree Heart Block 
• JR: Junctional Rhythm 
• PM: Pacemaker 
• PST: Paroxysmal Supraventricular Tachycardia 
• SB: Sinus Bradycardia 
• SR: Sinus Rhythm 
• ST: Sinus Tachycardia 
• SVT: Supraventricular Tachycardia 
• VT: Ventricular Tachycardia with Pulses 
• OT: Other 
• ND: Not Documented 
Uses 
• Provides documentation of assessment 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 
• ED Records 
• Cath Lab Report 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
143 
 
 
 
 
1
st
 HEART RATE UPON ROSC 
 
 
Definition 
First documented heart rate upon ROSC 
 
Field Values 
• Up to three-digit numeric value 
• ND: Not Documented 
Additional Information 
• Value cannot be greater than 300 
Uses 
• Provides documentation of assessment 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 
• ED Records 
• Cath Lab Report 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
144 
 
 
 
 
1
st
 SYSTOLIC BLOOD PRESSURE UPON ROSC 
 
 
Definition 
First documented systolic blood pressure recorded upon ROSC 
 
Field Values 
• Up to three-digit numeric value 
• ND: Not Documented 
Additional Information 
• Value cannot be greater than 300 
Uses 
• Provides documentation of assessment 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 
• ED Records 
• Cath Lab Report 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
145 
 
 
 
 
1
st
 TEMPERATURE UPON ROSC 
 
 
Definition 
First documented core temperature, in Celsius, recorded upon ROSC 
 
Field Values 
• Up to four-digit numeric value 
• ND: Not Documented 
Additional Information 
• Core temperature is measured via bladder, esophageal, or rectal methods 
• Document to the 10
th 
of a degree (e.g. 37.0
o
C) 
Uses 
• Provides documentation of assessment 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Base Hospital Form 
• ED Records 
• Cath Lab Report 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
146 
 
 
 
 
1
st
 END TIDAL CO
2
 UPON ROSC 
 
 
Definition 
1
st
 end tidal CO
2 
recorded immediately following ROSC
 
Field Values 
• Up to three-digit numeric value 
• ND: Not Documented 
Uses 
• Provides documentation of assessment 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 
• ED Records 
• Cath Lab Report 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
147 
 
 
 
               1
st
 PaO
2
  
 
 
Definition 
1
st 
PaO
2
 value measured in the ED  
 
Field Values 
• Up to five-digit numeric value 
• ND: Not Documented 
Additional Information 
• Document to the 10
th 
of a degree (e.g. 7.0) 
• Enter the patient’s first PaO
2
 value measured after ED arrival 
Uses 
• Provides documentation of assessment 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Lab Records 
• ED Records 
• Cath Lab Report 
• Progress Notes 
• Other Hospital Records 
 
  

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
148 
 
 
 
1
st
 pH VALUE UPON ROSC 
 
 
Definition 
1
st 
pH value resulted within two hours of ROSC 
 
Field Values 
• Up to three-digit numeric value 
• ND: Not Documented 
Additional Information 
• Document to the 100
th 
of a degree (e.g. 7.00) 
• Value cannot be less than 6.5 or greater than 8 
Uses 
• Provides documentation of assessment 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Lab Records 
• ED Records 
• Cath Lab Report 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
149 
 
 
 
 
1
st
 LACTATE VALUE UPON ROSC 
 
 
Definition 
1
st 
lactate or lactic acid value resulted within two hours of ROSC 
 
Field Values 
• Up to four-digit numeric value 
• ND: Not Documented 
Additional Information 
• Document to the 10
th 
of a degree (e.g. 10.0) 
• If a lactic acid or formal lactate level is not drawn, it is acceptable to enter the lactate 
level from POCT 
Uses 
• Provides documentation of assessment 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Lab Records 
• ED Records 
• Cath Lab Report 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
150 
 
 
 
 
LACTATE VALUE UNITS 
 
 
Definition 
The units associated with the lactate or lactic acid value that is resulted within two hours 
of ROSC 
 
Field Values 
• mmol mmol/L 
• mg mg/dl 
• mEQ mEQ/L 
Uses 
• Provides documentation of assessment 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Lab Records 
• ED Records 
• Cath Lab Report 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
151 
 
 
 
 
TOTAL GLASGOW COMA SCALE (GCS) UPON ROSC 
 
 
Definition 
Checkbox indicating the first documented GCS upon ROSC 
 
Field Values 
• 3 
• 4 
• 5 
• 6 
• 7 
• 8 
• 9 
• 10 
• 11 
• 12 
• 13 
• 14 
• 15 
• ND: Not Documented 
Uses 
• Provides documentation of assessment 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 
• ED Records 
• Cath Lab Report 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
152 
 
 
 
 
VASOPRESSORS IVP? 
 
 
Definition 
Checkbox indicating whether the patient received epinephrine or vasopressin via 
intravenous push (IVP) during cardiac arrest 
 
Field Values 
• Y: Yes 
• N: No 
• ND: Not Documented 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 
• ED Records 
• Medication Records 
• Cath Lab Report 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
153 
 
 
 
 
VASOPRESSORS VIA CONT. INF.? 
 
 
Definition 
Checkbox indicating whether vasopressors via continuous intravenous infusion were 
initiated post-ROSC in the ED or cath lab 
 
Field Values 
• Y: Yes 
• N: No 
• ND: Not Documented 
Additional Information 
• Vasopressors include Dopamine, Epinephrine, Norepinephrine (Levophed), 
Phenylephrine, and Vasopressin 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Medication Records 
• Cath Lab Report 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
154 
 
 
 
 
ECMO PERFORMED? 
 
 
Definition 
Checkbox indicating whether the patient had extracorporeal membrane oxygenation 
(ECMO) performed 
 
Field Values 
• Y: Yes 
• N: No 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Operative Report 
• Cath Lab Report 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
155 
 
 
 
 
ECMO DATE 
 
 
Definition 
Date ECMO was initiated 
 
Field Values 
• Collected as MMDDYYYY 
• ND: Not Documented 
Uses 
• Establishes care intervals and incident timelines 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Operative Report 
• Cath Lab Report 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
156 
 
 
 
 
ECMO TIME 
 
 
Definition 
Time of day ECMO was initiated 
 
Field Values 
• Collected as HHMM 
• Use 24-hour clock 
• ND: Not Documented 
Uses 
• Establishes care intervals and incident timelines 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Operative Report 
• Cath Lab Report 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
157 
 
 
 
 
CPC SCALE AT DISCHARGE 
 
 
Definition 
Checkbox indicating the patient’s Cerebral Performance Categories (CPC) scale upon 
discharge from the acute care unit at your facility 
 
Field Values 
Cerebral Performance Categories Scale 
1 
Good cerebral performance – conscious, alert, able to work, might have mild 
neurologic or psychologic deficit. 
2 
Moderate cerebral disability – conscious, sufficient cerebral function for 
independent activities of daily life. Able to work in sheltered environment. 
 
3 
Severe cerebral disability – conscious, dependent on others for daily support 
because of impaired brain function. Range from ambulatory state to severe 
dementia or paralysis. 
 
4 
Coma or vegetative state – any degree of coma without the presence of all 
brain death criteria. Unawareness, even if appears awake (vegetative state) 
without interaction with environment; may have spontaneous eye opening and 
sleep/awake cycles. Cerebral unresponsiveness. 
5 Brain death: apnea, areflexia, EEG silence, etc. 
 
Additional Information 
• If the patient expired, CPC is “5” 
• The CPC Scale at discharge may be performed by a physician, trained RN, or 
occupational therapist 
• SRC Clinical Director/RN data extractor may calculate only if not performed by above 
personnel 
Uses 
• Provides documentation of assessment 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Hospital Discharge Summary 
• Progress Notes 
• Billing Sheet/Medical Records Coding Summary Sheet 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
158 
 
 
 
 
CHANGE IN BASELINE FUNCTIONAL STATUS? 
 
 
Definition 
Checkbox indicating whether a CPC scale= 2, 3, or 4 at discharge is a change in the 
patient’s baseline functional status 
 
Field Values 
• Y: Yes 
• N: No 
• ND: Not Documented 
Uses 
• Provides documentation of assessment 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Hospital Discharge Summary 
• Progress Notes 
• Billing Sheet/Medical Records Coding Summary Sheet 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
159 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
TTM 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
160 
 
 
 
 
TTM INITIATED? 
 
 
Definition 
Checkbox indicating whether Targeted Temperature Management (TTM) measures were 
initiated to actively cool and/or maintain the patient at a temperature of 32-37.5 degrees 
Celsius 
 
Field Values 
• Y: Yes 
• N: No 
• ND: Not Documented 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
161 
 
 
 
 
TTM APPROACH 
 
 
Definition 
Checkbox indicating whether Targeted Temperature Management (TTM) measures were 
initiated to maintain the patient at a normothermic temperature or an induced 
hypothermia temperature 
 
Field Values 
• NT: Normothermia 
• IH: Induced Hypothermia 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
162 
 
 
 
 
REASONS NORMOTHERMIC TTM WITHHELD (LIST ALL 
THAT APPLY) 
 
Definition 
Checkbox indicating why normothermic TTM measures were not initiated 
 
Field Values 
• 30: Core temperature < 30 degrees Celsius 
• AR: Awake/Responsive to verbal commands 
• CO: Comorbid disease 
• DN: DNR 
• EX: Patient expired 
• NF: Preceding poor neurologic function 
• NO: None listed 
Additional Information 
• Enter multiple selections, if applicable, by pressing down and holding the “Ctrl” key 
while making your selections 
• Pre-existing coma refers to being in a comatose state prior to cardiac arrest due to a 
pre-existing condition, neurologic dysfunction (pre-arrest CPC Score of 3 or 4), or 
severe dementia 
• Comorbid disease refers to a known comorbid disease making 180 days survival 
unlikely 
• Preceding poor neurologic function is defined as a Prearrest Cerebral Performance 
Category (CPC) of 3 or 4 
Uses 
• Provides documentation of assessment 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
163 
 
 
 
 
REASONS INDUCED HYPOTHERMIA NOT INITIATED 
(LIST ALL THAT APPLY) 
 
Definition 
Checkbox indicating why induced hypothermia (Targets below 36° C) measures were 
not initiated 
 
Field Values 
 
• 30: Core temperature < 30 degrees Celsius 
• 80: Systolic BP<80mmHg 
• AR: Awake/Responsive to verbal commands 
• AS: Acute Stroke -Suspected or Confirmed 
• BD: Known Intrinsic Bleeding Diathesis (e.g. Hemophilia or Von Willebrand) 
• BL: Active Significant Bleeding 
• CO: Comorbid disease 
• DC: Delays > 6 hours from ROSC to cooling 
• DN: DNR 
• EX: Patient expired 
• HT: Major head trauma 
• IC: Acute Intracranial bleeding and/or head trauma 
• NF: Preceding poor neurologic function 
• NO: None listed 
• PO: Hospital Policy (e.g. normothermia policy) 
• PR: Pregnancy 
• SB: Active Significant Bleeding 
Additional Information 
• Enter multiple selections, if applicable, by pressing down and holding the “Ctrl” key 
while making your selections 
• Systolic Bp<80mmHg refers to patients who continue to be hypotensive despite 
interventions, including IV fluids, vasopressors, or an intra-aortic balloon pump 
• Comorbid disease refers to a known comorbid disease making 180 days survival 
unlikely 
• Preceding poor neurologic function is defined as a Prearrest Cerebral Performance 
Category (CPC) of 3 or 4 
Uses 
• Provides documentation of assessment 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
164 
 
 
 
 
 
 
 
TTM INITIATED DATE 
 
 
Definition 
Date TTM measures were initiated 
 
Field Values 
• Collected as MMDDYYYY 
• ND: Not Documented 
Uses 
• Establishes care intervals and incident timelines 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
165 
 
 
 
 
TTM INITIATED TIME 
 
 
Definition 
Time of day TTM measures were initiated 
 
Field Values 
• Collected as HHMM 
• Use 24-hour clock 
• ND: Not Documented 
Uses 
• Establishes care intervals and incident timelines 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
166 
 
 
 
 
TTM INITIATED LOCATION 
 
 
Definition 
Checkbox indicating where the patient was when TTM measures were initiated 
 
Field Values 
• P: Pre-SRC 
• S: SRC ED 
• C: Cath Lab 
• I: ICU 
• ND: Not Documented 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
167 
 
 
 
 
TTM MODALITY USED 
 
 
Definition 
Checkbox indicating type(s) of TTM measures initiated 
 
Field Values 
• IP: Ice Packs 
• EC: ECMO Machine 
• ED: External Cooling Device 
• CI: Cold IV fluids 
• CD: Central Vascular Cooling Device 
• OT: Other 
• ND: Not Documented 
Additional Information 
• Enter multiple selections, if applicable, by pressing down and holding the “Ctrl” key 
while making your selections 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
168 
 
 
 
 
TARGET TEMPERATURE 
 
 
Definition 
Checkbox indicating the desired body temperature to be achieved by TTM measures, as 
ordered by the physician or per protocol 
 
Field Values 
• 32: 32 degrees Celsius 
• 33: 33 degrees Celsius 
• 34: 34 degrees Celsius 
• 35: 35 degrees Celsius 
• 36: 36 degrees Celsius 
• 37: 37 degrees Celsius 
• 37.5: 37.5 degrees Celsius 
• SR: Specified range 
• ND: Not Documented 
Additional Information 
• If “Specified Range” is marked, must document range in ‘Target Temperature Range’ 
field 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
169 
 
 
 
 
TARGET TEMPERATURE RANGE 
 
 
Definition 
Field provided to indicate the range, in Celsius, of desired body temperature to be 
achieved by TTM measures, if applicable 
 
Field Values 
• Seven-digit numeric value 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
170 
 
 
 
 
TARGET TEMPERATURE REACHED? 
 
 
Definition 
Checkbox indicating whether the desired body temperature was achieved by TTM 
measures 
 
Field Values 
• Y: Yes 
• N: No 
• ND: Not Documented 
Uses 
• Provides documentation of assessment and/or care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
171 
 
 
 
 
TARGET TEMPERATURE REACHED DATE 
 
 
Definition 
Date that desired body temperature was achieved by TTM measures 
 
Field Values 
• Collected as MMDDYYYY 
• ND: Not Documented 
Uses 
• Establishes care intervals and incident timelines 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
172 
 
 
 
 
TARGET TEMPERATURE REACHED TIME 
 
 
Definition 
Time of day that desired body temperature was achieved by TTM measures 
 
Field Values 
• Collected as HHMM 
• Use 24-hour clock 
• ND: Not Documented 
Uses 
• Establishes care intervals and incident timelines 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Progress Notes 
• Other Hospital Records 
 
 
  

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
173 
 
 
 
TARGET TEMPERATURE MANAGEMENT DURATION 
 
 
Definition 
Duration (in hours) of Targeted Temperature Management  
 
Field Values 
• Collected as HHMM 
• ND: Not Documented 
Uses 
• Establishes care intervals and incident timelines 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Progress Notes 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
174 
 
 
 
 
RE-WARMING INITIATED? 
 
 
Definition 
Checkbox indicating whether re-warming measures were initiated 
 
Field Values 
• Y: Yes 
• N: No 
• ND: Not Documented 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Progress Notes 
• Other Hospital Records 
• ED Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
175 
 
 
 
 
RE-WARMING INIT DATE 
 
 
Definition 
Date that re-warming measures were initiated 
 
Field Values 
• Collected as MMDDYYYY 
• ND: Not Documented 
Uses 
• Establishes care intervals and incident timelines 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Progress Notes 
• Other Hospital Records 
• ED Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
176 
 
 
 
 
RE-WARMING INIT TIME 
 
 
Definition 
Time of day that re-warming measures were initiated 
 
Field Values 
• Collected as HHMM 
• Use 24-hour clock 
• ND: Not Documented 
Uses 
• Establishes care intervals and incident timelines 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Progress Notes 
• Other Hospital Records 
• ED Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
177 
 
 
 
 
PATIENT DIED DURING RE-WARMING? 
 
 
Definition 
Checkbox indicating whether the patient died during the re-warming process 
 
Field Values 
• Y: Yes 
• N: No 
• ND: Not Documented 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Progress Notes 
• Other Hospital Records 
• ED Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
178 
 
 
 
 
RE-WARMING ENDED DATE 
 
 
Definition 
Date that re-warming measures were terminated 
 
Field Values 
• Collected as MMDDYYYY 
• ND: Not Documented 
Uses 
• Establishes care intervals and incident timelines 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Progress Notes 
• Other Hospital Records 
• ED Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
179 
 
 
 
 
RE-WARMING ENDED TIME 
 
 
Definition 
Time of day that re-warming measures were terminated 
 
Field Values 
• Collected as HHMM 
• Use 24-hour clock 
• ND: Not Documented 
Uses 
• Establishes care intervals and incident timelines 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Progress Notes 
• Other Hospital Records 
• ED Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
180 
 
 
 
 
ADVERSE EVENTS DURING TTM 
 
 
Definition 
Checkbox indicating whether any of the listed adverse events occurred during TTM – 
enter all that apply 
 
Field Values 
• DY: Dysrhythmia of VF/VT 
• CG: Coagulopathy/bleeding 
• DV: Deep vein thrombosis 
• NO: None of the above adverse events were specified 
Additional Information 
• Enter multiple selections, if applicable, by pressing down and holding the “Ctrl” key 
while making your selections 
Uses 
• Provides documentation of assessment 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Progress Notes 
• Other Hospital Records 
• ED Records 
  

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
181 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
ECPR 
  

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
182 
 
 
 
 
ECPR ROUTING? 
 
 
Definition 
Checkbox indicating whether the patient was routed for ECPR 
 
Field Values 
• Y: Yes 
• N: No 
Uses 
• Establishes care intervals and incident timelines 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 
• SRC Log 
• ED Records 
• Cath Lab Report 
• Other Hospital Reports 
  

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
183 
 
 
 
ECPR NOTIFICATION? 
 
 
Definition 
Checkbox indicating whether notification was received by the SRC ED prior to the 
patient’s arrival 
 
Field Values 
• Y: Yes 
• N: No 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 
• SRC Log 
• ED Records 
 
  

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
184 
 
 
 
NOTIFICATION DATE 
 
 
Definition 
Date of ECPR notification prior to the patient’s arrival at the SRC ED 
 
Field Values 
• Collected as MMDDYYYY 
Uses 
• Establishes care intervals and incident timelines 
• Assists with determination of appropriate treatment 
• Provides documentation of care 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 
• SRC Log 
• ED Records 
• Progress Notes 
  

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
185 
 
 
 
NOTIFICATION TIME 
 
 
Definition 
Time of day of ECPR notification prior to the patient’s arrival at the SRC ED 
 
Field Values 
• Collected as HHMM 
• Use 24-hour clock 
Additional Information 
• Enter the time documented by EMS, even if the time does not align with other times 
documented in the EMS record 
Uses 
• Establishes care intervals and incident timelines 
• Assists with determination of appropriate treatment 
• Provides documentation of care 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 
• SRC Log 
• ED Records 
• Progress Notes 
  

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
186 
 
 
 
ECPR TEAM ACTIVATED 
 
 
Definition 
Checkbox indicating whether the ECPR team was activated 
 
Field Values 
• Y: Yes 
• N: No 
Uses 
• Establishes care intervals and incident timelines 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 
• SRC Log 
• ED Records 
• Cath Lab Report 
• Other Hospital Reports 
  

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
187 
 
 
ECPR PHYSICIAN ARRIVAL DATE 
 
 
Definition 
Date ECPR physician arrived to the cannulation location 
 
Field Values 
• Collected as MMDDYYYY 
Uses 
• Establishes care intervals and incident timelines 
• Assists with determination of appropriate treatment 
• Provides documentation of care 
• System evaluation and monitoring 
Data Source Hierarchy 
• EMS Record 
• Base Hospital Form 
• SRC Log 
• ED Records 
• Progress Notes 
  

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
188 
 
 
 
ECPR PHYSICIAN ARRIVAL TIME 
 
 
Definition 
Time of day of ECPR physician arrived to the cannulation location 
Field Values 
• Collected as HHMM 
• Use 24-hour clock 
Uses 
• Establishes care intervals and incident timelines 
• Assists with determination of appropriate treatment 
• Provides documentation of care 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Cath Lab Report 
• Progress Notes 
• Other Hospital Records 
  

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
189 
 
 
 
ECPR CANNULATION 
 
 
Definition 
Checkbox indicating whether ECMO cannulation for ECPR was attempted 
 
Field Values 
• Y: Yes 
• N: No 
• ND: Not Documented 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Cath Lab Report 
• Other Hospital Reports 
• Progress Notes 
  

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
190 
 
 
 
ECPR LOCATION  
 
 
Definition 
Patient’s location in the hospital when ECMO Cannulation for ECPR was attempted 
 
Field Values 
• CL: Cath Lab 
• ED: Emergency Department 
• IC: Intensive Care Unit 
• OR: Operating Room 
• OT: Other 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• SRC Log 
• Cath Lab Report 
• Progress Notes 
• Other Hospital Records 
  

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
191 
 
 
 
 
COMMENT TO OTHER 
 
 
Definition 
Field provided to specify why “Other” was selected from the ECPR Location field 
 
Field Values 
• Free-text 
Additional Information 
• Do not enter information into this field unless ‘ECPR Location’ has a Field 
Value of “Other” 
Uses 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• SRC Log 
• Cath Lab Report 
• Progress Notes 
• Other Hospital Records 
  

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
192 
 
 
 
RATIONALE FOR NOT CANNULATING FOR ECPR 
 
 
Definition 
Checkbox indicating the primary reason why ECPR cannulation was not 
performed 
 
Field Values 
• EX: Patient Expired 
• NC: Non-Cardiac Etiology 
• PI: Poor Prognostic Indicator 
• PN: Poor Neurologic Baseline 
• SR: Sustained ROSC 
• TI: Known Terminal Illness 
• OT: Other 
Additional Information 
• Enter multiple selections, if applicable, by pressing and holding the “Ctrl” key 
while making your selections 
• If the field value Poor Prognostic Indicator is selected, mandatory entry is 
required in the following Poor Prognostic Indicator field 
• If “Other” is marked, must document reason in ‘Comment to Other’ field 
Uses 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Cath Lab Report 
• Progress Notes 
• Other Hospital Records 
  

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
193 
 
 
 
POOR PROGNOSTIC INDICATOR 
 
 
Definition 
Checkbox indicating the prognostic indicators leading to the decision not to 
initiate ECMO cannulation for ECPR 
 
Field Values 
• CO: EtCO2<10mmHg 
• O2: O2 sat <85%  
• LA: Lactate >18mmol/L 
• PA: PaO2<50mmHg 
• RE: >60 min of resuscitation 
• OT: Other 
Additional Information 
• If the field value Poor Prognostic Indicator is selected in field Rationale 
For Not Cannulating For ECPR, then mandatory entry is required in the 
Poor Prognostic Indicator field 
• Enter multiple selections, if applicable, by pressing and holding the “Ctrl” key 
while making your selections 
• If “Other” is marked, must document reason in ‘Comment to Other’ field 
Uses 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Cath Lab Report 
• Progress Notes 
• Other Hospital Records 
 
  

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
194 
 
 
 
COMMENT TO OTHER 
 
 
Definition 
Field provided to specify why “Other” was selected from the Poor Prognostic Indicator field 
 
Field Values 
• Free-text 
Additional Information 
• Do not enter information into this field unless ‘Poor Prognostic Indicator” has a 
Field Value of “Other” 
Uses 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• SRC Log 
• Cath Lab Report 
• Progress Notes 
• Other Hospital Records 
  

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
195 
 
 
 
PERSISTENT CARDIAC ARREST 
 
 
Definition 
Checkbox indicating whether the patient was in persistent cardiac arrest with ongoing 
resuscitation at the time of ED arrival 
 
Field Values 
• Y: Yes 
• N: No 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Other Hospital Reports 
• Progress Notes 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
196 
 
 
PT LOCATION WHEN ECPR TEAM ACTIVATED 
 
 
Definition 
Patient’s location when the ECPR team was activated 
 
Field Values 
• Pre-SRC: Pre-SRC 
• SRC: SRC ED 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• SRC Log 
• Cath Lab Report 
• EMS Record 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
197 
 
 
 
 
ECPR TEAM ACTIVATION DATE 
 
 
Definition 
Date the ECPR team was activated 
 
Field Values 
• Collected as MMDDYYYY 
Additional Information 
• If the CL activation was cancelled and then re-activated, enter the date it was re- 
activated 
Uses 
• Establishes care intervals and incident timelines 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Cath Lab Pager 
• SRC Log 
• ED Records 
• Cath Lab Report 
• Other Hospital Records 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
198 
 
 
 
 
ECPR ACTIVATION TIME 
 
 
Definition 
Time of day the ECPR team was activated 
 
Field Values 
• Collected as HHMM 
• Use 24-hour clock 
Additional Information 
• If the CL activation was cancelled and then re-activated, enter the time it was re- 
activated 
Uses 
• Establishes care intervals and incident timelines 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Cath Lab Pager 
• SRC Log 
• ED Records 
• Cath Lab Report 
• Other Hospital Reports 

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
199 
 
 
 
 
SHEATH SIZE 
 
 
Definition 
Checkbox indicating which size of sheath was placed during ECMO Cannulation for 
ECPR 
 
Field Values 
• Up to two-digit numeric value 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Cath Lab Report 
• Other Hospital Records 
• Progress Notes 
  

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
200 
 
 
 
SIDE OF CANNULATION 
 
 
Definition 
Checkbox indicating the side(s) of the patient where cannulation was performed 
 
Field Values 
• Unilateral 
• Bilateral 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Cath Lab Report 
• Other Hospital Reports 
• Progress Notes 
  

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
201 
 
 
 
DISTAL CATHETER 
 
 
Definition 
Checkbox indicating whether a distal catheter was placed 
 
Field Values 
• Y: Yes 
• N: No 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Cath Lab Report 
• Other Hospital Reports 
• Progress Notes 
  

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
202 
 
 
 
US GUIDED 
 
 
Definition 
Checkbox indicating whether ultrasonography was used during the EMCO cannulation 
placement procedure 
 
Field Values 
• Y: Yes 
• N: No 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Cath Lab Report 
• Other Hospital Reports 
• Progress Notes 
  

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
203 
 
 
 
FLUOROSCOPY GUIDED 
 
 
Definition 
Checkbox indicating whether fluoroscopy was used during the ECMO cannulation 
placement procedure 
 
Field Values 
• Y: Yes 
• N: No 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Cath Lab Report 
• Other Hospital Reports 
• Progress Notes 
  

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
204 
 
 
 
ECPR FLOW 
 
 
Definition 
Checkbox indicating whether flow was initiated post ECMO cannulation for ECPR 
 
Field Values 
• Y: Yes 
• N: No 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Cath Lab Report 
• Other Hospital Reports 
• Progress Notes 
  

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
205 
 
 
 
NO ECPR CANNULATION FLOW 
 
 
Definition 
Checkbox indicating the primary reason why cannulation flow was unable to be 
established. 
 
Field Values 
• SR: Sustained ROSC during/after cannulation 
• TI: Technical Issues 
• Other: Other 
Additional Information 
• If “Other” is marked, must document reason in ‘Comment to Other’ field 
Uses 
• Provides documentation of assessment 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Cath Lab Report 
• Progress Notes 
• ED Records 
 
  

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
206 
 
 
 
 
COMMENT TO OTHER 
 
 
Definition 
Field provided to specify why “Other” was selected as the primary reason why 
ECPR Cannulation Flow was unable to be established. 
 
Field Values 
• Free- text 
Additional Information 
• Do not enter information into this field unless ‘Reason For No ECPR Cannulation 
Flow’ has a value of “Other” 
Uses 
• Provides documentation of assessment 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Cath Lab Report 
• Progress Notes 
• ED Records 
  

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
207 
 
 
 
ECPR DATE 
 
 
Definition 
Date of ECPR flow successfully initiated 
 
Field Values 
• Collected as MMDDYYYY 
Uses 
• Establishes care intervals and incident timelines 
• Assists with determination of appropriate treatment 
• Provides documentation of care 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Cath Lab Report 
• Other Hospital Records 
• Progress Notes 
  

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
208 
 
 
 
ECPR TIME 
 
 
Definition 
Time of day of ECPR flow successfully initiated 
 
Field Values 
• Collected as HHMM 
• Use 24-hour clock 
Uses 
• Establishes care intervals and incident timelines 
• Assists with determination of appropriate treatment 
• Provides documentation of care 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Cath Lab Report 
• Other Hospital Records 
• Progress Notes 
  

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
209 
 
 
 
ECPR DC DATE 
 
 
Definition 
Date that ECPR was discontinued 
 
Field Values 
• Collected as MMDDYYYY 
Uses 
• Establishes care intervals and incident timelines 
• Assists with determination of appropriate treatment 
• Provides documentation of care 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Cath Lab Report 
• Other Hospital Records 
• Progress Notes 
  

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
210 
 
 
 
ECPR DC TIME 
 
 
Definition 
Time of day that ECPR discontinued 
 
Field Values 
• Collected as HHMM 
• Use 24-hour clock 
Uses 
• Establishes care intervals and incident timelines 
• Assists with determination of appropriate treatment 
• Provides documentation of care 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Cath Lab Report 
• Other Hospital Records 
• Progress Notes 
  

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
211 
 
 
 
ECPR COMPLICATIONS 
 
 
Definition 
Checkbox indicating any complications that arose during the critical illness 
supported by ECPR 
 
Field Values 
• BT: Blood Transfusion 
• HS: Hemorrhagic Stroke 
• IN: Infection 
• IK: Organ Injury-Kidney 
• IL: Organ Injury-Liver 
• IS: Ischemic Stroke 
• LE: Leg Ischemia 
• TE: Thromboembolism 
• OT: Other 
Additional Information 
• Enter multiple selections, if applicable, by pressing and holding the “Ctrl” key 
while making your selections 
• If “Other” is marked, must document reason in ‘Comment to Other’ field 
Uses 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Cath Lab Report 
• Progress Notes 
• Other Hospital Records 
 
  

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
212 
 
 
 
COMMENT TO OTHER 
 
 
Definition 
Field provided to specify why “Other” was selected from the ECPR Complications field 
 
Field Values 
• Free-text 
Additional Information 
• Do not enter information into this field unless ‘ECPR Complications” has a 
Field Value of “Other” 
Uses 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• SRC Log 
• Cath Lab Report 
• Progress Notes 
• Other Hospital Records 
  

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
213 
 
 
 
PRIOR EJECTION FRACTION MEASURED? 
 
 
Definition 
Checkbox indicating whether a prior ejection fraction measurement was documented 
for the patient 
 
Field Values 
• Y: Yes 
• N: No 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Cath Lab Report 
• Other Hospital Reports 
• Progress Notes 
  

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
214 
 
 
 
PRIOR EJECTION FRACTION 
 
 
Definition 
The last ejection fraction measured prior to the cardiac arrest event (if known) 
 
Field Values 
• Up to three-digit numeric value 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Cath Lab Report 
• Other Hospital Records 
• Progress Notes  

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
215 
 
 
 
PRIOR EJECTION FRACTION DATE 
 
 
Definition 
Date the prior ejection fraction was measured 
 
Field Values 
• Collected as MMDDYYYY 
Uses 
• Establishes care intervals and incident timelines 
• Assists with determination of appropriate treatment 
• Provides documentation of care 
• System evaluation and monitoring 
Data Source Hierarchy 
• ED Records 
• Cath Lab Report 
• Other Hospital Records 
• Progress Notes 
 
  

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
216 
 
 
 
EJECTION FRACTION AT DISCHARGE 
 
 
Definition 
The last ejection fraction measured prior to the patient being discharged 
 
Field Values 
• Up to three-digit numeric value 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Cath Lab Report 
• Other Hospital Records 
• Progress Notes  

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
217 
 
 
 
AICD PLACEMENT 
 
 
Definition 
Checkbox indicating whether an AICD was placed prior to the patient being 
discharged 
 
Field Values 
• Y: Yes 
• N: No 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Cath Lab Report 
• Other Hospital Reports 
• Progress Notes 
  

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
218 
 
 
 
mRS 30 
 
 
Definition 
The modified Rankin score at 30 days from the time of hospital admission 
 
Field Values 
• One-digit numeric value 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Other Hospital Records 
• Progress Notes 
  

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
219 
 
 
 
mRS 90 
 
 
Definition 
The modified Rankin score at 90 days from the time of hospital admission 
 
Field Values 
• One-digit numeric value 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Other Hospital Records 
• Progress Notes  

SUBJECT: STEMI RECEIVING CENTER DATA DICTIONARY REFERENCE NO. 648 
220 
 
 
 
DONATION 
 
 
Definition 
Checkbox indicating whether organ procurement/donation occurred if the patient did 
not survive 
 
Field Values 
• Y: Yes 
• N: No 
Uses 
• Provides documentation of care 
• Assists with determination of appropriate treatment 
• System evaluation and monitoring 
Data Source Hierarchy 
• Other Hospital Reports 
• Progress Notes
