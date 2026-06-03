// ============================================================================
// COURSE IMAGE MANAGEMENT
// ----------------------------------------------------------------------------
// This is the SINGLE source of truth for every course image on the website.
// To change a course image, edit ONLY the value here — the whole site updates
// automatically. You may use an imported local asset OR a remote URL string.
// ============================================================================

import coding from "@/assets/hd-coding.jpg";
import lab from "@/assets/hd-lab.jpg";
import classroom from "@/assets/hd-classroom.jpg";
import medical from "@/assets/hd-medical.jpg";
import academy from "@/assets/academy.jpg";
import campus from "@/assets/campus.jpg";
import students from "@/assets/students.jpg";
import paramedical from "@/assets/paramedical.jpg";

export const courseImages: Record<string, string> = {
  // ---------------- Computer Courses ----------------
  bca: coding,
  dca: lab,
  ccc: lab,
  "computer-basics": lab,
  python: coding,
  tally: classroom,
  autocad: classroom,
  "digital-marketing": classroom,
  "web-development": coding,
  "ms-office": lab,
  "advanced-excel": lab,
  "graphic-designing": classroom,

  // ---------------- Academy Programs ----------------
  "class-6-8": academy,
  "class-9-10": academy,
  "class-11-12-commerce": students,
  "class-11-12-science": campus,
  "class-11-12-arts": academy,
  "spoken-english": students,
  "personality-development": campus,
  "competitive-exam": academy,

  // ---------------- Paramedical Courses ----------------
  dmlt: medical,
  cmlt: medical,
  "cms-ed": medical,
  "x-ray-technician": paramedical,
  "ecg-technician": paramedical,
  "ot-technician": medical,
  "dialysis-technician": paramedical,
  "medical-lab-assistant": medical,
  "general-duty-assistant": paramedical,
};

// Category fallbacks (used if a course id is missing above).
export const categoryFallbackImage: Record<string, string> = {
  computer: coding,
  academy: academy,
  paramedical: medical,
};

export function getCourseImage(id: string, category: string): string {
  return courseImages[id] ?? categoryFallbackImage[category] ?? campus;
}
