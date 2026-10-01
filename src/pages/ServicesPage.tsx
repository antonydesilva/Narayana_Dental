import React, { useState } from 'react';
import { PageView } from '../types';

interface ServicesPageProps {
  onNavigate: (page: PageView) => void;
  onOpenBooking: (doctorPreference?: string, servicePreference?: string) => void;
}

interface TreatmentDetail {
  title: string;
  desc: string;
  steps: string[];
  cost: string;
  serviceId: string;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenBooking
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'restorative' | 'orthodontics' | 'cosmetic' | 'preventive' | 'diagnostics'>('all');
  const [selectedTreatmentKey, setSelectedTreatmentKey] = useState<string | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const treatmentData: Record<string, TreatmentDetail> = {
    implants: {
      title: "Dental Implants Procedure",
      desc: "Implants restore natural bite force and halt bone deterioration. Our 3D guided placement ensures safety and minimal healing time.",
      steps: [
        "Diagnostic 3D Scan & Bone Density Study",
        "Computer-Guided Titanium Post Placement",
        "Healing & Osseointegration (3-4 months)",
        "Custom Shade Milled Zirconia Crown Fixation"
      ],
      cost: "Custom quote following digital bone density assessment",
      serviceId: "dental-implants"
    },
    rct: {
      title: "Rotary Root Canal Treatment",
      desc: "Using electronic apex locators and flexible nickel-titanium files, we cleanse diseased pulp tissue gently under local anesthesia.",
      steps: [
        "Localized Digital Radiography",
        "Painless Access & Bio-Mechanical Canal Debridement",
        "Hermetic Gutta-Percha Sealing",
        "Protective Crown Placement to Shield Cusp Fracture"
      ],
      cost: "Affordable, insured packages with zero hidden fees",
      serviceId: "single-sitting-rct"
    },
    ortho: {
      title: "Orthodontics & Clear Aligners",
      desc: "From invisible aligners to self-ligating Damon brackets, align your bite with comfortable, low-friction tooth repositioning.",
      steps: [
        "Intraoral Digital Arch Scanning",
        "3D Treatment Simulation & Milestone Mapping",
        "Fortnightly Aligner Tray Exchanges or Wire Adjustment",
        "Retainer Delivery for Lifetime Stability"
      ],
      cost: "EMI flexible installments available on aligners and brackets",
      serviceId: "clear-aligners"
    },
    cosmetic: {
      title: "Smile Design & Ceramic Veneers",
      desc: "Re-engineer your smile line with ultra-thin ceramic veneers engineered to mask cracks, discoloration, and small spaces.",
      steps: [
        "Facial Proportion Analysis & Mockup",
        "Micro Enamel Surface Shaping",
        "Handcrafted Laboratory Ceramic Fabrication",
        "Resin Cement Bonding Under Rubber Dam"
      ],
      cost: "Transparent unit pricing tailored to your aesthetic plan",
      serviceId: "cosmetic-makeovers"
    },
    whitening: {
      title: "Clinical In-Office Whitening",
      desc: "Safe peroxide formulas activated with high-frequency LED light to strip deep stains without harming healthy tooth enamel.",
      steps: [
        "Gingival Gum Shield Application",
        "Medical-Grade Bleaching Gel Placement",
        "3 x 15-Minute Light Activation Cycles",
        "Desensitizing Fluoride Enamel Varnish"
      ],
      cost: "Quick 60-minute single appointment session",
      serviceId: "cosmetic-makeovers"
    },
    crowns: {
      title: "Zirconia & E-Max Crowns",
      desc: "Durable monolithic restorations that withstand biting pressures while blending with adjacent teeth naturally.",
      steps: [
        "Tooth Preparation & Digital Impression",
        "Provisional Temporary Crown Placement",
        "CAD/CAM High Precision Milling",
        "Definitive Luting with Biocompatible Cements"
      ],
      cost: "Backed by 5-15 year lab replacement warranties",
      serviceId: "dental-implants"
    },
    dentures: {
      title: "Precision Complete & Partial Dentures",
      desc: "Regain comfort and chewing confidence with lightweight, tissue-friendly acrylic and flexible thermoplastic bases.",
      steps: [
        "Primary & Border-Molded Secondary Impressions",
        "Jaw Relation & Bite Registration",
        "Aesthetic Wax Try-in for Patient Approval",
        "Final Delivery and Soft Tissue Checkup"
      ],
      cost: "Economical multi-tiered options tailored for seniors",
      serviceId: "dental-implants"
    },
    wisdom: {
      title: "Gentle Wisdom Tooth Surgery",
      desc: "Expert minor oral surgery protocol prioritizing speedy bone recovery and minimum swelling after procedure.",
      steps: [
        "Targeted Digital Nerve Mapping",
        "Local Anesthesia & Precision Exposure",
        "Gentle Sectioning & Tooth Removal",
        "Collagen Sponge Placement & Resorbable Sutures"
      ],
      cost: "Immediate pain relief with transparent pricing",
      serviceId: "single-sitting-rct"
    },
    fillings: {
      title: "Nano-Hybrid Tooth Fillings",
      desc: "Conservative tooth preparation restoring initial decay with tooth-colored polymers that chemically bond with enamel.",
      steps: [
        "Gentle Decay Excavation",
        "Enamel Acid Etching & Primer Bonding",
        "Incremental Layering of Composite Resin",
        "LED Curing & Anatomical Occlusal Polishing"
      ],
      cost: "Routine preservation completed in under 30 minutes",
      serviceId: "single-sitting-rct"
    },
    pediatric: {
      title: "Comprehensive Child Dental Care",
      desc: "A positive, playful dental home encouraging lifelong oral hygiene without anxiety or tears.",
      steps: [
        "Gentle Non-Invasive Oral Examination",
        "Fissure Sealant Application for Deep Grooves",
        "Fluoride Varnish Enamel Fortification",
        "Preventive Habit & Brushing Guidance"
      ],
      cost: "Family friendly preventive dental packages",
      serviceId: "pediatric-dentistry"
    },
    xray: {
      title: "Ultra-Low Radiation RVG Diagnostics",
      desc: "Digital sensors delivering 90% less radiation than standard film, yielding instant high-definition diagnostics on operatory screens.",
      steps: [
        "Comfortable Sensor Placement",
        "Split-Second Low-Dose Exposure",
        "Real-Time Enhancement & Contrast Analysis",
        "Patient Chairside Case Walkthrough"
      ],
      cost: "Complimentary inclusion in comprehensive consultations",
      serviceId: "single-sitting-rct"
    },
    laser: {
      title: "Soft Tissue Laser Therapy",
      desc: "State of the art diode laser energy ensuring painless gum procedures, fast healing, and zero bleeding.",
      steps: [
        "Topical Numbing Gel Application",
        "Targeted Laser Energy Delivery",
        "Instant Coagulation & Bio-Stimulation",
        "Fast Next-Day Normalcy Without Stitches"
      ],
      cost: "Specialized minimally invasive gum therapy",
      serviceId: "cosmetic-makeovers"
    }
  };

  const services = [
    {
      id: 'implants',
      category: 'restorative',
      title: 'Dental Implants',
      icon: 'dentistry',
      categoryTag: 'Restorative',
      featurePill: 'Lifetime Solution',
      sublabel: 'Single & Full Arch',
      desc: 'Permanent, structural tooth replacement using medical-grade titanium fixtures surgically embedded into the jawbone, topped with lifelike ceramic crowns.',
      whoNeeds: 'Missing one, multiple, or all teeth with sound bone density.',
      whatToExpect: '3-6 months osseointegration period, 98% success rate.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4EHDPeIa3IYbQ-NqrBEGu6kmooaPM7bxDyqjmVT1_Q5lnZzq4qRnUG0-nVmWeGgp_ml9gu0UC0jaXcI3_9eA9_A9C3HP1mp1rRSF7ieb-oIbxZ-uFYbxoobaXjMmvFSwN9W5_r344OKY-eTAX2surhpFnXuLKCitrh-QvmKpqOhwl9a3xrSnvAUtNM3PGhva-Kvkv32xyMUJB232vumO2l1yaMS4N5wwrsgAQRC9MCieu5BmEJs6O'
    },
    {
      id: 'rct',
      category: 'restorative',
      title: 'Root Canal Treatment',
      icon: 'healing',
      categoryTag: 'Restorative',
      featurePill: 'Single Sitting Available',
      sublabel: 'Preserve Natural Tooth',
      desc: 'Painless, rotary endodontic therapy designed to save deeply decayed, fractured, or infected natural teeth from premature extraction.',
      whoNeeds: 'Persistent throbbing pain, sensitivity to heat, or root absesses.',
      whatToExpect: '45-60 min procedure with computer-controlled local anesthesia.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3V3i_YNlrVYe9YYpV5jTZ8aDbRc5y2XjcC1jXuzb9Nm-OuzsUZKmCPKAlzWqJs8zHrc0QfQZx6f0XYJwttbhnXBh2N6_gwiMHL8c0vgSQ4obFZ2VzWhw03p59cFkInTAwtCkwZ9vq42EfePEwpvjFWn0N4P9z4rSJLp8iqz7QGYeLU1cxRaXrZ6oxsnthGkn3aKrPoVmeCcNlPrnBY4mVrmwFe_YIvvbb3YneoC63q3A9WY4ONCkF'
    },
    {
      id: 'ortho',
      category: 'orthodontics',
      title: 'Orthodontics & Braces',
      icon: 'straighten',
      categoryTag: 'Orthodontics',
      featurePill: 'Teens & Adults',
      sublabel: 'Aligners & Braces',
      desc: 'Complete realignment solutions including traditional metal braces, discreet ceramic brackets, and nearly invisible custom clear aligners.',
      whoNeeds: 'Crowding, gap closures, overbites, crossbites, and misaligned jaws.',
      whatToExpect: '6 to 18 months customized plan with digital progress tracking.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAg-Ot7MsTVzjsttPrpjZA2XJYG9Zi_QQmD3szTpYOR7UGdF9eralU7MK3u7_FBuD2SFoldIbyrh5lpE-D3mHp04yVD-w5HEhPa9FIEnR2mZpCiSmK025ljszCtKWt5NJNiLQDOxFtHeIJRGvofc--8hYyeaaZSxaxUW4TB-UeXy3m6CocIPp5fJ-du87CKTD62fbdIhQ8DmVR0qx38Qk9vtuk95nE3zKgzxPlXhNl0GMRudYBXZXQB'
    },
    {
      id: 'cosmetic',
      category: 'cosmetic',
      title: 'Smile Design & Veneers',
      icon: 'auto_fix_high',
      categoryTag: 'Cosmetic',
      featurePill: 'Digital Smile Design',
      sublabel: 'Bespoke Aesthetics',
      desc: 'Handcrafted ultra-thin porcelain veneers, composite bonding, and aesthetic recontouring that complement your unique facial proportions.',
      whoNeeds: 'Chipped edges, uneven sizing, fluorosis stains, or minor overlaps.',
      whatToExpect: 'Diagnostic wax-up mockups before any tooth prep; 2 visits.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBekwTvWQRMgBpfegN-ak9mKctmbkO6rbbM-bTQ4K48cwwCYoyGWvvFhwopsD8jhuGYMySG-ivt-ZO55OVN7hXHUSnQTQc9Iu0vx39v3kXccYWM6L2s_hsmh-SOU4NrPICa9hLqKRN_amdjvd-p5rXMa9peTOPCBwMAHYrgWrbsBCFr8V8nELM6mzWIpdQhF1n1rvLlYTsjkSubawA3KZe21ADd9CRlnnckU8lcj8vcYJ1Zk2PyRwgW'
    },
    {
      id: 'whitening',
      category: 'cosmetic',
      title: 'Teeth Whitening',
      icon: 'flare',
      categoryTag: 'Cosmetic',
      featurePill: 'Immediate Results',
      sublabel: 'Enamel Safe',
      desc: 'In-office professional whitening system with enamel-safe hydrogen/carbamide gels to lift stubborn tea, coffee, and tobacco discolorations.',
      whoNeeds: 'Dull, yellowed enamel, or pre-event smile enhancements.',
      whatToExpect: '60 minutes session, up to 6 to 8 shades brighter safely.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuJBHHuKvpoDS8nP3S3_MuWfbund3F8SXJN_bnfVVAJ16OQ6w97Zhh7CQ9pF-MGhe5KtNTCw86wLhB4Rkm1vaumtZ_BsJqZMGuYVvLkuUvL4ehDqMqjNSNj41NN5kTbexkhL19IbwS513BGAXTf7zDo8uC4zOl8-sPnRHs94cYyGqpP28pyg6Qwv2_BwbdTz68AdXp6fHUwoZAaCdqVNp0yO_ESJhqydqKLbKWVFfBC6KEbLlNE6Ow'
    },
    {
      id: 'crowns',
      category: 'restorative',
      title: 'Crowns & Bridges',
      icon: 'verified',
      categoryTag: 'Restorative',
      featurePill: 'High Strength',
      sublabel: 'Zirconia & Ceramic',
      desc: 'CAD/CAM milled full-zirconia and porcelain-fused-to-metal caps to restore fractured teeth or bridge empty spaces seamlessly.',
      whoNeeds: 'Post-RCT reinforcement, cracked cusps, or anchored bridge gaps.',
      whatToExpect: 'Digital scanning, precise shade matching, 10-15 year longevity.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAR_C6mW1Uh0gSSmfzxL6DtoPlAUL4GdFuq1HtBiKMiqontQtHW1QAq4bF_1HEO7zdF_CGlUssUpxx-4V-eink8tf1IP1ejPtjyZ66QkQrAVeROZh4QbX6AWUu-qbIoVQ1cD-vDejL-SwoWbZovjjDOaX0NxTN5-iDo4RUcyCHViMYXfnTbyJEXD_WuyI4fBhNai4asiSCkpfZj1hMjn3iymsrK67Yy05-gly6cxqu7cYiIiR5x9E9G'
    },
    {
      id: 'dentures',
      category: 'restorative',
      title: 'Complete & Partial Dentures',
      icon: 'group',
      categoryTag: 'Restorative',
      featurePill: 'Senior Care',
      sublabel: 'BPS & Flexible',
      desc: 'Flexible, high-impact acrylic and cast-partial prosthetics crafted for optimal mastication, facial fullness, and relaxed speaking clarity.',
      whoNeeds: 'Patients missing substantial or all natural teeth seeking economical renewal.',
      whatToExpect: '3-4 gentle fitting sessions for a suction-locked, comfortable fit.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBZmsPoPvFzqEStnokc0oY5dejfFy26yXlcFLShghlI8E30RbCMS003z1uJ_Ui34aI9MrWRBKVidHEZVNf3lyPOpoz858OggFoVVGNHPMU1ixGnPZmMtWBa5fmpZQw_ITi4i5JmrUEJO8y4jsBQh-q4_np6ayKxJh0zzOzRrc6AubhwtwiM1ncha6rZ5hwiX9ekNpD_auF27zYGLltk7TOT7ZLH2URGzd1V3uJ5JePBuieDYnUoxnE'
    },
    {
      id: 'wisdom',
      category: 'restorative',
      title: 'Wisdom Tooth Extraction',
      icon: 'medical_information',
      categoryTag: 'Oral Surgery',
      featurePill: 'Pain Relief',
      sublabel: 'Minimally Invasive',
      desc: 'Trauma-free oral surgical excision of impacted, sideways, or painfully erupting third molars with accelerated healing protocols.',
      whoNeeds: 'Jaw swelling, recurrent pericoronitis, cheek biting, or orthodontic crowding.',
      whatToExpect: '30 min procedure with specialized oral surgeon, zero procedural pain.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhAcgV2FhSZtXtDLjQjB-0i5-rCBFr0QTBxqreiAJF48e0DRin2EAYxc5cjqPMMf-r1iHeimGu_f7Xz7c7RmydYH2R_pmt74mrZrfhgJUrEzRIuTddDSYT6UIO_Bjk6nnknsP82PtMMfGckdjpVQAQpVavxpddvWK00GJBU5IHrTRenjX1afLuce95hjItyRpxzJES7CFrJyvzdNAM4O_iwnwcSRsgrizYW4kOTDzM3oHQFPPa5LF_'
    },
    {
      id: 'fillings',
      category: 'preventive',
      title: 'Composite Tooth Fillings',
      icon: 'brush',
      categoryTag: 'Restorative',
      featurePill: 'Mercury Free',
      sublabel: 'Direct Bonding',
      desc: 'Biocompatible nano-hybrid composite resins matched accurately to your natural enamel hue to seal early decay and prevent root involvement.',
      whoNeeds: 'Dark pit cavities, food accumulation pockets, or old black amalgam upgrades.',
      whatToExpect: 'Quick 20-30 min treatment per tooth with instant chewing strength.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvhyi-Vzf4j_zxtcHtA_HLx3CDr9REbzWZ4YDAtyDGMnAvVvf7FamJvNhPLOx8a9EYZ65fqLhFhQZCJhhkYOwQwZbb2JsosSEM14Ti3vNMEG0WQzCYeQfDCKEXuygDGHp-Av9DbEYrSY1WlOLsxoAUUBa2xCGXZk2vNe3b01qNYMyw3P-O4jtVbwsT3Ll1ljh7I1vs0Ca3eP-Ze5fk22AFGAnLSlurVkf4aOQVB4-JQjCQB8gdUcXR'
    },
    {
      id: 'pediatric',
      category: 'preventive',
      title: 'Child Dental Care',
      icon: 'child_care',
      categoryTag: 'Pediatric',
      featurePill: 'Fear-Free Clinic',
      sublabel: 'Sealants & Fluoride',
      desc: 'Compassionate pediatric care focusing on pit-and-fissure sealants, topical fluoride strengthening, habit-breaking appliances, and milk tooth pulpotomies.',
      whoNeeds: 'Children aged 1 to 14, prevention of early childhood nursing caries.',
      whatToExpect: 'Patient, playful demeanor to eliminate white-coat fear permanently.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgNQn00S3QU2z1isN5ju8htqxFk6jIRTzJQ5AEw-9X763MBAT8aEfX4ssBw8oXCfYamA1yccqFmI4pXGnHPzCEGPGYP1VxZvWrvPW7h7NaOgU8FxvcKawZ1x-MwCANqbTgmddccp3Si0pGsucTjupMGtPjV6JHGxw5Tdja1SOX0QQL6uGatjrd7eaXipyN43Nnlz-wy3X4RU2CtNyTBSilJcWvR9B_J8YMIIT97R0L-ETb2cbL0TU8'
    },
    {
      id: 'xray',
      category: 'diagnostics',
      title: 'Digital X-Ray Diagnostics',
      icon: 'radiology',
      categoryTag: 'Diagnostics',
      featurePill: '90% Less Radiation',
      sublabel: 'Instant RVG Imaging',
      desc: 'Instant high-definition chairside digital radiography (RVG) enabling millimeter-precise diagnosis of hidden interdental decay, bone loss, and nerve depths.',
      whoNeeds: 'Comprehensive new patient exams, pre-implant scans, root canal tracking.',
      whatToExpect: '3-second instant capture displayed directly on patient viewing monitor.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkrIqqW_Jlwc5OEOyT1lR11IZQFg-mq4TGM42egqcG_YQEbvm43fvYV1OcxUegYVLQlyDWG-X7nwD2MULMPG_10zQrD2693j7_5QiP4MctP5zkNz_Axgjar_QnJ0i7rpSSXXV1rlQEOjzwUTibC0nwqr8eFQgExMXRiUO-foaOq_lVO4Axxb4nna4i94stxgghGZYUtcl38nE-opRoZYoO_Au3UelpR-Q5tpQwQBzWwfatK9mZy2Io'
    },
    {
      id: 'laser',
      category: 'preventive',
      title: 'Laser Dental Treatment',
      icon: 'fluorescent',
      categoryTag: 'Laser Therapy',
      featurePill: 'No Bleeding / Sutures',
      sublabel: 'Diode Soft Tissue',
      desc: 'Advanced soft-tissue diode laser therapy for gummy smile correction, frenectomy, deep pocket sterilization, and rapid apthous ulcer relief.',
      whoNeeds: 'Excessive gums, painful mouth ulcers, dark pigmentation, or bleeding gingiva.',
      whatToExpect: 'Virtually bloodless, minimal need for anesthesia, same-day recovery.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTlj6A53h5DLlIT8GvXr-T9RQkrfVjJk2BhN-0STwHXBzUpjpinFoWoiDGidy2mSJRvtO5pCicwHEk4ybXCPfhKiP0UouQDyqlELksOjD2Rex9jrm8qGIUuXLwU20D62L_QESxAk0x33exs_ymk4ZV14dIOLcAX41xJaRJcrVO3mWaTFyGKvtS74xuDdjcXiO0vAKXoGdzoMiwilgg2dQQzr1WhmymHcJ1jnnNtJWtBbm9-zQSA9UC'
    }
  ];

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(s => s.category === activeCategory);

  const faqs = [
    {
      q: "Are root canal treatments painful at Narayana Dental Clinic?",
      a: "No. With advanced motorized rotary endodontics and targeted local anesthesia, a root canal is no more uncomfortable than having a regular cavity filling. The procedure actually eliminates the acute pain caused by the infected nerve inside your tooth."
    },
    {
      q: "What should I bring or prepare for my first consultation?",
      a: "Please bring a list of any current medications you take, along with prior dental records or x-rays if available within the past 12 months. We recommend eating a light meal before your visit (unless you are undergoing pre-arranged conscious sedation)."
    },
    {
      q: "How long do dental implants last?",
      a: "When placed under sterile surgical conditions and properly maintained with regular bi-annual cleans and everyday flossing, titanium dental implants boast a 98% long-term success rate and can easily last 25 years to a lifetime."
    },
    {
      q: "What is the difference between ceramic braces and clear aligners?",
      a: "Ceramic braces are fixed onto the front of your teeth like traditional braces, but the brackets are tooth-colored. Clear aligners (like Invisalign) are completely removable, transparent plastic trays worn 20-22 hours daily, offering unmatched discretion and freedom during meals."
    },
    {
      q: "How strict are your sterilization and hygiene protocols?",
      a: "We adhere strictly to hospital-grade 6-step sterilization protocols. Every single handpiece and instrument is sealed in color-changing indicator pouches and processed in Class-B medical autoclaves. We unseal pouches directly in front of each patient."
    }
  ];

  const activeTreatmentModal = selectedTreatmentKey ? treatmentData[selectedTreatmentKey] : null;

  return (
    <div className="w-full bg-[#f8f9ff]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col w-full">

          {/* 1. Page Hero Banner */}
          <div className="relative py-8 sm:py-12 md:py-16 overflow-hidden rounded-3xl bg-[#eef4ff] mb-8 sm:mb-12 shadow-xs border border-[#dde9fb]/80 mt-6">
            <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-[#cde5ff]/40 blur-3xl pointer-events-none"></div>
            <div className="absolute left-1/3 -bottom-24 w-80 h-80 rounded-full bg-[#d7e4f5]/60 blur-2xl pointer-events-none"></div>
            
            <div className="relative z-10 px-6 sm:px-10 max-w-4xl flex flex-col gap-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white shadow-xs w-fit text-[#24638f] border border-slate-100">
                <span className="material-symbols-outlined text-[18px]">medical_services</span>
                <span className="text-xs uppercase tracking-wider font-semibold">Specialized Clinical Care • Austin Town &amp; Neelasandra</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#002548] tracking-tight font-display">
                Comprehensive Dental Treatments in Bengaluru
              </h1>

              <p className="text-base sm:text-lg text-[#43474f] max-w-2xl leading-relaxed">
                From routine preventive care to complex surgical &amp; cosmetic procedures, our clinic provides complete oral healthcare under one roof.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-[#43474f] text-xs sm:text-sm font-medium">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#24638f] text-[20px]">verified</span>
                  <span>13+ Years Clinical Trust</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#24638f] text-[20px]">biotech</span>
                  <span>Sterile European Autoclave Class B</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#24638f] text-[20px]">radiology</span>
                  <span>Ultra-Low Radiation RVG Tech</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Clinical Environment Operatory Highlight Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-12 sm:mb-16 items-center bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-slate-100">
            <div className="lg:col-span-7 flex flex-col gap-2">
              <span className="text-xs uppercase tracking-widest text-[#24638f] font-bold">Clinical Environment</span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#002548] font-display">
                State-of-the-Art Operatory Designed for Absolute Comfort
              </h2>
              <p className="text-sm sm:text-base text-[#43474f] leading-relaxed">
                Our operatory suites feature ergonomic dental chairs, panoramic window lighting to reduce anxiety, real-time high-definition chairside radiography, and precision micro-motor delivery systems.
              </p>

              <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-3">
                <div className="bg-[#eef4ff] p-3 sm:p-4 rounded-xl border border-[#dde9fb]/80 text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-bold text-[#002548] font-display">100%</div>
                  <div className="text-[11px] sm:text-xs text-[#43474f] font-medium">Autoclaved Pouched Kits</div>
                </div>
                <div className="bg-[#eef4ff] p-3 sm:p-4 rounded-xl border border-[#dde9fb]/80 text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-bold text-[#002548] font-display">0%</div>
                  <div className="text-[11px] sm:text-xs text-[#43474f] font-medium">Cross-Infection Risk</div>
                </div>
                <div className="bg-[#eef4ff] p-3 sm:p-4 rounded-xl border border-[#dde9fb]/80 text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-bold text-[#002548] font-display">15k+</div>
                  <div className="text-[11px] sm:text-xs text-[#43474f] font-medium">Patients Treated</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-sm bg-[#dde9fb]">
              <img 
                className="w-full h-full object-cover" 
                alt="Sunlit state of the art modern dental operatory room in Bengaluru clinic with sleek ergonomic white and blue dental chair, large clear bay window, pristine sterilization countertop, overhead medical lamp, and mounted digital x-ray monitor showing clear teeth scans in daylight." 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJYQZQzgycdHLxCXiysMCOQnCXydxnaBMJJy--HYXOp9fnq1EONS549bh4Kvq2TBVHJMIO34zfHsG25GRsUXUT3RdliYMkwFlIUAdRLAC7RxcQRNT6Lyn484nNIwWk8cCD1-2DTXmsf2CKK3M5mhArPZWM9qOmJjeZhjbQ1mZaD9F9CmpfvMhlU9O48AhcJHekTcWEa7mjPFgKmLYBTuSKOJbRozLztDSf7W1YgXj4f0ki5ZqqIZaC" 
              />
              <div className="absolute bottom-3 left-3 bg-[#002548]/85 backdrop-blur-md px-3 py-1.5 rounded-lg text-white text-xs flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#cde5ff]">photo_camera</span>
                <span>Operatory Suite 1 — Austin Town Branch</span>
              </div>
            </div>
          </div>

          {/* 3. Sticky Category Filter Bar */}
          <div className="sticky top-20 z-30 bg-[#f8f9ff]/95 backdrop-blur-md py-3 mb-8">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <button 
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeCategory === 'all'
                    ? 'bg-[#123b66] text-white shadow-xs'
                    : 'bg-[#e4efff] text-[#43474f] hover:bg-[#dde9fb] hover:text-[#002548]'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">apps</span>
                <span>All Treatments</span>
                <span className={`px-1.5 py-0.5 rounded-md text-[11px] ml-1 ${activeCategory === 'all' ? 'bg-white/20 text-white' : 'bg-white text-[#123b66]'}`}>12</span>
              </button>

              <button 
                onClick={() => setActiveCategory('restorative')}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeCategory === 'restorative'
                    ? 'bg-[#123b66] text-white shadow-xs'
                    : 'bg-[#e4efff] text-[#43474f] hover:bg-[#dde9fb] hover:text-[#002548]'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">healing</span>
                <span>Restorative &amp; Implants</span>
              </button>

              <button 
                onClick={() => setActiveCategory('orthodontics')}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeCategory === 'orthodontics'
                    ? 'bg-[#123b66] text-white shadow-xs'
                    : 'bg-[#e4efff] text-[#43474f] hover:bg-[#dde9fb] hover:text-[#002548]'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">straighten</span>
                <span>Orthodontics</span>
              </button>

              <button 
                onClick={() => setActiveCategory('cosmetic')}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeCategory === 'cosmetic'
                    ? 'bg-[#123b66] text-white shadow-xs'
                    : 'bg-[#e4efff] text-[#43474f] hover:bg-[#dde9fb] hover:text-[#002548]'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">auto_fix_high</span>
                <span>Cosmetic Dentistry</span>
              </button>

              <button 
                onClick={() => setActiveCategory('preventive')}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeCategory === 'preventive'
                    ? 'bg-[#123b66] text-white shadow-xs'
                    : 'bg-[#e4efff] text-[#43474f] hover:bg-[#dde9fb] hover:text-[#002548]'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">child_care</span>
                <span>Preventive &amp; Pediatric</span>
              </button>

              <button 
                onClick={() => setActiveCategory('diagnostics')}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeCategory === 'diagnostics'
                    ? 'bg-[#123b66] text-white shadow-xs'
                    : 'bg-[#e4efff] text-[#43474f] hover:bg-[#dde9fb] hover:text-[#002548]'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">monitor_heart</span>
                <span>Diagnostics</span>
              </button>
            </div>
          </div>

          {/* 4. 12 Treatment Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredServices.map((service) => (
              <div 
                key={service.id} 
                className="group flex flex-col justify-between bg-white rounded-2xl p-5 sm:p-6 shadow-xs border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex flex-col gap-4">
                  {/* Photo with badges */}
                  <div className="relative h-44 rounded-xl overflow-hidden bg-[#e4efff]">
                    <img 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      alt={service.title}
                      src={service.img} 
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#002548]/80 backdrop-blur-sm text-white text-xs font-semibold">
                      {service.categoryTag}
                    </span>
                    <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#002548] text-xs font-semibold">
                      {service.featurePill}
                    </span>
                  </div>

                  {/* Title & Icon */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#e4efff] flex items-center justify-center text-[#123b66] shrink-0">
                      <span className="material-symbols-outlined text-[24px]">{service.icon}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#002548] font-display">{service.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#43474f] leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Who Needs It & What to Expect */}
                  <div className="bg-[#eef4ff] p-3 rounded-xl flex flex-col gap-1.5 text-xs text-[#43474f] border border-[#dde9fb]/60">
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[16px] text-[#24638f] mt-0.5 shrink-0">person_search</span>
                      <span><strong className="text-[#002548]">Who Needs It:</strong> {service.whoNeeds}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[16px] text-[#24638f] mt-0.5 shrink-0">hourglass_top</span>
                      <span><strong className="text-[#002548]">What to Expect:</strong> {service.whatToExpect}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action footer */}
                <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-[#24638f] font-semibold">{service.sublabel}</span>
                  <button 
                    onClick={() => setSelectedTreatmentKey(service.id)}
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#002548] hover:text-[#24638f] group-hover:translate-x-0.5 transition-all cursor-pointer"
                  >
                    <span>Treatment Details</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* 5. Frequently Asked Questions Accordion */}
          <div className="mb-16 bg-[#eef4ff] rounded-3xl p-6 sm:p-10 border border-[#dde9fb]/90 shadow-xs">
            <div className="max-w-3xl mb-8">
              <span className="text-xs uppercase tracking-widest text-[#24638f] font-bold">Frequently Asked Questions</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#002548] mt-1 font-display">Dental Treatment Queries Answered</h2>
              <p className="text-sm sm:text-base text-[#43474f] mt-1 leading-relaxed">
                Transparent answers regarding safety, costs, visit counts, and aftercare directly from our dental team.
              </p>
            </div>

            <div className="flex flex-col gap-3 max-w-4xl">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div key={index} className="bg-white rounded-2xl shadow-xs border border-slate-100 overflow-hidden">
                    <button 
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-semibold text-[#002548] cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <span 
                        className={`material-symbols-outlined text-[#24638f] transition-transform duration-300 shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      >
                        expand_more
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-[#43474f] leading-relaxed border-t border-slate-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 6. Bottom Gradient CTA Banner */}
          <div className="relative bg-gradient-to-r from-[#002548] via-[#123b66] to-[#24638f] rounded-3xl p-6 sm:p-10 lg:p-12 overflow-hidden shadow-xl mb-16 text-white">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#cde5ff]/10 blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex flex-col gap-2 max-w-xl text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-1.5 text-[#cde5ff] text-xs font-semibold">
                  <span className="material-symbols-outlined text-[18px]">event_available</span>
                  <span>Flexible Morning &amp; Evening Slots</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  Ready to Experience Gentle, Precise Dental Care?
                </h2>
                <p className="text-sm sm:text-base text-[#83a6d7] leading-relaxed">
                  Book an appointment or walk in for a detailed clinical examination. Our senior doctors in Neelasandra &amp; Austin Town are here to help restore your confident smile.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
                <a 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 h-12 rounded-xl bg-white text-[#002548] text-xs sm:text-sm font-semibold hover:bg-slate-50 hover:shadow-md transition-all" 
                  href="tel:+916360654061"
                >
                  <span className="material-symbols-outlined text-[20px] text-[#002548]">call</span>
                  <span>Call 6360654061</span>
                </a>
                <button 
                  onClick={() => onOpenBooking()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 h-12 rounded-xl bg-[#780b00] text-white text-xs sm:text-sm font-semibold hover:bg-[#780b00]/90 transition-all shadow-md cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                  <span>Book Appointment</span>
                </button>
              </div>
            </div>
          </div>

          {/* 7. Treatment Details Modal */}
          {activeTreatmentModal && (
            <div 
              onClick={() => setSelectedTreatmentKey(null)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <div 
                onClick={(e) => e.stopPropagation()}
                className="bg-white max-w-xl w-full rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
              >
                <button 
                  onClick={() => setSelectedTreatmentKey(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>

                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-3 pr-8">
                    <div className="w-12 h-12 rounded-2xl bg-[#cde5ff]/60 flex items-center justify-center text-[#002548] shrink-0">
                      <span className="material-symbols-outlined text-[28px]">verified</span>
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#24638f] font-bold">Treatment Protocol</span>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#002548] font-display">{activeTreatmentModal.title}</h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#43474f] leading-relaxed">
                    {activeTreatmentModal.desc}
                  </p>

                  <div className="bg-[#eef4ff] p-4 sm:p-5 rounded-2xl flex flex-col gap-2 border border-[#dde9fb]/80">
                    <span className="text-xs uppercase tracking-wider text-[#002548] font-bold">Clinical Steps Involved</span>
                    <div className="flex flex-col gap-2.5 mt-1">
                      {activeTreatmentModal.steps.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#43474f]">
                          <span className="w-5 h-5 rounded-full bg-[#123b66] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3.5 bg-[#e4efff] rounded-xl border border-[#dde9fb]/80">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-[#002548] font-medium">
                      <span className="material-symbols-outlined text-[18px] text-[#24638f]">payments</span>
                      <span>{activeTreatmentModal.cost}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button 
                      onClick={() => {
                        const sId = activeTreatmentModal.serviceId;
                        setSelectedTreatmentKey(null);
                        onOpenBooking(undefined, sId);
                      }}
                      className="flex-1 inline-flex items-center justify-center h-12 rounded-xl bg-[#123b66] text-white font-semibold text-xs sm:text-sm hover:bg-[#24638f] transition-all cursor-pointer shadow-sm"
                    >
                      Book For This Treatment
                    </button>
                    <a 
                      href="tel:+916360654061" 
                      className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#e4efff] hover:bg-[#dde9fb] text-[#002548] transition-all shrink-0 border border-[#dde9fb]"
                    >
                      <span className="material-symbols-outlined text-[20px]">call</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
