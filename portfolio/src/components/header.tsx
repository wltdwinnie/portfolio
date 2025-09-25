"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/lib/config";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-50 w-full border-b glass-subtle">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="font-bold text-xl text-foreground hover:text-primary transition-colors duration-200"
        >
          {siteConfig.name}
        </Link>
        
        {/* Social Links & Theme Toggle */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild className="hover:bg-muted">
            <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          
          <Button variant="ghost" size="icon" asChild className="hover:bg-muted">
            <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          
          <Button variant="ghost" size="icon" asChild className="hover:bg-muted">
            <a href={siteConfig.links.devpost} target="_blank" rel="noopener noreferrer" aria-label="Devpost">
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
          
          <Button variant="ghost" size="icon" asChild className="hover:bg-muted">
            <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
          </Button>
          
          {mounted && (
            <>
              <Separator orientation="vertical" className="h-6 mx-2" />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
                className="hover:bg-muted"
              >
                {theme === "dark" ? 
                  <Sun className="h-4 w-4" /> : 
                  <Moon className="h-4 w-4" />
                }
              </Button>
            </>
          )}
          
          <Button asChild className="ml-2">
            <a href={`mailto:${siteConfig.email}`}>
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
