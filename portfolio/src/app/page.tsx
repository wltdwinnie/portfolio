import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import Link from "next/link";
import Image from "next/image";
import { 
  MapPin, 
  GraduationCap, 
  ArrowRight, 
  Code, 
  BookOpen, 
  Users,
  Download,
  Mail
} from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left side */}
          <div className="space-y-8">
            {/* Status Badges */}
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="flex items-center gap-2 px-3 py-1">
                <MapPin className="h-3 w-3" />
                {siteConfig.location}
              </Badge>
              <Badge variant="outline" className="flex items-center gap-2 px-3 py-1">
                <GraduationCap className="h-3 w-3" />
                SMU CS Student
              </Badge>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Hi, I&apos;m{" "}
                <span className="text-primary">
                  {siteConfig.nickname}
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground">
                {siteConfig.role}
              </p>
              <p className="text-lg md:text-xl font-medium text-primary">
                {siteConfig.university}
              </p>
            </div>
            
            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {siteConfig.tagline}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-base px-8 py-3" asChild>
                <Link href="/about">
                  About Me
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8 py-3" asChild>
                <Link href="/projects">
                  <Code className="mr-2 h-5 w-5" />
                  View Projects
                </Link>
              </Button>
              <Button variant="ghost" size="lg" className="text-base px-8 py-3" asChild>
                <Link href="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </Link>
              </Button>
            </div>
            
            {/* Download CV */}
            <div className="pt-2">
              <Button variant="outline" size="sm" asChild>
                <a href="/win-lei-thawdar-cv.pdf" target="_blank">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
          
          {/* Right side - Profile picture */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border bg-card">
              <Image
                src="/win-lei-profile.jpg"
                alt={`${siteConfig.name} - Profile Picture`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick Links Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Explore More
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: BookOpen, 
                title: "About Me", 
                description: "Learn about my education, experience, and journey in technology.",
                href: "/about"
              },
              { 
                icon: Code, 
                title: "Projects", 
                description: "Explore my academic projects, leadership work, and creative endeavors.",
                href: "/projects"
              },
              { 
                icon: Users, 
                title: "Contact", 
                description: "Let's connect and collaborate on exciting projects together.",
                href: "/contact"
              },
            ].map((item, index) => (
              <Card key={index} className="p-8 hover:shadow-md transition-shadow">
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    <item.icon className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                  <Button variant="ghost" className="text-primary hover:bg-muted" asChild>
                    <Link href={item.href}>
                      Learn More →
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
