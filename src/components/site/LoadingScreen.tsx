import { useEffect, useState } from "react";
import { logoUrl } from "./Logo";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background animate-fade-in">
      <img
        src={logoUrl}
        alt="SK Institute"
        className="h-28 w-28 object-contain animate-pulse"
        width={112}
        height={112}
      />
      <div className="mt-6 h-1 w-40 overflow-hidden rounded-full bg-secondary">
        <div className="h-full w-1/2 hero-gradient animate-[loadbar_1s_ease-in-out_infinite]" />
      </div>
      <p className="mt-4 text-sm font-medium text-muted-foreground">
        SK Institute · Learn • Grow • Succeed
      </p>
    </div>
  );
}
