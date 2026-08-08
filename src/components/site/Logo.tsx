import { Link } from "@tanstack/react-router";

// TODO: Replace with your logo URL
const LOGO_URL = "https://i.pinimg.com/736x/58/4c/59/584c591b6132865df8cb5de30b3633aa.jpg";

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
    <Link to="/" className={`flex min-w-0 items-center gap-2 sm:gap-2.5 ${className}`}>
      <img
        src={LOGO_URL}
        alt="SK Institute logo"
        className={`${imgClassName} shrink-0 rounded-lg object-contain bg-white/95 p-1 shadow-sm`}
        width={44}
        height={44}
      />
      {withText && (
        <div className="min-w-0 leading-tight">
          <div className="truncate font-display font-bold text-sm sm:text-base text-foreground">
            SK Institute
          </div>
          <div className="hidden sm:block truncate text-[11px] text-muted-foreground">
            Computer • Academic • Paramedical
          </div>
        </div>
      )}

    </Link>
  );
}

export const logoUrl = LOGO_URL;
