export interface HealthcareFacility {
  id: string;
  name: string;
  type: 'hospital' | 'clinic' | 'pharmacy';
  country: string;
  city: string;
  address: string;
  phone?: string;
  services: string[];
  coordinates?: { lat: number; lng: number };
}

export const healthcareFacilities: HealthcareFacility[] = [
  // Nigeria
  {
    id: 'lagos-university-hospital',
    name: 'Lagos University Teaching Hospital',
    type: 'hospital',
    country: 'Nigeria',
    city: 'Lagos',
    address: 'Idi-Araba, Lagos',
    phone: '+234-1-7743859',
    services: ['Emergency', 'Surgery', 'Pediatrics', 'Maternity', 'Laboratory', 'Radiology']
  },
  {
    id: 'national-hospital-abuja',
    name: 'National Hospital Abuja',
    type: 'hospital',
    country: 'Nigeria',
    city: 'Abuja',
    address: 'Central Business District, Abuja',
    phone: '+234-9-4612345',
    services: ['Emergency', 'Cardiology', 'Neurology', 'Oncology', 'ICU']
  },
  {
    id: 'uniportharcourt-hospital',
    name: 'University of Port Harcourt Teaching Hospital',
    type: 'hospital',
    country: 'Nigeria',
    city: 'Port Harcourt',
    address: 'East West Road, Port Harcourt',
    phone: '+234-84-234567',
    services: ['Emergency', 'Surgery', 'Internal Medicine', 'Pediatrics', 'Obstetrics & Gynaecology']
  },
  {
    id: 'aminu-kano-hospital',
    name: 'Aminu Kano Teaching Hospital',
    type: 'hospital',
    country: 'Nigeria',
    city: 'Kano',
    address: 'Zaria Road, Kano',
    phone: '+234-64-667788',
    services: ['Emergency', 'Surgery', 'Pediatrics', 'Maternity', 'Ophthalmology']
  },
  {
    id: 'reddington-hospital-vi',
    name: 'Reddington Hospital',
    type: 'hospital',
    country: 'Nigeria',
    city: 'Lagos',
    address: '12 Idowu Martins Street, Victoria Island, Lagos',
    phone: '+234-1-2715341',
    services: ['Emergency', 'Cardiology', 'Surgery', 'Radiology', 'Dialysis']
  },
  {
    id: 'st-nicholas-hospital-lagos',
    name: 'St. Nicholas Hospital',
    type: 'hospital',
    country: 'Nigeria',
    city: 'Lagos',
    address: '57 Campbell Street, Lagos Island, Lagos',
    phone: '+234-1-4615561',
    services: ['Emergency', 'Nephrology', 'Transplant', 'Pediatrics', 'ICU']
  },
  {
    id: 'eko-hospital-ikeja',
    name: 'Eko Hospital',
    type: 'hospital',
    country: 'Nigeria',
    city: 'Lagos',
    address: '31 Mobolaji Bank Anthony Way, Ikeja, Lagos',
    phone: '+234-1-2716990',
    services: ['Emergency', 'Surgery', 'Maternity', 'Internal Medicine', 'Diagnostics']
  },
  {
    id: 'evercare-hospital-lekki',
    name: 'Evercare Hospital Lekki',
    type: 'hospital',
    country: 'Nigeria',
    city: 'Lagos',
    address: '1, Admiralty Way, Lekki Phase 1, Lagos',
    phone: '+234-813-985-0710',
    services: ['Emergency', 'Cardiology', 'Oncology', 'Neurosurgery', 'Maternity']
  },
  {
    id: 'lagoon-hospital-apapa',
    name: 'Lagoon Hospital',
    type: 'hospital',
    country: 'Nigeria',
    city: 'Lagos',
    address: '8 Marine Road, Apapa, Lagos',
    phone: '+234-1-7001020',
    services: ['Emergency', 'Surgery', 'Pediatrics', 'Orthopedics', 'Gynaecology']
  },
  {
    id: 'first-consultants-medical-centre',
    name: 'First Consultants Medical Centre',
    type: 'hospital',
    country: 'Nigeria',
    city: 'Lagos',
    address: '16/24 Ikoyi Club 1938 Road, Ikoyi, Lagos',
    phone: '+234-1-4612901',
    services: ['General Practice', 'Maternity', 'Pediatrics', 'Diagnostics']
  },
  {
    id: 'garki-hospital-abuja',
    name: 'Garki Hospital',
    type: 'hospital',
    country: 'Nigeria',
    city: 'Abuja',
    address: 'Tafawa Balewa Way, Garki, Abuja',
    phone: '+234-9-2915388',
    services: ['Emergency', 'Surgery', 'IVF', 'Radiology', 'Dental']
  },
  {
    id: 'memfys-hospital-enugu',
    name: 'Memfys Hospital for Neurosurgery',
    type: 'hospital',
    country: 'Nigeria',
    city: 'Enugu',
    address: 'Km 2, Enugu-Onitsha Expressway, Enugu',
    phone: '+234-803-320-3491',
    services: ['Neurosurgery', 'Neurology', 'Spine Surgery', 'ICU']
  },
  // Kenya
  {
    id: 'kenyatta-hospital',
    name: 'Kenyatta National Hospital',
    type: 'hospital',
    country: 'Kenya',
    city: 'Nairobi',
    address: 'Hospital Road, Nairobi',
    phone: '+254-20-2726300',
    services: ['Emergency', 'Surgery', 'Pediatrics', 'Maternity', 'Oncology', 'Cardiology']
  },
  {
    id: 'moi-hospital-eldoret',
    name: 'Moi Teaching and Referral Hospital',
    type: 'hospital',
    country: 'Kenya',
    city: 'Eldoret',
    address: 'Nandi Road, Eldoret',
    phone: '+254-53-2033471',
    services: ['Emergency', 'Surgery', 'Internal Medicine', 'Pediatrics']
  },
  {
    id: 'aga-khan-mombasa',
    name: 'Aga Khan Hospital, Mombasa',
    type: 'hospital',
    country: 'Kenya',
    city: 'Mombasa',
    address: 'Vanga Road, Mombasa',
    phone: '+254-41-2312953',
    services: ['Emergency', 'Cardiology', 'Surgery', 'Maternity', 'Pediatrics']
  },
  {
    id: 'nairobi-hospital',
    name: 'The Nairobi Hospital',
    type: 'hospital',
    country: 'Kenya',
    city: 'Nairobi',
    address: 'Argwings Kodhek Road, Nairobi',
    phone: '+254-20-2845000',
    services: ['Emergency', 'ICU', 'Cancer Treatment', 'Heart Centre', 'Radiology']
  },
  {
    id: 'the-karen-hospital',
    name: 'The Karen Hospital',
    type: 'hospital',
    country: 'Kenya',
    city: 'Nairobi',
    address: 'Langata Road, Karen, Nairobi',
    phone: '+254-726-222000',
    services: ['Emergency', 'Cardiology', 'Surgery', 'Pediatrics', 'Renal Care']
  },
  {
    id: 'mp-shah-hospital',
    name: 'MP Shah Hospital',
    type: 'hospital',
    country: 'Kenya',
    city: 'Nairobi',
    address: 'Shivachi Road, Parklands, Nairobi',
    phone: '+254-20-4291000',
    services: ['Emergency', 'Cancer Care', 'ICU', 'Surgery', 'Radiology']
  },
  {
    id: 'gertrudes-childrens-hospital',
    name: 'Gertrude\'s Children\'s Hospital',
    type: 'hospital',
    country: 'Kenya',
    city: 'Nairobi',
    address: 'Muthaiga Road, Nairobi',
    phone: '+254-20-7206000',
    services: ['Pediatrics', 'Emergency', 'Surgery', 'Specialist Clinics']
  },
  {
    id: 'mater-hospital-nairobi',
    name: 'The Mater Misericordiae Hospital',
    type: 'hospital',
    country: 'Kenya',
    city: 'Nairobi',
    address: 'South B, Nairobi',
    phone: '+254-20-6903000',
    services: ['Emergency', 'Cardiac Program', 'Maternity', 'Surgery', 'ICU']
  },
  {
    id: 'coast-general-hospital',
    name: 'Coast General Teaching & Referral Hospital',
    type: 'hospital',
    country: 'Kenya',
    city: 'Mombasa',
    address: 'Kisauni Road, Mombasa',
    phone: '+254-41-2314201',
    services: ['Emergency', 'Surgery', 'Pediatrics', 'Maternity', 'Public Health']
  },
  {
    id: 'diani-beach-hospital',
    name: 'Diani Beach Hospital',
    type: 'hospital',
    country: 'Kenya',
    city: 'Diani',
    address: 'Diani Beach Road, Kwale County',
    phone: '+254-722-203333',
    services: ['Emergency', 'General Practice', 'Surgery', 'Diving Medicine']
  },
  {
    id: 'nairobi-west-hospital',
    name: 'The Nairobi West Hospital',
    type: 'hospital',
    country: 'Kenya',
    city: 'Nairobi',
    address: 'Gandhi Avenue, Nairobi West',
    phone: '+254-730-128000',
    services: ['Emergency', 'Transplant', 'Oncology', 'Radiology', 'ICU']
  },
  {
    id: 'pcea-kikuyu-hospital',
    name: 'PCEA Kikuyu Hospital',
    type: 'hospital',
    country: 'Kenya',
    city: 'Kikuyu',
    address: 'Kikuyu Town, Kiambu County',
    phone: '+254-20-2044766',
    services: ['Ophthalmology', 'Orthopedics', 'General Surgery', 'Dental']
  },
  // Ghana
  {
    id: 'korle-bu-hospital',
    name: 'Korle-Bu Teaching Hospital',
    type: 'hospital',
    country: 'Ghana',
    city: 'Accra',
    address: 'Korle-Bu, Accra',
    phone: '+233-30-2665401',
    services: ['Emergency', 'Surgery', 'Cardiology', 'Neurology', 'Pediatrics']
  },
  {
    id: 'komfo-anokye-hospital',
    name: 'Komfo Anokye Teaching Hospital',
    type: 'hospital',
    country: 'Ghana',
    city: 'Kumasi',
    address: 'Bantama, Kumasi',
    phone: '+233-32-2022381',
    services: ['Emergency', 'Surgery', 'Pediatrics', 'Maternity', 'Oncology']
  },
  {
    id: '37-military-hospital',
    name: '37 Military Hospital',
    type: 'hospital',
    country: 'Ghana',
    city: 'Accra',
    address: 'Liberation Road, Accra',
    phone: '+233-30-2776111',
    services: ['Emergency', 'Trauma', 'Surgery', 'Internal Medicine', 'Pediatrics']
  },
  {
    id: 'ridge-hospital-accra',
    name: 'Greater Accra Regional Hospital (Ridge Hospital)',
    type: 'hospital',
    country: 'Ghana',
    city: 'Accra',
    address: 'Castle Road, Ridge, Accra',
    phone: '+233-30-2228382',
    services: ['Emergency', 'Maternity', 'Surgery', 'Pediatrics', 'ICU']
  },
  {
    id: 'the-trust-hospital',
    name: 'The Trust Hospital',
    type: 'hospital',
    country: 'Ghana',
    city: 'Accra',
    address: 'Oxford Street, Osu, Accra',
    phone: '+233-30-2776787',
    services: ['Emergency', 'General Practice', 'Specialist Clinics', 'Diagnostics']
  },
  {
    id: 'cape-coast-teaching-hospital',
    name: 'Cape Coast Teaching Hospital',
    type: 'hospital',
    country: 'Ghana',
    city: 'Cape Coast',
    address: 'Cape Coast, Central Region',
    phone: '+233-33-2132482',
    services: ['Emergency', 'Surgery', 'Internal Medicine', 'Pediatrics', 'Maternity']
  },
  {
    id: 'euracare-hospital-accra',
    name: 'Euracare Advanced Diagnostic and Heart Centre',
    type: 'hospital',
    country: 'Ghana',
    city: 'Accra',
    address: '15-17 Abotsi Street, Airport Residential Area, Accra',
    phone: '+233-30-2799960',
    services: ['Cardiology', 'Interventional Radiology', 'Diagnostics', 'Urology']
  },
  {
    id: 'medicas-hospital-accra',
    name: 'Medicas Hospital',
    type: 'hospital',
    country: 'Ghana',
    city: 'Accra',
    address: '10 Abori Link, East Legon, Accra',
    phone: '+233-30-2543543',
    services: ['General Practice', 'Surgery', 'Maternity', 'Pediatrics', 'Dental']
  },
  {
    id: 'ho-teaching-hospital',
    name: 'Ho Teaching Hospital',
    type: 'hospital',
    country: 'Ghana',
    city: 'Ho',
    address: 'Ho, Volta Region',
    phone: '+233-36-2026461',
    services: ['Emergency', 'Surgery', 'Internal Medicine', 'Pediatrics', 'Maternity']
  },
  {
    id: 'tamale-teaching-hospital',
    name: 'Tamale Teaching Hospital',
    type: 'hospital',
    country: 'Ghana',
    city: 'Tamale',
    address: 'Tamale, Northern Region',
    phone: '+233-37-2022861',
    services: ['Emergency', 'Surgery', 'Internal Medicine', 'Pediatrics', 'Maternity']
  },
  // South Africa
  {
    id: 'groote-schuur-hospital',
    name: 'Groote Schuur Hospital',
    type: 'hospital',
    country: 'South Africa',
    city: 'Cape Town',
    address: 'Observatory, Cape Town',
    phone: '+27-21-4040911',
    services: ['Emergency', 'Trauma', 'Cardiothoracic Surgery', 'Neurosurgery', 'Transplant']
  },
  {
    id: 'chris-hani-hospital',
    name: 'Chris Hani Baragwanath Hospital',
    type: 'hospital',
    country: 'South Africa',
    city: 'Johannesburg',
    address: 'Soweto, Johannesburg',
    phone: '+27-11-9338000',
    services: ['Emergency', 'Trauma', 'Surgery', 'Pediatrics', 'Maternity']
  },
  {
    id: 'inkosi-albert-luthuli-hospital',
    name: 'Inkosi Albert Luthuli Central Hospital',
    type: 'hospital',
    country: 'South Africa',
    city: 'Durban',
    address: '800 Vusi Mzimela Road, Durban',
    phone: '+27-31-2401000',
    services: ['Emergency', 'Cardiology', 'Oncology', 'Neurosurgery', 'Transplant']
  },
  {
    id: 'netcare-christiaan-barnard-hospital',
    name: 'Netcare Christiaan Barnard Memorial Hospital',
    type: 'hospital',
    country: 'South Africa',
    city: 'Cape Town',
    address: '12 DF Malan St, Cape Town',
    phone: '+27-21-4806111',
    services: ['Cardiology', 'Robotic Surgery', 'Emergency', 'Organ Transplant']
  },
  {
    id: 'steve-biko-academic-hospital',
    name: 'Steve Biko Academic Hospital',
    type: 'hospital',
    country: 'South Africa',
    city: 'Pretoria',
    address: 'Steve Biko Road, Capital Park, Pretoria',
    phone: '+27-12-3541000',
    services: ['Emergency', 'Specialist Care', 'Surgery', 'Research', 'Teaching']
  },
  {
    id: 'tygerberg-hospital',
    name: 'Tygerberg Hospital',
    type: 'hospital',
    country: 'South Africa',
    city: 'Cape Town',
    address: 'Francie Van Zijl Drive, Parow Valley, Cape Town',
    phone: '+27-21-9384911',
    services: ['Emergency', 'Trauma', 'Surgery', 'Pediatrics', 'Maternity']
  },
  {
    id: 'life-kingsbury-hospital',
    name: 'Life Kingsbury Hospital',
    type: 'hospital',
    country: 'South Africa',
    city: 'Cape Town',
    address: 'Wilderness Road, Claremont, Cape Town',
    phone: '+27-21-6704000',
    services: ['Emergency', 'Cardiology', 'Surgery', 'Orthopedics', 'Maternity']
  },
  {
    id: 'mediclinic-morningside',
    name: 'Mediclinic Morningside',
    type: 'hospital',
    country: 'South Africa',
    city: 'Johannesburg',
    address: 'Cnr Rivonia & Hill Roads, Morningside, Sandton',
    phone: '+27-11-2825000',
    services: ['Emergency', 'Cardiology', 'Neurology', 'Oncology', 'Transplant']
  },
  {
    id: 'charlotte-maxeke-hospital',
    name: 'Charlotte Maxeke Johannesburg Academic Hospital',
    type: 'hospital',
    country: 'South Africa',
    city: 'Johannesburg',
    address: 'Jubilee Road, Parktown, Johannesburg',
    phone: '+27-11-4884911',
    services: ['Emergency', 'Specialist Care', 'Surgery', 'Oncology', 'Pediatrics']
  },
  {
    id: 'netcare-milpark-hospital',
    name: 'Netcare Milpark Hospital',
    type: 'hospital',
    country: 'South Africa',
    city: 'Johannesburg',
    address: '9 Guild Road, Parktown West, Johannesburg',
    phone: '+27-11-4805600',
    services: ['Emergency', 'Level 1 Trauma', 'Cardiology', 'Neurosurgery']
  },
  {
    id: 'ahmed-al-kadi-private-hospital',
    name: 'Ahmed Al-Kadi Private Hospital',
    type: 'hospital',
    country: 'South Africa',
    city: 'Durban',
    address: '490 King Cetshwayo Highway, Mayville, Durban',
    phone: '+27-31-4923400',
    services: ['Emergency', 'Cardiology', 'Surgery', 'Pediatrics', 'Maternity']
  },
  {
    id: 'busamed-gateway-private-hospital',
    name: 'Busamed Gateway Private Hospital',
    type: 'hospital',
    country: 'South Africa',
    city: 'Durban',
    address: '36-38 Aurora Drive, Umhlanga Rocks, Durban',
    phone: '+27-31-4927000',
    services: ['Emergency', 'Robotic Surgery', 'Cardiology', 'Orthopedics']
  },
  // Tanzania
  {
    id: 'muhimbili-hospital',
    name: 'Muhimbili National Hospital',
    type: 'hospital',
    country: 'Tanzania',
    city: 'Dar es Salaam',
    address: 'United Nations Road, Dar es Salaam',
    phone: '+255-22-2150302',
    services: ['Emergency', 'Surgery', 'Internal Medicine', 'Pediatrics', 'Oncology']
  },
  {
    id: 'bugando-medical-centre',
    name: 'Bugando Medical Centre',
    type: 'hospital',
    country: 'Tanzania',
    city: 'Mwanza',
    address: 'Bugando, Mwanza',
    phone: '+255-28-2500513',
    services: ['Emergency', 'Surgery', 'Pediatrics', 'Maternity', 'Radiology']
  },
  {
    id: 'aga-khan-hospital-dar',
    name: 'Aga Khan Hospital, Dar es Salaam',
    type: 'hospital',
    country: 'Tanzania',
    city: 'Dar es Salaam',
    address: 'Barack Obama Drive, Dar es Salaam',
    phone: '+255-22-2115151',
    services: ['Emergency', 'Cardiology', 'Oncology', 'Surgery', 'Maternity']
  },
  {
    id: 'kcmc-moshi',
    name: 'Kilimanjaro Christian Medical Centre (KCMC)',
    type: 'hospital',
    country: 'Tanzania',
    city: 'Moshi',
    address: 'Moshi, Kilimanjaro Region',
    phone: '+255-27-2754377',
    services: ['Emergency', 'Surgery', 'Pediatrics', 'Research', 'Teaching']
  },
  {
    id: 'jakaya-kikwete-cardiac-institute',
    name: 'Jakaya Kikwete Cardiac Institute',
    type: 'hospital',
    country: 'Tanzania',
    city: 'Dar es Salaam',
    address: 'Inside Muhimbili National Hospital, Dar es Salaam',
    phone: '+255-22-2151379',
    services: ['Cardiology', 'Cardiac Surgery', 'ICU']
  },
  {
    id: 'aga-khan-health-centre-tanzania',
    name: 'Aga Khan Health Centre',
    type: 'clinic',
    country: 'Tanzania',
    city: 'Arusha',
    address: 'Sokoine Road, Arusha',
    services: ['General Practice', 'Pediatrics', 'Laboratory', 'Pharmacy']
  },
  {
    id: 'regency-medical-centre-tanzania',
    name: 'Regency Medical Centre',
    type: 'hospital',
    country: 'Tanzania',
    city: 'Dar es Salaam',
    address: 'Alykhan Road, Upanga, Dar es Salaam',
    services: ['Emergency', 'Dialysis', 'Surgery', 'ICU']
  },
  {
    id: 'sanitas-hospital-tanzania',
    name: 'Sanitas Hospital',
    type: 'hospital',
    country: 'Tanzania',
    city: 'Dar es Salaam',
    address: 'Mikocheni, Dar es Salaam',
    services: ['Emergency', 'Maternity', 'Pediatrics', 'Dental']
  },
  {
    id: 'ist-clinic-tanzania',
    name: 'IST Clinic',
    type: 'clinic',
    country: 'Tanzania',
    city: 'Dar es Salaam',
    address: 'Masaki, Dar es Salaam',
    services: ['General Practice', 'Vaccinations', 'Travel Medicine']
  },
  {
    id: 'pharmaplus-pharmacy-tanzania',
    name: 'Pharmaplus Pharmacy',
    type: 'pharmacy',
    country: 'Tanzania',
    city: 'Dar es Salaam',
    address: 'Various locations',
    services: ['Prescription Drugs', 'OTC Medications', 'Health Products']
  },
  // Uganda
  {
    id: 'mulago-hospital',
    name: 'Mulago National Referral Hospital',
    type: 'hospital',
    country: 'Uganda',
    city: 'Kampala',
    address: 'Mulago Hill, Kampala',
    phone: '+256-41-4530020',
    services: ['Emergency', 'Surgery', 'Internal Medicine', 'Pediatrics', 'Maternity']
  },
  {
    id: 'ihk-hospital',
    name: 'International Hospital Kampala (IHK)',
    type: 'hospital',
    country: 'Uganda',
    city: 'Kampala',
    address: 'Namuwongo, Kampala',
    phone: '+256-31-2200400',
    services: ['Emergency', 'ICU', 'Surgery', 'Pediatrics', 'Maternity']
  },
  {
    id: 'nsambya-hospital',
    name: 'St. Francis Hospital Nsambya',
    type: 'hospital',
    country: 'Uganda',
    city: 'Kampala',
    address: 'Nsambya Road, Kampala',
    phone: '+256-41-4267012',
    services: ['Emergency', 'Surgery', 'Maternity', 'Pediatrics', 'Internal Medicine']
  },
  {
    id: 'mengo-hospital',
    name: 'Mengo Hospital',
    type: 'hospital',
    country: 'Uganda',
    city: 'Kampala',
    address: 'Mengo Hill, Kampala',
    phone: '+256-41-4345263',
    services: ['Emergency', 'Surgery', 'Ophthalmology', 'Dental', 'Physiotherapy']
  },
  {
    id: 'case-medical-centre',
    name: 'Case Medical Centre',
    type: 'hospital',
    country: 'Uganda',
    city: 'Kampala',
    address: '13 Buganda Road, Kampala',
    phone: '+256-31-2250700',
    services: ['Emergency', 'ICU', 'Surgery', 'Diagnostics', 'Specialist Clinics']
  },
  {
    id: 'the-medical-hub-uganda',
    name: 'The Medical Hub',
    type: 'clinic',
    country: 'Uganda',
    city: 'Kampala',
    address: 'Village Mall, Bugolobi',
    services: ['General Practice', 'Pediatrics', 'Dental', 'Laboratory']
  },
  {
    id: 'nakasero-hospital-uganda',
    name: 'Nakasero Hospital',
    type: 'hospital',
    country: 'Uganda',
    city: 'Kampala',
    address: 'Akii Bua Road, Nakasero',
    services: ['Emergency', 'Cardiology', 'Oncology', 'Surgery']
  },
  {
    id: 'ecopharm-pharmacy-uganda',
    name: 'Ecopharm Pharmacy',
    type: 'pharmacy',
    country: 'Uganda',
    city: 'Kampala',
    address: 'Various locations',
    services: ['Prescription Drugs', 'OTC Medications', 'Health Consultation']
  },
  {
    id: 'vine-pharmacy-uganda',
    name: 'Vine Pharmacy',
    type: 'pharmacy',
    country: 'Uganda',
    city: 'Kampala',
    address: 'Various locations',
    services: ['Prescription Drugs', 'OTC Medications', 'Medical Supplies']
  },
  // Ethiopia
  {
    id: 'black-lion-hospital',
    name: 'Tikur Anbessa Specialized Hospital',
    type: 'hospital',
    country: 'Ethiopia',
    city: 'Addis Ababa',
    address: 'Lideta, Addis Ababa',
    phone: '+251-11-5517011',
    services: ['Emergency', 'Surgery', 'Internal Medicine', 'Neurology', 'Cardiology']
  },
  {
    id: 'st-pauls-hospital',
    name: 'St. Paul\'s Hospital Millennium Medical College',
    type: 'hospital',
    country: 'Ethiopia',
    city: 'Addis Ababa',
    address: 'Gulele, Addis Ababa',
    phone: '+251-11-2750125',
    services: ['Emergency', 'Surgery', 'Pediatrics', 'Maternity', 'Internal Medicine']
  },
  {
    id: 'mcm-hospital-addis',
    name: 'Myungsung Christian Medical Center (MCM)',
    type: 'hospital',
    country: 'Ethiopia',
    city: 'Addis Ababa',
    address: 'Gerji, Addis Ababa',
    phone: '+251-11-6292963',
    services: ['Emergency', 'Surgery', 'Internal Medicine', 'Pediatrics', 'Cardiology']
  },
  {
    id: 'zewditu-hospital-addis',
    name: 'Zewditu Memorial Hospital',
    type: 'hospital',
    country: 'Ethiopia',
    city: 'Addis Ababa',
    address: 'Cherkos, Addis Ababa',
    phone: '+251-11-5518085',
    services: ['Emergency', 'Maternity', 'Pediatrics', 'ART Clinic']
  },
  {
    id: 'alert-center-addis',
    name: 'ALERT Center',
    type: 'hospital',
    country: 'Ethiopia',
    city: 'Addis Ababa',
    address: 'Kolfe Keranio, Addis Ababa',
    phone: '+251-11-3711544',
    services: ['Leprosy', 'Dermatology', 'Ophthalmology', 'Rehabilitation']
  },
  {
    id: 'landmark-general-hospital-ethiopia',
    name: 'Landmark General Hospital',
    type: 'hospital',
    country: 'Ethiopia',
    city: 'Addis Ababa',
    address: 'Kirkos, Addis Ababa',
    services: ['Emergency', 'Surgery', 'Maternity', 'Pediatrics']
  },
  {
    id: 'bethzatha-health-service-ethiopia',
    name: 'Bethzatha Health Service',
    type: 'hospital',
    country: 'Ethiopia',
    city: 'Addis Ababa',
    address: 'Bole, Addis Ababa',
    services: ['General Practice', 'Specialist Clinics', 'Diagnostics']
  },
  {
    id: 'girum-hospital-ethiopia',
    name: 'Girum Hospital',
    type: 'hospital',
    country: 'Ethiopia',
    city: 'Addis Ababa',
    address: 'Bole, Addis Ababa',
    services: ['Emergency', 'Surgery', 'Internal Medicine']
  },
  {
    id: 'abyssinia-pharmacy-ethiopia',
    name: 'Abyssinia Pharmacy',
    type: 'pharmacy',
    country: 'Ethiopia',
    city: 'Addis Ababa',
    address: 'Piazza, Addis Ababa',
    services: ['Prescription Drugs', 'OTC Medications']
  },
  {
    id: 'medtech-ethiopia-clinic',
    name: 'Medtech Ethiopia',
    type: 'clinic',
    country: 'Ethiopia',
    city: 'Addis Ababa',
    address: 'Bole Medhanealem',
    services: ['Diagnostics', 'Laboratory', 'Radiology']
  },
  // Morocco
  {
    id: 'ibn-sina-hospital',
    name: 'Ibn Sina University Hospital',
    type: 'hospital',
    country: 'Morocco',
    city: 'Rabat',
    address: 'Rabat',
    phone: '+212-537-671717',
    services: ['Emergency', 'Surgery', 'Cardiology', 'Neurology', 'Oncology']
  },
  {
    id: 'cheikh-khalifa-hospital',
    name: 'Cheikh Khalifa Ibn Zaid Hospital',
    type: 'hospital',
    country: 'Morocco',
    city: 'Casablanca',
    address: 'Boulevard de la Mecque, Casablanca',
    phone: '+212-529-004400',
    services: ['Emergency', 'Oncology', 'Cardiology', 'Surgery', 'Radiology']
  },
  {
    id: 'clinique-internationale-marrakech',
    name: 'Clinique Internationale de Marrakech',
    type: 'hospital',
    country: 'Morocco',
    city: 'Marrakech',
    address: 'Route de l\'aéroport, Marrakech',
    services: ['Emergency', 'Surgery', 'Cardiology', 'Maternity']
  },
  {
    id: 'hopital-cheikh-zaid-rabat',
    name: 'Hôpital Cheikh Zaid',
    type: 'hospital',
    country: 'Morocco',
    city: 'Rabat',
    address: 'Avenue Allal Al Fassi, Rabat',
    services: ['Emergency', 'Specialist Care', 'Teaching']
  },
  {
    id: 'pharmacie-centrale-maroc',
    name: 'Pharmacie Centrale',
    type: 'pharmacy',
    country: 'Morocco',
    city: 'Casablanca',
    address: 'Boulevard Mohammed V, Casablanca',
    services: ['Prescription Drugs', 'OTC Medications']
  },
  {
    id: 'clinique-ghandi-maroc',
    name: 'Clinique Ghandi',
    type: 'clinic',
    country: 'Morocco',
    city: 'Casablanca',
    address: 'Boulevard Ghandi, Casablanca',
    services: ['General Practice', 'Specialist Clinics', 'Radiology']
  },
  {
    id: 'hopital-mohammed-vi-marrakech',
    name: 'Hôpital Universitaire International Mohammed VI',
    type: 'hospital',
    country: 'Morocco',
    city: 'Marrakech',
    address: 'Marrakech',
    services: ['Emergency', 'Surgery', 'Pediatrics', 'Oncology']
  },
  {
    id: 'polyclinique-rabat-maroc',
    name: 'Polyclinique Internationale de Rabat',
    type: 'hospital',
    country: 'Morocco',
    city: 'Rabat',
    address: 'Hay Riad, Rabat',
    services: ['Emergency', 'Surgery', 'Maternity', 'ICU']
  },
  {
    id: 'pharmacie-agdal-maroc',
    name: 'Pharmacie de l\'Agdal',
    type: 'pharmacy',
    country: 'Morocco',
    city: 'Rabat',
    address: 'Avenue de France, Agdal, Rabat',
    services: ['Prescription Drugs', 'OTC Medications', 'Health Products']
  },
  {
    id: 'centre-sante-urbain-maroc',
    name: 'Centre de Santé Urbain',
    type: 'clinic',
    country: 'Morocco',
    city: 'Various',
    address: 'Nationwide',
    services: ['Primary Care', 'Vaccinations', 'Maternal Health']
  },
  // Egypt
  {
    id: 'kasr-al-ainy-hospital',
    name: 'Kasr Al Ainy Hospital',
    type: 'hospital',
    country: 'Egypt',
    city: 'Cairo',
    address: 'Kasr Al Ainy St, Cairo',
    phone: '+20-2-23654060',
    services: ['Emergency', 'Surgery', 'Internal Medicine', 'Cardiology', 'Oncology']
  },
  {
    id: 'alexandria-university-hospital',
    name: 'Alexandria Main University Hospital',
    type: 'hospital',
    country: 'Egypt',
    city: 'Alexandria',
    address: 'Sultan Hussein St, Alexandria',
    phone: '+20-3-4861234',
    services: ['Emergency', 'Surgery', 'Pediatrics', 'Maternity', 'ICU']
  },
  {
    id: 'as-salam-international-hospital-egypt',
    name: 'As-Salam International Hospital',
    type: 'hospital',
    country: 'Egypt',
    city: 'Cairo',
    address: 'Corniche El Nile, Maadi, Cairo',
    services: ['Emergency', 'Cardiology', 'Oncology', 'Transplant']
  },
  {
    id: 'dar-al-fouad-hospital-egypt',
    name: 'Dar Al Fouad Hospital',
    type: 'hospital',
    country: 'Egypt',
    city: '6th of October City',
    address: '26th of July Corridor, 6th of October City',
    services: ['Emergency', 'Cardiac Surgery', 'Neurosurgery', 'ICU']
  },
  {
    id: 'seif-pharmacies-egypt',
    name: 'Seif Pharmacies',
    type: 'pharmacy',
    country: 'Egypt',
    city: 'Cairo',
    address: 'Various locations',
    services: ['Prescription Drugs', 'OTC Medications', 'Cosmetics']
  },
  {
    id: 'cleopatra-hospital-egypt',
    name: 'Cleopatra Hospital',
    type: 'hospital',
    country: 'Egypt',
    city: 'Cairo',
    address: 'Salah Salem St, Heliopolis, Cairo',
    services: ['Emergency', 'Surgery', 'Maternity', 'Pediatrics']
  },
  {
    id: 'saudi-german-hospital-cairo',
    name: 'Saudi German Hospital Cairo',
    type: 'hospital',
    country: 'Egypt',
    city: 'Cairo',
    address: 'Heliopolis, Cairo',
    services: ['Emergency', 'Orthopedics', 'Cardiology', 'IVF']
  },
  {
    id: 'al-gomhouria-pharmacies-egypt',
    name: 'Al-Gomhouria Pharmacies',
    type: 'pharmacy',
    country: 'Egypt',
    city: 'Alexandria',
    address: 'Various locations',
    services: ['Prescription Drugs', 'Medical Supplies']
  },
  {
    id: 'nile-badrawi-hospital-egypt',
    name: 'Nile Badrawi Hospital',
    type: 'hospital',
    country: 'Egypt',
    city: 'Cairo',
    address: 'Corniche El Nile, Maadi, Cairo',
    services: ['Emergency', 'Surgery', 'Internal Medicine', 'Radiology']
  },
  // DR Congo
  {
    id: 'kinshasa-general-hospital',
    name: 'Kinshasa General Hospital',
    type: 'hospital',
    country: 'DR Congo',
    city: 'Kinshasa',
    address: 'Gombe, Kinshasa',
    phone: '+243-81-5000000',
    services: ['Emergency', 'Surgery', 'Pediatrics', 'Maternity']
  },
  {
    id: 'monkole-hospital',
    name: 'Monkole Hospital',
    type: 'hospital',
    country: 'DR Congo',
    city: 'Kinshasa',
    address: 'Mont-Ngafula, Kinshasa',
    phone: '+243-81-7150100',
    services: ['Maternity', 'Pediatrics', 'Surgery', 'Internal Medicine', 'Laboratory']
  },
  {
    id: 'centre-medical-kinshasa-drc',
    name: 'Centre Medical de Kinshasa',
    type: 'hospital',
    country: 'DR Congo',
    city: 'Kinshasa',
    address: 'Gombe, Kinshasa',
    services: ['Emergency', 'Surgery', 'Pediatrics', 'Maternity']
  },
  {
    id: 'biamba-marie-mutombo-hospital-drc',
    name: 'Biamba Marie Mutombo Hospital',
    type: 'hospital',
    country: 'DR Congo',
    city: 'Kinshasa',
    address: 'Masina, Kinshasa',
    services: ['General Medicine', 'Pediatrics', 'Maternity']
  },
  {
    id: 'hopital-cinquantenaire-drc',
    name: 'Hôpital du Cinquantenaire',
    type: 'hospital',
    country: 'DR Congo',
    city: 'Kinshasa',
    address: 'Kasa-Vubu, Kinshasa',
    services: ['Emergency', 'Specialist Care', 'Surgery', 'Radiology']
  },
  {
    id: 'pharmacie-peuple-drc',
    name: 'Pharmacie du Peuple',
    type: 'pharmacy',
    country: 'DR Congo',
    city: 'Kinshasa',
    address: 'Boulevard du 30 Juin, Kinshasa',
    services: ['Prescription Drugs', 'OTC Medications']
  },
  {
    id: 'clinique-ngaliema-drc',
    name: 'Clinique Ngaliema',
    type: 'clinic',
    country: 'DR Congo',
    city: 'Kinshasa',
    address: 'Ngaliema, Kinshasa',
    services: ['General Practice', 'Specialist Clinics', 'Laboratory']
  },
  {
    id: 'hopital-panzi-drc',
    name: 'Hôpital Panzi',
    type: 'hospital',
    country: 'DR Congo',
    city: 'Bukavu',
    address: 'Bukavu, South Kivu',
    services: ['Gynaecology', 'Surgery', 'Trauma Care']
  },
  {
    id: 'pharmakina-drc',
    name: 'Pharmakina',
    type: 'pharmacy',
    country: 'DR Congo',
    city: 'Bukavu',
    address: 'Bukavu, South Kivu',
    services: ['Pharmaceutical Manufacturing', 'Distribution']
  },
  {
    id: 'centre-hospitalier-goma-drc',
    name: 'Centre Hospitalier de Goma',
    type: 'hospital',
    country: 'DR Congo',
    city: 'Goma',
    address: 'Goma, North Kivu',
    services: ['Emergency', 'Surgery', 'Pediatrics']
  },
  // Algeria
  {
    id: 'mustapha-pacha-hospital',
    name: 'Mustapha Pacha Hospital',
    type: 'hospital',
    country: 'Algeria',
    city: 'Algiers',
    address: 'Place du 1er Mai, Algiers',
    phone: '+213-21-235555',
    services: ['Emergency', 'Surgery', 'Cardiology', 'Neurology']
  },
  {
    id: 'oran-university-hospital',
    name: 'Oran University Hospital',
    type: 'hospital',
    country: 'Algeria',
    city: 'Oran',
    address: 'Oran',
    phone: '+213-41-412345',
    services: ['Emergency', 'Surgery', 'Pediatrics', 'Maternity', 'Oncology']
  },
  {
    id: 'clinique-al-azhar-algeria',
    name: 'Clinique Al Azhar',
    type: 'clinic',
    country: 'Algeria',
    city: 'Algiers',
    address: 'Dely Ibrahim, Algiers',
    services: ['Cardiology', 'Radiology', 'Specialist Consultations']
  },
  {
    id: 'hopital-central-armee-algeria',
    name: 'Hôpital Central de l\'Armée',
    type: 'hospital',
    country: 'Algeria',
    city: 'Algiers',
    address: 'Ain Naadja, Algiers',
    services: ['Emergency', 'Trauma', 'Specialist Military Care']
  },
  {
    id: 'pharmacie-el-kindi-algeria',
    name: 'Pharmacie El Kindi',
    type: 'pharmacy',
    country: 'Algeria',
    city: 'Algiers',
    address: 'Hydra, Algiers',
    services: ['Prescription Drugs', 'OTC Medications']
  },
  {
    id: 'chu-constantine-algeria',
    name: 'Centre Hospitalier Universitaire de Constantine',
    type: 'hospital',
    country: 'Algeria',
    city: 'Constantine',
    address: 'Constantine',
    services: ['Emergency', 'Teaching', 'Surgery', 'Internal Medicine']
  },
  {
    id: 'clinique-chahrazed-algeria',
    name: 'Clinique Chahrazed',
    type: 'clinic',
    country: 'Algeria',
    city: 'Algiers',
    address: 'Chéraga, Algiers',
    services: ['Maternity', 'Gynaecology', 'Pediatrics']
  },
  {
    id: 'hopital-blida-algeria',
    name: 'Hôpital de Blida',
    type: 'hospital',
    country: 'Algeria',
    city: 'Blida',
    address: 'Blida',
    services: ['Emergency', 'Psychiatry', 'General Medicine']
  },
  {
    id: 'pharmacie-glycines-algeria',
    name: 'Pharmacie des Glycines',
    type: 'pharmacy',
    country: 'Algeria',
    city: 'Algiers',
    address: 'El Biar, Algiers',
    services: ['Prescription Drugs', 'Health Products']
  },
  {
    id: 'ehs-dr-maouche-algeria',
    name: 'EHS Dr Maouche',
    type: 'hospital',
    country: 'Algeria',
    city: 'Algiers',
    address: 'El Biar, Algiers',
    services: ['Orthopedics', 'Traumatology', 'Rehabilitation']
  },
  // Sudan
  {
    id: 'khartoum-teaching-hospital',
    name: 'Khartoum Teaching Hospital',
    type: 'hospital',
    country: 'Sudan',
    city: 'Khartoum',
    address: 'Khartoum',
    phone: '+249-183-779500',
    services: ['Emergency', 'Surgery', 'Internal Medicine', 'Pediatrics']
  },
  {
    id: 'soba-university-hospital',
    name: 'Soba University Hospital',
    type: 'hospital',
    country: 'Sudan',
    city: 'Khartoum',
    address: 'Soba, Khartoum',
    phone: '+249-183-227788',
    services: ['Emergency', 'Surgery', 'Cardiology', 'Pediatrics', 'Maternity']
  },
  {
    id: 'royal-care-hospital-sudan',
    name: 'Royal Care International Hospital',
    type: 'hospital',
    country: 'Sudan',
    city: 'Khartoum',
    address: 'Burri, Khartoum',
    services: ['Emergency', 'ICU', 'Surgery', 'Specialist Clinics']
  },
  {
    id: 'al-zaytouna-hospital-sudan',
    name: 'Al-Zaytouna Hospital',
    type: 'hospital',
    country: 'Sudan',
    city: 'Khartoum',
    address: 'Khartoum',
    services: ['Emergency', 'Maternity', 'Pediatrics', 'Surgery']
  },
  {
    id: 'ibn-sina-hospital-sudan',
    name: 'Ibn Sina Hospital',
    type: 'hospital',
    country: 'Sudan',
    city: 'Khartoum',
    address: 'Khartoum',
    services: ['Emergency', 'Internal Medicine', 'Specialist Care']
  },
  {
    id: 'elnilein-pharmacy-sudan',
    name: 'Elnilein Pharmacy',
    type: 'pharmacy',
    country: 'Sudan',
    city: 'Khartoum',
    address: 'Khartoum',
    services: ['Prescription Drugs', 'OTC Medications']
  },
  {
    id: 'fedail-hospital-sudan',
    name: 'Fedail Hospital',
    type: 'hospital',
    country: 'Sudan',
    city: 'Khartoum',
    address: 'Khartoum',
    services: ['Emergency', 'Cardiology', 'Radiology']
  },
  {
    id: 'omdurman-teaching-hospital-sudan',
    name: 'Omdurman Teaching Hospital',
    type: 'hospital',
    country: 'Sudan',
    city: 'Omdurman',
    address: 'Omdurman',
    services: ['Emergency', 'Surgery', 'Pediatrics', 'Maternity']
  },
  {
    id: 'al-amal-hospital-sudan',
    name: 'Al-Amal National Hospital',
    type: 'hospital',
    country: 'Sudan',
    city: 'Khartoum',
    address: 'Khartoum',
    services: ['Oncology', 'Radiotherapy', 'Chemotherapy']
  },
  {
    id: 'blue-nile-pharmacy-sudan',
    name: 'Blue Nile Pharmacy',
    type: 'pharmacy',
    country: 'Sudan',
    city: 'Khartoum',
    address: 'Khartoum',
    services: ['Prescription Drugs', 'Medical Supplies']
  },
  // Angola
  {
    id: 'josina-machel-hospital',
    name: 'Josina Machel Hospital',
    type: 'hospital',
    country: 'Angola',
    city: 'Luanda',
    address: 'Luanda',
    phone: '+244-222-333333',
    services: ['Emergency', 'Surgery', 'Maternity', 'Pediatrics']
  },
  {
    id: 'clinica-girassol',
    name: 'Clínica Girassol',
    type: 'hospital',
    country: 'Angola',
    city: 'Luanda',
    address: 'Maianga, Luanda',
    phone: '+244-923-167-700',
    services: ['Emergency', 'Cardiology', 'Surgery', 'Radiology', 'Laboratory']
  },
  {
    id: 'luanda-medical-center-angola',
    name: 'Luanda Medical Center',
    type: 'clinic',
    country: 'Angola',
    city: 'Luanda',
    address: 'Talatona, Luanda',
    services: ['General Practice', 'Pediatrics', 'Gynaecology', 'Diagnostics']
  },
  {
    id: 'hospital-militar-principal-angola',
    name: 'Hospital Militar Principal',
    type: 'hospital',
    country: 'Angola',
    city: 'Luanda',
    address: 'Luanda',
    services: ['Emergency', 'Trauma', 'Surgery', 'Specialist Military Care']
  },
  {
    id: 'farmacia-popular-angola',
    name: 'Farmácia Popular',
    type: 'pharmacy',
    country: 'Angola',
    city: 'Luanda',
    address: 'Various locations',
    services: ['Prescription Drugs', 'OTC Medications']
  },
  {
    id: 'sagrada-esperanca-clinic-angola',
    name: 'Sagrada Esperança Clinic',
    type: 'clinic',
    country: 'Angola',
    city: 'Luanda',
    address: 'Ilha de Luanda',
    services: ['Emergency', 'General Practice', 'Pediatrics']
  },
  {
    id: 'multiperfil-clinic-angola',
    name: 'Multiperfil Clinic',
    type: 'clinic',
    country: 'Angola',
    city: 'Luanda',
    address: 'Talatona, Luanda',
    services: ['Specialist Consultations', 'Radiology', 'Laboratory']
  },
  {
    id: 'prenda-hospital-angola',
    name: 'Prenda Hospital',
    type: 'hospital',
    country: 'Angola',
    city: 'Luanda',
    address: 'Prenda, Luanda',
    services: ['Emergency', 'General Medicine', 'Maternity']
  },
  {
    id: 'farmacia-de-angola',
    name: 'Farmácia de Angola',
    type: 'pharmacy',
    country: 'Angola',
    city: 'Luanda',
    address: 'Maianga, Luanda',
    services: ['Prescription Drugs', 'Health Products']
  },
  {
    id: 'hospital-americo-boavida-angola',
    name: 'Hospital Américo Boavida',
    type: 'hospital',
    country: 'Angola',
    city: 'Luanda',
    address: 'Luanda',
    services: ['Emergency', 'Teaching', 'Internal Medicine', 'Surgery']
  },
  // Mozambique
  {
    id: 'maputo-central-hospital',
    name: 'Maputo Central Hospital',
    type: 'hospital',
    country: 'Mozambique',
    city: 'Maputo',
    address: 'Av. Eduardo Mondlane, Maputo',
    phone: '+258-21-325000',
    services: ['Emergency', 'Surgery', 'Internal Medicine', 'Pediatrics']
  },
  {
    id: 'clinica-especial-maputo',
    name: 'Clínica Especial de Maputo',
    type: 'clinic',
    country: 'Mozambique',
    city: 'Maputo',
    address: 'Av. 24 de Julho, Maputo',
    phone: '+258-84-301-2345',
    services: ['General Practice', 'Pediatrics', 'Gynaecology', 'Laboratory']
  },
  {
    id: 'icor-mozambique',
    name: 'ICOR - Instituto do Coração',
    type: 'hospital',
    country: 'Mozambique',
    city: 'Maputo',
    address: 'Av. da Marginal, Maputo',
    services: ['Cardiology', 'Cardiac Surgery', 'Diagnostics']
  },
  {
    id: 'hospital-privado-maputo',
    name: 'Hospital Privado de Maputo',
    type: 'hospital',
    country: 'Mozambique',
    city: 'Maputo',
    address: 'Av. Julius Nyerere, Maputo',
    services: ['Emergency', 'Surgery', 'Maternity', 'ICU']
  },
  {
    id: 'farmacia-normal-mozambique',
    name: 'Farmácia Normal',
    type: 'pharmacy',
    country: 'Mozambique',
    city: 'Maputo',
    address: 'Various locations',
    services: ['Prescription Drugs', 'OTC Medications']
  },
  {
    id: 'sommerschield-clinic-mozambique',
    name: 'Sommerschield Clinic',
    type: 'clinic',
    country: 'Mozambique',
    city: 'Maputo',
    address: 'Av. Kim Il Sung, Maputo',
    services: ['General Practice', 'Travel Medicine', 'Vaccinations']
  },
  {
    id: 'hospital-central-beira-mozambique',
    name: 'Hospital Central da Beira',
    type: 'hospital',
    country: 'Mozambique',
    city: 'Beira',
    address: 'Beira, Sofala',
    services: ['Emergency', 'Surgery', 'Pediatrics', 'Maternity']
  },
  {
    id: 'farmacia-internacional-mozambique',
    name: 'Farmácia Internacional',
    type: 'pharmacy',
    country: 'Mozambique',
    city: 'Maputo',
    address: 'Av. 25 de Setembro, Maputo',
    services: ['Prescription Drugs', 'Health Products']
  },
  {
    id: 'clinica-tchumene-mozambique',
    name: 'Clínica de Tchumene',
    type: 'clinic',
    country: 'Mozambique',
    city: 'Matola',
    address: 'Tchumene, Matola',
    services: ['General Practice', 'Maternity', 'Laboratory']
  },
  {
    id: 'hospital-provincial-nampula-mozambique',
    name: 'Hospital Provincial de Nampula',
    type: 'hospital',
    country: 'Mozambique',
    city: 'Nampula',
    address: 'Nampula',
    services: ['Emergency', 'Surgery', 'Internal Medicine']
  },
  // Madagascar
  {
    id: 'hjra-hospital',
    name: 'HJRA Hospital',
    type: 'hospital',
    country: 'Madagascar',
    city: 'Antananarivo',
    address: 'Ampefiloha, Antananarivo',
    phone: '+261-20-22-22384',
    services: ['Emergency', 'Surgery', 'Maternity', 'Pediatrics']
  },
  {
    id: 'chu-ravoahangy',
    name: 'CHU Joseph Ravoahangy Andrianavalona',
    type: 'hospital',
    country: 'Madagascar',
    city: 'Antananarivo',
    address: 'Anosy, Antananarivo',
    phone: '+261-20-22-22384',
    services: ['Emergency', 'Surgery', 'Internal Medicine', 'Pediatrics', 'Oncology']
  },
  {
    id: 'polyclinique-ilafy-madagascar',
    name: 'Polyclinique d\'Ilafy',
    type: 'clinic',
    country: 'Madagascar',
    city: 'Antananarivo',
    address: 'Ilafy, Antananarivo',
    services: ['General Practice', 'Specialist Consultations', 'Radiology']
  },
  {
    id: 'chusoa-madagascar',
    name: 'Centre Hospitalier de Soavinandriana (CHUSOA)',
    type: 'hospital',
    country: 'Madagascar',
    city: 'Antananarivo',
    address: 'Soavinandriana, Antananarivo',
    services: ['Emergency', 'Military Hospital', 'Surgery']
  },
  {
    id: 'pharmacie-ocean-indien-madagascar',
    name: 'Pharmacie de l\'Océan Indien',
    type: 'pharmacy',
    country: 'Madagascar',
    city: 'Antananarivo',
    address: 'Analakely, Antananarivo',
    services: ['Prescription Drugs', 'OTC Medications']
  },
  {
    id: 'espace-medical-madagascar',
    name: 'Espace Médical',
    type: 'clinic',
    country: 'Madagascar',
    city: 'Antananarivo',
    address: 'Ambatoroka, Antananarivo',
    services: ['Diagnostics', 'Laboratory', 'Specialist Clinics']
  },
  {
    id: 'hopital-lutherien-antsirabe-madagascar',
    name: 'Hôpital Luthérien d\'Antsirabe',
    type: 'hospital',
    country: 'Madagascar',
    city: 'Antsirabe',
    address: 'Antsirabe',
    services: ['General Medicine', 'Surgery', 'Maternity']
  },
  {
    id: 'pharmacie-gare-madagascar',
    name: 'Pharmacie de la Gare',
    type: 'pharmacy',
    country: 'Madagascar',
    city: 'Antananarivo',
    address: 'Soarano, Antananarivo',
    services: ['Prescription Drugs', 'Health Products']
  },
  {
    id: 'clinique-anosys-madagascar',
    name: 'Clinique des Anosys',
    type: 'clinic',
    country: 'Madagascar',
    city: 'Antananarivo',
    address: 'Anosy, Antananarivo',
    services: ['Maternity', 'Pediatrics', 'Gynaecology']
  },
  {
    id: 'hopital-militaire-madagascar',
    name: 'Hôpital Militaire',
    type: 'hospital',
    country: 'Madagascar',
    city: 'Antananarivo',
    address: 'Soavinandriana, Antananarivo',
    services: ['Emergency', 'Surgery', 'Specialist Military Care']
  },
  // Cameroon
  {
    id: 'yaounde-central-hospital',
    name: 'Yaoundé Central Hospital',
    type: 'hospital',
    country: 'Cameroon',
    city: 'Yaoundé',
    address: 'Messa, Yaoundé',
    phone: '+237-222-222525',
    services: ['Emergency', 'Surgery', 'Internal Medicine', 'Pediatrics']
  },
  {
    id: 'douala-general-hospital',
    name: 'Douala General Hospital',
    type: 'hospital',
    country: 'Cameroon',
    city: 'Douala',
    address: 'Yassa, Douala',
    phone: '+237-233-501100',
    services: ['Emergency', 'Surgery', 'Pediatrics', 'Maternity', 'Cardiology']
  },
  {
    id: 'polyclinique-internationale-douala-cameroon',
    name: 'Polyclinique Internationale de Douala',
    type: 'clinic',
    country: 'Cameroon',
    city: 'Douala',
    address: 'Bonapriso, Douala',
    services: ['Emergency', 'Surgery', 'Maternity', 'Radiology']
  },
  {
    id: 'hopital-gyneco-yaounde-cameroon',
    name: 'Hôpital Gynéco-Obstétrique et Pédiatrique de Yaoundé',
    type: 'hospital',
    country: 'Cameroon',
    city: 'Yaoundé',
    address: 'Ngousso, Yaoundé',
    services: ['Maternity', 'Pediatrics', 'Gynaecology']
  },
  {
    id: 'pharmacie-centre-cameroon',
    name: 'Pharmacie du Centre',
    type: 'pharmacy',
    country: 'Cameroon',
    city: 'Yaoundé',
    address: 'Centre Ville, Yaoundé',
    services: ['Prescription Drugs', 'OTC Medications']
  },
  {
    id: 'centre-hospitalier-essos-cameroon',
    name: 'Centre Hospitalier d\'Essos',
    type: 'hospital',
    country: 'Cameroon',
    city: 'Yaoundé',
    address: 'Essos, Yaoundé',
    services: ['Emergency', 'General Medicine', 'Surgery']
  },
  {
    id: 'clinique-aeroport-cameroon',
    name: 'Clinique de l\'Aéroport',
    type: 'clinic',
    country: 'Cameroon',
    city: 'Douala',
    address: 'Bonanjo, Douala',
    services: ['General Practice', 'Vaccinations', 'Travel Medicine']
  },
  {
    id: 'hopital-laquintinie-douala-cameroon',
    name: 'Hôpital Laquintinie de Douala',
    type: 'hospital',
    country: 'Cameroon',
    city: 'Douala',
    address: 'Akwa, Douala',
    services: ['Emergency', 'Surgery', 'Internal Medicine', 'Pediatrics']
  },
  {
    id: 'pharmacie-independance-cameroon',
    name: 'Pharmacie de l\'Indépendance',
    type: 'pharmacy',
    country: 'Cameroon',
    city: 'Douala',
    address: 'Akwa, Douala',
    services: ['Prescription Drugs', 'Health Products']
  },
  {
    id: 'centre-urgences-yaounde-cameroon',
    name: 'Centre des Urgences de Yaoundé (CURY)',
    type: 'hospital',
    country: 'Cameroon',
    city: 'Yaoundé',
    address: 'Melen, Yaoundé',
    services: ['Emergency', 'Trauma', 'ICU']
  },
  // Côte d'Ivoire
  {
    id: 'chu-de-treichville',
    name: 'CHU de Treichville',
    type: 'hospital',
    country: 'Côte d\'Ivoire',
    city: 'Abidjan',
    address: 'Treichville, Abidjan',
    phone: '+225-21-249155',
    services: ['Emergency', 'Surgery', 'Cardiology', 'Neurology']
  },
  {
    id: 'chu-de-cocody',
    name: 'CHU de Cocody',
    type: 'hospital',
    country: 'Côte d\'Ivoire',
    city: 'Abidjan',
    address: 'Cocody, Abidjan',
    phone: '+225-22-481000',
    services: ['Emergency', 'Surgery', 'Pediatrics', 'Maternity', 'Internal Medicine']
  },
  {
    id: 'pisam-ci',
    name: 'Polyclinique Internationale Sainte Anne-Marie (PISAM)',
    type: 'hospital',
    country: 'Côte d\'Ivoire',
    city: 'Abidjan',
    address: 'Cocody, Abidjan',
    services: ['Emergency', 'Surgery', 'Maternity', 'ICU', 'Radiology']
  },
  {
    id: 'hopital-mere-enfant-bingerville-ci',
    name: 'Hôpital Mère-Enfant de Bingerville',
    type: 'hospital',
    country: 'Côte d\'Ivoire',
    city: 'Abidjan',
    address: 'Bingerville',
    services: ['Maternity', 'Pediatrics', 'Gynaecology']
  },
  {
    id: 'pharmacie-lagunes-ci',
    name: 'Pharmacie des Lagunes',
    type: 'pharmacy',
    country: 'Côte d\'Ivoire',
    city: 'Abidjan',
    address: 'Plateau, Abidjan',
    services: ['Prescription Drugs', 'OTC Medications']
  },
  {
    id: 'centre-medical-providence-ci',
    name: 'Centre Médical La Providence',
    type: 'clinic',
    country: 'Côte d\'Ivoire',
    city: 'Abidjan',
    address: 'Cocody, Abidjan',
    services: ['General Practice', 'Specialist Consultations', 'Laboratory']
  },
  {
    id: 'hopital-militaire-abidjan-ci',
    name: 'Hôpital Militaire d\'Abidjan (HMA)',
    type: 'hospital',
    country: 'Côte d\'Ivoire',
    city: 'Abidjan',
    address: 'Abobo, Abidjan',
    services: ['Emergency', 'Surgery', 'Specialist Military Care']
  },
  {
    id: 'clinique-la-rochelle-ci',
    name: 'Clinique La Rochelle',
    type: 'clinic',
    country: 'Côte d\'Ivoire',
    city: 'Abidjan',
    address: 'Treichville, Abidjan',
    services: ['General Practice', 'Minor Surgery', 'Maternity']
  },
  {
    id: 'pharmacie-vallon-ci',
    name: 'Pharmacie du Vallon',
    type: 'pharmacy',
    country: 'Côte d\'Ivoire',
    city: 'Abidjan',
    address: 'Cocody II Plateaux',
    services: ['Prescription Drugs', 'Health Products']
  },
  {
    id: 'chu-bouake-ci',
    name: 'CHU de Bouaké',
    type: 'hospital',
    country: 'Côte d\'Ivoire',
    city: 'Bouaké',
    address: 'Bouaké',
    services: ['Emergency', 'Surgery', 'Pediatrics', 'Internal Medicine']
  },
  // Zambia
  {
    id: 'uth-lusaka',
    name: 'University Teaching Hospital',
    type: 'hospital',
    country: 'Zambia',
    city: 'Lusaka',
    address: 'Nationalist Road, Lusaka',
    phone: '+260-211-251440',
    services: ['Emergency', 'Surgery', 'Internal Medicine', 'Pediatrics']
  },
  {
    id: 'levy-mwanawasa-hospital',
    name: 'Levy Mwanawasa University Teaching Hospital',
    type: 'hospital',
    country: 'Zambia',
    city: 'Lusaka',
    address: 'Chainama Hills, Lusaka',
    phone: '+260-211-290400',
    services: ['Emergency', 'Surgery', 'Pediatrics', 'Maternity', 'Oncology']
  },
  {
    id: 'coptic-hospital-zambia',
    name: 'Coptic Hospital',
    type: 'hospital',
    country: 'Zambia',
    city: 'Lusaka',
    address: 'Chainama, Lusaka',
    services: ['General Medicine', 'Surgery', 'Maternity', 'Pediatrics']
  },
  {
    id: 'cfb-medical-centre-zambia',
    name: 'CFB Medical Centre',
    type: 'clinic',
    country: 'Zambia',
    city: 'Lusaka',
    address: 'Various locations',
    services: ['General Practice', 'Dental', 'Laboratory']
  },
  {
    id: 'health-plus-pharmacy-zambia',
    name: 'Health-Plus Pharmacy',
    type: 'pharmacy',
    country: 'Zambia',
    city: 'Lusaka',
    address: 'Various locations',
    services: ['Prescription Drugs', 'OTC Medications']
  },
  {
    id: 'victoria-hospital-zambia',
    name: 'Victoria Hospital',
    type: 'hospital',
    country: 'Zambia',
    city: 'Lusaka',
    address: 'Kalundu, Lusaka',
    services: ['Emergency', 'Surgery', 'Specialist Clinics']
  },
  {
    id: 'medland-hospital-zambia',
    name: 'Medland Hospital',
    type: 'hospital',
    country: 'Zambia',
    city: 'Lusaka',
    address: 'Longacres, Lusaka',
    services: ['Emergency', 'Cardiology', 'Orthopedics', 'ICU']
  },
  {
    id: 'kanyama-general-hospital-zambia',
    name: 'Kanyama General Hospital',
    type: 'hospital',
    country: 'Zambia',
    city: 'Lusaka',
    address: 'Kanyama, Lusaka',
    services: ['Emergency', 'General Medicine', 'Maternity']
  },
  {
    id: 'big-b-pharmacy-zambia',
    name: 'Big-B Pharmacy',
    type: 'pharmacy',
    country: 'Zambia',
    city: 'Lusaka',
    address: 'Various locations',
    services: ['Prescription Drugs', 'Health Products']
  },
  {
    id: 'progress-medical-centre-zambia',
    name: 'Progress Medical Centre',
    type: 'clinic',
    country: 'Zambia',
    city: 'Kitwe',
    address: 'Kitwe',
    services: ['General Practice', 'Minor Surgery', 'Laboratory']
  },
  // Senegal
  {
    id: 'le-dantec-hospital',
    name: 'Le Dantec University Hospital',
    type: 'hospital',
    country: 'Senegal',
    city: 'Dakar',
    address: 'Avenue Pasteur, Dakar',
    phone: '+221-33-8893800',
    services: ['Emergency', 'Surgery', 'Infectious Diseases', 'Pediatrics']
  },
  {
    id: 'hopital-principal-dakar',
    name: 'Hôpital Principal de Dakar',
    type: 'hospital',
    country: 'Senegal',
    city: 'Dakar',
    address: 'Plateau, Dakar',
    phone: '+221-33-8395050',
    services: ['Emergency', 'Surgery', 'Cardiology', 'Neurology', 'Radiology']
  },
  {
    id: 'hopital-fann-senegal',
    name: 'Hôpital Fann',
    type: 'hospital',
    country: 'Senegal',
    city: 'Dakar',
    address: 'Fann, Dakar',
    services: ['Neurology', 'Psychiatry', 'Infectious Diseases']
  },
  {
    id: 'clinique-madeleine-senegal',
    name: 'Clinique de la Madeleine',
    type: 'clinic',
    country: 'Senegal',
    city: 'Dakar',
    address: 'Plateau, Dakar',
    services: ['General Practice', 'Specialist Consultations', 'Maternity']
  },
  {
    id: 'pharmacie-guigon-senegal',
    name: 'Pharmacie Guigon',
    type: 'pharmacy',
    country: 'Senegal',
    city: 'Dakar',
    address: 'Plateau, Dakar',
    services: ['Prescription Drugs', 'OTC Medications', 'Health Products']
  },
  {
    id: 'centre-hospitalier-pikine-senegal',
    name: 'Centre Hospitalier National de Pikine',
    type: 'hospital',
    country: 'Senegal',
    city: 'Dakar',
    address: 'Pikine, Dakar',
    services: ['Emergency', 'General Medicine', 'Surgery']
  },
  {
    id: 'clinique-casahous-senegal',
    name: 'Clinique Casahous',
    type: 'clinic',
    country: 'Senegal',
    city: 'Dakar',
    address: 'Fann, Dakar',
    services: ['Pediatrics', 'Gynaecology', 'General Practice']
  },
  {
    id: 'hopital-ziguinchor-senegal',
    name: 'Hôpital de Ziguinchor',
    type: 'hospital',
    country: 'Senegal',
    city: 'Ziguinchor',
    address: 'Ziguinchor',
    services: ['Emergency', 'Surgery', 'Maternity']
  },
  {
    id: 'pharmacie-point-e-senegal',
    name: 'Pharmacie du Point E',
    type: 'pharmacy',
    country: 'Senegal',
    city: 'Dakar',
    address: 'Point E, Dakar',
    services: ['Prescription Drugs', 'OTC Medications']
  },
  // Zimbabwe
  {
    id: 'parirenyatwa-hospital',
    name: 'Parirenyatwa General Hospital',
    type: 'hospital',
    country: 'Zimbabwe',
    city: 'Harare',
    address: 'Mazowe Street, Harare',
    phone: '+263-4-794411',
    services: ['Emergency', 'Surgery', 'Internal Medicine', 'Pediatrics']
  },
  {
    id: 'harare-central-hospital',
    name: 'Harare Central Hospital',
    type: 'hospital',
    country: 'Zimbabwe',
    city: 'Harare',
    address: 'Southerton, Harare',
    phone: '+263-4-621000',
    services: ['Emergency', 'Surgery', 'Pediatrics', 'Maternity', 'Psychiatry']
  },
  {
    id: 'avenues-clinic-zimbabwe',
    name: 'Avenues Clinic',
    type: 'hospital',
    country: 'Zimbabwe',
    city: 'Harare',
    address: 'Avenues, Harare',
    services: ['Emergency', 'ICU', 'Surgery', 'Maternity']
  },
  {
    id: 'baines-avenues-clinic-zimbabwe',
    name: 'Baines Avenues Clinic',
    type: 'clinic',
    country: 'Zimbabwe',
    city: 'Harare',
    address: 'Avenues, Harare',
    services: ['General Practice', 'Specialist Consultations']
  },
  {
    id: 'greenwood-park-pharmacy-zimbabwe',
    name: 'Greenwood Park Pharmacy',
    type: 'pharmacy',
    country: 'Zimbabwe',
    city: 'Harare',
    address: 'Harare',
    services: ['Prescription Drugs', 'OTC Medications']
  },
  {
    id: 'mater-dei-hospital-zimbabwe',
    name: 'Mater Dei Hospital',
    type: 'hospital',
    country: 'Zimbabwe',
    city: 'Bulawayo',
    address: 'Bulawayo',
    services: ['Emergency', 'Surgery', 'Pediatrics', 'Maternity']
  },
  {
    id: 'west-end-hospital-zimbabwe',
    name: 'West End Hospital',
    type: 'hospital',
    country: 'Zimbabwe',
    city: 'Harare',
    address: 'Harare',
    services: ['Emergency', 'Surgery', 'Specialist Care']
  },
  {
    id: 'borrowdale-medical-centre-zimbabwe',
    name: 'Borrowdale Medical Centre',
    type: 'clinic',
    country: 'Zimbabwe',
    city: 'Harare',
    address: 'Borrowdale, Harare',
    services: ['General Practice', 'Emergency', 'Radiology']
  },
  {
    id: 'medix-pharmacy-zimbabwe',
    name: 'Medix Pharmacy',
    type: 'pharmacy',
    country: 'Zimbabwe',
    city: 'Harare',
    address: 'Various locations',
    services: ['Prescription Drugs', 'Health Products']
  },
  {
    id: 'claybank-clinic-zimbabwe',
    name: 'Claybank Clinic',
    type: 'clinic',
    country: 'Zimbabwe',
    city: 'Gweru',
    address: 'Gweru',
    services: ['General Practice', 'Maternity', 'Minor Surgery']
  },
  // Rwanda
  {
    id: 'king-faisal-hospital-kigali',
    name: 'King Faisal Hospital',
    type: 'hospital',
    country: 'Rwanda',
    city: 'Kigali',
    address: 'Kacyiru District, Kigali',
    phone: '+250-252-588888',
    services: ['Emergency', 'Surgery', 'Cardiology', 'Neurosurgery', 'Oncology']
  },
  {
    id: 'chuk-kigali',
    name: 'University Teaching Hospital of Kigali (CHUK)',
    type: 'hospital',
    country: 'Rwanda',
    city: 'Kigali',
    address: 'Nyarugenge District, Kigali',
    services: ['Referral care', 'Teaching', 'General medicine', 'Surgery']
  },
  {
    id: 'muhima-district-hospital',
    name: 'Muhima District Hospital',
    type: 'hospital',
    country: 'Rwanda',
    city: 'Kigali',
    address: 'Muhima, Nyarugenge, Kigali',
    services: ['General medicine', 'Outpatient', 'Maternity']
  },
  {
    id: 'kibagabaga-hospital',
    name: 'Kibagabaga Level Two Teaching Hospital',
    type: 'hospital',
    country: 'Rwanda',
    city: 'Kigali',
    address: 'Kimironko, Gasabo, Kigali',
    services: ['General medicine', 'Teaching', 'Emergency care']
  },
  {
    id: 'ndera-neuropsychiatric-hospital',
    name: 'Ndera Neuropsychiatric Teaching Hospital',
    type: 'hospital',
    country: 'Rwanda',
    city: 'Kigali',
    address: 'Ndera Sector, Gasabo, Kigali',
    services: ['Psychiatry', 'Neurology', 'Referral', 'Teaching']
  },
  {
    id: 'masaka-district-hospital',
    name: 'Masaka District Hospital',
    type: 'hospital',
    country: 'Rwanda',
    city: 'Kigali',
    address: 'Masaka, Kicukiro, Kigali',
    services: ['General district hospital care']
  },
  {
    id: 'rwanda-military-hospital',
    name: 'Rwanda Military Hospital',
    type: 'hospital',
    country: 'Rwanda',
    city: 'Kigali',
    address: 'Kanombe, Kigali',
    phone: '+250-252-586420',
    services: ['Emergency', 'Surgery', 'Pediatrics', 'Maternity', 'Trauma']
  },
  {
    id: 'rwinkwavu-district-hospital',
    name: 'Rwinkwavu District Hospital',
    type: 'hospital',
    country: 'Rwanda',
    city: 'Kayonza',
    address: 'Kayonza, Eastern Province',
    phone: '+250-788-358-810',
    services: ['General district hospital', 'Maternity', 'Emergency']
  },
  {
    id: 'kirehe-district-hospital',
    name: 'Kirehe District Hospital',
    type: 'hospital',
    country: 'Rwanda',
    city: 'Kirehe',
    address: 'Kirehe, Eastern Province',
    services: ['District-level outpatient & inpatient care']
  },
  {
    id: 'kibungo-hospital',
    name: 'Kibungo Level Two Teaching Hospital',
    type: 'hospital',
    country: 'Rwanda',
    city: 'Ngoma',
    address: 'Ngoma District, Eastern Province',
    services: ['Teaching hospital', 'Specialized care']
  },
  {
    id: 'nyagatare-district-hospital',
    name: 'Nyagatare District Hospital',
    type: 'hospital',
    country: 'Rwanda',
    city: 'Nyagatare',
    address: 'Nyagatare, Eastern Province',
    services: ['Inpatient/outpatient district services']
  },
  {
    id: 'rwamagana-hospital',
    name: 'Rwamagana Level Two Teaching Hospital',
    type: 'hospital',
    country: 'Rwanda',
    city: 'Rwamagana',
    address: 'Rwamagana, Eastern Province',
    services: ['Teaching hospital', 'General medicine']
  },
  {
    id: 'chub-butare',
    name: 'University Teaching Hospital of Butare (CHUB)',
    type: 'hospital',
    country: 'Rwanda',
    city: 'Butare',
    address: 'Butare (Huye District), Southern Province',
    phone: '+250-788-300-952',
    services: ['Referral care', 'Teaching', 'General services']
  },
  {
    id: 'gitwe-hospital',
    name: 'Gitwe Hospital',
    type: 'hospital',
    country: 'Rwanda',
    city: 'Ruhango',
    address: 'Ruhango District, Southern Province',
    services: ['District hospital services']
  },
  {
    id: 'nyanza-hospital',
    name: 'Nyanza Hospital',
    type: 'hospital',
    country: 'Rwanda',
    city: 'Nyanza',
    address: 'Nyanza District, Southern Province',
    services: ['District hospital services']
  },
  {
    id: 'ruhango-hospital',
    name: 'Ruhango Hospital',
    type: 'hospital',
    country: 'Rwanda',
    city: 'Ruhango',
    address: 'Ruhango District, Southern Province',
    services: ['General district services']
  },
  {
    id: 'kibagabaga-hospital-pharmacy',
    name: 'Kibagabaga District Hospital – Pharmacy',
    type: 'pharmacy',
    country: 'Rwanda',
    city: 'Kigali',
    address: 'Kimironko, Gasabo, Kigali',
    services: ['General medication dispensing']
  },
  {
    id: 'chuk-pharmacy',
    name: 'CHUK – Pharmacy',
    type: 'pharmacy',
    country: 'Rwanda',
    city: 'Kigali',
    address: 'Nyarugenge, Kigali',
    services: ['Referral hospital medications']
  },
  {
    id: 'muhima-hospital-pharmacy',
    name: 'Muhima Hospital – Pharmacy',
    type: 'pharmacy',
    country: 'Rwanda',
    city: 'Kigali',
    address: 'Muhima, Kigali',
    services: ['General hospital medications']
  },
  {
    id: 'masaka-hospital-pharmacy',
    name: 'Masaka Hospital – Pharmacy',
    type: 'pharmacy',
    country: 'Rwanda',
    city: 'Kigali',
    address: 'Masaka, Kigali',
    services: ['District hospital medications']
  },
  {
    id: 'ndera-neuropsychiatric-hospital-pharmacy',
    name: 'Ndera Neuropsychiatric Hospital – Pharmacy',
    type: 'pharmacy',
    country: 'Rwanda',
    city: 'Kigali',
    address: 'Ndera, Kigali',
    services: ['Psychiatry medications']
  },
  {
    id: 'rwanda-military-hospital-pharmacy',
    name: 'Rwanda Military Hospital – Pharmacy',
    type: 'pharmacy',
    country: 'Rwanda',
    city: 'Kigali',
    address: 'Kanombe, Kigali',
    services: ['Military hospital medications']
  },
  {
    id: 'rwamagana-hospital-pharmacy',
    name: 'Rwamagana Hospital – Pharmacy',
    type: 'pharmacy',
    country: 'Rwanda',
    city: 'Rwamagana',
    address: 'Rwamagana, Eastern Province',
    services: ['Regional hospital medications']
  },
  {
    id: 'munini-hospital-pharmacy',
    name: 'Munini Hospital – Pharmacy',
    type: 'pharmacy',
    country: 'Rwanda',
    city: 'Nyanza',
    address: 'Nyanza, Southern Province',
    services: ['Southern region district medications']
  },
  {
    id: 'ruhengeri-hospital-pharmacy',
    name: 'Ruhengeri Hospital – Pharmacy',
    type: 'pharmacy',
    country: 'Rwanda',
    city: 'Muhura',
    address: 'Muhura, Northern Province',
    services: ['Northern regional hospital medications']
  },
  {
    id: 'ruli-district-hospital-pharmacy',
    name: 'Ruli District Hospital – Pharmacy',
    type: 'pharmacy',
    country: 'Rwanda',
    city: 'Muhura',
    address: 'Muhura, Northern Province',
    services: ['General medications']
  },
  // Tunisia
  {
    id: 'charles-nicolle-hospital',
    name: 'Charles Nicolle Hospital',
    type: 'hospital',
    country: 'Tunisia',
    city: 'Tunis',
    address: 'Boulevard du 9 Avril 1938, Tunis',
    phone: '+216-71-578366',
    services: ['Emergency', 'Surgery', 'Internal Medicine', 'Pediatrics']
  },
  {
    id: 'la-rabta-hospital',
    name: 'La Rabta Hospital',
    type: 'hospital',
    country: 'Tunisia',
    city: 'Tunis',
    address: 'Jabbari, Tunis',
    phone: '+216-71-578000',
    services: ['Emergency', 'Cardiology', 'Neurology', 'Oncology', 'Radiology']
  },
  {
    id: 'clinique-el-amen-tunisia',
    name: 'Clinique El Amen',
    type: 'clinic',
    country: 'Tunisia',
    city: 'Tunis',
    address: 'La Marsa, Tunis',
    services: ['Emergency', 'Surgery', 'Maternity', 'Radiology']
  },
  {
    id: 'hopital-militaire-tunis',
    name: 'Hôpital Militaire Principal d\'Instruction de Tunis',
    type: 'hospital',
    country: 'Tunisia',
    city: 'Tunis',
    address: 'Montfleury, Tunis',
    services: ['Emergency', 'Trauma', 'Specialist Military Care']
  },
  {
    id: 'pharmacie-centrale-tunisie',
    name: 'Pharmacie Centrale de Tunisie',
    type: 'pharmacy',
    country: 'Tunisia',
    city: 'Tunis',
    address: 'El Menzah, Tunis',
    services: ['Pharmaceutical Distribution']
  },
  {
    id: 'clinique-carthagene-tunisia',
    name: 'Clinique Carthagène',
    type: 'clinic',
    country: 'Tunisia',
    city: 'Tunis',
    address: 'Centre Urbain Nord, Tunis',
    services: ['Cardiology', 'Cosmetic Surgery', 'IVF']
  },
  {
    id: 'hopital-sahloul-tunisia',
    name: 'Hôpital Sahloul',
    type: 'hospital',
    country: 'Tunisia',
    city: 'Sousse',
    address: 'Sousse',
    services: ['Emergency', 'Surgery', 'Pediatrics', 'Maternity']
  },
  {
    id: 'polyclinique-jasmins-tunisia',
    name: 'Polyclinique Les Jasmins',
    type: 'clinic',
    country: 'Tunisia',
    city: 'Tunis',
    address: 'Centre Urbain Nord, Tunis',
    services: ['General Practice', 'Specialist Clinics', 'Diagnostics']
  },
  {
    id: 'pharmacie-de-nuit-tunisia',
    name: 'Pharmacie de Nuit',
    type: 'pharmacy',
    country: 'Tunisia',
    city: 'Tunis',
    address: 'Various locations',
    services: ['24/7 Pharmacy Services']
  },
  {
    id: 'hopital-habib-thameur-tunisia',
    name: 'Hôpital Habib Thameur',
    type: 'hospital',
    country: 'Tunisia',
    city: 'Tunis',
    address: 'Montfleury, Tunis',
    services: ['Emergency', 'Internal Medicine', 'Surgery']
  },
  // Botswana
  {
    id: 'princess-marina-hospital',
    name: 'Princess Marina Hospital',
    type: 'hospital',
    country: 'Botswana',
    city: 'Gaborone',
    address: 'North-Ring Road, Gaborone',
    phone: '+267-362-1400',
    services: ['Emergency', 'Surgery', 'Internal Medicine', 'Pediatrics']
  },
  {
    id: 'bokamoso-private-hospital',
    name: 'Bokamoso Private Hospital',
    type: 'hospital',
    country: 'Botswana',
    city: 'Gaborone',
    address: 'Mmopane, Gaborone',
    phone: '+267-369-4000',
    services: ['Emergency', 'Cardiology', 'Surgery', 'Pediatrics', 'Maternity']
  },
  {
    id: 'gaborone-private-hospital-botswana',
    name: 'Gaborone Private Hospital',
    type: 'hospital',
    country: 'Botswana',
    city: 'Gaborone',
    address: 'Gaborone',
    services: ['Emergency', 'ICU', 'Surgery', 'Maternity']
  },
  {
    id: 'sidilega-private-hospital-botswana',
    name: 'Sidilega Private Hospital',
    type: 'hospital',
    country: 'Botswana',
    city: 'Gaborone',
    address: 'Block 7, Gaborone',
    services: ['Emergency', 'Specialist Clinics', 'Surgery']
  },
  {
    id: 'delta-pharmacy-botswana',
    name: 'Delta Pharmacy',
    type: 'pharmacy',
    country: 'Botswana',
    city: 'Maun',
    address: 'Maun',
    services: ['Prescription Drugs', 'OTC Medications']
  },
  {
    id: 'diagnofirm-medical-labs-botswana',
    name: 'Diagnofirm Medical Laboratories',
    type: 'clinic',
    country: 'Botswana',
    city: 'Gaborone',
    address: 'Various locations',
    services: ['Laboratory Services', 'Diagnostics']
  },
  {
    id: 'nyangabgwe-referral-hospital-botswana',
    name: 'Nyangabgwe Referral Hospital',
    type: 'hospital',
    country: 'Botswana',
    city: 'Francistown',
    address: 'Francistown',
    services: ['Emergency', 'Referral Care', 'Surgery']
  },
  {
    id: 'med-plus-pharmacy-botswana',
    name: 'Med-Plus Pharmacy',
    type: 'pharmacy',
    country: 'Botswana',
    city: 'Gaborone',
    address: 'Various locations',
    services: ['Prescription Drugs', 'Health Products']
  },
  {
    id: 'broadhurst-clinic-botswana',
    name: 'Broadhurst Clinic',
    type: 'clinic',
    country: 'Botswana',
    city: 'Gaborone',
    address: 'Broadhurst, Gaborone',
    services: ['General Practice', 'Maternity', 'Dental']
  },
  {
    id: 'scottish-livingstone-hospital-botswana',
    name: 'Scottish Livingstone Hospital',
    type: 'hospital',
    country: 'Botswana',
    city: 'Molepolole',
    address: 'Molepolole',
    services: ['Emergency', 'General Medicine', 'Surgery']
  },
  // Namibia
  {
    id: 'windhoek-central-hospital',
    name: 'Windhoek Central Hospital',
    type: 'hospital',
    country: 'Namibia',
    city: 'Windhoek',
    address: 'Florence Nightingale Street, Windhoek',
    phone: '+264-61-203-9111',
    services: ['Emergency', 'Surgery', 'Internal Medicine', 'Pediatrics']
  },
  {
    id: 'rhino-park-hospital',
    name: 'Rhino Park Private Hospital',
    type: 'hospital',
    country: 'Namibia',
    city: 'Windhoek',
    address: 'Hosea Kutako Drive, Windhoek',
    phone: '+264-61-375000',
    services: ['Emergency', 'Surgery', 'Cardiology', 'Pediatrics', 'Maternity']
  },
  {
    id: 'mediclinic-windhoek-namibia',
    name: 'Mediclinic Windhoek',
    type: 'hospital',
    country: 'Namibia',
    city: 'Windhoek',
    address: 'Heliodoor Street, Eros, Windhoek',
    services: ['Emergency', 'ICU', 'Surgery', 'Maternity']
  },
  {
    id: 'lady-pohamba-hospital-namibia',
    name: 'Lady Pohamba Private Hospital',
    type: 'hospital',
    country: 'Namibia',
    city: 'Windhoek',
    address: 'Democrat Street, Windhoek',
    services: ['Emergency', 'Cardiology', 'Oncology', 'Surgery']
  },
  {
    id: 'central-pharmacy-namibia',
    name: 'Central Pharmacy',
    type: 'pharmacy',
    country: 'Namibia',
    city: 'Windhoek',
    address: 'Independence Avenue, Windhoek',
    services: ['Prescription Drugs', 'OTC Medications']
  },
  {
    id: 'ongwediva-medipark-namibia',
    name: 'Ongwediva Medipark',
    type: 'hospital',
    country: 'Namibia',
    city: 'Ongwediva',
    address: 'Ongwediva',
    services: ['Emergency', 'Surgery', 'Pediatrics', 'Maternity']
  },
  {
    id: 'cottage-medi-clinic-namibia',
    name: 'Cottage Medi-Clinic',
    type: 'clinic',
    country: 'Namibia',
    city: 'Swakopmund',
    address: 'Swakopmund',
    services: ['General Practice', 'Emergency', 'Radiology']
  },
  {
    id: 'universal-pharmacy-namibia',
    name: 'Universal Pharmacy',
    type: 'pharmacy',
    country: 'Namibia',
    city: 'Windhoek',
    address: 'Various locations',
    services: ['Prescription Drugs', 'Health Products']
  },
  {
    id: 'katutura-state-hospital-namibia',
    name: 'Katutura State Hospital',
    type: 'hospital',
    country: 'Namibia',
    city: 'Windhoek',
    address: 'Katutura, Windhoek',
    services: ['Emergency', 'General Medicine', 'Maternity']
  },
  {
    id: 'eros-pharmacy-namibia',
    name: 'Eros Pharmacy',
    type: 'pharmacy',
    country: 'Namibia',
    city: 'Windhoek',
    address: 'Eros, Windhoek',
    services: ['Prescription Drugs', 'Medical Supplies']
  },
  // Mauritius
  {
    id: 'sir-seewoosagur-ramgoolam-hospital',
    name: 'Sir Seewoosagur Ramgoolam National Hospital',
    type: 'hospital',
    country: 'Mauritius',
    city: 'Pamplemousses',
    address: 'Pamplemousses',
    phone: '+230-209-3500',
    services: ['Emergency', 'Surgery', 'Cardiology', 'Pediatrics']
  },
  {
    id: 'apollo-bramwell-hospital',
    name: 'Wellkin Hospital (formerly Apollo Bramwell)',
    type: 'hospital',
    country: 'Mauritius',
    city: 'Moka',
    address: 'Royal Road, Moka',
    phone: '+230-605-1000',
    services: ['Emergency', 'Cardiology', 'Surgery', 'Pediatrics', 'Maternity']
  },
  {
    id: 'clinique-darne-mauritius',
    name: 'Clinique Darné',
    type: 'clinic',
    country: 'Mauritius',
    city: 'Curepipe',
    address: 'Georges Guibert Street, Curepipe',
    services: ['Emergency', 'Surgery', 'Maternity', 'Specialist Clinics']
  },
  {
    id: 'fortis-clinique-darne-mauritius',
    name: 'Fortis Clinique Darné',
    type: 'hospital',
    country: 'Mauritius',
    city: 'Curepipe',
    address: 'Curepipe',
    services: ['Emergency', 'Cardiology', 'Oncology', 'ICU']
  },
  {
    id: 'pharmacie-nouvelle-mauritius',
    name: 'Pharmacie Nouvelle',
    type: 'pharmacy',
    country: 'Mauritius',
    city: 'Port Louis',
    address: 'Port Louis',
    services: ['Prescription Drugs', 'OTC Medications']
  },
  {
    id: 'city-clinic-mauritius',
    name: 'City Clinic',
    type: 'clinic',
    country: 'Mauritius',
    city: 'Port Louis',
    address: 'Port Louis',
    services: ['General Practice', 'Minor Surgery', 'Diagnostics']
  },
  {
    id: 'dr-ag-jeetoo-hospital-mauritius',
    name: 'Dr. A. Gaffoor Jeetoo Hospital',
    type: 'hospital',
    country: 'Mauritius',
    city: 'Port Louis',
    address: 'Port Louis',
    services: ['Emergency', 'General Medicine', 'Surgery']
  },
  {
    id: 'pharmacie-du-nord-mauritius',
    name: 'Pharmacie du Nord',
    type: 'pharmacy',
    country: 'Mauritius',
    city: 'Grand Baie',
    address: 'Grand Baie',
    services: ['Prescription Drugs', 'Health Products']
  },
  {
    id: 'c-care-clinic-mauritius',
    name: 'C-Care Clinic',
    type: 'clinic',
    country: 'Mauritius',
    city: 'Various locations',
    address: 'Nationwide',
    services: ['General Practice', 'Specialist Consultations', 'Laboratory']
  },
  {
    id: 'victoria-hospital-mauritius',
    name: 'Victoria Hospital',
    type: 'hospital',
    country: 'Mauritius',
    city: 'Quatre Bornes',
    address: 'Candos, Quatre Bornes',
    services: ['Emergency', 'Surgery', 'Pediatrics', 'Maternity']
  },
  // Pharmacies
  {
    id: 'pharmacy-lagos-1',
    name: 'HealthPlus Pharmacy',
    type: 'pharmacy',
    country: 'Nigeria',
    city: 'Lagos',
    address: 'Victoria Island, Lagos',
    phone: '+234-1-4617777',
    services: ['Prescription Drugs', 'OTC Medications', 'Health Screening', 'Consultation']
  },
  {
    id: 'pharmacy-nairobi-1',
    name: 'Goodlife Pharmacy',
    type: 'pharmacy',
    country: 'Kenya',
    city: 'Nairobi',
    address: 'Westlands, Nairobi',
    phone: '+254-20-4448448',
    services: ['Prescription Drugs', 'OTC Medications', 'Medical Supplies']
  },
  {
    id: 'pharmacy-accra-1',
    name: 'Ernest Chemists',
    type: 'pharmacy',
    country: 'Ghana',
    city: 'Accra',
    address: 'Osu, Accra',
    phone: '+233-30-2761234',
    services: ['Prescription Drugs', 'OTC Medications', 'Health Products']
  },
  {
    id: 'pharmacy-cairo-1',
    name: 'El Ezaby Pharmacy',
    type: 'pharmacy',
    country: 'Egypt',
    city: 'Cairo',
    address: 'Zamalek, Cairo',
    phone: '+20-19600',
    services: ['Prescription Drugs', 'OTC Medications', 'Cosmetics', 'Medical Supplies']
  },
  {
    id: 'pharmacy-joburg-1',
    name: 'Dis-Chem Pharmacy',
    type: 'pharmacy',
    country: 'South Africa',
    city: 'Johannesburg',
    address: 'Sandton City, Johannesburg',
    phone: '+27-11-883-2Dis-Chem',
    services: ['Prescription Drugs', 'OTC Medications', 'Health Foods', 'Clinic Services']
  },
  {
    id: 'pharmacy-joburg-2',
    name: 'Clicks Pharmacy',
    type: 'pharmacy',
    country: 'South Africa',
    city: 'Johannesburg',
    address: 'Rosebank Mall, Johannesburg',
    phone: '+27-11-447-1234',
    services: ['Prescription Drugs', 'OTC Medications', 'Beauty Products', 'Clinic Services']
  },
  {
    id: 'medplus-pharmacy-lekki',
    name: 'Medplus Pharmacy',
    type: 'pharmacy',
    country: 'Nigeria',
    city: 'Lagos',
    address: 'Admiralty Way, Lekki Phase 1, Lagos',
    phone: '+234-700-633-7587',
    services: ['Prescription Drugs', 'OTC Medications', 'Health Screening']
  },
  {
    id: 'bliss-gvs-pharmacy',
    name: 'Bliss GVS Pharmacy',
    type: 'pharmacy',
    country: 'Kenya',
    city: 'Nairobi',
    address: 'Various locations, Nairobi',
    phone: '+254-730-101010',
    services: ['Prescription Drugs', 'OTC Medications', 'Medical Supplies']
  },
  {
    id: 'haltons-pharmacy',
    name: 'Haltons Pharmacy',
    type: 'pharmacy',
    country: 'Kenya',
    city: 'Nairobi',
    address: 'Various locations, Nairobi',
    phone: '+254-700-569569',
    services: ['Prescription Drugs', 'OTC Medications', 'Health Consultation']
  },
  {
    id: 'alpha-pharm-sa',
    name: 'Alpha Pharm',
    type: 'pharmacy',
    country: 'South Africa',
    city: 'Various',
    address: 'Nationwide',
    phone: '+27-86-112-5742',
    services: ['Prescription Drugs', 'OTC Medications', 'Clinic Services']
  },
  // Clinics
  {
    id: 'clinic-kampala-1',
    name: 'The Surgery',
    type: 'clinic',
    country: 'Uganda',
    city: 'Kampala',
    address: 'Kololo, Kampala',
    phone: '+256-41-4256003',
    services: ['General Practice', 'Vaccinations', 'Minor Surgery', 'Laboratory']
  },
  {
    id: 'clinic-dakar-1',
    name: 'SOS Medecin Senegal',
    type: 'clinic',
    country: 'Senegal',
    city: 'Dakar',
    address: 'Fann Hock, Dakar',
    phone: '+221-33-889-1515',
    services: ['General Practice', 'Emergency House Calls', 'Ambulance Service']
  },
  {
    id: 'clinic-lagos-1',
    name: 'R-Jolad Hospital',
    type: 'clinic',
    country: 'Nigeria',
    city: 'Lagos',
    address: 'Gbagada, Lagos',
    phone: '+234-1-453-6566',
    services: ['General Practice', 'Maternity', 'Pediatrics', 'Laboratory']
  },
  {
    id: 'clinic-nairobi-1',
    name: 'AAR Healthcare Clinic',
    type: 'clinic',
    country: 'Kenya',
    city: 'Nairobi',
    address: 'Upper Hill, Nairobi',
    phone: '+254-20-2715319',
    services: ['General Practice', 'Dental', 'Optical', 'Laboratory', 'Pharmacy']
  },
  {
    id: 'clinic-accra-1',
    name: 'Nyaho Medical Centre',
    type: 'clinic',
    country: 'Ghana',
    city: 'Accra',
    address: 'Airport Residential Area, Accra',
    phone: '+233-30-2775341',
    services: ['General Practice', 'Specialist Consultations', 'Emergency', 'Diagnostics']
  },
  {
    id: 'clinic-cairo-1',
    name: 'Anglo American Hospital',
    type: 'clinic',
    country: 'Egypt',
    city: 'Cairo',
    address: 'Zamalek, Cairo',
    phone: '+20-2-27356162',
    services: ['General Practice', 'Emergency', 'Dental', 'Physiotherapy']
  },
  {
    id: 'bridge-clinic-lagos',
    name: 'Bridge Clinic',
    type: 'clinic',
    country: 'Nigeria',
    city: 'Lagos',
    address: '66 Oduduwa Way, Ikeja GRA, Lagos',
    phone: '+234-1-6310092',
    services: ['Fertility Treatment', 'Gynaecology', 'Andrology']
  },
  {
    id: 'akail-medical-centre',
    name: 'Akai House Clinic',
    type: 'clinic',
    country: 'Ghana',
    city: 'Accra',
    address: '1 Sixth Circular Road, Cantonments, Accra',
    phone: '+233-30-2784772',
    services: ['General Practice', 'Specialist Consultations', 'Vaccinations', 'Laboratory']
  },
  {
    id: 'intercare-clinic',
    name: 'Intercare Medical & Dental Centre',
    type: 'clinic',
    country: 'South Africa',
    city: 'Various',
    address: 'Nationwide',
    phone: '+27-86-999-0601',
    services: ['General Practice', 'Dental', 'Pathology', 'Radiology']
  },
  // Europe
  {
    id: 'st-thomas-hospital-uk',
    name: 'St Thomas\' Hospital',
    type: 'hospital',
    country: 'United Kingdom',
    city: 'London',
    address: 'Westminster Bridge Rd, London',
    phone: '+44-20-7188-7188',
    services: ['Emergency', 'Cardiology', 'Maternity', 'Radiology']
  },
  {
    id: 'gosh-uk',
    name: 'Great Ormond Street Hospital',
    type: 'hospital',
    country: 'United Kingdom',
    city: 'London',
    address: 'Great Ormond St, London',
    phone: '+44-20-7405-9200',
    services: ['Pediatrics', 'Specialist Children\'s Care', 'Surgery']
  },
  {
    id: 'boots-pharmacy-uk',
    name: 'Boots Pharmacy',
    type: 'pharmacy',
    country: 'United Kingdom',
    city: 'Various',
    address: 'Nationwide',
    services: ['Prescription Drugs', 'OTC Medications', 'Health Advice']
  },
  {
    id: 'charite-berlin-de',
    name: 'Charité - Universitätsmedizin Berlin',
    type: 'hospital',
    country: 'Germany',
    city: 'Berlin',
    address: 'Charitépl. 1, 10117 Berlin',
    phone: '+49-30-450-50',
    services: ['Emergency', 'Research', 'Teaching', 'Specialist Care']
  },
  {
    id: 'heidelberg-hospital-de',
    name: 'Heidelberg University Hospital',
    type: 'hospital',
    country: 'Germany',
    city: 'Heidelberg',
    address: 'Im Neuenheimer Feld 672, 69120 Heidelberg',
    phone: '+49-6221-56-0',
    services: ['Oncology', 'Cardiology', 'Neurology', 'Transplant']
  },
  {
    id: 'pitie-salpetriere-fr',
    name: 'Hôpital Pitié-Salpêtrière',
    type: 'hospital',
    country: 'France',
    city: 'Paris',
    address: '47-83 Boulevard de l\'Hôpital, 75013 Paris',
    phone: '+33-1-42-16-00-00',
    services: ['Emergency', 'Neurology', 'Cardiology', 'Oncology']
  },
  {
    id: 'la-paz-madrid-es',
    name: 'Hospital Universitario La Paz',
    type: 'hospital',
    country: 'Spain',
    city: 'Madrid',
    address: 'Paseo de la Castellana, 261, 28046 Madrid',
    phone: '+34-91-727-70-00',
    services: ['Emergency', 'Pediatrics', 'Transplant', 'Cardiology']
  },
  {
    id: 'gemelli-rome-it',
    name: 'Policlinico Universitario Agostino Gemelli',
    type: 'hospital',
    country: 'Italy',
    city: 'Rome',
    address: 'Largo Agostino Gemelli, 8, 00168 Roma RM',
    phone: '+39-06-30151',
    services: ['Emergency', 'Oncology', 'Cardiology', 'Surgery']
  },
  // Asia
  {
    id: 'tokyo-uni-hospital-jp',
    name: 'The University of Tokyo Hospital',
    type: 'hospital',
    country: 'Japan',
    city: 'Tokyo',
    address: '7 Chome-3-1 Hongo, Bunkyo City, Tokyo 113-8655',
    phone: '+81-3-3815-5411',
    services: ['Emergency', 'Research', 'Specialist Care', 'Surgery']
  },
  {
    id: 'st-lukes-tokyo-jp',
    name: 'St. Luke\'s International Hospital',
    type: 'hospital',
    country: 'Japan',
    city: 'Tokyo',
    address: '9-1 Akashi-cho, Chuo City, Tokyo 104-8560',
    phone: '+81-3-3541-5151',
    services: ['Emergency', 'General Medicine', 'Pediatrics', 'Maternity']
  },
  {
    id: 'peking-union-hospital-cn',
    name: 'Peking Union Medical College Hospital',
    type: 'hospital',
    country: 'China',
    city: 'Beijing',
    address: '1 Shuaifuyuan, Dongcheng District, Beijing',
    phone: '+86-10-6915-6114',
    services: ['Emergency', 'Specialist Care', 'Research', 'Surgery']
  },
  {
    id: 'aiims-delhi-in',
    name: 'All India Institute of Medical Sciences (AIIMS)',
    type: 'hospital',
    country: 'India',
    city: 'New Delhi',
    address: 'Ansari Nagar, New Delhi, Delhi 110029',
    phone: '+91-11-2658-8500',
    services: ['Emergency', 'Trauma', 'Cardiology', 'Neurology']
  },
  {
    id: 'apollo-chennai-in',
    name: 'Apollo Hospitals, Chennai',
    type: 'hospital',
    country: 'India',
    city: 'Chennai',
    address: '21, Greams Lane, Off Greams Road, Chennai',
    phone: '+91-44-2829-3333',
    services: ['Emergency', 'Cardiology', 'Oncology', 'Transplant']
  },
  {
    id: 'sgh-sg',
    name: 'Singapore General Hospital',
    type: 'hospital',
    country: 'Singapore',
    city: 'Singapore',
    address: 'Outram Road, Singapore 169608',
    phone: '+65-6222-3322',
    services: ['Emergency', 'Specialist Care', 'Surgery', 'Research']
  },
  // North America
  {
    id: 'mayo-clinic-us',
    name: 'Mayo Clinic',
    type: 'hospital',
    country: 'USA',
    city: 'Rochester',
    address: '200 First St. SW, Rochester, MN 55905',
    phone: '+1-507-284-2511',
    services: ['Specialist Care', 'Research', 'Surgery', 'Oncology']
  },
  {
    id: 'cleveland-clinic-us',
    name: 'Cleveland Clinic',
    type: 'hospital',
    country: 'USA',
    city: 'Cleveland',
    address: '9500 Euclid Ave, Cleveland, OH 44195',
    phone: '+1-216-444-2200',
    services: ['Cardiology', 'Emergency', 'Surgery', 'Neurology']
  },
  {
    id: 'cvs-pharmacy-us',
    name: 'CVS Pharmacy',
    type: 'pharmacy',
    country: 'USA',
    city: 'Various',
    address: 'Nationwide',
    services: ['Prescription Drugs', 'OTC Medications', 'Vaccinations']
  },
  {
    id: 'toronto-general-ca',
    name: 'Toronto General Hospital',
    type: 'hospital',
    country: 'Canada',
    city: 'Toronto',
    address: '200 Elizabeth St, Toronto, ON M5G 2C4',
    phone: '+1-416-340-4800',
    services: ['Emergency', 'Transplant', 'Cardiology', 'Surgery']
  },
  {
    id: 'shoppers-drug-mart-ca',
    name: 'Shoppers Drug Mart',
    type: 'pharmacy',
    country: 'Canada',
    city: 'Various',
    address: 'Nationwide',
    services: ['Prescription Drugs', 'OTC Medications', 'Health Products']
  },
  {
    id: 'hospital-angeles-mx',
    name: 'Hospital Angeles Lomas',
    type: 'hospital',
    country: 'Mexico',
    city: 'Mexico City',
    address: 'Av. Vialidad de la Barranca S/N, Huixquilucan',
    phone: '+52-55-5246-5000',
    services: ['Emergency', 'Specialist Care', 'Surgery', 'Radiology']
  },
  // South America
  {
    id: 'albert-einstein-br',
    name: 'Hospital Israelita Albert Einstein',
    type: 'hospital',
    country: 'Brazil',
    city: 'São Paulo',
    address: 'Av. Albert Einstein, 627/701 - Morumbi, São Paulo',
    phone: '+55-11-2151-1233',
    services: ['Emergency', 'Oncology', 'Cardiology', 'Neurology']
  },
  {
    id: 'hospital-italiano-ar',
    name: 'Hospital Italiano de Buenos Aires',
    type: 'hospital',
    country: 'Argentina',
    city: 'Buenos Aires',
    address: 'Tte. Gral. Juan Domingo Perón 4190, C1199ABB CABA',
    phone: '+54-11-4959-0200',
    services: ['Emergency', 'Transplant', 'Surgery', 'High Complexity Care']
  },
  {
    id: 'fundacion-cardioinfantil-co',
    name: 'Fundación Cardioinfantil',
    type: 'hospital',
    country: 'Colombia',
    city: 'Bogotá',
    address: 'Cl. 163a #13b-60, Bogotá',
    phone: '+57-1-667-2727',
    services: ['Cardiology', 'Pediatrics', 'Transplant', 'Emergency']
  },
  // Oceania
  {
    id: 'royal-melbourne-au',
    name: 'The Royal Melbourne Hospital',
    type: 'hospital',
    country: 'Australia',
    city: 'Melbourne',
    address: '300 Grattan St, Parkville VIC 3050',
    phone: '+61-3-9342-7000',
    services: ['Emergency', 'Trauma', 'Neurology', 'Cardiology']
  },
  {
    id: 'chemist-warehouse-au',
    name: 'Chemist Warehouse',
    type: 'pharmacy',
    country: 'Australia',
    city: 'Various',
    address: 'Nationwide',
    services: ['Prescription Drugs', 'OTC Medications', 'Health Products']
  },
  {
    id: 'auckland-city-hospital-nz',
    name: 'Auckland City Hospital',
    type: 'hospital',
    country: 'New Zealand',
    city: 'Auckland',
    address: '2 Park Rd, Grafton, Auckland 1023',
    phone: '+64-9-367-0000',
    services: ['Emergency', 'Specialist Care', 'Surgery', 'Maternity']
  },
  // Ethiopia
  {
    id: 'addis-ababa-university-hospital-eth',
    name: 'Addis Ababa University Hospital',
    type: 'hospital',
    country: 'Ethiopia',
    city: 'Addis Ababa',
    address: 'Addis Ababa',
    phone: '+251-11-515-7700',
    services: ['Emergency', 'Surgery', 'Internal Medicine', 'Pediatrics', 'Maternity']
  },
  {
    id: 'yekatit-12-hospital-eth',
    name: 'Yekatit 12 Hospital',
    type: 'hospital',
    country: 'Ethiopia',
    city: 'Addis Ababa',
    address: 'Addis Ababa',
    phone: '+251-11-551-2300',
    services: ['General Surgery', 'Orthopedics', 'Trauma', 'Emergency Care']
  },
  // Rwanda
  {
    id: 'kigali-central-hospital-rwa',
    name: 'Kigali Central Hospital',
    type: 'hospital',
    country: 'Rwanda',
    city: 'Kigali',
    address: 'KG 3 Ave, Kigali',
    phone: '+250-78-854-0000',
    services: ['Emergency', 'Surgery', 'Cardiology', 'Pediatrics', 'Maternity']
  },
  {
    id: 'university-teaching-hospital-kigali-rwa',
    name: 'University Teaching Hospital of Kigali',
    type: 'hospital',
    country: 'Rwanda',
    city: 'Kigali',
    address: 'KG 8 Ave, Kigali',
    phone: '+250-78-800-2000',
    services: ['Emergency', 'ICU', 'Surgery', 'Oncology', 'Neurology']
  },
  // Zimbabwe
  {
    id: 'parirenyatwa-hospital-zim',
    name: 'Parirenyatwa Hospital',
    type: 'hospital',
    country: 'Zimbabwe',
    city: 'Harare',
    address: 'Mazoe Street, Harare',
    phone: '+263-4-776-1300',
    services: ['Emergency', 'Surgery', 'Cardiology', 'Pediatrics', 'Maternity']
  },
  {
    id: 'sally-mugabe-hospital-zim',
    name: 'Sally Mugabe Central Hospital',
    type: 'hospital',
    country: 'Zimbabwe',
    city: 'Harare',
    address: 'Harare',
    phone: '+263-4-798-2300',
    services: ['Emergency', 'Surgery', 'Internal Medicine', 'Obstetrics']
  },
  // Morocco
  {
    id: 'ibn-sina-hospital-morocco',
    name: 'Ibn Sina Hospital',
    type: 'hospital',
    country: 'Morocco',
    city: 'Rabat',
    address: 'Rabat',
    phone: '+212-5-3770-3000',
    services: ['Emergency', 'Surgery', 'Cardiology', 'Neurology', 'Pediatrics']
  },
  {
    id: 'cheikh-zaid-hospital-morocco',
    name: 'Cheikh Zaid Hospital',
    type: 'hospital',
    country: 'Morocco',
    city: 'Rabat',
    address: 'Rabat',
    phone: '+212-5-3730-2000',
    services: ['General Surgery', 'Orthopedics', 'Emergency Care', 'Maternity']
  },
  // Tunisia
  {
    id: 'abderrahman-mami-hospital-tunisia',
    name: 'Abderrahman Mami Hospital',
    type: 'hospital',
    country: 'Tunisia',
    city: 'Ariana',
    address: 'Ariana',
    phone: '+216-71-235-000',
    services: ['Cardiothoracic Surgery', 'Cardiology', 'Emergency', 'Intensive Care']
  },
  {
    id: 'la-rabta-hospital-tunisia',
    name: 'La Rabta Hospital',
    type: 'hospital',
    country: 'Tunisia',
    city: 'Tunis',
    address: 'Tunis',
    phone: '+216-71-560-000',
    services: ['Emergency', 'General Surgery', 'Internal Medicine', 'Pediatrics']
  },
  // Switzerland
  {
    id: 'university-hospital-zurich-ch',
    name: 'University Hospital Zurich',
    type: 'hospital',
    country: 'Switzerland',
    city: 'Zurich',
    address: 'Rämistrasse 100, 8091 Zurich',
    phone: '+41-44-255-1111',
    services: ['Emergency', 'Surgery', 'Cardiology', 'Oncology', 'Neurology', 'Intensive Care']
  },
  {
    id: 'inselspital-bern-ch',
    name: 'Inselspital Bern University Hospital',
    type: 'hospital',
    country: 'Switzerland',
    city: 'Bern',
    address: '3010 Bern',
    phone: '+41-31-632-2111',
    services: ['Emergency', 'Surgery', 'Pediatrics', 'Maternity', 'ICU']
  },
  // Netherlands
  {
    id: 'amsterdam-umc-nl',
    name: 'Amsterdam University Medical Center',
    type: 'hospital',
    country: 'Netherlands',
    city: 'Amsterdam',
    address: 'Meibergdreef 9, Amsterdam',
    phone: '+31-20-5664-000',
    services: ['Emergency', 'Surgery', 'Cardiology', 'Oncology', 'Neurology', 'Pediatrics']
  },
  {
    id: 'erasmus-medical-center-nl',
    name: 'Erasmus Medical Center',
    type: 'hospital',
    country: 'Netherlands',
    city: 'Rotterdam',
    address: '3015 CE Rotterdam',
    phone: '+31-10-704-0000',
    services: ['Emergency', 'Surgery', 'Cardiothoracic Surgery', 'Oncology', 'Intensive Care']
  },
  // Sweden
  {
    id: 'karolinska-hospital-se',
    name: 'Karolinska University Hospital',
    type: 'hospital',
    country: 'Sweden',
    city: 'Stockholm',
    address: 'Stockholm',
    phone: '+46-8-517-70-000',
    services: ['Emergency', 'Surgery', 'Cardiology', 'Oncology', 'Neurology', 'Intensive Care']
  },
  {
    id: 'sahlgrenska-hospital-se',
    name: 'Sahlgrenska University Hospital',
    type: 'hospital',
    country: 'Sweden',
    city: 'Gothenburg',
    address: 'Gothenburg',
    phone: '+46-31-343-0000',
    services: ['Emergency', 'Surgery', 'Pediatrics', 'Maternity', 'Cardiology']
  },
  // Turkey
  {
    id: 'istanbul-medical-faculty-hospital-tr',
    name: 'Istanbul University Medical Faculty Hospital',
    type: 'hospital',
    country: 'Turkey',
    city: 'Istanbul',
    address: 'Capa, Istanbul',
    phone: '+90-212-414-2000',
    services: ['Emergency', 'Surgery', 'Cardiology', 'Neurology', 'Pediatrics', 'Maternity']
  },
  {
    id: 'hacettepe-hospital-tr',
    name: 'Hacettepe University Hospital',
    type: 'hospital',
    country: 'Turkey',
    city: 'Ankara',
    address: 'Ankara',
    phone: '+90-312-305-5000',
    services: ['Emergency', 'Surgery', 'Oncology', 'Cardiothoracic Surgery', 'Intensive Care']
  },
  // Saudi Arabia
  {
    id: 'king-faisal-specialist-hospital-sa',
    name: 'King Faisal Specialist Hospital & Research Centre',
    type: 'hospital',
    country: 'Saudi Arabia',
    city: 'Riyadh',
    address: 'P.O. Box 3354, Riyadh 11211',
    phone: '+966-1-4647-1111',
    services: ['Emergency', 'Oncology', 'Cardiothoracic Surgery', 'Neurosurgery', 'Intensive Care']
  },
  {
    id: 'king-abdulaziz-university-hospital-sa',
    name: 'King Abdulaziz University Hospital',
    type: 'hospital',
    country: 'Saudi Arabia',
    city: 'Jeddah',
    address: 'Jeddah',
    phone: '+966-2-6400-0000',
    services: ['Emergency', 'Surgery', 'Cardiology', 'Pediatrics', 'Maternity']
  },
  // United Arab Emirates
  {
    id: 'emirates-hospital-uae',
    name: 'Emirates Hospital',
    type: 'hospital',
    country: 'United Arab Emirates',
    city: 'Dubai',
    address: 'Al Manara, Dubai',
    phone: '+971-4-308-6666',
    services: ['Emergency', 'Surgery', 'Cardiology', 'Neurology', 'Intensive Care']
  },
  {
    id: 'tawam-hospital-uae',
    name: 'Tawam Hospital',
    type: 'hospital',
    country: 'United Arab Emirates',
    city: 'Abu Dhabi',
    address: 'Abu Dhabi',
    phone: '+971-3-707-4141',
    services: ['Emergency', 'Surgery', 'Pediatrics', 'Maternity', 'Cardiology']
  },
  // Pakistan
  {
    id: 'shifa-international-hospital-pk',
    name: 'Shifa International Hospital',
    type: 'hospital',
    country: 'Pakistan',
    city: 'Islamabad',
    address: 'H-8/4, Islamabad',
    phone: '+92-51-846-1000',
    services: ['Emergency', 'Surgery', 'Cardiothoracic Surgery', 'Neurology', 'Pediatrics', 'Intensive Care']
  },
  {
    id: 'aga-khan-hospital-pk',
    name: 'Aga Khan University Hospital',
    type: 'hospital',
    country: 'Pakistan',
    city: 'Karachi',
    address: 'Karachi',
    phone: '+92-21-3486-1000',
    services: ['Emergency', 'Surgery', 'Cardiology', 'Oncology', 'Pediatrics']
  },
  // South Korea
  {
    id: 'seoul-national-university-hospital-kr',
    name: 'Seoul National University Hospital',
    type: 'hospital',
    country: 'South Korea',
    city: 'Seoul',
    address: '101 Daehak-ro, Jongno-gu, Seoul',
    phone: '+82-2-2072-2114',
    services: ['Emergency', 'Surgery', 'Cardiothoracic Surgery', 'Oncology', 'Neurology', 'Intensive Care']
  },
  {
    id: 'samsung-medical-center-kr',
    name: 'Samsung Medical Center',
    type: 'hospital',
    country: 'South Korea',
    city: 'Seoul',
    address: 'Seoul',
    phone: '+82-2-3410-2114',
    services: ['Emergency', 'Surgery', 'Cardiology', 'Oncology', 'Pediatrics', 'Intensive Care']
  },
  // Thailand
  {
    id: 'chulalongkorn-hospital-th',
    name: 'Chulalongkorn Hospital',
    type: 'hospital',
    country: 'Thailand',
    city: 'Bangkok',
    address: 'Rama IV Road, Bangkok',
    phone: '+66-2-256-4000',
    services: ['Emergency', 'Surgery', 'Cardiology', 'Pediatrics', 'Maternity', 'Intensive Care']
  },
  {
    id: 'bumrungrad-international-hospital-th',
    name: 'Bumrungrad International Hospital',
    type: 'hospital',
    country: 'Thailand',
    city: 'Bangkok',
    address: 'Soi 3, Sukhumvit Rd, Bangkok',
    phone: '+66-2-011-3000',
    services: ['Emergency', 'Surgery', 'Cardiology', 'Oncology', 'Neurology', 'Pediatrics']
  },
  // Indonesia
  {
    id: 'cipto-mangunkusumo-hospital-id',
    name: 'Cipto Mangunkusumo Hospital',
    type: 'hospital',
    country: 'Indonesia',
    city: 'Jakarta',
    address: 'Jalan Diponegoro No. 71, Jakarta',
    phone: '+62-21-3161-7888',
    services: ['Emergency', 'Surgery', 'Cardiology', 'Pediatrics', 'Maternity', 'Intensive Care']
  },
  {
    id: 'rs-persahabatan-id',
    name: 'RS Persahabatan',
    type: 'hospital',
    country: 'Indonesia',
    city: 'Jakarta',
    address: 'Jakarta',
    phone: '+62-21-4891-7777',
    services: ['Emergency', 'Pulmonology', 'Infectious Diseases', 'Internal Medicine']
  },
  // Philippines
  {
    id: 'philippine-general-hospital-ph',
    name: 'Philippine General Hospital',
    type: 'hospital',
    country: 'Philippines',
    city: 'Manila',
    address: 'Taft Avenue, Manila',
    phone: '+63-2-5548-8000',
    services: ['Emergency', 'Surgery', 'Cardiology', 'Pediatrics', 'Maternity', 'Intensive Care']
  },
  {
    id: 'st-lukes-medical-center-ph',
    name: "St. Luke's Medical Center",
    type: 'hospital',
    country: 'Philippines',
    city: 'Manila',
    address: 'E. Rodriguez Sr. Boulevard, Manila',
    phone: '+63-2-7895-8000',
    services: ['Emergency', 'Surgery', 'Cardiothoracic Surgery', 'Oncology', 'Pediatrics']
  },
  // Malaysia
  {
    id: 'kuala-lumpur-hospital-my',
    name: 'Kuala Lumpur Hospital',
    type: 'hospital',
    country: 'Malaysia',
    city: 'Kuala Lumpur',
    address: 'Jalan Pahang, Kuala Lumpur',
    phone: '+60-3-4045-3000',
    services: ['Emergency', 'Surgery', 'Cardiology', 'Pediatrics', 'Maternity', 'Intensive Care']
  },
  {
    id: 'universiti-malaya-medical-center-my',
    name: 'Universiti Malaya Medical Centre',
    type: 'hospital',
    country: 'Malaysia',
    city: 'Kuala Lumpur',
    address: 'Kuala Lumpur',
    phone: '+60-3-7949-2063',
    services: ['Emergency', 'Surgery', 'Cardiothoracic Surgery', 'Oncology', 'Neurology']
  },
  // Vietnam
  {
    id: 'bach-mai-hospital-vn',
    name: 'Bach Mai Hospital',
    type: 'hospital',
    country: 'Vietnam',
    city: 'Hanoi',
    address: 'Giai Phong Road, Hanoi',
    phone: '+84-24-3956-5000',
    services: ['Emergency', 'Surgery', 'Cardiology', 'Pediatrics', 'Maternity', 'Intensive Care']
  },
  {
    id: 'cho-ray-hospital-vn',
    name: 'Cho Ray Hospital',
    type: 'hospital',
    country: 'Vietnam',
    city: 'Ho Chi Minh City',
    address: '201B Nguyen Chi Thanh, Ho Chi Minh City',
    phone: '+84-28-3824-4111',
    services: ['Emergency', 'Surgery', 'Cardiology', 'Pediatrics', 'Internal Medicine']
  },
  // Chile
  {
    id: 'hospital-del-salvador-cl',
    name: 'Hospital del Salvador',
    type: 'hospital',
    country: 'Chile',
    city: 'Santiago',
    address: 'Avenida Salvador 364, Santiago',
    phone: '+56-2-2580-5000',
    services: ['Emergency', 'Surgery', 'Cardiology', 'Pediatrics', 'Maternity', 'Intensive Care']
  },
  {
    id: 'hospital-clinico-university-cl',
    name: 'Hospital Clínico Universidad de Chile',
    type: 'hospital',
    country: 'Chile',
    city: 'Santiago',
    address: 'Santiago',
    phone: '+56-2-2978-8000',
    services: ['Emergency', 'Surgery', 'Cardiothoracic Surgery', 'Pediatrics', 'Oncology']
  },
  // Peru
  {
    id: 'hospital-nacional-cayetano-heredia-pe',
    name: 'Hospital Nacional Cayetano Heredia',
    type: 'hospital',
    country: 'Peru',
    city: 'Lima',
    address: 'San Martin de Porres, Lima',
    phone: '+51-1-3190-0000',
    services: ['Emergency', 'Surgery', 'Cardiology', 'Pediatrics', 'Infectious Diseases', 'Intensive Care']
  },
  {
    id: 'hospital-nacional-edgardo-rebagliati-pe',
    name: 'Hospital Nacional Edgardo Rebagliati Martins',
    type: 'hospital',
    country: 'Peru',
    city: 'Lima',
    address: 'Lima',
    phone: '+51-1-3191-1000',
    services: ['Emergency', 'Surgery', 'Cardiology', 'Maternity', 'Pediatrics']
  },
  // Norway
  {
    id: 'oslo-university-hospital-no',
    name: 'Oslo University Hospital',
    type: 'hospital',
    country: 'Norway',
    city: 'Oslo',
    address: 'Oslo',
    phone: '+47-2293-2000',
    services: ['Emergency', 'Surgery', 'Cardiothoracic Surgery', 'Oncology', 'Neurology', 'Intensive Care']
  },
  {
    id: 'haukeland-university-hospital-no',
    name: 'Haukeland University Hospital',
    type: 'hospital',
    country: 'Norway',
    city: 'Bergen',
    address: 'Bergen',
    phone: '+47-5597-5000',
    services: ['Emergency', 'Surgery', 'Cardiology', 'Pediatrics', 'Maternity']
  },
  // Belgium
  {
    id: 'ghent-university-hospital-be',
    name: 'Ghent University Hospital',
    type: 'hospital',
    country: 'Belgium',
    city: 'Ghent',
    address: 'De Pintelaan 185, Ghent',
    phone: '+32-9-332-3111',
    services: ['Emergency', 'Surgery', 'Cardiology', 'Oncology', 'Pediatrics', 'Intensive Care']
  },
  {
    id: 'saint-luc-university-hospital-be',
    name: 'Saint Luc University Hospital',
    type: 'hospital',
    country: 'Belgium',
    city: 'Brussels',
    address: 'Avenue Hippocrate 10, Brussels',
    phone: '+32-2-764-1111',
    services: ['Emergency', 'Surgery', 'Cardiothoracic Surgery', 'Neurology', 'Pediatrics']
  },
  // Greece
  {
    id: 'atten-ico-hospital-gr',
    name: 'Attiko University Hospital',
    type: 'hospital',
    country: 'Greece',
    city: 'Athens',
    address: 'Rimini Street, Athens',
    phone: '+30-21-5832-2000',
    services: ['Emergency', 'Surgery', 'Cardiology', 'Pediatrics', 'Intensive Care']
  },
  {
    id: 'hippokration-general-hospital-gr',
    name: 'Hippokration General Hospital',
    type: 'hospital',
    country: 'Greece',
    city: 'Athens',
    address: '114 Vassilissis Sofias Avenue, Athens',
    phone: '+30-21-7769-0000',
    services: ['Emergency', 'Surgery', 'Cardiology', 'Internal Medicine', 'Pediatrics']
  },
  // Portugal
  {
    id: 'centro-hospitalar-lisbon-pt',
    name: 'Centro Hospitalar e Universitário de Lisboa Central',
    type: 'hospital',
    country: 'Portugal',
    city: 'Lisbon',
    address: 'Avenida Miguel Bombarda, Lisbon',
    phone: '+351-21-799-5000',
    services: ['Emergency', 'Surgery', 'Cardiology', 'Pediatrics', 'Intensive Care']
  },
  {
    id: 'porto-hospital-pt',
    name: 'Centro Hospitalar e Universitário do Porto',
    type: 'hospital',
    country: 'Portugal',
    city: 'Porto',
    address: 'Porto',
    phone: '+351-22-2077-500',
    services: ['Emergency', 'Surgery', 'Cardiothoracic Surgery', 'Pediatrics', 'Intensive Care']
  },
  // Ireland
  {
    id: 'st-james-hospital-ie',
    name: "St. James's Hospital",
    type: 'hospital',
    country: 'Ireland',
    city: 'Dublin',
    address: 'James Street, Dublin',
    phone: '+353-1-4103000',
    services: ['Emergency', 'Surgery', 'Cardiology', 'Pediatrics', 'Intensive Care']
  },
  {
    id: 'cork-university-hospital-ie',
    name: 'Cork University Hospital',
    type: 'hospital',
    country: 'Ireland',
    city: 'Cork',
    address: 'Wilton, Cork',
    phone: '+353-21-492-0000',
    services: ['Emergency', 'Surgery', 'Cardiology', 'Pediatrics', 'Maternity']
  }
];
