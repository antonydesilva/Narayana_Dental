export interface GalleryCardItem {
  id: string;
  index: number;
  category: string;
  tag: string;
  spaceTag: string;
  badgeIcon: string;
  badgeText: string;
  title: string;
  desc: string;
  longDesc: string;
  img: string;
  alt: string;
  objectFit?: 'cover' | 'contain';
}

export const GALLERY_ITEMS: GalleryCardItem[] = [
  {
    id: 'gal-1',
    index: 0,
    category: 'our-clinic',
    tag: 'Our Clinic',
    spaceTag: 'Reception Suite',
    badgeIcon: 'meeting_room',
    badgeText: 'Austin Town Reception',
    title: 'Patient Lounge & Reception',
    desc: '#1616 BDA Flats, Austin Town Main Road. Designed for calm reassurance.',
    longDesc: 'Comfortable waiting lounge at #1616 BDA Flats, Austin Town Main Road with warm natural timber accents and reception concierge.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABUel1mMe8jfzzsEZGQkJ4u4Zf0wYaTwHAzVXLGjZ6hMW3ls6fCuo-4EwVWltnMUMLvRm7zk-w56rKJXo4aaIJ0oinAn_QCiiVXBIuiS4ETQR1ApufYzS6T3n3UxP-VLmAVKX1Tjb7BewrA5TNVNgJ8y1ul5-wAGtvAC8AlCnKfInVsMZtUuRgAvWVJedNGeBHmOcBZ3anPAm_ArkJt6DrkoR269qzPyLeZvWukqmukTyKuUPLUkk-',
    alt: 'Warm Patient Lounge & Reception'
  },
  {
    id: 'gal-2',
    index: 1,
    category: 'our-clinic dental-treatments',
    tag: 'Our Clinic',
    spaceTag: 'Clinical Suite',
    badgeIcon: 'medical_services',
    badgeText: 'Operatory 01',
    title: 'Operatory Suite 01',
    desc: 'High-vacuum sanitization and daylight windows overlooking green canopies.',
    longDesc: 'Ergonomic treatment operatory featuring panoramic daylight, modern chairside controls, digital OPG viewer, and Class-B autoclave sterilizers.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQl4Q5yuaQZPLch441kcX3m2O7mYmwWpfBdSHa_yN8nmdWq5kHr9i4hfuE5P4xDGpIJ5UQEX1dN2rBe4trj1YfGsEG7l-OrhK4u3TdcZoecd0oHoiQ4buOHX4C3v0Y-yNtFeF5Y2DOsaPOazHhdFYvbIMuEnF_E2mQbTvej7GoNcpFvVwjmgngd0CK9ZA-VQE4gt0H_r5-o34SY1idgmRw3N-iHcB_bMw5F7kXsMaq8-OiM7AsjCB0',
    alt: 'State-of-the-Art Sterile Operatory Suite 01'
  },
  {
    id: 'gal-3',
    index: 2,
    category: 'dental-treatments',
    tag: 'Dental Treatments',
    spaceTag: 'Operatory Care',
    badgeIcon: 'biotech',
    badgeText: 'Sterile Protocols',
    title: 'Sterile Treatment Setup',
    desc: 'Class-B multi-cycle autoclaving and chairside digital sensor monitors.',
    longDesc: 'Precision treatment in action showing hygienic dental surgical unit, digital tablet sensor viewer, and pouched ultrasonic instrument trays.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbX9Mmwr9DkNs-4UATj2QPo108boHAcfCR4x4tH1x6bgeYmfF8yDj-ckTXvWU-w-Moz5_eTkzB0UVER4jK8ucuP4lVm2drDJ6AHdVLnafkEPSCgEKykTxRmK8n7isI5GXRqjsa1OBJ_9LaJP5FtMuPxZI8pqJXXFjPW40aYgvRVq28v7jJtId9ZE3x5sI-491GOYN2NX_XUb8mXVzV_Z5A6MD8bIx4y6uEfwbBYupiqY8yecYjuS3O',
    alt: 'Digital Diagnostic Operatory & RVG Imaging'
  },
  {
    id: 'gal-4',
    index: 3,
    category: 'orthodontics',
    tag: 'Orthodontics',
    spaceTag: 'Clear Aligners',
    badgeIcon: 'architecture',
    badgeText: 'Digital Orthodontics',
    title: '3D Aligners Consultation',
    desc: 'Computer-guided smile simulation for discreet and comfortable orthodontic alignment.',
    longDesc: 'Doctor and patient reviewing computer-guided 3D tooth movement simulations for clear aligners alongside physical study dental casts.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMw4H-7RH5pkyGjUTPRiVUOqjgt_pQYltgZF852bXgIqjlcWcOAWLhkiCKhvwiZ-Lqbpl6oCtrLY3UvsSGEj-qaxTrnErXFCkgk0cPYTLxUCACyYFwRyd8yyr4HLew7c82YxhAfganOuIL3dLkATcCXgSp1MK4D3-fyrGbZDtXJfIsaYHGpHsZb6FT9vmob1QheEgkh2fUONfam1fgAEcOHsd7rsKW63MwkOw2Gjqn67MXeExejSwx',
    alt: 'Orthodontic Consultation Suite & 3D Smile Scan'
  },
  {
    id: 'gal-5',
    index: 4,
    category: 'patient-care',
    tag: 'Patient Care',
    spaceTag: 'BDS • Lead Surgeon',
    badgeIcon: 'psychology',
    badgeText: 'Clinical Leadership',
    title: 'Dr. Prakash Venkatarama',
    desc: 'Lead Dental Surgeon. Providing trusted family dental care since clinic founding in 2011.',
    longDesc: 'Founder & Senior Dental Surgeon, BDS, with over 15+ years of clinical excellence in conservative restorative dentistry and compassionate patient care.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTZ4ragwmlXHvuTjaNp6z5eEfjoWzWSi4jkoU_DW8-lPydDGgINz_ZX-nhwJYmW98jKGfVUGRbNOT-Ii-Lpllrx3SWGPSzLstx5QV2ATYF3Yeau-3WGTTZhXlnoIqB9bRv81jEF5_t9vFreWMf9Wom7N78ljdAAMHk8P1IsBRmhjOyjAbF_WF9kYWzJ1x0fzgNjC9sOeiBt6vCeMl58iaHZC-NX-mmp3zJChW8Qidpk5k2EOkhQqfwYi3vSLwciza-gg',
    alt: 'Dr. Prakash Venkatarama consulting chairside'
  },
  {
    id: 'gal-6',
    index: 5,
    category: 'orthodontics patient-care',
    tag: 'Orthodontics',
    spaceTag: 'BDS, MDS • Orthodontist',
    badgeIcon: 'auto_awesome',
    badgeText: 'Orthodontic Specialist',
    title: 'Dr. Madhura Prakash',
    desc: 'Orthodontist & Smile Designer. Specializing in braces and invisible aligner therapy.',
    longDesc: 'Specialist Orthodontist dedicated to custom biomechanics, digital smile analysis, and interceptive pediatric orthodontics.',
    img: '/images/dr-madhura-prakash.jpg',
    alt: 'Dr. Madhura Prakash, Orthodontist & Cosmetic Dental Surgeon'
  },
  {
    id: 'gal-7',
    index: 6,
    category: 'dental-treatments',
    tag: 'Dental Treatments',
    spaceTag: 'Prosthodontics',
    badgeIcon: 'brush',
    badgeText: 'Crown & Bridge Lab',
    title: 'Micro-Restorative Care',
    desc: 'Zirconia crowns and conservative inlays calibrated for durable bite biomechanics.',
    longDesc: 'Precision tray for high-strength zirconia and lithium disilicate crowns crafted to restore natural chewing function and aesthetic anatomy.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBDHmSY7fIkwdZ2ydV41W7BcSCxXB-AiXsz1s50KjC_cL_AqY2ZptdNmDqqOT5bfWdNopnCeY-fFK2QPIAgbUvkojIVcxGjowAwUWQze_aU4rPIW7HbRyQI3KK2mhZtjCu4qtUcpEpIM2hlrvnGKGYWPCdACsaVB2mF4fTnj_Ic3vBiUb2IJRNOLy343zPGuzTm8HiKT8tKVfo_93U5uD-FgMeXFxEI9DNg1meroMTVjWv247mIhFO',
    alt: 'Micro-restorative ceramic crown alignment & preparation'
  },
  {
    id: 'gal-8',
    index: 7,
    category: 'dental-treatments patient-care',
    tag: 'Patient Care',
    spaceTag: 'Informed Patient Consent',
    badgeIcon: 'sentiment_satisfied',
    badgeText: 'Patient Smile',
    title: 'Confident Smile Showcase',
    desc: 'Multi-disciplinary rehabilitation combining conservative whitening and aligners.',
    longDesc: 'Complete restorative smile revitalization with ceramic laminates and periodontal contouring (Photographed with informed patient medical consent).',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDY-_duSzLL5L1FcyZX3cDVPr8OvsSnm-PXbCwlow5cjs5UA7VXPkwRnyLgSKfPfAepI3FB899mD6gbKLh6Kz26vB72ug6k3TOdKWRw9JES3KXK6d4b_1rVMgZlki2auVUybsD5NIF4ypgfGrb7WRDM-LUB3ZBF1-o1nRmQiNsXonUQ1BaRkPZwlydCAIbiUoFFF3ome7svMbRyuu4rAL6XyBu_-gJSLYplRE0KE3Eci2ksrpTYH3Hq',
    alt: 'Post-treatment healthy confident smile showcase'
  },
  {
    id: 'case-01',
    index: 8,
    category: 'before-after',
    tag: 'Before & After',
    spaceTag: 'Restorative Care',
    badgeIcon: 'healing',
    badgeText: 'Before & After Case',
    title: 'Before & After Dental Case',
    desc: 'Conservative anterior tooth restoration and surface stain removal.',
    longDesc: 'Before and after dental treatment result at Narayana Dental Clinic showing conservative anterior tooth restoration and surface stain removal.',
    img: '/images/cases/case-01-stain-restoration.jpg',
    alt: 'Before and after dental treatment result at Narayana Dental Clinic'
  },
  {
    id: 'case-02',
    index: 9,
    category: 'before-after',
    tag: 'Before & After',
    spaceTag: 'Orthodontics',
    badgeIcon: 'auto_awesome',
    badgeText: 'Before & After Case',
    title: 'Before & After Dental Case',
    desc: 'Comprehensive orthodontic alignment correcting dental crowding.',
    longDesc: 'Before and after dental treatment result at Narayana Dental Clinic showing orthodontic braces alignment under Dr. Madhura Prakash.',
    img: '/images/cases/case-02-orthodontic-alignment.jpg',
    alt: 'Before and after dental treatment result at Narayana Dental Clinic'
  },
  {
    id: 'case-03',
    index: 10,
    category: 'before-after',
    tag: 'Before & After',
    spaceTag: 'Periodontal Care',
    badgeIcon: 'clean_hands',
    badgeText: 'Before & After Case',
    title: 'Before & After Dental Case',
    desc: 'Deep ultrasonic periodontal scaling and calculus debridement.',
    longDesc: 'Before and after dental treatment result at Narayana Dental Clinic showing lingual ultrasonic scaling and tartar removal.',
    img: '/images/cases/case-03-lingual-scaling-tartar.jpg',
    alt: 'Before and after dental treatment result at Narayana Dental Clinic'
  },
  {
    id: 'case-04',
    index: 11,
    category: 'before-after',
    tag: 'Before & After',
    spaceTag: 'Smile Rehabilitation',
    badgeIcon: 'sentiment_satisfied',
    badgeText: 'Before & After Case',
    title: 'Before & After Dental Case',
    desc: 'Midline diastema gap closure and aesthetic composite rehabilitation.',
    longDesc: 'Before and after dental treatment result at Narayana Dental Clinic showing anterior midline diastema gap closure.',
    img: '/images/cases/case-04-diastema-smile-makeover.jpg',
    alt: 'Before and after dental treatment result at Narayana Dental Clinic'
  },
  {
    id: 'case-05',
    index: 12,
    category: 'before-after',
    tag: 'Before & After',
    spaceTag: 'Orthodontics',
    badgeIcon: 'grid_goldenratio',
    badgeText: 'Before & After Case',
    title: 'Before & After Dental Case',
    desc: 'Fixed orthodontic appliance mechanics with precision bracket placement.',
    longDesc: 'Before and after dental treatment result at Narayana Dental Clinic showing orthodontic bracket mechanics and alignment.',
    img: '/images/cases/case-05-orthodontic-appliance.jpg',
    alt: 'Before and after dental treatment result at Narayana Dental Clinic'
  },
  {
    id: 'clinic-01',
    index: 13,
    category: 'dental-treatments patient-care',
    tag: 'Dental Treatments',
    spaceTag: 'Operatory Suite',
    badgeIcon: 'medical_services',
    badgeText: 'Chairside Treatment',
    title: 'Patient Care & Treatment Setup',
    desc: 'Sterile chairside clinical care with tray preparation and operatory assistance.',
    longDesc: 'Doctor providing dental treatment at Narayana Dental Clinic showcasing sterile operatory protocols, specialized surgical tray, and dedicated assistant care.',
    img: '/images/clinic/clinic-01-implant-care.webp',
    alt: 'Doctor providing dental treatment at Narayana Dental Clinic'
  },
  {
    id: 'clinic-02',
    index: 14,
    category: 'orthodontics patient-care',
    tag: 'Orthodontics',
    spaceTag: 'Orthodontic Consultation',
    badgeIcon: 'auto_awesome',
    badgeText: 'Braces Consultation',
    title: 'Orthodontic Patient Care',
    desc: 'Routine orthodontic progress evaluation and brackets review with patient.',
    longDesc: 'Patient receiving dental treatment and orthodontic care at Narayana Dental Clinic under Dr. Madhura Prakash.',
    img: '/images/clinic/clinic-02-ortho-consultation.webp',
    alt: 'Patient receiving dental treatment at Narayana Dental Clinic'
  },
  {
    id: 'clinic-03',
    index: 15,
    category: 'dental-treatments patient-care',
    tag: 'Dental Treatments',
    spaceTag: 'Clinical Operatory',
    badgeIcon: 'biotech',
    badgeText: 'Clinical Procedure',
    title: 'Dental Treatment Procedure',
    desc: 'Focused dental procedure utilizing high-vacuum suction and clinical illumination.',
    longDesc: 'Dental treatment procedure at Narayana Dental Clinic conducted with high-precision operatory illumination and strict sterilization.',
    img: '/images/clinic/clinic-03-operatory-procedure.webp',
    alt: 'Dental treatment procedure at Narayana Dental Clinic',
    objectFit: 'contain'
  },
  {
    id: 'clinic-04',
    index: 16,
    category: 'patient-care',
    tag: 'Patient Care',
    spaceTag: 'Patient Experience',
    badgeIcon: 'sentiment_satisfied',
    badgeText: 'Comfortable Care',
    title: 'Patient Care & Reassurance',
    desc: 'Gentle, low-anxiety dental care tailored for senior patients.',
    longDesc: 'Patient care at Narayana Dental Clinic focused on a gentle approach, patient comfort, and conservative dentistry.',
    img: '/images/clinic/clinic-04-patient-smile.webp',
    alt: 'Patient care at Narayana Dental Clinic'
  },
  {
    id: 'clinic-05',
    index: 17,
    category: 'our-clinic patient-care',
    tag: 'Patient Care',
    spaceTag: 'Family Dentistry',
    badgeIcon: 'groups',
    badgeText: 'Family Care',
    title: 'Family Dental Care',
    desc: 'Trusted long-term dental care for families across Austin Town and Neelasandra.',
    longDesc: 'Doctor providing dental treatment and family consultation at Narayana Dental Clinic with preventive guidance.',
    img: '/images/clinic/clinic-05-family-care.webp',
    alt: 'Doctor providing dental treatment at Narayana Dental Clinic'
  },
  {
    id: 'clinic-06',
    index: 18,
    category: 'patient-care',
    tag: 'Patient Care',
    spaceTag: 'Consultation Suite',
    badgeIcon: 'psychology',
    badgeText: 'Patient Consultation',
    title: 'Clinical Care & Consultation',
    desc: 'Personalized doctor-patient consultation and post-treatment follow-up.',
    longDesc: 'Patient care at Narayana Dental Clinic with personalized consultation ensuring clear communication of oral health care.',
    img: '/images/clinic/clinic-06-patient-experience.webp',
    alt: 'Patient care at Narayana Dental Clinic'
  },
  {
    id: 'clinic-07',
    index: 19,
    category: 'dental-treatments patient-care',
    tag: 'Dental Treatments',
    spaceTag: 'Treatment Operatory',
    badgeIcon: 'chair',
    badgeText: 'Treatment Environment',
    title: 'Treatment Environment',
    desc: 'Well-equipped operatory with ergonomic dental chair and sanitized instruments.',
    longDesc: 'Patient receiving dental treatment at Narayana Dental Clinic featuring ergonomic chairside positioning and thorough sterilization.',
    img: '/images/clinic/clinic-07-senior-patient-care.webp',
    alt: 'Patient receiving dental treatment at Narayana Dental Clinic',
    objectFit: 'contain'
  },
  {
    id: 'clinic-08',
    index: 20,
    category: 'dental-treatments patient-care',
    tag: 'Dental Treatments',
    spaceTag: 'Surgical Care',
    badgeIcon: 'healing',
    badgeText: 'Clinical Precision',
    title: 'Clinical Dental Treatment',
    desc: 'Precision dental procedure carried out with specialized instruments and hygiene care.',
    longDesc: 'Dental treatment procedure at Narayana Dental Clinic adhering to hospital-grade sanitization and precision clinical standards.',
    img: '/images/clinic/clinic-08-clinical-treatment.webp',
    alt: 'Dental treatment procedure at Narayana Dental Clinic',
    objectFit: 'contain'
  }
];

/**
 * Returns 3 representative real clinic images for the Home Page Visual Tour:
 * 1. One "Our Clinic" image
 * 2. One "Dental Treatments" image
 * 3. One "Patient Care" image
 * Prioritizes the authentic uploaded clinic photographs over placeholders.
 */
export function getHomePreviewImages(items: GalleryCardItem[] = GALLERY_ITEMS): GalleryCardItem[] {
  const isReal = (item: GalleryCardItem) => item.img.startsWith('/images/clinic/');

  // 1. "Our Clinic" image (clinic-05 is authentic photo in front of clinic sign)
  const clinicImg =
    items.find((item) => item.category.includes('our-clinic') && isReal(item)) ||
    items.find((item) => item.category.includes('our-clinic')) ||
    items[0];

  // 2. "Dental Treatments" image (clinic-01 is Dr. Prakash chairside with instruments)
  const treatmentImg =
    items.find((item) => item.category.includes('dental-treatments') && isReal(item) && item.id !== clinicImg.id) ||
    items.find((item) => item.category.includes('dental-treatments') && item.id !== clinicImg.id) ||
    items[1];

  // 3. "Patient Care" image (clinic-04 is patient smile thumbs up)
  const patientCareImg =
    items.find((item) => item.tag === 'Patient Care' && isReal(item) && item.id !== clinicImg.id && item.id !== treatmentImg.id) ||
    items.find((item) => item.category.includes('patient-care') && isReal(item) && item.id !== clinicImg.id && item.id !== treatmentImg.id) ||
    items.find((item) => item.category.includes('patient-care') && item.id !== clinicImg.id && item.id !== treatmentImg.id) ||
    items[2];

  return [clinicImg, treatmentImg, patientCareImg];
}

/**
 * Returns filtered images for the Home Page Visual Tour according to active filter chip:
 * All => 3 representative images (Clinic, Treatments, Patient Care)
 * Other categories => Top 3 authentic images matching the category.
 */
export function getFilteredHomeImages(
  filter: 'all' | 'clinic' | 'treatments' | 'ortho' | 'patient-care',
  items: GalleryCardItem[] = GALLERY_ITEMS
): GalleryCardItem[] {
  if (filter === 'all') {
    return getHomePreviewImages(items);
  }

  const isReal = (item: GalleryCardItem) => item.img.startsWith('/images/clinic/');
  const categoryMap: Record<string, string> = {
    clinic: 'our-clinic',
    treatments: 'dental-treatments',
    ortho: 'orthodontics',
    'patient-care': 'patient-care'
  };

  const targetCategory = categoryMap[filter] || filter;
  const matching = items.filter((item) => item.category.split(' ').includes(targetCategory));

  // Sort matching so that authentic uploaded clinic images appear first
  const sorted = [...matching].sort((a, b) => {
    const aReal = isReal(a) ? 1 : 0;
    const bReal = isReal(b) ? 1 : 0;
    return bReal - aReal;
  });

  return sorted.slice(0, 3);
}
