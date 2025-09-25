import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { Github, Linkedin, Mail, ExternalLink, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-muted/20 mt-auto">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-12">
          {/* Personal Info */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-bold text-xl">{siteConfig.name}</h3>
            <p className="text-muted-foreground max-w-md">
              {siteConfig.role} at {siteConfig.university}. Passionate about coding, creativity, and making positive impact through technology.
            </p>
            <div className="text-sm text-muted-foreground">
              <p> {siteConfig.location}</p>
              <p> {siteConfig.email}</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="flex flex-col space-y-3 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About Me
              </Link>
              <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                My Projects
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Get In Touch
              </Link>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="space-y-3">
            <h4 className="font-medium">Connect</h4>
            <div className="flex space-x-3">
              {siteConfig.links.github && (
                <a 
                  href={siteConfig.links.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              )}
              {siteConfig.links.linkedin && (
                <a 
                  href={siteConfig.links.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
              {siteConfig.links.devpost && (
                <a 
                  href={siteConfig.links.devpost} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Devpost"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              )}
              {siteConfig.links.instagram && (
                <a 
                  href={siteConfig.links.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
              <a 
                href={`mailto:${siteConfig.email}`}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p className="flex items-center gap-1">
              © {currentYear} {siteConfig.name}. Built using Next.js & TypeScript.
            </p>
            <p className="text-xs">
              Last updated: September 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
