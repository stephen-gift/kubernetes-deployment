"use client";
import * as React from "react";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import DesktopSubNav from "./DesktopSubNav";

export function DesktopNav() {
  const [openPopovers, setOpenPopovers] = React.useState<
    Record<string, boolean>
  >({});

  const handlePopoverChange = (label: string, open: boolean) => {
    setOpenPopovers((prev) => ({ ...prev, [label]: open }));
  };

  return (
    <nav className="flex items-center gap-1">
      {NAV_ITEMS.filter((item) => !item.isMobileOnly).map((navItem) => (
        <div key={navItem.label}>
          {navItem.children ? (
            <Popover
              open={openPopovers[navItem.label] || false}
              onOpenChange={(open) => handlePopoverChange(navItem.label, open)}
            >
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-1 h-auto px-4 py-2 font-medium text-sm"
                >
                  {navItem.label}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-[100vw] mt-7 p-0 flex self-center"
                align="center"
                sideOffset={4}
                hideWhenDetached={true}
              >
                <div
                  className="grid gap-6 p-6"
                  style={{
                    gridTemplateColumns: `repeat(${
                      navItem.childrenColumn ?? 3
                    }, minmax(0, 1fr))`
                  }}
                >
                  <div>
                    <div className="text-lg font-semibold">{navItem.label}</div>
                    <p className="text-sm text-muted-foreground mt-2">
                      {navItem.description}
                    </p>
                  </div>
                  {navItem.children.map((child) => (
                    <DesktopSubNav
                      key={child.label}
                      {...child}
                      onNavigate={() =>
                        handlePopoverChange(navItem.label, false)
                      }
                    />
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            <Button
              variant="ghost"
              className="h-auto px-4 py-2 font-medium text-sm"
              asChild
            >
              <Link
                href={navItem.href}
                target={navItem.targetBlank ? "_blank" : undefined}
                rel={navItem.targetBlank ? "noopener noreferrer" : undefined}
              >
                {navItem.label}
              </Link>
            </Button>
          )}
        </div>
      ))}
    </nav>
  );
}
