import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { MessageCircle, Send } from "lucide-react";
import { courses } from "@/data/courses";
import { contactWhatsappUrl } from "@/lib/whatsapp";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().regex(/^[0-9+\-\s]{7,15}$/, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email").max(255),
  course: z.string().trim().min(1, "Please select a course"),
  message: z.string().trim().min(2, "Please enter a message").max(1000),
});

export function ContactForm() {
  const [data, setData] = useState({ name: "", phone: "", email: "", course: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    const url = contactWhatsappUrl(parsed.data);
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp with your inquiry…");
    setTimeout(() => {
      setSubmitting(false);
      setData({ name: "", phone: "", email: "", course: "", message: "" });
    }, 600);
  };

  const inputCls =
    "w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition";

  return (
    <form onSubmit={submit} className="rounded-2xl bg-card border border-border p-6 soft-shadow flex flex-col gap-3">
      <div>
        <div className="text-xs font-bold uppercase tracking-wider text-primary">Send us a message</div>
        <h3 className="text-xl font-bold text-foreground mt-1">Quick Inquiry</h3>
        <p className="text-xs text-muted-foreground mt-1">Fill the form and send your details directly to our WhatsApp.</p>
      </div>

      <input className={inputCls} placeholder="Full Name" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} maxLength={80} />
      <input className={inputCls} placeholder="Phone Number" value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} maxLength={15} />
      <input type="email" className={inputCls} placeholder="Email Address" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} maxLength={255} />
      <select className={inputCls} value={data.course} onChange={(e) => setData({ ...data, course: e.target.value })}>
        <option value="">Course Interested In</option>
        {courses.map((c) => (
          <option key={c.id} value={c.title}>{c.title}</option>
        ))}
      </select>
      <textarea className={`${inputCls} min-h-[110px] resize-y`} placeholder="Your Message" value={data.message} onChange={(e) => setData({ ...data, message: e.target.value })} maxLength={1000} />

      <div className="mt-2 flex flex-col sm:flex-row gap-3">
        <button
          type="submit"
          disabled={submitting}
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full hero-gradient px-6 py-3 text-sm font-semibold text-primary-foreground hover:scale-[1.02] transition-all soft-shadow disabled:opacity-60"
        >
          <Send className="h-4 w-4" /> {submitting ? "Sending…" : "Submit"}
        </button>
        <button
          type="submit"
          disabled={submitting}
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold text-white hover:opacity-90 hover:scale-[1.02] transition-all disabled:opacity-60"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp Inquiry
        </button>
      </div>
      <p className="text-[11px] text-muted-foreground text-center">Your details are sent securely via WhatsApp. We respond within an hour.</p>
    </form>
  );
}
