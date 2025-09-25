# 1021589 LA EMSDataDictionary

1 
 
 
 
 
 
  
LA-EMS Data 
Dictionary 
 
Los Angeles County  
Emergency Medical Services Agency 
Version 11 
 
 
 
 
 
EFFECTIVE: 
July 2023 
   
  
 
 

2 
 
Revision History 
 
Revisions will be made on an annual basis and published by April 1
st
 annually.  New data 
format will be effective for all files submitted for incident date as of July 1
st
 annually. 
 
07/07/2023  Transport Information 
• Updated the short and long text of the following in the ‘Med. Ctrl.’, tag 
name ‘MedCtrl’, picklist: 
• USC LAC + USC Medical Center to LMC Los Angeles General 
Medical Center 
• Updated the short and long text of the following in the ‘Rec Fac’, tag name 
‘ReceivingFacility’, picklist: 
• USC LAC + USC Medical Center to LMC Los Angeles General 
Medical Center 
Patient Assessment 
• Removed the following from the ‘Mechanism of Injury’, tag name 
‘MechanismOfInjury’, picklist: 
• 15 Fall >15ft (> 10ft peds) 
• Added the following to the ‘Mechanism of Injury’, tag name 
‘MechanismOfInjury’, picklist: 
• 10 Fall >10ft 
11/07/2022  Validator Logic Rules 
• Added logic rule: 
• ‘If Via = “N” except when RunType = “C”, “E”, or “N”, only one of 
the values for AMA, AssessTreatRelease, AssessTreatTransfer, 
and TreatInPlace can be “Y” and the only acceptable value for the 
remaining fields is “N” 
Medication/Rhythm 
• Added the following to the ‘Meds’, tag name ‘Meds’, picklist: 
• OLN Olanzapine 
05/12/2022  Validator Logic Rules 
• Revised the following logic rule: 
• Added the following for ‘Report Error for Blank/Null Values in 
FirstArrestRhythm if ProviderImpression= “CANT”, “CABT”, or 
“CAPT” 
• except when ProviderImpression= “CABT” or “CAPT” and 
ReasonForWithholding has a non-null value 
04/01/2022  Data Submission Details 
• Updated version to ‘Version 11’ 
Validator Logic Rules 
• Added logic rule: 
• ‘For Meds= “PAS”, “PNA”, or “PEP”, the only acceptable value for 
Route is “TA” 
• ‘For Route= “TA”, the only acceptable value for Meds is “PAS”, 
“PNA”, or “PEP” 
• ‘Report Error for Blank/Null Values in DPHNotified if 
ProviderImpression= “DRWN” 
• ‘Report Error for Blank/Null Values in WhoFirstAppliedAED if 
AEDApplied= “YWD” or “YWO” 

3 
 
• ‘Report Error for Blank/Null Values in FirstArrestRhythm if 
ProviderImpression= “CANT”, “CABT”, or “CAPT” 
• Removed the following logic rule: 
• ‘Report Error for Blank/Null Values in RecFacComment if 
ReceivingFacility has a value= “PUC” or “SCC”’ 
• Revised the following logic rule: 
• Changed the following ‘For Run Type= “C”, ”N”, or “E” or Via= 
“A”,”B”, or “H”, the only acceptable value for AMA, 
AssessTreatRelease, and TreatInPlace is ‘Not Applicable’ 
(BIU=1) 
• Added AssessTreatTransfer 
• Changed the following ‘Report Error for Blank/Null Values’ in AMA, 
AssessTreatRelease, and TreatInPlace if Via= ”N” except when 
RunType= “C’, “N” or “E”: 
• Added AssessTreatTransfer 
Transport Information 
• Added the following to the ‘Prov’, tag name ‘Provider’, picklist: 
• HE  Heart Ambulance Corporation 
• MD MedTrans, Inc. 
• Added the following to the ‘Rec Fac’, tag name ‘ReceivingFacility’, picklist: 
• XAV Star Behavioral Health Urgent Care Center, Lancaster 
• XCC Exodus Recovery Center – Culver City 
• XHG Exodus Recovery Center – Harbor 
• XIN Star Behavioral Health Urgent Care Center, City of Industry 
• XLB Star Behavioral Health Urgent Care Center, Long Beach 
• XLK Exodus Recovery Center – MLK 
• XUS Exodus Recovery Center – USC 
• ZLA David L. Murphy Sobering Center 
• Removed the following from the ‘Rec Fac’, tag name ‘ReceivingFacility’, 
picklist: 
• PUC Psych Urgent Care 
• SCC Sobering Center 
• Added ‘Assess, Treat, & Transfer’, tag name ‘AssessTreatTransfer’ field 
Field Values: 
• Y Yes 
• N N 
• Changed tag name for ‘Comment’ from ‘RecFacComment’ to 
‘AdvProvComment’ 
Stroke 
• Changed the XSD Data Type for ‘Facial Droop’, tag name ‘FacialDroop’, 
‘Arm Drift’, tag name ‘ArmDrift’, ‘Grip Strength’, tag name ‘GripStrength’, 
‘Total Score’, tag name ‘TotalScore’, from xs:nonNegativeInteger to 
xs:string 
• Added the following to the ‘Facial Droop’, tag name ‘FacialDroop’, picklist: 
• U Unable 
• Added the following to the ‘Arm Drift’, tag name ‘ArmDrift’, picklist: 
• U Unable 
• Added the following to the ‘Grip Strength’, tag name ‘GripStrength’, 
picklist: 

4 
 
• U Unable 
• Added the following to the ‘Total Score’, tag name ‘TotalScore’, picklist: 
• U Unable 
Medication/Rhythm 
• Added the following to the ‘Meds’, tag name ‘Meds’, picklist: 
• PAS Aspirin Prior to Arrival 
• PNA Narcan Prior to Arrival 
• PEP Epinephrine autoinjector Prior to Arrival 
• Added the following to the ‘Route’, tag name ‘Route’, picklist: 
• TA  Prior to Arrival 
Patient Assessment 
• Changed the long text of the following in the ‘Mechanism of Injury’, tag 
name ‘MechanismOfInjury’, picklist: 
• PB  Ped/Bike < 20mph to Ped/Bike ≤ 20mph 
Special Circumstances 
• Added ‘DPH Notified?’, tag name ‘DPHNotified’ field 
Field Values: 
• Y Yes 
• N No 
Therapies 
• Added the following to the ‘Therapies’, tag name ‘Therapy’, picklist: 
• HB  HOB Elevation 
• PP  Standard PPE Usage 
• PC  Contact PPE Usage 
• PA  Aerosol PPE Usage 
• PQ  Tourniquet (Commercial) Applied PTA 
Complication(s) During Tube Placement 
• Added the following to the ‘Hypoxia?’, tag name ‘Hypoxia’, picklist: 
• H Hypoxia Prior to Placement 
08/11/2021  Transport Information 
• Removed ‘Release At Scene?’, tag name ‘ReleaseAtScene’ field 
• Added ‘Assess, Treat, & Release?’, tag name ‘AssessTreatRelease’ field 
Field Values: 
• Y Yes 
• N No 
• Removed ‘Treat & Refer?’, tag name ‘TreatRefer’, field 
• Added ‘Treatment In Place?’, tag name ‘TreatInPlace’ field 
Field Values: 
• Y Yes 
• N No 
07/15/2021  Transport Information 
• Removed the following from the ‘Rec Fac’, tag name ‘Receiving Facility’, 
picklist: 
• TRI  Pacific Gardens Medical Center 
04/26/2021  Transport Information  
• Added the following to the ‘Rec Fac’, tag name ‘ReceivingFacility’, picklist: 
• TRI  Pacific Gardens Medical Center 
04/01/2021  Data Submission Details 
• Updated version to ‘Version 10’ 

5 
 
Validator Logic Rules 
• Added logic rule: 
• ‘Report Error for Blank/Null Values in RecFacComment if 
ReceivingFacility has a value= “PUC” or “SCC”’ 
• ‘Report Error for Blank/Null Values in AdvancedProviderLevel if 
TreatInPlace has a value= “Y”’ 
• Revised the following logic rule: 
• Changed the following for ‘For RunType= “C” or “N” or Via= “A”, 
“B”, or “H”, the only acceptable value for AMA, ReleaseAtScene, 
and TreatRefer is ‘Not Applicable’ (BIU=1) 
• Added RunType= “E” 
• ReleaseAtScene to AssessTreatRelease 
• TreatRefer to TreatInPlace 
• Changed the following for ‘Report Error for Blank/Null Values’ in 
AMA, ReleaseAtScene, and TreatRefer if Via= “N” except when 
RunType= “C” or “N”: 
• Added RunType= “E” 
• ReleaseAtScene to AssessTreatRelease 
• TreatRefer to TreatInPlace 
• Added the following to ‘Report Error for Blank/Null values in the first 
copy of Complaint except when RunType= “C” or “N”: 
• RunType= “E” 
• Added the following to ‘For RunType= “C” or “N”, the only 
acceptable value for Age, AgeUnit, Gender, Complaint, 
ProviderImpression, MedCtrl, Notification, and Protocol is ‘Not 
Applicable’ (BIU=1)’: 
• RunType= “E” 
• Added the following to ‘Report Error for Blank/Null Values in the 
first copy of ProviderImpression except when RunType= “C” or 
“N”’: 
• RunType= “E” 
• Added the following to ‘Report Error if a negative value is received 
for the following fields:’ 
• Temp 
Incident Information 
• Changed the minimum value for ‘Date’, tag name ‘IncidentDate’, from 
07/01/2015 to 07/01/2016 
• Removed ‘Auto-generated by the EMS Provider’s software’ from Data 
Source Hierarchy for ‘MCI?’, tag name ‘MCI’ 
• Added the following to the ‘Run Type’, tag name ‘RunType’, picklist: 
• E  Person Found/No Pt 
• L  Lift Assist 
• Updated the long text of the following in the ‘Run Type’, tag name 
‘RunType’, picklist: 
• N  No patient to No Contact/No Pt. 
• Removed ‘Pg 2’, tag name ‘Page2’, field 
Transport Information 
• Updated the long text of the following in the ‘Prov’, tag name ‘Provider’, 
picklist: 

6 
 
• FC  First Care Ambulance to First Rescue Ambulance, Inc. 
• SO  Southern California Ambulance to Symbiosis (Di Biassi) 
• Added the following to the ‘Prov’, tag name ‘Provider’, picklist: 
• JA  Journey Ambulance 
• KC  Kern County Provider 
• VC  Vital Care Ambulance 
• Removed the following from the ‘Prov’, tag name ‘Provider’, picklist: 
• CB  LA County Beaches 
• VF  Vernon Fire 
• Changed the minimum value for ‘Disp Date’, tag name ‘DispatchDate’, 
‘Arrival Date’, tag name ‘ArrivalDate’, ‘Date At Patient’, tag name 
‘AtPatientDate’, ‘Left Date’, tag name ‘LeftSceneDate’, ‘At Fac Date’, tag 
name ‘AtFacilityDate’, ‘Fac Equip Date’, tag name 
‘OnFacilityEquipmentDate’, and ‘Avail Date’, tag name ‘AvailableDate’ 
from 07/01/2015 to 07/01/2016 
• Removed ‘9-1-1 or Dispatch Center’ from Data Source Hierarchy for 
‘Arrival Date’, tag name ‘ArrivalDate’, ‘Arrival’, tag name ‘ArrivalTime’, 
‘Date at Patient’, tag name ‘AtPatientDate’, ‘Time At Patient’, tag name 
‘AtPatientTime’, ‘Left Date’, tag name ‘LeftSceneDate’, ‘Left’, tag name 
‘LeftSceneTime’, ‘At Fac Date’, tag name ‘AtFacilityDate’, ‘At Fac’, tag 
name ‘AtFacilityTime’, ‘Avail Date’, tag name ‘AvailableDate’, and ‘Avail’, 
tag name ‘AvailableTime’, fields 
• Changed ‘provider’ to ‘responding unit’ in the definitions of ‘Dispatch Date’, 
tag name ‘DispatchDate’, ‘Dispatch’, tag name ‘DispatchTime’, ‘Arrival 
Date’, tag name ‘ArrivalDate’, ‘Date At Patient’, tag name ‘AtPatientDate’, 
and ‘Time At Patient’, tag name ‘AtPatientTime’, fields 
• Changed ‘provider’ to ‘transporting unit’ in the definitions of ‘Left Date’, tag 
name ‘LeftSceneDate’, ‘Left’, tag name ‘LeftSceneTime’, ‘At Fac Date’, tag 
name ‘AtFacilityDate’, ‘At Fac’, tag name ‘AtFacilityTime’, ‘Fac Equip 
Date’, tag name ‘OnFacilityEquipmentDate’, and ‘Fac Equip Time’, tag 
name ‘OnFacilityEquipmentTime’, fields 
• Updated the long text of the following in the ‘Med. Ctrl.’ tag name 
‘MedCtrl’, picklist: 
• AVH  Antelope Valley Medical Center to Antelope Valley Hospital 
• HGH  Harbor UCLA Medical Center to LAC Harbor-UCLA Medical 
Center 
• QVH  Citrus Valley Medical Center Queen of the Valley Campus to 
Emanate Health Queen of the Valley Hospital 
• Removed the following from the ‘Rec Fac’, tag name ‘ReceivingFacility’, 
picklist: 
• MID  Olympia Medical Center 
• Added the following to the ‘Rec Fac’, tag name ‘ReceivingFacility’, picklist: 
• PUC  Psych Urgent Care 
• SCC  Sobering Center 
• Updated the long text of the following in the ‘Rec Fac’, tag name 
‘ReceivingFacility’, picklist: 
• TRM  Providence Tarzana Medical Center to Providence Cedars-
Sinai Tarzana Medical Center 
• Added ‘Comment’, tag name ‘RecFacComment’, field 
Field Values 

7 
 
• Free text 
• Changed name of ‘Release At Scene?’, tag name ‘ReleaseAtScene’, to 
‘Assess, Treat, & Release?’, tag name ‘AssessTreatRelease’ 
• Changed name of ‘Treat & Refer?’, tag name ‘TreatRefer’, to ‘Treatment in 
Place?’, tag name ‘TreatInPlace’ 
• Added ‘Advanced Provider Level’, tag name ‘AdvancedProviderLevel’, 
field 
Field Values 
• APP  Advanced Practice Provider 
• EMS MD  EMS Physician 
Stroke 
• Changed the minimum value for ‘Last Known Well Date’, tag name 
‘LastKnownWellDate’, from 07/01/2015 to 07/01/2016 
Patient Assessment 
• Removed the following from the ‘Mechanism of Injury’, tag name 
‘MechanismOfInjury’, picklist: 
• PS  Passenger Space Intrusion 
Special Circumstances 
• Removed ‘9-1-1 or Dispatch Center’ from Data Source Hierarchy for 
‘Contacted Med. Circ. Support?’, tag name ‘ContactMCS’ 
Vital Signs 
• Added ‘Temp’, tag name ‘Temp’, field 
Field Values 
• Up to five-digit positive numeric value 
• Added ‘Temp Unit’, tag name ‘TempUnit’, field 
Field Values 
• C  Celsius 
• F  Fahrenheit 
Cardiac Arrest 
• Changed the minimum value for ‘Date of Arrest’, tag name ‘ArrestDate’, 
from 07/01/2020 to 07/01/2021 
• Added the following to the ‘Type of Bystander CPR’, tag name 
‘TypeOfBystanderCPR’, picklist: 
• U  Unknown 
Verification of Advance Airway 
• Change section name to Verification of Advanced Airway 
01/06/2021  Validator Logic Rules 
• Added logic rule: 
• ‘For Route= “LB”, the only acceptable value for Meds is “NAR” 
Medication/Rhythm 
• Added the following to the ‘Route’, tag name ‘Route’, picklist: 
• LB  Left Behind 
 
09/22/2020  Medication/Rhythm 
• Added the following to the ‘Meds’, tag name ‘Meds’, picklist: 
• MDI  Albuterol MDI 
• Changed ‘Dose Units’, tag name ‘DoseUnits’, from maximum constraint of 
3 to maximum constraint of 5 
• Added the following to the ‘Dose Units’, tag name ‘DoseUnits’, picklist: 
•  puffs  puffs 

8 
 
Cardiac Arrest 
• Changed ‘If Other, Please Explain’, tag name ‘IfOtherExplain’, from 
maximum constraint of 40 to maximum constraint of 60 
Airway Management 
• Changed ‘If Reason=Other, Explain’, tag name ‘ExplainOtherReason’, 
from maximum constraint of 40 to maximum constraint of 60 
08/7/2020  Incident Information 
• Added the following to the ‘PD’, tag name ‘PD’, picklist: 
• DFW  Department of Fish and Wildlife 
• LHPD  La Habra PD 
06/11/2020  Cardiac Arrest 
• Updated revision history references and ‘Other Associated Elements’ for 
‘Time Of Bystander CPR’, tag name ‘TimeOfByStanderCPR’, to reflect 
that the tag name should have a capitalized, not a lower case, “S” 
06/08/2020  Special Circumstances 
• Changed ‘DNR/AHCD/POLST?’, tag name ‘DNR_AHCD_POLST’, from 
multi-copy to uni-copy 
Initial Advanced Airway Placement 
• Changed ‘Dislodgement?’, tag name ‘Dislodgement’, from multi-copy to 
uni-copy 
Cardiac Arrest 
• Changed ‘Who Initiated CPR?’, tag name ‘WhoInitiatedCPR’, from multi-
copy to uni-copy 
• Set max occurrence for ‘Time of AED Shock’, tag name 
‘TimeOfAEDShock’ to 5 
05/27/2020  Advanced Airway 
• Changed tag name for ‘Advanced Airway Device’ from 
‘AdvancedAirwayDevices’ to ‘AdvancedAirwayDevice’ 
05/07/2020  Validator Logic Rules 
• Revised the following logic rule for both v8 and v9: 
• Added the following for ‘Report Error for Blank/Null Values in AMA, 
ReleaseAtScene, and TreatRefer if Via = “N”: 
• except when RunType = “C” or “N” 
04/28/2020  Advanced Airway 
• Changed tag name for ‘BMV TM#’ from ‘TMNumber’ to ‘BMVTMNumber’ 
• Changed tag name for ‘Advanced Airway Device’ from 
‘AdvancedAirwayDevice’ to ‘AdvancedAirwayDevices’ 
• Changed tag name for ‘Rescue Device PM#’ from ‘TMNumber’ to 
‘RescueDeviceTMNumber’ 
 
04/22/2020  Cardiac Arrest 
• Changed tag name for ‘Time of 1
st
 Arrest’ from ‘1
st
ArrestTime’ to 
‘FirstArrestTime’ 
 
04/08/2020  Vitals 
• Increased the maximum constraint from 2 to 3 for ‘CO2’, tag name ‘CO2 
Therapy Details 
• Increased the maximum constraint from 2 to 3 for ‘CO2’, tag name ‘CO2’ 
Transfer of Care 
• Increased the maximum constraint from 2 to 3 for ‘CO2’, tag name ‘CO2’ 

9 
 
Advanced Airway 
• Increased the maximum constraint from 2 to 3 for ‘Capnography 
Measurement’, tag name ‘CapnographyMeasurement’ 
04/01/2020  Data Submission Details 
• Updated version to ‘Version 9’ 
• Removed the following as non-nullable fields in the Incident Information 
section 
• ‘Med Ctrl.’, tag name ‘MedCtrl’ 
Validator Logic Rules 
• Added logic rule: 
• ‘Report error if Via= “N” and ReceivingFacility and/or 
TransportedTo have valid values 
• ‘Report error for blank/null values in LocationCode and 
PDOnScene if any copy of ProviderImpression has a value= 
“AGDE”, “BURN”, “CABT”, “CANT”, “CAPT”, “DCON”, “DEAD”, 
“DRWN”, “ELCT”, “ODPO”, “PSYCH”, or “TRMA”’ 
• Removed logic rule: 
• ‘Report Error for Blank/Null Values of MedCtrl’ 
• Revised the following logic rules: 
• Changed the following for ‘Check for Blank/Null Values in 
ReceivingFacility and report error if Via = ‘A’, ‘B’, or ‘H’’: 
• Receiving Facility and TransportedTo  
• Changed the DateOfBirth year from 1900 to 1910 for ‘Report the 
“Invalid Date” error if year of DateOfBirth is less than 1900’  
• Added the following to ‘Report Error for Blanks/Null Values in 
LastName, FirstName, Age, AgeUnit, Gender, Complaint, 
ProviderImpression, and TeamMemberID if RunType = “R” 
• Protocol 
• MedCtrl 
• Added the following to ‘For RunType= “C” or “N”, the only 
acceptable value for Age, AgeUnit, Gender, Complaint, 
ProviderImpression, MedCtrl, and Notification is ‘Not Applicable’ 
(BIU=1)’: 
• Protocol  
• Removed the following from ‘Report Error if a negative value is 
received for the following fields:’ 
• JurisdictionalStation 
• IVGauge 
• IOGauge 
• Changed the following for ‘Report Error if a negative value is 
received for the following fields:’ 
• TotalIVFluidsReceived to TotalIVIOFluidsReceived 
• Added the following to ‘Report Error if a negative value is received 
for the following fields:’ 
• PatientNumber 
• TotalPatients 
• NumberOfPatientsTransported 
• Joules 
• AirwayDeviceSize 

10 
 
Incident Information 
• Changed the minimum value for ‘Date’, tag name ‘IncidentDate’, from 
07/01/2014 to 07/01/2015 
• Deleted ‘Jur Sta’, tag name ‘JurisdictionalStation’, field 
• Removed the following from the ‘Location Code’, tag name 
‘LocationCode’, picklist: 
• BE  Beach/Ocean/Lake/River 
• Added the following to the ‘Location Code’, tag name ‘LocationCode’, 
picklist: 
• BA  Beach 
• HT  Hotel 
• LA  Lake 
• ON  Ocean 
• PS  Psych Urgent Care 
• RV  River 
• SB  Sobering Center 
• Added ‘PD on Scene?’, tag name ‘PDOnScene’, field after ‘Location 
Code’, tag name ‘LocationCode’, field 
Field Values 
• Y  Yes 
• N  No 
• Changed name of ‘PD & Unit #’, tag name ‘PDUnitNumber’, to ‘PD’, tag 
name ‘PD’ 
• Changed field values of ‘PD’, tag name ‘PD’, to the following picklist: 
Field Values 
• ALPD  Alhambra PD 
• ARPD  Arcadia PD 
• AZPD  Azusa PD 
• BPPD  Baldwin Park PD 
• BEPD  Bell PD 
• BGPD  Bell Gardens PD 
• BHPD  Beverly Hills PD 
• BUPD  Burbank PD 
• CAPD  Campus PD 
• CCPD  Culver City PD 
• CHP  California Highway Patrol 
• CLPD  Claremont PD 
• COPD  Covina PD 
• CPD  Los Angeles County PD 
• DOPD  Downey PD 
• EMPD  El Monte PD 
• ESPD  El Segundo PD 
• GAPD  Gardena PD 
• GLPD  Glendale PD 
• GOPD  Glendora PD 
• HAPD  Hawthorne PD 
• HBPD  Hermosa Beach PD 
• HPPD  Huntington Park PD 
• INPD  Inglewood PD 

11 
 
• IRPD  Irwindale PD 
• LAAP  LA Airport Police 
• LACS  LA County Sheriff 
• LAPD  Los Angeles PD 
• LAPR  LA City Park Ranger 
• LBPD  Long Beach PD 
• LVPD  La Verne PD 
• MBPD  Manhattan Beach PD 
• MOPD  Montebello PD 
• MPPD  Monterey Park PD 
• MRPD  Monrovia PD 
• PAPD  Pasadena PD 
• POLA  Port of LA PD 
• POPD  Pomona PD 
• PVPD  Palos Verdes Estates PD 
• RBPD  Redondo Beach PD 
• SAPD  San Marino PD 
• SFPD  San Fernando PD 
• SGPD  San Gabriel PD 
• SHPD  Signal Hill PD 
• SIPD  Sierra Madre PD 
• SMPD  Santa Monica PD 
• SPPD  South Pasadena PD 
• STPD  South Gate PD 
• TPD  Torrance PD 
• VPD  Vernon PD 
• WCPD  West Covina PD 
• WPD  Whittier PD 
• Added ‘PD Unit #’, tag name ‘PDUnit’, field after ‘PD’, tag name ‘PD’, field 
Field Values 
• Free text 
• Moved ‘Care Provided by PD’, tag name ‘CareByPD’, from Therapies 
• Changed name of ‘Care Provided by PD’, tag name ‘CareByPD’, to ‘PD 
Actions’, tag name ‘PDActions’ 
• Added the following to the ‘PD Actions’, tag name ‘PDActions’, picklist: 
• AE  AED placement 
• AS  AED shock 
• CP  CPR 
• RE  Restraints 
• TA  CEW (e.g. Taser
®
) 
• Changed ‘PD Actions’, tag name ‘PDActions’, from single to multiple entry 
configuration 
 
 
Patient Information 
• Changed the minimum value for ‘DOB’, tag name ‘DateofBirth’, from 
01/01/1900 to 01/01/1910 
• Changed tag name for ‘Patient Zip Code’, from ‘PatientZipcode’ to 
‘PatientZipCode’ 

12 
 
Transport Information 
• Changed the minimum value for ‘Disp Date’, tag name ‘DispatchDate’, 
‘Arrival Date’, tag name ‘ArrivalDate’, ‘Date at Patient’, tag name 
‘AtPatientDate’, ‘Left Date’, tag name ‘LeftSceneDate’, ‘At Fac Date’, tag 
name ‘AtFacilityDate’, ‘Fac Equip Date’, tag name 
‘OnFacilityEquipmentDate’, and ‘Avail Date’, tag name ‘AvailableDate’ 
from 07/01/2014 to 07/01/2015 
• Removed the following from the ‘Prov’, tag name ‘Provider’, picklist: 
• RO  Rescue One Ambulance 
• UF  Upland Fire 
• Added the following to the ‘Prov’, tag name ‘Provider’, picklist: 
• CO  College Coastal Care, LLC 
• GG  Go Green Ambulance 
• Removed suggested prefixes from Additional Information for ‘Unit’, tag 
name ‘Unit’, in the data dictionary 
• Updated the long text of the following in the ‘Rec Fac’, tag name 
‘ReceivingFacility’, picklist: 
• CPM  Coast Plaza Doctors Hospital to Coast Plaza Hospital 
• DCH PIH Health Hospital – Downey to PIH Health Downey 
Hospital 
• DFM  Marina Del Rey Hospital to Cedars-Sinai Marina Del Rey 
Hospital  
• GSH Good Samaritan Hospital to PIH Health Good Samaritan 
Hospital 
• LBM  Long Beach Memorial Medical Center to MemorialCare Long 
Beach Medical Center 
• PIH   PIH Health Hospital – Whittier to PIH Health Whittier Hospital 
• Removed the following from the ‘Rec Fac’, tag name ‘ReceivingFacility’, 
picklist: 
• HEV  Glendora Community Hospital 
• SVH  St. Vincent Medical Center 
• Updated the long text of the following in the ‘Med. Ctrl.’, tag name 
‘MedCtrl’, picklist: 
• LBM  Long Beach Memorial Medical Center to MemorialCare Long 
Beach Medical Center 
• PIH    PIH Health Hospital – Whittier to PIH Health Whittier Hospital 
Complaints 
• Move ‘Complaint’, tag name ‘Complaint’, to Patient Assessment after 
‘Distress Level’, tag name ‘DistressLevel’, field 
• Removed Complaints wrapper 
Mechanism of Injury 
• Moved ‘Mechanism of Injury’, tag name ‘MechanismOfInjury’, to Patient 
Assessment after ‘Complaint’, tag name ‘Complaint’, field 
• Removed Mechanism of Injury wrapper 
 
 
Stroke 
• Changed the minimum value for ‘Last Known Well Date’, tag name 
‘LastKnownWellDate’ from 07/01/2012 to 07/01/2015 
Medication/Defibrillation 

13 
 
• Changed name to Medication/Rhythm  
• Changed name of ‘Meds/Defib Time’, tag name ‘Time’, to ‘Meds/Rhythm 
Time’, tag name ‘Time’ 
• Changed name of ‘Meds/Defib’, tag name ‘MedsDefib’, to ‘Meds’, tag 
name ‘Meds’ 
• Removed the following from the ‘Meds’, tag name ‘Meds’, picklist: 
• CAR  Cardioversion 
• AED  AED 
• DEF  Defibrillation 
• Added the following to the ‘Meds’, tag name ‘Meds’, picklist: 
• KLC  Ketorolac 
• Removed the following from the ‘Dose Units’, tag name ‘DoseUnits’, 
picklist: 
• J  Joules 
Defibrillation 
• Added this wrapper after ‘Result’, tag name ‘Results’ 
• Added ‘Defib Time’, tag name ‘Time’ as first field under Defibrillation 
wrapper 
• Added ‘TM #’, tag name ‘TMNumber’, after ‘Defib Time’, tag name 
‘DefibTime’, field 
Field Values 
• Free text 
• Added ‘Defib’, tag name ‘Defib’, field after ‘TM #’, tag name ‘TMNumber’, 
field 
Field Values 
• CAR  Cardioversion 
• DEF  Defibrillation 
• Added ‘Joules’, tag name ‘Joules’, field after ‘Defib’, tag name ‘Defib’, field 
Field Values 
• Up to three-digit positive numeric value 
• AED  AED 
• Added ‘Result’, tag name ‘Results’, field after ‘Joules’, tag name ‘Joules’, 
field 
Field Values 
• 1HB  First degree Heart Block 
• 2HB  Second degree Heart Block 
• 3HB  Third degree Heart Block 
• AFL  Atrial Flutter 
• AFI  Atrial Fibrillation 
• AGO  Agonal Rhythm 
• ASY  Asystole 
• AVR  Accelerated Ventricular Rhythm 
• IV  Idioventricular Rhythm 
• JR  Junctional Rhythm 
• PAC  Premature Atrial Contraction 
• PAT  Paroxysmal Atrial Tachycardia 
• PEA  Pulseless Electrical Activity 
• PM  Pacemaker Rhythm 
• PST  Paroxysmal Supraventricular Tachycardia 

14 
 
• PVC  Premature Ventricular Contraction 
• SA  Sinus Arrhythmia 
• SB  Sinus Bradycardia 
• SR  Sinus Rhythm 
• ST  Sinus Tachycardia 
• SVT  Supraventricular Tachycardia 
• UNS  Unknown Non-Shockable Rhythm (AED) 
• US  Unknown Shockable Rhythm (AED) 
• VF  Ventricular Fibrillation 
• VT  Ventricular Tachycardia 
Patient Assessment 
• Added the following to the ‘Peds Color Code’, tag name 
‘PedsWeightColorCode’, picklist: 
• S  Too Short 
• Removed the following from the ‘Units of Weight’, tag name ‘WeightUnit’, 
picklist: 
• L  Pounds (lbs) 
Arrest Details 
• Changed name to Cardiac Arrest 
• Added ‘Date of Arrest’, tag name ‘ArrestDate’, field as first field under 
Arrest Details wrapper 
• Added ‘Time of 1
st
 Arrest’, tag name ‘FirstArrestTime’, field after ‘Date of 
Arrest’, tag name ‘ArrestDate’, field 
• Added ‘Arrest Witnessed By’, tag name ArrestWitnessedBy’, field after 
‘Time of 1
st
 Arrest’, tag name ‘FirstArrestTime’, field 
Field Values 
• FE  First Responder EMS (assessment unit, truck, etc.) 
• FM  Family Member 
• HP  Healthcare Provider 
• LE  Law Enforcement 
• LP  Lay Person 
• NO  None 
• TU  Transport Unit (squad or rescue) 
• Added ‘Presumed Cardiac Arrest Etiology’, tag name 
‘PresumedArrestEtiology’, field after ‘Arrest Witnessed By’, tag name 
‘ArrestWitnessedBy’, field 
Field Values 
• DS  Drowning/Submersion 
• EL  Electrocution 
• EX  Exsanguination/Hemorrhage (non-traumatic) 
• OD  Drug Overdose 
• PC  Presumed Cardiac Etiology 
• RA  Respiratory/Asphyxia 
• SE  Sepsis 
• TR  Trauma 
• OT  Other 
• Added ‘If Other, Please Explain’, tag name ‘IfOtherExplain’, field after 
‘Presumed Cardiac Arrest Etiology’, tag name ‘PresumedArrestEtiology’, 
field 

15 
 
Field Values 
• Free text 
• Added ‘Were Dispatcher CPR Instructions Provided?’, tag name 
‘DispatchCPRInstructions’, field after ‘If Other, Please Explain’, tag name 
‘IfOtherExplain’, field 
Field Values 
• Y  Yes 
• N  No 
• U  Unknown 
• Added ‘Resuscitation Attempted by an ACLS Provider?’, tag name 
‘ACLSResuscitation’, field after ‘Were Dispatcher CPR Instructions 
Provided?’, tag name ‘DispatchCPRInstructions’, field 
Field Values 
• Y  Yes 
• N  No 
• Added ‘Who Initiated CPR?’, tag name ‘WhoInitiatedCPR’, field after 
‘Resuscitation Attempted by an ACLS Provider?’, tag name 
‘ACLSResuscitation’, field 
Field Values 
• FE  First Responder EMS (assessment unit, truck, etc.) 
• FM  Family Member 
• HP  Healthcare Provider 
• LE  Law Enforcement 
• LP  Lay Person 
• NO  No CPR Performed 
• TU  Transport Unit (squad or rescue) 
• Moved ‘Arrest to CPR’, tag name ‘ArresttoCPR’, after ‘Who Initiated 
CPR?’, tag name ‘WhoInitiatedCPR’, field 
• Added ‘Time of Bystander CPR’, tag name ‘TimeOfBystanderCPR’, field 
after ‘Arrest to CPR’, tag name ‘ArresttoCPR’, field 
• Added ‘Type of Bystander CPR’, tag name ‘TypeOfBystanderCPR’, field 
after ‘Time of Bystander CPR’, tag name ‘TimeOfBystanderCPR’, field 
Field Values 
• C  Compressions Only 
• CV  Compressions and Ventilations 
• V  Ventilations Only 
• Moved ‘EMS CPR Time’, tag name ‘EMSCPRTime’, after ‘Type of 
Bystander CPR’, tag name ‘TypeOfBystanderCPR’, field 
• Added ‘Was an AED Applied?’, tag name ‘AEDApplied’, field after ‘EMS 
CPR Time’, tag name ‘EMSCPRTime’, field 
Field Values 
• YWD  Yes, with defibrillation 
• YWO  Yes, without defibrillation 
• N  No 
• Added ‘Who First Applied AED?’, tag name ‘WhoFirstAppliedAED’, field 
after ‘Was an AED Applied?’, tag name ‘AEDApplied’, field 
Field Values 
• FE  First Responder EMS (assessment unit, truck, etc.) 
• FM  Family Member 

16 
 
• HP  Healthcare Provider 
• LE  Law Enforcement 
• LP  Lay Person 
• TU  Transport Unit (squad or rescue) 
• Added ‘Who First Defibrillated the Patient?’, tag name 
‘WhoFirstDefibrillated’, field after ‘Who First Applied AED?’, tag name 
‘WhoFirstAppliedAED’, field 
Field Values 
• FE  First Responder EMS (assessment unit, truck, etc.) 
• FM Family Member 
• HP  Healthcare Provider 
• LE  Law Enforcement 
• LP  Lay Person 
• NO  Patient was not defibrillated 
• TU  Transport Unit 
• Added ‘Time of AED Shock’, tag name ‘TimeOfAEDShock’, field after 
‘Who First Defibrillated the Patient?’, tag name ‘WhoFirstDefibrillated’, 
field 
• Added “First Arrest Rhythm of Patient’, tag name ‘FirstArrestRhythm’, field 
after ‘Time of AED Shock’, tag name ‘TimeOfAEDShock’, field 
Field Values 
• ASY  Asystole 
• PEA  Pulseless Electrical Activity 
• UNS  Unknown Non-Shockable Rhythm (AED) 
• US  Unknown Shockable Rhythm (AED) 
• VF  Ventricular Fibrillation 
• VT  Ventricular Tachycardia – pulseless 
• Added ‘Mechanical CPR Device Used?’, tag name 
‘MechanicalCPRDeviceUsed’, field after ‘First Arrest Rhythm of Patient’, 
tag name ‘FirstArrestRhythm’, field 
Field Values 
• Y  Yes 
• N  No 
• Added ‘If Yes, Please Specify’, tag name ‘IfYesSpecify’, field after 
‘Mechanical CPR Device Used?’, tag name ‘MechanicalCPRDeviceUsed’, 
field 
Field Values 
• AP  AutoPulse 
• LU  Lucas 
• TH  Thumper 
• OT  Other 
• Added ‘If Other, Please Specify’, tag name ‘IfOtherSpecify’, field after ‘If 
Yes, Please Specify’, tag name ‘IfYesSpecify’, field 
Field Values 
• Free text 
• Added ‘Automated CPR Feedback Device Used?’, tag name 
‘AutomatedCPRFeedbackDevice’, field after ‘If Other, Please Specify’, tag 
name ‘IfOtherSpecify’, field 
Field Values 

17 
 
• Y  Yes 
• N  No 
• Added ‘ITD Used?’, tag name ‘ITDUsed’, field after ‘Automated CPR 
Feedback Device Used?’, tag name ‘AutomatedCPRFeedbackDevice’, 
field 
Field Values 
• Y  Yes 
• N  No 
• Moved ‘Restoration of Pulse Time’, tag name ‘RestorationofPulseTime’, 
after ‘ITD Used?’, tag name ‘ITDUsed’, field 
• Added ‘Sustained ROSC?’, tag name ‘SustainedROSC’, field after 
‘Restoration of Pulse Time’, tag name ‘RestorationofPulseTime’, field 
Field Values 
• Y  Yes 
• N  No 
• E  Arrived at ED prior to 20 min. 
• Added ‘End of Event’, tag name ‘EndOfEvent’, field after ‘Sustained 
ROSC?’, tag name ‘SustainedROSC’, field 
Field Values 
• DN  Effort ceased due to DNR 
• OE  Ongoing resuscitation in ED 
• PF  Pronounced/TOR in field 
• PE  Pronounced in ED 
• Moved ‘Time of 814 Death’, tag name ‘Time814’, after ‘End of Event’, tag 
name ‘EndOfEvent’, field 
• Moved ‘Pronounced Time’, tag name ‘ResuscitationDiscontinuedTime’, 
field after ‘Time of 814’, tag name ‘Time814’, field 
• Changed name of ‘Arrest Details/Reason For Withholding Resuscitation’, 
tag name ‘ArrestDetailsReasonForWithholiding’, to ‘Reason For 
Withholding Resuscitation’, tag name ‘ReasonForWithholding’ 
• Moved ‘Reason For Withholding Resuscitation’, tag name 
‘ReasonForWithholding’, field after ‘ResuscitationDiscontinuedTime’, tag 
name ‘PatientPronouncedBy’, field 
• Removed the following from the ‘Reason For Withholding Resuscitation’, 
tag name ‘ReasonForWithholding’ picklist: 
• WC  Witnessed Citizen 
• WE  Witnessed EMS 
• WN  Not Witnessed 
• CC  Citizen CPR 
• CE  CPR by EMS 
• AA  AED Analyzed 
• AD  AED Defibrillation 
• AR  ALS Resuscitation 
• Changed name of ‘Pronounced Rhythm’, tag name ‘PronouncedRhythm’, 
to ‘Resus D/C Rhythm’, tag name ‘ResusDCRhythm’ 
Therapy Details 
• Add the following picklist to ‘IV Gauge’, tag name ‘IVGauge’: 
Field Values 
• 14  14 gauge 

18 
 
• 16  16 gauge 
• 18  18 gauge 
• 20  20 gauge 
• 22  22 gauge 
• 24  24 gauge 
• Changed name of ‘IO Gauge’, tag name ‘IOGauge’, to ‘IO Length’, tag 
name ‘IOLength’, and added the following picklist: 
Field Values 
• 15  15mm 
• 25  25mm 
• 45  45mm 
Advanced Life Support 
• Changed name to Advanced Airway 
• Added ‘BMV Used?’, tag name ‘BMVUsed’, field as first field under 
Advanced Airway wrapper 
Field Values 
• Y  Yes 
• N  No 
• Added ‘BMV Successful?’, tag name ‘BMVSuccessful’, field after ‘BMV 
Used?’, tag name ‘BMVUsed’, field 
Field Values 
• Y  Yes 
• N  No 
• Added ‘BMV TM#’, tag name ‘TMNumber’, field after ‘BMV Successful?’, 
tag name ‘BMVSuccessful’, field 
Field Values 
• Free text 
• Moved ‘Reason For Advanced Airway’, tag name 
‘AdvancedAirwayReason’, field after ‘BMV TM#’, tag name ‘TMNumber’ 
field 
• Added ‘Advanced Airway Device’, tag name ‘AdvancedAirwayDevice’, 
field after ‘Reason For Advanced Airway’, tag name 
‘AdvancedAirwayReason’, field 
Field Values 
• E  Endotracheal Tube (ETT) 
• K  King LTS-D 
• I  iGel 
• Moved ‘Endotracheal Tube Paramedic Number’, tag name ‘TMNumber’, 
from Endotracheal Tube/King Airway and placed after ‘Advanced Airway 
Device’, tag name ‘AdvancedAirwayDevice’, field 
• Changed name of ‘Endotracheal Tube Paramedic Number’, tag name 
‘TMNumber’, to ‘Advanced Airway Device PM #’, tag name ‘TMNumber’ 
• Added ‘Time of Advanced Airway Attempt’, tag name 
‘TimeAdvancedAirwayAttempt’, field after ‘Advanced Airway Device PM #’, 
tag name ‘TMNumber’, field 
• Moved ‘Endotracheal Tube Success’, tag name ‘Success’, from 
Endotracheal Tube/King Airway and placed after ‘Time of Advanced 
Airway Attempt’, tag name ‘TimeAdvancedAirwayAttempt’, field 
• Changed name of ‘Endotracheal Tube Success’, tag name ‘Success’, to 
‘Successful Placement?’, tag name ‘SuccessfulPlacement’ 

19 
 
• Moved ‘ETT/King Airway Insertion Success Time’, tag name 
‘TimeETorKingSuccess’, field from Endotracheal Tube/King Airway and 
placed after ‘Successful Placement?’, tag name ‘SuccessfulPlacement’, 
field 
• Changed name of ‘ETT/King Airway Insertion Success Time’, tag name 
‘TimeETorKingSuccess’, to ‘Time of Successful Placement’, tag name 
‘TimeSuccessfulPlacement’ 
• Moved ‘Endotracheal/King Tube Size’, tag name ‘ETKingTubeSize’, from 
Endotracheal Tube/King Airway and placed after ‘Time of Successful 
Placement’, tag name ‘TimeSuccessfulPlacement’, field 
• Changed name of ‘Endotracheal/King Tube Size’, tag name 
‘ETKingTubeSize’, to ‘Advanced Airway Device Size’, tag name 
‘AirwayDeviceSize’ 
• Moved ‘Tube Placement Mark at Teeth’, tag name ‘TubePlacement’, field 
after ‘Advanced Airway Device Size’, tag name ‘AirwayDeviceSize’, field  
• Moved ‘Difficult Airway Techniques’, tag name ‘DifficultAirwayTechniques’, 
field from Endotracheal Tube/King Airway and placed after ‘Tube 
Placement Mark at Teeth’, tag name ‘TubePlacement’, field 
• Removed the following from ‘Difficult Airway Techniques’, tag name 
‘DifficultAirwayTechniques’, picklist: 
• FG  Flex Guide 
• Added the following to the ‘Difficult Airway Techniques’, tag name 
‘DifficultAirwayTechniques’, picklist: 
• IT  Introducer (bougie) 
• VL  Video Laryngoscopy 
• Added ‘Advanced Airway Device Placement Confirmed with 
Capnography?’, tag name ‘DeviceConfirmedWithCapnography’, field after 
‘Difficult Airway Techniques’, tag name ‘DifficultAirwayTechniques’, field 
Field Values 
• Y  Yes 
• N  No 
• Moved ‘Capnography Measurement’, tag name 
‘CapnographyMeasurement’, field from Initial Airway Placement 
Confirmation and placed after ‘Advanced Airway Device Placement 
Confirmed with Capnography?’, tag name 
‘DeviceConfirmedWithCapnography’, field 
• Moved ‘Spontaneous Respirations’, tag name ‘SpontaneousRespirations’, 
from Ongoing Placement Confirmation and placed after ‘Capnography 
Measurement’, tag name ‘CapnographyMeasurement’, field 
• Moved ‘EtCO
2
 Detector Colorimetric’, tag name 
‘ETCO2DetectorColormetric’ from Initial Airway Placement Confirmation 
and placed after ‘Confirmation With Backup Device’, tag name 
‘ConfirmationWithBackupDevice’, field 
• Added ‘If Placement Not Confirmed with Capnography, Why?’, tag name 
‘IfNoCapnographyWhy’, field after ‘Spontaneous Respirations’, tag name 
‘SpontaneousRespirations’ field 
Field Values 
• EF  Capnography Equipment Failure 
• OT  Other 

20 
 
• Added ‘If Reason=Other, Explain’, tag name ‘ExplainOtherReason’, field 
after ‘If Placement Not Confirmed with Capnography, Why?’, tag name 
‘IfNoCapnographyWhy’, field 
Field Values 
• Free text 
• Added ‘Confirmation with Backup Device?’, tag name 
‘ConfirmationWithBackupDevice’, field after ‘If Reason=Other, Explain’, 
tag name ‘ExplainOtherReason’, field 
Field Values 
• Y  Yes 
• N  No 
• Added ‘Rescue Device?’, tag name ‘RescueDevice’, field Field Values 
• Y  Yes 
• N  No 
• Changed name of ‘King Airway Paramedic Number’, tag name 
‘TMNumber’, to ‘Rescue Device PM #’, tag name ‘TMNumber’ 
• Moved ‘Rescue Device PM#’, tag name ‘TMNumber’, field after ‘Rescue 
Device?’, tag name ‘RescueDevice’, field 
• Moved ‘Reason(s) ALS Airway Unable’, tag name ‘ALSAirwayUnable’, 
field after ‘Rescue Device PM #’, tag name ‘TMNumber’, field 
• Changed name of ‘Reason(s) ALS Airway Unable’, tag name 
‘ALSAirwayUnable’, to ‘Reason(s) Advanced Airway Device Unable’, tag 
name ‘AdvancedAirwayDeviceUnable’ 
Endotracheal Tube/King Airway 
• Deleted ‘ETT/King Airway Insertion Start Time’, tag name 
‘TimeETTorKingStarted’, field 
• Deleted ‘King Airway Success’, tag name ‘Success’, field 
• Deleted ‘Complication(s) During Tube Placement’, tag name 
‘ComplicationsDuringTubePlacement’, field 
• Removed Endotracheal Tube/King Airway wrapper 
Initial Airway Placement Confirmation 
• Deleted ‘Init. Adv. Airway Confirmation Technique’, tag name 
‘InitialPlacementConfirmation’, field 
• Deleted ‘Waveform Capnography’, tag name ‘WaveCapnography’, field 
• Removed Initial Airway Placement Confirmation wrapper 
Complication(s) During Tube Placement 
• Added this wrapper after ‘Reason(s) Advanced Airway Device Unable’, tag 
name ‘ALSAirwayUnable’, field 
• Added ‘Regurgitation/Emesis?’, tag name ‘RegurgitationEmesis’, field as 
first field under Complication(s) During Tube Placement wrapper 
Field Values 
• Y  Yes 
• N  No 
• Added ‘Bleeding/Trauma?’, tag name ‘BleedingTrauma’, after 
‘Regurgitation/Emesis?’, tag name ‘RegurgitationEmesis’, field 
Field Values 
• Y  Yes 
• N  No 
• Added ‘Bradycardia?’, tag name ‘Bradycardia’, field after 
‘Bleeding/Trauma?’, tag name ‘BleedingTrauma’, field 

21 
 
Field Values 
• Y  Yes 
• N  No 
• Added ‘Hypoxia?’, tag name ‘Hypoxia’, field after ‘Bradycardia?’, tag name 
‘Bradycardia’, field 
Field Values 
• Y  Yes 
• N  No 
• Added ‘Right Mainstem Placement?’, tag name 
‘RightMainstemPlacement’, field after ‘Hypoxia?’, tag name ‘Hypoxia’, field 
Field Values 
• Y  Yes 
• N  No 
Initial Advanced Airway Placement Confirmation 
• Added this wrapper after ‘Right Mainstem Placement?’, tag name 
‘RightMainstemPlacement’, field 
• Added ‘Bilateral Breath Sounds?’, tag name ‘BilateralBreathSounds’, field 
as first field under Initial Advanced Airway Placement Confirmation 
wrapper 
Field Values 
• Y  Yes 
• N  No 
• Added ‘Bilateral Chest Rise?’, tag name ‘BilateralChestRise’, field after 
‘Bilateral Breath Sounds?’, tag name ‘BilateralBreathSounds’, field 
Field Values 
• Y  Yes 
• N  No 
• Added ‘Absent Gastric Sounds?’, tag name ‘AbsentGastricSounds’, field 
after ‘Bilateral Chest Rise?’, tag name ‘BilateralChestRise’, field 
Field Values 
• Y  Yes 
• N  No 
• Moved ‘Ongoing Verification Time’, tag name ‘VerificationTime’, from 
Ongoing Placement Confirmation and placed after ‘Absent Gastric 
Sounds?’, tag name ‘AbsentGastricSounds’ 
• Added ‘Dislodgement?’, tag name ‘Dislodgement’, field after ‘Ongoing 
Verification Time’, tag name ‘VerificationTime’, field 
Field Values 
• Y  Yes 
• N  No 
• Added ‘If Dislodgement After Placement, Successful Replacement?’, tag 
name ‘IfDislodgementSuccessfulReplacement’, field after ‘Dislodgement?’, 
tag name ‘Dislodgement’, field 
Field Values 
• Y  Yes 
• N  No 
Ongoing Placement Confirmation 
• Deleted ‘Ongoing Verification Value’, tag name ‘VerificationValue’ 
• Removed Ongoing Placement Confirmation wrapper 
3/31/2020  Transport Information 

22 
 
• Added the following to the ‘Protocol’, tag name ‘Protocol’, picklist: 
• 1245  COVID 
12/01/2019  Validator Logic Rules 
• Added logic rule: 
• Report error when first copy of Protocol is a null value and 
RunType is not=”C” or “N” 
04/30/2019  Data Submission Details 
• Updated version to ‘Version 8’ 
Validator Logic Rules 
• Added logic rules: 
• Report error when first copy of Complaint is not= “OT” and value of 
“OT” is sent in subsequent copies of Complaint 
• If RunType= “C” or “N” or if Via= “A”, “B”, or “H”, the only 
acceptable value for AMA, ReleaseAtScene, and TreatRefer is 
‘Not Applicable’ (BIU=1) 
• Report error for blank/null values in AMA, ReleaseAtScene, and 
TreatRefer if Via= “N” 
• Revised the following logic rules: 
• ‘Report the “Invalid Date” error if year of DateOfBirth is less than 
1890’ to ‘Report the “Invalid Date” error if year of DateOfBirth is 
less than 1900’ 
• ‘Report error for blank/null values in LastName, FirstName, 
Complaint, and TeamMemberID if RunType= “R”’ to ‘Report error 
for blank/null values in LastName, FirstName, Age, AgeUnit, 
Gender, Complaint, ProviderImpression, and TeamMemberID if 
RunType= “R”’ 
• ‘Report error for blank/null values of Base’ to ‘Report error for 
blank/null values of MedCtrl’ 
• ‘For RunType= “C” or “N”, the only acceptable value for Complaint 
and ProviderImpression is ‘Not Applicable’ (BIU=1)’ to ‘For 
RunType= “C” or “N”, the only acceptable value for Age, AgeUnit, 
Gender, Complaint, ProviderImpression, MedCtrl, and 
Notification is ‘Not Applicable’ (BIU=1)’ 
• ‘Report error if Complaint has a trauma value, excluding value= 
“NA”, and ProviderImpression does not have a value= “CABT”, 
“CAPT”, “TRMA”, or “BURN”’ to ‘Report error if Complaint has a 
trauma value, excluding value= “NA”, and ProviderImpression 
does not have a value= “CABT”, “CAPT”, TRMA”, “BURN”, or 
“ELCT”’ 
• ‘Report error if ProviderImpression has a value= “CABT”, “CAPT”, 
“TRMA”, or “BURN” and Complaint does not have a trauma value’ 
to ‘Report error if ProviderImpression has a value= “CABT”, 
“CAPT”, “TRMA”, “BURN”, “ELCT” and Complaint does not have a 
trauma value’ 
Incident Information 
• Changed the minimum value for ‘Date’, tag name ‘IncidentDate’, ‘Disp 
Date’, tag name ‘DispatchDate’, ‘Arrival Date’, tag name ‘ArrivalDate’, 
‘Date at Patient’, tag name ‘AtPatientDate’, ‘Left Date’, tag name 
‘LeftSceneDate’, ‘At Fac Date’, tag name ‘AtFacilityDate’, ‘Fac Equip 

23 
 
Date’, tag name ‘OnFacilityEquipmentDate’, and ‘Avail Date’, tag name 
‘AvailableDate’ from 07/01/2013 to 07/01/2014 
• Removed the following from the ‘Provider’, tag name ‘Provider’, picklist: 
• AC  Americare Ambulance Service 
• AM  Adult Medical Transportation 
• EL  Elite Ambulance 
• GC  Gentle Care Transport 
• GR  Gentle Ride Transport 
• HB  Hermosa Beach Fire 
• MS  Medi-Star Transport 
• PT  Priority One 
• SC  Schaefer Ambulance 
• ST  Star Medical Transportation, Inc. 
• TL  TransLife, Inc. 
• Added the following to the ‘City’, tag name ‘IncidentCityCode’, picklist: 
• TR  Three Points 
• Updated the long text of the following in the ‘City’, tag name 
‘IncidentCityCode’, picklist: 
• WT  Watts 
Patient Assessment 
• Added the following to the ‘Gender’, tag name ‘Gender’, picklist: 
• N  Nonbinary 
• Added the following to the ‘Complaint’, tag name ‘Complaint’, picklist: 
• UB  Uncontrolled Bleeding 
• Added the following to the ‘Mechanism of Injury’, tag name 
‘MechanismOfInjury’, picklist: 
• TA  Taser 
• Moved ‘Suspected ETOH?’, tag name ‘ETOHSuspected’, from Special 
Circumstances and field placed before ‘Suspected Drugs?’, tag name 
‘DrugsSuspected’ 
• Added the following to the ‘Suspected ETOH?’, tag name 
‘ETOHSuspected’, picklist: 
• N  No 
GCS/MLAPSS/LAMS 
• Changed name to GCS and kept the following fields under this wrapper: 
• ‘Glasgow Coma Scale – Time’, tag name ‘GCSTime’ 
• ‘Eye’, tag name ‘Eye’ 
• ‘Verbal’, tag name ‘Verbal’ 
• ‘Motor’, tag name ‘Motor’ 
• ‘GCS Total’, tag name ‘GCSTotal’ 
• ‘Normal For Patient/Age’, tag name ‘NormalForPtAge’ 
Stroke 
• Added this wrapper after ‘Normal For Patient/Age’, tag name 
‘NormalForPtAge’, and placed the following fields under this wrapper: 
• ‘mLAPSS’, tag name ‘ModifiedLAStrokeScreen’ 
• ‘Last Known Well Date’, tag name ‘LastKnownWellDate’ 
• ‘Last Known Well Time’, tag name ‘LastKnownWellTIme’ 
• ‘Last Known Well Date and Time Unknown’, tag name 
‘LastKnownWellDateTimeUnk’ 

24 
 
• ‘Facial Droop’, tag name ‘FacialDroop’ 
• ‘Arm Drift’, tag name ‘ArmDrift’ 
• ‘Grip Strength’, tag name ‘GripStrength’ 
• ‘Total Score’, tag name ‘TotalScore’ 
Special Circumstances 
• Added the following to the ‘Suspected Abuse/Neglect?’, tag name 
‘AbuseSuspected’, picklist: 
• N  No 
• Added ‘Contacted Med. Circ. Support?’, tag name ‘ContactMCS’, field 
after the ‘Poison Control Contacted?’, tag name ‘PoisonControl’, field 
Field Values 
• Y  Yes 
• N  No 
Therapies 
• Moved ‘Care Provided by PD’, tag name ‘CareByPD’, from Therapy 
Details 
• Add the following to the ‘Therapies’, tag name ‘Therapy’, picklist: 
• HM  Assisted with Home Meds 
Therapy Details 
• Added ‘IO Site’, tag name ‘IOSite’, field after ‘IO Gauge’, tag name 
‘IOGauge’, field 
Field Values 
• HU  Humerus 
• TA  Tibia 
• Added ‘Needle Thoracostomy Site’, tag name ‘NTSite’, field after ‘Total 
IV/IO Fluids Received’, tag name ‘TotalIVIOFluidsReceived’, field 
Field Values 
• 2I  2
nd
 ICS 
• 4I  4
th
 ICS 
• Moved ‘IV Fluids Received’, tag name ‘TotalIVfluidsReceived’, from 
Transfer of Care and placed after ‘IO Site’, tag name ‘IOSite’ 
• Changed name of ‘IV Fluids Received’, tag name ‘TotalIVfluidsReceived’, 
to ‘Total IV/IO Fluids Received’, tag name ‘TotalIVIOFluidsReceived’ 
Transport 
• Changed name of ‘Base’, tag name ‘Base’, to ‘Med. Ctrl.’, tag name 
‘MedCtrl’ 
• Removed the following from the ‘Med. Ctrl.’, tag name ‘MedCtrl’, picklist: 
• CNA  Contact Not Attempted 
• PRO  Protocol 
• Updated the long text of the following in the ‘Med. Ctrl.’, tag name 
‘MedCtrl’, picklist: 
• AVH  Antelope Valley Medical Center to Antelope Valley Hospital 
• HGH  Harbor UCLA Medical Center to LAC Harbor-UCLA Medical 
Center 
• LCM  Providence Little Company of Mary Hospital Torrance to 
Providence Little Company of Mary Medical Center – Torrance 
• QVH  Citrus Valley Medical Center Queen of the Valley Campus to 
Emanate Health Queen of the Valley Hospital 
• Removed the following from the ‘Protocol’, tag name ‘Protocol’, picklist: 

25 
 
• 1247  Overdose/Poisoning (Suspected) 
• 1248  Pain Management 
• 1249  Respiratory Distress 
• 1250  Seizure (Adult) 
• 1251  Stroke/Acute Neurological Deficits 
• 1252  Syncope 
• 1261  Emergency Childbirth – Mother 
• 1262  Emergency Childbirth – Newborn 
• 1264  Pediatric Seizure 
• 1271  Burns 
• 1275  General Trauma 
• 1277  Traumatic Arrest 
• Removed the following from the ‘Rec Fac’, tag name ‘ReceivingFacility’, 
picklist: 
• FHR  Friendly Hills Regional Medical Center (Orange County) 
• LBC  Community Hospital of Long Beach 
• TEM  Temple Community Hospital 
• Updated the long text of the following in the ‘Rec Fac’, tag name 
‘ReceivingFacility’, picklist: 
• BMC  Brotman Medical Center to Southern California Hosp. at 
Culver City 
• DHM  Doctor’s Hospital of Montclair (San Bernardino County) to 
Montclair Hospital M.C. (S.B. County) 
• FHP  Fountain Valley Hospital (Orange County) to Fountain Valley 
Regional Hosp. & M.C. (Orange County) 
• ICH  Citrus Valley Medical Center – Inter-Community Campus to 
Emanate Health Inter-Community Hospital 
• KFA  Kaiser Foundation-Baldwin Park to Kaiser Foundation 
Hospital – Baldwin Park 
• KFB  Kaiser Permanente Downey Medical Center to Kaiser 
Foundation Hospital – Downey 
• KFH  Kaiser Permanente South Bay Medical Center to Kaiser 
Foundation Hospital – South Bay 
• KFI  Kaiser Permanente Irvine Medical Center to Kaiser Foundation 
Hospital – Irvine 
• KFL  Kaiser Permanente Los Angeles Medical Center to Kaiser 
Foundation Hospital Sunset (LA) 
• KFN  Kaiser Foundation Ontario (S.B. Co.) to Kaiser Foundation 
Hospital – Ontario (S.B. County) 
• KFO  Kaiser Permanente Woodland Hills Medical Center to Kaiser 
Foundation Hospital – Woodland Hills 
• KFP  Kaiser Permanente Panorama City Medical Center to Kaiser 
Foundation Hospital – Panorama City 
• KFW  Kaiser Permanente West LA Medical Center to Kaiser 
Foundation Hospital – West Los Angeles 
• LCH  Lancaster Community Hospital to Palmdale Regional Medical 
Center 
• LCM  Providence Little Company of Mary Torrance to Providence 
Little Company of Mary Medical Center – Torrance 

26 
 
• NOR  Norwalk Community Hospital to Los Angeles Community 
Hospital at Norwalk 
• OVM  LAC Olive View Medical Center to LAC Olive View-UCLA 
Medical Center 
• PLB  Pacific Hospital of Long Beach to College Medical Center 
• QVH  Citrus Valley Medical Center Queen of the Valley Campus to 
Emanate Health Queen of the Valley Hospital 
• SIM  Simi Valley Hospital (Ventura County) to Adventist Health – 
Simi Valley (Ventura County) 
• SJD  Saint Jude Medical Center (Orange County) to St. Jude 
Medical Center (Orange County) 
• SJO  Saint John Regional Medical Center (Ventura County) to St. 
John Regional Medical Center (Ventura County) 
• SMH  UCLA Medical Center, Santa Monica to Santa Monica-UCLA 
Medical Center 
• SPP  Providence Little Company of Mary San Pedro to Providence 
Little Company of Mary Medical Center – San Pedro 
• TRM  Providence Tarzana Medical Center Tarzana Campus to 
Providence Tarzana Medical Center 
• UCI  University of California Irvine (Orange County) to University of 
California – Irvine Medical Center (Orange County) 
• VHH  Verdugo Hills Hospital to USC Verdugo Hills Hospital  
• Changed name of ‘Pre-Notification?’, tag name ‘PreNotification’, to 
‘Notification?’, tag name ‘Notification’ 
• Changed field values of ‘Notification?’, tag name ‘Notification’, to only 
allow common null values of ‘Not Documented’ (BIU=2) and ‘Not 
Applicable’ (BIU=1) and the following: 
Field Values 
• Y  Yes 
• N  No 
• Moved ‘AMA?’, tag name ‘AMA’, after ‘Via’, tag name ‘Via’ 
• Added ‘Release at Scene?’, tag name ‘ReleaseAtScene’, field after 
‘AMA?’, tag name ‘AMA’, field 
Field Values 
• Y  Yes 
• N  No 
• Added ‘Treat & Refer?’, tag name ‘TreatRefer’, field after ‘Release at 
Scene?’, tag name ‘ReleaseAtScene’, field 
Field Values 
• Y  Yes 
• N  No 
Patient Information 
• Added the following to the ‘City’, tag name ‘PatientCityCode’, picklist: 
• TR  Three Points 
• Updated the long text of the following in the ‘City’, tag name 
‘PatientCityCode’, picklist: 
• WT  Watts County to Watts 
• Added ‘Hosp. Visit #’, tag name ‘VisitNo’, field after ‘Patient Zip Code’, tag 
name ‘PatientZipCode’, field 
Field Values 

27 
 
• Free text 
Medication/Defibrillation 
• Removed the following from the ‘Rhythm’, tag name ‘Rhythm’, picklist: 
• EMD  Electro-Mechanical Dissociation 
• UNK  Unable to determine 
• OTH  Other 
• Added the following to the ‘Rhythm’, tag name ‘Rhythm’, picklist: 
• SA  Sinus Arrhythmia 
• Removed the following from the ‘Meds/Defib’, tag name ‘MedsDefib’, 
picklist: 
• D25  D25W 
• D50  D50W 
• DOP  Dopamine 
• Added the following to the ‘Meds/Defib’, tag name ‘MedsDefib’, picklist: 
• LID  Lidocaine 
• Changed ‘Dose’, tag name ‘Dose’, to only accept positive numeric values 
• Added ‘Dose Units’, tag name ‘Dose Units’, field after ‘Dose, tag name 
‘Dose’, field 
Field Values 
• gm  grams 
• J  joules 
• mcg  micrograms 
• mEq  milliequivalent 
• mg  milligrams 
• mL  milliliter 
• Removed the following from the ‘Route’, tag name ‘Route’, picklist: 
• PB  Piggy Back 
Cardiac Arrest 
• Changed section name in data dictionary to Arrest Details to match 
wrapper name  
• Removed the following from the ‘Arrest Details/Reason for Withholding 
Resuscitation’, tag name ‘ArrestDetailsReasonForWithholding’, picklist: 
• PU  Pulses with CPR by EMS 
• AS  Asystole 
Advanced Life Support Continuation Form 
• Changed section name in data dictionary to Advanced Life Support to 
match wrapper name 
• Changed wrapper name from ALSAirway to AdvancedLifeSupport 
 
Endotracheal Tube/King Airway 
• Changed section name in data dictionary to Endotracheal Tube/King 
Airway to match wrapper name 
• Changed wrapper name from EndotrachealTubeAttempts to 
EndotrachealTubeKingAirway and kept the following fields under this 
wrapper: 
• ‘Endotracheal Tube Paramedic Number’, tag name ‘TMNumber’ 
• ‘Endotracheal Tube Success’, tag name ‘Success’ 
• ‘King Airway Paramedic Number’, tag name ‘TMNumber’ 
• ‘King Airway Success’, tag name ‘Success’ 

28 
 
• ‘ETT/King Airway Insertion Start Time’, tag name 
‘TimeETorKingStarted’ 
• ‘ETT/King Airway Insertion Success Time’, tag name 
‘TimeETorKingSuccess’ 
• ‘Endotracheal/King Tube Size’, tag name ‘ETTubeSize’ 
• ‘Difficult Airway Techniques’, tag name DifficultAirwayTechniques’ 
• ‘Tube Placement Mark at Teeth’, tag name 
‘TubePlacementMarkAtTeeth’ 
• ‘Complication(s) During Tube Placement’, tag name 
‘ComplicationsDuringTubePlacement’ 
• Changed tag name for ‘Endotracheal/King Tube Size’, tag name 
‘ETTubeSize’, to ‘ETKingTubeSize’ 
• Changed field values for ‘Complication(s) During Tube Placement’, tag 
name ‘ComplicationsDuringTubePlacement’ to the following: 
• A  Anatomy 
• C  Clenching 
• E  Emesis 
• G  Gastric Distention 
• N  None 
• R  Gag Reflex 
• O  Other 
Initial Airway Placement Confirmation 
• Added this wrapper after ‘Complication(s) During Tube Placement’, tag 
name ‘ComplicationsDuringTubePlacement’, and placed the following 
fields under this wrapper: 
• ‘Init. Adv. Airway Confirmation Technique’, tag name 
‘InitialPlacementConfirmation’ 
• ‘Capnography Measurement’, tag name 
‘CapnographyMeasurement’ 
• ‘EtCO
2
 Detector Colorimetric’, tag name 
‘ETCO2DetectorColormetric’ 
Ongoing Advanced Airway Placement Confirmation 
• Changed section name in data dictionary to Ongoing Placement 
Confirmation to match wrapper name 
• Changed the name of the wrapper from AirwayPlacementVerification to 
OngoingPlacementConfirmation 
• Removed the following fields: 
• ‘Time Care Transferred’, tag name ‘Time’ 
• ‘CO2’, tag name ‘TransferofCareCO2’ 
• ‘O2 Sat’, tag name ‘TransferofCareO2Sat’ 
Physician Verification of Tube Placement 
• Changed section name in data dictionary to Verification of Advance 
Airway to match wrapper name 
• Changed the name of the wrapper from 
PhysicianVerificationOfTubePlacement to VerificationAdvanceAirway 
01/01/2019  Patient Assessment 
• Added the following to the ‘Gender’, tag name ‘Gender’ picklist: 
• N  Nonbinary 
12/20/2018  Validator Logic Rules 

29 
 
• Revised logic rule that when Complaint= ”NA”, MechanismOfInjury must 
have a value and any value of ProviderImpression is acceptable.  All 
other trauma values for Complaint must still have a MechanismOfInjury 
and ProviderImpression= “CABT”, “CAPT”, “TRMA”, or “BURN” 
• Revised logic rule that when RunType= “C” or “N”, the only acceptable 
value for Complaint, ProviderImpression, and Base is ‘Not Applicable’ 
(BIU=1) 
10/18/2018  Validator Logic Rules 
• Added logic rules: 
• Report error if DateofBirth is after IncidentDate 
• Report error for blank/null values or value= ”OT” in first copy of 
Provider 
• Report error for duplicate copies of the same ProviderImpression  
• Report error for duplicate copies of the same MechanismOfInjury 
• Report error if MechanismOfInjury only has values=”AC”, “SC”, or 
any combination of the two only 
• Report error if ProviderImpression has a value= “CABT”, “CAPT”, 
“TRMA”, or “BURN” and Complaint does not have a trauma value  
• Report error if Complaint has a trauma value and 
ProviderImpression does not have a value= “CABT”, “CAPT”, 
“TRMA”, or “BURN” 
• Report error if a negative value is received for the following fields: 
• IncidentNumber 
• JurisdictionalStation 
• Unit 
• IncidentStreetNumber 
• PatientStreetNumber 
• IncidentZipcode 
• PatientZipcode 
• TeamMemberID 
• IncidentAptNumber 
• PatientAptNumber 
• Age 
• Weight 
• WksIUP 
• GCSTotal 
• TotalGCSUponTransfer 
• SBP 
• DBP 
• Pulse 
• RespRate 
• O2Sat 
• CO2 
• ArresttoCPR 
• TotalIVfluidsReceived 
• IVGauge 
• IOGauge 
• TranscutaneousCurrent 
• TranscutaneousRate 

30 
 
• TMNumber 
• TubePlacementMarkAtTeeth 
• CapnographyMeasurement 
• Report error if the following values are received for 
IncidentSceneGPSLocation: 
• Positive longitude 
• Negative latitude 
• Longitude=0 
• Latitude=0 
• Single digit for longitude or latitude  
Incident Information 
• Added the following to the ‘Run Type’, tag name ‘RunType’, picklist: 
• M   Mutual Aid 
• Removed the following from the ‘City’, tag name ‘IncidentCityCode’, 
picklist: 
• LG  Lake Hughes 
Patient Assessment 
• Added the following from the ‘Complaint’, tag name ‘Complaint’, picklist: 
• CB  Critical Burn 
• Moved ‘Suspected Drugs?’, tag name ‘DrugsSuspected’ from Special 
Circumstances and placed after ‘Allergic to ASA?’, tag name ‘AllergicASA’ 
field 
• Added ‘If Yes’, tag name ‘IfYes’, field after ‘DrugsSuspected’ field 
Field Values 
• AMP Amphetamines 
• HER Heroin 
• COC Cocaine 
• THC Cannabis 
• OOP Other Opioid 
• Added ‘Route’, tag name ‘Route’, field after ‘IfYes’, tag name ‘IfYes’, field 
Field Values 
• INJ Injected 
• ING Ingested 
• INH Inhaled 
• OTH Other 
Therapy Details 
• Removed the following from the ‘Care Provided by PD’, tag name 
‘CareByPD’, picklist: 
• OT Other 
Transport 
• Added the following to the ‘Base’, tag name ‘Base’, picklist: 
• MDS Medical Director/EMS Fellow on Scene 
• MTP Medical Treatment Protocol 
• Updated the long text of the following in the ‘Base’, tag name ‘Base’, and 
‘Rec Fac’, tag name ‘ReceivingFacility’, picklists: 
• CAL Dignity Health-California Hospital Medical Center 
• GWT Adventist Health-Glendale 
• NRH Dignity Health-Northridge Hospital Medical Center’ 
• SMM Dignity Health-Saint Mary Medical Center 

31 
 
• Updated the long text of the following in the ‘Rec Fac’, tag name 
‘ReceivingFacility’ picklist: 
• GMH Dignity Health-Glendale Memorial Hospital and Health 
Center 
• WMH Adventist Health-White Memorial 
• Added ‘Pre-Notification?’, tag name ‘PreNotification’, field after the 
‘Receiving Facility’, tag name ‘ReceivingFacility’ field 
Field Values 
• Y  Yes 
• N  No 
Patient Information 
• Removed the following from the ‘City’, tag name ‘PatientCityCode’, 
picklist: 
• LG  Lake Hughes 
Endotracheal Tube/King Airway 
• Removed the following from the ‘Difficult Airway Techniques’, tag name 
‘DifficultAirwayTechniques’, picklist: 
• CP  Cricoid Pressure 
05/02/2018  Transport 
• Added the following to the ‘Protocol’, tag name ‘Protocol’, picklist: 
1201 Assessment 1202-P General Medical (Pediatric) 
1203 Diabetic Emergencies 1203-P Diabetic Emergencies (Pediatric) 
1204 Fever/Sepsis 1204-P Fever/Sepsis (Pediatric) 
1205 GI/GU Emergencies 1205-P GI/GU Emergencies (Pediatric) 
1206 Medical Device Malfunction 1206-P Medical Device Malfunction (Pediatric) 
1207 Shock/Hypotension 1207-P Shock/Hypotension (Pediatric) 
1208 Agitated Delirium 1208-P Agitated Delirium (Pediatric) 
1209 Behavioral/Psychiatric Crisis 1210-P Cardiac Arrest (Pediatric) 
1211 Cardiac Chest Pain 1212-P Cardiac Dysrhythmia-Bradycardia (Pediatric) 
1213 Cardiac Dysrhythmia-Tachycardia  1213-P Cardiac Dysrhythmia-Tachycardia (Pediatric) 
1214 Pulmonary Edema/CHF 1215-P Childbirth (Mother) (Pediatric) 
1215 Childbirth (Mother) 1216-P Newborn/Neonatal Resuscitation (Pediatric) 
1217 Pregnancy Complication 1217-P Pregnancy Complication (Pediatric) 
1218 Pregnancy/Labor 1218-P Pregnancy/Labor (Pediatric) 
1219 Allergy 1219-P Allergy (Pediatric) 
1220 Burns 1220-P Burns (Pediatric) 
1221 Electrocution 1221-P Electrocution (Pediatric) 
1222 Hyperthermia (Environmental) 1222-P Hyperthermia (Environmental) (Pediatric) 
1224 Stings/Venomous Bites 1223-P Hypothermia/Cold Injury (Pediatric) 
1225 Submersion 1224-P Stings/Venomous Bites (Pediatric) 
1226 ENT/Dental Emergencies 1225-P Submersion (Pediatric) 
1228 Eye Problem 1226-P ENT/Dental Emergencies (Pediatric) 
1229 ALOC 1228-P Eye Problem (Pediatric) 
1230 Dizziness/Vertigo 1229-P ALOC (Pediatric) 
1231 Seizure 1230-P Dizziness/Vertigo (Pediatric) 
1232 Stroke/CVA/TIA 1231-P Seizure (Pediatric) 
1233 Syncope/Near Syncope 1232-P Stroke/CVA/TIA (Pediatric) 
1234 Airway Obstruction 1233-P Syncope/Near Syncope (Pediatric) 
1236 Inhalation Injury 1234-P Airway Obstruction (Pediatric) 
1237 Respiratory Distress 1235-P BRUE (Pediatric) 
1238 Carbon Monoxide Exposure 1236-P Inhalation Injury (Pediatric) 
1239 Dystonic Reaction 1237-P Respiratory Distress (Pediatric) 
1240 HazMat 1238-P Carbon Monoxide Exposure (Pediatric) 
  1239-P Dystonic Reaction (Pediatric) 
  1240-P HazMat (Pediatric) 
  1241-P Overdose/Poisoning/Ingestion (Pediatric) 
  1242-P Crush Injury/Syndrome (Pediatric) 

32 
 
  1243-P Traumatic Arrest (Pediatric) 
  1244-P Traumatic Injury (Pediatric) 
 
• Updated the long text of the following in the ‘Protocol’, tag name ‘Protocol’, 
picklist: 
• 1202 General Medical 
• 1212 Cardiac Dysrhythmia-Bradycardia 
• 1223 Hypothermia/Cold Injury 
• 1241 Overdose/Poisoning/Ingestion 
• 1242 Crush Injury/Syndrome 
• 1243 Traumatic Arrest 
• 1244 Traumatic Injury 
04/06/2018  Patient Assessment 
• Updated the long text of the following in the ‘Impression’, tag name 
‘ProviderImpression’, picklist: 
• SHOK  Shock 
• Added the following to the ‘Impression’, tag name ‘ProviderImpression’, 
picklist: 
• HOTN  Hypotension 
05/04/2017  Data Submission Details 
• Removed Avail Date, tag name AvailableDate, and Avail Time, tag name 
AvailableTime as a non-nullable field in the Incident Information section 
Validator Logic Rules 
• Revised logic rule for Complaint and ProviderImpression fields to 
exclude RunType= “C” or “N” 
• Revised logic rule that when RunType= “C” or “N”, the only acceptable 
value for Complaint and ProviderImpression is ‘Not Applicable’ (BIU=1) 
 
*Archived Change Log Entries prior to April 2017* 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

33 
 
TABLE OF CONTENTS 
INSTRUCTIONS .................................................................................................................................................. 38 
DATA SUBMISSION DETAILS ............................................................................................................................ 39 
VALIDATOR LOGIC RULES ................................................................................................................................ 40 
COMMON NULL VALUES ................................................................................................................................... 43 
INCIDENT INFORMATION ...................................................................................................................................... 44 
SEQUENCE NUMBER ........................................................................................................................................ 45 
ORIG. SEQ. # ....................................................................................................................................................... 46 
DATE.................................................................................................................................................................... 47 
INC # .................................................................................................................................................................... 48 
LOCATION CODE ............................................................................................................................................... 49 
PD ON SCENE? ................................................................................................................................................... 50 
PD ........................................................................................................................................................................ 51 
PD UNIT # ............................................................................................................................................................ 52 
PD ACTIONS ....................................................................................................................................................... 53 
MCI?..................................................................................................................................................................... 54 
RUN TYPE ........................................................................................................................................................... 55 
STREET NUMBER .............................................................................................................................................. 56 
STREET ............................................................................................................................................................... 57 
APT # ................................................................................................................................................................... 58 
CITY ..................................................................................................................................................................... 59 
INCIDENT ZIP CODE .......................................................................................................................................... 62 
SCENE GPS LOCATION ..................................................................................................................................... 63 
PATIENT INFORMATION ....................................................................................................................................... 64 
LAST NAME ......................................................................................................................................................... 65 
FIRST NAME ....................................................................................................................................................... 66 
MI ......................................................................................................................................................................... 67 
DOB ..................................................................................................................................................................... 68 
PHONE ................................................................................................................................................................ 69 
STREET NUMBER .............................................................................................................................................. 70 
STREET NAME .................................................................................................................................................... 71 
APT # ................................................................................................................................................................... 72 
CITY ..................................................................................................................................................................... 73 
PATIENT STATE ................................................................................................................................................. 76 
PATIENT ZIP CODE ............................................................................................................................................ 78 
HOSP. VISIT # ..................................................................................................................................................... 79 
TEAM MEMBERS .................................................................................................................................................... 80 
TEAM MEMBER ID .............................................................................................................................................. 81 
TRANSPORT INFORMATION ................................................................................................................................ 82 
PROV ................................................................................................................................................................... 83 
A/B/H .................................................................................................................................................................... 85 
UNIT ..................................................................................................................................................................... 86 
DISP DATE .......................................................................................................................................................... 87 
DISP ..................................................................................................................................................................... 88 
ARRIVAL DATE ................................................................................................................................................... 89 
ARRIVAL .............................................................................................................................................................. 90 
DATE AT PATIENT .............................................................................................................................................. 91 
TIME AT PATIENT ............................................................................................................................................... 92 
LEFT DATE .......................................................................................................................................................... 93 
LEFT .................................................................................................................................................................... 94 
AT FAC DATE ...................................................................................................................................................... 95 
AT FAC ................................................................................................................................................................ 96 
FAC EQUIP DATE ............................................................................................................................................... 97 
FAC EQUIP TIME ................................................................................................................................................ 98 
AVAIL DATE ........................................................................................................................................................ 99 
AVAIL ................................................................................................................................................................. 100 
TRANSPORTED BY .......................................................................................................................................... 101 

34 
 
MED. CTRL. ....................................................................................................................................................... 102 
PROTOCOL ....................................................................................................................................................... 103 
REC FAC ........................................................................................................................................................... 105 
ADVANCED PROVIDER COMMENT ................................................................................................................ 108 
NOTIFICATION? ................................................................................................................................................ 109 
VIA ..................................................................................................................................................................... 110 
AMA? ................................................................................................................................................................. 111 
ASSESS, TREAT, & RELEASE? ....................................................................................................................... 112 
ASSESS, TREAT, & TRANSFER? .................................................................................................................... 113 
TREATMENT IN PLACE? .................................................................................................................................. 114 
ADVANCED PROVIDER LEVEL? ..................................................................................................................... 115 
TRANS TO ......................................................................................................................................................... 116 
REASON ............................................................................................................................................................ 117 
CODE 3 .............................................................................................................................................................. 118 
GCS ........................................................................................................................................................................ 119 
GLASGOW COMA SCALE- TIME ..................................................................................................................... 120 
EYE .................................................................................................................................................................... 121 
VERBAL ............................................................................................................................................................. 122 
MOTOR .............................................................................................................................................................. 123 
GCS TOTAL ....................................................................................................................................................... 124 
NORMAL FOR PATIENT/AGE .......................................................................................................................... 125 
STROKE ................................................................................................................................................................ 126 
MLAPSS ............................................................................................................................................................. 127 
LAST KNOWN WELL DATE .............................................................................................................................. 128 
LAST KNOWN WELL TIME ............................................................................................................................... 129 
LAST KNOW WELL DATE AND TIME UNKNOWN ........................................................................................... 130 
FACIAL DROOP ................................................................................................................................................ 131 
ARM DRIFT ........................................................................................................................................................ 132 
GRIP STRENGTH .............................................................................................................................................. 133 
TOTAL SCORE .................................................................................................................................................. 134 
MEDICATION/RHYTHM ........................................................................................................................................ 135 
MEDS/RHYTHM TIME ....................................................................................................................................... 136 
TM # ................................................................................................................................................................... 137 
RHYTHM ............................................................................................................................................................ 138 
MEDS ................................................................................................................................................................. 139 
DOSE ................................................................................................................................................................. 140 
DOSE UNITS ..................................................................................................................................................... 141 
ROUTE .............................................................................................................................................................. 142 
RESULT ............................................................................................................................................................. 143 
DEFIBRILLATION ................................................................................................................................................. 144 
DEFIB TIME ....................................................................................................................................................... 145 
TM # ................................................................................................................................................................... 146 
DEFIB................................................................................................................................................................. 147 
JOULES ............................................................................................................................................................. 148 
RESULT ............................................................................................................................................................. 149 
PATIENT ASSESSMENT ...................................................................................................................................... 150 
PATIENT NUMBER ........................................................................................................................................... 151 
TOTAL PATIENT NUMBER ............................................................................................................................... 152 
NUMBER OF PATIENTS TRANSPORTED ....................................................................................................... 153 
AGE.................................................................................................................................................................... 154 
UNITS OF AGE .................................................................................................................................................. 155 
GENDER ............................................................................................................................................................ 156 
WT...................................................................................................................................................................... 157 
UNITS OF WEIGHT ........................................................................................................................................... 158 
PEDS COLOR CODE ........................................................................................................................................ 159 
DISTRESS LEVEL ............................................................................................................................................. 160 

35 
 
COMPLAINT ...................................................................................................................................................... 161 
MECHANISM OF INJURY ................................................................................................................................. 163 
TIME EXTRICATED ........................................................................................................................................... 164 
IMPRESSION .................................................................................................................................................... 165 
ALLERGIC TO ASA? ......................................................................................................................................... 167 
SUSPECTED ETOH? ........................................................................................................................................ 168 
SUSPECTED DRUGS? ..................................................................................................................................... 169 
IF YES: ............................................................................................................................................................... 170 
ROUTE .............................................................................................................................................................. 171 
PHYSICAL SIGNS ................................................................................................................................................. 172 
PUPILS .............................................................................................................................................................. 173 
RESP ................................................................................................................................................................. 174 
TIDAL VOLUME ................................................................................................................................................. 175 
SKIN ................................................................................................................................................................... 176 
CAP REFILL ....................................................................................................................................................... 177 
FIRST 12 LEAD TIME ........................................................................................................................................ 178 
SOFTWARE INTERPRETATION ...................................................................................................................... 179 
EMS INTERPRETATION ................................................................................................................................... 180 
ARTIFACT ......................................................................................................................................................... 181 
WAVY BASELINE .............................................................................................................................................. 182 
PACED RHYTHM .............................................................................................................................................. 183 
FIRST 12-LEAD TRANSMITTED? ..................................................................................................................... 184 
SECOND 12 LEAD TIME ................................................................................................................................... 185 
SOFTWARE INTERPRETATION ...................................................................................................................... 186 
EMS INTERPRETATION ................................................................................................................................... 187 
ARTIFACT ......................................................................................................................................................... 188 
WAVY BASELINE .............................................................................................................................................. 189 
PACED RHYTHM .............................................................................................................................................. 190 
SECOND 12-LEAD TRANSMITTED? ................................................................................................................ 191 
SPECIAL CIRCUMSTANCES ............................................................................................................................... 192 
DNR/AHCD/POLST? ......................................................................................................................................... 193 
SUSPECTED ABUSE/NEGLECT? .................................................................................................................... 194 
POISON CONTROL CONTACTED? ................................................................................................................. 195 
DPH NOTIFIED? ................................................................................................................................................ 196 
CONTACTED MED. CIRC. SUPPORT? ............................................................................................................ 197 
≥ 20 WKS IUP? .................................................................................................................................................. 198 
_ WKS ................................................................................................................................................................ 199 
BARRIERS TO PATIENT CARE ........................................................................................................................ 200 
VITAL SIGNS ......................................................................................................................................................... 201 
VITAL SIGN TIME .............................................................................................................................................. 202 
TM # ................................................................................................................................................................... 203 
SYSTOLIC BLOOD PRESSURE ....................................................................................................................... 204 
DIASTOLIC BLOOD PRESSURE ...................................................................................................................... 205 
PULSE ............................................................................................................................................................... 206 
RESPIRATORY RATE ....................................................................................................................................... 207 
O2 SAT .............................................................................................................................................................. 208 
PAIN ................................................................................................................................................................... 209 
TEMP ................................................................................................................................................................. 210 
TEMP UNIT ........................................................................................................................................................ 211 
CO2 .................................................................................................................................................................... 212 
CARDIAC ARREST ............................................................................................................................................... 213 
DATE OF ARREST ............................................................................................................................................ 214 
TIME OF 1
ST
 ARREST ....................................................................................................................................... 215 
ARREST WITNESSED BY ................................................................................................................................ 216 
PRESUMED CARDIAC ARREST ETIOLOGY ................................................................................................... 217 
IF OTHER, PLEASE EXPLAIN .......................................................................................................................... 218 
WERE DISPATCHER CPR INSTRUCTIONS PROVIDED? .............................................................................. 219 

36 
 
RESUSCITATION ATTEMPTED BY AN ACLS PROVIDER? ............................................................................ 220 
WHO INITIATED CPR?...................................................................................................................................... 221 
ARREST TO CPR .............................................................................................................................................. 222 
TIME OF BYSTANDER CPR ............................................................................................................................. 223 
TYPE OF BYSTANDER CPR ............................................................................................................................ 224 
EMS CPR TIME ................................................................................................................................................. 225 
WAS AN AED APPLIED? ................................................................................................................................... 226 
WHO FIRST APPLIED AED? ............................................................................................................................. 227 
WHO FIRST DEFIBRILLATED THE PATIENT? ................................................................................................ 228 
TIME OF AED SHOCK ....................................................................................................................................... 229 
FIRST ARREST RHYTHM OF PATIENT ........................................................................................................... 230 
MECHANICAL CPR DEVICE USED? ................................................................................................................ 231 
IF YES, PLEASE SPECIFY ................................................................................................................................ 232 
IF OTHER, PLEASE SPECIFY .......................................................................................................................... 233 
AUTOMATED CPR FEEDBACK DEVICE USED? ............................................................................................ 234 
ITD USED? ........................................................................................................................................................ 235 
RESTORATION OF PULSE TIME ..................................................................................................................... 236 
SUSTAINED ROSC? ......................................................................................................................................... 237 
END OF EVENT ................................................................................................................................................. 238 
TIME OF 814 DEATH ......................................................................................................................................... 239 
PRONOUNCED TIME........................................................................................................................................ 240 
PRONOUNCED BY ........................................................................................................................................... 241 
REASON FOR WITHHOLDING RESUSCITATION ........................................................................................... 242 
RESUS D/C RHYTHM ....................................................................................................................................... 243 
THERAPIES ........................................................................................................................................................... 244 
THERAPIES ....................................................................................................................................................... 245 
TM # ................................................................................................................................................................... 246 
THERAPY DETAILS .............................................................................................................................................. 247 
CO2 .................................................................................................................................................................... 248 
OXYGEN (L/MIN) ............................................................................................................................................... 249 
OXYGEN VIA ..................................................................................................................................................... 250 
BLOOD GLUCOSE RESULT ............................................................................................................................. 251 
CPAP PRESSURE ............................................................................................................................................. 252 
CPAP TIME ........................................................................................................................................................ 253 
IV GAUGE .......................................................................................................................................................... 254 
IO LENGTH ........................................................................................................................................................ 255 
IO SITE .............................................................................................................................................................. 256 
TOTAL IV/IO FLUIDS RECEIVED ..................................................................................................................... 257 
NEEDLE THORACOSTOMY SITE .................................................................................................................... 258 
TRANSCUTANEOUS PACING MA .................................................................................................................... 259 
TRANSCUTANEOUS PACING BPM ................................................................................................................. 260 
TRANSCUTANEOUS PACING TIME ................................................................................................................ 261 
TRANSFER OF CARE .......................................................................................................................................... 262 
CARE TRANSFERRED TO ............................................................................................................................... 263 
TRANSFER VS .................................................................................................................................................. 264 
TM # ................................................................................................................................................................... 265 
SBP .................................................................................................................................................................... 266 
DBP .................................................................................................................................................................... 267 
PULSE ............................................................................................................................................................... 268 
RR ...................................................................................................................................................................... 269 
O2 SAT .............................................................................................................................................................. 270 
CO2 .................................................................................................................................................................... 271 
RHYTHM ............................................................................................................................................................ 272 
CPAP PRESSURE ............................................................................................................................................. 273 
GCS E ................................................................................................................................................................ 274 
GCS V ................................................................................................................................................................ 275 
GCS M ............................................................................................................................................................... 276 
GCS TOTAL ....................................................................................................................................................... 277 

37 
 
ADVANCED AIRWAY ........................................................................................................................................... 278 
BMV USED? ...................................................................................................................................................... 279 
BMV SUCCESSFUL? ........................................................................................................................................ 280 
BMV TM # .......................................................................................................................................................... 281 
REASON FOR ADVANCED AIRWAY ............................................................................................................... 282 
ADVANCED AIRWAY DEVICE .......................................................................................................................... 283 
ADVANCED AIRWAY DEVICE PM # ................................................................................................................. 284 
TIME OF ADVANCED AIRWAY ATTEMPT ....................................................................................................... 285 
SUCCESSFUL PLACEMENT? .......................................................................................................................... 286 
TIME OF SUCCESSFUL PLACEMENT ............................................................................................................. 287 
ADVANCED AIRWAY DEVICE SIZE ................................................................................................................. 288 
TUBE PLACEMENT MARK AT TEETH ............................................................................................................. 289 
DIFFICULT AIRWAY TECHNIQUES ................................................................................................................. 290 
ADVANCED AIRWAY DEVICE PLACEMENT CONFIRMED WITH CAPNOGRAPHY? ................................... 291 
CAPNOGRAPHY MEASUREMENT .................................................................................................................. 292 
SPONTANEOUS RESPIRATIONS .................................................................................................................... 293 
IF PLACEMENT NOT CONFIRMED WITH CAPNOGRAPHY, WHY? .............................................................. 294 
IF REASON=OTHER, EXPLAIN ........................................................................................................................ 295 
CONFIRMATION WITH BACKUP DEVICE? ..................................................................................................... 296 
ETCO
2
 DETECTOR COLORIMETRIC .............................................................................................................. 297 
RESCUE DEVICE? ............................................................................................................................................ 298 
RESCUE DEVICE PM # ..................................................................................................................................... 299 
REASON(S) ADVANCED AIRWAY DEVICE UNABLE ..................................................................................... 300 
COMPLICATION(S) DURING TUBE PLACEMENT ............................................................................................. 301 
REGURGITATION/EMESIS? ............................................................................................................................ 302 
BLEEDING/TRAUMA?....................................................................................................................................... 303 
BRADYCARDIA? ............................................................................................................................................... 304 
HYPOXIA? ......................................................................................................................................................... 305 
RIGHT MAINSTEM PLACEMENT? ................................................................................................................... 306 
INITIAL ADVANCED AIRWAY PLACEMENT CONFIRMATION ......................................................................... 307 
BILATERAL BREATH SOUNDS? ...................................................................................................................... 308 
BILATERAL CHEST RISE? ............................................................................................................................... 309 
ABSENT GASTRIC SOUNDS? ......................................................................................................................... 310 
ONGOING VERIFICATION TIME ...................................................................................................................... 311 
DISLODGEMENT? ............................................................................................................................................ 312 
IF DISLODGEMENT AFTER PLACEMENT, SUCCESSFUL REPLACEMENT? .............................................. 313 
VERIFICATION OF ADVANCED AIRWAY ........................................................................................................... 314 
VERIFICATION TECHNIQUE(S) ....................................................................................................................... 315 
PLACEMENT ..................................................................................................................................................... 316 
SIGNED VERIFICATION ................................................................................................................................... 317 

38 
 
INSTRUCTIONS 
  
Title Name of the Data Element 
 
Tag Name XSD Data Identifier   
 
Definition Description of what the data element will contain 
 
Technical Information This section should be reviewed by IT staff 
 
XSD Data Type     
Required in XSD 
Multiple Entry Configuration Accepts Null Value 
Minimum Constraint   Maximum Constraint 
 
Field Values The values or code set (variables) associated with the data element 
Additional Information Any additional information that may be needed to explain the data 
element and how it may be utilized 
Data Source Hierarchy   Description of where the data is obtained from 
Other Associated Elements   Tag names of other fields that are related to the particular data 
element 
 
 
 
 
 
 
 
 
 
 
 

39 
 
DATA SUBMISSION DETAILS 
 
The LA-EMS Data Dictionary, LA-EMS XSD, LA-EMS XSD Validator and LA-EMS Sample 
XML can be found on the Lancet website at: 
• https://lancet.brickftp.com/f/196ff7f4218a124e 
 
Format XML  
 
Version  11 
 
Volume per Submission  Maximum 5,000 patients per file 
 
Naming Convention: (2 letter Provider Code) + (4 digit year) + (2 digit month) + (2 digit day) + 
(2 digit hour) + (2 digit minute) + (2 digit second) example: AA20110907134256.  All files not 
sent in this format will not be imported and will be sent back for correction. 
 
Data Submission   Via Secure File Transfer Protocol (SFTP) - contact Chief, Data 
Management for specifics 
 
Submission Frequency   Minimum of 45 days after the month of occurrence 
 
Additional Information   
• Use the 2-letter provider code issued by the EMS Agency 
• Hour is recorded using 24-hour clock 
• Non-nullable fields in the Incident Information or Transport sections: 
 
 
Sequence Number, tag name 
SequenceNumber 
Date, tag name 
IncidentDate 
Run Type, tag name 
RunType 
City, tag name 
IncidentCityCode 
Prov, tag name 
Provider 
Disp Date, tag name 
DispatchDate 
Disp, tag name DispatchTime Via, tag name Via MCI?, tag name MCI 
Team Member ID, tag name 
TeamMemberID 
  
 
  
 
 
 
 

40 
 
VALIDATOR LOGIC RULES 
 
Version 11.0.128 
 
• Check for MOD-9 validation if SequenceNumber is eight (8) characters in length 
 
• Report Error for Blank/Null Values in LocationCode and PDOnScene if any copy of 
ProviderImpression has a value = “AGDE”, “BURN”, “CABT”, “CANT”, “CAPT”, 
“DCON”, “DEAD”, “DRWN”, “ELCT”, “ODPO”, “PSYCH”, or “TRMA” 
 
• For Route = “LB”, the only acceptable value for Meds is “NAR” 
 
• Report the "Invalid Date" Error if year of DateOfBirth is less than 1910 
 
• Report Error if DateofBirth is after IncidentDate 
 
• Report Error if IncidentDate is 5 years prior to the Validation Date  
 
• Report Error for Blanks/Null Values in LastName, FirstName, Age, AgeUnit, Gender, 
Complaint, ProviderImpression, MedCtrl, Protocol, and TeamMemberID if 
RunType = “R” 
 
• Report Error for Blank/Null values or value = “OT” in first copy of Provider 
 
• Report Error for Blank/Null values in the first copy of TeamMemberID 
 
• Report Error if Via = “N” and ReceivingFacility and/or TransportedTo have valid 
values 
 
• Check for Blank/Null Values in ReceivingFacility and TransportedTo and report error 
if Via = 'A', 'B' or 'H'  
 
• For RunType = “C”, “E”, or “N” or Via = “A”, “B”, or “H”, the only acceptable value for 
AMA, AssessTreatRelease, AssessTreatTransfer, and TreatInPlace is ‘Not 
Applicable’ (BIU=1) 
 
• Report Error for Blank/Null Values in AdvancedProviderLevel if TreatInPlace has a 
value= “”Y” 
 
• Report Error for Blank/Null Values in AMA, AssessTreatRelease, 
AssessTreatTransfer, and TreatInPlace if Via = “N” except when RunType = “C”, “E”, 
or “N” 
 
• If Via = “N” except when RunType = “C”, “E”, or “N”, only one of the values for AMA, 
AssessTreatRelease, AssessTreatTransfer, and TreatInPlace can be “Y” and the 
only acceptable value for the remaining fields is “N” 
 
• Report Error for Blank/Null values in the first copy of Complaint except when 
RunType= “C”, “E”, or “N” 

41 
 
 
• For RunType = “C”, “E”, or “N”, the only acceptable value for Age, AgeUnit, Gender, 
Complaint, ProviderImpression, MedCtrl, Notification, and Protocol
  
is ‘Not 
Applicable’ (BIU=1) 
 
• Report Error for Blank/Null values in the first copy of ProviderImpression except when 
RunType = “C”, “E”, or “N” 
 
• Report Error for "OT" in the first copy of Complaint with valid values in other copies 
 
• Report Error for duplicate copies of same Complaint value 
 
• Report Error for duplicate copies of same ProviderImpression value 
 
• Report Error for duplicate copies of same MechanismOfInjury value 
 
• Report Error if MechanismOfInjury only has values =”AC”, “SC”, or any combination of 
the two only 
 
• Report Error for Blank/Null Values in MechanismOfInjury if a Trauma Complaint is 
present under Complaint 
 
• Report Error if MechanismOfInjury has a valid non-null value and no Trauma 
Complaint is present under Complaint 
 
• Report Error if only copy of Complaint = “OT” when a valid non-null value is present 
under MechanismOfInjury 
 
• Report Error if ProviderImpression has a value = “CABT”, “CAPT”, “TRMA”, “BURN”, 
or “ELCT” and Complaint does not have a trauma value 
 
• Report Error if Complaint has a trauma value, excluding value = “NA”, and 
ProviderImpression does not have a value= “CABT”, “CAPT”, “TRMA”, “BURN”, or 
“ELCT” 
 
• Report Error for Blank/Null Values in DPHNotified if ProviderImpression = “DRWN” 
 
• For Meds = “PAS”, “PNA”, or “PEP”, the only acceptable value for Route is “TA” 
 
• For Route = “TA”, the only acceptable value for Meds is “PAS”, “PNA”, or “PEP” 
 
• Report Error for Blank/Null Values in WhoFirstAppliedAED if AEDApplied = “YWD” or 
“YWO” 
 
• Report Error for Blank/Null Values in FirstArrestRhythm if ProviderImpression= 
“CANT”, “CABT”, or “CAPT” except when ProviderImpression= “CABT” or “CAPT” and 
ReasonForWithholding has a non-null value 
 
• Report Error if O2Sat or TransferofCareO2Sat value received is negative or greater 
than 100.  Value must be between 0-100. 

42 
 
 
• Multi-valued fields:   If there are values in the first set of data, then no nulls are needed 
in the other copies 
 
• Report Error if a negative value is received for the following fields: 
• IncidentNumber 
• Unit 
• IncidentStreetNumber 
• PatientStreetNumber 
• IncidentZipcode 
• PatientZipcode 
• TeamMemberID 
• IncidentAptNumber 
• PatientAptNumber 
• PatientNumber 
• TotalPatients 
• NumberOfPatientsTransported 
• Age 
• Weight 
• WksIUP 
• GCSTotal 
• TotalGCSUponTransfer 
• SBP 
• DBP 
• Pulse 
• RespRate 
• O2Sat 
• Temp 
• CO2 
• ArresttoCPR 
• TotalIVIOFluidsReceived 
• TranscutaneousCurrent 
• TranscutaneousRate 
• TMNumber 
• AirwayDeviceSize 
• TubePlacementMarkAtTeeth 
• CapnographyMeasurement 
• Joules 
 
• Report Error if the following values are received for IncidentSceneGPSLocation: 
• Negative latitude 
• Positive longitude 
• Latitude=0 or other single digit 
• Longitude=0 or other single digit 

43 
 
COMMON NULL VALUES 
 
Definition 
These values are to be used with each of the Los Angeles Emergency Medical Services 
Data Elements described in this document which have been defined to accept the Null 
Values.  
  
Field Values 
• Not Applicable:  BIU = 1 
• Not Documented: BIU = 2 
 
Additional Information 
• For any collection of data to be of value and reliably represent what was intended, a 
strong commitment must be made to ensure the correct documentation of incomplete 
data.  When data elements associated with the LA-EMS Registry are to be electronically 
stored in a database or moved from one database to another using XML, the indicated 
null values should be applied. 
• Not Applicable: This null value code applies if, at the time of patient care 
documentation, the information requested was “Not Applicable” to the patient or the 
patient care event.  For example, Pediatric Weight Color Code would be “Not 
Applicable” if a patient was greater than fourteen years of age. 
• Not Documented: This null value applies if, at the time of patient care documentation, 
information was “Not Known” (to the patient, family, health care provider) or no value for 
the element was recorded for the patient.  This documents that there was an attempt to 
obtain the information but it was unknown by all parties or the information was missing 
at the time of documentation.  For example, Not Documented should also be coded 
when documentation was expected, but none was provided (i.e., no distress level 
recorded). 
 
  

44 
 
 
 
 
 
 
 
 
INCIDENT INFORMATION 
 
 
  

45 
 
SEQUENCE NUMBER 
 
Tag Name   
• SequenceNumber 
 
Definition 
• Unique, alphanumeric EMS record number found pre-printed at the top right corner of 
paper EMS Report Form hard copies or electronically assigned to electronic patient 
care records (ePCRs) by the EMS provider’s electronic capture device 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   No 
Minimum 
Constraint 
8 Maximum 
Constraint 
12 
 
Field Values 
• Providers utilizing field electronic data capture devices will have a 12 alpha-numeric 
value, always beginning with the two-letter provider code followed by the two-digit year 
• Providers utilizing EMS Report Form hard copies and submitting data electronically will 
have an 8 alpha-numeric value divisible by 9 
 
Additional Information 
• REQUIRED for all records 
• This is a unique number to the EMS Agency and must be provided to create a unique 
record ID within the EMS Database 
 
Data Source Hierarchy 
• Auto-generated by the EMS provider’s electronic capture device  
• EMS Report Form 
 
 
  

46 
 
ORIG. SEQ. # 
 
Tag Name   
• OriginalSequenceNumber 
 
Definition 
• Unique, alphanumeric EMS record number found pre-printed at the top right corner of 
paper EMS Report Form hard copies or electronically assigned to ePCRs by the EMS 
provider’s electronic capture device utilized by the originating provider 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null values 
Minimum 
Constraint 
8 Maximum 
Constraint 
12 
 
Field Values 
• Providers utilizing field electronic data capture devices will have a 12 alpha-numeric 
value, always beginning with the two-letter provider code followed by the two-digit year 
• Providers utilizing EMS Report Form hard copies and submitting data electronically will 
have an 8 alpha-numeric value divisible by 9  
 
Additional Information 
• Utilized when there is more than one provider and more than one EMS record is started.  
 
Data Source Hierarchy 
• Auto-generated by the EMS provider’s electronic capture device  
• EMS Report Form 
  

47 
 
DATE  
 
Tag Name   
• IncidentDate 
  
Definition 
Date provider was notified of the incident 
  
Technical Information 
XSD Data Type   xs:date     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   No 
Minimum Value   07/01/2016 Maximum Value Current Date 
 
Field Values 
• Collected as standard XML format YYYY-MM-DD 
 
Additional Information 
• Must be within five (5) years of date record validated 
 
Data Source Hierarchy 
• 9-1-1 or Dispatch Center 
• EMS Provider 
 

48 
 
INC #  
 
Tag Name   
• IncidentNumber 
 
Definition 
The incident number assigned by the 911 or Dispatch Center 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 15 
 
Field Values 
• Free text  
 
Additional Information 
• Positive numeric values only 
 
Data Source Hierarchy 
• 9-1-1 or Dispatch Center 
 
Other Associated Elements 
• Common Null Values 
 
 
 
  

49 
 
LOCATION CODE 
 
Tag Name   
• LocationCode 
 
Definition 
The two-letter code indicating where the incident occurred 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
2 Maximum Constraint 2 
 
Field Values 
AI Airport/Transport Center ON Ocean 
AM Ambulance PA Park 
BA Beach PL Parking Lot 
CL Cliff/Canyon PO Swimming Pool 
CO Private Commercial Establishment PS Psych Urgent Care 
DC Dialysis Center PV Public Venue/Event 
DO Healthcare Provider’s Office/Clinic RA Recreational Area 
FA Farm/Ranch RE Restaurant 
FR Freeway RI Residential Institution 
FS Fire Station RL Religious Building 
GY Health Club/Gym RS Retail/Store 
HO Home RT Railroad Track 
HT Hotel RV River 
IN Industrial/Construction area SB Sobering Center 
JA Jail SC School/College/University 
LA Lake ST Street/Highway 
MB Military Base UC Urgent Care 
MC Hospital/Medical Center WI Wilderness Area 
NH Nursing Home OT Other 
OF Office   
 
Data Source Hierarchy 
• 9-1-1 or Dispatch Center  
• EMS Provider 
 
Other Associated Elements 
• Common Null Values 
  

50 
 
PD ON SCENE? 
 
Tag Name   
• PDOnScene  
 
Definition 
Checkbox indicating that a law enforcement agency responded to the incident   
 
Technical Information  
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• Y  Yes 
• N  No 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• PD 
• PDUnit  
• PDActions 
• Common Null Values 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

51 
 
PD  
 
Tag Name   
• PD  
 
Definition 
Three- or four-letter code of the law enforcement agency responding to the incident 
 
Technical Information  
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
3 Maximum Constraint 4 
 
Field Values 
ALPD Alhambra PD GAPD Gardena PD MRPD Monrovia PD 
ARPD Arcadia PD GLPD Glendale PD PAPD Pasadena PD 
AZPD Azusa PD GOPD Glendora PD POLA Port of LA PD 
BEPD Bell PD HAPD Hawthorne PD POPD Pomona PD 
BGPD Bell Gardens PD HBPD Hermosa Beach PD PVPD Palos Verdes Estates PD 
BHPD Beverly Hills PD HPPD Huntington Park PD RBPD Redondo Beach PD 
BPPD Baldwin Park PD INPD Inglewood PD SAPD San Marino PD 
BUPD Burbank PD IRPD Irwindale PD SFPD San Fernando PD 
CAPD Campus PD LAAP LA Airport Police SGPD San Gabriel PD 
CCPD Culver City PD LACS LA County Sheriff SHPD Signal Hill PD 
CHP California Highway Patrol LAPD Los Angeles PD SIPD Sierra Madre PD 
CLPD Claremont PD LAPR LA City Park Ranger SMPD Santa Monica PD 
COPD Covina PD LBPD Long Beach PD SPPD South Pasadena PD 
CPD Los Angeles County PD LHPD La Habra PD STPD South Gate PD 
DFW Department of Fish and 
Wildlife 
LVPD La Verne PD TPD Torrance PD 
DOPD Downey PD MBPD Manhattan Beach PD VPD Vernon PD 
EMPD El Monte PD MOPD Montebello PD WCPD West Covina PD 
ESPD El Segundo PD MPPD Monterey Park PD WPD Whittier PD 
 
Additional Information 
• Law enforcement agencies are not considered EMS providers and therefore do not 
have a two-letter provider code.  Please do not attempt to list them as a provider. 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• PDOnScene 
• PDUnit  
• PDActions 
• Common Null Values 
 
 

52 
 
PD UNIT # 
1 
Tag Name   
• PDUnit 
     
Definition 
The unit number/designation of the law enforcement agency on scene of the incident 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 20 
 
Field Values 
• Free text 
 
Data Source Hierarchy 
• EMS Provider  
• Law Enforcement Agency 
 
Other Associated Elements 
• PDOnScene 
• PD 
• PDActions 
• Common Null Values 
 
  

53 
 
PD ACTIONS 
 
Tag Name   
• PDActions 
 
Definition 
Checkbox indicated what procedure(s) were performed on the patient by members of law 
enforcement prior to EMS arrival 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
2 Maximum 
Constraint 
2 
 
Field Values 
AE AED Placement HD Hemostatic Dressing TA CEW (e.g. Taser
®
) 
AS AED Shock NC Narcan TQ Tourniquet 
CP CPR RE Restraints   
 
Additional Information 
• Max occurrence for this field is 8 
 
Data Source Hierarchy 
• EMS Provider  
• Law Enforcement Agency 
 
Other Associated Elements 
• PDOnScene 
• PD 
• PDUnit  
• Common Null Values 
 
  

54 
 
MCI? 
1 
Tag Name   
• MCI 
     
Definition 
Field indicating whether the incident involved three or more patients 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   No 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• Y   Yes 
• N   No 
 
Data Source Hierarchy 
• EMS Provider  
 
  

55 
 
RUN TYPE 
1 
Tag Name   
• RunType 
     
Definition 
The level of service required of the EMS provider 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   No 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
R  Regular Run  N  No Contact/No Pt. 
D  Dead on Arrival  B  Public Assist 
C  CX at Scene  F  Fireline 
I   Inter-facility Transfer M  Mutual Aid 
E  Person Found/No Pt. L  Lift Assist 
 
Additional Information 
• If Run Type is R then the following data elements are REQUIRED: 
o Age 
o Age Unit 
o Gender 
o Complaint  
o Provider Impression 
o Team Member ID 
o Protocol 
o Med. Ctrl. 
o Patient Last Name 
o Patient First Name 
 
Data Source Hierarchy 
• EMS Provider  
• Auto-generated by the EMS Provider’s software 
 
Other Associated Elements 
• Age 
• AgeUnit 
• Gender 
• Complaint 
• ProviderImpression 
• TeamMemberID 
• Protocol 
• MedCtrl 
• PatientFirstName 
• PatientLastName 

56 
 
STREET NUMBER 
 
Tag Name   
• IncidentStreetNumber  
 
Definition 
The street number of the incident location 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 10 
 
Field Values 
• Free text  
 
Additional Information 
• Positive numeric values only 
 
Data Source Hierarchy 
• 9-1-1 or Dispatch Center  
 
Other Associated Elements 
• IncidentStreetName 
• IncidentAptNumber 
• IncidentCityCode 
• IncidentZipCode 
• IncidentSceneGPSLocation 
• Common Null Values 
 
 
  

57 
 
STREET  
_15 
Tag Name   
• IncidentStreetName  
 
Definition 
The name of the street where the incident occurred 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 40 
 
Field Values 
• Free text  
 
Data Source Hierarchy 
• 9-1-1 or Dispatch Center  
 
Other Associated Elements 
• IncidentStreetNumber 
• IncidentAptNumber 
• IncidentCityCode 
• IncidentZipCode 
• IncidentSceneGPSLocation 
• Common Null Values 
 
 

58 
 
APT # 
E08_15 
Tag Name   
• IncidentAptNumber  
 
Definition 
The apartment number of the incident location 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 20 
 
Field Values  
• Free text  
 
Data Source Hierarchy 
• 9-1-1 or Dispatch Center  
 
Other Associated Elements 
• IncidentStreetNumber 
• IncidentStreetName 
• IncidentCityCode 
• IncidentZipCode 
• IncidentSceneGPSLocation 
• Common Null Values 
 
 

59 
 
CITY  
 
Tag Name   
• IncidentCityCode  
 
Definition 
The city code of the incident location 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   No 
Minimum 
Constraint   
2 Maximum Constraint 2 
 
Field Values 
AA Arleta CC Culver City GH Granada Hills 
AC Acton CE Cerritos GK Glenoaks 
AD Altadena CH Chatsworth GL Glendale 
AE Arlington Heights CI Chinatown GO Gorman 
AG Agua Dulce CK Charter Oak GP Glassell Park 
AH Agoura Hills CL Claremont GR Green Valley 
AL Alhambra CM Compton GV Glenview 
AN Athens CN Canyon Country GW Glendora 
AO Avocado Heights CO Commerce HA Hawthorne 
AR Arcadia CP Canoga Park HB Hermosa Beach 
AT Artesia CR Crenshaw HC Hacienda Heights 
AV Avalon CS Castaic HE Harvard Heights 
AW Atwater Village CT Century City HG Hawaiian Gardens 
AZ Azusa  CU Cudahy HH Hidden Hills 
BA Bel Air Estates CV Covina HI Highland Park 
BC Bell Canyon CY Cypress Park HK Holly Park 
BE Bellflower DB Diamond Bar HO Hollywood 
BG Bell Gardens DO Downey HP Huntington Park 
BH Beverly Hills DS Del Sur HR Harbor City 
BK Bixby Knolls DU Duarte HV Hi Vista 
BL Bell DZ Dominguez HY Hyde Park 
BN Baldwin Hills EL East Los Angeles IG Inglewood 
BO Bouquet Canyon EM El Monte IN City of Industry 
BP Baldwin Park EN Encino IR Irwindale 
BR Bradbury EO El Sereno JH Juniper Hills 
BS Belmont Shore EP Echo Park JP Jefferson Park 
BT Bassett ER Eagle Rock KG Kagel Canyon 
BU Burbank ES El Segundo KO Koreatown 
BV Beverly Glen EV Elysian Valley LA Los Angeles 
BX Box Canyon EZ East Rancho Dominguez LB Long Beach 
BW Brentwood FA Fairmont LC La Canada Flintridge 
BY Boyle Heights FL Florence County LD Ladera Heights 
BZ Byzantine-Latino 
Quarter 
FO Fair Oaks Ranch LE Leona Valley 
CA Carson GA Gardena LF Los Feliz 
CB Calabasas GF Griffith Park LH La Habra Heights 

60 
 
 
LI Little Rock PC Pacoima SU Sunland 
LK Lakewood PD Palmdale SV Stevenson Ranch 
LL Lake Los Angeles PE  Pacific Palisades SW Sawtelle 
LM La Mirada PH Pacific Highlands SX South Central County 
LN Lawndale PI Phillips Ranch SY Sylmar 
LO Lomita PL Playa Vista SZ Studio City 
LP La Puente PM Paramount TA Tarzana 
LQ LAX PN Panorama City TC Temple City 
LR La Crescenta PO Pomona TD Tropico 
LS Los Nietos PP Palos Verdes Peninsula TE Topanga State Park 
LT Lancaster PR Pico Rivera TH Thousand Oaks 
LU Lake Hughes PS Palms TI Terminal Island 
LV La Verne PT Porter Ranch TJ Tujunga 
LW Lake View Terrace PV Palos Verdes Estates TL Toluca Lake 
LX Lennox PY Playa Del Rey TO Torrance 
LY Lynwood QH Quartz Hill  TP Topanga 
LZ Lake Elizabeth RB Redondo Beach TR Three Points 
MA Malibu RC Roosevelt Corner TT Toluca Terrace 
MB Manhattan Beach RD Rancho Dominguez UC Universal City 
MC Malibu Beach RE Rolling Hills Estates UP University Park 
MD Marina Del Rey RH Rolling Hills VA Valencia 
ME Monte Nido RK Rancho Park VC Venice 
MG Montecito Heights RM Rosemead VE Vernon 
MH Mission Hills RO Rowland Heights VG Valley Glen 
MI Mint Canyon RP Rancho Palos Verdes VI Valley Village 
ML Malibu Lake RS Reseda VL Valinda 
MM Miracle Mile RV Rampart Village VN Van Nuys 
MN Montrose RW Rosewood VV Val Verde 
MO Montebello SA Saugus VW View Park 
MP Monterey Park SB Sandberg VY Valyermo 
MR Mar Vista SC Santa Clara WA Walnut 
MS Mount Wilson SD San Dimas WB Willowbrook 
MT Montclair SE South El Monte WC West Covina 
MU Mount Olympus SF San Fernando WE West Hills 
MV Monrovia SG San Gabriel WG Wilsona Gardens 
MW  Maywood SH Signal Hill WH West Hollywood 
MY Metler Valley SI Sierra Madre WI Whittier 
NA Naples SJ Silver Lake WK Winnetka 
NE Newhall SK Sherman Oaks WL Woodland Hills 
NH North Hollywood SL Sun Valley WM Wilmington 
NN Neenach SM Santa Monica WN Windsor Hills 
NO Norwalk SN San Marino WO Westlake 
NR Northridge SO South Gate WP Walnut Park 
NT North Hills SP South Pasadena WR Westchester 
OP Ocean Park SQ Sleepy Valley WS Windsor Square 
OT Other SR San Pedro WT Watts 
PA Pasadena SS Santa Fe Springs WV Westlake Village 
PB Pearblossom ST Santa Clarita WW Westwood 
 
Data Source Hierarchy 
• 9-1-1 or Dispatch Center 
• EMS Provider 

61 
 
 
Other Associated Elements 
• IncidentStreetName 
• IncidentStreetNumber 
• IncidentAptNumber 
• IncidentZipCode 
• IncidentSceneGPSLocation 
• Common Null Values 
 

62 
 
INCIDENT ZIP CODE 
 
Tag Name   
• IncidentZipcode  
 
Definition 
The zip code of the incident location 
 
Technical Information 
XSD Data Type   xs:nonNegativeInteger  
  
Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
5 Maximum 
Constraint 
5 
 
Field Values 
• Five-digit positive numeric value 
 
Data Source Hierarchy 
• 9-1-1 or Dispatch Center  
 
Other Associated Elements 
• IncidentStreetName 
• IncidentStreetNumber 
• IncidentAptNumber 
• IncidentCityCode 
• IncidentSceneGPSLocation 
• Common Null Values 
 
 
 

63 
 
SCENE GPS LOCATION 
 
Tag Name   
• IncidentSceneGPSLocation   
 
Definition 
The global positioning system (GPS) coordinates for the incident location 
 
Technical Information 
XSD Data Type   xs:decimal     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
 
Field Values 
• Numeric values only 
 
Additional Information 
• Also known as “lat/long” 
• Collected as decimal degrees.  For example, 33.944191/ -118.080833 indicates the 
address of 10100 Pioneer Boulevard, Santa Fe Springs, CA. 
• Positive longitude, negative latitude, longitude=0, latitude=0 or other single digit latitude 
or longitude values will not be accepted 
 
Data Source Hierarchy 
• 9-1-1 or Dispatch Center  
 
Other Associated Elements 
• IncidentStreetName 
• IncidentStreetNumber 
• IncidentAptNumber 
• IncidentCityCode 
• IncidentZipCode 
• Common Null Values 
 
  

64 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
PATIENT INFORMATION 
 
 

65 
 
LAST NAME   
 
Tag Name   
• LastName 
 
Definition 
The patient’s last name 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum 
Constraint 
25 
 
Field Values 
• Free text 
 
Additional Information 
• If Run Type= “R”, then the patient’s last name must be documented 
• If patient’s last name is unknown, should be documented as “Doe” 
 
Data Source Hierarchy 
• Patient 
• Family Member 
• Caretaker 
 
Other Associated Elements 
• RunType 
• FirstName 
• Common Null Values 

66 
 
FIRST NAME   
 
Tag Name   
• FirstName 
 
Definition 
The patient’s first name 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum 
Constraint 
15 
 
Field Values 
• Free text 
 
Additional Information 
• If Run Type= “R”, then the patient’s first name must be documented 
• If patient’s first name is unknown, should be documented as “John” or “Jane” 
 
Data Source Hierarchy 
• Patient 
• Family Member 
• Caretaker 
 
Other Associated Elements 
• RunType 
• LastName 
• Common Null Values 
 

67 
 
MI   
 
Tag Name   
• MI 
 
Definition 
The first letter of the patient’s middle name 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum 
Constraint 
1 
 
Field Values 
• Free text 
 
Data Source Hierarchy 
• Patient 
• Family Member 
• Caretaker 
 
Other Associated Elements 
• LastName 
• FirstName 
• Common Null Values 
 

68 
 
DOB   
 
Tag Name   
• DateofBirth 
 
Definition 
The patient’s date of birth 
 
Technical Information 
XSD Data Type   xs:date     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
01/01/1910 Maximum 
Constraint 
Current Date 
 
Field Values 
• Collected as standard XML format YYYY-MM-DD 
 
Additional Information 
• Year must be ≥ 1910 
 
Data Source Hierarchy 
• Patient 
• Family Member 
• Caretaker 
 
Other Associated Elements 
• Common Null Values 

69 
 
PHONE   
 
Tag Name   
• PatientPhoneNumber 
 
Definition 
The patient’s primary telephone number 
 
Technical Information 
XSD Data Type   xs:string   Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
10 Maximum 
Constraint 
10 
 
Field Values 
• Free text 
 
Data Source Hierarchy 
• Patient 
• Family Member 
• Caretaker 
 
Other Associated Elements 
• Common Null Values 
 
 

70 
 
STREET NUMBER   
 
Tag Name   
• PatientStreetNumber 
 
Definition 
The street number of the patient’s primary residence 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 10 
 
Field Values 
• Free text  
 
Additional Information 
• Positive numeric values only 
 
Data Source Hierarchy 
• Patient 
• Family Member 
• Caretaker 
• EMS Provider 
• 9-1-1 or Dispatch Center 
 
Other Associated Elements 
• PatientStreetName 
• PatientAptNumber 
• PatientCityCode 
• PatientZipCode 
• PatientState 
• Common Null Values 
 
  

71 
 
STREET NAME   
 
Tag Name   
• PatientStreetName 
 
Definition 
The name of the street of the patient’s primary residence 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 40 
 
Field Values 
• Free text  
 
Data Source Hierarchy 
• Patient 
• Family Member 
• Caretaker 
• EMS Provider 
• 9-1-1 or Dispatch Center 
•  
Other Associated Elements 
• PatientStreetNumber 
• PatientAptNumber 
• PatientCityCode 
• PatientZipCode 
• PatientState 
• Common Null Values 
 
  

72 
 
APT #  
 
Tag Name  
• PatientAptNumber 
 
Definition 
The apartment number of the patient’s primary residence 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 6 
 
Field Values 
• Free text 
 
Additional Information 
• Positive numeric values only 
 
Data Source Hierarchy 
• Patient 
• Family Member 
• Caretaker 
• EMS Provider 
• 9-1-1 or Dispatch Center 
 
Other Associated Elements 
• PatientStreetName 
• PatientStreetNumber 
• PatientCityCode 
• PatientZipCode 
• PatientState 
• Common Null Values 
 

73 
 
CITY 
 
Tag Name   
• PatientCityCode 
 
Definition 
The city code of the patient’s primary residence 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
2 Maximum Constraint 2 
 
Field Values 
AA Arleta CC Culver City GH Granada Hills 
AC Acton CE Cerritos GK Glenoaks 
AD Altadena CH Chatsworth GL Glendale 
AE Arlington Heights CI Chinatown GO Gorman 
AG Agua Dulce CK Charter Oak GP Glassell Park 
AH Agoura Hills CL Claremont GR Green Valley 
AL Alhambra CM Compton GV Glenview 
AN Athens CN Canyon Country GW Glendora 
AO Avocado Heights CO Commerce HA Hawthorne 
AR Arcadia CP Canoga Park HB Hermosa Beach 
AT Artesia CR Crenshaw HC Hacienda Heights 
AV Avalon CS Castaic HE Harvard Heights 
AW Atwater Village CT Century City HG Hawaiian Gardens 
AZ Azusa  CU Cudahy HH Hidden Hills 
BA Bel Air Estates CV Covina HI Highland Park 
BC Bell Canyon CY Cypress Park HK Holly Park 
BE Bellflower DB Diamond Bar HO Hollywood 
BG Bell Gardens DO Downey HP Huntington Park 
BH Beverly Hills DS Del Sur HR Harbor City 
BK Bixby Knolls DU Duarte HV Hi Vista 
BL Bell DZ Dominguez HY Hyde Park 
BN Baldwin Hills EL East Los Angeles IG Inglewood 
BO Bouquet Canyon EM El Monte IN City of Industry 
BP Baldwin Park EN Encino IR Irwindale 
BR Bradbury EO El Sereno JH Juniper Hills 
BS Belmont Shore EP Echo Park JP Jefferson Park 
BT Bassett ER Eagle Rock KG Kagel Canyon 
BU Burbank ES El Segundo KO Koreatown 
BV Beverly Glen EV Elysian Valley LA Los Angeles 
BW Brentwood EZ East Rancho Dominguez LB Long Beach 
BX Box Canyon FA Fairmont LC La Canada Flintridge 
BY Boyle Heights FL Florence County LD Ladera Heights 
BZ Byzantine-Latino 
Quarter 
FO Fair Oaks Ranch LE Leona Valley 
CA Carson GA Gardena LF Los Feliz 
CB Calabasas GF Griffith Park LH La Habra Heights 

74 
 
 
LI Little Rock PC Pacoima SU Sunland 
LK Lakewood PD Palmdale SV Stevenson Ranch 
LL Lake Los Angeles PE  Pacific Palisades SW Sawtelle 
LM La Mirada PH Pacific Highlands SX South Central County 
LN Lawndale PI Phillips Ranch SY Sylmar 
LO Lomita PL Playa Vista SZ Studio City 
LP La Puente PM Paramount TA Tarzana 
LQ LAX PN Panorama City TC Temple City 
LR La Crescenta PO Pomona TD Tropico 
LS Los Nietos PP Palos Verdes Peninsula TE Topanga State Park 
LT Lancaster PR Pico Rivera TH Thousand Oaks 
LU Lake Hughes PS Palms TI Terminal Island 
LV La Verne PT Porter Ranch TJ Tujunga 
LW Lake View Terrace PV Palos Verdes Estates TL Toluca Lake 
LX Lennox PY Playa Del Rey TO Torrance 
LY Lynwood QH Quartz Hill  TP Topanga 
LZ Lake Elizabeth RB Redondo Beach TR Three Points 
MA Malibu RC Roosevelt Corner TT Toluca Terrace 
MB Manhattan Beach RD Rancho Dominguez UC Universal City 
MC Malibu Beach RE Rolling Hills Estates UP University Park 
MD Marina Del Rey RH Rolling Hills VA Valencia 
ME Monte Nido RK Rancho Park VC Venice 
MG Montecito Heights RM Rosemead VE Vernon 
MH Mission Hills RO Rowland Heights VG Valley Glen 
MI Mint Canyon RP Rancho Palos Verdes VI Valley Village 
ML Malibu Lake RS Reseda VL Valinda 
MM Miracle Mile RV Rampart Village VN Van Nuys 
MN Montrose RW Rosewood VV Val Verde 
MO Montebello SA Saugus VW View Park 
MP Monterey Park SB Sandberg VY Valyermo 
MR Mar Vista SC Santa Clara WA Walnut 
MS Mount Wilson SD San Dimas WB Willowbrook 
MT Montclair SE South El Monte WC West Covina 
MU Mount Olympus SF San Fernando WE West Hills 
MV Monrovia SG San Gabriel WG Wilsona Gardens 
MW  Maywood SH Signal Hill WH West Hollywood 
MY Metler Valley SI Sierra Madre WI Whittier 
NA Naples SJ Silver Lake WK Winnetka 
NE Newhall SK Sherman Oaks WL Woodland Hills 
NH North Hollywood SL Sun Valley WM Wilmington 
NN Neenach SM Santa Monica WN Windsor Hills 
NO Norwalk SN San Marino WO Westlake 
NR Northridge SO South Gate WP Walnut Park 
NT North Hills SP South Pasadena WR Westchester 
OP Ocean Park SQ Sleepy Valley WS Windsor Square 
OT Other SR San Pedro WT Watts 
PA Pasadena SS Santa Fe Springs WV Westlake Village 
PB Pearblossom ST Santa Clarita WW Westwood 
 
 
 
 

75 
 
Data Source Hierarchy 
• Patient 
• Family Member 
• Caretaker 
• EMS Provider 
• 9-1-1 or Dispatch Center 
 
Other Associated Elements 
• PatientStreetName 
• PatientStreetNumber 
• PatientAptNumber 
• PatientZipCode 
• PatientState 
• Common Null Values 
 
 

76 
 
PATIENT STATE 
 
Tag Name   
• PatientState 
 
Definition 
The state of the patient’s primary residence 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
2 Maximum Constraint 2 
 
Field Values 
AK  Alaska KS 
  
Kansas NM New Mexico WI  Wisconsin 
AL   Alabama KY  Kentucky NV  Nevada WV
  
West Virginia 
AR  Arkansas LA  Louisiana NY  New York WY
  
Wyoming 
AZ  Arizona MA  Massachusetts OH Ohio AS  American Samoa 
CA  California MD  Maryland OK Oklahoma FM  Federated States 
of Micronesia 
CO
  
Colorado ME  Maine OR Oregon GU
  
Guam 
CT  Connecticut MI   Michigan PA  Pennsylvania MH
  
Marshall Islands 
DC  District of 
Columbia 
MN  Minnesota RI  Rhode Island MP
  
Northern Mariana 
Islands 
DE  Delaware MO Missouri SC  South Carolina PR  Puerto Rico 
FL  Florida MS  Mississippi SD  South Dakota PW
  
Palau 
GA Georgia MT  Montana TN  Tennessee UM
  
US Minor Outlying 
Islands 
HI  Hawaii NC  North Carolina TX  Texas VI Virgin Islands of 
the US 
IA   Iowa NH  New 
Hampshire 
UT  Utah OT Other 
ID  Idaho ND  North Dakota VA  Virginia   
IL  Illinois NE  Nebraska VT  Vermont   
IN   Indiana NJ  New Jersey WA
  
Washington   
 
 
 
 
 
 

77 
 
Data Source Hierarchy 
• Patient 
• Family Member 
• Caretaker 
• EMS Provider 
 
Other Associated Elements 
• PatientStreetName 
• PatientStreetNumber 
• PatientAptNumber 
• PatientZipCode 
• PatientCityCode 
• Common Null Values 
  

78 
 
PATIENT ZIP CODE 
 
Tag Name   
• PatientZipCode 
 
Definition 
The zip code of the patient’s primary residence 
 
Technical Information 
XSD Data Type   xs:nonNegativeInteger  Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
5 Maximum 
Constraint 
5 
 
Field Values 
• Five-digit positive numeric value 
 
Data Source Hierarchy 
• Patient 
• Family Member 
• Caretaker 
• EMS Provider 
• 9-1-1 or Dispatch Center 
 
Other Associated Elements 
• PatientStreetName 
• PatientStreetNumber 
• PatientAptNumber 
• PatientCityCode 
• PatientStateCode 
• Common Null Values 
  

79 
 
HOSP. VISIT # 
 
Tag Name   
• VisitNo 
 
Definition 
The visit, or encounter, # that relates to the patient’s current hospital visit 
 
Technical Information 
XSD Data Type   xs:string  Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum 
Constraint 
15 
 
Field Values 
• Free text 
 
Data Source Hierarchy 
• Hospital Face Sheet 
 
Other Associated Elements 
• Common Null Values 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

80 
 
 
 
 
 
 
 
 
 
 
 
 
 
TEAM MEMBERS 
 
  

81 
 
TEAM MEMBER ID 
 
Tag Name   
• TeamMemberID 
 
Definition 
The identification number of personnel involved in the patient’s care 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   No 
Minimum 
Constraint   
1 Maximum 
Constraint 
8 
 
Field Values 
• Free text  
 
Additional Information 
• The format used for Paramedics is “P” followed by the L.A. County issued accreditation 
number– example P1234 
• The format used for EMTs is “E” followed by the CA certification number– example 
E12345 
• Every record must have at least one team member ID, listed in the first copy 
 
Data Source Hierarchy 
• EMS Provider  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  

82 
 
 
 
 
 
 
 
 
 
TRANSPORT INFORMATION 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

83 
 
PROV 
 
Tag Name   
• Provider  
 
Definition 
Two-letter provider code of the agency (or agencies) responding to the incident 
 
Technical Information  
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   No 
Minimum 
Constraint   
2 Maximum 
Constraint 
2 
 
Field Values 
AA 
American Professional 
Ambulance Corp. FC First Rescue Ambulance PF Pasadena Fire 
AB   AmbuLife Ambulance, Inc. FM Firstmed Ambulance PN PRN Ambulance, Inc. 
AF   Arcadia Fire   FS U.S. Forest Service RB Redondo Beach Fire 
AH Alhambra Fire GG Go Green Ambulance RE REACH Air Medical Service 
AN Antelope Ambulance Service GL Glendale Fire RR Rescue Services (Medic-1) 
AR American Medical Response GU 
Guardian Ambulance 
Service RY Royalty Ambulance 
AT All Town Ambulance, LLC HE 
Heart Ambulance 
Corporation SA San Marino Fire 
AU AmbuServe Ambulance JA Journey Ambulance SB  
San Bernardino County 
Provider 
AV Avalon Fire KC Kern County Provider SG San Gabriel Fire 
AW AMWest Ambulance LB Long Beach Fire SI Sierra Madre Fire 
AZ Ambulnz Health, Inc. LE Lifeline Ambulance SM Santa Monica Fire 
BA Burbank Airport Fire Dept. LH La Habra Heights Fire SO Symbiosis (Di Biassi) 
BF Burbank Fire LT Liberty Ambulance SP South Pasadena Fire 
BH Beverly Hills Fire LV La Verne Fire SS Santa Fe Springs Fire 
CA CARE Ambulance LY Lynch EMS Ambulance SY Symons Ambulance 
CC Culver City Fire MA Mauran Ambulance TF Torrance Fire 
CF LA County Fire MB Manhattan Beach Fire TR Trinity Ambulance 
CG US Coast Guard MD MedTrans, Inc. UC UCLA Emergency Services 
CI LA City Fire MF Monrovia Fire VA Viewpoint Ambulance, Inc. 
CL CAL-MED Ambulance MI MedResponse, Inc. VE Ventura County Fire 
CM Compton Fire MO Montebello Fire VI Vital Care Ambulance 
CO College Coastal Care, LLC MP Monterey Park Fire WC West Covina Fire 
CS LA County Sheriff MR MedReach Ambulance WE Westcoast Ambulance 
DF Downey Fire MT MedCoast Ambulance WM 
West Med/McCormick 
Ambulance Service 
EA Emergency Ambulance MY Mercy Air OT Other Provider 
ES El Segundo Fire OC Orange County Provider   
EX 
Explorer 1 Ambulance and 
Medical Services PE Premier Medical Transport   
 
 

84 
 
 
Additional Information 
• Law enforcement agencies are not considered EMS providers and therefore do not 
have a two-letter provider code.  Please do not attempt to list them as a provider. 
 
Data Source Hierarchy 
• EMS Provider  
• Auto-generated by the EMS Provider’s software 
 
Other Associated Elements 
• Type 
• Unit 

85 
 
A/B/H 
 
Tag Name   
• Type 
 
Definition 
The highest capability of care for the responding provider unit 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum 
Constraint 
1 
 
Field Values 
A  Advanced Life Support  B  Basic Life Support  
H  Helicopter  
 
Data Source Hierarchy 
• EMS Provider  
• Auto-generated by the EMS Provider’s software 
 
Other Associated Elements 
• Provider 
• Unit 
• Common Null Values 
 
 
 
 
 
 

86 
 
UNIT 
 
Tag Name   
• Unit 
 
Definition 
The unit letter and number designation for the responding provider unit  
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
2 Maximum 
Constraint 
5 
 
Field Values 
• Free text 
 
Data Source Hierarchy 
• EMS Provider  
• Auto-generated by the EMS Provider’s software 
 
Other Associated Elements 
• Provider 
• Type 
• Common Null Values 
 
 
 
 

87 
 
DISP DATE 
 
Tag Name   
• DispatchDate  
 
Definition 
Date the responding unit was notified by dispatch of the incident 
  
Technical Information 
XSD Data Type   xs:date     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   No 
Minimum Value   07/01/2016 Maximum Value Current Date 
 
Field Values 
• Collected as standard XML format YYYY-MM-DD 
 
Data Source Hierarchy 
• 9-1-1 or Dispatch Center 
• EMS Provider 
 
Other Associated Elements 
• DispatchTime 
 

88 
 
DISP  
 
Tag Name   
• DispatchTime 
 
Definition 
Time of day the responding unit was notified by dispatch of the incident 
  
Technical Information 
XSD Data Type   xs:time     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   No 
 
Field Values 
• Collected as HH:MM:SS 
• Use 24-hour clock 
 
Data Source Hierarchy 
• 9-1-1 or Dispatch Center 
• EMS Provider 
 
Other Associated Elements 
• DispatchDate 
 
 
 

89 
 
ARRIVAL DATE 
 
Tag Name   
• ArrivalDate  
 
Definition 
Date the responding unit arrived at the incident location 
 
Technical Information 
XSD Data Type   xs:date     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum Value   07/01/2016 Maximum Value Current Date 
 
Field Values 
• Collected as standard XML format YYYY-MM-DD 
 
Data Source Hierarchy 
•  
• EMS Provider 
 
Other Associated Elements 
• ArrivalTime 
• Common Null Values 
 

90 
 
ARRIVAL  
 
Tag Name   
• ArrivalTime 
 
Definition 
Time of day the responding unit arrived at the incident location 
 
Technical Information 
XSD Data Type   xs:time     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
 
Field Values 
• Collected as HH:MM:SS 
• Use 24-hour clock 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• ArrivalDate 
• Common Null Values 
 
 

91 
 
DATE AT PATIENT  
 
Tag Name   
• AtPatientDate  
 
Definition 
Date the responding unit reached the patient at the incident location 
 
Technical Information 
XSD Data Type   xs:date     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum Value   07/01/2016 Maximum Value Current Date 
 
Field Values 
• Collected as standard XML format YYYY-MM-DD 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• AtPatientTime 
• Common Null Values 
 

92 
 
TIME AT PATIENT 
 
Tag Name   
• AtPatientTime 
 
Definition 
Time of day the responding unit reached the patient at the incident location 
 
Technical Information 
XSD Data Type   xs:time     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
 
Field Values 
• Collected as HH:MM:SS 
• Use 24-hour clock 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• AtPatientDate 
• Common Null Values 
 
 

93 
 
LEFT DATE 
 
Tag Name   
• LeftSceneDate  
 
Definition 
Date the transporting unit left the incident location with the patient 
 
Technical Information 
XSD Data Type   xs:date     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum Value   07/01/2016 Maximum Value Current Date 
 
Field Values 
• Collected as standard XML format YYY-MM-DD 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• LeftSceneTime 
• Common Null Values 
 

94 
 
LEFT  
 
Tag Name   
• LeftSceneTime 
 
Definition 
Time of day the transporting unit left the incident location with the patient 
 
Technical Information 
XSD Data Type   xs:time     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
 
Field Values 
• Collected as HH:MM:SS 
• Use 24-hour clock 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• LeftSceneDate 
• Common Null Values 
 
 
 

95 
 
AT FAC DATE 
 
Tag Name   
• AtFacilityDate  
 
Definition 
Date the transporting unit arrived at the receiving facility with the patient 
 
Technical Information 
XSD Data Type   xs:date     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum Value   07/01/2016 Maximum Value Current Date 
 
Field Values 
• Collected as standard XML format YYYY-MM-DD 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• AtFacilityTime 
• Common Null Values 
 

96 
 
AT FAC 
 
Tag Name   
• AtFacilityTime 
 
Definition  
Time of day the transporting unit arrived at the receiving facility with the patient 
 
Technical Information 
XSD Data Type   xs:time     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
 
Field Values 
• Collected as HH:MM:SS 
• Use 24-hour clock 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• AtFacilityDate 
• Common Null Values 
  
 
 
  

97 
 
FAC EQUIP DATE 
 
Tag Name   
• OnFacilityEquipmentDate  
 
Definition 
Date the transporting unit transferred the patient to hospital equipment 
 
Technical Information 
XSD Data Type   xs:date     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum Value   07/01/2016 Maximum Value Current Date 
 
Field Values 
• Collected as standard XML format YYYY-MM-DD 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• OnFacilityEquipmentTime 
• Common Null Values 
  

98 
 
FAC EQUIP TIME 
 
Tag Name   
• OnFacilityEquipmentTime 
 
Definition  
Time of day the transporting unit transferred the patient to hospital equipment 
 
Technical Information 
XSD Data Type   xs:time     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
 
Field Values 
• Collected as HH:MM:SS 
• Use 24-hour clock 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• OnFacilityEquipmentDate 
• Common Null Values 
  

99 
 
AVAIL DATE 
 
Tag Name   
• AvailableDate  
 
Definition 
Date the provider is available to return to service 
 
Technical Information 
XSD Data Type   xs:date     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum Value   07/01/2016 Maximum Value Current Date 
 
Field Values 
• Collected as standard XML format YYYY-MM-DD 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• AvailableTime 
• Common Null Values 
 
 

100 
 
AVAIL 
 
Tag Name   
• AvailableTime  
 
Definition 
Time of day the provider is available to return to service 
 
Technical Information 
XSD Data Type   xs:time     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
 
Field Values 
• Collected as HH:MM:SS 
• Use 24-hour clock 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• AvailableDate 
• Common Null Values 
 
 
 
 

101 
 
TRANSPORTED BY  
 
Tag Name   
• TransportingUnit 
 
Definition 
Indicates whether the unit physically transported the patient to the receiving facility  
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint  
1 Maximum Constraint 1 
 
Field Values 
• Y  Yes 
• N  No   
 
Data Source Hierarchy 
• EMS Provider  
• Auto-generated by the EMS Provider’s software 
 
Other Associated Elements 
• Common Null Values  
 
  

102 
 
MED. CTRL.  
 
Tag Name   
• MedCtrl  
 
Definition 
The three-letter-code indicating whether medical control was provided by a protocol, a base 
hospital, a medical director/EMS fellow on scene, or if the EMS provider contacted the 
MAC 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, NA only 
Minimum 
Constraint   
3 Maximum 
Constraint 
3 
 
Field Values 
AMH Methodist Hospital of Southern California PIH PIH Health Whittier Hospital 
AVH Antelope Valley Hospital PVC Pomona Valley Hospital Medical 
Center 
CAL Dignity Health-California Hospital 
Medical Center 
QVH Emanate Health Queen of the Valley 
Hospital 
CSM Cedars-Sinai Medical Center SFM Saint Francis Medical Center 
GWT Adventist Health - Glendale  SJS Providence Saint Joseph Medical 
Center 
HCH Providence Holy Cross Medical Center SMM Dignity Health-Saint Mary Medical 
Center 
HGH LAC Harbor-UCLA Medical Center TOR Torrance Memorial Medical Center 
HMH Huntington Hospital UCL Ronald Reagan UCLA Medical Center 
HMN Henry Mayo Newhall Hospital   
LBM MemorialCare Long Beach Medical 
Center 
MAC Medical Alert Center 
LCM Providence Little Company of Mary 
Hospital Torrance 
MTP Medical Treatment Protocol 
LMC Los Angeles General Medical Center MDS Medical Director/EMS Fellow on 
Scene 
NRH Dignity Health-Northridge Hospital 
Medical Center   
  
 
Additional Information 
• If a medical treatment protocol is used and no base contact is made, enter the three-
letter code MTP 
 
Additional Information 
• Should be reported as a valid value or Not Applicable only 
 
Data Source Hierarchy 
• EMS Provider 
 

103 
 
PROTOCOL 
 
Tag Name   
• Protocol 
 
Definition 
The four-digit numeric or six-digit alphanumeric code of the protocol used to treat the 
patient 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, NA only 
Minimum 
Constraint   
4 Maximum 
Constraint 
6 
 
Field Values 
1201 Assessment   
1202 General Medical 1202-P General Medical (Pediatric) 
1203 Diabetic Emergencies 1203-P Diabetic Emergencies (Pediatric) 
1204 Fever/Sepsis 1204-P Fever/Sepsis (Pediatric) 
1205 GI/GU Emergencies 1205-P GI/GU Emergencies (Pediatric) 
1206 Medical Device Malfunction 1206-P Medical Device Malfunction (Pediatric) 
1207 Shock/Hypotension 1207-P Shock/Hypotension (Pediatric) 
1208 Agitated Delirium 1208-P Agitated Delirium (Pediatric) 
1209 Behavioral/Psychiatric Crisis 1209-P Behavioral/Psychiatric Crisis (Pediatric) 
1210 Cardiac Arrest 1210-P Cardiac Arrest (Pediatric) 
1211 Cardiac Chest Pain   
1212 Cardiac Dysrhythmia-Bradycardia 1212-P Cardiac Dysrhythmia-Bradycardia 
(Pediatric) 
1213 Cardiac Dysrhythmia-Tachycardia  1213-P Cardiac Dysrhythmia-Tachycardia 
(Pediatric) 
1214 Pulmonary Edema/CHF   
1215 Childbirth (Mother) 1215-P Childbirth (Mother) (Pediatric) 
  1216-P Newborn/Neonatal Resuscitation 
(Pediatric) 
1217 Pregnancy Complication 1217-P Pregnancy Complication (Pediatric) 
1218 Pregnancy/Labor 1218-P Pregnancy/Labor (Pediatric) 
1219 Allergy 1219-P Allergy (Pediatric) 
1220 Burns 1220-P Burns (Pediatric) 
1221 Electrocution 1221-P Electrocution (Pediatric) 
1222 Hyperthermia (Environmental) 1222-P Hyperthermia (Environmental) 
(Pediatric) 
1223 Hypothermia/Cold Injury 1223-P Hypothermia/Cold Injury (Pediatric) 
1224 Stings/Venomous Bites 1224-P Stings/Venomous Bites (Pediatric) 
1225 Submersion 1225-P Submersion (Pediatric) 
1226 ENT/Dental Emergencies 1226-P ENT/Dental Emergencies (Pediatric) 
1228 Eye Problem 1228-P Eye Problem (Pediatric) 
1229 ALOC 1229-P ALOC (Pediatric) 
1230 Dizziness/Vertigo 1230-P Dizziness/Vertigo (Pediatric) 
1231 Seizure 1231-P Seizure (Pediatric) 
1232 Stroke/CVA/TIA 1232-P Stroke/CVA/TIA (Pediatric) 

104 
 
1233 Syncope/Near Syncope 1233-P Syncope/Near Syncope (Pediatric) 
1234 Airway Obstruction 1234-P Airway Obstruction (Pediatric) 
  1235-P BRUE (Pediatric) 
1236 Inhalation Injury 1236-P Inhalation Injury (Pediatric) 
1237 Respiratory Distress 1237-P Respiratory Distress (Pediatric) 
1238 Carbon Monoxide Exposure 1238-P Carbon Monoxide Exposure (Pediatric) 
1239 Dystonic Reaction 1239-P Dystonic Reaction (Pediatric) 
1240 HazMat 1240-P HazMat (Pediatric) 
1241 Overdose/Poisoning/Ingestion 1241-P Overdose/Poisoning/Ingestion 
(Pediatric) 
1242 Crush Injury/Syndrome 1242-P Crush Injury/Syndrome (Pediatric) 
1243 Traumatic Arrest 1243-P Traumatic Arrest (Pediatric) 
1244 Traumatic Injury 1244-P Traumatic Injury (Pediatric) 
1245 COVID   
 
Additional Information 
• Protocol identified should correspond to the provider impression 
• Should be reported as a valid field value or Not Applicable only 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Complaint 
• ProviderImpression 
• Common Null Values 

105 
 
REC FAC 
 
Tag Name   
• ReceivingFacility 
 
Definition 
The three-letter code of the facility to which the patient was transported 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
3 Maximum 
Constraint 
3 
 
Field Values 
ACH Alhambra Hospital Medical Center FPH Foothill Presbyterian Hospital 
AHM Catalina Island Medical Center  GAR Garfield Medical Center 
AMH Methodist Hospital of Southern California GEM Greater El Monte Community Hospital 
ANH Anaheim Memorial Medical Center (Orange 
County) 
GMH Dignity Health-Glendale Memorial Hospital 
and Health Center 
ARM Arrowhead Regional Medical Center  
(S. B. County) 
GSH PIH Health Good Samaritan Hospital 
AVH Antelope Valley Hospital GWT Adventist Health-Glendale 
BEV Beverly Hospital HBC Hyperbaric Chamber (NON-BASIC) 
BMC Southern California Hosp. at Culver City HCH Providence Holy Cross Medical Center 
CAL Dignity Health-California Hospital Medical 
Center 
HGH LAC Harbor-UCLA Medical Center 
CHH Children's Hospital Los Angeles HMH Huntington Hospital 
CHI Chino Valley Medical Center (S.B. County) HMN Henry Mayo Newhall Hospital 
CHO Children’s Hospital of Orange County (Orange 
County) 
HWH West Hills Hospital and Medical Center 
CHP Community Hospital of Huntington Park ICH Emanate Health Inter-Community Hosp. 
CNT Centinela Hospital Medical Center KFA Kaiser Foundation Hospital - Baldwin Park 
CPM Coast Plaza Hospital KFB Kaiser Foundation Hospital - Downey 
CSM Cedars-Sinai Medical Center KFF Kaiser Foundation Hospital – Fontana (S.B. 
County) 
DCH PIH Health Downey Hospital KFH Kaiser Foundation Hospital – South Bay 
DFM Cedars-Sinai Marina Del Rey Hospital KFI Kaiser Foundation Hospital - Irvine 
DHL Lakewood Regional Medical Center KFL Kaiser Foundation Hospital – Sunset (LA) 
DHM Montclair Hospital M.C. (S.B. County) KFN Kaiser Foundation Hospital - Ontario (S.B. 
County) 
ELA East Los Angeles Doctors Hospital KFO Kaiser Foundation Hospital – Woodland 
Hills 
ENH Encino Hospital Medical Center KFP Kaiser Foundation Hospital – Panorama 
City 
FHP Fountain Valley Regional Hosp. & M.C. (Orange 
County) 
KFW Kaiser Foundation Hospital – West Los 
Angeles 

106 
 
KHA Kaiser Foundation Hospital -Anaheim (Orange 
County) 
SGC San Gabriel Valley Medical Center 
LAG Los Alamitos Medical Center (Orange County) SIM Adventist Health - Simi Valley (Ventura 
County) 
LBM MemorialCare Long Beach Medical Center SJD St. Jude Medical Center (Orange County) 
LBV Long Beach Veteran Administration (NON-
BASIC) 
SJH Providence Saint John’s Health Center  
LCH Palmdale Regional Medical Center SJO St. John Regional Medical Center (Ventura 
County) 
LCM Providence Little Company of Mary M.C. - 
Torrance 
SJS Providence Saint Joseph Medical Center 
LLU Loma Linda University Medical Center (S. B. 
County) 
SMH Santa Monica-UCLA Medical Center 
LMC Los Angeles General Medical Center SMM Dignity Health-Saint Mary Medical Center 
LPI La Palma Intercommunity Hospital (Orange 
County) 
SOC Sherman Oaks Hospital 
LRR Los Robles Hospital and Medical Center 
(Ventura County) 
SPP Providence Little Company of Mary Medical 
Center - San Pedro 
MCP Mission Community Hospital TOR Torrance Memorial Medical Center 
MHG Memorial Hospital Gardena TRM Providence Cedars-Sinai Tarzana Medical 
Center  
MLK Martin Luther King, Jr. Community Hospital UCI University of California - Irvine Medical 
Center (Orange County) 
MPH Monterey Park Hospital UCL Ronald Reagan UCLA Medical Center 
NOR Los Angeles Community Hospital at Norwalk   
NRH Dignity Health-Northridge Hospital Medical 
Center  
VHH USC Verdugo Hills Hospital 
OTH Other (FACILITY NOT LISTED) VPH Valley Presbyterian Hospital 
OVM LAC Olive View - UCLA Medical Center  WHH Whittier Hospital Medical Center 
PAC Pacifica Hospital of the Valley WMC Western Medical Center Santa Ana 
(Orange County) 
PIH PIH Health Whittier Hospital WMH Adventist Health-White Memorial 
PLB College Medical Center WVA Veterans Administration Hospital of West 
Los Angeles (NON-BASIC) 
PLH Placentia Linda Hospital (Orange County) XAV Star Behavioral Health Urgent Care Center, 
Lancaster 
PVC Pomona Valley Hospital Medical Center XCC 
Exodus Recovery Center – Culver City 
QOA Hollywood Presbyterian Medical Center XHG 
Exodus Recovery Center – Harbor 
QVH Emanate Health Queen of the Valley Hospital XIN Star Behavioral Health Urgent Care Center, 
City of Industry 
RCC Ridgecrest Regional Hospital (Kern County) XLB Star Behavioral Health Urgent Care Center, 
Long Beach 
SAC San Antonio Community Hospital (S.B. County) XLK 
Exodus Recovery Center – MLK 
SDC San Dimas Community Hospital XUS 
Exodus Recovery Center – USC 
SFM Saint Francis Medical Center ZLA David L. Murphy Sobering Center 
 
DISASTER RECEIVING FACILITIES ONLY 
BRH Barlow Respiratory Hospital KMC Kern Medical Center 
COA Silver Lake Medical Center NCH USC Kenneth Norris Jr. Cancer Center 
COH City of Hope National Medical Center PAM Pacific Alliance Medical Center 
LAC Los Angeles Community Hospital RLA LAC-Rancho Los Amigos 
HOL So. Calif. Hospital at Hollywood USH Keck Hospital of USC 

107 
 
 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Notification 
• Via 
• Common Null Values 
  

108 
 
ADVANCED PROVIDER COMMENT 
 
Tag Name   
• AdvProvComment 
 
Definition 
Field provided for additional documentation related to the utilization of an advanced 
healthcare provider.  Documentation may include such items as: level of provider; 
telemedicine; or patient refusal of advanced healthcare provider services.   
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, NA only 
Minimum 
Constraint   
1 Maximum 
Constraint 
60 
 
Field Values 
• Free text 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Advanced Provider Level? 
• Common Null Values 
  

109 
 
NOTIFICATION? 
 
Tag Name   
• Notification 
 
Definition 
Checkbox indicating whether the receiving hospital was notified prior to the patient’s arrival 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, NA & ND only 
Minimum 
Constraint   
1 Maximum 
Constraint 
1 
 
Field Values 
• Y  Yes 
• N  No 
 
Additional Information 
• Base contact constitutes notification, even if the receiving hospital is not the base 
hospital contacted 
• Should be reported as a valid field value, Not Applicable, or Not Documented only 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• MedCtrl 
• ReceivingFacility 
• Common Null Values 
 
 
 
 
 
 
 
 
 
 
 
 

110 
 
VIA 
 
Tag Name   
• Via 
 
Definition 
Checkbox indicating the type of transport unit used 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   No 
Minimum 
Constraint   
1 Maximum 
Constraint 
1 
 
Field Values 
A   ALS H   Helicopter 
B   BLS N   No Transport 
 
Additional Information 
• If field value is “A”, “B”, or “H” then a receiving facility must be documented 
• If field value is “N”, ‘AMA?’, ‘Assess, Treat, & Release?’, and ‘Treatment in Place?’ must 
have a non-null value 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• ReceivingFacility 
• Notification 
• AMA 
• AssessTreatRelease 
• TreatInPlace 
 
 
 

111 
 
AMA? 
 
Tag Name   
• AMA 
 
Definition 
Checkbox indicating whether the patient refused transport and signed out against medical 
advice 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, NA only 
Minimum 
Constraint   
1 Maximum 
Constraint 
1 
 
Field Values 
• Y   Yes 
• N   No 
 
Additional Information 
• Should be reported as a valid field value or Not Applicable only 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Via 
• AssessTreatRelease 
• TreatInPlace 
• Common Null Values 
 
 
  

112 
 
ASSESS, TREAT, & RELEASE? 
 
Tag Name   
• AssessTreatRelease 
 
Definition 
Checkbox indicating whether the patient, who does not desire transport to the emergency 
department for evaluation and after assessment and/or treatment by EMS personnel, does 
not have an ongoing emergency medical condition, a high-risk presentation, or social risk 
factors and is released at scene to follow-up with the patient’s regular healthcare provider 
or a doctor’s office or clinic 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, NA only 
Minimum 
Constraint   
1 Maximum 
Constraint 
1 
 
Field Values 
• Y   Yes 
• N   No 
 
Additional Information 
• Should be reported as a valid field value or Not Applicable only 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Via 
• AMA 
• TreatInPlace 
• Common Null Values 
 
  

113 
 
ASSESS, TREAT, & TRANSFER? 
 
Tag Name   
• AssessTreatTransfer 
 
Definition 
Checkbox indicating whether the patient, after assessment and/or treatment by EMS 
personnel, does not have an ongoing emergency medical condition, a high-risk 
presentation, or social risk factors and care is transferred to the department of mental 
health for a mental health evaluation 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, NA only 
Minimum 
Constraint   
1 Maximum 
Constraint 
1 
 
Field Values 
• Y   Yes 
• N   No 
 
Additional Information 
• Should be reported as a valid field value or Not Applicable only 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Via 
• AMA 
• AssessTreatRelease 
• TreatInPlace 
• Common Null Values 
 
 
 
 
 
 
 
 
 
 

114 
 
TREATMENT IN PLACE? 
 
Tag Name   
• TreatInPlace 
 
Definition 
Checkbox indicating whether the patient, after an assessment and treatment by EMS 
personnel and medical clearance by an authorized advanced healthcare provider on scene 
or via Telemedicine, does not require ambulance transport to an emergency department 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, NA only 
Minimum 
Constraint   
1 Maximum 
Constraint 
1 
 
Field Values 
• Y   Yes 
• N   No 
 
Additional Information 
• Should be reported as a valid field value or Not Applicable only 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Via 
• AMA 
• AssessTreatRelease 
• Common Null Values 
 
  

115 
 
ADVANCED PROVIDER LEVEL? 
 
Tag Name   
• AdvancedProviderLevel 
 
Definition 
Checkbox indicating whether the authorized advanced healthcare provider is an EMS 
physician authorized to direct EMS care on scene or via telemedicine or an advanced 
practice provider identified by the EMS Provider Agency Medical Director to provide 
medical direction on scene or via telemedicine 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, NA only 
Minimum 
Constraint   
1 Maximum 
Constraint 
6 
 
Field Values 
• APP  Advanced Practice Provider 
• EMS MD  EMS Physician 
 
Additional Information 
• Should be reported as a valid field value or Not Applicable only 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• TreatInPlace 
• Common Null Values 
 
  

116 
 
TRANS TO 
 
Tag Name   
• TransportedTo 
 
Definition 
Checkbox indicating the actual destination of the patient 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum 
Constraint 
1 
 
Field Values 
M   Most Accessible Receiving (MAR) N   Perinatal 
 
T   Trauma Center (TC)/Pediatric Trauma 
Center (PTC) 
P   Pediatric Medical Center (PMC) 
S   STEMI Receiving Center (SRC) E   Emergency Department Approved for 
Pediatrics (EDAP) 
R   Sexual Assault Response Team 
(SART) facility 
A   Primary Stroke Center (PSC) 
O   Other K   Comprehensive Stroke Center (CSC) 
 
Additional Information 
• If patient was transported, ‘Receiving Facility’ and ‘Notification’ should have a valid field 
value and ‘Via’ should not = “N” 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• ReceivingFacility 
• Notification 
• Via 
• Common Null Values 

117 
 
REASON 
 
Tag Name  
• Reason 
 
Definition 
Checkbox indicating the reason that the patient was transported to a facility other than the 
most accessible receiving facility or specialty center 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum 
Constraint 
1 
 
Field Values 
• A   No Specialty Center Access 
• C   Criteria/Required 
• E   ED Sat 
• G   Guidelines 
• J   Judgment 
• N   No Specialty Center Required 
• R   Request 
• X   Extremis 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• ReceivingFacility 
• Notification 
• Via 
• TransTo 
• Common Null Values 
 
 

118 
 
CODE 3 
 
Tag Name   
• Code3 
 
Definition 
Checkbox indicating whether the patient was transported to the receiving facility with lights 
and sirens (aka Code 3) 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum 
Constraint 
1 
 
Field Values 
• Y   Yes 
• N   No 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• ReceivingFacility 
• Notification 
• Via 
• TransTo 
• Common Null Values 
 
 
  

119 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
GCS 
 

120 
 
GLASGOW COMA SCALE- TIME  
 
Tag Name   
• GCSTime 
 
Definition 
Time of day when the patient’s initial, and subsequent if applicable, Glasgow Coma Scale 
was performed 
 
Technical Information 
XSD Data Type   xs:time     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
 
Field Values 
• Collected as HH:MM:SS 
• Use 24-hour clock 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Eye 
• Verbal 
• Motor 
• GCSTotal 
• Common Null Values 
 

121 
 
EYE 
 
Tag Name  
• Eye 
 
Definition 
The Glasgow Coma Scale numerical value that corresponds to the patient’s initial and 
subsequent, if applicable, eye opening response to stimuli 
 
Technical Information 
XSD Data Type   xs:nonNegativeInteger   
  
Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum 
Constraint 
1 
 
Field Values 
4   Spontaneous 2   To Pain 
3   To Verbal 1   None 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• GCSTime 
• Verbal 
• Motor 
• GCSTotal 
• Common Null Values 
 
  

122 
 
VERBAL 
 
Tag Name   
• Verbal 
 
Definition 
The Glasgow Coma Scale numerical value that corresponds to the patient’s initial and 
subsequent, if applicable, verbal response to stimuli 
 
Technical Information 
XSD Data Type   xs:nonNegativeInteger    Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum 
Constraint 
1 
 
Field Values 
5   Oriented x 3 2   Incomprehensible 
4   Confused 1   None 
3   Inappropriate  
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• GCSTime 
• Eye 
• Motor 
• GCSTotal 
• Common Null Values 
  

123 
 
MOTOR 
 
Tag Name   
• Motor  
 
Definition 
The Glasgow Coma Scale numerical value that corresponds to the patient’s initial and 
subsequent, if applicable, motor response to stimuli 
 
Technical Information 
XSD Data Type   xs:nonNegativeInteger     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum 
Constraint 
1 
 
Field Values 
6   Obedient  3   Flexion  
5   Purposeful 2   Extension 
4   Withdrawal 1   None  
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• GCSTime 
• Eye 
• Verbal 
• GCSTotal 
• Common Null Values 
 
 

124 
 
GCS TOTAL  
 
Tag Name   
• GCSTotal 
 
Definition 
Sum of the three numerical values documented for each element of the patient’s initial and 
subsequent, if applicable, Glasgow Coma Scale score(s) 
 
Technical Information 
XSD Data Type   xs:nonNegativeInteger    Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum 
Constraint 
2 
 
Field Values 
• One- or two-digit positive numeric value between 3 and 15 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• GCSTime 
• Eye 
• Verbal 
• Motor 
• Common Null Values 
 

125 
 
NORMAL FOR PATIENT/AGE 
 
Tag Name   
• NormalForPtAge 
 
Definition 
Patient’s behavior, although not typical of most patients, is reported by family, caregivers, 
etc., to be the same as it was before the incident 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum 
Constraint 
1 
 
Field Values 
• Y   Yes 
• N   No 
 
Additional Information 
• Can be used on patients who suffer from mental illness, dementia, developmental 
delays, etc. and on infants and children who are age appropriate 
 
Data Source Hierarchy 
• Patient 
• Family Member 
• Caregiver 
• EMS Provider 
 
Other Associated Elements 
• GCSTime 
• Eye 
• Verbal 
• Motor 
• GCSTotal 
• Common Null Values 
 
 
 
 
 
 
 
 

126 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
STROKE 

127 
 
mLAPSS  
 
Tag Name   
• ModifiedLAStrokeScreen 
 
Definition 
Checkbox indicating whether the patient met all Modified Los Angeles Prehospital 
Stroke Screen (mLAPSS) criteria as defined in Ref. No. 521 – Stroke Patient 
Destination 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum 
Constraint 
1 
 
Field Values 
• M  Met 
• N  Not met 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• LastKnownWellDate 
• LastKnownWellTime 
• LastKnownWellDateTimeUnk 
• FacialDroop 
• ArmDrift 
• GripStrength 
• TotalScore 
• Common Null Values  
 
 

128 
 
LAST KNOWN WELL DATE 
 
Tag Name   
• LastKnownWellDate 
 
Definition 
Date when the patient was last known to be well, symptom-free, at baseline, or usual 
state of health 
 
Technical Information 
XSD Data Type   xs:date     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
07/01/2016 Maximum 
Constraint 
Current Date 
 
Field Values 
• Collected as standard XML format YYYY-MM-DD 
 
Additional Information 
• Values for last known well date should only be sent for patients who have a provider 
impression of STRK or are transported to a primary or comprehensive stroke center 
 
Data Source Hierarchy 
• Patient 
• Family Member 
• Caregiver 
• EMS Provider 
 
Other Associated Elements 
• ModifiedLAStrokeScreen 
• LastKnownWellTime 
• LastKnownWellDateTimeUnk 
• FacialDroop 
• ArmDrift 
• GripStrength 
• TotalScore 
• Common Null Values 
 
 
 

129 
 
LAST KNOWN WELL TIME 
 
Tag Name   
• LastKnownWellTime 
 
Definition 
Time of day when the patient was last known to be well, symptom-free, at baseline, or 
usual state of health 
 
Technical Information 
XSD Data Type   xs:time     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
 
 
Field Values 
• Collected as HH:MM:SS 
• Use 24-hour clock 
 
Additional Information 
• Values for last known well time should only be sent for patients who have a provider 
impression of STRK or are transported to a primary or comprehensive stroke center 
 
Data Source Hierarchy 
• Patient 
• Family Member 
• Caregiver 
• EMS Provider 
 
Other Associated Elements 
• ModifiedLAStrokeScreen 
• LastKnownWellDate 
• LastKnownWellDateTimeUnk 
• FacialDroop 
• ArmDrift 
• GripStrength 
• TotalScore 
• Common Null Values 
 
 

130 
 
LAST KNOW WELL DATE AND TIME UNKNOWN 
 
Tag Name   
• LastKnownWellDateTimeUnk 
 
Definition 
The date and/or time the patient was last known to be well, symptom-free, at baseline, or 
usual state of health is not known 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, NA only 
Minimum 
Constraint   
1 Maximum 
Constraint 
1 
 
Field Values 
• U   Unknown 
 
Additional Information 
• Should be reported as valid field value or Not Applicable only 
• Values for last known well date/time unknown should only be sent for patients who have 
a provider impression of STRK or are transported to a primary or comprehensive stroke 
center 
 
Data Source Hierarchy 
• Patient 
• Family Member 
• Caregiver 
• EMS Provider 
 
Other Associated Elements 
• ModifiedLAStrokeScreen 
• LastKnownWellDate 
• LastKnownWellTime 
• FacialDroop 
• ArmDrift 
• GripStrength 
• TotalScore 
• Common Null Values 
 
  

131 
 
FACIAL DROOP 
 
Tag Name   
• FacialDroop 
 
Definition 
Component of the LAMS that indicates whether the patient has a facial droop 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, ND or NA only 
Minimum 
Constraint   
1 Maximum 
Constraint 
1 
 
Field Values 
• 0  Absent 
• 1  Present 
• U  Unable 
 
Additional Information 
• Should be reported as a valid field value, Not Documented, or Not Applicable only 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• ModifiedLAStrokeScreen 
• LastKnownWellDate 
• LastKnownWellTime 
• LastKnownWellDateTimeUnk 
• ArmDrift 
• GripStrength 
• TotalScore 
• Common Null Values 
 
  

132 
 
ARM DRIFT 
 
Tag Name   
• ArmDrift 
 
Definition 
Component of the LAMS that indicates whether the patient has an arm drift 
 
Technical Information 
XSD Data Type   xs:string    Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, ND or NA only 
Minimum 
Constraint   
1 Maximum 
Constraint 
1 
 
Field Values 
• 0  Absent 
• 1  Drifts down 
• 2  Falls rapidly 
• U  Unable 
 
Additional Information 
• Should be reported as a valid field value, Not Documented, or Not Applicable only 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• ModifiedLAStrokeScreen 
• LastKnownWellDate 
• LastKnownWellTime 
• LastKnownWellDateTimeUnk 
• FacialDroop 
• GripStrength 
• TotalScore 
• Common Null Values 
 
  

133 
 
GRIP STRENGTH 
 
Tag Name   
• GripStrength 
 
Definition 
Component of the LAMS that indicates the quality of the patient’s grip strength 
 
Technical Information 
XSD Data Type   xs:string  Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, ND or NA only 
Minimum 
Constraint   
1 Maximum 
Constraint 
1 
 
Field Values 
• 0  Normal 
• 1  Weak grip 
• 2  No grip 
• U  Unable 
 
Additional Information 
• Should be reported as a valid field value, Not Documented, or Not Applicable only 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• ModifiedLAStrokeScreen 
• LastKnownWellDate 
• LastKnownWellTime 
• LastKnownWellDateTimeUnk 
• FacialDroop 
• ArmDrift 
• TotalScore 
• Common Null Values 
 
 
  

134 
 
TOTAL SCORE 
 
Tag Name   
• TotalScore 
 
Definition 
Sum of the three numerical values documented for each element of the patient’s LAMS 
score 
 
Technical Information 
XSD Data Type   xs:string    Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, ND or NA only 
Minimum 
Constraint   
1 Maximum 
Constraint 
1 
 
Field Values 
• One-digit positive numeric value between 0 and 5 
• U  Unable 
 
Additional Information 
• Should be reported as valid field value, Not Documented, or Not Applicable only 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• ModifiedLAStrokeScreen 
• LastKnownWellDate 
• LastKnownWellTime 
• LastKnownWellDateTimeUnk 
• FacialDroop 
• ArmDrift 
• GripStrength 
• Common Null Values 

135 
 
 
 
 
 
 
 
 
MEDICATION/RHYTHM 
 

136 
 
MEDS/RHYTHM TIME   
 
Tag Name   
• Time 
 
Definition 
Time of day when medication was administered and/or when a subsequent 3-lead rhythm 
was read from the cardiac monitor 
 
Technical Information 
XSD Data Type   xs:time     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
 
Field Values 
• Collected as HH:MM:SS 
• Use 24-hour clock 
 
Additional Information 
• Max occurrence for this field is 20 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• TMNumber 
• Rhythm 
• Meds 
• Dose 
• DoseUnits 
• Route 
• Results 
• Common Null Values 
 

137 
 
TM # 
 
Tag Name   
• TMNumber 
 
Definition 
The number of the team member who administered medication to the patient or who read 
the subsequent 3-lead rhythm from the cardiac monitor 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• Free text 
 
Additional Information 
• Max occurrence for this field is 20 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Time 
• Rhythm 
• Meds 
• Dose 
• DoseUnits 
• Route 
• Results 
• Common Null Values 
 
 

138 
 
RHYTHM  
 
Tag Name   
• Rhythm 
 
Definition 
Two- or three-letter code indicating the patient’s subsequent rhythm(s) on the cardiac 
monitor 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
2 Maximum Constraint 3 
 
Field Values 
1HB  First degree Heart Block  PEA  Pulseless Electrical Activity  
2HB  Second degree Heart Block  PM  Pacemaker Rhythm  
3HB  Third degree Heart Block  PST  Paroxysmal Supraventricular   
           Tachycardia  
AFL  Atrial Flutter  PVC Premature Ventricular Contraction  
AFI  Atrial Fibrillation  SA      Sinus Arrhythmia  
AGO  Agonal Rhythm  SB  Sinus Bradycardia  
ASY  Asystole  SR  Sinus Rhythm  
AVR  Accelerated Ventricular Rhythm  ST  Sinus Tachycardia  
IV   Idioventricular Rhythm  SVT  Supraventricular Tachycardia  
JR  Junctional Rhythm  VF  Ventricular Fibrillation  
PAC  Premature Atrial Contraction  VT  Ventricular Tachycardia  
PAT  Paroxysmal Atrial Tachycardia  
 
Additional Information 
• Max occurrence for this field is 20 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Time 
• TMNumber 
• Meds 
• Dose 
• DoseUnits 
• Route 
• Results 
• Common Null Values 
 

139 
 
MEDS 
 
Tag Name   
• Meds 
 
Definition 
The medication administered to the patient 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
2 Maximum Constraint 8 
 
Field Values 
NS  Normal Saline ASA  Aspirin 
ADE  Adenosine BEN  Benadryl 
AMI  Amiodarone CAL  Calcium Chloride 
ATR  Atropine D10 10% Dextrose 
BIC  Sodium Bicarbonate EPI  Epinephrine 
COL  Glucola P-EPI  Push-dose Epinephrine 
FEN Fentanyl GLP  Oral Glucose Paste 
GLU  Glucagon IVU  I.V. Unobtainable 
LID     Lidocaine MORPHINE  Morphine Sulfate 
MID  Midazolam NTG  Nitroglycerin Spray 
NAR  Narcan MDI    Albuterol MDI   
OND Ondansetron PAS   Aspirin Prior to Arrival 
KLC   Ketorolac PNA   Narcan Prior to Arrival 
SL  Saline Lock PEP   Epinephrine autoinjector Prior to Arrival 
ALB  Nebulized Albuterol OLN   Olanzapine 
 
Additional Information 
• Max occurrence for this field is 20 
• For ‘PAS’, ‘PNA’ and ‘PEP’ the only allowable Route is ‘TA' 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Time 
• TMNumber 
• Rhythm 
• Dose 
• DoseUnits 
• Route 
• Results 
• Common Null Values 

140 
 
DOSE   
 
Tag Name   
• Dose 
 
Definition 
The numeric value of the medication dosage administered to the patient 
 
Technical Information 
XSD Data Type   xs:decimal    Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 4 
 
Field Values 
• Up to four-digit positive numeric value 
 
Additional Information 
• Max occurrence for this field is 20 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Time 
• TMNumber 
• Rhythm 
• Meds 
• DoseUnits 
• Route 
• Results 
• Common Null Values 
 
  

141 
 
DOSE UNITS   
 
Tag Name   
• DoseUnits 
 
Definition 
The units of medication administered to the patient 
 
Technical Information 
XSD Data Type   xs:string    Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 5 
 
Field Values 
• gm  grams 
• mcg  micrograms 
• mEq  milliequivalent 
• mg  milligrams 
• mL  milliliter 
• puffs  puffs 
 
Additional Information 
• Max occurrence for this field is 20 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Time 
• TMNumber 
• Rhythm 
• Meds 
• Dose 
• Route 
• Results 
• Common Null Values 
 
  

142 
 
ROUTE   
 
Tag Name   
• Route 
 
Definition 
Two-letter code indicating the route of medication administration 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
2 Maximum Constraint 2 
 
Field Values 
IM   Intramuscular SL   Sublingual 
IN   Inhaled/Inhalation/Intranasal SQ   Subcutaneous 
IO   Intraosseous LB  Left Behind 
IV   Intravenous TA  Prior to Arrival 
PO  By Mouth/ODT  
 
Additional Information 
• Max occurrence for this field is 20 
• ‘TA’ can only be used with the following Meds: ‘PAS’, ‘PNA’, or PEP 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Time 
• TMNumber 
• Rhythm 
• Meds 
• Dose 
• DoseUnits 
• Results 
• Common Null Values 
 

143 
 
RESULT   
 
Tag Name   
• Results 
 
Definition 
The effect the medication had on the patient 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 2 
 
Field Values 
0 No Pain 6 Moderate Pain 
1 Some Discomfort 7 Moderate Pain 
2 Some Discomfort 8 Severe Pain 
3 Having Discomfort 9 Severe Pain 
4 Having Discomfort 10  Most Severe Pain 
5 Mild Pain N   No Change 
- Deteriorated +  Improved 
 
Additional Information 
• Max occurrence for this field is 20 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Time 
• TMNumber 
• Rhythm 
• Meds 
• Dose 
• DoseUnits 
• Route 
• Common Null Values 
 
 
 
 

144 
 
 
 
 
 
 
 
 
DEFIBRILLATION 
 
 
 
 
 
  

145 
 
DEFIB TIME   
 
Tag Name   
• Time 
 
Definition 
Time of day when defibrillation or cardioversion occurred 
 
Technical Information 
XSD Data Type   xs:time     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
 
Field Values 
• Collected as HH:MM:SS 
• Use 24-hour clock 
 
Additional Information 
• Max occurrence for this field is 20 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• TMNumber 
• Defib 
• Joules 
• Results 
• Common Null Values 
 
  

146 
 
TM # 
 
Tag Name   
• TMNumber 
 
Definition 
The number of the team member who defibrillated or cardioverted the patient 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• Free text 
 
Additional Information 
• Max occurrence for this field is 20 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Time 
• Defib 
• Joules 
• Results 
• Common Null Values 
  

147 
 
DEFIB 
 
Tag Name   
• Defib 
 
Definition 
Checkbox indicating whether the patient was defibrillated or cardioverted 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
3 Maximum Constraint 3 
 
Field Values 
• CAR  Cardioversion 
• DEF  Defibrillation 
 
Additional Information 
• Max occurrence for this field is 20 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Time 
• TMNumber 
• Joules 
• Results 
• Common Null Values 
  

148 
 
JOULES   
 
Tag Name   
• Joules 
 
Definition 
The amount of energy delivered to the patient during defibrillation or cardioversion, if known 
 
Technical Information 
XSD Data Type   xs:string   Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 3 
 
Field Values 
• Up to three-digit positive numeric value 
• AED  AED 
 
Additional Information 
• Max occurrence for this field is 20 
• If an AED is used to defibrillate the patient, the amount of energy will not be known so 
“AED” should be documented by the providers for these patients 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Time 
• TMNumber 
• Defib 
• Results 
• Common Null Values 
 
  

149 
 
RESULT  
 
Tag Name   
• Results 
 
Definition 
Two- or three-letter code indicating the patient’s subsequent rhythm(s) on the cardiac 
monitor following defibrillation or cardioversion 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
2 Maximum Constraint 3 
 
Field Values 
1HB  First degree Heart Block  PM  Pacemaker Rhythm  
2HB  Second degree Heart Block  PST  Paroxysmal Supraventricular   
           Tachycardia  
3HB  Third degree Heart Block  PVC Premature Ventricular Contraction  
AFL  Atrial Flutter  SA      Sinus Arrhythmia  
AFI  Atrial Fibrillation  SB  Sinus Bradycardia  
AGO  Agonal Rhythm  SR  Sinus Rhythm  
ASY  Asystole  ST  Sinus Tachycardia  
AVR  Accelerated Ventricular Rhythm  SVT  Supraventricular Tachycardia  
IV   Idioventricular Rhythm  UNS   Unknown Non-Shockable Rhythm (AED)  
JR  Junctional Rhythm  US      Unknown Shockable Rhythm (AED) 
PAC  Premature Atrial Contraction  VF  Ventricular Fibrillation  
PAT  Paroxysmal Atrial Tachycardia VT  Ventricular Tachycardia  
PEA  Pulseless Electrical Activity  
 
Additional Information 
• Max occurrence for this field is 20 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Time 
• TMNumber 
• Defib 
• Joules 
• Common Null Values 
 
  

150 
 
 
 
 
 
 
 
 
PATIENT ASSESSMENT 
 
 

151 
 
PATIENT NUMBER 
 
Tag Name   
• PatientNumber 
 
Definition 
Number identifying the patient amongst the total number of patients involved in an 
incident 
 
Technical Information 
XSD Data Type   xs:nonNegativeInteger   
  
Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum 
Constraint 
2 
 
Field Values 
• Up to two-digit positive numeric value 
 
Additional Information 
• If there is only one patient write “Pt.# 1 of 1” 
• If there are two patients, and the patient is identified by the paramedics as the second 
patient, write “Pt.# 2 of 2”  
 
Data Source Hierarchy 
• EMS Provider  
 
Other Associated Elements 
• TotalPatients 
• NumberOfPatientsTransported 
• Common Null Values  
 

152 
 
TOTAL PATIENT NUMBER 
 
Tag Name   
• TotalPatients 
 
Definition 
The total number of patients involved in the incident 
 
Technical Information 
XSD Data Type   xs:nonNegativeInteger   
  
Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum 
Constraint 
2 
 
Field Values 
• Up to a two-digit positive numeric value  
 
Additional Information 
• If there is only one patient write “Pt.# 1 of 1” 
• If there are two patients, and the patient is identified by the paramedics as the second 
patient, write “Pt.# 2 of 2”  
 
Data Source Hierarchy 
• EMS Provider  
 
Other Associated Elements 
• PatientNumber 
• NumberOfPatientsTransported 
• Common Null Values  
 
 

153 
 
NUMBER OF PATIENTS TRANSPORTED 
 
Tag Name   
• NumberOfPatientsTransported 
 
Definition 
The total number of patients transported from an incident 
 
Technical Information 
XSD Data Type   xs:nonNegativeInteger  
  
Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum 
Constraint 
2 
 
Field Values 
• Up to two-digit positive numeric value  
 
Data Source Hierarchy 
• EMS Provider  
 
Other Associated Elements 
• PatientNumber 
• TotalPatients 
• Common Null Values  
 
  

154 
 
AGE 
 
Tag Name   
• Age 
 
Definition 
Numeric value for the age (either calculated from date of birth or best approximation) of the 
patient 
 
Technical Information 
XSD Data Type   xs:nonNegativeInteger  
  
Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, NA only 
Minimum 
Constraint   
1 Maximum 
Constraint 
3 
 
Field Values 
• Up to three-digit positive numeric value  
 
Additional Information  
• When Run Type=C, E, or N, the only acceptable value is ‘Not Applicable’ (BIU=1) 
 
Data Source Hierarchy 
• EMS Provider  
• Auto-generated by the EMS provider’s electronic capture device from the patient’s date 
of birth (DOB) 
 
Other Associated Elements 
• AgeUnit 
• DateofBirth 
• Common Null Values  
 

155 
 
UNITS OF AGE 
 
Tag Name   
• AgeUnit 
 
Definition 
Checkbox indicating the unit of measurement used to report the age of the patient 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, NA only 
Minimum 
Constraint   
1 Maximum 
Constraint 
2 
 
Field Values 
Y  Years  M  Months D  Days W   Weeks H  Hours 
YE  Years   
       Estimated 
ME  Months  
       Estimated 
DE  Days  
       Estimated 
WE  Weeks  
        Estimated 
HE  Hours  
       Estimated 
 
Additional Information  
• When Run Type=C, E, or N, the only acceptable value is ‘Not Applicable’ (BIU=1) 
 
Data Source Hierarchy 
• EMS Provider  
 
Other Associated Elements 
• Age 
• DateofBirth 
• Common Null Values  
 
 
 

156 
 
GENDER  
 
Tag Name   
• Sex 
 
Definition 
Checkbox indicating the gender of the patient 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, NA only 
Minimum 
Constraint   
1 Maximum 
Constraint 
1 
 
Field Values 
• M  Male 
• F   Female 
• N  Nonbinary 
 
Additional Information  
• When Run Type=C, E, or N, the only acceptable value is ‘Not Applicable’ (BIU=1) 
 
Data Source Hierarchy 
• Patient 
• EMS Provider  
 
Other Associated Elements 
• Common Null Values  
 
 
 

157 
 
WT 
 
Tag Name   
• Weight 
 
Definition 
Numeric value of the weight of the patient (either as stated or best approximation) 
 
Technical Information 
XSD Data Type   xs:nonNegativeInteger     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum 
Constraint 
3 
 
Field Values 
• Up to three-digit positive numeric value 
  
Data Source Hierarchy 
• Patient 
• Family Member 
• Caretaker 
• EMS Provider  
 
Other Associated Elements 
• WeightUnit 
• PedsWeightColorCode 
• Common Null Values 
 
 

158 
 
UNITS OF WEIGHT 
 
Tag Name   
• WeightUnit 
 
Definition 
Checkbox indicating the unit of measurement used to report patient’s weight 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum 
Constraint 
1 
 
Field Values 
• K  Kilograms (kg) 
 
Additional Information 
• All weights provided in pounds need to be converted to kilograms.  Conversion from 
pounds to kilograms is accomplished by dividing the weight in pounds by 2.2 
 
Data Source Hierarchy 
• Patient 
• Family Member 
• Caretaker 
• EMS Provider  
 
Other Associated Elements 
• Weight 
• PedsWeightColorCode 
• Common Null Values 
 

159 
 
PEDS COLOR CODE 
 
Tag Name   
• PedsWeightColorCode 
 
Definition 
Color that corresponds with the length of an infant or child as measured on a length-
based pediatric resuscitation tape 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum 
Constraint 
1 
 
Field Values 
3 Grey 3  4 Grey 4  5 Grey 5  O Orange  U Purple 
R Red  W White  Y Yellow  E Green   
B Blue S   Too Short T Too Tall I Pink   
 
Data Source Hierarchy 
• EMS Provider  
 
Other Associated Elements 
• Weight 
• WeightUnit 
• Common Null Values 
 
 

160 
 
DISTRESS LEVEL 
 
Tag Name   
• DistressLevel 
 
Definition 
Checkbox indicating the EMS providers’ impression of the level of discomfort or 
severity of illness of the patient, based on assessment of signs, symptoms, and 
complaints 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum 
Constraint 
1 
 
Field Values 
D Mild M Moderate 
S Severe N None 
 
Data Source Hierarchy 
• EMS Provider  
 
Other Associated Elements 
• Common Null Values 
 

161 
 
COMPLAINT 
 
Tag Name   
• Complaint 
 
Definition 
Two-letter code(s) representing the patient’s most significant medical or trauma 
complaints 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, NA only 
Minimum 
Constraint   
2 Maximum 
Constraint 
2 
 
Field Values 
Medical Complaints 
AP Abdominal/Pelvic 
Pain 
CC Cough/Congestion LA Labor PO Poisoning 
AD Agitated Delirium DC Medical Device 
Complaint 
LN Local 
Neurological 
Signs 
PS Palpitations 
AR Allergic Reaction DI Dizzy NV Nausea/Vom
iting 
RA Respiratory 
Arrest 
AL Altered LOC  DO DOA (Dead On 
Arrival) 
ND Near 
Drowning  
SE Seizure 
AE Apneic Episode DY Dysrhythmia NB Neck/Back 
Pain 
SB Shortness of 
Breath 
EH Behavioral FE Fever NW Newborn SY 
  
Syncope 
OS Bleeding Other 
Site 
FB Foreign Body NC No Medical 
Complaint 
VA Vaginal Bleed 
RU Brief Resolved 
Unexplained Event 
GI Gastrointestinal 
Bleed 
NO Nosebleed WE Weak 
CA Cardiac Arrest HP Head Pain  OB Obstetrics OT Other 
CP Chest Pain HY Hypoglycemia OP Other Pain   
CH Choking/Airway 
Obstruction 
IM Inpatient Medical OD Overdose   
  

162 
 
Trauma Complaints (B=Blunt, P=Penetrating) 
NA  No Apparent Injuries BH Blunt Head BD Diffuse Abdominal 
Tenderness 
BU Burns/Shock 14 Blunt Head Injury 
w/GCS <= 14 
BG/PG 
BK/PK 
Genitals/Buttocks 
CB Critical Burn PH Penetrating Head 
 
BE 
PE 
Extremities 
90 SBP <90, <70 (<1 yr) BF 
PF 
Face/Mouth PX Ext. ↑ knee/elbow 
RR Respiratory rate <10/>29 BN 
PN 
Neck BR Fractures ≥ 2 long 
bones 
SX Suspected Pelvic Fracture BB 
PB 
Back BI 
PI 
Amp. ↑ wrist/ankle 
SC Spinal Cord with Deficit BC 
PC 
Chest BV 
PV 
Neuro/Vasc./Mangled 
IT Inpatient Trauma 
 
FC Flail Chest BP 
PP 
Tension Pneumo. 
UB Uncontrolled Bleeding BT  
PT 
Traumatic Arrest   
BL 
PL 
Minor 
Laceration/Contusion/Abrasion 
BA 
PA 
Abdomen   
  
 
Additional Information 
• REQUIRED on all records, except when run type=C, E, or N 
• OT (Other) is never the first complaint if there is a defined complaint and cannot be 
listed as a subsequent value if the first copy of complaint is a valid value not=OT 
• Cannot send duplicate copies of the same complaint 
• Patients with a mechanism of injury documented must also have a trauma complaint 
and provider impression code documented – and vice versa 
• When Run Type=C, E, or N, the only acceptable value is ‘Not Applicable’ (BIU=1) 
 
Data Source Hierarchy 
• EMS Provider  
 
Other Associated Elements 
• MechanismOfInjury 
• RunType 
• ProviderImpression 
• Common Null Values 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

163 
 
MECHANISM OF INJURY 
 
Tag Name   
• MechanismOfInjury 
 
Definition 
Checkboxes indicating how the patient was injured 
 
Technical Information 
XSD Data Type   xs:string    Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
2 Maximum 
Constraint 
2 
 
Field Values 
SB Seat Belt CS Car Seat/Booster TD Telemetry Data 
AB Air Bag MM Motorcycle/Moped AC Anticoagulants 
EV Enclosed Vehicle FA Fall SC Special 
Considerations 
EJ  Ejected 10 Fall >10 ft AN Animal Bite 
EX Extricated TA Taser CR Crush 
12 >12 inches, occupied AS Assault ES Electrical Shock 
18 >18 inches, unoccupied ST Stabbing TB Thermal Burn 
SF Survived Fatal Accident GS GSW WR Work-Related 
20 Impact > 20mph SP Sports/Recreation UN Unknown 
RT Ped/Bike Runover/Thrown/ > 
20mph 
SA Self-Inflict’d/Acc. OT Other 
PB Ped/Bike ≤ 20mph SI Self-Inflict’d/Int.   
HL Helmet HE Hazmat Exposure   
 
Additional Information 
• Patients with a mechanism of injury documented must also have a trauma complaint 
and provider impression code documented – and vice versa 
• Cannot send duplicate copies of the same mechanism of injury 
 
Data Source Hierarchy 
• EMS Provider  
 
Other Associated Elements 
• Complaint 
• ProviderImpression 
• ExtricationTime 
• Common Null Values 
 
  

164 
 
TIME EXTRICATED 
 
Tag Name   
• ExtricationTime 
 
Definition 
Time of day that the patient was removed from the vehicle when use of a pneumatic tool 
was required  
 
Technical Information 
XSD Data Type   xs:time     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
 
Field Values 
• Collected as HH:MM:SS 
• Use 24-hour clock 
 
Additional Information 
• Required if MOI= EX 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• MechanismOfInjury 
• Common Null Values 
 
 
  

165 
 
IMPRESSION 
 
Tag Name   
• ProviderImpression 
 
Definition 
Four-letter codes representing the paramedic’s impression of the patient’s 
presentation 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
4 Maximum 
Constraint 
4 
 
Field Values 
ABOP Abdominal Pain/Problems ELCT Electrocution PREG Pregnancy Complications 
AGDE Agitated Delirium ENTP ENT/Dental Emergencies LABR Pregnancy/Labor 
CHOK Airway 
Obstruction/Choking 
NOBL Epistaxis RARF Respiratory Arrest/Failure 
ETOH Alcohol Intoxication EXNT Extremity Pain/Swelling – 
Non- Traumatic 
SOBB Resp. 
Distress/Bronchospasm 
ALRX Allergic Reaction EYEP Eye Problem – Unspecified RDOT Resp. Distress/Other 
ALOC ALOC – Not 
Hypoglycemia or Seizure 
FEVR Fever CHFF Resp. Distress/Pulmonary 
Edema/CHF 
ANPH Anaphylaxis GUDO Genitourinary Disorder – 
Unspecified 
SEAC Seizure – Active 
PSYC Behavioral/Psychiatric 
Crisis 
DCON HazMat Exposure SEPI Seizure – Postictal 
BPNT Body Pain – Non 
Traumatic 
HPNT Headache – Non-
Traumatic 
SEPS Sepsis 
BRUE BRUE HYPR Hyperglycemia SHOK Shock 
BURN Burns HYTN Hypertension SMOK Smoke Inhalation 
COMO Carbon Monoxide HEAT Hyperthermia STNG Stings/Venomous Bites 
CANT Cardiac Arrest– Non-
Traumatic 
HYPO Hypoglycemia STRK Stroke/CVA/TIA 
DYSR Cardiac Dysrhythmia HOTN Hypotension DRWN Submersion/Drowning 
CPNC Chest Pain – Not Cardiac COLD Hypothermia/Cold Injury SYNC Syncope/Near Syncope 
 CPMI Chest Pain – STEMI INHL Inhalation Injury CABT Traumatic Arrest – Blunt 
CPSC Chest Pain – Suspected 
Cardiac 
LOGI Lower GI Bleeding CAPT Traumatic Arrest – 
Penetrating 
BRTH Childbirth (Mother) FAIL Medical Device 
Malfunction – Fail 
TRMA Traumatic Injury 
COFL Cold/Flu Symptoms NAVM Nausea/Vomiting UPGI Upper GI Bleeding 
DRHA Diarrhea BABY Newborn VABL Vaginal Bleeding 
DIZZ Dizziness/Vertigo NOMC No Medical Complaint WEAK Weakness – General 
DEAD DOA – Obvious Death ODPO Overdose/Poisoning/Ingest
ion 
  
DYRX Dystonic Reaction PALP Palpitations   
 
 

166 
 
Additional Information 
• REQUIRED on all records, except when run type=C, E, or N 
• When Run Type=C, E, or N, the only acceptable value is ‘Not Applicable’ (BIU=1) 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Complaint 
• Common Null Values 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

167 
 
ALLERGIC TO ASA? 
 
Tag Name   
• AllergicASA 
 
Definition 
Checkbox indicating whether the patient is allergic to aspirin 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum 
Constraint 
1 
 
Field Values 
• Y  Yes 
• N  No   
 
Data Source Hierarchy 
• Patient 
• EMS Provider  
 
Other Associated Elements 
• Common Null Values  
 
  

168 
 
SUSPECTED ETOH? 
 
Tag Name   
• ETOHSuspected 
 
Definition 
Checkbox indicating that statements by the patient, family, or bystanders and/or the 
situation and behavior suggest the patient has ingested alcohol 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum 
Constraint 
1 
 
Field Values 
• Y  Yes  
• N  No 
 
Data Source Hierarchy 
• Patient 
• Family Member 
• Caregiver 
• EMS Provider 
• Bystander 
 
Other Associated Elements 
• Common Null Values 
 
  

169 
 
SUSPECTED DRUGS? 
 
Tag Name   
• DrugsSuspected 
 
Definition 
Checkbox indicating that statements by the patient, family, or bystanders and/or the 
situation and behavior suggest the patient has used drugs 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum 
Constraint 
1 
 
Field Values 
• Y  Yes  
• N  No 
 
Data Source Hierarchy 
• Patient 
• Family Member 
• Caregiver 
• EMS Provider 
• Bystander 
 
Other Associated Elements 
• IfYes 
• Route 
• Common Null Values 
 
 
 
 
 
  

170 
 
IF YES: 
 
Tag Name   
• IfYes 
 
Definition 
Checkbox(es) indicating what drug(s) the patient has used 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
3 Maximum 
Constraint 
3 
 
Field Values 
• AMP Amphetamines 
• HER Heroin 
• COC Cocaine 
• THC Cannabis 
• OOP Other Opioid 
• OTH Other  
 
Data Source Hierarchy 
• Patient 
• Family Member 
• Caregiver 
• EMS Provider 
• Bystander 
 
Other Associated Elements 
• DrugsSuspected 
• Route 
• Common Null Values 
 
  

171 
 
ROUTE 
 
Tag Name   
• Route 
 
Definition 
Checkbox indicating what route the patient utilized to administer drug(s) 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
3 Maximum 
Constraint 
3 
 
Field Values 
• INJ Injected 
• ING Ingested 
• INH Inhaled 
• OTH Other  
 
Data Source Hierarchy 
• Patient 
• Family Member 
• Caregiver 
• EMS Provider 
• Bystander 
 
Other Associated Elements 
• DrugsSuspected 
• IfYes 
• Common Null Values 
 
  

172 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
PHYSICAL SIGNS 
 
 
 
 
 
 
 
 
 
 

173 
 
PUPILS 
 
Tag Name   
• Pupil 
 
Definition 
Checkboxes indicating the findings from assessment of the patient’s initial pupillary 
response to light 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
P   PERL I     Pinpoint S   Sluggish F   Fixed & Dilated 
C   Cataracts U   Unequal N   Patient’s Normal  
 
Additional Information 
• If a value of “N” is documented, another value must also be entered, for example “S”  
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Common Null Values 

174 
 
RESP 
 
Tag Name   
• Resp 
 
Definition 
Checkboxes indicating findings from initial assessment of the patient’s respiratory system 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
N   Normal R   Rales 
C   Clear A   Apnea 
W   Wheezes G   Snoring 
H   Rhonchi J   JVD (Jugular Venous Distension) 
U   Unequal M   AMU (Accessory Muscle Use) 
S   Stridor L   Labored 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• TidalVolume 
• Common Null Values 

175 
 
TIDAL VOLUME 
 
Tag Name   
• TidalVolume  
 
Definition 
Checkbox indicating the depth of inspiration observed during the initial assessment of the 
patient’s respiratory system 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• N   Normal 
• +   Increased 
• -    Decreased 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Resp 
• Common Null Values 
 

176 
 
SKIN 
 
Tag Name   
• Skin 
 
Definition 
Checkboxes indicating findings from assessment of the patient’s initial skin signs 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
N   Normal H    Hot 
C   Cyanotic L    Cold 
P   Pale D   Diaphoretic 
F   Flushed  
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Common Null Values 
 

177 
 
CAP REFILL 
 
Tag Name   
• CapillaryRefill 
 
Definition 
Checkbox indicating the findings from assessment of the patient’s initial capillary refill time  
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• R   Normal 
• E   Delayed 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Skin 
• Common Null Values 

178 
 
FIRST 12 LEAD TIME   
 
Tag Name   
• Lead12Time1st 
 
Definition 
Time of day the first 12-lead ECG was performed 
 
Technical Information 
XSD Data Type   xs:time     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
 
Field Values 
• Collected as HH:MM:SS 
• Use 24-hour clock 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• SoftwareInterpretation1st 
• EMSInterpretation1st 
• Artifact1st 
• WavyBaseline1st 
• PacedRhythm1st 
• Lead121stTransmitted 
• Common Null Values 
 

179 
 
SOFTWARE INTERPRETATION   
 
Tag Name   
• SoftwareInterpretation1st 
 
Definition 
Checkbox indicating the software interpretation of the 1
st
 12-lead ECG performed 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
2 Maximum Constraint 2 
 
Field Values 
• NL   Normal 
• AB   Abnormal 
• MI    STEMI 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Lead12Time1st 
• EMSInterpretation1st 
• Artifact1st 
• WavyBaseline1st 
• PacedRhythm1st 
• Lead121stTransmitted 
• Common Null Values 
 
  

180 
 
EMS INTERPRETATION   
 
Tag Name   
• EMSInterpretation1st 
 
Definition 
Checkbox indicating EMS personnel’s interpretation of the 1
st
 12-lead ECG performed 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
2 Maximum Constraint 2 
 
Field Values 
• NL   Normal 
• AB   Abnormal 
• MI    STEMI 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Lead12Time1st 
• SoftwareInterpretation1st 
• Artifact1st 
• WavyBaseline1st 
• PacedRhythm1st 
• Lead121stTransmitted 
• Common Null Values 
 
  

181 
 
ARTIFACT   
 
Tag Name   
• Artifact1st 
 
Definition 
Checkbox indicating whether artifact was observed on the 1
st
 12-lead ECG performed 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• Y  Yes 
• N  No 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Lead12Time1st 
• SoftwareInterpretation1st 
• EMSInterpretation1st 
• WavyBaseline1st 
• PacedRhythm1st 
• Lead121stTransmitted 
• Common Null Values 
 
  

182 
 
WAVY BASELINE   
 
Tag Name   
• WavyBaseline1st 
 
Definition 
Checkbox indicating whether the baseline of the ECG tracing moves with respiration on the 
1
st
 12-lead ECG performed 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• Y  Yes 
• N  No 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Lead12Time1st 
• SoftwareInterpretation1st 
• EMSInterpretation1st 
• Artifact1st 
• PacedRhythm1st 
• Lead121stTransmitted 
• Common Null Values 
 
  

183 
 
PACED RHYTHM   
 
Tag Name   
• PacedRhythm1st 
 
Definition 
Checkbox indicating whether a pacemaker generated rhythm was present on the 1
st
 12-
lead ECG performed 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• Y  Yes 
• N  No 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Lead12Time1st 
• SoftwareInterpretation1st 
• EMSInterpretation1st 
• Artifact1st 
• WavyBaseline1st 
• Lead121stTransmitted 
• Common Null Values 
 
  

184 
 
FIRST 12-LEAD TRANSMITTED?  
 
Tag Name   
• Lead121stTransmitted 
 
Definition 
Checkbox indicating whether the first 12-lead performed was transmitted to the receiving 
facility 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• Y   Yes 
• N   No 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Lead12Time1st 
• SoftwareInterpretation1st 
• EMSInterpretation1st 
• Artifact1st 
• WavyBaseline1st 
• PacedRhythm1st 
• Common Null Values 
  

185 
 
SECOND 12 LEAD TIME   
 
Tag Name   
• Lead12Time2nd 
 
Definition 
Time of day the second 12-lead ECG was performed 
 
Technical Information 
XSD Data Type   xs:time     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
 
Field Values 
• Collected as HH:MM:SS 
• Use 24-hour clock 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• SoftwareInterpretation2nd 
• EMSInterpretation2nd 
• Artifact2nd 
• WavyBaseline2nd 
• PacedRhythm2nd 
• Lead122ndTransmitted 
• Common Null Values 
 

186 
 
SOFTWARE INTERPRETATION   
 
Tag Name   
• SoftwareInterpretation2nd 
 
Definition 
Checkbox indicating the software interpretation of the 2
nd
 12-lead ECG performed 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
2 Maximum Constraint 2 
 
Field Values 
• NL   Normal 
• AB   Abnormal 
• MI    STEMI 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Lead12Time2nd 
• EMSInterpretation2nd 
• Artifact2nd 
• WavyBaseline2nd 
• PacedRhythm2nd 
• Lead122ndTransmitted 
• Common Null Values 
 
  

187 
 
EMS INTERPRETATION   
 
Tag Name   
• EMSInterpretation2nd 
 
Definition 
Checkbox indicating EMS personnel’s interpretation of the 2
nd
 12-lead ECG performed 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
2 Maximum Constraint 2 
 
Field Values 
• NL   Normal 
• AB   Abnormal 
• MI    STEMI 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Lead12Time2nd 
• SoftwareInterpretation2nd 
• Artifact2nd 
• WavyBaseline2nd 
• PacedRhythm2nd 
• Lead122ndTransmitted 
• Common Null Values 
 
  

188 
 
ARTIFACT   
 
Tag Name   
• Artifact2nd 
 
Definition 
Checkbox indicating whether artifact was observed on the 2
nd
 12-lead ECG performed 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• Y  Yes 
• N  No 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Lead12Time2nd 
• SoftwareInterpretation2nd 
• EMSInterpretation2nd 
• WavyBaseline2nd 
• PacedRhythm2nd 
• Lead122ndTransmitted 
• Common Null Values 
 
  

189 
 
WAVY BASELINE   
 
Tag Name   
• WavyBaseline2nd 
 
Definition 
Checkbox indicating whether the baseline of the ECG tracing moves with respiration on the 
2
nd
 12-lead ECG performed 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• Y  Yes 
• N  No 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Lead12Time2nd 
• SoftwareInterpretation2nd 
• EMSInterpretation2nd 
• Artifact2nd 
• PacedRhythm2nd 
• Lead122ndTransmitted 
• Common Null Values 
 
  

190 
 
PACED RHYTHM   
 
Tag Name   
• PacedRhythm2nd 
 
Definition 
Checkbox indicating whether a pacemaker generated rhythm was present on the 2
nd
 12-
lead ECG performed 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• Y  Yes 
• N  No 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Lead12Time2nd 
• SoftwareInterpretation2nd 
• EMSInterpretation2nd 
• Artifact2nd 
• WavyBaseline2nd 
• Lead122ndTransmitted 
• Common Null Values 
 
  

191 
 
SECOND 12-LEAD TRANSMITTED?  
 
Tag Name   
• Lead122ndTransmitted 
 
Definition 
Checkbox indicating whether the second 12-lead performed was transmitted to the 
receiving facility 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• Y   Yes 
• N   No 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Lead12Time2nd 
• SoftwareInterpretation2nd 
• EMSInterpretation2nd 
• Artifact2nd 
• WavyBaseline2nd 
• PacedRhythm2nd 
• Common Null Values 
 
 
 
  

192 
 
 
 
 
 
 
 
SPECIAL CIRCUMSTANCES 
  

193 
 
DNR/AHCD/POLST? 
 
Tag Name   
• DNR_AHCD_POLST 
 
Definition 
Checkbox indicating presence of a valid DNR, Advance Healthcare Directive (AHCD), 
or Physician Order for Life Sustaining Treatment (POLST) form for the patient 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum 
Constraint 
1 
 
Field Values 
• Y  Yes 
• N  No 
 
Data Source Hierarchy 
• Patient 
• Family Member 
• Caregiver 
• EMS Provider 
 
Other Associated Elements 
• Common Null Values 
  

194 
 
SUSPECTED ABUSE/NEGLECT? 
 
Tag Name   
• AbuseSuspected 
 
Definition 
Checkbox indicating whether family violence, neglect or abuse is suspected 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum 
Constraint 
1 
 
Field Values 
• Y  Yes  
• N  No 
 
Additional Information 
• Should have additional documentation of Agency Reported To and 
Reporting/Confirmation number, within the EMS Report Form 
 
Data Source Hierarchy 
• Patient 
• Caregiver 
• Family Member 
• EMS Provider 
 
Other Associated Elements 
• Common Null Values 
  

195 
 
POISON CONTROL CONTACTED? 
 
Tag Name   
• PoisonControl 
 
Definition 
Checkbox indicating whether poison control was contacted 
  
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum 
Constraint 
1 
 
Field Values 
• Y  Yes 
• N  No 
 
Data Source Hierarchy 
• 9-1-1 or Dispatch Center 
• EMS Provider 
• Patient 
• Family Member 
• Caregiver 
 
Other Associated Elements 
• Common Null Values 
 
  

196 
 
DPH NOTIFIED? 
 
Tag Name   
• DPHNotified 
 
Definition 
Checkbox indicating whether Department of Public Health was contacted 
  
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum 
Constraint 
1 
 
Field Values 
• Y  Yes 
• N  No 
 
Additional Information 
• If ProviderImpression is ‘DRWN’, must have a valid value (null value is not allowed). 
 
Data Source Hierarchy 
• 9-1-1 or Dispatch Center 
• EMS Provider 
• Patient 
• Family Member 
• Caregiver 
 
Other Associated Elements 
• Provider Impression 
• Common Null Values 
  

197 
 
CONTACTED MED. CIRC. SUPPORT? 
 
Tag Name   
• ContactMCS 
 
Definition 
Checkbox indicating whether the mechanical circulatory support coordinator was contacted 
  
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum 
Constraint 
1 
 
Field Values 
• Y  Yes 
• N  No 
 
Data Source Hierarchy 
• EMS Provider 
• Patient 
• Family Member 
• Caregiver 
 
Other Associated Elements 
• Common Null Values 
 
  

198 
 
≥ 20 WKS IUP? 
 
Tag Name   
• TwentywksIUP 
 
Definition 
Checkbox indicating whether the patient is greater than or equal to twenty weeks of 
intrauterine pregnancy, if applicable 
  
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum 
Constraint 
1 
 
Field Values 
• Y  Yes 
• N  No 
 
Data Source Hierarchy 
• Patient 
• Family Member 
• Caregiver 
 
Other Associated Elements 
• Common Null Values 
  

199 
 
_ WKS 
 
Tag Name   
• WksIUP 
 
Definition 
Space indicating the number of weeks of intrauterine pregnancy, if applicable 
  
Technical Information 
XSD Data Type   xs:nonNegativeInteger    Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum 
Constraint 
2 
 
Field Values 
• Up to two-digit positive numeric value 
 
Data Source Hierarchy 
• Patient 
• Family Member 
• Caregiver 
 
Other Associated Elements 
• Common Null Values 
  

200 
 
BARRIERS TO PATIENT CARE 
 
Tag Name   
• BarrierstoPatientCare 
 
Definition 
Specific barriers that may potentially impact patient care 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum 
Constraint 
1 
 
Field Values 
H   Hearing  L   Language  
P   Physical S   Speech  
O   Other  
 
Data Source Hierarchy 
• Patient 
• Family Member 
• Caregiver 
• EMS Provider 
 
Other Associated Elements 
• Common Null Values 
  

201 
 
 
 
 
 
 
 
 
 
 
VITAL SIGNS 

202 
 
VITAL SIGN TIME 
 
Tag Name   
• Time  
 
Definition 
Time of day the patient’s vital signs were obtained 
 
Technical Information 
XSD Data Type   xs:time     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
 
Field Values 
• Collected as HH:MM:SS 
• Use 24-hour clock 
 
Additional Information 
• Max occurrence for this field is 20 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• TMNumber 
• SBP 
• DBP 
• Pulse 
• RespRate 
• O2Sat 
• PainScale 
• Temp 
• TempUnit 
• CO2 
• Common Null Values 
 

203 
 
TM # 
 
Tag Name   
• TMNumber 
 
Definition 
The number of the team member who obtained the patient’s vital signs  
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• Free text 
  
Additional Information 
• Max occurrence for this field is 20 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Time 
• SBP 
• DBP 
• Pulse 
• RespRate 
• O2Sat 
• PainScale 
• Temp 
• TempUnit 
• CO2 
• Common Null Values 
 

204 
 
SYSTOLIC BLOOD PRESSURE 
 
Tag Name   
• SBP 
 
Definition 
Numeric value of the patient’s systolic blood pressure 
 
Technical Information 
XSD Data Type   xs:nonNegativeInteger   
  
Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 3 
 
Field Values 
• Up to three-digit positive numeric value 
 
Additional Information 
• Max occurrence for this field is 20 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Time 
• TMNumber 
• DBP 
• Pulse 
• RespRate 
• O2Sat 
• PainScale 
• Temp 
• TempUnit 
• CO2 
• Common Null Values 
 

205 
 
DIASTOLIC BLOOD PRESSURE 
 
Tag Name   
• DBP 
 
Definition 
Numeric value of the patient’s diastolic blood pressure 
 
Technical Information 
XSD Data Type   xs:nonNegativeInteger  
  
Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 3 
 
Field Values 
• Up to three-digit positive numeric value 
 
Additional Information 
• Max occurrence for this field is 20 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Time 
• TMNumber 
• SBP 
• Pulse 
• RespRate 
• O2Sat 
• PainScale 
• Temp 
• TempUnit 
• CO2 
• Common Null Values 
 

206 
 
PULSE   
 
Tag Name   
• Pulse 
 
Definition 
Numeric value of the patient’s palpated pulse rate 
 
Technical Information 
XSD Data Type   xs:nonNegativeInteger  Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 3 
 
Field Values 
• Up to three-digit positive numeric value 
 
Additional Information 
• Max occurrence for this field is 20 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Time 
• TMNumber 
• SBP 
• DBP 
• RespRate 
• O2Sat 
• PainScale 
• Temp 
• TempUnit 
• CO2 
• Common Null Values 
 

207 
 
RESPIRATORY RATE   
 
Tag Name   
• RespRate 
 
Definition 
Numeric value of the patient’s unassisted respiratory rate 
 
Technical Information 
XSD Data Type   xs:nonNegativeInteger   
  
Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 2 
 
Field Values 
• Up to two-digit positive numeric value 
 
Additional Information 
• Max occurrence for this field is 20 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Time 
• TMNumber 
• SBP 
• DBP 
• O2Sat 
• PainScale 
• Temp 
• TempUnit 
• CO2 
• Common Null Values 
 
 

208 
 
O2 SAT 
 
Tag Name   
• O2Sat 
 
Definition 
Numeric value of the patient’s oxygen saturation  
 
Technical Information 
XSD Data Type   xs:nonNegativeInteger   
  
Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 3 
 
Field Values 
• Up to three-digit positive numeric value from 0 to 100 
 
Additional Information 
• Max occurrence for this field is 20 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Time 
• TMNumber 
• SBP 
• DBP 
• RespRate 
• PainScale 
• Temp 
• TempUnit 
• CO2 
• Common Null Values 
 

209 
 
PAIN  
 
Tag Name   
• PainScale 
 
Definition 
Numeric value indicating the patient’s subjective pain level 
 
Technical Information 
XSD Data Type   xs:nonNegativeInteger Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 2 
 
Field Values 
0 No Pain 6 Moderate Pain 
1 Some Discomfort 7 Moderate Pain 
2 Some Discomfort 8 Severe Pain 
3 Having Discomfort 9 Severe Pain 
4 Having Discomfort 10  Most Severe Pain 
5 Mild Pain  
 
Additional Information 
• Max occurrence for this field is 20 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Time 
• TMNumber 
• SBP 
• DBP 
• RespRate 
• O2Sat 
• Temp 
• TempUnit 
• CO2 
• Common Null Values 
 
  

210 
 
TEMP  
 
Tag Name   
• Temp 
 
Definition 
Numeric value indicating the patient’s recorded temperature 
 
Technical Information 
XSD Data Type   xs:decimal Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
2 Maximum Constraint 5 
 
Field Values 
• Up to five-digit positive numeric value between 25 and 110 
 
Additional Information 
• Max occurrence for this field is 20 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Time 
• TMNumber 
• SBP 
• DBP 
• RespRate 
• PainScale 
• O2Sat 
• TempUnit 
• CO2 
• Common Null Values 
 
  

211 
 
TEMP UNIT 
 
Tag Name   
• TempUnit 
 
Definition 
Unit of measurement for the patient’s recorded temperature 
 
Technical Information 
XSD Data Type   xs:string Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• C  Celsius 
• F  Fahrenheit 
 
Additional Information 
• Max occurrence for this field is 20 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Time 
• TMNumber 
• SBP 
• DBP 
• RespRate 
• PainScale 
• O2Sat 
• Temp 
• CO2 
• Common Null Values 
 
  

212 
 
CO2 
 
Tag Name   
• CO2 
 
Definition 
The subsequent numeric ETCO
2
 reading by capnography, if applicable  
 
Technical Information 
XSD Data Type   xs:nonNegativeInteger   
  
Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 3 
 
Field Values 
• Up to three-digit positive numeric value 
 
Additional Information 
• Max occurrence for this field is 20 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Time 
• TMNumber 
• SBP 
• DBP 
• RespRate 
• PainScale 
• O2Sat 
• Temp 
• TempUnit 
• Common Null Values 
 
 
 
 
 
 
 
 
 
 
 

213 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
CARDIAC ARREST 

214 
 
DATE OF ARREST 
 
Tag Name   
• ArrestDate  
 
Definition 
Date patient first went into cardiac arrest 
  
Technical Information 
XSD Data Type   xs:date     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum Value   07/01/2021 Maximum Value Current Date 
 
Field Values 
• Collected as standard XML format YYYY-MM-DD 
 
Data Source Hierarchy 
• 9-1-1 or Dispatch Center 
• EMS Provider 
 
Other Associated Elements 
• FirstArrestTime 
• Common Null Values 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

215 
 
TIME OF 1
ST
 ARREST  
 
Tag Name   
• FirstArrestTime 
 
Definition 
Time of day the patient first went into cardiac arrest 
  
Technical Information 
XSD Data Type   xs:time     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
 
Field Values 
• Collected as HH:MM:SS 
• Use 24-hour clock 
 
Data Source Hierarchy 
• 9-1-1 or Dispatch Center 
• EMS Provider 
 
Other Associated Elements 
• ArrestDate 
• Common Null Values 
 
  

216 
 
ARREST WITNESSED BY   
 
Tag Name   
• ArrestWitnessedBy 
 
Definition 
Checkbox indicating who witnessed the patient first going into cardiac arrest 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
2 Maximum Constraint 2 
 
Field Values 
FE First Responder EMS 
(assessment unit, truck, etc.) 
LE    Law Enforcement TU Transport Unit  
(squad or rescue) 
FM
     
Family Member LP     Lay Person   
HP Healthcare Provider NO None   
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Common Null Values 
 
  

217 
 
PRESUMED CARDIAC ARREST ETIOLOGY   
 
Tag Name   
• PresumedArrestEtiology 
 
Definition 
Checkbox indicating what likely caused the patient to first go into cardiac arrest 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
2 Maximum Constraint 2 
 
Field Values 
DS Drowning/Submersion OD  Drug Overdose SE Sepsis 
EL Electrocution PC     Presumed Cardiac 
Etiology 
TR Trauma 
EX Exsanguination/Hemorrhage 
(non-traumatic) 
RA Respiratory/Asphxia OT Other 
 
Additional Information 
• Cardiac arrests due to drowning or hanging, are considered to be due to asphyxia not 
trauma.   
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Common Null Values 
 
  

218 
 
IF OTHER, PLEASE EXPLAIN   
 
Tag Name   
• IfOtherExplain 
 
Definition 
Field provided to specify why “Other” was selected as the presumed cardiac arrest etiology 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
2 Maximum Constraint 60 
 
Field Values 
• Free text 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• PresumedArrestEtiology 
• Common Null Values 
 
  

219 
 
WERE DISPATCHER CPR INSTRUCTIONS PROVIDED?   
 
Tag Name   
• DispatchCPRInstructions 
 
Definition 
Checkbox indicating whether CPR instructions were provided by the dispatcher to the 9-1-1 
caller 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• Y  Yes 
• N  No 
• U  Unknown 
 
Data Source Hierarchy 
• 9-1-1 Caller 
• EMS Provider 
 
Other Associated Elements 
• Common Null Values 
 
  

220 
 
RESUSCITATION ATTEMPTED BY AN ACLS PROVIDER?   
 
Tag Name   
• ACLSResuscitation 
 
Definition 
Checkbox indicating whether the Advanced Cardiovascular Life Support (ACLS) provider 
on scene provided resuscitation 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• Y  Yes 
• N  No 
 
Additional Information 
• Includes CPR, defibrillation, and/or other related ACLS techniques 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Common Null Values 
 
  

221 
 
WHO INITIATED CPR?   
 
Tag Name   
• WhoInitiatedCPR 
 
Definition 
Checkbox indicating who initiated CPR on the patient 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
2 Maximum Constraint 2 
 
Field Values 
FE First Responder EMS 
(assessment unit, truck, etc.) 
LE    Law Enforcement TU Transport Unit  
(squad or rescue) 
FM
     
Family Member LP     Lay Person   
HP Healthcare Provider NO No CPR Performed   
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• TimeOfByStanderCPR 
• TypeOfBystanderCPR 
• Common Null Values 
 
  

222 
 
ARREST TO CPR  
 
Tag Name   
• ArresttoCPR 
 
Definition 
The number of minutes from the time of cardiopulmonary arrest to the time citizen or EMS 
CPR is initiated 
 
Technical Information 
XSD Data Type   xs:nonNegativeInteger   
  
Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 2 
 
Field Values 
• Up to two-digit positive numeric value 
 
Additional Information 
• Collected as minutes 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• ArrestDetailsReasonForWithholding 
• EMSCPRTime 
• Time814 
• Common Null Values 
 
  

223 
 
TIME OF BYSTANDER CPR  
 
Tag Name   
• TimeOfByStanderCPR 
 
Definition 
Time of day a bystander began to perform CPR on the patient 
  
Technical Information 
XSD Data Type   xs:time     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
 
Field Values 
• Collected as HH:MM:SS 
• Use 24-hour clock 
 
Additional Information 
• Bystander includes family members, healthcare providers, law enforcement, and lay 
people 
 
Data Source Hierarchy 
• Family Member 
• Lay Person 
• Law Enforcement 
• Healthcare Provider 
• EMS Provider 
 
Other Associated Elements 
• WhoInitiatedCPR 
• TypeOfBystanderCPR 
• Common Null Values 
 
  

224 
 
TYPE OF BYSTANDER CPR  
 
Tag Name   
• TypeOfBystanderCPR 
 
Definition 
Checkbox indicating the type of CPR provided by a bystander 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 2 
 
Field Values 
• C  Compressions Only 
• CV  Compressions and Ventilations 
• V  Ventilations Only 
• U  Unknown 
 
Data Source Hierarchy 
• Family Member 
• Lay Person 
• Law Enforcement 
• Healthcare Provider  
• EMS Provider 
 
Other Associated Elements 
• WhoInitiatedCPR 
• TimeOfByStanderCPR 
• Common Null Values 
 
  

225 
 
EMS CPR TIME  
 
Tag Name   
• EMSCPRTime 
 
Definition 
Time of day cardiopulmonary resuscitation was begun by EMS personnel 
 
Technical Information  
XSD Data Type   xs:time     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
 
Field Values 
• Collected as HH:MM:SS 
• Use 24-hour clock 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• WhoInitiatedCPR 
• ArresttoCPR 
• Common Null Values 
 
  

226 
 
WAS AN AED APPLIED?  
 
Tag Name   
• AEDApplied 
 
Definition 
Checkbox indicating whether an Automatic External Defibrillator (AED) was applied to the 
patient 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 3 
 
Field Values 
• YWD  Yes, with defibrillation 
• YWO  Yes, without defibrillation 
• N  No 
 
Data Source Hierarchy 
• Family Member 
• Lay Person 
• Law Enforcement 
• Healthcare Provider  
• EMS Provider 
 
Other Associated Elements 
• WhoFirstAppliedAED 
• WhoFirstDefibrillated 
• TimeOfAEDShock 
• Common Null Values 
 
  

227 
 
WHO FIRST APPLIED AED?   
 
Tag Name   
• WhoFirstAppliedAED 
 
Definition 
Checkbox indicating who first applied the AED to the patient 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
2 Maximum Constraint 2 
 
Field Values 
FE First Responder EMS 
(assessment unit, truck, etc.) 
HP Healthcare Provider LP
     
Lay Person 
FM
     
Family Member LE    Law Enforcement TU Transport Unit  
(squad or rescue) 
 
Additional Information 
• If AEDApplied is ‘YWD’ or ‘YWO’, must have a valid value (Null value is not allowed) 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• AEDApplied 
• WhoFirstDefibrillated 
• TimeofAEDShock 
• Common Null Values 
 
  

228 
 
WHO FIRST DEFIBRILLATED THE PATIENT?  
 
Tag Name   
• WhoFirstDefibrillated 
 
Definition 
Checkbox indicating who first defibrillated the patient 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
2 Maximum Constraint 2 
 
Field Values 
FE First Responder EMS 
(assessment unit, truck, etc.) 
LE    Law Enforcement TU Transport Unit  
(squad or rescue) 
FM
     
Family Member LP     Lay Person   
HP Healthcare Provider NO Patient was not 
defibrillated 
  
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• AEDApplied 
• WhoFirstAppliedAED 
• TimeofAEDShock 
• Common Null Values 
 
  

229 
 
TIME OF AED SHOCK 
 
Tag Name   
• TimeOfAEDShock 
 
Definition 
Time of day a shock was delivered to the patient by an AED 
  
Technical Information 
XSD Data Type   xs:time     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
 
Field Values 
• Collected as HH:MM:SS 
• Use 24-hour clock 
 
Data Source Hierarchy 
• Family Member 
• Lay Person 
• Law Enforcement 
• Healthcare Provider 
• EMS Provider 
 
Other Associated Elements 
• Common Null Values 
 
  

230 
 
FIRST ARREST RHYTHM OF PATIENT  
 
Tag Name   
• FirstArrestRhythm 
 
Definition 
Checkbox indicating the first cardiac rhythm observed during the initial cardiac arrest 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
2 Maximum Constraint 3 
 
Field Values 
ASY Asystole UNS Unknown Non-
Shockable Rhythm 
(AED) 
VF Ventricular 
Fibrillation 
PEA    Pulseless Electrical Activity US    Unknown Shockable 
Rhythm (AED) 
VT   Ventricular 
Tachycardia 
 
Additional Information 
• If ProviderImpression is ‘CANT’, ‘CABT’, or ‘CAPT’, must have a valid value (Null value 
is not accepted) except when ProviderImpression= ‘CABT’ or ‘CAPT’ and 
ReasonForWithholding has a non-null value 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Common Null Values 
 
  

231 
 
MECHANICAL CPR DEVICE USED?  
 
Tag Name   
• MechanicalCPRDeviceUsed 
 
Definition 
Checkbox indicating whether a mechanical device was used to provide CPR to the patient 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• Y  Yes 
• N  No 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• IfYesSpecify 
• Common Null Values 
 
  

232 
 
IF YES, PLEASE SPECIFY   
 
Tag Name   
• IfYesSpecify 
 
Definition 
Field provided to specify why what type of mechanical CPR device was used 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
2 Maximum Constraint 2 
 
Field Values 
• AP  AutoPulse 
• LU  Lucas 
• TH  Thumper 
• OT  Other 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• MechanicalCPRDeviceUsed 
• IfOtherSpecify 
• Common Null Values 
 
  

233 
 
IF OTHER, PLEASE SPECIFY   
 
Tag Name   
• IfOtherSpecify 
 
Definition 
Field provided to specify what other type of mechanical CPR device was used 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
2 Maximum Constraint 40 
 
Field Values 
• Free text 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• MechanicalCPRDeviceUsed 
• IfYesSpecify 
• Common Null Values 
 
  

234 
 
AUTOMATED CPR FEEDBACK DEVICE USED? 
 
Tag Name   
• AutomatedCPRFeedbackDevice 
 
Definition 
Checkbox indicating whether an automated CPR feedback device was used during CPR 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• Y  Yes 
• N  No 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Common Null Values 
 
  

235 
 
ITD USED? 
 
Tag Name   
• ITDUsed 
 
Definition 
Checkbox indicating whether an impedance threshold device (ITD) was used during CPR 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• Y  Yes 
• N  No 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Common Null Values 
 
  

236 
 
RESTORATION OF PULSE TIME   
 
Tag Name   
• RestorationofPulseTime 
 
Definition 
Time of day when return of spontaneous return of circulation (ROSC) occurred 
 
Technical Information 
XSD Data Type   xs:time     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
 
Field Values 
• Collected as HH:MM:SS 
• Use 24-hour clock 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• SustainedROSC 
• Common Null Values 
 
  

237 
 
SUSTAINED ROSC? 
 
Tag Name   
• SustainedROSC 
 
Definition 
Checkbox indicating whether sustained ROSC occurred, which is defined as persistent 
signs of circulation, with no chest compressions required, for at least twenty (20) 
consecutive minutes 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• Y  Yes 
• N  No 
• E  Arrived at ED prior to 20 minutes 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• RestorationofPulseTime 
• Common Null Values 
 

238 
 
END OF EVENT 
 
Tag Name   
• EndOfEvent 
 
Definition 
Checkbox indicating the end of the cardiac arrest event 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
2 Maximum Constraint 2 
 
Field Values 
• DN  Effort ceased due to DNR 
• OE  Ongoing resuscitation in ED 
• PF  Pronounced/TOR in field 
• PE  Pronounced in ED 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• ReasonForWithholding 
• Time814 
• ResuscitationDiscontinuedTime 
• Common Null Values 
 

239 
 
TIME OF 814 DEATH  
 
Tag Name   
• Time814 
 
Definition 
Time of day EMS personnel determines patient meets Reference 814 death criteria 
 
Technical Information 
XSD Data Type   xs:time     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
 
Field Values 
• Collected as HH:MM:SS 
• Use 24-hour clock 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• ArrestDetailsReasonForWithholding 
• ArresttoCPR 
• EMSCPRTime 
• Common Null Values 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

240 
 
PRONOUNCED TIME  
 
Tag Name   
• ResuscitationDiscontinuedTime 
 
Definition 
Time of day when patient was pronounced dead by the base hospital 
 
Technical Information 
XSD Data Type   xs:time     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
 
Field Values 
• Collected as HH:MM:SS 
• Use 24-hour clock 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• PatientPronouncedBy 
• PronouncedRhythm 
• Common Null Values 
 

241 
 
PRONOUNCED BY  
 
Tag Name   
• PatientPronouncedBy 
 
Definition 
The name of the base hospital physician that pronounced the patient dead 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 25 
 
Field Values 
• Free text 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• ResuscitationDiscontinuedTime 
• PronouncedRhythm 
• Common Null Values 
 

242 
 
REASON FOR WITHHOLDING RESUSCITATION   
 
Tag Name   
• ReasonForWithholding 
 
Definition 
Checkbox indicating why resuscitation was discontinued or withheld 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
2 Maximum Constraint 2 
 
Field Values 
BT   Blunt Trauma LI   Lividity OT    Other Reason 
DN   DNR/AHCD/POLST RI    Rigor  
FA   Family Request TR   Termination of Resuscitation (T.O.R) 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• EndOfEvent 
• Time814 
• Common Null Values 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

243 
 
RESUS D/C RHYTHM 
 
Tag Name   
• ResusDCRhythm 
 
Definition 
Two- or three-letter code identifying the cardiac rhythm reported when resuscitative 
measures were terminated or patient was pronounced dead by the base hospital 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
2 Maximum Constraint 3 
 
Field Values 
AGO   Agonal Rhythm PEA   Pulseless Electrical Activity 
ASY    Asystole VF      Ventricular Fibrillation 
IV        Idioventricular Rhythm  
 
Data Source Hierarchy 
• EMS Povider 
 
Other Associated Elements 
• ResuscitationDiscontinuedTime 
• PatientPronouncedBy 
• Common Null Values 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

244 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
THERAPIES 
 

245 
 
THERAPIES 
 
Tag Name   
• Therapy 
 
Definition 
Checkbox indicating what procedure(s) were performed on the patient 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
2 Maximum 
Constraint 
2 
 
Field Values 
HM Assisted with Home 
Meds 
OX Oxygen IV Intravenous Insertion 
BB Back Blows/Thrusts RE Restraints IO IntraOsseous 
Insertion 
BM BMV (Bag/ Mask 
ventilations) 
DI Distal CSM 
(Circulation/Sensation/Motor) 
Intact 
TH Needle Thoracostomy 
BS Breath Sounds SI Spinal Motion Restriction  VM Vagal Maneuvers 
CR Chest Rise IB CMS Intact- Before  TC TransCutaneous 
Pacing 
ET Existing Trach IA CMS Intact- After HB HOB Elevation 
NA OP 
(oropharyngeal)/NP 
(nasopharyngeal) 
airway 
SP Splint PP Standard PPE Usage 
CM Cooling Measures TS Traction Splint PC Contact PPE Usage 
DR Dressings CC C-Collar PA Aerosol PPE Usage 
IP Ice Pack BD Backboard PQ Tourniquet 
(Commercial) Applied 
PTA 
TQ Tourniquet BL Blood Glucose OT Other 
SU Suction AP CPAP   
HD Hemostatic Dressing FB Foreign Body Removal   
  
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• TMNumber 
• Common Null Values 
  
 
 

246 
 
TM # 
 
Tag Name   
• TMNumber 
 
Definition 
The identification number of EMS personnel who performed the procedure 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum 
Constraint 
1 
 
Field Values 
• Positive-numeric values only 
 
Data Source Hierarchy 
• EMS Provider  
 
Other Associated Elements 
• Therapy 
• Common Null Values 
 
 
  

247 
 
 
 
 
 
 
 
 
THERAPY DETAILS 
 
  

248 
 
CO2 
 
Tag Name   
• CO2 
 
Definition 
The initial numeric ETCO
2 
reading by capnography 
 
Technical Information 
XSD Data Type   xs:nonNegativeInteger  Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum 
Constraint 
3 
 
Field Values 
• Up to two-digit positive numeric value 
 
Data Source Hierarchy 
• EMS Provider  
 
Other Associated Elements 
• Therapy 
• Common Null Values 
  

249 
 
OXYGEN (L/MIN) 
 
Tag Name   
• O2Flow 
 
Definition 
Numeric value of the number of liters per minute of oxygen delivered to the patient 
 
Technical Information 
XSD Data Type   xs:nonNegativeInteger  Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum 
Constraint 
2 
 
Field Values 
• One- or two-digit positive numeric value between 2 and 15 
 
Additional Information 
• The oxygen delivery device used must also be indicated 
 
Data Source Hierarchy 
• EMS Provider  
 
Other Associated Elements 
• O2Via 
• Therapy 
• Common Null Values 
 
 

250 
 
OXYGEN VIA 
 
Tag Name   
• O2Via 
 
Definition 
Checkbox indicating the type of device used to deliver oxygen to the patient 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum 
Constraint 
1 
 
Field Values 
• N   Nasal Cannula 
• M   Mask 
 
Additional Information 
• The oxygen flow rate must also be indicated 
 
Data Source Hierarchy 
• EMS Provider  
 
Other Associated Elements 
• O2Flow 
• Therapy 
• Common Null Values 
 
 

251 
 
BLOOD GLUCOSE RESULT 
 
Tag Name   
• BloodGlucose 
 
Definition 
Numeric value of the patient’s blood glucose measurement 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum 
Constraint 
3 
 
Field Values 
• Up to three-digit numeric value 
• HI    High 
• LO   Low 
 
Additional Information 
• #1:  The initial blood glucose level 
• #2:  The second blood glucose level, if applicable 
• Do not send the same value more than once 
 
Data Source Hierarchy 
• EMS Provider  
 
Other Associated Elements 
• Therapy 
• Common Null Values 
 
 
  

252 
 
CPAP PRESSURE 
 
Tag Name   
• CPAPPressure 
 
Definition 
The pressure setting utilized during CPAP administration 
  
Technical Information 
XSD Data Type   xs:decimal     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum 
Constraint 
5 
 
Field Values 
• Can include up to two decimal places (format example 99.99) 
 
Additional Information  
• Recorded as centimeters of water (cm H
2
O)  
 
Data Source Hierarchy 
• EMS Provider  
 
Other Associated Elements 
• CPAPTime 
• Therapy 
• Common Null Values 
  

253 
 
CPAP TIME  
 
Tag Name   
• CPAPTime 
 
Definition 
Time of day when CPAP was started  
 
Technical Information 
XSD Data Type   xs:time     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
 
Field Values 
• Collected as HH:MM:SS 
• Use 24-hour clock 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• CPAPPressure 
• Therapy 
• Common Null Values 
 
 
  

254 
 
IV GAUGE 
 
Tag Name   
• IVGauge 
 
Definition 
The needle size used to start the IV line 
 
Technical Information 
XSD Data Type   xs:nonNegativeInteger  Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
2 Maximum 
Constraint 
2 
 
Field Values 
• 14  14 gauge 
• 16  16 gauge 
• 18  18 gauge 
• 20  20 gauge 
• 22  22 gauge 
• 24  24 gauge 
 
Data Source Hierarchy 
• EMS Provider  
 
Other Associated Elements 
• Therapy 
• Common Null Values 
 
 
  

255 
 
IO LENGTH 
 
Tag Name   
• IOLength 
 
Definition 
The needle length used to start the IO line 
 
Technical Information 
XSD Data Type   xs:nonNegativeInteger  Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
2 Maximum 
Constraint 
2 
 
Field Values 
• 15  15mm 
• 25  25mm 
• 45  45mm 
 
Data Source Hierarchy 
• EMS Provider  
 
Other Associated Elements 
• Therapy 
• Common Null Values 
  

256 
 
IO SITE 
 
Tag Name   
• IOSite 
 
Definition 
Location on the body where the IO line was started 
 
Technical Information 
XSD Data Type   xs:string Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
2 Maximum 
Constraint 
2 
 
Field Values 
• HU  Humerus 
• TA  Tibia 
 
Data Source Hierarchy 
• EMS Provider  
 
Other Associated Elements 
• Therapy 
• Common Null Values 
 
  

257 
 
TOTAL IV/IO FLUIDS RECEIVED  
 
Tag Name   
• TotalIVIOFluidsReceived 
 
Definition 
The total amount of intravenous or intraosseous fluids the patient received prior to arrival at 
the receiving facility 
 
Technical Information 
XSD Data Type   xs:nonNegativeInteger   
  
Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 4 
 
Field Values 
• Up to four-digit positive numeric value 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• IVGauge 
• IOGauge 
• IOSite 
• Common Null Values 
 
  

258 
 
NEEDLE THORACOSTOMY SITE 
 
Tag Name   
• NTSite 
 
Definition 
Location on the body where the needle thoracostomy was performed 
 
Technical Information 
XSD Data Type   xs:string  Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
2 Maximum 
Constraint 
2 
 
Field Values 
• 2I  2
nd
 ICS 
• 4I  4
th
 ICS  
 
Data Source Hierarchy 
• EMS Provider  
 
Other Associated Elements 
• Therapy 
• Common Null Values 
 
  

259 
 
TRANSCUTANEOUS PACING mA 
 
Tag Name   
• TranscutaneousCurrent 
 
Definition 
Numeric value of the electrical current strength in milliamps (mA) required to achieve 
capture (as evidenced by a palpable pulse that corresponds with rhythm observed on 
cardiac monitor) during transcutaneous pacing 
 
Technical Information 
XSD Data Type   xs:nonNegativeInteger  Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum 
Constraint 
3 
 
Field Values 
• Up to three-digit positive numeric value 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• TranscutaneousRate 
• TranscutaneousTime 
• Therapy 
• Common Null Values 
  

260 
 
TRANSCUTANEOUS PACING BPM 
 
Tag Name   
• TranscutaneousRate 
 
Definition 
Numeric value of the rate of capture during transcutaneous pacing (as evidenced by a 
palpable pulse that corresponds with rhythm observed on cardiac monitor) 
 
Technical Information 
XSD Data Type   xs:nonNegativeInteger  Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
2 Maximum 
Constraint 
3 
 
Field Values 
• Up to three-digit positive numeric value 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• TranscutaneousCurrent 
• TranscutaneousTime 
• Therapy 
• Common Null Values 
  

261 
 
TRANSCUTANEOUS PACING TIME  
 
Tag Name   
• TranscutaneousTime 
 
Definition 
Time of day when transcutaneous pacing (TCP) was started   
 
Technical Information 
XSD Data Type   xs:time     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
 
Field Values 
• Collected as HH:MM:SS 
• Use 24-hour clock 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• TranscutaneousRate 
• TranscutaneousCurrent 
• Therapy 
• Common Null Values 
 
 
  

262 
 
 
 
 
 
 
 
 
 
 
TRANSFER OF CARE 

263 
 
CARE TRANSFERRED TO 
 
Tag Name   
• CareTransferType 
 
Definition 
The level of care the patient was transferred to 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
A ALS H Helicopter 
B BLS F Facility 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• PatientTransferVitalsTime 
• TMNumber 
• SBP 
• DBP 
• Pulse 
• RespRate 
• O2Sat 
• CO2 
• Rhythm 
• CPAPPressure 
• GCSEye 
• GCSVerbal 
• GCSMotor 
• TotalGCSUponTransfer 
• Common Null Values 

264 
 
TRANSFER VS   
 
Tag Name   
• PatientTransferVitalsTime  
 
Definition 
Time of day vital signs were obtained for transfer of care 
 
Technical Information 
XSD Data Type   xs:time     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
 
Field Values 
• Collected as HH:MM:SS 
• Use 24-hour clock 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• CareTransferType 
• TMNumber 
• SBP 
• DBP 
• Pulse 
• RespRate 
• O2Sat 
• CO2 
• Rhythm 
• CPAPPressure 
• GCSEye 
• GCSVerbal 
• GCSMotor 
• TotalGCSUponTransfer 
• Common Null Values 
 

265 
 
TM # 
 
Tag Name   
• TMNumber 
 
Definition 
The number of the team member who transferred care of the patient 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• Free text  
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• CareTransferType 
• PatientTransferVitalsTime  
• SBP 
• DBP 
• Pulse 
• RespRate 
• O2Sat 
• CO2 
• Rhythm 
• CPAPPressure 
• GCSEye 
• GCSVerbal 
• GCSMotor 
• TotalGCSUponTransfer 
• Common Null Values 
 

266 
 
SBP 
 
Tag Name   
• SBP 
 
Definition 
Numeric value of the patient’s systolic blood pressure at transfer of care 
 
Technical Information 
XSD Data Type   xs:nonNegativeInteger   
  
Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 3 
 
Field Values 
• Up to three-digit positive numeric value 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• CareTransferType 
• PatientTransferVitalsTime  
• TMNumber 
• DBP 
• Pulse 
• RespRate 
• O2Sat 
• CO2 
• Rhythm 
• CPAPPressure 
• GCSEye 
• GCSVerbal 
• GCSMotor 
• TotalGCSUponTransfer 
• Common Null Values 
 

267 
 
DBP 
 
Tag Name   
• DBP 
 
Definition 
Numeric value of the patient’s diastolic blood pressure at transfer of care 
 
Technical Information 
XSD Data Type   xs:nonNegativeInteger   
  
Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 3 
 
Field Values 
• Up to three-digit positive numeric value 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• CareTransferType 
• PatientTransferVitalsTime  
• TMNumber 
• SBP 
• Pulse 
• RespRate 
• O2Sat 
• CO2 
• Rhythm 
• CPAPPressure 
• GCSEye 
• GCSVerbal 
• GCSMotor 
• TotalGCSUponTransfer 
• Common Null Values 
 

268 
 
PULSE 
 
Tag Name   
• Pulse 
 
Definition 
Numeric value of the patient’s pulse rate at transfer of care 
 
Technical Information 
XSD Data Type   xs:nonNegativeInteger   
  
Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 3 
 
Field Values 
• Up to three-digit positive numeric value 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• CareTransferType 
• PatientTransferVitalsTime  
• TMNumber 
• SBP 
• DBP 
• RespRate 
• O2Sat 
• CO2 
• Rhythm 
• CPAPPressure 
• GCSEye 
• GCSVerbal 
• GCSMotor 
• TotalGCSUponTransfer 
• Common Null Values 
 

269 
 
RR 
 
Tag Name   
• RespRate 
 
Definition 
Numeric value of the patient’s unassisted respiratory rate at transfer of care 
 
Technical Information 
XSD Data Type   xs:nonNegativeInteger   
  
Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 2 
 
Field Values 
• Up to two-digit positive numeric value 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• CareTransferType 
• PatientTransferVitalsTime  
• TMNumber 
• SBP 
• DBP 
• Pulse 
• O2Sat 
• CO2 
• Rhythm 
• CPAPPressure 
• GCSEye 
• GCSVerbal 
• GCSMotor 
• TotalGCSUponTransfer 
• Common Null Values 
 

270 
 
O2 SAT 
 
Tag Name   
• O2Sat 
 
Definition 
Numeric value of the patient’s oxygen saturation at transfer of care 
 
Technical Information 
XSD Data Type   xs:nonNegativeInteger   
  
Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 3 
 
Field Values 
• Up to three-digit positive numeric value from 0 to 100 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• CareTransferType 
• PatientTransferVitalsTime  
• TMNumber 
• SBP 
• DBP 
• Pulse 
• RespRate 
• CO2 
• Rhythm 
• CPAPPressure 
• GCSEye 
• GCSVerbal 
• GCSMotor 
• TotalGCSUponTransfer 
• Common Null Values 
 
  

271 
 
CO2 
 
Tag Name   
• CO2 
 
Definition 
The numeric ETCO
2
 reading by capnography at transfer of care 
 
Technical Information 
XSD Data Type   xs:nonNegativeInteger   
  
Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 3 
 
Field Values 
• Up to two-digit positive numeric value 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• CareTransferType 
• PatientTransferVitalsTime  
• TMNumber 
• SBP 
• DBP 
• Pulse 
• RespRate 
• O2Sat 
• Rhythm 
• CPAPPressure 
• GCSEye 
• GCSVerbal 
• GCSMotor 
• TotalGCSUponTransfer 
• Common Null Values 
  

272 
 
RHYTHM 
 
Tag Name   
• Rhythm 
 
Definition 
Two- or three-letter code indicating the patient’s rhythm on the cardiac monitor at transfer 
of care 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
2 Maximum Constraint 3 
 
Field Values 
1HB  First degree Heart Block PAT  Paroxysmal Atrial Tachycardia 
2HB  Second degree Heart Block PEA  Pulseless Electrical Activity 
3HB  Third degree Heart Block PM  Pacemaker Rhythm 
AFI  Atrial Fibrillation PST  Paroxysmal Supraventricular 
Tachycardia 
AFL  Atrial Flutter SA      Sinus Arrhythmia 
AGO  Agonal Rhythm SB  Sinus Bradycardia 
ASY  Asystole SR  Sinus Rhythm 
AVR  Accelerated Ventricular ST  Sinus Tachycardia 
IV   Idioventricular Rhythm SVT  Supraventricular Tachycardia 
JR  Junctional Rhythm VF  Ventricular Fibrillation 
PAC  Premature Atrial Contraction VT  Ventricular Tachycardia 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• CareTransferType 
• PatientTransferVitalsTime  
• TMNumber 
• SBP 
• DBP 
• Pulse 
• RespRate 
• O2Sat 
• CO2 
• CPAPPressure 
• GCSEye 
• GCSVerbal 
• GCSMotor 
• TotalGCSUponTransfer 
• Common Null Values 

273 
 
CPAP PRESSURE 
 
Tag Name   
• CPAPPressure 
 
Definition 
The CPAP pressure setting at transfer of care 
 
Technical Information 
XSD Data Type   xs:decimal     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum 
Constraint 
5 
 
Field Values 
• Can include up to two decimal places (format example 99.99) 
 
Additional Information  
• Recorded as centimeters of water (cm H
2
O)  
 
Data Source Hierarchy 
• EMS Provider  
 
Other Associated Elements 
• CareTransferType 
• PatientTransferVitalsTime  
• TMNumber 
• SBP 
• DBP 
• Pulse 
• RespRate 
• O2Sat 
• CO2 
• Rhythm 
• GCSEye 
• GCSVerbal 
• GCSMotor 
• TotalGCSUponTransfer 
• Common Null Values 
  

274 
 
GCS E 
 
Tag Name   
• GCSEye 
 
Definition 
The Glasgow Coma Scale numerical value that corresponds to the patient’s eye opening 
response to stimuli at transfer of care 
 
Technical Information 
XSD Data Type   xs:nonNegativeInteger   
  
Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
4   Spontaneous 2   To Pain 
3   To Verbal 1   None 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• CareTransferType 
• PatientTransferVitalsTime  
• TMNumber 
• SBP 
• DBP 
• Pulse 
• RespRate 
• O2Sat 
• CO2 
• Rhythm 
• CPAPPressure 
• GCSVerbal 
• GCSMotor 
• TotalGCSUponTransfer 
• Common Null Values 
  

275 
 
GCS V 
 
Tag Name   
• GCSVerbal 
 
Definition 
The Glasgow Coma Scale numerical value that corresponds to the patient’s verbal 
response to stimuli at transfer of care 
 
Technical Information 
XSD Data Type   xs:nonNegativeInteger   
  
Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
5   Oriented x 3 2   Incomprehensible 
4   Confused 1   None 
3   Inappropriate  
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• CareTransferType 
• PatientTransferVitalsTime  
• TMNumber 
• SBP 
• DBP 
• Pulse 
• RespRate 
• O2Sat 
• CO2 
• Rhythm 
• CPAPPressure 
• GCSEye 
• GCSMotor 
• TotalGCSUponTransfer 
• Common Null Values 
  

276 
 
GCS M 
 
Tag Name   
• GCSMotor 
 
Definition 
The Glasgow Coma Scale numerical value that corresponds to the patient’s motor 
response to stimuli at transfer of care 
 
Technical Information 
XSD Data Type   xs:nonNegativeInteger   
  
Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
6   Obedient  3   Flexion  
5   Purposeful 2   Extension 
4   Withdrawal 1   None  
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• CareTransferType 
• PatientTransferVitalsTime  
• TMNumber 
• SBP 
• DBP 
• Pulse 
• RespRate 
• O2Sat 
• CO2 
• Rhythm 
• CPAPPressure 
• GCSEye 
• GCSVerbal 
• TotalGCSUponTransfer 
• Common Null Values 
 
 

277 
 
GCS TOTAL 
 
Tag Name   
• TotalGCSUponTransfer 
 
Definition 
Sum of the three numerical values documented for each element of the patient’s Glasgow 
Coma Scale score at transfer of care 
 
Technical Information 
XSD Data Type   xs:nonNegativeInteger   
  
Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 2 
 
Field Values 
• One- or two-digit positive numeric value between 3 and 15 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• CareTransferType 
• PatientTransferVitalsTime  
• TMNumber 
• SBP 
• DBP 
• Pulse 
• RespRate 
• O2Sat 
• CO2 
• Rhythm 
• CPAPPressure 
• GCSEye 
• GCSVerbal 
• GCSMotor 
• Common Null Values 
  

278 
 
 
 
 
 
 
 
ADVANCED AIRWAY 
 

279 
 
BMV USED? 
 
Tag Name   
• BMVUsed 
 
Definition 
Checkbox indicating whether bag-mask-ventilation was used to assist the patient’s 
respirations 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• Y  Yes 
• N  No 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• BMVSuccessful 
• BMVTMNumber 
• Common Null Values 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

280 
 
BMV SUCCESSFUL? 
 
Tag Name   
• BMVSuccessful 
 
Definition 
Checkbox indicating the ability to ventilate the patient with minimal or no air leak, confirmed 
primarily with ETCO
2
 measurement.  Secondary confirmation methods include visible chest 
rise during ventilation and air movement on pulmonary auscultation. 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• Y  Yes 
• N  No 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• BMVUsed 
• BMVTMNumber 
• Common Null Values 
 
  

281 
 
BMV TM # 
 
Tag Name   
• BMVTMNumber 
 
Definition 
The number of the team member who attempted bag-mask-ventilation on the patient 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• Free text 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• BMVUsed 
• BMVSuccessful 
• Common Null Values 
 
  

282 
 
REASON FOR ADVANCED AIRWAY 
 
Tag Name   
• AdvancedAirwayReason 
 
Definition 
The reason(s) that the patient needs an advanced airway 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
2 Maximum Constraint 2 
 
Field Values 
RA   Respiratory Arrest CA    Cardiopulmonary Arrest 
HY    Hypoventilation PR    Profoundly Altered 
OT    Other  
 
Additional Information 
• Profoundly altered is defined as having a total GCS score ≤ 8 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Common Null Values 
 
  

283 
 
ADVANCED AIRWAY DEVICE 
 
Tag Name   
• AdvancedAirwayDevice 
 
Definition 
Checkbox indicating the type of advanced airway device used  
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• E  Endotracheal Tube (ETT) 
• K  King LTS-D 
• I  iGel 
 
Additional Information 
• Max occurrence for this field is 3 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• AirwayDevicePMNumber 
• TimeAdvancedAirwayAttempt 
• SuccessfulPlacement 
• TimeSuccessfulPlacement 
• AirwayDeviceSize 
• Common Null Values 
 
  

284 
 
ADVANCED AIRWAY DEVICE PM # 
 
Tag Name   
• TMNumber 
 
Definition 
The number of the team member who attempted to place an advanced airway device on 
the patient 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• Free text 
 
Additional Information 
• Max occurrence for this field is 3 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• AdvancedAirwayDevice 
• TimeAdvancedAirwayAttempt 
• SuccessfulPlacement 
• TimeSuccessfulPlacement 
• AirwayDeviceSize 
• Common Null Values 
 
  

285 
 
TIME OF ADVANCED AIRWAY ATTEMPT   
 
Tag Name   
• TimeAdvancedAirwayAttempt  
 
Definition 
Time of day the advanced airway device was placed in the patient’s mouth 
 
Technical Information 
XSD Data Type   xs:time     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
 
Field Values 
• Collected as HH:MM:SS 
• Use 24-hour clock 
 
Additional Information 
• Max occurrence for this field is 3 
• Three attempts with the primary device are not required to move on to a rescue device 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• AdvancedAirwayDevice 
• AirwayDevicePMNumber 
• SuccessfulPlacement 
• TimeSuccessfulPlacement 
• AirwayDeviceSize 
• Common Null Values 
 
  

286 
 
SUCCESSFUL PLACEMENT? 
 
Tag Name   
• SuccessPlacement 
 
Definition 
Checkbox indicating whether the ability to ventilate the patient with minimal or no air leak, 
confirmed primarily with ETCO
2
 measurement.  Secondary confirmation methods include 
visible chest rise during ventilation and air movement on pulmonary auscultation. 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• Y   Yes 
• N   No  
 
Additional Information 
• Max occurrence for this field is 3 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• AdvancedAirwayDevice 
• AirwayDevicePMNumber 
• TimeAdvancedAirwayAttempt 
• TimeSuccessfulPlacement 
• AirwayDeviceSize 
• Common Null Values 

287 
 
TIME OF SUCCESSFUL PLACEMENT    
 
Tag Name   
• TimeSuccessfulPlacement  
 
Definition 
Time of day EMS personnel successfully placed an advanced airway device in the patient 
 
Technical Information 
XSD Data Type   xs:time     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
 
Field Values 
• Collected as HH:MM:SS 
• Use 24-hour clock 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• AdvancedAirwayDevice 
• AirwayDevicePMNumber 
• TimeAdvancedAirwayAttempt 
• SuccessfulPlacement 
• AirwayDeviceSize 
• Common Null Values 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

288 
 
ADVANCED AIRWAY DEVICE SIZE 
 
Tag Name   
• AirwayDeviceSize 
 
Definition 
The size of the endotracheal tube (ETT) or supraglottic airway (SGA) placed 
 
Technical Information 
XSD Data Type   xs:decimal     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 3 
 
Field Values  
• Up to three-digit positive numeric value 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• AdvancedAirwayDevice 
• AirwayDevicePMNumber 
• TimeAdvancedAirwayAttempt 
• SuccessfulPlacement 
• TimeSuccessfulPlacement 
• TubePlacementMarkAtTeeth 
• Common Null Values 
 
  

289 
 
TUBE PLACEMENT MARK AT TEETH 
 
Tag Name   
• TubePlacementMarkAtTeeth 
 
Definition 
The centimeter mark at the teeth of the advanced airway device after insertion 
 
Technical Information 
XSD Data Type   xs:nonNegativeInteger   
  
Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
2 Maximum Constraint 2 
 
Field Values 
• Two-digit positive numeric value 
 
Additional Information 
• If patient is edentulous, indicate the centimeter mark at the lip 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• AdvancedAirwayDevice 
• AirwayDevicePMNumber 
• TimeAdvancedAirwayAttempt 
• SuccessfulPlacement 
• TimeSuccessfulPlacement 
• AirwayDeviceSize 
• Common Null Values 
 
  

290 
 
DIFFICULT AIRWAY TECHNIQUES 
 
Tag Name   
• DifficultAirwayTechniques 
 
Definition 
Checkbox indicating techniques utilized to assist with advanced airway device insertion 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
2 Maximum Constraint 2 
 
Field Values 
• EL External Laryngeal Manipulation 
• IT  Introducer (bougie) 
• VL  Video Laryngoscopy 
  
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Common Null Values 
 
  

291 
 
ADVANCED AIRWAY DEVICE PLACEMENT CONFIRMED 
WITH CAPNOGRAPHY? 
 
Tag Name   
• DeviceConfirmedWithCapnography 
 
Definition 
Checkbox indicating whether advanced airway device placement was confirmed with 
capnography 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• Y  Yes 
• N  No 
  
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• CapnographyMeasurement 
• ETCO2DetectorColorimetric 
• IfNoCapnographyWhy 
• ExplainOtherReason 
• Common Null Values 
 
  

292 
 
CAPNOGRAPHY MEASUREMENT   
 
Tag Name   
• CapnographyMeasurement 
 
Definition 
The numeric measurement of carbon dioxide present in exhaled air after ETT or SGA 
insertion 
 
Technical Information 
XSD Data Type   xs:nonNegativeInteger   
  
Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 3 
 
Field Values 
• Up to two-digit positive numeric value 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• DeviceConfirmedWithCapnography 
• ETCO2DetectorColorimetric 
• Common Null Values 
 
  

293 
 
SPONTANEOUS RESPIRATIONS   
 
Tag Name   
• SpontaneousRespirations 
 
Definition 
Checkbox indicating whether the patient had spontaneous respirations after advanced 
airway device placement 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• Y   Yes 
• N   No 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Common Null Values 
 
  

294 
 
IF PLACEMENT NOT CONFIRMED WITH CAPNOGRAPHY, 
WHY? 
 
Tag Name   
• IfNoCapnographyWhy 
 
Definition 
Checkbox indicating why advanced airway placement was not confirmed with capnography 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
2 Maximum Constraint 2 
 
Field Values 
• EF  Capnography Equipment Failure 
• OT  Other 
  
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• DeviceConfirmedWithCapnography 
• CapnographyMeasurement 
• ETCO2DetectorColorimetric 
• ExplainOtherReason 
• Common Null Values 
 
  

295 
 
IF REASON=OTHER, EXPLAIN 
 
Tag Name   
• ExplainOtherReason 
 
Definition 
Field provided to explain why “Other” was chosen as a reason why advanced airway device 
placement was not confirmed with capnography 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
2 Maximum Constraint 60 
 
Field Values 
• Free text 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• DeviceConfirmedWithCapnography 
• IfNoCapnographyWhy 
• CapnographyMeasurement 
• ETCO2DetectorColorimetric 
• ExplainOtherReason 
• Common Null Values 
 
  

296 
 
CONFIRMATION WITH BACKUP DEVICE?   
 
Tag Name   
• ConfirmationWithBackupDevice 
 
Definition 
Checkbox indicating if advanced airway placement was confirmed by colorimeter or 
esophageal detector device (EDD) 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• Y  Yes 
• N  No 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• IfNoCapnographyWhy 
• ExplainOtherReason 
• Common Null Values 
 
  

297 
 
ETCO
2
 DETECTOR COLORIMETRIC   
 
Tag Name   
• ETCO2DetectorColormetric 
 
Definition 
Checkbox indicating the color observed when the carbon dioxide colorimetric device is 
used after advanced airway device placement 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
Y Yellow T Tan 
P Purple  
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• DeviceConfirmedWithCapnography 
• CapnographyMeasurement 
• Common Null Values 
 
  

298 
 
RESCUE DEVICE? 
 
Tag Name   
• RescueDevice 
 
Definition 
Checkbox indicating if a rescue device was used to ventilate the patient 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• Y  Yes 
• N  No 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• RescueDeviceTMNumber 
• Common Null Values 
 
  

299 
 
RESCUE DEVICE PM # 
 
Tag Name   
• RescueDeviceTMNumber 
 
Definition 
The number of the team member who utilized a rescue device on the patient 
  
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• Free text 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• RescueDevice 
• Common Null Values 
 
  

300 
 
REASON(S) ADVANCED AIRWAY DEVICE UNABLE   
 
Tag Name   
• AdvancedAirwayDeviceUnable 
 
Definition 
Checkbox indicating the reason(s) an advanced airway device was unable to be inserted 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
G Positive Gag Reflex A Anatomy  
B Blood/Secretions C Unable to Visualize Cords 
E Unable to Visualize Epiglottis F Equipment Failure 
L Logistical/Environmental Issues D Describe Issues 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Common Null Values 
 
 
 
 
 
 
 
 
 
 
 

301 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
COMPLICATION(S) DURING TUBE PLACEMENT 
 
  

302 
 
REGURGITATION/EMESIS? 
 
Tag Name   
• RegurgitationEmesis 
 
Definition 
Checkbox indicating whether the presence of gastric contents was noted in the oropharynx 
or on device during or after placement 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• Y  Yes 
• N  No 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Common Null Values 
 

303 
 
 BLEEDING/TRAUMA? 
 
Tag Name   
• BleedingTrauma 
 
Definition 
Checkbox indicating whether the presence of blood was noted in the oropharynx or on the 
device during or after placement, or any abrasion, laceration, dental trauma, or other 
trauma occurring during placement or repositioning of the device.  This excludes bleeding 
or trauma present prior to attempted device placement. 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• Y  Yes 
• N  No 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Common Null Values 
 
 
 
  
  

304 
 
BRADYCARDIA? 
 
Tag Name   
• Bradycardia 
 
Definition 
Checkbox indicating whether there was a heart rate (HR) < 60 during advanced airway 
placement in a patient with a HR ≥ 60 prior to placement 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• Y  Yes 
• N  No 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Common Null Values 
 
  

305 
 
HYPOXIA? 
 
Tag Name   
• Hypoxia 
 
Definition 
Checkbox indicating whether there was any O
2
 
saturation ≤ 90% during or after placement 
in a patient with an O
2
 saturation > 90% prior to placement 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• Y  Yes 
• N  No 
• H  Hypoxia Prior to Placement 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Common Null Values 
 
 
  

306 
 
RIGHT MAINSTEM PLACEMENT? 
 
Tag Name   
• RightMainstemPlacement 
 
Definition 
Checkbox indicating whether the endotracheal tube (ETT) was placed in the right mainstem 
bronchus, as evidenced by absent breath sounds on the left and asymmetric chest rise 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• Y  Yes 
• N  No 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Common Null Values 
 
  

307 
 
 
 
 
 
 
 
 
 
INITIAL ADVANCED AIRWAY PLACEMENT 
CONFIRMATION 

308 
 
BILATERAL BREATH SOUNDS?     
 
Tag Name   
• BilateralBreathSounds 
 
Definition 
Checkbox indicating whether bilateral breath sounds were auscultated following advanced 
airway device placement 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• Y  Yes 
• N  No 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Common Null Values 
 
 
  

309 
 
BILATERAL CHEST RISE?     
 
Tag Name   
• BilateralChestRise 
 
Definition 
Checkbox indicating whether bilateral chest rise was observed following advanced airway 
device placement 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• Y  Yes 
• N  No 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Common Null Values 
 
  

310 
 
ABSENT GASTRIC SOUNDS?     
 
Tag Name   
• AbsentGastricSounds 
 
Definition 
Checkbox indicating whether no gastric sounds were auscultated during ventilation 
following advanced airway device placement 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• Y  Yes 
• N  No 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Common Null Values 
 
  

311 
 
ONGOING VERIFICATION TIME   
 
Tag Name   
• VerificationTime 
 
Definition 
Time of day advanced airway device placement is verified 
 
Technical Information 
XSD Data Type   xs:time     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
 
Field Values 
• Collected as HH:MM:SS 
• Use 24-hour clock 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Common Null Values 
 

312 
 
DISLODGEMENT?   
 
Tag Name   
• Dislodgement 
 
Definition 
Checkbox indicating whether there was a loss of ability to adequately ventilate the patient 
after successful advanced airway device placement was achieved 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• Y  Yes 
• N  No 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• IfDislodgementSuccessfulReplacement 
• Common Null Values 
 
  

313 
 
IF DISLODGEMENT AFTER PLACEMENT, SUCCESSFUL 
REPLACEMENT?     
 
Tag Name   
• IfDislodgementSuccessfulReplacement 
 
Definition 
Checkbox indicating whether there was the ability to ventilate the patient with minimal or no 
air leak, after dislodgement and replacement of the same type of device, confirmed 
primarily with ETCO
2
 measurement with capnography.  Secondary confirmation methods 
include visible chest rise during ventilation and air movement on pulmonary auscultation. 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• Y  Yes 
• N  No 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Dislodgement 
• Common Null Values 
 
 
 
 
 
 
 

314 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
VERIFICATION OF ADVANCED AIRWAY  
 

315 
 
VERIFICATION TECHNIQUE(S)   
 
Tag Name   
• VerificationTechnique 
 
Definition 
Checkbox indicating the technique(s) utilized by the receiving facility physician to confirm 
advanced airway device placement 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
Yes Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
A Auscultation V Visualization 
E EtCO
2
 X X-Ray 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• Placement 
• SignedVerification 
• Common Null Values 
 
 

316 
 
PLACEMENT   
 
Tag Name   
• Placement 
 
Definition 
The receiving facility physician’s determination of the anatomical position of the advanced 
airway device inserted by EMS personnel 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
E Esophageal T Tracheal 
R Right Main  
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• VerificationTechnique 
• SignedVerification 
• Common Null Values 
 

317 
 
SIGNED VERIFICATION   
 
Tag Name   
• SignedVerification 
 
Definition 
Checkbox indicating whether a signed verification of advanced airway device placement 
was obtained by EMS personnel 
 
Technical Information 
XSD Data Type   xs:string     Required in XSD   Yes   
Multiple Entry 
Configuration 
No Accepts Null   Yes, common null 
values 
Minimum 
Constraint   
1 Maximum Constraint 1 
 
Field Values 
• Y   Yes 
• N   No 
 
Data Source Hierarchy 
• EMS Provider 
 
Other Associated Elements 
• VerificationTechnique 
• Placement 
• Common Null Values
