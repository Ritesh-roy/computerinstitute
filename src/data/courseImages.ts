// ============================================================================
// COURSE IMAGE MANAGEMENT
// ----------------------------------------------------------------------------
// SINGLE source of truth for every course image. Each course has a UNIQUE,
// high-resolution, category-matched photo served as WebP via Unsplash's CDN
// (auto=format negotiates WebP/AVIF, fit=crop keeps a consistent ratio).
//
// To change a course image, edit ONLY the value here. If a remote URL ever
// fails to load, the UI falls back to a bundled local image (see fallback
// helpers in CourseCard / CourseDetail via getFallbackImage()).
// ============================================================================

import coding from "@/assets/hd-coding.jpg";
import lab from "@/assets/hd-lab.jpg";
import classroom from "@/assets/hd-classroom.jpg";
import medical from "@/assets/hd-medical.jpg";
import academy from "@/assets/academy.jpg";
import campus from "@/assets/campus.jpg";
import students from "@/assets/students.jpg";
import paramedical from "@/assets/paramedical.jpg";

// Build an optimized Unsplash URL (WebP/AVIF auto, cropped, sized).
const u = (id: string, w = 1100) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

// Unique photo per course id.
const photoIds: Record<string, string> = {
  // ---------------- Computer Courses ----------------
  bca: "1517694712202-14dd9538aa97",
  dca: "1587620962725-abab7fe55159",
  adca: "1486312338219-ce68d2c6f44d",
  pgdca: "1498050108023-c5249f4df085",
  ccc: "1531297484001-80022131f5a1",
  "o-level": "1488590528505-98d2b5aba04b",
  "a-level": "1504384308090-c894fdcc538d",
  "computer-basics": "1525547719571-a2d4ac8945e2",
  tally: "1554224155-6726b3ff858f",
  "advanced-excel": "1551288049-bebda4e38f71",
  "ms-office": "1497032628192-86f99bcd76bc",
  "web-development": "1461749280684-dccba630e2f6",
  "graphic-designing": "1626785774573-4b799315345d",
  "digital-marketing": "1460925895917-afdab827c52f",
  "data-entry": "1454165804606-c3d57bc86b40",
  python: "1555066931-4365d14bab8c",
  java: "1542831371-29b0f74f9713",
  "c-programming": "1516116216624-53e697fedbea",
  cpp: "1593720213428-28a5b9e94613",
  "full-stack": "1517180102446-f3ece451e9d8",
  "cyber-security": "1550751827-4bd374c3f58b",
  autocad: "1503387837-b154d5074bd2",

  // ---------------- Academy Programs ----------------
  "class-6-8": "1503676260728-1c00da094a0b",
  "class-9-10": "1509062522246-3755977927d7",
  "class-11-12-commerce": "1450101499163-c8848c66ca85",
  "class-11-12-science": "1606761568499-6d2451b23c66",
  "class-11-12-arts": "1455390582262-044cdead277a",
  "spoken-english": "1524178232363-1fb2b075b655",
  "personality-development": "1552664730-d307ca884978",
  "competitive-exam": "1434030216411-0b793f4b4173",

  // ---------------- Paramedical Courses ----------------
  anm: "1631217868264-e5b90bb7e133",
  gnm: "1576765608535-5f04d1e3f289",
  "bsc-nursing": "1612349317150-e413f6a5b16d",
  "pb-bsc-nursing": "1594824476967-48c8b964273f",
  dpharma: "1587854692152-cbe660dbde88",
  bpharma: "1631549916768-4119b2e5f926",
  bmlt: "1581093450021-4a7360e9a6b5",
  "dot-bot": "1551601651-2a8555f1a136",
  doot: "1606811841689-23dfddce3e95",
  "drit-brit": "1518770660439-4636190af475",
  dmlt: "1579154204601-01588f351e67",
  cmlt: "1582719478250-c89cae4dc85b",
  "cms-ed": "1505751172876-fa1923c5c528",
  "x-ray-technician": "1576091160550-2173dba999ef",
  "ecg-technician": "1631815588090-d4bfec5b1ccb",
  "ot-technician": "1581056771107-24ca5f033842",
  "dialysis-technician": "1559757148-5c350d0d3c56",
  "medical-lab-assistant": "1581595220892-b0739db3ba8c",
  "general-duty-assistant": "1559839734-2b71ea197ec2",
  "nursing-assistant": "1584982751601-97dcc096659c",
  "home-health-aide": "1532938911079-1b06ac7ceec7",
  emt: "1587745416684-47953f16f02f",
};

// Bundled local fallbacks per category (used only if a remote image fails).
export const categoryFallbackImage: Record<string, string> = {
  computer: coding,
  academy: academy,
  paramedical: medical,
};

const extraFallbacks = [lab, classroom, students, campus, paramedical];

export function getCourseImage(id: string, category: string): string {
  const pid = photoIds[id];
  return pid ? u(pid) : categoryFallbackImage[category] ?? campus;
}

// Deterministic local fallback so a broken remote image still shows something
// category-appropriate (and reasonably varied across cards).
export function getFallbackImage(id: string, category: string): string {
  const base = categoryFallbackImage[category] ?? campus;
  if (category === "computer") return base;
  let hash = 0;
  for (let i = 0; i < id.length; i++) hash = (hash + id.charCodeAt(i)) % extraFallbacks.length;
  return category === "paramedical" ? base : extraFallbacks[hash] ?? base;
}
