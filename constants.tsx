
import React from 'react';
import { ServiceDetail } from './types';

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
  { title: "Drain Cleaning", price: "$68", description: "Professional main line and secondary drain clearing." },
  { title: "Toilet Replacement", price: "$259", description: "Complete removal and premium installation." },
  { title: "Water Heater Flush", price: "$98", description: "Sediment removal for peak performance." },
  { title: "Tankless Descaling", price: "$149", description: "Specialized service for high-efficiency units." },
  { title: "Water Heater Replacement", price: "$749", description: "Standard tank installation with warranty." },
  { title: "Tankless Water Heater Replacement", price: "$1,899", description: "Elite high-efficiency system upgrade." },
  { title: "Camera Inspection", price: "$199", description: "High-definition diagnostic view of your lines." },
  { title: "PRV Replacement", price: "$499", description: "Pressure reducing valve for home safety." }
];

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "UNDERGROUNDS": {
    title: "UNDERGROUNDS",
    description: "Learn more",
    longDescription: "Foundation-level plumbing pipes for new construction. Our team specializes in precision grading and heavy-duty infrastructure installation to ensure long-term stability for San Antonio builds.",
    benefits: ["Precision Excavation", "Industrial Grade Materials", "Rigid Code Compliance"],
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200",
    category: "Builder"
  },
  "ROUGH-IN PLUMBING": {
    title: "ROUGH-IN PLUMBING",
    description: "View process",
    longDescription: "Completing rough-in plumbing work before concrete pours. We ensure every vent, stack, and supply line is perfectly positioned according to architectural plans.",
    benefits: ["Plan Accuracy", "Timed Inspection Ready", "Leak-Free Testing"],
    imageUrl: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=1200",
    category: "Builder"
  },
  "CAMERA INSPECTION": {
    title: "CAMERA INSPECTION",
    description: "See how it works",
    longDescription: "High-definition camera inspection of underground drain lines. We identify blockages, pipe collapses, and root intrusions with surgical precision using fiber-optic technology.",
    benefits: ["Zero Guesswork", "Visual Proof", "Cost-Effective Diagnostics"],
    imageUrl: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80&w=1200",
    category: "Residential"
  },
  "TOP OUT PLUMBING": {
    title: "TOP OUT PLUMBING",
    description: "Explore stage two",
    longDescription: "Licensed technicians completing the top-out stage. This involves running the vertical stacks and venting systems before walls are closed.",
    benefits: ["Vertical Precision", "Proper Venting", "System Pressure Integrity"],
    imageUrl: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=1200",
    category: "Builder"
  },
  "GAS LINE INSTALLATION": {
    title: "GAS LINE INSTALLATION",
    description: "Learn more",
    longDescription: "Safe and licensed installation of gas lines for new homes. We handle everything from meter manifold setup to appliance connections.",
    benefits: ["Master Licensed Safety", "Tight Seal Verification", "Permit Management"],
    imageUrl: "https://images.unsplash.com/photo-1621905252507-b354bcadcabc?auto=format&fit=crop&q=80&w=1200",
    category: "Commercial"
  },
  "WATER HEATER INSTALLATION": {
    title: "WATER HEATER INSTALLATION",
    description: "Compare options",
    longDescription: "Professional installation of residential water heater systems, including tankless upgrades and standard tank replacements.",
    benefits: ["Peak Efficiency", "Thermal Protection", "Full Warranty Coverage"],
    imageUrl: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=1200",
    category: "Residential"
  },
  "FIXTURE INSTALLATION": {
    title: "FIXTURE INSTALLATION",
    description: "See our process",
    longDescription: "Final stage installation of kitchen and bathroom plumbing fixtures. We provide White Glove service to ensure a flawless aesthetic and functional finish.",
    benefits: ["Premium Aesthetic", "Correct Sealing", "Appliance Calibration"],
    imageUrl: "https://images.unsplash.com/photo-1595814433015-e6f5cd696144?auto=format&fit=crop&q=80&w=1200",
    category: "Residential"
  },
  "WARRANTY": {
    title: "WARRANTY",
    description: "View coverage",
    longDescription: "Our commitment to excellence extends long after the service. We provide comprehensive warranty support for all residential and commercial projects.",
    benefits: ["Rapid Response", "Guaranteed Workmanship", "Peace of Mind"],
    imageUrl: "https://images.unsplash.com/photo-1620627812624-9b8849646b10?auto=format&fit=crop&q=80&w=1200",
    category: "Residential"
  }
};

export const ALL_SERVICES = Object.keys(SERVICE_DETAILS);

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
  underground: {
    title: "Underground Plumbing",
    content: "Foundation-level expertise for residential and commercial builds. We specialize in precision grading and heavy-duty infrastructure."
  },
  roughIn: {
    title: "Rough-In Plumbing",
    content: "Exact placement of vents, stacks, and supply lines behind the walls, following strict architectural standards."
  }
};
