// ============================================================================
// COURSE MANAGEMENT — SINGLE SOURCE OF TRUTH
// ----------------------------------------------------------------------------
// To add / edit / remove a course, edit ONLY this file. Every page renders
// dynamically from here. Images come from src/data/courseImages.ts.
// ============================================================================

import { getCourseImage } from "./courseImages";

export type Category = "computer" | "academy" | "paramedical";

export type FaqItem = { q: string; a: string };

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
  career: string[];
  certification: string;
  fees: string;
  faq: FaqItem[];
};

export const categoryMeta: Record<
  Category,
  { id: Category; route: string }
> = {
  computer: { id: "computer", route: "/courses" },
  academy: { id: "academy", route: "/academy-programs" },
  paramedical: { id: "paramedical", route: "/paramedical" },
};

type RawCourse = Omit<Course, "image" | "highlights" | "certification" | "faq"> & {
  highlights?: string[];
  certification?: string;
  faq?: FaqItem[];
};

const defaultHighlights = [
  "Expert trainers with industry experience",
  "Hands-on practical training",
  "Recognized certificate on completion",
  "Placement & career guidance",
  "Flexible morning / evening / weekend batches",
];

// Certification text generated per category (real, course-aware content).
const certificationFor = (title: string, category: Category): string => {
  if (category === "paramedical")
    return `On successful completion of ${title}, students receive a government-recognized paramedical certificate along with a clinical training & internship completion record valid for hospital and diagnostic-centre employment.`;
  if (category === "academy")
    return `Students of ${title} receive regular progress reports, periodic test certificates and a completion certificate from SK Institute recognising attendance and academic performance.`;
  return `On completing ${title}, students receive an ISO-recognized SK Institute certificate verifying the skills acquired — accepted by employers and useful for further studies and job applications.`;
};

// FAQ generated from real course data so every entry is course-specific.
const buildFaq = (c: Omit<Course, "image" | "faq">): FaqItem[] => [
  {
    q: `What is the duration of ${c.title}?`,
    a: `${c.title} runs for ${c.duration}. We offer flexible morning, evening and weekend batches so you can study alongside work or school.`,
  },
  {
    q: `Who is eligible to join ${c.title}?`,
    a: `Eligibility for ${c.title} is: ${c.eligibility}. If you are unsure whether you qualify, contact our counsellors on WhatsApp and we'll guide you.`,
  },
  {
    q: `What batch timings are available for ${c.title}?`,
    a: `${c.title} is offered in flexible morning, evening and weekend batches so you can study alongside work or school. Contact our counsellors on WhatsApp to pick a slot.`,
  },
  {
    q: `Will I get a certificate and placement help?`,
    a: `Yes. ${c.certification} You also receive resume building, interview preparation and placement assistance after completion.`,
  },
  {
    q: `What jobs can I get after ${c.title}?`,
    a: `After ${c.title} you can work as ${c.career.slice(0, 3).join(", ")} and more. Our placement cell connects you with hiring partners.`,
  },
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
    syllabus: ["Programming (C, C++, Java)", "Data Structures", "Database Management (SQL)", "Web Development", "Operating Systems", "Software Engineering", "Computer Networks", "Project Work"],
    career: ["Software Developer", "Web Developer", "System Analyst", "IT Support Engineer", "Database Administrator"],
    fees: "₹25,000 / year",
  },
  {
    id: "dca",
    title: "DCA",
    category: "computer",
    duration: "6–12 Months",
    eligibility: "10th pass",
    description:
      "Diploma in Computer Applications — practical computer fundamentals, MS Office, internet and accounting software for office and job readiness.",
    syllabus: ["Computer Fundamentals", "MS Office (Word, Excel, PowerPoint)", "Internet & Email", "Tally Basics", "Typing Practice", "Operating System Basics"],
    career: ["Computer Operator", "Office Assistant", "Data Entry Operator", "Front Office Executive"],
    fees: "₹8,000",
  },
  {
    id: "adca",
    title: "ADCA",
    category: "computer",
    duration: "1 Year",
    eligibility: "10th pass",
    description:
      "Advanced Diploma in Computer Applications — covers office automation, accounting, DTP and internet skills for complete office and administrative job readiness.",
    syllabus: ["Computer Fundamentals", "MS Office Advanced", "Tally with GST", "DTP (Photoshop, CorelDRAW)", "Internet & Email", "Typing & Practical Projects"],
    career: ["Office Executive", "Computer Operator", "DTP Operator", "Accounts Assistant"],
    fees: "₹12,000",
  },
  {
    id: "pgdca",
    title: "PGDCA",
    category: "computer",
    duration: "1 Year",
    eligibility: "Graduate in any stream",
    description:
      "Post Graduate Diploma in Computer Applications — programming, databases and office tools for graduates wanting an IT career boost.",
    syllabus: ["Programming Fundamentals", "Database Management (SQL)", "Office Automation", "Web Basics", "Operating Systems", "Project Work"],
    career: ["Programmer", "IT Assistant", "Computer Instructor", "System Operator"],
    fees: "₹15,000",
  },
  {
    id: "ccc",
    title: "CCC",
    category: "computer",
    duration: "3 Months",
    eligibility: "No prerequisite",
    description:
      "Course on Computer Concepts — government-recognized basic computer literacy certification ideal for jobs and competitive exams.",
    syllabus: ["Introduction to Computers", "Operating System Basics", "Word Processing", "Spreadsheets", "Internet & Digital Services", "Digital Payments"],
    career: ["Computer Operator", "Government Job Aspirant", "Data Entry Operator"],
    fees: "₹4,000",
  },
  {
    id: "o-level",
    title: "O Level",
    category: "computer",
    duration: "1 Year",
    eligibility: "10+2 / ITI",
    description:
      "NIELIT O Level — a recognized IT foundation course in programming, web design and IT tools, equivalent to a Foundation-level IT diploma.",
    syllabus: ["IT Tools & Network Basics", "Web Designing & Publishing", "Programming (Python)", "Internet of Things", "Practical Lab", "Project"],
    career: ["Junior Programmer", "Web Designer", "Lab Assistant", "EDP Assistant"],
    fees: "₹15,000",
  },
  {
    id: "a-level",
    title: "A Level",
    category: "computer",
    duration: "1.5 Years",
    eligibility: "O Level / Diploma / Graduate",
    description:
      "NIELIT A Level — advanced IT diploma equivalent to a polytechnic-level qualification covering software development and systems.",
    syllabus: ["Advanced Programming", "Data Structures", "DBMS", "Software Engineering", "Computer Networks", "Capstone Project"],
    career: ["Software Developer", "System Engineer", "Network Administrator"],
    fees: "₹22,000",
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
    career: ["Computer Operator", "Office Helper"],
    fees: "₹3,000",
  },
  {
    id: "tally",
    title: "Tally Prime with GST",
    category: "computer",
    duration: "2–3 Months",
    eligibility: "10th pass",
    description:
      "Master accounting with Tally Prime — GST, billing, inventory and payroll for accounting and finance jobs.",
    syllabus: ["Accounting Fundamentals", "Tally Prime Setup", "GST & Taxation", "Inventory Management", "Payroll", "Financial Reports"],
    career: ["Accountant", "Accounts Executive", "Billing Operator", "GST Practitioner"],
    fees: "₹7,000",
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
    career: ["MIS Executive", "Data Analyst", "Accounts Executive"],
    fees: "₹6,000",
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
    career: ["Office Assistant", "Back Office Executive", "Receptionist"],
    fees: "₹4,000",
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
    career: ["Frontend Developer", "Web Designer", "Freelance Developer"],
    fees: "₹18,000",
  },
  {
    id: "graphic-designing",
    title: "Graphic Design",
    category: "computer",
    duration: "3–4 Months",
    eligibility: "10+2 in any stream",
    description:
      "Create stunning visuals with Photoshop, Illustrator and CorelDRAW for a creative design career.",
    syllabus: ["Design Fundamentals", "Adobe Photoshop", "Adobe Illustrator", "CorelDRAW", "Logo & Branding", "Portfolio Projects"],
    career: ["Graphic Designer", "DTP Operator", "UI Designer", "Freelancer"],
    fees: "₹15,000",
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
    career: ["Digital Marketer", "SEO Executive", "Social Media Manager", "PPC Specialist"],
    fees: "₹18,000",
  },
  {
    id: "data-entry",
    title: "Data Entry Operator",
    category: "computer",
    duration: "1–2 Months",
    eligibility: "10th pass",
    description:
      "Fast and accurate data entry, typing and office document handling for back-office and clerical jobs.",
    syllabus: ["Typing Speed Practice", "MS Excel & Word", "Data Management", "Internet & Email", "Practical Assignments"],
    career: ["Data Entry Operator", "Back Office Executive", "Typist"],
    fees: "₹4,000",
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
    career: ["Python Developer", "Data Analyst", "Automation Engineer", "Backend Developer"],
    fees: "₹15,000",
  },
  {
    id: "java",
    title: "Java Programming",
    category: "computer",
    duration: "3–4 Months",
    eligibility: "Basic computer knowledge",
    description:
      "Master core and advanced Java — object-oriented programming, collections and application development.",
    syllabus: ["Java Fundamentals", "OOP Concepts", "Collections Framework", "Exception Handling", "JDBC & Databases", "Project Work"],
    career: ["Java Developer", "Backend Developer", "Android Developer"],
    fees: "₹16,000",
  },
  {
    id: "c-programming",
    title: "C Programming",
    category: "computer",
    duration: "2–3 Months",
    eligibility: "Basic computer knowledge",
    description:
      "Learn the fundamentals of programming with C — logic building, functions and structured programming.",
    syllabus: ["C Basics & Syntax", "Control Structures", "Functions & Arrays", "Pointers", "Structures & Files", "Practical Programs"],
    career: ["Junior Programmer", "Embedded Trainee", "Software Tester"],
    fees: "₹6,000",
  },
  {
    id: "cpp",
    title: "C++",
    category: "computer",
    duration: "2–3 Months",
    eligibility: "Knowledge of C preferred",
    description:
      "Object-oriented programming with C++ — classes, inheritance and the foundations for advanced software development.",
    syllabus: ["C++ Basics", "Classes & Objects", "Inheritance & Polymorphism", "Templates", "STL", "Project Work"],
    career: ["C++ Developer", "Game Programmer Trainee", "Software Developer"],
    fees: "₹8,000",
  },
  {
    id: "full-stack",
    title: "Full Stack Development",
    category: "computer",
    duration: "6–8 Months",
    eligibility: "Basic computer knowledge",
    description:
      "Become a complete web developer — frontend, backend, databases and deployment with modern frameworks (MERN).",
    syllabus: ["HTML, CSS & JavaScript", "React.js", "Node.js & Express", "MongoDB & Databases", "REST APIs & Auth", "Deployment & Live Projects"],
    career: ["Full Stack Developer", "MERN Developer", "Web Application Developer"],
    fees: "₹30,000",
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    category: "computer",
    duration: "4–6 Months",
    eligibility: "Basic computer & networking knowledge",
    description:
      "Learn ethical hacking, network security and threat protection for a high-demand cybersecurity career.",
    syllabus: ["Networking Fundamentals", "Ethical Hacking Basics", "Web Application Security", "Network Security", "Cryptography", "Security Tools & Labs"],
    career: ["Security Analyst", "Ethical Hacker", "SOC Analyst", "Network Security Engineer"],
    fees: "₹30,000",
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
    career: ["CAD Draftsman", "Design Engineer Assistant", "Interior Designer"],
    fees: "₹12,000",
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
    career: ["Strong conceptual base", "Confidence for higher classes", "Improved exam scores"],
    fees: "₹12,000 / year",
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
    career: ["Excellent board results", "Strong base for Class 11-12", "Competitive exam readiness"],
    fees: "₹18,000 / year",
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
    career: ["B.Com / BBA admission", "CA / CS foundation", "Commerce career path"],
    fees: "₹24,000 / year",
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
    career: ["Engineering / Medical entrance", "B.Sc admission", "Science research path"],
    fees: "₹28,000 / year",
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
    career: ["BA admission", "Civil services foundation", "Humanities career path"],
    fees: "₹22,000 / year",
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
    career: ["Confident communication", "Better job interviews", "Professional fluency"],
    fees: "₹5,000",
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
    career: ["Interview confidence", "Leadership skills", "Professional presence"],
    fees: "₹4,000",
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
    career: ["SSC / Banking jobs", "Railway jobs", "Government services"],
    fees: "₹20,000",
  },

  // ----------------------------- PARAMEDICAL -----------------------------
  {
    id: "dmlt",
    title: "Medical Lab Technician (DMLT)",
    category: "paramedical",
    duration: "2 Years",
    eligibility: "10+2 with Science",
    description:
      "Diploma in Medical Laboratory Technology — clinical lab testing, pathology and diagnostics for a healthcare career.",
    syllabus: ["Clinical Pathology", "Biochemistry", "Microbiology", "Hematology", "Lab Equipment Handling", "Hospital Internship"],
    career: ["Lab Technician", "Pathology Assistant", "Phlebotomist", "Lab In-charge"],
    fees: "₹40,000 / year",
  },
  {
    id: "cmlt",
    title: "Certificate in Medical Lab Technology (CMLT)",
    category: "paramedical",
    duration: "1 Year",
    eligibility: "10+2 with Science",
    description:
      "Certificate in Medical Laboratory Technology — fast-track training in lab procedures and sample analysis.",
    syllabus: ["Basic Pathology", "Sample Collection", "Lab Testing", "Microbiology Basics", "Practical Training"],
    career: ["Lab Assistant", "Sample Collector", "Lab Technician"],
    fees: "₹25,000",
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
    career: ["Community Health Worker", "Medical Assistant", "Health Practitioner"],
    fees: "₹35,000",
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
    career: ["Radiographer", "X-Ray Technician", "Imaging Assistant"],
    fees: "₹35,000",
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
    career: ["ECG Technician", "Cardiac Care Assistant", "Diagnostic Technician"],
    fees: "₹25,000",
  },
  {
    id: "ot-technician",
    title: "Operation Theatre Assistant",
    category: "paramedical",
    duration: "1–2 Years",
    eligibility: "10+2 with Science",
    description:
      "Operation Theatre Technician — assist surgical teams with equipment, sterilization and patient care.",
    syllabus: ["OT Procedures", "Sterilization Techniques", "Surgical Instruments", "Patient Preparation", "Hospital Internship"],
    career: ["OT Assistant", "Surgical Technician", "Sterilization Technician"],
    fees: "₹35,000",
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
    career: ["Dialysis Technician", "Renal Care Assistant"],
    fees: "₹35,000",
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
    career: ["Lab Assistant", "Sample Collector", "Lab Helper"],
    fees: "₹20,000",
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
    career: ["Ward Assistant", "Patient Care Assistant", "Home Care Attendant"],
    fees: "₹18,000",
  },
  {
    id: "nursing-assistant",
    title: "Nursing Assistant",
    category: "paramedical",
    duration: "1 Year",
    eligibility: "10+2 in any stream",
    description:
      "Train to support nurses and doctors with patient care, basic clinical tasks and ward management.",
    syllabus: ["Basic Nursing Care", "Patient Hygiene & Mobility", "Vital Signs & Monitoring", "Medication Support", "First Aid", "Hospital Internship"],
    career: ["Nursing Assistant", "Ward Assistant", "Home Nurse"],
    fees: "₹22,000",
  },
  {
    id: "home-health-aide",
    title: "Home Health Aide",
    category: "paramedical",
    duration: "6 Months",
    eligibility: "10th pass",
    description:
      "Learn to care for elderly and recovering patients at home — daily care, mobility support and basic health monitoring.",
    syllabus: ["Elderly & Patient Care", "Personal Hygiene Support", "Mobility & Exercises", "Basic Health Monitoring", "Nutrition & First Aid"],
    career: ["Home Health Aide", "Elderly Care Assistant", "Patient Attendant"],
    fees: "₹15,000",
  },
  {
    id: "emt",
    title: "Emergency Medical Technician",
    category: "paramedical",
    duration: "1 Year",
    eligibility: "10+2 with Science",
    description:
      "Become a first responder — emergency care, ambulance handling and life-saving techniques for critical situations.",
    syllabus: ["Emergency & Trauma Care", "CPR & Life Support", "Ambulance Operations", "Patient Transport", "First Aid & Triage", "Clinical Internship"],
    career: ["Emergency Medical Technician", "Ambulance Technician", "First Responder"],
    fees: "₹30,000",
  },
];

export const courses: Course[] = raw.map((c) => {
  const certification = c.certification ?? certificationFor(c.title, c.category);
  const base = {
    ...c,
    highlights: c.highlights ?? defaultHighlights,
    certification,
  };
  return {
    ...base,
    image: getCourseImage(c.id, c.category),
    faq: c.faq ?? buildFaq(base),
  };
});

export const getCoursesByCategory = (category: Category): Course[] =>
  courses.filter((c) => c.category === category);

export const getCourseById = (id: string): Course | undefined =>
  courses.find((c) => c.id === id);
