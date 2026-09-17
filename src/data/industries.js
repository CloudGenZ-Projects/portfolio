import { TOTAL_THEMES_COUNT } from './themesConfig.js';

export const INDUSTRIES = [
  // 1. HOME & TRADE SERVICES (13)
  {
    id: 'plumber',
    name: 'Plumber',
    sector: 'home-services',
    tagline: 'Precision Plumbing & Rapid Emergency Response',
    description: 'Licensed master plumbing, trenchless sewer repair, water heaters, and 24/7 urgent flood defense.',
    rating: '4.9',
    reviewCount: '580+',
    featuredServices: ['Emergency Pipe Repair', 'Tankless Water Heaters', 'Hydro Jetting Drain Clear', 'Whole-Home Repiping'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'electrician',
    name: 'Electrician',
    sector: 'home-services',
    tagline: 'Certified High-Voltage & Smart Home Electrical',
    description: 'Master electrician services, EV charger installations, panel upgrades, and architectural lighting design.',
    rating: '5.0',
    reviewCount: '420+',
    featuredServices: ['200A Panel Modernization', 'Level-2 EV Charger Setup', 'Smart Home Automation', 'Commercial Lighting'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'hvac',
    name: 'HVAC / Heating & Cooling',
    sector: 'home-services',
    tagline: 'Climate Engineering & Pure Air Filtration',
    description: 'Commercial and residential HVAC diagnostics, heat pump transitions, seasonal tune-ups, and air purification.',
    rating: '4.9',
    reviewCount: '610+',
    featuredServices: ['Heat Pump Installation', 'AC Compressor Overhaul', 'Furnace Repair & Safety Check', 'HEPA Air Scrubbing'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'roofer',
    name: 'Roofer',
    sector: 'home-services',
    tagline: 'Storm-Proof Roofing & Architectural Shingles',
    description: 'Lifetime warranty architectural slate, standing seam metal roofing, leak detection, and storm restoration.',
    rating: '4.8',
    reviewCount: '340+',
    featuredServices: ['Standing Seam Metal', 'Architectural Shingle Overhaul', 'Drone Thermal Leak Analysis', 'Gutter & Eaves Protection'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'landscaper',
    name: 'Landscaper / Lawn Care',
    sector: 'home-services',
    tagline: 'Bespoke Hardscapes & Living Botanical Design',
    description: 'Transformative outdoor living spaces, drought-tolerant xeriscapes, flagstone patios, and estate turf care.',
    rating: '4.9',
    reviewCount: '490+',
    featuredServices: ['Custom Stone Patios', 'Smart Drip Irrigation', 'Specimen Tree Planting', 'Weekly Estate Care'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1557429287-b2e26467fc2b?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'house-painter',
    name: 'House Painter',
    sector: 'home-services',
    tagline: 'Flawless Interior & Exterior Surface Finishing',
    description: 'Ultra-durable micro-finish paints, historic restoration, custom lacquer cabinets, and elastomeric weather coatings.',
    rating: '4.9',
    reviewCount: '310+',
    featuredServices: ['Cabinet Spray Refinishing', 'Exterior UV Resistant Coat', 'Lime Wash & Plaster', 'Dustless Prep Sanding'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'pest-control',
    name: 'Pest Control',
    sector: 'home-services',
    tagline: 'Eco-Smart Pest Elimination & Perimeter Defense',
    description: 'Botanical barrier protection, non-toxic wildlife exclusion, termite thermal imaging, and guaranteed eradication.',
    rating: '4.8',
    reviewCount: '415+',
    featuredServices: ['Termite Colony Elimination', 'Sub-Floor Rodent Proofing', 'Eco-Botanical Yard Shield', 'Commercial Sanitation'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1584727638096-042c45049ebe?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'cleaning-service',
    name: 'Cleaning Service',
    sector: 'home-services',
    tagline: 'Hospital-Grade Deep Cleaning & Luxury Maid Service',
    description: 'HEPA-filtered detail cleaning, post-renovation cleanup, recurring luxury estate maintenance, and steam sanitization.',
    rating: '4.9',
    reviewCount: '780+',
    featuredServices: ['Deep Sanitization Polish', 'Move-In/Move-Out Overhaul', 'Post-Construction Dust Off', 'Recurring Hotel-Grade Maid'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'handyman',
    name: 'Handyman',
    sector: 'home-services',
    tagline: 'Expert Home Repairs, Assemblies & Precision Fixes',
    description: 'Prompt multi-skilled craftsmanship for drywall patches, door alignments, fixture installations, and minor carpentry.',
    rating: '4.9',
    reviewCount: '390+',
    featuredServices: ['Drywall Patch & Texture', 'Smart Lock Installation', 'Custom Trim & Molding', 'Plumbing Fixture Swaps'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'garage-door-repair',
    name: 'Garage Door Repair',
    sector: 'home-services',
    tagline: 'Torsion Spring Specialists & Whisper-Quiet Openers',
    description: 'Same-day spring replacements, heavy-duty smart belt drives, custom cedar carriage doors, and track alignment.',
    rating: '4.9',
    reviewCount: '310+',
    featuredServices: ['High-Cycle Spring Swap', 'Smart WiFi Opener Setup', 'Track Realignment & Rollers', 'Modern Glass Door Installs'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'fence-installer',
    name: 'Fence Installer',
    sector: 'home-services',
    tagline: 'Architectural Wood, Aluminum & Privacy Perimeters',
    description: 'Horizontal modern cedar fences, commercial black aluminum gates, automated entryways, and custom post footings.',
    rating: '4.8',
    reviewCount: '275+',
    featuredServices: ['Modern Horizontal Cedar', 'Powder-Coated Aluminum', 'Automated Driveway Gates', 'Vinyl Security Enclosures'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1557429287-b2e26467fc2b?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'concrete-paving',
    name: 'Concrete / Paving',
    sector: 'home-services',
    tagline: 'Stamped Decorative Concrete & Industrial Flatwork',
    description: 'Stamped patios, reinforced monolithic driveways, epoxy showroom flooring, and retaining wall masonry.',
    rating: '4.9',
    reviewCount: '290+',
    featuredServices: ['Stamped Slate Concrete', 'Reinforced Driveways', 'Commercial Epoxy Coating', 'Exposed Aggregate Walks'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'general-contractor',
    name: 'General Contractor',
    sector: 'home-services',
    tagline: 'Turnkey Luxury Renovations & Custom Additions',
    description: 'High-end kitchen transformations, master suite extensions, architectural management, and structural engineering.',
    rating: '5.0',
    reviewCount: '460+',
    featuredServices: ['Chef Kitchen Remodeling', 'Second Story Additions', 'Permit & Architectural Plans', 'Structural Wall Removal'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85'
    ]
  },

  // 2. HEALTHCARE & CLINICAL (8)
  {
    id: 'dentist',
    name: 'Dentist',
    sector: 'health-medical',
    tagline: 'Cosmetic Dentistry, Clear Aligners & Gentle Care',
    description: 'Porcelain veneers, Invisalign elite provider, painless laser dentistry, and same-day CEREC ceramic crowns.',
    rating: '4.9',
    reviewCount: '890+',
    featuredServices: ['Invisalign Clear Aligners', 'Porcelain Veneers', 'Laser Gum Therapy', 'Same-Day CEREC Crowns'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'chiropractor',
    name: 'Chiropractor',
    sector: 'health-medical',
    tagline: 'Spinal Decompression & Holistic Athletic Recovery',
    description: 'Evidence-based chiropractic adjustments, computerized spinal decompression, posture restoration, and active release.',
    rating: '4.9',
    reviewCount: '470+',
    featuredServices: ['Computerized Decompression', 'Active Release Technique (ART)', 'Pediatric & Prenatal Care', 'Sciatica Relief Protocol'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'physical-therapist',
    name: 'Physical Therapist',
    sector: 'health-medical',
    tagline: 'Biomechanics, Dry Needling & Return-to-Sport Rehab',
    description: 'Orthopedic rehabilitation, post-operative ACL recovery, vestibular therapy, and functional dry needling.',
    rating: '5.0',
    reviewCount: '380+',
    featuredServices: ['Functional Dry Needling', 'Post-Op Knee/Shoulder Rehab', 'Gait Analysis & Orthotics', 'Ergonomic Restoration'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'optometrist',
    name: 'Optometrist',
    sector: 'health-medical',
    tagline: 'Designer Eyewear & Digital Retinal Diagnostic Exam',
    description: 'Optomap ultra-widefield imaging, dry eye specialty clinics, bespoke luxury frames, and orthokeratology lenses.',
    rating: '4.9',
    reviewCount: '520+',
    featuredServices: ['Optomap Retinal Scan', 'Dry Eye IPL Therapy', 'Luxury Frame Styling', 'Specialty Scleral Lenses'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'medical-spa',
    name: 'Medical Spa / Aesthetics',
    sector: 'health-medical',
    tagline: 'Physician-Led Skin Rejuvenation & Body Contouring',
    description: 'Botox, Juvederm fillers, Morpheus8 RF microneedling, laser hair removal, and medical chemical peels.',
    rating: '4.9',
    reviewCount: '710+',
    featuredServices: ['Botox & Dysport Wrinkle Erasers', 'Morpheus8 RF Microneedling', 'CoolSculpting Elite', 'HydraFacial Deluxe MD'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'therapist',
    name: 'Therapist / Counselor',
    sector: 'health-medical',
    tagline: 'Mindful Psychological Counseling & EMDR Therapy',
    description: 'Licensed clinical social work, CBT, trauma-informed EMDR sessions, couples counseling, and telehealth.',
    rating: '5.0',
    reviewCount: '290+',
    featuredServices: ['Trauma-Focused EMDR', 'Couples Communication Therapy', 'Anxiety & Burnout Relief', 'Secure Telehealth'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'veterinarian',
    name: 'Veterinarian',
    sector: 'health-medical',
    tagline: 'Compassionate Pet Medicine & Urgent Surgical Care',
    description: 'Fear-free certified veterinary clinic, digital ultrasound, soft tissue surgery, dental cleaning, and wellness plans.',
    rating: '4.9',
    reviewCount: '940+',
    featuredServices: ['Fear-Free Wellness Checks', 'Ultrasonic Dental Scale', 'In-House Bloodwork & Diagnostics', 'Orthopedic Surgery'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'urgent-care',
    name: 'Urgent Care Clinic',
    sector: 'health-medical',
    tagline: 'Walk-In Immediate Care with Digital X-Ray Onsite',
    description: 'No-appointment urgent medical evaluations, fracture splinting, laceration stitches, and rapid lab results.',
    rating: '4.8',
    reviewCount: '1,120+',
    featuredServices: ['Digital X-Ray Onsite', 'Minor Laceration Suturing', 'Rapid Flu/COVID/Strep Panels', 'Occupational Medicine'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85'
    ]
  },

  // 3. BEAUTY & PERSONAL CARE (5)
  {
    id: 'hair-salon',
    name: 'Hair Salon',
    sector: 'beauty-wellness',
    tagline: 'Balayage Artists, Precision Cuts & Hair Extensions',
    description: 'Master colorists, hand-tied sew-in extensions, Brazilian blowouts, and editorial event styling.',
    rating: '4.9',
    reviewCount: '630+',
    featuredServices: ['French Balayage & Glaze', 'Invisible Bead Extensions', 'Keratin Smoothing Infusion', 'Precision Shear Sculpting'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'barber-shop',
    name: 'Barber Shop',
    sector: 'beauty-wellness',
    tagline: 'Hot Towel Shaves, Skin Fades & Beard Sculpting',
    description: 'Traditional straight-razor hot lather shaves, custom clipper skin fades, beard conditioning, and whiskey lounge.',
    rating: '5.0',
    reviewCount: '580+',
    featuredServices: ['Traditional Hot Lather Shave', 'Zero-Gap Skin Fade', 'Beard Conditioning & Sculpt', 'Executive Grooming Package'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'nail-salon',
    name: 'Nail Salon',
    sector: 'beauty-wellness',
    tagline: 'Apres Gel-X Extensions & Hand-Painted Nail Art',
    description: 'Non-toxic Russian manicures, Apres Gel-X tips, organic CBD spa pedicures, and fine line nail artistry.',
    rating: '4.8',
    reviewCount: '490+',
    featuredServices: ['Russian Dry Manicure', 'Apres Gel-X Full Set', 'Custom Micro Nail Art', 'Herbal Jelly Pedicure'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'day-spa',
    name: 'Day Spa / Massage',
    sector: 'beauty-wellness',
    tagline: 'Therapeutic Deep Tissue & Infrared Sauna Retreat',
    description: 'Hot basalt stone massage, prenatal comfort therapy, eucalyptus steam rituals, and organic holistic facials.',
    rating: '5.0',
    reviewCount: '620+',
    featuredServices: ['Basalt Hot Stone Therapy', 'Targeted Deep Tissue Release', 'Full Spectrum Infrared Sauna', 'Aromatherapy Glow Facial'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'tattoo-studio',
    name: 'Tattoo & Piercing Studio',
    sector: 'beauty-wellness',
    tagline: 'Custom Single-Needle Fine Line & Solid Blackwork',
    description: 'Autoclave sterile studio, bespoke tattoo designs, titanium body jewelry, and gentle anatomical piercings.',
    rating: '4.9',
    reviewCount: '440+',
    featuredServices: ['Single-Needle Fine Line', 'Large Scale Black & Grey', 'Custom Color Realism', 'Implant-Grade Piercings'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=85'
    ]
  },

  // 4. AUTOMOTIVE SERVICES (4)
  {
    id: 'auto-repair',
    name: 'Auto Repair / Mechanic',
    sector: 'automotive',
    tagline: 'ASE Certified Diagnostics, Brakes & Engine Tuning',
    description: 'Factory-scheduled maintenance, brake rotors, transmission flushes, check engine code scanning, and fleet repair.',
    rating: '4.9',
    reviewCount: '690+',
    featuredServices: ['Computerized Engine Diagnostics', 'Ceramic Brake Rotor Upgrades', 'Transmission Overhaul', 'Hybrid Battery Health Checks'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'auto-body',
    name: 'Auto Body / Collision Repair',
    sector: 'automotive',
    tagline: 'OEM Laser Frame Straightening & Paint Matching',
    description: 'Insurance claim concierge, paintless dent repair (PDR), computerized color spectrometer matching, and bumper repair.',
    rating: '4.8',
    reviewCount: '370+',
    featuredServices: ['Laser Unibody Alignment', 'Paintless Dent Removal (PDR)', 'Downdraft Spray Booth Match', 'Direct Insurance Processing'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'auto-detailing',
    name: 'Auto Detailing',
    sector: 'automotive',
    tagline: 'Multi-Stage Paint Correction & Ceramic Coatings',
    description: '9H hardness graphene coatings, interior steam extraction, wheel ceramic armor, and concours swirl removal.',
    rating: '5.0',
    reviewCount: '510+',
    featuredServices: ['9H Graphene Ceramic Coating', 'Dual-Action Paint Correction', 'Deep Leather Steam Extract', 'Full Engine Bay Detail'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'tire-shop',
    name: 'Tire Shop',
    sector: 'automotive',
    tagline: 'High-Performance Tires, Balancing & Laser Alignments',
    description: 'Road force tire balancing, winter/all-season swaps, flat repairs, TPMS sensor programming, and wheel packages.',
    rating: '4.9',
    reviewCount: '630+',
    featuredServices: ['Hunter Road-Force Balancing', 'Computer 4-Wheel Alignment', 'Tire Pressure Monitor Reset', 'Run-Flat Mobile Installation'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=85'
    ]
  },

  // 5. FOOD & HOSPITALITY (5)
  {
    id: 'restaurant',
    name: 'Restaurant',
    sector: 'food-dining',
    tagline: 'Farm-to-Table Seasonal Dining & Curated Wines',
    description: 'Locally sourced heirloom produce, dry-aged steaks, woodfire cooking, craft cocktails, and reservations.',
    rating: '4.9',
    reviewCount: '1,420+',
    featuredServices: ['Chef Tasting Menus', 'Sommelier Wine Pairings', 'Private Dining Room Buyouts', 'Weekend Brunch Experiences'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'cafe',
    name: 'Café / Coffee Shop',
    sector: 'food-dining',
    tagline: 'Specialty Micro-Roasts, Pour-Overs & Artisan Pastries',
    description: 'Direct-trade single-origin espresso, oat milk lattes, house-made matcha, quiet workspaces, and beans to go.',
    rating: '4.8',
    reviewCount: '870+',
    featuredServices: ['Single-Origin Pour-Overs', 'Ceremonial Grade Matcha', 'House-Baked Croissants', 'Whole Bean Subscriptions'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'bakery',
    name: 'Bakery',
    sector: 'food-dining',
    tagline: 'Wild Sourdough, French Patisserie & Custom Cakes',
    description: 'Slow-fermented artisan sourdough loaves, laminated brioche, macaron assortments, and multi-tier wedding cakes.',
    rating: '5.0',
    reviewCount: '640+',
    featuredServices: ['Slow Ferment Sourdough', 'Custom Celebration Cakes', 'Laminated Viennoiserie', 'Gluten-Free Flour Confections'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'food-truck',
    name: 'Food Truck',
    sector: 'food-dining',
    tagline: 'Gourmet Street Eats, Smashburgers & Craft Tacos',
    description: 'Curbside street gourmet, live location tracking, brewery popups, event catering, and scratch-made sauces.',
    rating: '4.9',
    reviewCount: '530+',
    featuredServices: ['Wagyu Smashburgers', 'Birria Street Tacos', 'Private Event Catering', 'Live Location Schedule'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'catering-service',
    name: 'Catering Service',
    sector: 'food-dining',
    tagline: 'Bespoke Event Culinary & Grazing Table Artistry',
    description: 'Corporate luncheons, elegant wedding plated dinners, grazing tables, bar staffing, and dietary accommodations.',
    rating: '4.9',
    reviewCount: '380+',
    featuredServices: ['Full-Service Wedding Menus', 'Executive Boardroom Lunches', 'Luxury Charcuterie Grazing', 'Professional Bartending'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85'
    ]
  },

  // 6. FITNESS & ATHLETIC STUDIOS (4)
  {
    id: 'personal-trainer',
    name: 'Personal Trainer / Gym',
    sector: 'fitness-sports',
    tagline: 'Strength Periodization, Body Composition & 1-on-1',
    description: 'Private gym training pods, Olympic lifting coaching, body scan analytics, customized macros, and mobility.',
    rating: '5.0',
    reviewCount: '490+',
    featuredServices: ['1-on-1 Elite Strength Coaching', 'InBody Composition Scan', 'Custom Nutrition Architecture', 'Functional Mobility Protocol'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'yoga-pilates',
    name: 'Yoga / Pilates Studio',
    sector: 'fitness-sports',
    tagline: 'Reformer Pilates, Heated Vinyasa & Breathwork',
    description: 'Custom Balanced Body reformers, infrared heated yoga rooms, sound bath meditation, and teacher training.',
    rating: '4.9',
    reviewCount: '580+',
    featuredServices: ['Reformer Athletic Flow', 'Infrared Hot Vinyasa', 'Restorative Sound Bath', 'Private Form Assessment'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'martial-arts',
    name: 'Martial Arts School',
    sector: 'fitness-sports',
    tagline: 'Brazilian Jiu-Jitsu, Muay Thai & Youth Discipline',
    description: 'Black belt instruction, self-defense mastery, structured youth character development, and sparring rings.',
    rating: '4.9',
    reviewCount: '340+',
    featuredServices: ['Gi & No-Gi Brazilian Jiu-Jitsu', 'Authentic Muay Thai Kickboxing', 'Kids Character Bully-Proof', 'Competition Team Camp'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'dance-studio',
    name: 'Dance Studio',
    sector: 'fitness-sports',
    tagline: 'Contemporary, Ballet, Hip-Hop & Performance Arts',
    description: 'Sprung maple dance floors, beginner to pre-professional tracks, recital productions, and competition troupes.',
    rating: '4.8',
    reviewCount: '310+',
    featuredServices: ['Classical Ballet & Pointe', 'Urban Hip-Hop Choreography', 'Contemporary Lyrical', 'Annual Showcase Recitals'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=85'
    ]
  },

  // 7. PROFESSIONAL SERVICES & FINANCE (6)
  {
    id: 'accountant',
    name: 'Accountant / Tax Prep',
    sector: 'professional',
    tagline: 'Strategic Tax Minimization & Fractional CFO',
    description: 'CPA-led tax returns, corporate entity structuring, QuickBooks bookkeeping, and multi-state compliance.',
    rating: '5.0',
    reviewCount: '410+',
    featuredServices: ['Corporate Tax Minimization', 'Fractional CFO Advisory', 'Cloud Bookkeeping Cleanup', 'IRS Audit Shield Protection'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'insurance-agency',
    name: 'Insurance Agency',
    sector: 'professional',
    tagline: 'Comprehensive Risk Coverage for Auto, Home & Commercial',
    description: 'Independent insurance brokerage comparing 30+ top underwriters for optimal coverage and lowest premiums.',
    rating: '4.8',
    reviewCount: '360+',
    featuredServices: ['Bundled Auto & Home Policies', 'Commercial General Liability', 'Workers Comp Optimization', 'High-Value Umbrella Plans'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'financial-advisor',
    name: 'Financial Advisor',
    sector: 'professional',
    tagline: 'Fiduciary Wealth Management & Retirement Roadmaps',
    description: 'Fee-only fiduciary guidance, diversified ETF asset allocation, estate planning, and tax-advantaged wealth transfer.',
    rating: '5.0',
    reviewCount: '290+',
    featuredServices: ['Fee-Only Fiduciary Portfolio', 'Retirement Cash Flow Simulation', 'Tax-Advantaged Estate Transfer', 'Executive Stock Option Strategy'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'real-estate-agent',
    name: 'Real Estate Agent',
    sector: 'professional',
    tagline: 'Luxury Residential Listings & Tactical Negotiation',
    description: 'High-end architectural marketing, cinematic drone walkthroughs, private off-market listings, and buyer representation.',
    rating: '5.0',
    reviewCount: '620+',
    featuredServices: ['Cinematic Architectural Showcase', 'Off-Market Pocket Listings', 'Buyer Advisory & Valuation', 'Staging & Interior Direction'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'photographer',
    name: 'Photographer / Videographer',
    sector: 'professional',
    tagline: 'Editorial Brand Imagery, Weddings & Cinematic 4K',
    description: 'Documentary wedding coverage, commercial brand campaigns, 4K color-graded cinema reels, and aerial drone footage.',
    rating: '4.9',
    reviewCount: '470+',
    featuredServices: ['Editorial Wedding Coverage', 'Commercial Brand Campaigns', '4K Drone Aerial Cinema', 'Studio Product Photography'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'notary',
    name: 'Notary / Legal Document Prep',
    sector: 'professional',
    tagline: 'Mobile Notary Signing & Certified Document Verification',
    description: 'Loan signing agent (LSA) for real estate escrows, apostilles, powers of attorney, and certified mobile notarization.',
    rating: '4.9',
    reviewCount: '320+',
    featuredServices: ['Real Estate Loan Escrow Signings', 'Mobile Doorstep Notarization', 'Apostille & Legal Certification', 'Power of Attorney Verification'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=85'
    ]
  },

  // 8. PET CARE SERVICES (3)
  {
    id: 'pet-groomer',
    name: 'Pet Groomer',
    sector: 'pet-care',
    tagline: 'Luxury Hydro-Surge Baths & Breed-Specific Styling',
    description: 'Stress-free low-noise hand scissoring, blueberry facial scrubs, de-shedding mud treatments, and organic shampoo.',
    rating: '4.9',
    reviewCount: '580+',
    featuredServices: ['Breed-Standard Scissor Trim', 'Blueberry Tear-Stain Facial', 'Oatmeal Hydro-Surge Bath', 'Teeth & Paw Pad Therapy'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'dog-trainer',
    name: 'Dog Trainer',
    sector: 'pet-care',
    tagline: 'Positive Reinforcement, Leash Manners & Board & Train',
    description: 'Certified behaviorists teaching impulse control, puppy socialization, off-leash recall, and separation anxiety.',
    rating: '5.0',
    reviewCount: '410+',
    featuredServices: ['Off-Leash Reliability Camp', 'Puppy Head-Start Socialization', 'Reactivity & Anxiety Rehab', 'Private In-Home Coaching'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'pet-boarding',
    name: 'Pet Boarding / Daycare',
    sector: 'pet-care',
    tagline: 'Climate-Controlled Suites & 24/7 Live Webcams',
    description: 'Turf play yards, orthopedic beds, private feline condos, temperament-matched group play, and live camera feeds.',
    rating: '4.8',
    reviewCount: '620+',
    featuredServices: ['Executive Luxury Suites', 'Live HD Webcam Access', 'K9 Turf Group Play Yards', 'Nightly Story & Tuck-In'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&q=85'
    ]
  },

  // 9. EDUCATION & CHILDCARE (2)
  {
    id: 'daycare-preschool',
    name: 'Daycare / Preschool',
    sector: 'education-family',
    tagline: 'Play-Based Early Education & Secure Daily Updates',
    description: 'Montessori-inspired infant to pre-K curriculums, biometric entry security, organic meals, and real-time parent apps.',
    rating: '4.9',
    reviewCount: '470+',
    featuredServices: ['Montessori-Inspired Curriculum', 'Real-Time Parent App Updates', 'Organic Chef-Prepared Meals', 'Biometric Security Access'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'tutoring',
    name: 'Tutoring / Learning Center',
    sector: 'education-family',
    tagline: 'STEM Mastery, SAT/ACT Prep & Tailored Study Skills',
    description: 'Personalized math, science, and reading coaching with diagnostic skill gap assessments and college test mastery.',
    rating: '5.0',
    reviewCount: '390+',
    featuredServices: ['SAT / ACT Score Guarantee Prep', 'AP Calculus & Physics Tutoring', 'Diagnostic Learning Gap Plans', 'Confidence & Study Habits'],
    themeCount: TOTAL_THEMES_COUNT,
    images: [
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85'
    ]
  }
];

export function getIndustryBySlug(slug) {
  if (!slug) return null;
  const normalized = slug.toLowerCase().trim();
  return INDUSTRIES.find((ind) => ind.id === normalized || ind.id.replace(/-/g, '') === normalized.replace(/-/g, '')) || null;
}
