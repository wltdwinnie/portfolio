import { siteConfig } from "@/lib/config";
import { Github, Linkedin, Mail, ExternalLink, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-muted/30 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Personal Info */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">{siteConfig.name}</h3>
            <p className="text-sm text-muted-foreground">
              {siteConfig.role} at {siteConfig.university}
            </p>
            <p className="text-xs text-muted-foreground">
              {siteConfig.location}
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-medium">Quick Links</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About Me
              </a>
              <a href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                My Projects
              </a>
              <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Get In Touch
              </a>
              <a href={`mailto:${siteConfig.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                Email Me
              </a>
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
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
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
