// ============================================================================
// COURSE MANAGEMENT — SINGLE SOURCE OF TRUTH
// ----------------------------------------------------------------------------
// To add / edit / remove a course, edit ONLY this file. Every page renders
// dynamically from here. Images come from src/data/courseImages.ts.
// ============================================================================

import { getCourseImage } from "./courseImages";

export type Category = "computer" | "academy" | "paramedical";

export type Course = {
  id: string;
  title: string;
  category: Category;
  duration: string;
  eligibility: string;
  description: string;
  image: string;
  syllabus: string[];
  highlights: string[];
};

export const categoryMeta: Record<
  Category,
  { id: Category; route: string }
> = {
  computer: { id: "computer", route: "/courses" },
  academy: { id: "academy", route: "/academy-programs" },
  paramedical: { id: "paramedical", route: "/paramedical" },
};

type RawCourse = Omit<Course, "image">;

const defaultHighlights = [
  "Expert trainers with industry experience",
  "Hands-on practical training",
  "Recognized certificate on completion",
  "Placement & career guidance",
  "Flexible morning / evening / weekend batches",
];

const raw: RawCourse[] = [
  // ----------------------------- COMPUTER -----------------------------
  {
    id: "bca",
    title: "BCA",
    category: "computer",
    duration: "3 Years",
    eligibility: "10+2 in any stream",
    description:
      "Bachelor of Computer Applications — a complete degree covering programming, databases, web technologies and software development for a strong IT career.",
    syllabus: ["Programming (C, C++, Java)", "Data Structures", "Database Management (SQL)", "Web Development", "Operating Systems", "Software Engineering"],
    highlights: defaultHighlights,
  },
  {
    id: "dca",
    title: "DCA",
    category: "computer",
    duration: "6–12 Months",
    eligibility: "10th pass",
    description:
      "Diploma in Computer Applications — practical computer fundamentals, MS Office, internet and accounting software for office and job readiness.",
    syllabus: ["Computer Fundamentals", "MS Office (Word, Excel, PowerPoint)", "Internet & Email", "Tally Basics", "Typing Practice"],
    highlights: defaultHighlights,
  },
  {
    id: "ccc",
    title: "CCC",
    category: "computer",
    duration: "3 Months",
    eligibility: "No prerequisite",
    description:
      "Course on Computer Concepts — government-recognized basic computer literacy certification ideal for jobs and competitive exams.",
    syllabus: ["Introduction to Computers", "Operating System Basics", "Word Processing", "Spreadsheets", "Internet & Digital Services"],
    highlights: defaultHighlights,
  },
  {
    id: "computer-basics",
    title: "Computer Basics",
    category: "computer",
    duration: "2 Months",
    eligibility: "No prerequisite",
    description:
      "Start from zero — learn how to use a computer confidently, browse the internet, send emails and handle everyday digital tasks.",
    syllabus: ["Hardware & Software Basics", "Windows Operating System", "Files & Folders", "Internet Browsing", "Email & Online Safety"],
    highlights: defaultHighlights,
  },
  {
    id: "python",
    title: "Python Programming",
    category: "computer",
    duration: "3–4 Months",
    eligibility: "Basic computer knowledge",
    description:
      "Learn Python from basics to advanced — the most in-demand language for software, data science, AI and automation.",
    syllabus: ["Python Fundamentals", "Data Types & Functions", "OOP Concepts", "File Handling", "Modules & Libraries", "Mini Projects"],
    highlights: defaultHighlights,
  },
  {
    id: "tally",
    title: "Tally Prime",
    category: "computer",
    duration: "2–3 Months",
    eligibility: "10th pass",
    description:
      "Master accounting with Tally Prime — GST, billing, inventory and payroll for accounting and finance jobs.",
    syllabus: ["Accounting Fundamentals", "Tally Prime Setup", "GST & Taxation", "Inventory Management", "Payroll", "Financial Reports"],
    highlights: defaultHighlights,
  },
  {
    id: "autocad",
    title: "AutoCAD",
    category: "computer",
    duration: "2–3 Months",
    eligibility: "10+2 / Diploma",
    description:
      "Professional 2D & 3D design and drafting with AutoCAD for engineering, architecture and interior design careers.",
    syllabus: ["AutoCAD Interface", "2D Drafting", "3D Modeling", "Layers & Dimensioning", "Plotting & Printing", "Project Drawings"],
    highlights: defaultHighlights,
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    category: "computer",
    duration: "3–6 Months",
    eligibility: "10+2 in any stream",
    description:
      "Become a digital marketer — SEO, social media, Google Ads, content and analytics to grow brands and earn online.",
    syllabus: ["SEO & SEM", "Social Media Marketing", "Google Ads", "Content Marketing", "Email Marketing", "Web Analytics"],
    highlights: defaultHighlights,
  },
  {
    id: "web-development",
    title: "Web Development",
    category: "computer",
    duration: "4–6 Months",
    eligibility: "Basic computer knowledge",
    description:
      "Build modern responsive websites and web apps using HTML, CSS, JavaScript and popular frameworks.",
    syllabus: ["HTML & CSS", "JavaScript", "Responsive Design", "Frontend Frameworks", "Backend Basics", "Live Projects"],
    highlights: defaultHighlights,
  },
  {
    id: "ms-office",
    title: "MS Office",
    category: "computer",
    duration: "2 Months",
    eligibility: "No prerequisite",
    description:
      "Complete Microsoft Office mastery — Word, Excel, PowerPoint and Outlook for any office or administrative role.",
    syllabus: ["MS Word", "MS Excel", "MS PowerPoint", "MS Outlook", "Practical Assignments"],
    highlights: defaultHighlights,
  },
  {
    id: "advanced-excel",
    title: "Advanced Excel",
    category: "computer",
    duration: "1–2 Months",
    eligibility: "Basic Excel knowledge",
    description:
      "Advanced formulas, pivot tables, dashboards and data analysis for analyst, MIS and accounting roles.",
    syllabus: ["Advanced Formulas", "Pivot Tables", "Charts & Dashboards", "Data Validation", "Macros Basics", "Data Analysis"],
    highlights: defaultHighlights,
  },
  {
    id: "graphic-designing",
    title: "Graphic Designing",
    category: "computer",
    duration: "3–4 Months",
    eligibility: "10+2 in any stream",
    description:
      "Create stunning visuals with Photoshop, Illustrator and CorelDRAW for a creative design career.",
    syllabus: ["Design Fundamentals", "Adobe Photoshop", "Adobe Illustrator", "CorelDRAW", "Logo & Branding", "Portfolio Projects"],
    highlights: defaultHighlights,
  },

  // ----------------------------- ACADEMY -----------------------------
  {
    id: "class-6-8",
    title: "Class 6-8 Foundation",
    category: "academy",
    duration: "Yearly",
    eligibility: "Class 6 to 8 students",
    description:
      "Strong conceptual foundation in Maths, Science and English with regular tests and personal attention.",
    syllabus: ["Mathematics", "Science", "English", "Social Studies", "Regular Tests & Assessments"],
    highlights: defaultHighlights,
  },
  {
    id: "class-9-10",
    title: "Class 9-10 Academy",
    category: "academy",
    duration: "Yearly",
    eligibility: "Class 9 & 10 students",
    description:
      "Board-focused coaching for Class 9 & 10 with concept clarity, practice and exam strategies for top results.",
    syllabus: ["Mathematics", "Science", "English", "Social Science", "Board Exam Preparation"],
    highlights: defaultHighlights,
  },
  {
    id: "class-11-12-commerce",
    title: "Class 11-12 Commerce",
    category: "academy",
    duration: "Yearly",
    eligibility: "Class 11 & 12 Commerce",
    description:
      "Complete commerce coaching — Accountancy, Business Studies and Economics for board and competitive success.",
    syllabus: ["Accountancy", "Business Studies", "Economics", "Mathematics", "English"],
    highlights: defaultHighlights,
  },
  {
    id: "class-11-12-science",
    title: "Class 11-12 Science",
    category: "academy",
    duration: "Yearly",
    eligibility: "Class 11 & 12 Science",
    description:
      "Physics, Chemistry, Maths and Biology coaching for boards and entrance exams with practical lab support.",
    syllabus: ["Physics", "Chemistry", "Mathematics", "Biology", "English"],
    highlights: defaultHighlights,
  },
  {
    id: "class-11-12-arts",
    title: "Class 11-12 Arts",
    category: "academy",
    duration: "Yearly",
    eligibility: "Class 11 & 12 Arts",
    description:
      "Humanities coaching covering History, Political Science, Geography and more for strong board results.",
    syllabus: ["History", "Political Science", "Geography", "Economics", "English"],
    highlights: defaultHighlights,
  },
  {
    id: "spoken-english",
    title: "Spoken English",
    category: "academy",
    duration: "2–3 Months",
    eligibility: "Open to all",
    description:
      "Speak English fluently and confidently with grammar, vocabulary and daily conversation practice.",
    syllabus: ["Grammar Foundations", "Vocabulary Building", "Conversation Practice", "Public Speaking", "Interview English"],
    highlights: defaultHighlights,
  },
  {
    id: "personality-development",
    title: "Personality Development",
    category: "academy",
    duration: "1–2 Months",
    eligibility: "Open to all",
    description:
      "Build confidence, communication, body language and soft skills for interviews and professional success.",
    syllabus: ["Communication Skills", "Body Language", "Confidence Building", "Time Management", "Interview Skills"],
    highlights: defaultHighlights,
  },
  {
    id: "competitive-exam",
    title: "Competitive Exam Preparation",
    category: "academy",
    duration: "6–12 Months",
    eligibility: "10+2 / Graduate",
    description:
      "Targeted preparation for SSC, Banking, Railway and other government exams with mock tests and current affairs.",
    syllabus: ["Quantitative Aptitude", "Reasoning", "General Awareness", "English Language", "Mock Tests & Current Affairs"],
    highlights: defaultHighlights,
  },

  // ----------------------------- PARAMEDICAL -----------------------------
  {
    id: "dmlt",
    title: "DMLT",
    category: "paramedical",
    duration: "2 Years",
    eligibility: "10+2 with Science",
    description:
      "Diploma in Medical Laboratory Technology — clinical lab testing, pathology and diagnostics for a healthcare career.",
    syllabus: ["Clinical Pathology", "Biochemistry", "Microbiology", "Hematology", "Lab Equipment Handling", "Internship"],
    highlights: defaultHighlights,
  },
  {
    id: "cmlt",
    title: "CMLT",
    category: "paramedical",
    duration: "1 Year",
    eligibility: "10+2 with Science",
    description:
      "Certificate in Medical Laboratory Technology — fast-track training in lab procedures and sample analysis.",
    syllabus: ["Basic Pathology", "Sample Collection", "Lab Testing", "Microbiology Basics", "Practical Training"],
    highlights: defaultHighlights,
  },
  {
    id: "cms-ed",
    title: "CMS & ED",
    category: "paramedical",
    duration: "18 Months",
    eligibility: "10+2 in any stream",
    description:
      "Community Medical Service & Essential Drugs — training to work as a community health practitioner.",
    syllabus: ["Human Anatomy", "Basic Pharmacology", "First Aid & Emergency Care", "Community Health", "Clinical Practice"],
    highlights: defaultHighlights,
  },
  {
    id: "x-ray-technician",
    title: "X-Ray Technician",
    category: "paramedical",
    duration: "1–2 Years",
    eligibility: "10+2 with Science",
    description:
      "Diploma in Radiography — operate X-ray and imaging equipment in hospitals and diagnostic centers.",
    syllabus: ["Radiographic Physics", "Imaging Techniques", "Radiation Safety", "Equipment Operation", "Clinical Internship"],
    highlights: defaultHighlights,
  },
  {
    id: "ecg-technician",
    title: "ECG Technician",
    category: "paramedical",
    duration: "6–12 Months",
    eligibility: "10+2 with Science",
    description:
      "Learn to perform and interpret ECG tests to support cardiac diagnosis in clinics and hospitals.",
    syllabus: ["Cardiac Anatomy", "ECG Machine Operation", "Reading ECG Reports", "Patient Handling", "Clinical Practice"],
    highlights: defaultHighlights,
  },
  {
    id: "ot-technician",
    title: "OT Technician",
    category: "paramedical",
    duration: "1–2 Years",
    eligibility: "10+2 with Science",
    description:
      "Operation Theatre Technician — assist surgical teams with equipment, sterilization and patient care.",
    syllabus: ["OT Procedures", "Sterilization Techniques", "Surgical Instruments", "Patient Preparation", "Internship"],
    highlights: defaultHighlights,
  },
  {
    id: "dialysis-technician",
    title: "Dialysis Technician",
    category: "paramedical",
    duration: "1–2 Years",
    eligibility: "10+2 with Science",
    description:
      "Train to operate dialysis machines and care for kidney patients in hospitals and dialysis centers.",
    syllabus: ["Renal Anatomy", "Dialysis Machine Operation", "Patient Monitoring", "Infection Control", "Clinical Internship"],
    highlights: defaultHighlights,
  },
  {
    id: "medical-lab-assistant",
    title: "Medical Lab Assistant",
    category: "paramedical",
    duration: "6–12 Months",
    eligibility: "10+2 in any stream",
    description:
      "Support laboratory operations — sample collection, basic testing and lab maintenance.",
    syllabus: ["Lab Safety", "Sample Collection", "Basic Lab Tests", "Record Keeping", "Practical Training"],
    highlights: defaultHighlights,
  },
  {
    id: "general-duty-assistant",
    title: "General Duty Assistant",
    category: "paramedical",
    duration: "6–12 Months",
    eligibility: "10th / 10+2",
    description:
      "Patient care and hospital support training to work as a nursing/ward assistant in healthcare settings.",
    syllabus: ["Basic Patient Care", "Vital Signs Monitoring", "Hygiene & Sanitation", "First Aid", "Hospital Internship"],
    highlights: defaultHighlights,
  },
];

export const courses: Course[] = raw.map((c) => ({
  ...c,
  image: getCourseImage(c.id, c.category),
}));

export const getCoursesByCategory = (category: Category): Course[] =>
  courses.filter((c) => c.category === category);

export const getCourseById = (id: string): Course | undefined =>
  courses.find((c) => c.id === id);
