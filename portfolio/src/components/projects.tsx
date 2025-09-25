"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/config";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Code, 
  Users, 
  Award, 
  ExternalLink, 
  Github, 
  Trophy, 
  Lightbulb, 
  Target, 
  Search,
  Filter,
  ArrowRight,
  Calendar,
  Star,
  Zap,
  BookOpen,
  Briefcase,
  Palette
} from "lucide-react";

const typeConfig = {
  "Team Project": {
    icon: Users,
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-950",
    borderColor: "border-l-blue-500",
    badgeColor: "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
  },
  "Personal Project": {
    icon: Code,
    color: "text-green-500", 
    bgColor: "bg-green-50 dark:bg-green-950",
    borderColor: "border-l-green-500",
    badgeColor: "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
  },
  "Academic Project": {
    icon: BookOpen,
    color: "text-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-950", 
    borderColor: "border-l-purple-500",
    badgeColor: "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
  },
  "Leadership Project": {
    icon: Briefcase,
    color: "text-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-950",
    borderColor: "border-l-orange-500", 
    badgeColor: "bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300"
  },
  "Creative Project": {
    icon: Palette,
    color: "text-pink-500",
    bgColor: "bg-pink-50 dark:bg-pink-950",
    borderColor: "border-l-pink-500",
    badgeColor: "bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300"
  }
};

export function Projects() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projectTypes = [...new Set(siteConfig.projects.map(p => p.type))];
  
  const filteredProjects = siteConfig.projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    const matchesTab = activeTab === "all" || project.type === activeTab;
    
    return matchesSearch && matchesCategory && matchesTab;
  });

  const categories = [...new Set(siteConfig.projects.map(p => p.category))];

  return (
    <section className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
          <Code className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Projects & Work</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          A showcase of my recent team projects, academic achievements, leadership initiatives, and creative work that demonstrate my passion for technology and community impact.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between max-w-4xl mx-auto">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search projects, technologies, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-background border border-input rounded-md px-3 py-2 text-sm"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Project Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
        <Card className="text-center p-4 hover:shadow-md transition-shadow">
          <div className="flex justify-center mb-2">
            <Trophy className="h-6 w-6 text-primary" />
          </div>
          <p className="text-2xl font-bold text-primary">{siteConfig.projects.length}</p>
          <p className="text-sm text-muted-foreground">Total Projects</p>
        </Card>
        <Card className="text-center p-4 hover:shadow-md transition-shadow">
          <div className="flex justify-center mb-2">
            <Users className="h-6 w-6 text-primary" />
          </div>
          <p className="text-2xl font-bold text-primary">3</p>
          <p className="text-sm text-muted-foreground">Team Projects</p>
        </Card>
        <Card className="text-center p-4 hover:shadow-md transition-shadow">
          <div className="flex justify-center mb-2">
            <Award className="h-6 w-6 text-primary" />
          </div>
          <p className="text-2xl font-bold text-primary">Top 10</p>
          <p className="text-sm text-muted-foreground">Hackathon Result</p>
        </Card>
        <Card className="text-center p-4 hover:shadow-md transition-shadow">
          <div className="flex justify-center mb-2">
            <Target className="h-6 w-6 text-primary" />
          </div>
          <p className="text-2xl font-bold text-primary">100+</p>
          <p className="text-sm text-muted-foreground">People Impacted</p>
        </Card>
      </div>

      {/* Projects Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-8">
          <TabsTrigger value="all" className="flex items-center gap-2">
            <Zap className="h-4 w-4" />
            <span className="hidden sm:inline">All</span>
          </TabsTrigger>
          <TabsTrigger value="Team Project" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span className="hidden sm:inline">Team</span>
          </TabsTrigger>
          <TabsTrigger value="Personal Project" className="flex items-center gap-2">
            <Code className="h-4 w-4" />
            <span className="hidden sm:inline">Personal</span>
          </TabsTrigger>
          <TabsTrigger value="Academic Project" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            <span className="hidden sm:inline">Academic</span>
          </TabsTrigger>
          <TabsTrigger value="Leadership Project" className="flex items-center gap-2">
            <Briefcase className="h-4 w-4" />
            <span className="hidden sm:inline">Leadership</span>
          </TabsTrigger>
          <TabsTrigger value="Creative Project" className="flex items-center gap-2">
            <Palette className="h-4 w-4" />
            <span className="hidden sm:inline">Creative</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-8">
          {filteredProjects.length === 0 ? (
            <Card className="text-center p-8">
              <CardContent>
                <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-semibold mb-2">No projects found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-8 md:grid-cols-2">
              {filteredProjects.map((project, i) => {
                const config = typeConfig[project.type as keyof typeof typeConfig];
                const Icon = config?.icon || Code;
                
                return (
                  <Card 
                    key={i} 
                    className={`group hover:shadow-lg transition-all duration-300 border-l-4 ${config?.borderColor || 'border-l-primary'} hover:scale-[1.02]`}
                  >
                    <CardHeader className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-xl ${config?.bgColor || 'bg-muted'} group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className={`h-6 w-6 ${config?.color || 'text-primary'}`} />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                              {project.title}
                            </CardTitle>
                            <div className="flex flex-wrap items-center gap-2 mb-3">
                              <Badge variant="outline" className={`text-xs ${config?.badgeColor}`}>
                                {project.type}
                              </Badge>
                              <Badge variant="secondary" className="text-xs">
                                <Calendar className="h-3 w-3 mr-1" />
                                {project.year}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {project.category}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        {project.grade && (
                          <div className="text-right">
                            <Badge variant="default" className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 font-bold">
                              <Star className="h-3 w-3 mr-1" />
                              {project.grade}
                            </Badge>
                          </div>
                        )}
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      <CardDescription className="text-base leading-relaxed">
                        {project.description}
                      </CardDescription>
                      
                      {/* Team Info */}
                      {project.collaborators && (
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-muted-foreground">Team Members:</p>
                          <div className="flex flex-wrap gap-1">
                            {project.collaborators.map(member => (
                              <Badge key={member} variant="secondary" className="text-xs">
                                {member}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {project.achievements && (
                        <div className="space-y-3">
                          <h4 className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
                            <Trophy className="h-4 w-4" />
                            Key Achievements
                          </h4>
                          <div className="grid gap-2">
                            {project.achievements.map(achievement => (
                              <div key={achievement} className="flex items-start gap-2 p-2 rounded-lg bg-muted/30">
                                <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {project.impact && (
                        <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                          <p className="text-sm font-semibold text-primary mb-1">Impact:</p>
                          <p className="text-sm">{project.impact}</p>
                        </div>
                      )}
                      
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-muted-foreground">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {(project.technologies || project.tags).map(tech => (
                            <Badge key={tech} variant="secondary" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {project.links && (
                        <div className="flex gap-2 pt-2">
                          {project.links.live && (
                            <Button size="sm" variant="default" asChild>
                              <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-3 w-3 mr-2" />
                                Live Demo
                              </a>
                            </Button>
                          )}
                          {project.links.github && (
                            <Button size="sm" variant="outline" asChild>
                              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                <Github className="h-3 w-3 mr-2" />
                                Source Code
                              </a>
                            </Button>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <Card className="max-w-3xl mx-auto">
          <CardContent className="pt-8">
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold">Have a project idea?</h3>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                I'm always excited to collaborate on innovative projects, participate in hackathons, 
                or contribute to open-source initiatives. Let's build something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="/contact">
                    Let's Collaborate
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="mailto:winleithawdar2005@gmail.com">
                    Email Me Directly
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
