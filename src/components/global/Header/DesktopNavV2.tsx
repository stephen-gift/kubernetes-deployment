"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { Container } from "../Container";

export function DesktopNavV2() {
  const pathname = usePathname();
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
                <div
                  onMouseEnter={() => handlePopoverChange(navItem.label, true)}
                  onMouseLeave={() => handlePopoverChange(navItem.label, false)}
                >
                  <Button
                    variant="ghost"
                    className={`flex items-center gap-1 h-auto px-4 py-2 font-medium text-lg rounded-full transition-all duration-200 ${
                      pathname === navItem.href
                        ? "bg-amber-100 text-amber-600 hover:bg-amber-200"
                        : "text-foreground hover:text-amber-600"
                    }`}
                  >
                    {navItem.label}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </div>
              </PopoverTrigger>
              <PopoverContent
                className="w-[100vw] mt-2 p-0 border-0 shadow-xl rounded-lg backdrop-blur-xl"
                align="center"
                sideOffset={8}
                hideWhenDetached={true}
                onMouseEnter={() => handlePopoverChange(navItem.label, true)}
                onMouseLeave={() => handlePopoverChange(navItem.label, false)}
              >
                <Container>
                  <div className="py-10 px-6">
                    <div className="grid grid-cols-4 gap-6">
                      {/* Left column - Description */}
                      <div className="col-span-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {navItem.label}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {navItem.description}
                        </p>
                      </div>

                      {/* Right columns - Navigation items */}
                      <div className="col-span-3">
                        <div
                          className="grid gap-4"
                          style={{
                            gridTemplateColumns: `repeat(${
                              navItem.childrenColumn ?? 3
                            }, minmax(0, 1fr))`
                          }}
                        >
                          {navItem.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="group block p-3 rounded-lg hover:bg-muted/40 transition-all duration-200"
                              onClick={() =>
                                handlePopoverChange(navItem.label, false)
                              }
                              target={child.targetBlank ? "_blank" : undefined}
                              rel={
                                child.targetBlank
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                            >
                              <div className="flex items-start gap-4">
                                {child.icon && (
                                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                                    <child.icon className="w-6 h-6 text-primary" />
                                  </div>
                                )}

                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <h4 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-200 leading-6">
                                        {child.label}
                                      </h4>
                                      {child.subLabel && (
                                        <p className="text-sm text-muted-foreground mt-1 leading-5 max-w-[250px]">
                                          {child.subLabel}
                                        </p>
                                      )}
                                    </div>

                                    {child.subLabel && (
                                      <div className="flex-shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                                        <ChevronDown className="w-4 h-4 text-primary rotate-[-90deg]" />
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Container>
              </PopoverContent>
            </Popover>
          ) : (
            <Button
              variant="ghost"
              className={`h-auto px-4 py-2 font-medium text-lg rounded-full transition-all duration-200 ${
                pathname === navItem.href
                  ? "bg-amber-100 text-amber-600 hover:bg-amber-200"
                  : "text-foreground hover:text-amber-600"
              }`}
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
