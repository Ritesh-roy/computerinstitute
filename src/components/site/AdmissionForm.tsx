import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { X, MessageCircle } from "lucide-react";
import { courses } from "@/data/courses";
import { admissionWhatsappUrl } from "@/lib/whatsapp";
import { useT } from "@/lib/i18n";

const schema = z.object({
  course: z.string().min(1, "Please select a course"),
  name: z.string().trim().min(2, "Enter your name").max(80),
  mobile: z.string().trim().regex(/^[0-9+\-\s]{7,15}$/, "Invalid mobile number"),
  email: z.string().trim().email("Invalid email").max(255),
  city: z.string().trim().min(2, "Enter your city").max(80),
});

export function AdmissionForm({
  variant = "panel",
  open,
  onClose,
  defaultCourse,
}: {
  variant?: "panel" | "inline";
  open?: boolean;
  onClose?: () => void;
  defaultCourse?: string;
}) {
  const { t } = useT();
  const [data, setData] = useState({
    course: defaultCourse ?? "",
    name: "",
    mobile: "",
    email: "",
    city: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    const url = admissionWhatsappUrl(parsed.data);
    // Open WhatsApp with the prefilled lead message.
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp with your details…");
    setTimeout(() => {
      setSubmitting(false);
      setData({ course: "", name: "", mobile: "", email: "", city: "" });
      onClose?.();
    }, 600);
  };

  const inputCls =
    "w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition";

  const formInner = (
    <form onSubmit={submit} className="flex flex-col gap-3">
      <div>
        <label className="text-xs font-semibold text-foreground/70 mb-1 block">{t("admission.selectCourse")}</label>
        <select
          value={data.course}
          onChange={(e) => setData({ ...data, course: e.target.value })}
          className={inputCls}
        >
          <option value="">{t("admission.chooseCourse")}</option>
          {courses.map((c) => (
            <option key={c.id} value={c.title}>{c.title}</option>
          ))}
        </select>
      </div>
      <input className={inputCls} placeholder={t("admission.fullName")} value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} maxLength={80} />
      <input className={inputCls} placeholder={t("admission.mobile")} value={data.mobile} onChange={(e) => setData({ ...data, mobile: e.target.value })} maxLength={15} />
      <input type="email" className={inputCls} placeholder={t("admission.email")} value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} maxLength={255} />
      <input className={inputCls} placeholder={t("admission.city")} value={data.city} onChange={(e) => setData({ ...data, city: e.target.value })} maxLength={80} />
      <button
        type="submit"
        disabled={submitting}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold text-white hover:opacity-90 hover:scale-[1.02] transition-all soft-shadow disabled:opacity-60"
      >
        <MessageCircle className="h-4 w-4" />
        {submitting ? t("admission.submitting") : t("admission.submit")}
      </button>
      <p className="text-[11px] text-muted-foreground text-center">{t("admission.consent")}</p>
    </form>
  );

  if (variant === "inline") {
    return (
      <div className="rounded-2xl bg-card border border-border p-6 soft-shadow">
        <div className="mb-4">
          <div className="text-xs font-bold uppercase tracking-wider text-primary">{t("admission.badge")}</div>
          <h3 className="text-xl font-bold text-foreground mt-1">{t("admission.title")}</h3>
          <p className="text-xs text-muted-foreground mt-1">{t("admission.subtitle")}</p>
        </div>
        {formInner}
      </div>
    );
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-foreground/40 backdrop-blur-sm transition-opacity ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />
      <aside
        className={`fixed right-0 top-0 z-[70] h-full w-full max-w-md bg-card shadow-2xl transition-transform duration-300 overflow-y-auto ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="hero-gradient px-6 py-5 flex items-center justify-between">
          <div className="text-primary-foreground">
            <div className="text-xs uppercase tracking-wider opacity-90">{t("admission.formLabel")}</div>
            <h3 className="text-xl font-bold">{t("admission.heading")}</h3>
          </div>
          <button onClick={onClose} className="text-primary-foreground/90 hover:text-primary-foreground">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-6">{formInner}</div>
      </aside>
    </>
  );
}
