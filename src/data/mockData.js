
export const KOLKATA_LOCATIONS = [
  {
    id: 'salt-lake',
    name: 'Salt Lake',
    zone: 'East Kolkata',
    activePros: 24
  },
  {
    id: 'new-town',
    name: 'New Town',
    zone: 'East Kolkata',
    activePros: 18
  },
  {
    id: 'park-street',
    name: 'Park Street',
    zone: 'Central Kolkata',
    activePros: 21
  },
  {
    id: 'behala',
    name: 'Behala',
    zone: 'South-West Kolkata',
    activePros: 15
  },
  {
    id: 'garia',
    name: 'Garia',
    zone: 'South Kolkata',
    activePros: 17
  },
  {
    id: 'howrah',
    name: 'Howrah',
    zone: 'Howrah',
    activePros: 12
  }
];

export const CATEGORIES = [
  { id: 'all', name: 'All Services', icon: 'apps' },
  { id: 'cleaning', name: 'Cleaning & Hygiene', icon: 'sanitizer' },
  { id: 'electrical', name: 'Electrical', icon: 'electric_bolt' },
  { id: 'plumbing', name: 'Plumbing', icon: 'plumbing' },
  { id: 'appliances', name: 'AC & Appliances', icon: 'hvac' },
  { id: 'painting', name: 'Painting & Wall Care', icon: 'format_paint' },
];

export const SERVICES = [
  {
    id: 'srv-1',
    name: 'Deep Home Cleaning',
    category: 'cleaning',
    bestseller: true,
    rating: 4.9,
    reviewsCount: '3.4k',
    duration: '4 hrs',
    prosCount: '2 Pros dispatched',
    price: 2499,
    originalPrice: 3299,
    description: 'Comprehensive top-to-bottom sanitization and stain removal for living spaces, bedrooms, kitchen & bathrooms.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBh3OXWuOuJJVI53Uo5Dm9BmHIoqujMgoifkGBz2HCee5yFyXg_Utnr5pAors2cyHZ3g7YzX4oPwfWg5an2XSEl3Lgk9W2ZanF2f2y4dKL7t2vD-cenQ_zNJf0srru8HgP_U0ZOSJZd_v9F9BNQRv4i7cdFD1APoHYpM5ZreesQj712teScutX9w7hkw0FijT8HKkqYegIqm_5cF5In-_5TnOdGoMuRjSZUu_WvqV7X',
    tags: ['Kitchen Deep Degreasing', 'Bathroom Scale Removal', 'Balcony Jet Wash'],
    packages: [
      { id: 'pkg-1', name: '1 BHK Deep Clean', price: 1499, duration: '2.5 hrs', desc: 'Living, 1 Bed, 1 Bath, Kitchen' },
      { id: 'pkg-2', name: '2 BHK Deep Clean', price: 1999, duration: '3.5 hrs', desc: 'Living, 2 Beds, 2 Baths, Kitchen, Balcony' },
      { id: 'pkg-3', name: '3 BHK Deep Clean', price: 2499, duration: '4 hrs', desc: 'Kitchen, 3 Baths, Balconies & Floor buffing', popular: true },
      { id: 'pkg-4', name: '4 BHK / Villa Deep Clean', price: 3499, duration: '6 hrs', desc: 'Complete estate sanitization with machine pressure wash' },
    ],
    features: [
      'Hospital-grade eco solutions safe for kids & pets',
      'Industrial single-disc floor scrubbers and HEPA vacuums',
      'Fixzo 30-Day Happiness Guarantee (free rework if unsatisfied)'
    ],
    assignedPro: 'priya-sundaram'
  },
  {
    id: 'srv-2',
    name: 'Bathroom Intense Scrub & Disinfection',
    category: 'cleaning',
    bestseller: false,
    rating: 4.8,
    reviewsCount: '2.1k',
    duration: '60 mins',
    prosCount: '1 Pro dispatched',
    price: 499,
    originalPrice: 699,
    description: 'Targeted tile descaling, grout whitening, faucet chrome buffing and high-pressure toilet sanitization.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfgCHf-k7FUXGvqphD_EecFLudS-IMj9MHm4s3Tq5ZUJ_pYLd25OhB4zn9dTBfm41zu_m2aJNmz1l9qaB4VgyUb33m_9eWeqtmPzzg-uscbPNc6ppDpYczLmmLoQon5I5lLvT52IUH5lnpvxxcyC9x4BmKMvN2wBw8Bl3CVO_UmKZSz4JS1tRiz56gcnxzn5ueYkKADtkfGJtTwTZbKuK9Mx7nRA8MiS0H6771e9Zs',
    tags: ['Hard Water Stain Removal', 'Chrome Buffing', 'Anti-fungal Fogging'],
    packages: [
      { id: 'pkg-b1', name: '1 Bathroom Scrub', price: 499, duration: '60 mins', desc: 'Full tile, fixture & exhaust disinfection' },
      { id: 'pkg-b2', name: '2 Bathrooms Combo', price: 899, duration: '100 mins', desc: 'Save ₹100 on multi-bath package', popular: true },
      { id: 'pkg-b3', name: '3 Bathrooms Master Clean', price: 1299, duration: '150 mins', desc: 'Complete home bathroom renewal' },
    ],
    features: ['Acid-free biological descalers', 'High pressure steam sanitization', 'Mirror & glass anti-fog coat'],
    assignedPro: 'priya-sundaram'
  },
  {
    id: 'srv-3',
    name: 'Kitchen Chimney & Hob Degreasing',
    category: 'cleaning',
    bestseller: true,
    rating: 4.9,
    reviewsCount: '1.8k',
    duration: '90 mins',
    prosCount: '1 Pro dispatched',
    price: 899,
    originalPrice: 1199,
    description: 'Thorough dismantling of baffle filters, motor rotor degreasing, and stainless steel cooktop restoring.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    tags: ['Baffle Filter Scrub', 'Motor Degrease', 'Oil Duct Flushing'],
    packages: [
      { id: 'pkg-c1', name: 'Filter Cleaning Only', price: 499, duration: '45 mins', desc: 'Dual baffle/mesh filter ultrasonic wash' },
      { id: 'pkg-c2', name: 'Complete Chimney Deep Service', price: 899, duration: '90 mins', desc: 'Motor casing, rotor, duct & external hood', popular: true },
      { id: 'pkg-c3', name: 'Chimney + 4-Burner Hob Combo', price: 1299, duration: '120 mins', desc: 'Full kitchen cooking station overhaul' },
    ],
    features: ['Organic food-safe citrus degreaser', 'Steam jet residue lift', 'Burner nozzle clearing'],
    assignedPro: 'priya-sundaram'
  },
  {
    id: 'srv-4',
    name: 'Sofa & Fabric Upholstery Deep Shampoo',
    category: 'cleaning',
    bestseller: false,
    rating: 4.8,
    reviewsCount: '980',
    duration: '2 hrs',
    prosCount: '1 Pro dispatched',
    price: 1199,
    originalPrice: 1599,
    description: 'Dry vacuuming, foam injection extraction, allergen eradication, and fast-dry thermal blow treat.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    tags: ['Injection Extraction', 'Dust Mite Kill', 'Fabric Safe Conditioning'],
    packages: [
      { id: 'pkg-s1', name: '3-Seater Sofa Wash', price: 1199, duration: '90 mins', desc: 'Deep extraction shampoo for 3 seats' },
      { id: 'pkg-s2', name: '5-Seater (3+1+1) Complete', price: 1799, duration: '2.5 hrs', desc: 'Complete living room sectional wash', popular: true },
      { id: 'pkg-s3', name: 'L-Shaped 6-Seater + Cushions', price: 2199, duration: '3 hrs', desc: 'Corner suite with cushion conditioning' },
    ],
    features: ['Low-moisture rapid dry formula', 'Pet odour neutralizer included', 'Zero color fading guaranteed'],
    assignedPro: 'priya-sundaram'
  },
  {
    id: 'srv-5',
    name: 'Electrical Inspection & Short-Circuit Fix',
    category: 'electrical',
    bestseller: true,
    rating: 4.95,
    reviewsCount: '4.2k',
    duration: '45 mins',
    prosCount: '1 Certified Electrician',
    price: 249,
    originalPrice: 399,
    description: 'Diagnose MCB tripping, neutral fault, switchboard spark, or wiring surge with calibrated multimeters.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    tags: ['MCB Diagnostic', 'Earthing Test', 'Fire Hazard Check'],
    packages: [
      { id: 'pkg-e1', name: 'Emergency Diagnostic (Up to 30 mins)', price: 249, duration: '30 mins', desc: 'Quick fault identification & basic repair' },
      { id: 'pkg-e2', name: 'Complete Switchboard Replacement', price: 449, duration: '60 mins', desc: 'Replacement of up to 6 switches + socket', popular: true },
      { id: 'pkg-e3', name: 'Whole House Circuit Safety Audit', price: 899, duration: '120 mins', desc: 'Load balancing, MCB trip calibration & earthing check' },
    ],
    features: ['Licensed Wireman Certified Pro', 'Insulated German VDE tools', 'Free 60-day repair warranty'],
    assignedPro: 'manjunath-swamy'
  },
  {
    id: 'srv-6',
    name: 'Ceiling Fan Installation & Repair',
    category: 'electrical',
    bestseller: false,
    rating: 4.8,
    reviewsCount: '1.5k',
    duration: '35 mins',
    prosCount: '1 Certified Electrician',
    price: 199,
    originalPrice: 299,
    description: 'Precision mounting, downrod balancing, capacitor replacement, or BLDC regulator configuration.',
    image: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&w=800&q=80',
    tags: ['BLDC Setup', 'Wobble Balance', 'Regulator Fitting'],
    packages: [
      { id: 'pkg-f1', name: 'Fan Repair / Capacitor Change', price: 199, duration: '30 mins', desc: 'Fix slow speed, humming noise, or bearing stutter' },
      { id: 'pkg-f2', name: 'New Fan Unbox & Ceiling Mount', price: 299, duration: '45 mins', desc: 'Ceiling hook anchoring & wire dressing', popular: true },
    ],
    features: ['Vibration-free laser alignment', 'Safety hook reinforcement', 'Spike-safe connection'],
    assignedPro: 'manjunath-swamy'
  },
  {
    id: 'srv-7',
    name: 'Tap Leakage & Plumbing Inspection',
    category: 'plumbing',
    bestseller: true,
    rating: 4.9,
    reviewsCount: '2.8k',
    duration: '40 mins',
    prosCount: '1 Licensed Plumber',
    price: 199,
    originalPrice: 349,
    description: 'Repair dripping faucets, internal cartridge wear, angle valves, kitchen sink siphon, or pipe joint leaks.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    tags: ['Ceramic Spindle Swap', 'Washer Sealing', 'Water Pressure Check'],
    packages: [
      { id: 'pkg-p1', name: 'Single Tap Repair / Spindle Change', price: 199, duration: '30 mins', desc: 'Cartridge or washer fix for 1 faucet' },
      { id: 'pkg-p2', name: 'Sink Waste Pipe & Trap Overhaul', price: 349, duration: '50 mins', desc: 'Fix kitchen under-sink drip & odor', popular: true },
      { id: 'pkg-p3', name: 'Bathroom Plumbing Refresh (Up to 3 taps)', price: 499, duration: '75 mins', desc: 'Full bathroom fixture overhaul' },
    ],
    features: ['Teflon sealing and brass fittings standard', 'Clean work area with zero puddle left', '30-Day leakage guarantee'],
    assignedPro: 'rajesh-nair'
  },
  {
    id: 'srv-8',
    name: 'AC Deep Jet Foam Service (Split / Window)',
    category: 'appliances',
    bestseller: true,
    rating: 4.92,
    reviewsCount: '3.9k',
    duration: '75 mins',
    prosCount: '1 HVAC Specialist',
    price: 599,
    originalPrice: 899,
    description: 'High-pressure water jacket coil wash, antifungal foam spray, drain tray clearing, and gas pressure check.',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80',
    tags: ['Water Jacket Coil Wash', 'Jet Pump Pressure', 'Ampere & Gas Audit'],
    packages: [
      { id: 'pkg-ac1', name: '1 AC Deep Jet Wash', price: 599, duration: '75 mins', desc: 'Indoor coil, outdoor condenser, filter wash' },
      { id: 'pkg-ac2', name: '2 ACs Jet Combo', price: 1099, duration: '130 mins', desc: 'Save ₹100 on multi-unit servicing', popular: true },
      { id: 'pkg-ac3', name: 'AC Comprehensive Service + Gas Top-up', price: 1899, duration: '120 mins', desc: 'Includes leak test & up to 15 PSI gas top' },
    ],
    features: ['High-tech waterproof jacket shields your wall', 'Reduces power bill by up to 20%', '30-Day cooling warranty'],
    assignedPro: 'rajesh-nair'
  },
  {
    id: 'srv-9',
    name: 'Wall Water Seepage & Touchup Painting',
    category: 'painting',
    bestseller: false,
    rating: 4.85,
    reviewsCount: '870',
    duration: '3 hrs',
    prosCount: '2 Master Painters',
    price: 1499,
    originalPrice: 1999,
    description: 'Dampness diagnosis, waterproof putty scraping, primer application, and exact color match topcoat.',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80',
    tags: ['Waterproofing Primer', 'Color Matching', 'Furniture Masking'],
    packages: [
      { id: 'pkg-pt1', name: 'Spot Wall Touchup (Up to 50 sq ft)', price: 1499, duration: '2.5 hrs', desc: 'Fix water stains or peelings on 1 accent wall' },
      { id: 'pkg-pt2', name: '1 Room Fresh Coating', price: 3499, duration: '1 day', desc: 'Two coats of premium emulsion + ceiling', popular: true },
    ],
    features: ['Zero paint odor low-VOC Asian Paints', 'Floor and furniture complete plastic wrapping', 'Mechanized sanders for smooth finish'],
    assignedPro: 'manjunath-swamy'
  }
];

export const PROS = {
  'priya-sundaram': {
    id: 'priya-sundaram',
    name: 'Priya Sundaram',
    role: 'Eco Deep Cleaning Specialist',
    rating: 4.8,
    cleansCount: '520+ verified cleans',
    distance: '2.4 km',
    experience: '4+ Yrs',
    onTimeRate: '100%',
    hourlyRate: 299,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYYRPOqA_JbROnXJlstDnBxywXLIDItG8XWDhYIbdefRvTlM-wl7a09LUfvNDSzoz2tQ7rPuiKmeBrTR7wGxfPLILFP7-BGzwQFSRDzu0KZfj26kCthrHxFIam7-j3WOBFqzjB9P5q_ifMAo5JqiMDRDiyD0c18NVMVx92wTBtVmsMxyNmaBfuf6vzOF7TR8iCM7YjTJNL8ATz6mRg8mf4nNhjUvk9f3s0dkdCmNIK',
    checkoutAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCq_080G4RIQ7K_bfB9iW7geas9pmikGOLNc99YdRbUKkVWDladC3OMEdujZzmqEuZkWJEdOSXMsMhWeRaRjZ99BNCrrRcOB5Ck5-cNYcwmrCjwkk8QS59K1rrQBvGq2tfqG-ov4_FiRyKHzglPGXiopb-AWxGj1pRTsVWcc6GWx3sbAF_IyVTb0TzpHTtJi1tD5GSIZCRP9sKBUVlv7Y2TQPjdRUkYWpvQQBVcWzYU',
    badges: ['Aadhaar Verified', 'Skill Certified Pro', 'Bio-Safe Chemicals'],
    equipment: 'Pro brings industrial vacuum, HEPA steamers & non-toxic supplies',
    testimonial: {
      text: 'Punctual, thorough, and brought all specialized eco-friendly supplies. Did not need any supervision. Highly recommended.',
      author: 'Ananya R.',
      locality: 'Koramangala'
    }
  },
  'manjunath-swamy': {
    id: 'manjunath-swamy',
    name: 'Manjunath Swamy',
    role: 'Master Licensed Electrician',
    rating: 4.96,
    cleansCount: '420+ verified jobs',
    distance: '1.8 km',
    experience: '8+ Yrs',
    onTimeRate: '99%',
    hourlyRate: 349,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQOFViuzh_xCushGBeHh-E_UEPoP_Snzo92mEZ1vBbsGW8zyoWPcqvFkoI-gjz1nOKojUaeDdKF_SuHJyZZ4q9hib_PFJz9rMUbrulc9nOan4teFdspf4_HqO-z3LlvGkMOY8rXq7X9zl7ihJtljaE1uRhGedpsYURq6_mGHKqbucbn7Kn9PgFN8Z8x8d4UPmSgCym0VAP-zQRadW_o4WFhMqtSV2hxAw2peDo3A7M',
    checkoutAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQOFViuzh_xCushGBeHh-E_UEPoP_Snzo92mEZ1vBbsGW8zyoWPcqvFkoI-gjz1nOKojUaeDdKF_SuHJyZZ4q9hib_PFJz9rMUbrulc9nOan4teFdspf4_HqO-z3LlvGkMOY8rXq7X9zl7ihJtljaE1uRhGedpsYURq6_mGHKqbucbn7Kn9PgFN8Z8x8d4UPmSgCym0VAP-zQRadW_o4WFhMqtSV2hxAw2peDo3A7M',
    badges: ['Govt Wireman License', 'Aadhaar Verified', 'Safety Kit Equipped'],
    equipment: 'Pro brings digital multimeters, insulation tester & laser level',
    testimonial: {
      text: 'Detected the earthing fault in 10 minutes that another agency couldn’t find in hours. Clean work and very polite.',
      author: 'Karthik S.',
      locality: 'Indiranagar'
    }
  },
  'rajesh-nair': {
    id: 'rajesh-nair',
    name: 'Rajesh Nair',
    role: 'Senior HVAC & Plumbing Engineer',
    rating: 4.88,
    cleansCount: '380+ verified jobs',
    distance: '3.1 km',
    experience: '6+ Yrs',
    onTimeRate: '98%',
    hourlyRate: 320,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    checkoutAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    badges: ['HVAC Certified', 'Aadhaar Verified', 'Pressure Tested'],
    equipment: 'Brings high-pressure jet pump, waterproof jacket bag & manifold gauge',
    testimonial: {
      text: 'AC jet service was done with total care. No water splashed on our painted wall, and cooling is super crisp now.',
      author: 'Divya M.',
      locality: 'HSR Layout'
    }
  }
};

export const SAMPLE_BOOKINGS = [
  {
    id: 'FXZ-84920',
    serviceName: 'Deep Home Cleaning (3 BHK)',
    serviceCategory: 'Cleaning',
    proName: 'Priya Sundaram',
    proAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCq_080G4RIQ7K_bfB9iW7geas9pmikGOLNc99YdRbUKkVWDladC3OMEdujZzmqEuZkWJEdOSXMsMhWeRaRjZ99BNCrrRcOB5Ck5-cNYcwmrCjwkk8QS59K1rrQBvGq2tfqG-ov4_FiRyKHzglPGXiopb-AWxGj1pRTsVWcc6GWx3sbAF_IyVTb0TzpHTtJi1tD5GSIZCRP9sKBUVlv7Y2TQPjdRUkYWpvQQBVcWzYU',
    status: 'en_route', // 'confirmed', 'en_route', 'arrived', 'completed'
    statusLabel: 'Technician En Route',
    eta: '22 mins',
    slotTime: 'Today, 11:30 AM',
    address: 'Flat 402, Green Glen Layout, 100ft Rd, Indiranagar, Kolkata',
    amount: 2499,
    advancePaid: 1048,
    balanceDue: 1572,
    otp: '4920'
  },
  {
    id: 'FXZ-79311',
    serviceName: 'AC Deep Jet Foam Service',
    serviceCategory: 'Appliances',
    proName: 'Rajesh Nair',
    proAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    status: 'completed',
    statusLabel: 'Completed',
    eta: null,
    slotTime: '18 Nov 2026, 2:00 PM',
    address: 'Flat 402, Green Glen Layout, 100ft Rd, Indiranagar, Kolkata',
    amount: 599,
    advancePaid: 240,
    balanceDue: 0,
    otp: null
  }
];

export const AVAILABLE_COUPONS = [
  { code: 'FIRSTFIX', discount: 150, minAmount: 499, label: '₹150 off on your first home service' },
  { code: 'FESTIVE300', discount: 300, minAmount: 1499, label: '₹300 off on orders above ₹1,499' },
  { code: 'PRIME10', discountPercent: 10, maxDiscount: 250, label: '10% instant prime cash savings' },
];
