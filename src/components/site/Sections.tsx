import {
  Award, Users, Briefcase, GraduationCap, ShieldCheck, Clock,
  BookOpenCheck, Headset, Phone, Mail, MessageCircle, MapPin,
  Facebook, Instagram, Youtube, Linkedin, Star, CheckCircle2,
  Stethoscope, HeartPulse, Microscope, Building2, Calendar,
  Trophy, Target, Sparkles, ArrowRight, PlayCircle, Globe2,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-classroom.jpg";
import campusImg from "@/assets/campus.jpg";
import studentsImg from "@/assets/students.jpg";
import paramedImg from "@/assets/paramedical.jpg";
import academyImg from "@/assets/academy.jpg";
import { AdmissionForm } from "./AdmissionForm";
import { openAdmission } from "@/lib/admission-modal";
import { useT } from "@/lib/i18n";
import { logoUrl } from "./Logo";
import { PHONE_NUMBER, PHONE_DISPLAY, CONTACT_EMAIL, whatsappChatUrl, MAP_EMBED_URL, MAP_QUERY } from "@/lib/whatsapp";

/* ----------------------------- HERO ----------------------------- */
export function Hero({ onApply = openAdmission }: { onApply?: () => void } = {}) {
  const { t } = useT();
  return (
    <section id="home" className="relative overflow-hidden animate-fade-in min-h-[calc(100vh-72px)] lg:min-h-[760px]">
      <div className="absolute inset-0 -z-10">
        <img src={heroImg} alt="SK Institute computer classroom" className="h-full w-full object-cover object-center" width={1920} height={1280} fetchPriority="high" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))" }} />
        <div className="absolute inset-0 bg-gradient-to-br from-background/65 via-background/35 to-primary/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-transparent" />
      </div>
      {/* Floating decorative blobs */}
      <div aria-hidden className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-primary/25 blur-3xl animate-float-slow -z-10" />
      <div aria-hidden className="pointer-events-none absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-[var(--gold)]/20 blur-3xl animate-float-slower -z-10" />
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-primary/15 blur-3xl animate-float-slow -z-10" />


      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
        <div>
          <img
            src={logoUrl}
            alt="SK Institute logo"
            className="h-24 w-24 rounded-2xl bg-white/95 p-2 shadow-lg mb-5"
            width={96}
            height={96}
          />
          <div className="inline-flex items-center gap-2 rounded-full bg-card/75 backdrop-blur border border-white/20 px-3 py-1.5 text-xs font-semibold text-primary animate-fade-in">
            {t("hero.badge")}
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-white drop-shadow-sm">
            {t("hero.welcome")} <span className="bg-clip-text text-transparent hero-gradient">{t("hero.instituteName")}</span>
          </h1>
          <p className="mt-5 text-lg md:text-2xl text-white/90 font-semibold">
            {t("hero.subtitle")}
          </p>
          <p className="mt-3 text-base md:text-lg text-white/80 max-w-xl">
            {t("hero.description")}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={onApply} className="group rounded-full hero-gradient px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:scale-[1.04] hover:shadow-xl transition-all soft-shadow inline-flex items-center gap-2">
              {t("hero.applyNow")} <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href={`tel:${PHONE_NUMBER}`} className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-6 py-3.5 text-sm font-semibold text-foreground hover:border-primary/50 hover:text-primary hover:-translate-y-0.5 transition-all">
              <Phone className="h-4 w-4" /> {t("hero.callNow")}
            </a>
            <a href={whatsappChatUrl()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-sm font-semibold text-white hover:opacity-90 hover:scale-[1.04] transition-all">
              <MessageCircle className="h-4 w-4" /> {t("hero.whatsapp")}
            </a>
            <Link to="/courses" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-card/10 px-6 py-3.5 text-sm font-semibold text-white hover:bg-card/20 transition">
              <PlayCircle className="h-4 w-4" /> {t("hero.exploreCourses")}
            </Link>
          </div>
        </div>

        <div className="lg:pl-4">
          <AdmissionForm variant="inline" />
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- STATS BAR ----------------------------- */
export function StatsBar() {
  const { t } = useT();
  const items = [
    { icon: Users, n: "10,000+", l: t("stats.students") },
    { icon: BookOpenCheck, n: "40+", l: t("stats.courses") },
    { icon: Award, n: "25+", l: t("stats.faculty") },
    { icon: Trophy, n: "98%", l: t("stats.placement") },
  ];
  return (
    <section className="py-12 lg:py-16 bg-gradient-to-r from-primary/5 via-background to-primary/5 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.l} className="flex items-center gap-4 rounded-2xl bg-card border border-border p-5 hover:border-primary/40 hover:soft-shadow hover:-translate-y-1 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl hero-gradient text-primary-foreground shrink-0">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">{s.n}</div>
                <div className="text-xs text-muted-foreground">{s.l}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ----------------------------- ACADEMY PROGRAMS ----------------------------- */
export function AcademyPrograms({ onApply = openAdmission }: { onApply?: () => void } = {}) {
  const degrees = [
    { name: "BA", full: "Bachelor of Arts (Multiple Streams)", dur: "3 Years" },
    { name: "BBA", full: "Bachelor of Business Administration", dur: "3 Years" },
    { name: "BCA", full: "Bachelor of Computer Applications", dur: "3 Years" },
    { name: "BSC-IT", full: "Bachelor of Science in IT", dur: "3 Years" },
    { name: "BCOM", full: "Bachelor of Commerce", dur: "3 Years" },
    { name: "MBA", full: "Master of Business Administration", dur: "2 Years" },
    { name: "MCA", full: "Master of Computer Applications", dur: "2 Years" },
    { name: "MCOM", full: "Master of Commerce", dur: "2 Years" },
    { name: "MSC-IT", full: "Master of Science in IT", dur: "2 Years" },
    { name: "PGDCA", full: "PG Diploma in Computer Apps", dur: "1 Year" },
    { name: "DCA", full: "Diploma in Computer Apps", dur: "6–12 Months" },
    { name: "BLIS / MLIS", full: "Library &amp; Information Science", dur: "1–2 Years" },
    { name: "MA", full: "Master of Arts (Multiple Streams)", dur: "2 Years" },
  ];
  return (
    <section id="academy" className="py-20 lg:py-28 bg-gradient-to-b from-secondary/30 to-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center mb-12">
          <div className="relative group overflow-hidden rounded-3xl soft-shadow">
            <img src={academyImg} alt="Academy graduation ceremony" width={1280} height={896} loading="lazy" className="w-full h-[380px] object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <div className="text-xs font-bold uppercase tracking-wider opacity-90">Graduation 2025</div>
              <div className="text-2xl font-bold mt-1">From classroom to career</div>
            </div>
          </div>
          <div>
            <div className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Academy Programs</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">UGC-recognized degrees through <span className="bg-clip-text text-transparent hero-gradient">distance learning</span></h2>
            <p className="mt-4 text-muted-foreground text-base md:text-lg">
              Earn a real degree while working — our distance-learning partnerships let you study from anywhere with full faculty support, study materials, and exam prep. Whether you're starting your career or upgrading your qualifications, there's a program built for you.
            </p>
            <ul className="mt-6 space-y-2">
              {["UGC-DEB recognized universities", "Study material + recorded lectures", "Weekend doubt-clearing sessions", "Flexible weekend & evening batches"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm text-foreground/80">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> {t}
                </li>
              ))}
            </ul>
            <button onClick={onApply} className="mt-6 rounded-full hero-gradient px-6 py-3 text-sm font-semibold text-primary-foreground hover:scale-[1.04] transition-transform soft-shadow">
              Apply for Academy Program
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {degrees.map((d) => (
            <button key={d.name} onClick={onApply} className="text-left group rounded-2xl bg-card border border-border p-5 hover:border-primary/50 hover:-translate-y-1 hover:soft-shadow transition-all">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:hero-gradient group-hover:text-primary-foreground transition-all">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <span className="text-[11px] font-semibold text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">{d.dur}</span>
              </div>
              <div className="mt-4 font-bold text-foreground" dangerouslySetInnerHTML={{ __html: d.name }} />
              <div className="text-xs text-muted-foreground mt-1" dangerouslySetInnerHTML={{ __html: d.full }} />
              <div className="mt-3 text-xs font-semibold text-primary inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Enroll now <ArrowRight className="h-3 w-3" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- PARAMEDICAL ----------------------------- */
export function Paramedical({ onApply = openAdmission }: { onApply?: () => void } = {}) {
  const courses = [
    { name: "ANM", full: "Auxiliary Nursing &amp; Midwifery", dur: "2 Years", icon: HeartPulse },
    { name: "GNM", full: "General Nursing &amp; Midwifery", dur: "3.5 Years", icon: Stethoscope },
    { name: "BSC Nursing", full: "Bachelor of Science in Nursing", dur: "4 Years", icon: Stethoscope },
    { name: "Post BSC Nursing", full: "Post Basic BSc Nursing", dur: "2 Years", icon: HeartPulse },
    { name: "DMLT", full: "Diploma in Medical Lab Technology", dur: "2 Years", icon: Microscope },
    { name: "X-Ray Tech", full: "Diploma in Radiography", dur: "2 Years", icon: Microscope },
  ];
  return (
    <section id="paramedical" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center mb-12">
          <div>
            <div className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Paramedical Courses</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">Build a career in <span className="bg-clip-text text-transparent hero-gradient">healthcare</span></h2>
            <p className="mt-4 text-muted-foreground text-base md:text-lg">
              India's healthcare sector is one of the fastest-growing job markets. Our paramedical courses combine theoretical foundations with hands-on clinical training so you graduate ready to serve in hospitals, clinics, and diagnostic centers.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {[
                "Hands-on clinical training",
                "Hospital internship placement",
                "Government-recognized certificates",
                "Job assistance after completion",
              ].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-foreground/80">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> {t}
                </div>
              ))}
            </div>
            <button onClick={onApply} className="mt-6 rounded-full hero-gradient px-6 py-3 text-sm font-semibold text-primary-foreground hover:scale-[1.04] transition-transform soft-shadow">
              Apply for Paramedical
            </button>
          </div>
          <div className="relative group overflow-hidden rounded-3xl soft-shadow">
            <img src={paramedImg} alt="Paramedical training lab" width={1280} height={896} loading="lazy" className="w-full h-[420px] object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-50 group-hover:opacity-80 transition-opacity" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((c) => {
            const Icon = c.icon;
            return (
              <button key={c.name} onClick={onApply} className="text-left group rounded-2xl bg-card border border-border p-6 hover:border-primary/50 hover:-translate-y-1 hover:soft-shadow transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:hero-gradient group-hover:text-primary-foreground transition-all">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <h3 className="font-bold text-foreground" dangerouslySetInnerHTML={{ __html: c.name }} />
                  <span className="text-[11px] font-semibold text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">{c.dur}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1" dangerouslySetInnerHTML={{ __html: c.full }} />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- EXPERIENCE ----------------------------- */
export function Experience() {
  const items = [
    { icon: Award, t: "Expert Faculty", d: "Industry-experienced trainers who care about every student's progress." },
    { icon: BookOpenCheck, t: "Practical Training", d: "Hands-on labs, real projects, and live problem solving." },
    { icon: Briefcase, t: "Career-Oriented Learning", d: "Curriculum aligned with current job-market demands." },
    { icon: Headset, t: "Job Support", d: "Resume building, interview prep, and placement assistance." },
    { icon: GraduationCap, t: "Skill Development", d: "Soft skills, communication, and technical mastery." },
    { icon: ShieldCheck, t: "Trusted Since 2005", d: "21+ years of consistent results and student success stories." },
    { icon: Globe2, t: "Distance Learning", d: "Study from anywhere with full faculty support and materials." },
    { icon: Calendar, t: "Flexible Batches", d: "Morning, evening, and weekend timings that fit your life." },
  ];
  const milestones = [
    { y: "2005", t: "Academy founded with a single computer lab" },
    { y: "2013", t: "Crossed 1,000 enrolled students" },
    { y: "2017", t: "Launched paramedical division" },
    { y: "2020", t: "Started online &amp; distance-learning programs" },
    { y: "2024", t: "Crossed 10,000+ alumni network" },
    { y: "2026", t: "21+ years strong &amp; growing every day" },
  ];
  return (
    <section id="experience" className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-start mb-16">
          <div className="lg:sticky lg:top-24">
            <div className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Our Experience</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              <span className="bg-clip-text text-transparent hero-gradient">21+ Years</span> of shaping careers
            </h2>
            <p className="mt-4 text-muted-foreground">
              Since 2005, SK Institute has helped students master computers, complete distance-learning degrees, and step into paramedical careers — with steady mentorship at every stage.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl hero-gradient p-6 text-primary-foreground soft-shadow">
                <Clock className="h-6 w-6 mb-2 opacity-90" />
                <div className="text-3xl font-bold">21+</div>
                <div className="text-xs opacity-90 mt-1">Years Teaching</div>
              </div>
              <div className="rounded-2xl bg-card border border-border p-6">
                <Users className="h-6 w-6 mb-2 text-primary" />
                <div className="text-3xl font-bold text-foreground">10k+</div>
                <div className="text-xs text-muted-foreground mt-1">Students Trained</div>
              </div>
              <div className="rounded-2xl bg-card border border-border p-6">
                <Trophy className="h-6 w-6 mb-2 text-primary" />
                <div className="text-3xl font-bold text-foreground">98%</div>
                <div className="text-xs text-muted-foreground mt-1">Pass Rate</div>
              </div>
              <div className="rounded-2xl bg-card border border-border p-6">
                <Building2 className="h-6 w-6 mb-2 text-primary" />
                <div className="text-3xl font-bold text-foreground">3</div>
                <div className="text-xs text-muted-foreground mt-1">Divisions</div>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {items.map((it) => {
              const Icon = it.icon;
              return (
                <div key={it.t} className="group rounded-2xl bg-card border border-border p-6 hover:border-primary/40 hover:-translate-y-1 hover:soft-shadow transition-all">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:hero-gradient group-hover:text-primary-foreground transition-all">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-bold text-foreground">{it.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{it.d}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Our journey so far</h3>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
            <div className="space-y-6">
              {milestones.map((m, i) => (
                <div key={m.y} className={`md:grid md:grid-cols-2 md:gap-8 items-center ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}>
                  <div className={`rounded-2xl bg-card border border-border p-5 hover:soft-shadow hover:border-primary/40 transition-all ${i % 2 === 0 ? "md:text-right" : ""}`}>
                    <div className="text-2xl font-bold bg-clip-text text-transparent hero-gradient">{m.y}</div>
                    <div className="text-sm text-foreground/80 mt-1" dangerouslySetInnerHTML={{ __html: m.t }} />
                  </div>
                  <div />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- ABOUT ----------------------------- */
export function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl soft-shadow group">
              <img src={campusImg} alt="SK Institute campus" width={1536} height={1024} loading="lazy" className="w-full h-[460px] object-cover transition-transform duration-[1200ms] group-hover:scale-100" />
            </div>
            <div className="absolute -bottom-6 -right-4 md:-right-8 rounded-2xl bg-card border border-border p-5 soft-shadow w-48">
              <div className="text-xs uppercase tracking-wider text-muted-foreground font-bold">Founded</div>
              <div className="text-3xl font-bold bg-clip-text text-transparent hero-gradient">2005</div>
              <div className="text-xs text-foreground/70 mt-1">Trusted by 10,000+ students</div>
            </div>
          </div>

          <div>
            <div className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">About Us</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">A Legacy of Quality Education & Success</h2>
            <p className="mt-5 text-muted-foreground text-base md:text-lg">
              SK Institute is a premier institute offering computer courses, academy programs, and paramedical training. For 21 years, we've focused on practical skills, modern curriculum, and personalized mentorship that prepares students for real-world success.
            </p>
            <p className="mt-3 text-muted-foreground">
              Our philosophy is simple — every student deserves an affordable, high-quality, career-focused education. From a first-time computer learner to a working professional pursuing an MBA, we meet you where you are and walk with you to where you want to be.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {[
                { icon: Target, t: "Mission", d: "Empower every student with skills that change lives and careers." },
                { icon: Sparkles, t: "Vision", d: "Be the most trusted institute for affordable, career-focused education." },
                { icon: ShieldCheck, t: "Values", d: "Discipline, integrity, and student-first support — always." },
              ].map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.t} className="rounded-2xl bg-card border border-border p-5 hover:border-primary/40 hover:-translate-y-1 hover:soft-shadow transition-all">
                    <Icon className="h-5 w-5 text-primary" />
                    <h3 className="mt-3 font-bold text-foreground">{v.t}</h3>
                    <p className="mt-2 text-xs text-muted-foreground">{v.d}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- WHY CHOOSE ----------------------------- */
export function WhyChoose() {
  const points = [
    { t: "Experienced Trainers", d: "Faculty with years of teaching and industry exposure across IT, business, and healthcare." },
    { t: "Practical Classes", d: "Lab-based learning with real assignments, capstone projects, and live problem solving." },
    { t: "Flexible Learning", d: "Morning, evening, weekend, and distance options — pick what works for you." },
    { t: "Updated Syllabus", d: "Curriculum refreshed every year to match industry trends and certifications." },
    { t: "Career Guidance", d: "1-on-1 counseling sessions to chart your career path from day one." },
    { t: "Placement Support", d: "Active network of hiring partners, resume workshops, and mock interviews." },
    { t: "Affordable Fees", d: "Transparent pricing with easy EMI options — no hidden charges, ever." },
    { t: "Modern Infrastructure", d: "Bright, air-conditioned classrooms and well-equipped labs." },
    { t: "Certified Programs", d: "Government-recognized and UGC-DEB-approved degrees and diplomas." },
  ];
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Why Choose Us</div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">The advantage of learning with us</h2>
          <p className="mt-4 text-muted-foreground">Nine reasons our students keep referring their friends and family.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {points.map((p, i) => (
            <div key={p.t} className="group rounded-2xl bg-card border border-border p-6 hover:soft-shadow hover:border-primary/40 hover:-translate-y-1 transition-all">
              <div className="text-4xl font-bold bg-clip-text text-transparent hero-gradient">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-3 font-bold text-foreground">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- GALLERY ----------------------------- */
export function Gallery() {
  const imgs = [
    { src: studentsImg, alt: "Students in computer lab", w: 1280, h: 896, span: "md:row-span-2" },
    { src: campusImg, alt: "Campus", w: 1536, h: 1024, span: "" },
    { src: paramedImg, alt: "Paramedical lab", w: 1280, h: 896, span: "" },
    { src: academyImg, alt: "Graduation", w: 1280, h: 896, span: "md:col-span-2" },
  ];
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Campus Life</div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Where learning meets community</h2>
        </div>
        <div className="grid md:grid-cols-3 md:grid-rows-2 gap-4 md:h-[520px]">
          {imgs.map((im, i) => (
            <div key={i} className={`relative group overflow-hidden rounded-2xl soft-shadow ${im.span}`}>
              <img src={im.src} alt={im.alt} width={im.w} height={im.h} loading="lazy" className="w-full h-full min-h-[200px] object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/0 to-foreground/0 opacity-60 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-3 left-4 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                {im.alt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- TESTIMONIALS ----------------------------- */
export function Testimonials() {
  const reviews = [
    { n: "Priya Sharma", c: "BCA Graduate", q: "The faculty made coding actually click for me. I landed a developer job 3 months after graduating." },
    { n: "Rahul Verma", c: "Digital Marketing", q: "Practical projects on real client briefs — I started freelancing before the course even ended." },
    { n: "Anjali Singh", c: "GNM Nursing", q: "Hands-on clinical training gave me confidence. I'm now working at a city hospital." },
    { n: "Vikram Patel", c: "MBA Distance", q: "Studying while working felt impossible until I joined. The flexible timings saved my career." },
    { n: "Neha Gupta", c: "Advanced Excel", q: "My manager noticed the difference in week one. Got a raise the next quarter." },
    { n: "Arjun Mehta", c: "Tally + Accounting", q: "Affordable, structured, and the placement team genuinely cares. Highly recommend." },
  ];
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-secondary/30 to-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Testimonials</div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Loved by our students</h2>
          <p className="mt-4 text-muted-foreground">Real stories from real graduates.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div key={r.n} className="rounded-2xl bg-card border border-border p-6 hover:-translate-y-1 hover:soft-shadow hover:border-primary/40 transition-all">
              <div className="flex gap-0.5 text-accent-orange">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-3 text-sm text-foreground/85 leading-relaxed">&ldquo;{r.q}&rdquo;</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full hero-gradient flex items-center justify-center text-primary-foreground font-bold">
                  {r.n.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">{r.n}</div>
                  <div className="text-xs text-muted-foreground">{r.c}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- FAQ ----------------------------- */
export function FAQ() {
  const qs = [
    { q: "What is the admission process?", a: "Fill the admission form online or visit our campus. Our team will call you, explain course details, fees, and timing, and guide you through document submission." },
    { q: "Do you offer EMI on course fees?", a: "Yes — most full-length courses and degree programs are available on easy monthly EMI options with no hidden charges." },
    { q: "Are the degrees UGC-recognized?", a: "All our distance-learning academy programs are offered through UGC-DEB recognized university partners. Certificates are valid for jobs and higher studies." },
    { q: "Will I get placement support?", a: "Yes. We run resume workshops, mock interviews, and connect you with our hiring partner network. Placement assistance is included with all professional programs." },
    { q: "Can I attend classes on weekends only?", a: "Absolutely. We have dedicated weekend batches for working professionals across most computer and academy programs." },
    { q: "Do you provide a certificate?", a: "Every completed course comes with a recognized certificate from the academy or partner university." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">FAQ</div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Frequently asked questions</h2>
        </div>
        <div className="space-y-3">
          {qs.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q} className="rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/40 transition-colors">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="font-semibold text-foreground">{it.q}</span>
                  <ChevronDown className={`h-5 w-5 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-muted-foreground animate-fade-in">{it.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- CTA ----------------------------- */
export function CTA({ onApply = openAdmission }: { onApply?: () => void } = {}) {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl hero-gradient p-10 md:p-16 text-center text-primary-foreground soft-shadow">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="relative">
            <div className="text-xs font-bold uppercase tracking-[0.25em] opacity-90">Admissions Open</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">Your career begins with one step.</h2>
            <p className="mt-4 text-base md:text-lg opacity-90 max-w-2xl mx-auto">
              Join 10,000+ students who chose SK Institute. Apply today and get a free counseling session with our admissions team.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 justify-center">
              <button onClick={onApply} className="rounded-full bg-card text-primary px-7 py-3.5 text-sm font-semibold hover:scale-[1.04] transition-transform shadow-xl">
                Apply Now
              </button>
              <a href={`tel:${PHONE_NUMBER}`} className="rounded-full bg-white/15 border border-white/30 px-7 py-3.5 text-sm font-semibold backdrop-blur hover:bg-white/25 transition">
                <Phone className="h-4 w-4 inline mr-2" /> {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- CONTACT ----------------------------- */
export function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Contact Us</div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Visit, call, or message us</h2>
          <p className="mt-4 text-muted-foreground">We'd love to help you choose the right course. Reach out — we usually respond within an hour.</p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-6">
          <div className="space-y-4">
            {[
              { icon: Phone, t: "Phone", d: PHONE_DISPLAY, sub: "Mon–Sat, 9 AM – 7 PM", href: `tel:${PHONE_NUMBER}` },
              { icon: MessageCircle, t: "WhatsApp", d: PHONE_DISPLAY, sub: "Quickest response", href: whatsappChatUrl() },
              { icon: Mail, t: "Email", d: CONTACT_EMAIL, sub: "Reply within 24h", href: `mailto:${CONTACT_EMAIL}` },
              { icon: MapPin, t: "Address", d: "SK Institute", sub: MAP_QUERY },
            ].map((c) => {
              const Icon = c.icon;
              const Inner = (
                <div className="flex items-start gap-4 rounded-2xl bg-card border border-border p-5 hover:border-primary/40 hover:soft-shadow hover:-translate-y-1 transition-all">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl hero-gradient text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{c.t}</div>
                    <div className="font-semibold text-foreground mt-0.5">{c.d}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{c.sub}</div>
                  </div>
                </div>
              );
              return c.href ? (
                <a key={c.t} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block">
                  {Inner}
                </a>
              ) : (
                <div key={c.t}>{Inner}</div>
              );
            })}

            <div className="rounded-2xl bg-card border border-border p-5">
              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Office Hours</div>
              <div className="text-sm text-foreground/80 space-y-1">
                <div className="flex justify-between"><span>Monday – Saturday</span><span className="font-semibold">9:00 AM – 7:00 PM</span></div>
                <div className="flex justify-between"><span>Sunday</span><span className="font-semibold">10:00 AM – 2:00 PM</span></div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-border soft-shadow min-h-[500px]">
            <iframe
              title="SK Institute location"
              src={MAP_EMBED_URL}
              className="h-full w-full min-h-[500px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- FOOTER ----------------------------- */
export function Footer() {
  const { t } = useT();
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2.5">
            <img src={logoUrl} alt="SK Institute logo" className="h-12 w-12 rounded-lg bg-white p-1 object-contain" width={48} height={48} />
            <div>
              <div className="font-display font-bold">SK Institute</div>
              <div className="text-[11px] text-background/60">{t("footer.established")}</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-background/70">{t("footer.tagline")}</p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-background/10 hover:bg-primary hover:scale-110 transition-all">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="font-bold mb-4">{t("footer.quickLinks")}</div>
          <ul className="space-y-2 text-sm text-background/70">
            {[
              { l: t("nav.home"), to: "/" },
              { l: t("nav.courses"), to: "/courses" },
              { l: t("nav.academy"), to: "/academy-programs" },
              { l: t("nav.paramedical"), to: "/paramedical" },
              { l: t("nav.about"), to: "/about" },
              { l: t("nav.experience"), to: "/experience" },
              { l: t("nav.contact"), to: "/contact" },
            ].map((l) => (
              <li key={l.to}><Link to={l.to} className="hover:text-background hover:translate-x-1 inline-block transition-all">{l.l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-bold mb-4">{t("footer.programs")}</div>
          <ul className="space-y-2 text-sm text-background/70">
            {[
              { l: "BCA", to: "/courses/bca" },
              { l: "Python Programming", to: "/courses/python" },
              { l: "Digital Marketing", to: "/courses/digital-marketing" },
              { l: "Tally Prime", to: "/courses/tally" },
              { l: "Spoken English", to: "/academy-programs/spoken-english" },
              { l: "DMLT", to: "/paramedical/dmlt" },
              { l: "X-Ray Technician", to: "/paramedical/x-ray-technician" },
            ].map((l) => (
              <li key={l.l}><Link to={l.to} className="hover:text-background hover:translate-x-1 inline-block transition-all">{l.l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-bold mb-4">{t("footer.contact")}</div>
          <ul className="space-y-2 text-sm text-background/70">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-[var(--gold)]" /> <a href={`tel:${PHONE_NUMBER}`} className="hover:text-background">{PHONE_DISPLAY}</a></li>
            <li className="flex items-start gap-2"><MessageCircle className="h-4 w-4 mt-0.5 text-[var(--gold)]" /> <a href={whatsappChatUrl()} target="_blank" rel="noreferrer" className="hover:text-background">{PHONE_DISPLAY}</a></li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-[var(--gold)]" /> <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-background">{CONTACT_EMAIL}</a></li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-[var(--gold)]" /> A-818, New Delhi, India 110083</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-5 flex flex-col md:flex-row gap-3 justify-between items-center text-xs text-background/60">
          <div>© {new Date().getFullYear()} SK Institute. {t("footer.rights")}</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-background transition">Privacy Policy</a>
            <a href="#" className="hover:text-background transition">Terms of Service</a>
            <a href="#" className="hover:text-background transition">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ----------------------------- FLOATING WHATSAPP ----------------------------- */
export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappChatUrl()}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-2xl hover:scale-110 transition-transform"
      aria-label="WhatsApp chat"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-20" />
    </a>
  );
}
