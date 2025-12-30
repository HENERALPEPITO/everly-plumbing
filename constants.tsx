
import React from 'react';
import { ServiceDetail, ServiceId } from './types';

export const PHONE_NUMBER = "(210) 905-9520";
export const WHATSAPP_NUMBER = "+1 (210) 981-9755";
export const WHATSAPP_LINK = "https://wa.me/12109819755";
export const MAP_LINK = "https://www.google.com/maps/place/Everly+Plumbing/@29.5295262,-98.3953383,17z/data=!4m16!1m9!3m8!1s0x8c37825c56557895:0x9afa295edbf77ef5!2sEverly+Plumbing!8m2!3d29.5295262!4d-98.3953383!9m1!1b1!16s%2Fg%2F11plf65tsq!3m5!1s0x8c37825c56557895:0x9afa295edbf77ef5!8m2!3d29.5295262!4d-98.3953383!16s%2Fg%2F11plf65tsq?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D";

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/everlyplumbing/",
  tiktok: "https://www.tiktok.com/@everly.plumbing",
  facebook: "https://www.facebook.com/EverlyPlumbingSA/",
  youtube: "https://www.youtube.com/@EverlyPlumbingSA",
};

export const REVIEWS = [
  {
    name: "Francisco Bernal",
    rating: 5,
    text: "Great service! Carolina was super nice and made sure everything was done perfectly. You can tell she really cares about her work. Totally recommend her!",
    date: "1 month ago"
  },
  {
    name: "James Schmeltekopf",
    rating: 5,
    text: "Warranty work on water heater leak. Quick response as to initial call to set appt. Fred and William arrived on time. They quickly assessed repair need and completed in a short period of time. They were both professional and courteous. Enjoyed the experience and my issue has been fully addressed and corrected.",
    date: "3 months ago"
  },
  {
    name: "Thomas Smith",
    rating: 5,
    text: "Fast, friendly and quick to respond from time of call, when needed for an emergency main water leak repair. Very Polite Customer Service on phone and with Techs who showed up to do repair. Answered the call when other SO-CALLED 24 hour emergency plumbing repair companies couldn't or wouldn't early on a Sunday morning.",
    date: "2 months ago"
  }
];

export const PRICING_LIST = [
  {
    id: ServiceId.DRAIN_CLEANING,
    title: "Drain Cleaning",
    price: "$68",
    description: "Professional main line and secondary drain clearing.",
    imageUrl: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: ServiceId.TOILET_REPLACEMENT,
    title: "Toilet Replacement",
    price: "$259",
    description: "Complete removal and premium installation.",
    imageUrl: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: ServiceId.WATER_HEATER_FLUSH,
    title: "Water Heater Flush",
    price: "$98",
    description: "Sediment removal for peak performance.",
    imageUrl: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: ServiceId.TANKLESS_DESCALING,
    title: "Tankless Descaling",
    price: "$149",
    description: "Specialized service for high-efficiency units.",
    imageUrl: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: ServiceId.WATER_HEATER_REPLACEMENT,
    title: "Water Heater Replacement",
    price: "$749",
    description: "Standard tank installation with warranty.",
    imageUrl: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: ServiceId.TANKLESS_WATER_HEATER_REPLACEMENT,
    title: "Tankless Water Heater Replacement",
    price: "$1,899",
    description: "Elite high-efficiency system upgrade.",
    imageUrl: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: ServiceId.CAMERA_INSPECTION,
    title: "Camera Inspection",
    price: "$199",
    description: "High-definition diagnostic view of your lines.",
    imageUrl: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: ServiceId.PRV_REPLACEMENT,
    title: "PRV Replacement",
    price: "$499",
    description: "Pressure reducing valve for home safety.",
    imageUrl: "https://images.unsplash.com/photo-1581092919535-7146c2d33b6b?auto=format&fit=crop&q=80&w=800"
  }
];

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  [ServiceId.DRAIN_CLEANING]: {
    title: "Drain Cleaning",
    description: "Professional main line and secondary drain clearing.",
    longDescription: "Professional drain clearing for kitchens, bathrooms, and main lines. Fast service, no mess, guaranteed flow.",
    benefits: ["Fast Service", "No Mess", "Guaranteed Flow"],
    imageUrl: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=1200",
    category: "Residential"
  },
  [ServiceId.TOILET_REPLACEMENT]: {
    title: "Toilet Replacement",
    description: "Complete removal and premium installation.",
    longDescription: "Complete removal and professional installation of modern toilets. Leak-free, code compliant, clean install.",
    benefits: ["Leak-Free", "Code Compliant", "Clean Install"],
    imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200",
    category: "Residential"
  },
  [ServiceId.WATER_HEATER_FLUSH]: {
    title: "Water Heater Flush",
    description: "Sediment removal for peak performance.",
    longDescription: "Professional water heater flushing to remove sediment buildup. Improves efficiency and extends unit lifespan.",
    benefits: ["Peak Efficiency", "Extended Lifespan", "Lower Energy Bills"],
    imageUrl: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=1200",
    category: "Residential"
  },
  [ServiceId.TANKLESS_DESCALING]: {
    title: "Tankless Descaling",
    description: "Specialized service for high-efficiency units.",
    longDescription: "Specialized descaling service for tankless water heaters. Removes mineral deposits and maintains peak performance.",
    benefits: ["Maintains Efficiency", "Prevents Damage", "Extends Warranty Coverage"],
    imageUrl: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=800",
    category: "Residential"
  },
  [ServiceId.WATER_HEATER_REPLACEMENT]: {
    title: "Water Heater Replacement",
    description: "Standard tank installation with warranty.",
    longDescription: "Professional installation of residential water heater systems. Standard tank replacements with full warranty coverage.",
    benefits: ["Peak Efficiency", "Thermal Protection", "Full Warranty Coverage"],
    imageUrl: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=800",
    category: "Residential"
  },
  [ServiceId.TANKLESS_WATER_HEATER_REPLACEMENT]: {
    title: "Tankless Water Heater Replacement",
    description: "Elite high-efficiency system upgrade.",
    longDescription: "Elite tankless water heater installation for maximum efficiency. Perfect for modern homes seeking endless hot water.",
    benefits: ["Endless Hot Water", "High Efficiency", "Space Saving"],
    imageUrl: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&q=80&w=1200",
    category: "Residential"
  },
  [ServiceId.CAMERA_INSPECTION]: {
    title: "Camera Inspection",
    description: "High-definition diagnostic view of your lines.",
    longDescription: "High-definition camera inspection of underground drain lines. Identify blockages, pipe collapses, and root intrusions with precision.",
    benefits: ["Zero Guesswork", "Visual Proof", "Cost-Effective Diagnostics"],
    imageUrl: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80&w=1200",
    category: "Residential"
  },
  [ServiceId.PRV_REPLACEMENT]: {
    title: "PRV Replacement",
    description: "Pressure reducing valve for home safety.",
    longDescription: "Professional pressure reducing valve replacement for home safety. Protects your plumbing from excessive water pressure.",
    benefits: ["System Protection", "Leak Prevention", "Code Compliant"],
    imageUrl: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=800",
    category: "Residential"
  },
  // "UNDERGROUNDS": {
  //   title: "UNDERGROUNDS",
  //   description: "Learn more",
  //   longDescription: "Foundation-level plumbing pipes for new construction. Our team specializes in precision grading and heavy-duty infrastructure installation to ensure long-term stability for San Antonio builds.",
  //   benefits: ["Precision Excavation", "Industrial Grade Materials", "Rigid Code Compliance"],
  //   imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200",
  //   category: "Builder"
  // },
  // "ROUGH-IN PLUMBING": {
  //   title: "ROUGH-IN PLUMBING",
  //   description: "View process",
  //   longDescription: "Completing rough-in plumbing work before concrete pours. We ensure every vent, stack, and supply line is perfectly positioned according to architectural plans.",
  //   benefits: ["Plan Accuracy", "Timed Inspection Ready", "Leak-Free Testing"],
  //   imageUrl: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=1200",
  //   category: "Builder"
  // },
  // "CAMERA INSPECTION NEW": {
  //   title: "CAMERA INSPECTION",
  //   description: "See how it works",
  //   longDescription: "High-definition camera inspection of underground drain lines. We identify blockages, pipe collapses, and root intrusions with surgical precision using fiber-optic technology.",
  //   benefits: ["Zero Guesswork", "Visual Proof", "Cost-Effective Diagnostics"],
  //   imageUrl: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80&w=1200",
  //   category: "Residential"
  // },
  // "TOP OUT PLUMBING": {
  //   title: "TOP OUT PLUMBING",
  //   description: "Explore stage two",
  //   longDescription: "Licensed technicians completing the top-out stage. This involves running the vertical stacks and venting systems before walls are closed.",
  //   benefits: ["Vertical Precision", "Proper Venting", "System Pressure Integrity"],
  //   imageUrl: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=1200",
  //   category: "Builder"
  // },
  // "GAS LINE INSTALLATION": {
  //   title: "GAS LINE INSTALLATION",
  //   description: "Learn more",
  //   longDescription: "Safe and licensed installation of gas lines for new homes. We handle everything from meter manifold setup to appliance connections.",
  //   benefits: ["Master Licensed Safety", "Tight Seal Verification", "Permit Management"],
  //   imageUrl: "https://images.unsplash.com/photo-1621905252507-b354bcadcabc?auto=format&fit=crop&q=80&w=1200",
  //   category: "Commercial"
  // },
  // "WATER HEATER INSTALLATION": {
  //   title: "WATER HEATER INSTALLATION",
  //   description: "Compare options",
  //   longDescription: "Professional installation of residential water heater systems, including tankless upgrades and standard tank replacements.",
  //   benefits: ["Peak Efficiency", "Thermal Protection", "Full Warranty Coverage"],
  //   imageUrl: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=1200",
  //   category: "Residential"
  // },
  // "FIXTURE INSTALLATION": {
  //   title: "FIXTURE INSTALLATION",
  //   description: "See our process",
  //   longDescription: "Final stage installation of kitchen and bathroom plumbing fixtures. We provide White Glove service to ensure a flawless aesthetic and functional finish.",
  //   benefits: ["Premium Aesthetic", "Correct Sealing", "Appliance Calibration"],
  //   imageUrl: "https://images.unsplash.com/photo-1595814433015-e6f5cd696144?auto=format&fit=crop&q=80&w=1200",
  //   category: "Residential"
  // },
  // "WARRANTY": {
  //   title: "WARRANTY",
  //   description: "View coverage",
  //   longDescription: "Our commitment to excellence extends long after the service. We provide comprehensive warranty support for all residential and commercial projects.",
  //   benefits: ["Rapid Response", "Guaranteed Workmanship", "Peace of Mind"],
  //   imageUrl: "https://images.unsplash.com/photo-1620627812624-9b8849646b10?auto=format&fit=crop&q=80&w=1200",
  //   category: "Residential"
  // }
};

export const ALL_SERVICES = Object.keys(SERVICE_DETAILS);

// Validation: Check for missing SERVICE_DETAILS entries
export const validateServiceConsistency = () => {
  PRICING_LIST.forEach((item) => {
    if (!SERVICE_DETAILS[item.id]) {
      console.warn(
        `⚠️ Missing SERVICE_DETAILS entry for service ID: "${item.id}" (${item.title}). ` +
        `Image rendering may fail. Please add this service to SERVICE_DETAILS.`
      );
    }
  });
};

// Run validation on load
if (typeof window !== 'undefined') {
  validateServiceConsistency();
}

export const ORG_CHART_DATA = {
  role: "Owners",
  name: "Berny Leal & Will Sherman",
  subordinates: [
    {
      role: "Operations",
      name: "Eunice (Office Manager)",
      subordinates: [
        { role: "Finance", name: "Esmeralda (Accounting Manager)" },
        { role: "Logistics", name: "David (Warehouse Associate)" }
      ]
    },
    {
      role: "Client Care",
      name: "Kimberly (Service & Warranty)",
      subordinates: [
        { role: "Marketing", name: "Carolina (Event Coordinator)" }
      ]
    }
  ]
};

export const CONSTRUCTION_SERVICES = {
  dependable: {
    title: "Dependable",
    content: "When deadlines matter, you need a plumbing partner who shows up, follows through, and communicates clearly. We keep your projects moving without delays, giving you peace of mind on the job site.",
    icon: "Clock"
  },
  affordable: {
    title: "Affordable",
    content: "We offer competitive pricing without cutting corners. That means more room in your budget for other trades—while still delivering top-tier plumbing quality workmanship.",
    icon: "DollarSign"
  },
  knowledgeable: {
    title: "Knowledgeable",
    content: "Our experience with new construction plumbing ensures installations are done right the first time. We stay current with codes, standards, and efficient solutions, reducing rework and warranty claims.",
    icon: "BookOpen"
  }
};


