import { NavItem } from "@/types";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface DesktopSubNavProps extends NavItem {
  onNavigate?: () => void;
}

const DesktopSubNav = ({
  label,
  href,
  subLabel,
  icon: Icon,
  targetBlank,
  onNavigate
}: DesktopSubNavProps) => {
  return (
    <Link
      href={href}
      target={targetBlank ? "_blank" : undefined}
      rel={targetBlank ? "noopener noreferrer" : undefined}
      onClick={onNavigate}
      className="flex items-start gap-3 rounded-md p-3 hover:bg-muted transition-colors group"
    >
      {Icon && (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
          <Icon className="h-5 w-5" />
        </div>
      )}
      <div className="flex flex-col">
        <span className="text-sm font-semibold">{label}</span>
        {subLabel && (
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            {subLabel}
            <ChevronRight className="h-3 w-3 opacity-50 group-hover:opacity-100 transition" />
          </span>
        )}
      </div>
    </Link>
  );
};

export default DesktopSubNav;
