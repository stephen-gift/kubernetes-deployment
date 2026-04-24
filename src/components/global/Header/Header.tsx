"use client";

import React from "react";
import { Container } from "../Container";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { Menu, X } from "lucide-react";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { DesktopNavV2 } from "./DesktopNavV2";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="sticky top-0 z-[99999] backdrop-blur-xl pt-6 pb-2 h-24">
        <div className="flex items-center justify-center h-full">
          <Container className="h-full">
            <div className="flex w-full items-center justify-between gap-2 md:gap-12 rounded-full border-2 px-2 md:px-6 py-2.5 h-full backdrop-blur-xl">
              <h3>Logo</h3>

              <div className="hidden md:flex">
                <DesktopNavV2 />
              </div>

              <div className="flex md:hidden">
                <Toggle
                  aria-label="Menu"
                  pressed={isOpen}
                  onPressedChange={setIsOpen}
                >
                  {isOpen ? (
                    <X className="h-7 w-7" />
                  ) : (
                    <Menu className="h-7 w-7" />
                  )}
                </Toggle>
              </div>
            </div>
          </Container>
        </div>
      </header>

      {isOpen && <MobileNav closeMenu={closeMenu} />}
    </>
  );
};

export default Header;
