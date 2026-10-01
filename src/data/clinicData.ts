import { Doctor, Review, GalleryItem, ServiceItem } from '../types';

export const CLINIC_INFO = {
  name: 'Narayana Dental Clinic',
  tagline: 'ADVANCED FAMILY DENTISTRY',
  motto: 'Quality Dentistry Since 2011 • Austin Town & Neelasandra, Bengaluru',
  address: '#1616, BDA Flats, Austin Town Main Road, Neelasandra, Bengaluru – 560047',
  landmark: 'Near Austin Town BDA Complex Bus Stop, easily accessible ground floor entrance with parking space',
  phone1: '+91 6360654061',
  phone1Display: '6360654061',
  phone1Formatted: '+916360654061',
  phone2: '+91 9739628057',
  phone2Display: '9739628057',
  phone2Formatted: '+919739628057',
  whatsapp: '+91 6360654061',
  whatsappDirect: '916360654061',
  workingHours: {
    weekdays: 'Mon–Sat 10:00 AM–8:00 PM',
    sunday: 'Sun 10:00 AM–2:00 PM',
  },
  stats: {
    familiesTreated: '15,000+',
    yearsServing: '13+ Yrs',
    sterilizationRate: '100%',
    rating: '4.9 / 5',
    totalReviews: '150+ genuine Google reviews',
  },
  coordinates: {
    lat: 12.9610,
    lng: 77.6186,
  }
};

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-prakash',
    name: 'Dr. Prakash Venkatarama',
    title: 'SENIOR DENTAL SURGEON & CLINICAL DIRECTOR',
    qualifications: 'BDS • Dental Surgeon, Endodontist & Oral Implantologist',
    badge: 'Senior Dental Surgeon & Clinical Director',
    leadershipTag: '14+ Years Clinical Leadership',
    philosophyTitle: 'TREATMENT PHILOSOPHY',
    philosophyQuote: '“Every tooth saved is a biological triumph. We believe in gentle, zero-pressure care where treatment steps are thoroughly understood before we ever touch an instrument.”',
    bio: 'Founding doctor of Narayana Dental Clinic in 2011, Dr. Prakash has pioneered evidence-backed, conservative restorative dentistry in the Austin Town neighborhood. Known for his calm bedside manner and precise mastery over painless local anesthesia, he transforms standard dental apprehension into reassuring patient experiences.',
    clinicalFocus: [
      {
        title: 'Single-Sitting Root Canals',
        description: 'Rotary endodontics with apex locator precision',
        icon: 'Stethoscope'
      },
      {
        title: 'Advanced Dental Implants',
        description: 'Bio-compatible titanium tooth replacements',
        icon: 'ShieldCheck'
      },
      {
        title: 'Painless Anesthesia',
        description: 'Topical numbing & gentle syringe techniques',
        icon: 'Sparkles'
      },
      {
        title: 'Full Mouth Reconstruction',
        description: 'Zirconia crowns, bridges & occlusal balance',
        icon: 'Crown'
      }
    ],
    consultationHours: 'Mon – Sat: 10:00 AM – 8:00 PM',
    practiceLocation: 'Austin Town & Neelasandra',
    sinceYear: 2011,
    experienceYears: 15
  },
  {
    id: 'dr-madhura',
    name: 'Dr. Madhura Prakash',
    title: 'CONSULTANT ORTHODONTIST & COSMETIC DENTAL SURGEON',
    qualifications: 'BDS • D.Ortho (Spain) • FICNOG (Italy)',
    badge: 'International Board Fellow',
    leadershipTag: 'Orthodontic Fellowship • Spain & Italy Trained',
    philosophyTitle: 'AESTHETIC & FUNCTIONAL APPROACH',
    philosophyQuote: '“A confident smile influences every aspect of human life. We merge modern European aligner ergonomics with minimally invasive aesthetic dentistry for life-changing facial balance.”',
    bio: 'Dr. Madhura brings specialized international orthodontic insight to Narayana Dental Clinic. With rigorous advanced clinical training from Spain and Italy, she excels in both subtle aligner therapies for working adults and early interceptive orthopedic guidance for growing children. Her warm, patient demeanor ensures that both kids and anxious adults feel immediately understood.',
    clinicalFocus: [
      {
        title: 'Clear Aligner Therapy',
        description: 'Nearly invisible, digital smile straightening',
        icon: 'Eye'
      },
      {
        title: 'Self-Ligating & Ceramic Braces',
        description: 'Low-friction, rapid alignment mechanics',
        icon: 'Grid'
      },
      {
        title: 'Smile Makeovers & Veneers',
        description: 'Porcelain laminate veneers & gum contouring',
        icon: 'Smile'
      },
      {
        title: 'Pediatric Interceptive Ortho',
        description: 'Habit breaking & jaw expansion therapy',
        icon: 'Activity'
      }
    ],
    consultationHours: 'Mon – Sat: By Scheduled Appointment',
    practiceLocation: 'Austin Town & Neelasandra',
    sinceYear: 2011,
    experienceYears: 13
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Kritika Madan',
    avatarInitials: 'KM',
    rating: 5,
    treatment: 'Root Canal Patient',
    category: 'root-canal',
    quote: '“Dr. Prakash is exceptionally patient and explains every step beforehand. I had a root canal treatment done and felt zero discomfort. The clinic hygiene is top-notch.”',
    location: 'Austin Town, Bengaluru',
    treatmentVerified: true
  },
  {
    id: 'rev-2',
    author: 'Philomena Vincent',
    avatarInitials: 'PV',
    rating: 5,
    treatment: 'Family Dental Care',
    category: 'general',
    quote: '“Our whole family has been visiting Narayana Dental Clinic for years now. Dr. Madhura took great care of my daughter’s braces. Very warm, honest, and ethical doctors.”',
    location: 'Neelasandra, Bengaluru',
    treatmentVerified: true
  },
  {
    id: 'rev-3',
    author: 'Santosh Chander',
    avatarInitials: 'SC',
    rating: 5,
    treatment: 'Emergency Consultation',
    category: 'general',
    quote: '“Very affordable and prompt dental treatment in Austin Town. Had an emergency tooth pain and was accommodated quickly on the same afternoon. Great experience.”',
    location: 'Austin Town Main Rd',
    treatmentVerified: true
  },
  {
    id: 'rev-4',
    author: 'Subhadra Devi',
    avatarInitials: 'SD',
    rating: 5,
    treatment: 'Dental Implant Treatment',
    category: 'implants',
    quote: '“I had dental implant surgery here. The process was explained step by step and the final crown feels totally natural. Strongly recommended for senior dental care.”',
    location: 'BDA Flats, Neelasandra',
    treatmentVerified: true
  },
  {
    id: 'rev-5',
    author: 'Yash Naik',
    avatarInitials: 'YN',
    rating: 5,
    treatment: 'Routine Checkup & Cleaning',
    category: 'general',
    quote: '“Both Dr. Prakash and Dr. Madhura provide outstanding clinical care without any rush. Modern clinic setup with reasonable rates right here in Neelasandra.”',
    location: 'Neelasandra, Bengaluru',
    treatmentVerified: true
  },
  {
    id: 'rev-6',
    author: 'J K Sarathikannan',
    avatarInitials: 'JS',
    rating: 5,
    treatment: 'Cosmetic Restoration',
    category: 'general',
    quote: '“Very calm and reassuring atmosphere. Clear pricing discussed upfront with zero hidden costs or forced treatments. Highly professional dental surgeons.”',
    location: 'Austin Town, Bengaluru',
    treatmentVerified: true
  },
  {
    id: 'rev-7',
    author: 'Christeena Dinakaran',
    avatarInitials: 'CD',
    rating: 5,
    treatment: 'Pediatric Dental Care',
    category: 'general',
    quote: '“Dr. Madhura was wonderful with my child during his first dental filling. Gentle, friendly, and made him completely fearless of the dental chair.”',
    location: 'Neelasandra, Bengaluru',
    treatmentVerified: true
  },
  {
    id: 'rev-8',
    author: 'Sandy Crystal',
    avatarInitials: 'SC',
    rating: 5,
    treatment: 'Clear Aligners',
    category: 'ortho',
    quote: '“Started my orthodontic alignment consultation here. Detailed digital scan and transparent discussion on aligner stages and timelines. Exceptional warmth.”',
    location: 'Bengaluru Central',
    treatmentVerified: true
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Patient Lounge & Reception',
    description: '#1616 BDA Flats, Austin Town Main Road. Designed for calm reassurance.',
    category: 'clinic',
    tag: 'Our Clinic',
    spaceTag: 'Reception Suite',
    imageType: 'reception'
  },
  {
    id: 'gal-2',
    title: 'Operatory Suite 01',
    description: 'High-vacuum sanitization and daylight windows overlooking green canopies.',
    category: 'clinic',
    tag: 'Our Clinic',
    spaceTag: 'Clinical Suite',
    imageType: 'operatory'
  },
  {
    id: 'gal-3',
    title: 'Sterile Treatment Setup',
    description: 'Class-B multi-cycle autoclaving and chairside digital sensor monitors.',
    category: 'treatments',
    tag: 'Dental Treatments',
    spaceTag: 'Operatory Care',
    imageType: 'sterilization'
  },
  {
    id: 'gal-4',
    title: '3D Aligners Consultation',
    description: 'Computer-guided smile simulation for discreet and comfortable orthodontic alignment.',
    category: 'ortho',
    tag: 'Orthodontics',
    spaceTag: 'Clear Aligners',
    imageType: 'aligners'
  },
  {
    id: 'gal-5',
    title: 'Dr. Prakash Venkatarama',
    description: 'Lead Dental Surgeon. Providing trusted family dental care since clinic founding in 2011.',
    category: 'patient-care',
    tag: 'Patient Care',
    spaceTag: 'BDS • Lead Surgeon',
    imageType: 'doctor-prakash'
  },
  {
    id: 'gal-6',
    title: 'Dr. Madhura Prakash',
    description: 'Orthodontist & Smile Designer. Specializing in braces and invisible aligner therapy.',
    category: 'ortho',
    tag: 'Orthodontics',
    spaceTag: 'BDS, MDS • Orthodontist',
    imageType: 'doctor-madhura'
  },
  {
    id: 'gal-7',
    title: 'Micro-Restorative Care',
    description: 'Zirconia crowns and conservative inlays calibrated for durable bite biomechanics.',
    category: 'treatments',
    tag: 'Dental Treatments',
    spaceTag: 'Prosthodontics',
    imageType: 'restorative'
  },
  {
    id: 'gal-8',
    title: 'Confident Smile Showcase',
    description: 'Multi-disciplinary rehabilitation combining conservative whitening and aligners.',
    category: 'before-after',
    tag: 'Before & After',
    spaceTag: 'Informed Patient Consent',
    imageType: 'smile'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'single-sitting-rct',
    title: 'Single-Sitting Root Canal Treatment',
    tagline: 'Painless, tooth-preserving pulp therapy with computerized apex locator',
    doctorInCharge: 'Dr. Prakash Venkatarama',
    duration: '45–60 mins',
    visits: '1 to 2 visits',
    description: 'Preserve your natural tooth roots safely and pain-free. Utilizing motorized rotary instruments and apex locators, we clean and seal infected canals in comfortable single sessions under precision local anesthesia.',
    highlights: [
      'Painless topical & computer-metered local anesthesia',
      'Digital apex locator ensures zero over-instrumentation',
      'Hermetic root canal sealing with bio-ceramic sealers',
      'Same-week zirconia or CAD-CAM porcelain crown restoration'
    ],
    idealFor: ['Severe throbbing toothache', 'Sensitivity to hot or cold food', 'Deep decay reaching tooth nerve', 'Trauma or sports tooth injury'],
    iconName: 'Sparkles'
  },
  {
    id: 'dental-implants',
    title: 'Advanced Titanium Dental Implants',
    tagline: 'Permanent, bone-anchored tooth replacements that look and chew like natural teeth',
    doctorInCharge: 'Dr. Prakash Venkatarama',
    duration: '60 mins',
    visits: 'Staged healing protocol',
    description: 'The gold standard for missing tooth restoration. We place premium CE/FDA-certified titanium implants into the jawbone, providing an everlasting anchor for porcelain or monolithic zirconia crowns without grinding down adjacent teeth.',
    highlights: [
      'Computerized pre-surgical 3D planning',
      'No trimming or alteration of neighboring healthy teeth',
      'Prevents jawbone shrinkage and facial collapse',
      'Lifetime durability with routine oral hygiene care'
    ],
    idealFor: ['Single or multiple missing teeth', 'Loose, uncomfortable dentures', 'Broken root remnants requiring extraction & immediate implant'],
    iconName: 'Shield'
  },
  {
    id: 'clear-aligners',
    title: 'Clear Aligners & Invisible Braces',
    tagline: 'Discreet digital orthodontic smile correction with European fellowship certification',
    doctorInCharge: 'Dr. Madhura Prakash',
    duration: '15 mins check-ins',
    visits: 'Every 6–8 weeks',
    description: 'Straighten crooked, crowded, or spaced teeth without metal wires and brackets. Using medical-grade transparent polyurethane aligners, Dr. Madhura designs custom micro-movements for adults, teens, and working professionals.',
    highlights: [
      'Virtually invisible when smiling or talking in meetings',
      'Removable for meals, coffee, and easy flossing',
      'Digital 3D computer preview of your finished smile before starting',
      'Smooth, zero-irritation edges tailored to your gum line'
    ],
    idealFor: ['Adults wanting discreet orthodontic care', 'Gaps between front teeth', 'Crowded or rotated teeth', 'Bite correction without metal brackets'],
    iconName: 'Smile'
  },
  {
    id: 'cosmetic-makeovers',
    title: 'Smile Makeovers, Veneers & Whitening',
    tagline: 'Minimally invasive aesthetic dental transformations with natural translucency',
    doctorInCharge: 'Dr. Madhura Prakash',
    duration: '45–90 mins',
    visits: '1 to 2 visits',
    description: 'Craft the radiant, symmetrical smile you have always desired. From ultrathin porcelain veneers and direct composite bonding to in-chair enamel-safe teeth whitening, our approach enhances your authentic facial characteristics.',
    highlights: [
      'Ultrathin porcelain laminates requiring minimal enamel prep',
      'In-chair LED power whitening brightening by up to 5-8 shades safely',
      'Gingival aesthetic laser contouring for gummy smiles',
      'Custom color-matching to natural skin tone and lips'
    ],
    idealFor: ['Yellowed or fluorosis-stained teeth', 'Chipped or uneven front teeth', 'Wide diastema (gap) between front teeth', 'Pre-wedding smile perfection'],
    iconName: 'Sparkles'
  },
  {
    id: 'pediatric-dentistry',
    title: 'Pediatric & Interceptive Child Dentistry',
    tagline: 'Gentle, zero-fear oral care crafted specifically for growing smiles',
    doctorInCharge: 'Dr. Madhura Prakash',
    duration: '30 mins',
    visits: 'Semi-annual checkups',
    description: 'We believe children should cherish visiting the dentist. Dr. Madhura’s patient, cheerful chairside manner ensures painless cavity fillings, pit-and-fissure sealants, and early interceptive myofunctional guidance to correct thumb-sucking and mouth breathing early.',
    highlights: [
      'Fun, fear-free introduction to dental wellness for toddlers and kids',
      'Cavity prevention with painless fluoride varnish and fissure sealants',
      'Early habit-breaking appliances (for thumb sucking / tongue thrusting)',
      'Milk tooth pulpotomy and gentle pediatric crowns'
    ],
    idealFor: ['Kids aged 1 to 14 years', 'First dental checkup milestones', 'Early teeth crowding or narrow palate', 'Cavity-prone school children'],
    iconName: 'Heart'
  },
  {
    id: 'family-preventive',
    title: 'Family Preventive Care & Digital Radiography',
    tagline: 'Ultralow radiation diagnostics, ultrasonic scaling, and gum health protection',
    doctorInCharge: 'Dr. Prakash & Dr. Madhura',
    duration: '30–45 mins',
    visits: 'Every 6 months',
    description: 'Routine oral checkups prevent 90% of complex dental emergencies. Our European Class-B sterilized clinic uses high-frequency digital RVG sensors for instant, zero-wait imaging with 90% less radiation exposure than conventional film.',
    highlights: [
      'Instant chairside digital RVG sensor diagnostics on HD monitors',
      'Subgingival ultrasonic tartar and plaque removal without enamel damage',
      'Periodontal deep scaling for bleeding gums and bad breath',
      'Transparent treatment roadmap with upfront fees discussed before treatment'
    ],
    idealFor: ['Annual family dental health maintenance', 'Bleeding gums or tartar buildup', 'Halitosis / chronic bad breath', 'Pre-pregnancy dental screening'],
    iconName: 'Activity'
  }
];

export const MILESTONES = [
  {
    year: '2011',
    title: 'Clinic Inception',
    description: 'Founded on Austin Town Main Road with a single dental operatory and an unwavering promise of patient-first honesty.',
    tag: 'Austin Town Launch'
  },
  {
    year: '2015',
    title: 'Tech Upgrades',
    description: 'Transitioned to fully digital RVG imaging and motorized rotary endodontics for pain-free single-visit treatments.',
    tag: 'Digital Diagnostics'
  },
  {
    year: '2019',
    title: 'Class-B Protocol',
    description: 'Institutionalized European vacuum Class-B autoclave sterilization, ensuring zero cross-contamination.',
    tag: 'Zero-Infection Safety'
  },
  {
    year: '2023',
    title: 'Cosmetic & Aligner Wing',
    description: 'Launched our dedicated clear aligner wing and digital smile simulation suite for aesthetic transformations.',
    tag: 'Clear Aligners Suite'
  },
  {
    year: 'Present',
    title: '15,000+ Smiles',
    description: 'Proudly serving multiple generations of families across Neelasandra, Austin Town, Richmond Town, and Central Bengaluru.',
    tag: 'Trusted Legacy'
  }
];

export const AMENITIES = [
  {
    title: 'Convenient Parking',
    description: 'Street and designated ground-floor vehicle parking available right in front of the clinic premises on Austin Town Main Road.',
    icon: 'Car'
  },
  {
    title: 'Senior & Wheelchair Access',
    description: 'Step-free ground-floor access designed with thoughtful care for seniors, expectant mothers, and mobility-assisted patients.',
    icon: 'Accessibility'
  },
  {
    title: 'Class-B Sterilization',
    description: 'Strict 4-tier autoclave sanitization matching international biosafety protocols, ensuring an infection-free clinical environment.',
    icon: 'ShieldCheck'
  }
];

export const FAQS = [
  {
    question: 'How do I reach the clinic by public transit?',
    answer: 'The clinic is 2 minutes walk from the Austin Town BDA Complex Bus Stop. BMTC buses connecting Shivajinagar, Majestic, Richmond Circle, and Shanthi Nagar halt regularly along Austin Town Main Road.'
  },
  {
    question: 'Do you treat walk-in dental emergencies?',
    answer: 'Yes, acute emergencies like unbearable toothache, fractured front teeth, knocked-out teeth, or acute facial swellings are prioritized by our duty dental surgeon during clinic hours (Mon–Sat 10 AM–8 PM, Sun 10 AM–2 PM).'
  },
  {
    question: 'What payment modes are accepted at the clinic?',
    answer: 'We accept UPI (GPay, PhonePe, Paytm, BHIM), all major credit and debit cards, net banking, and cash for all clinical treatments and consultation fees. Itemized tax invoices are issued for all procedures.'
  },
  {
    question: 'Can I consult Dr. Prakash or Dr. Madhura directly?',
    answer: 'Dr. Prakash and Dr. Madhura personally oversee and perform treatments. Dr. Prakash leads endodontics, implants, and oral surgery, while Dr. Madhura leads orthodontics, braces, aligners, and cosmetic smile makeovers. We recommend confirming appointment slots prior to visiting to minimize waiting.'
  },
  {
    question: 'Is root canal treatment really painless at your clinic?',
    answer: 'Yes! We apply a gentle topical strawberry/mint numbing gel prior to administering computer-guided local anesthesia with ultra-fine gauge needles. 98% of our patients report feeling only mild vibration during the entire procedure.'
  },
  {
    question: 'How many visits are required for clear aligners?',
    answer: 'After an initial 30-minute 3D digital scan and smile simulation, your custom aligner trays are manufactured. You then visit once every 6 to 8 weeks for a brief 15-minute progress check and to receive your subsequent tray sets.'
  }
];

