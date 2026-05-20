import { GymStat, GymService, WhyFeature, Testimonial, GalleryItem, PricingPlan } from "./types";

// Resolve our custom-generated images safely using Vite URL constructors
const heroBgImage = "https://lh3.googleusercontent.com/p/AF1QipPo_DJJVQ_6bHOj9L-wLKE_msIHcPVyAi3Gnm4s=w1600";
const generatedHeroBgImage = new URL("./assets/images/gym_hero_bg_1779290916023.png", import.meta.url).href;
const trainerHelpImage = new URL("./assets/images/gym_trainer_help_1779290933155.png", import.meta.url).href;
const workoutAreaImage = new URL("./assets/images/gym_workout_area_1779290955587.png", import.meta.url).href;

export const IMAGES = {
  heroBg: heroBgImage,
  generatedHeroBg: generatedHeroBgImage,
  trainerHelp: trainerHelpImage,
  workoutArea: workoutAreaImage,
  // High-quality additional visuals using trusted, fast-loading fitness CDNs
  cleanGymInterior: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
  cardioZone: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop",
  weightPlate: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
  athleteTraining: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
  groupSession: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800&auto=format&fit=crop",
  machineClose: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop"
};

export const GYM_STATS: GymStat[] = [
  { id: "stat-members", value: 363, suffix: "+", label: "Happy Members" },
  { id: "stat-rating", value: 4.8, suffix: " ★", label: "363 Google Reviews" },
  { id: "stat-equip", value: 50, suffix: "+", label: "Modern Machines" },
  { id: "stat-trainers", value: 8, suffix: "+", label: "Certified Trainers" }
];

export const GYM_SERVICES: GymService[] = [
  {
    id: "srv-wt",
    title: "Weight Training",
    description: "Build a strong foundation using our wide array of dumbbells, premium barbells, and plate-loaded heavy machinery.",
    benefits: ["Isolate muscle groups", "Progressive overload machines", "Injury preventing ergonomics"],
    iconName: "Dumbbell"
  },
  {
    id: "srv-cardio",
    title: "Cardio Training",
    description: "Enhance critical cardiovascular health and torch calories with advanced interactive speed-treadmills, spin-bikes, and rowers.",
    benefits: ["Maximize daily fat burning", "Boost lung capacity", "Live heart-rate indicators"],
    iconName: "Flame"
  },
  {
    id: "srv-fl",
    title: "Fat Loss Programs",
    description: "Highly structured, result-oriented workout regimes focused on safely accelerating metabolic activity and healthy fat reduction.",
    benefits: ["Custom-tailored HIIT modules", "High calorie-burn drills", "Biometric tracking"],
    iconName: "TrendingDown"
  },
  {
    id: "srv-mb",
    title: "Muscle Building",
    description: "Hypertrophy-guided routines designed specifically to increase lean skeletal muscle mass with clean mechanics under expert guidance.",
    benefits: ["Optimized volume structures", "Precision hypertrophy cues", "Strength progression charts"],
    iconName: "FlameKindling"
  },
  {
    id: "srv-pt",
    title: "Personal Training",
    description: "One-on-one professional attention ensuring immaculate physical posture, customized accountability, and accelerated result pathways.",
    benefits: ["100% individual tailoring", "Dynamic exercise pacing", "In-depth body re-composition checks"],
    iconName: "Award"
  },
  {
    id: "srv-sc",
    title: "Strength & Conditioning",
    description: "Perform dynamically. Athlete-centric plans focused on power delivery, athletic speed, joints flexibility, and heavy core endurance.",
    benefits: ["Explosive speed training", "Joint stabilizer building", "High-intensity functional conditioning"],
    iconName: "Zap"
  },
  {
    id: "srv-grp",
    title: "Group Classes",
    description: "High-octane group fitness routines pairing camaraderie with intense functional training setups for massive shared motivation.",
    benefits: ["Unmatched peer encouragement", "Diverse exercise variations", "Professional dynamic pacing"],
    iconName: "Users"
  },
  {
    id: "srv-gd",
    title: "Fitness Guidance",
    description: "Personalized fitness orientations for absolute gym beginners, making certain you feel welcome and move with perfect posture.",
    benefits: ["Introductory machine guides", "Interactive goal mapping", "Confidence-building workouts"],
    iconName: "Compass"
  },
  {
    id: "srv-diet",
    title: "Diet & Nutrition Support",
    description: "Sustainable healthy eating structures paired dynamically with your unique gym regime to fuel repair and maximize physical tone.",
    benefits: ["Macro-nutrient calculations", "Clean local food pairings", "Supplement protocols guide"],
    iconName: "Apple"
  }
];

export const WHY_CHOOSE_US: WhyFeature[] = [
  {
    id: "why-1",
    title: "Modern Premium Machines",
    description: "Access state-of-the-art chest press, customized cable rails, Olympic platforms, and high-performance cardiovascular rows.",
    iconName: "Cpu"
  },
  {
    id: "why-2",
    title: "Clean & Spacious Environment",
    description: "Our dedicated housekeeping team maintains highly hygienic, dust-free workout zones and disinfected bench surfaces round-the-clock.",
    iconName: "ShieldCheck"
  },
  {
    id: "why-3",
    title: "Supportive Expert Trainers",
    description: "Friendly trainers who actively guide your posture, motivate you through tough sets, and keep your regime highly injury-free.",
    iconName: "Hearthandshake"
  },
  {
    id: "why-4",
    title: "100% Beginner Friendly",
    description: "Zero intimidation. Friendly instructions, gentle foundational plans, and supportive members welcoming you warmly.",
    iconName: "Sparkles"
  },
  {
    id: "why-5",
    title: "Highly Motivating Atmosphere",
    description: "Powerful acoustics, crisp modern energetic soundscapes, strategic neon lighting accents, and high-intensity community energy.",
    iconName: "VolumeX" // Or something upbeat
  },
  {
    id: "why-6",
    title: "Affordable Memberships",
    description: "True elite-tier training and premium equipment experiences structured into affordable local membership packages in Latur.",
    iconName: "CreditCard"
  },
  {
    id: "why-7",
    title: "Flexible Workout Timings",
    description: "Accommodating busy corporate employees, college students, and active professionals. We remain open daily up to 11:00 PM.",
    iconName: "Clock"
  },
  {
    id: "why-8",
    title: "Separate Workout Zones",
    description: "Dedicated spaces including dedicated free weights blocks, spacious cardio decks, stretching arenas, and private locker setups.",
    iconName: "Grid"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "review-1",
    name: "Shubham Mashimode",
    role: "Latur Local Guide",
    text: "Great gym with clean equipment and a motivating atmosphere. Highly recommended for beginners!",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
    date: "2 months ago"
  },
  {
    id: "review-2",
    name: "Ajinkya Deshmukh",
    role: "Calisthenics Athlete",
    text: "Clean space, good vibe, and perfect for staying consistent with workouts. The equipment selection is phenomenal for strength builds.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80",
    date: "1 month ago"
  },
  {
    id: "review-3",
    name: "Pratiksha K.",
    role: "IT Professional",
    text: "Good environment and supportive staff. Clean washrooms, great security, and flexible timings are perfect for my work routines.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    date: "3 weeks ago"
  },
  {
    id: "review-4",
    name: "Rohan Patil",
    role: "Powerlifter",
    text: "Absolutely love this gym! Trainers are supportive and the vibe is super motivating. There's no ego, just pure iron and hard work.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    date: "Recent"
  },
  {
    id: "review-5",
    name: "Sneha Joshi",
    role: "Cardio & Fitness Member",
    text: "Cleanliness is 10/10. The machines are top quality, and the trainers are always available to help correct forms. Outstanding value for Latur.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    date: "1 month ago"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-real-main",
    imageUrl: "https://lh3.googleusercontent.com/p/AF1QipPo_DJJVQ_6bHOj9L-wLKE_msIHcPVyAi3Gnm4s=w1200",
    title: "AB Health and Fitness Gym Facility & Interior Showcase",
    category: "interior"
  },
  {
    id: "gal-1",
    imageUrl: IMAGES.workoutArea, // Generated gym_workout_area
    title: "Premium Free Weights Zone",
    category: "weights"
  },
  {
    id: "gal-2",
    imageUrl: IMAGES.trainerHelp, // Generated gym_trainer_help
    title: "Expert One-on-One Training Sessions",
    category: "interior"
  },
  {
    id: "gal-3",
    imageUrl: IMAGES.cleanGymInterior,
    title: "Modern Strength & Cardio Area",
    category: "interior"
  },
  {
    id: "gal-4",
    imageUrl: IMAGES.cardioZone,
    title: "Dynamic Cardio Training Lineup",
    category: "cardio"
  },
  {
    id: "gal-5",
    imageUrl: IMAGES.groupSession,
    title: "Empowering Group Practice Space",
    category: "group"
  },
  {
    id: "gal-6",
    imageUrl: IMAGES.machineClose,
    title: "Premium Plate Loaded Heavy Machines",
    category: "weights"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "plan-basic",
    name: "Basic Plan",
    price: "₹1,199",
    period: "/mo",
    description: "Perfect for self-motivated individuals looking for critical gym machinery access.",
    features: [
      "Access to Gym Floor (6:00 AM - 10:00 AM & 5:00 PM - 9:00 PM)",
      "Full Cardio Zone Machinery Access",
      "Hygienic Locker & Changing Room Facility",
      "Introductory Machine Walkthrough",
      "Highly Disinfected Safe Workout Spaces"
    ]
  },
  {
    id: "plan-standard",
    name: "Standard Plan",
    price: "₹1,699",
    period: "/mo",
    description: "Highly recommended for beginners and intermediate members wanting expert focus.",
    features: [
      "Full Gym Floor & Cardio Access (Unrestricted Hours)",
      "Experienced General Trainer On-Floor Support",
      "Personalized Diet & Workout Orientation Grid",
      "Dynamic Monthly Progress Tracking Checks",
      "Access to Cardio Rhythm Workouts Guide"
    ],
    isPopular: true
  },
  {
    id: "plan-premium",
    name: "Premium Elite",
    price: "₹3,499",
    period: "/mo",
    description: "Direct results accelerated with exclusive personal training and priority tracking.",
    features: [
      "Dedicated 1-on-1 Personal Trainer Slots (3 Days / Week)",
      "Premium Scientific Macro-Nutrient & Diet Plans",
      "Unlimited Open Access to All Exercise Areas",
      "Tailor-made Body Re-composition Analysis Reports",
      "Dedicated Whatsapp Support from Elite Coaching Team",
      "Full Cardio, Heavy Iron and Locker Facilities"
    ]
  }
];
