import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { siteConfig } from "@/lib/config";
import Link from "next/link";
import { 
  MapPin, 
  GraduationCap, 
  ArrowRight, 
  Code, 
  BookOpen, 
  Users,
  Star,
  Download,
  Mail
} from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section - Clean and Simple */}
      <section className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left side - Text content */}
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
                Hi, I'm{" "}
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
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
          </div>
          
          {/* Right side - Profile picture */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl border bg-card p-6 flex items-center justify-center">
              <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-primary/20">
                <AvatarFallback className="text-2xl md:text-3xl font-bold bg-primary text-primary-foreground">
                  {siteConfig.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { icon: BookOpen, value: "93%", label: "Academic Performance" },
            { icon: Star, value: "3x", label: "Volunteer Awards" },
            { icon: Code, value: "6+", label: "Major Projects" },
            { icon: Users, value: "100+", label: "Workshop Participants" },
          ].map((stat, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-3">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
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
