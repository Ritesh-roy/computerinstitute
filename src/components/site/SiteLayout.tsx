import { useEffect, useState } from "react";
import { Outlet, useRouterState } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "./Navbar";
import { Footer, FloatingWhatsApp } from "./Sections";
import { AdmissionForm } from "./AdmissionForm";
import { LoadingScreen } from "./LoadingScreen";
import { ADMISSION_EVENT } from "@/lib/admission-modal";

export function SiteLayout() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Global admission modal listener
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener(ADMISSION_EVENT, handler);
    return () => window.removeEventListener(ADMISSION_EVENT, handler);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <LoadingScreen />
      <Toaster position="top-center" richColors />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <AdmissionForm open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
