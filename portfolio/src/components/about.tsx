"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Briefcase,
  Users,
  Award,
  Code,
  Globe,
  Calendar,
  MapPin,
  Star,
  CheckCircle,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

export function About() {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About Me</h1>
        <div className="max-w-3xl mx-auto space-y-4">
          <p className="text-xl text-muted-foreground leading-relaxed">
            {siteConfig.about.intro}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {siteConfig.about.mission}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as typeof activeTab)} className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="activities">Activities</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
        </TabsList>

        {/* Education Tab */}
        <TabsContent value="education" className="space-y-6">
          {siteConfig.education.map((edu, i) => (
            <Card key={i} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{edu.institution}</CardTitle>
                      <CardDescription className="text-base font-medium mb-2">
                        {edu.degree}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="text-right space-y-2">
                    <Badge variant={edu.status === "Current" ? "default" : "secondary"}>
                      <Calendar className="h-3 w-3 mr-1" />
                      {edu.period}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {edu.scholarship && (
                    <Badge className="bg-amber-50 dark:bg-amber-950 text-amber-800 dark:text-amber-200 border border-amber-200 dark:border-amber-800">
                      <Award className="h-3 w-3 mr-1" />
                      {edu.scholarship}
                    </Badge>
                  )}
                  {edu.grade && (
                    <Badge className="bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800">
                      <Star className="h-3 w-3 mr-1" />
                      {edu.grade}
                    </Badge>
                  )}
                </div>
                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-muted-foreground">Key Achievements:</p>
                    <div className="flex flex-wrap gap-1">
                      {edu.achievements.map((achievement: string) => (
                        <Badge key={achievement} variant="outline" className="text-xs">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Experience Tab */}
        <TabsContent value="experience" className="space-y-6">
          {siteConfig.experience.map((exp, i) => (
            <Card key={`${exp.role}-${i}`} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{exp.role}</CardTitle>
                      <CardDescription className="text-base font-medium mb-2">
                        {exp.organization} {exp.type && <span className="text-primary">• {exp.type}</span>}
                      </CardDescription>
                      {exp.description && (
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                          {exp.description}
                        </p>
                      )}
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <Badge>
                    <Calendar className="h-3 w-3 mr-1" />
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-muted-foreground">Key Achievements:</p>
                    <div className="grid gap-2">
                      {exp.achievements.map((achievement: string) => (
                        <div key={achievement} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Activities Tab */}
        <TabsContent value="activities" className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            {siteConfig.activities.map((activity, i) => (
              <Card key={`${activity.name}-${i}`} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{activity.name}</CardTitle>
                      <CardDescription className="text-base">
                        {activity.role} • {activity.period}
                      </CardDescription>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
                        <MapPin className="h-3 w-3" />
                        {activity.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {activity.description && (
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {activity.description}
                    </p>
                  )}
                  {activity.skills && activity.skills.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-muted-foreground">Skills Developed:</p>
                      <div className="flex flex-wrap gap-1">
                        {activity.skills.map((skill: string) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Skills Tab */}
        <TabsContent value="skills" className="space-y-8">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Technical Skills */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Code className="h-6 w-6 text-primary" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-sm text-muted-foreground">Programming Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {siteConfig.about.skills.programming.map((skill: string) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-sm text-muted-foreground">Frameworks & Platforms</h4>
                  <div className="flex flex-wrap gap-2">
                    {siteConfig.about.skills.technologies.map((tech: string) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-sm text-muted-foreground">Tools & Software</h4>
                  <div className="flex flex-wrap gap-2">
                    {siteConfig.about.skills.tools.map((tool: string) => (
                      <Badge key={tool} variant="outline">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What I can do + Soft Skills + Languages */}
            <div className="space-y-6">
              {/* What I can do */}
              {siteConfig.about.canDo && siteConfig.about.canDo.length > 0 && (
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle>What I can do</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2">
                      {siteConfig.about.canDo.map((item: string) => (
                        <div key={item} className="flex items-start gap-2 text-sm">
                          <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Soft Skills */}
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle>Soft Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {siteConfig.about.skills.soft.map((skill: string) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Languages */}
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Globe className="h-6 w-6 text-primary" />
                    Languages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {siteConfig.languages.map((lang: any) => (
                      <div key={lang.name} className="space-y-2 p-3 rounded-lg border">
                        <div className="flex justify-between items-center">
                          <h4 className="font-semibold">{lang.name}</h4>
                          <Badge variant="outline">{lang.level}</Badge>
                        </div>
                        {lang.proficiency && (
                          <p className="text-sm text-muted-foreground">{lang.proficiency}</p>
                        )}
                        {lang.breakdown && (
                          <p className="text-xs text-muted-foreground font-medium">
                            {lang.breakdown}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <Card className="max-w-2xl mx-auto">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Interested in collaborating?</h3>
              <p className="text-muted-foreground">
                I&apos;m always excited to work on innovative projects and connect with like-minded individuals.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild>
                  <Link href="/contact">
                    Let's Connect
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/projects">View My Work</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
