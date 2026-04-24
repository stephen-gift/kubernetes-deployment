"use client";
import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { NavItem } from "@/types";
import { Container } from "../Container";

interface MobileNavProps {
  closeMenu?: () => void;
}

interface MobileNavItemProps extends NavItem {
  closeMenu?: () => void;
}

export function MobileNav({ closeMenu }: MobileNavProps) {
  return (
    <div className="fixed inset-0 top-24 z-50 bg-background/80 backdrop-blur-sm lg:hidden">
      <div className="fixed left-0 top-24 h-[calc(100vh-6rem)] w-full border-r bg-background shadow-lg">
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-auto py-6">
            <Container>
              <nav className="flex flex-col space-y-1">
                {NAV_ITEMS.map((navItem) => (
                  <MobileNavItem
                    key={navItem.label}
                    {...navItem}
                    closeMenu={closeMenu}
                  />
                ))}
              </nav>
            </Container>
          </div>

          {/* CTA Button at bottom */}
          <div className="border-t p-4">
            <Button
              asChild
              className="w-full h-12 text-base font-medium"
              size="lg"
            >
              <Link href="/get-loan" onClick={closeMenu}>
                Get an Instant Loan
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileNavItem({
  label,
  children,
  href,
  closeMenu
}: MobileNavItemProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-border/40">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex items-center justify-between py-4">
          <Link
            href={href ?? "#"}
            className="flex-1 text-base font-medium text-foreground hover:text-primary transition-colors"
            onClick={children ? undefined : closeMenu}
          >
            {label}
          </Link>

          {children && (
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </Button>
            </CollapsibleTrigger>
          )}
        </div>

        {children && (
          <CollapsibleContent className="pb-4">
            <div className="border-t border-border/20 pt-4">
              <div className="flex flex-col space-y-3">
                {children.map((child) => (
                  <Link
                    key={child.label}
                    href={child.href}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                    onClick={closeMenu}
                    target={child.targetBlank ? "_blank" : undefined}
                    rel={child.targetBlank ? "noopener noreferrer" : undefined}
                  >
                    {child.icon && (
                      <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                        <child.icon className="w-full h-full" />
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-foreground leading-5">
                        {child.label}
                      </div>
                      {child.subLabel && (
                        <div className="text-xs text-muted-foreground mt-1 leading-4">
                          {child.subLabel}
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </CollapsibleContent>
        )}
      </Collapsible>
    </div>
  );
}
