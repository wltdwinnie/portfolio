"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun, Github, Linkedin, ExternalLink, Instagram, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" }
];

export function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-50 w-full border-b glass-subtle">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="font-bold text-xl text-foreground hover:text-primary transition-colors duration-200"
          >
            {siteConfig.name}
          </Link>
          
          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
          
          {/* Right Side - Social & Theme Toggle */}
          <div className="flex items-center gap-3">
            {/* Desktop Social Links */}
            <div className="hidden md:flex items-center gap-1">
              <Button variant="ghost" size="sm" asChild className="h-8 w-8 p-0">
                <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              
              <Button variant="ghost" size="sm" asChild className="h-8 w-8 p-0">
                <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              
              <Button variant="ghost" size="sm" asChild className="h-8 w-8 p-0">
                <a href={siteConfig.links.devpost} target="_blank" rel="noopener noreferrer" aria-label="Devpost">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              
              <Button variant="ghost" size="sm" asChild className="h-8 w-8 p-0">
                <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
            </div>
            
            {/* Theme Toggle */}
            {mounted && (
              <button
                type="button"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
                className="h-8 w-8 inline-flex items-center justify-center rounded-md border bg-background hover:bg-muted text-foreground transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>
            )}
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden h-8 w-8 p-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-sm font-medium transition-colors ${
                      isActive
                        ? "text-primary font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
            
            {/* Mobile Social Links */}
            <div className="flex items-center gap-2 mt-4 pt-4 border-t">
              <Button variant="ghost" size="sm" asChild className="h-8 w-8 p-0">
                <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              
              <Button variant="ghost" size="sm" asChild className="h-8 w-8 p-0">
                <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              
              <Button variant="ghost" size="sm" asChild className="h-8 w-8 p-0">
                <a href={siteConfig.links.devpost} target="_blank" rel="noopener noreferrer" aria-label="Devpost">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              
              <Button variant="ghost" size="sm" asChild className="h-8 w-8 p-0">
                <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
