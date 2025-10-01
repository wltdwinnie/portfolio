"use client";

import { useMemo, useState } from "react";
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
} from "lucide-react";

type ProjectType = "Team Project" | "Personal Project";
type Domain = "all" | "Tech" | "Creative" | "Leadership";

const typeConfig = {
  "Team Project": {
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950",
    borderColor: "border-l-blue-500",
    badgeColor: "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300",
  },
  "Personal Project": {
    icon: Code,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-950",
    borderColor: "border-l-emerald-500",
    badgeColor: "bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300",
  },
} as const;

const domainOptions: Exclude<Domain, "all">[] = ["Tech", "Creative", "Leadership"];

export function Projects() {
  const [activeTab, setActiveTab] = useState<"all" | ProjectType>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDomain, setSelectedDomain] = useState<Domain>("all");

  const totalProjects = siteConfig.projects.length;
  const teamProjects = siteConfig.projects.filter((p) => p.type === "Team Project").length;
  const hasTop10 = siteConfig.projects.some((p) => (p.achievements || []).some((a: string) => a.toLowerCase().includes("top 10")));

  const projectsToRender = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    return [...siteConfig.projects]
      .filter((project) => {
        const cats: string[] = project.categories || [];
        const matchesSearch =
          q.length === 0 ||
          project.title.toLowerCase().includes(q) ||
          project.description.toLowerCase().includes(q) ||
          (project.tags || []).some((tag: string) => tag.toLowerCase().includes(q));
        const matchesType = activeTab === "all" || project.type === activeTab;
        const matchesDomain = selectedDomain === "all" || cats.includes(selectedDomain);
        return matchesSearch && matchesType && matchesDomain;
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [activeTab, searchTerm, selectedDomain]);

  return (
    <section className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
          <Code className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Projects & Work</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          A curated list of personal and team work across tech, creative, and leadership domains.
        </p>
      </div>

      {/* Search + Domain Filter */}
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
              value={selectedDomain}
              onChange={(e) => setSelectedDomain(e.target.value as Domain)}
              className="bg-background border border-input rounded-md px-3 py-2 text-sm"
            >
              <option value="all">All Domains</option>
              {domainOptions.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
        <Card className="text-center p-4 hover:shadow-md transition-shadow">
          <div className="flex justify-center mb-2">
            <Trophy className="h-6 w-6 text-primary" />
          </div>
          <p className="text-2xl font-bold text-primary">{totalProjects}</p>
          <p className="text-sm text-muted-foreground">Total Projects</p>
        </Card>
        <Card className="text-center p-4 hover:shadow-md transition-shadow">
          <div className="flex justify-center mb-2">
            <Users className="h-6 w-6 text-primary" />
          </div>
          <p className="text-2xl font-bold text-primary">{teamProjects}</p>
          <p className="text-sm text-muted-foreground">Team Projects</p>
        </Card>
        <Card className="text-center p-4 hover:shadow-md transition-shadow">
          <div className="flex justify-center mb-2">
            <Award className="h-6 w-6 text-primary" />
          </div>
          <p className="text-2xl font-bold text-primary">{hasTop10 ? "Top 10" : "—"}</p>
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

      {/* Tabs by Type */}
      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="Team Project">Team</TabsTrigger>
          <TabsTrigger value="Personal Project">Personal</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-8">
          {projectsToRender.length === 0 ? (
            <Card className="text-center p-8">
              <CardContent>
                <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-semibold mb-2">No projects found</h3>
                <p className="text-muted-foreground">Try adjusting your search or domain filter.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-8 md:grid-cols-2">
              {projectsToRender.map((project, i) => {
                const conf = typeConfig[project.type as keyof typeof typeConfig];
                const Icon = conf?.icon || Code;
                const cats: string[] = project.categories || [];

                return (
                  <Card
                    key={`${project.title}-${i}`}
                    className={`group hover:shadow-lg transition-all duration-300 border-l-4 ${
                      conf?.borderColor || "border-l-primary"
                    } hover:scale-[1.02]`}
                  >
                    <CardHeader className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl ${conf?.bgColor || "bg-muted"} group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={`h-6 w-6 ${conf?.color || "text-primary"}`} />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                            {project.title}
                          </CardTitle>
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            <Badge variant="outline" className={`text-xs ${conf?.badgeColor}`}>{project.type}</Badge>
                            {cats.map((c) => (
                              <Badge key={c} variant="secondary" className="text-xs">
                                {c}
                              </Badge>
                            ))}
                            <Badge variant="outline" className="text-xs">
                              <Calendar className="h-3 w-3 mr-1" />
                              {project.year}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>

                      {project.collaborators && project.collaborators.length > 0 && (
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-muted-foreground">Team Members:</p>
                          <div className="flex flex-wrap gap-1">
                            {project.collaborators.map((m: string) => (
                              <Badge key={m} variant="secondary" className="text-xs">
                                {m}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {project.achievements && project.achievements.length > 0 && (
                        <div className="space-y-3">
                          <h4 className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
                            <Trophy className="h-4 w-4" />
                            Key Achievements
                          </h4>
                          <div className="grid gap-2">
                            {project.achievements.map((a: string) => (
                              <div key={a} className="flex items-start gap-2 p-2 rounded-lg bg-muted/30">
                                <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{a}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {project.highlights && project.highlights.length > 0 && (
                        <div className="space-y-3">
                          <h4 className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
                            <Award className="h-4 w-4" />
                            Highlights
                          </h4>
                          <div className="grid gap-2">
                            {project.highlights.map((h: string) => (
                              <div key={h} className="flex items-start gap-2 p-2 rounded-lg bg-muted/30">
                                <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{h}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {project.tags && project.tags.length > 0 && (
                        <div className="space-y-3">
                          <h4 className="text-sm font-semibold text-muted-foreground">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((t: string) => (
                              <Badge
                                key={t}
                                variant="secondary"
                                className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                              >
                                {t}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {project.links && Object.keys(project.links).length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.links.live && (
                            <Button size="sm" variant="default" asChild>
                              <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-3 w-3 mr-2" />
                                Live Demo
                              </a>
                            </Button>
                          )}
                          {project.links.video && (
                            <Button size="sm" variant="outline" asChild>
                              <a href={project.links.video} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-3 w-3 mr-2" />
                                Demo Video
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
                          {project.links.figma && (
                            <Button size="sm" variant="outline" asChild>
                              <a href={project.links.figma} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-3 w-3 mr-2" />
                                Figma
                              </a>
                            </Button>
                          )}

                          {/* Safe Portfolio button (optional key) */}
                          {"links" in project &&
                            project.links &&
                            "portfolio" in project.links &&
                            typeof (project.links as any).portfolio === "string" && (
                              <Button size="sm" variant="outline" asChild>
                                <a href={(project.links as any).portfolio} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="h-3 w-3 mr-2" />
                                  Portfolio
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
                Always excited to collaborate on impactful products, hackathons, and open-source.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="/contact">
                    Let&apos;s Collaborate
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="mailto:winleithawdar2005@gmail.com">Email Me Directly</a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
