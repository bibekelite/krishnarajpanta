import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, TrendingUp, BookOpen, Users } from 'lucide-react';
import { publicationsData } from '@/data/publications';
import { expertiseData } from '@/data/expertise';

export default function Home() {
  const featuredPublications = publicationsData.slice(0, 3);
  const featuredExpertise = expertiseData.slice(0, 4);

  return (
    <div>
      {/* Hero Section with Background Media */}
      <section className="relative min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center overflow-hidden">
        {/* Background Media Container - Add your video or GIF here */}
        <div className="absolute inset-0 -z-10">
          {/* Video Background Example (uncomment to use):
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Crect fill='%23f5f5f5' width='1920' height='1080'/%3E%3C/svg%3E"
          >
            <source src="/assets/background-video.mp4" type="video/mp4" />
            <source src="/assets/background-video.webm" type="video/webm" />
          </video>
          */}
          {/* GIF Background Example (uncomment to use): */}
          <img
            src="/assets/background.gif"
            alt="Background"
            className="w-full h-full object-cover"
          />
         
          {/* Fallback gradient if no video/GIF */}
          <div className="w-full h-full bg-gradient-to-b from-primary/10 via-transparent to-transparent"></div>
        </div>

        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/20 -z-10"></div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          {/* <div className="mb-8">
            <img src="/assets/signlogo.png" alt="Dr. Krishna Raj Panta Signature" className="h-20 mx-auto mb-6 object-contain filter drop-shadow-lg" />
          </div> */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4 text-balance drop-shadow-lg">
            Dr. Krishna Raj Panta, Ph.D
          </h1>
          {/* <p className="text-xl sm:text-2xl text-primary font-semibold mb-2 drop-shadow-lg">
            Development Economist | Policy Expert | Public Finance Specialist
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 drop-shadow-lg">
            Dedicated to advancing development economics, public policy, and institutional governance with focus on poverty reduction, fiscal federalism, and community empowerment.
          </p> */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/about">
                View Profile
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/research">
                Research & Publications
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Expertise Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Key Areas of Expertise</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Comprehensive experience across development economics, public policy, and institutional governance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredExpertise.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.id} className="hover:shadow-lg transition-shadow hover:border-primary/50">
                  <CardHeader>
                    <Icon className="w-10 h-10 text-primary mb-3" />
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/expertise">
                View All Expertise Areas
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Professional Experience</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            20+ years of experience in development economics, policy research, and institutional development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  <CardTitle className="text-lg">Government Roles</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Senior economist at Ministry of Finance driving fiscal policy and federalism implementation.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <BookOpen className="w-6 h-6 text-primary" />
                  <CardTitle className="text-lg">Research Leadership</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Research fellow conducting development economics research and publishing peer-reviewed work.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-6 h-6 text-primary" />
                  <CardTitle className="text-lg">Community Work</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Leading community development initiatives with focus on participatory planning and empowerment.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <Button asChild variant="outline">
              <Link href="/experience">
                View Full Experience
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Publications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Featured Publications</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Latest research and policy papers on development economics and public governance.
          </p>
          <div className="space-y-4 mb-8">
            {featuredPublications.map((pub) => (
              <Card key={pub.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{pub.title}</CardTitle>
                  <CardDescription>{pub.authors}</CardDescription>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-muted-foreground">{pub.journal} • {pub.year}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{pub.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline">
              <Link href="/research">
                View All Publications
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Contact Banner */}
      <section className="bg-primary text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg opacity-90 mb-8">
            Interested in collaboration, consulting, or research partnerships? Reach out to discuss your development economics needs.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">
              Contact Me
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
