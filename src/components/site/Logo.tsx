import { Link } from "@tanstack/react-router";
import logo from "@/assets/sk-logo.png.asset.json";

export function Logo({
  withText = true,
  className = "",
  imgClassName = "h-11 w-11",
}: {
  withText?: boolean;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <Link to="/" className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={logo.url}
        alt="SK Institute logo"
        className={`${imgClassName} rounded-lg object-contain bg-white/95 p-1 shadow-sm`}
        width={44}
        height={44}
      />
      {withText && (
        <div className="leading-tight">
          <div className="font-display font-bold text-base text-foreground">
            SK Institute
          </div>
          <div className="text-[11px] text-muted-foreground">
            Computer • Academy • Paramedical
          </div>
        </div>
      )}
    </Link>
  );
}

export const logoUrl = logo.url;
