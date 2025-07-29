import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "wouter";
import { GraduationCap, Globe, Code, CheckCircle, Users, Award, BookOpen, TrendingUp } from "lucide-react";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Home() {
  const milestoneRefs = useRef<(HTMLDivElement | null)[]>([]);
  const heroImageRef = useRef<HTMLImageElement>(null);
  const aboutImageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    // Image animations
    gsap.to(heroImageRef.current, {
      y: 20,
      scale: 1.02,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    gsap.to(aboutImageRef.current, {
      y: -15,
      rotation: 2,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Counter animation for milestones
    const animateCounters = () => {
      milestoneRefs.current.forEach((ref, index) => {
        if (!ref) return;

        const targets = [120, 160, 3, 120];
        const target = targets[index];
        let current = 0;
        const increment = target / 60; // 60 frames for 1 second animation
        
        const updateCounter = () => {
          current += increment;
          if (current < target) {
            ref.textContent = Math.floor(current).toString();
            requestAnimationFrame(updateCounter);
          } else {
            ref.textContent = target.toString();
          }
        };
        
        // Start animation when element is in view
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              updateCounter();
              observer.unobserve(entry.target);
            }
          });
        });
        
        observer.observe(ref);
      });
    };

    animateCounters();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fadeInUp">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold vlge-primary mb-6 leading-tight">
                  Transform Your Future with
                  <span className="vlge-secondary block">VLGE Institute</span>
                </h1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Empowering students with quality education, global exposure, and practical skills.
                  Your gateway to international opportunities and technological innovation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/courses">
                    <Button 
                      className="bg-vlge-primary hover:bg-red-600 text-white px-8 py-4 text-lg"
                      data-testid="button-explore-courses"
                    >
                      Explore Courses
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button 
                      variant="outline" 
                      className="border-vlge-secondary text-vlge-secondary hover:bg-vlge-secondary hover:text-white px-8 py-4 text-lg"
                      data-testid="button-book-consultation"
                    >
                      Book Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slideInLeft" delay={0.3}>
              <div>
                <img
                    ref={heroImageRef}
                    src="https://i.postimg.cc/RhtGCcG5/2425515.jpg"
                    alt="Modern university campus with students"
                    className="rounded-2xl shadow-2xl w-full h-auto animate-fade-in-out"
                    data-testid="hero-image"
                    style={{animationDuration: '4s', animationIterationCount: 'infinite'}}
                  />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold vlge-primary mb-4">ABOUT US</h2>
              <div className="w-24 h-1 bg-vlge-primary mx-auto"></div>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <AnimatedSection animation="slideInLeft">
              <div>
                <img
                    ref={aboutImageRef}
                    src="https://i.postimg.cc/vT7HdNJJ/20944343.jpg"
                    alt="Students studying technology in modern classroom"
                    className="rounded-xl shadow-lg w-full h-auto animate-float"
                    data-testid="about-image"
                    style={{animationDuration: '6s', animationIterationCount: 'infinite'}}
                  />
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeInUp" delay={0.2}>
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  VLGE INSTITUTE PRIVATE LIMITED is a dynamic and innovative organization committed to transforming 
                  education and technology services. Established with a vision to empower students and institutions, 
                  we offer a range of professional solutions under three verticals:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-vlge-primary rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      <strong>VLGE Institute Private Limited (Ed-Tech):</strong> Focused on skill development, 
                      certification courses, and academic collaborations.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-vlge-primary rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      <strong>Study Abroad with VLGE:</strong> 100% support in international education 
                      with scholarships and visa processing.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-vlge-primary rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      <strong>VLGE Tech Services:</strong> Final year projects, web development, and IT solutions.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <AnimatedSection>
              <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold vlge-primary mb-6 flex items-center">
                    <TrendingUp className="mr-3" />
                    MISSION
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="text-vlge-primary mt-1 w-5 h-5" />
                      <span>Empower students with quality education, global exposure, and practical skills</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="text-vlge-primary mt-1 w-5 h-5" />
                      <span>Enable smooth access to international universities with scholarship guidance</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="text-vlge-primary mt-1 w-5 h-5" />
                      <span>Deliver innovative tech services for academic and business excellence</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <Card className="bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold vlge-secondary mb-6 flex items-center">
                    <Globe className="mr-3" />
                    VISION
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    To become a leading global platform that integrates education, international opportunities, 
                    and technological innovation — shaping a future where every student and entrepreneur has 
                    the tools, support, and access to succeed in a competitive world.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* Our Divisions */}
          <AnimatedSection>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold vlge-primary mb-8">OUR DIVISIONS</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-xl transition-shadow cursor-pointer hover:scale-105" onClick={() => window.location.href="/courses"}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <GraduationCap className="text-vlge-primary text-2xl" />
                    </div>
                    <h4 className="text-xl font-bold vlge-secondary mb-2">VLGE INSTITUTE</h4>
                    <p className="text-sm text-gray-600 mb-2">PRIVATE LIMITED</p>
                    <p className="text-vlge-primary font-semibold">(An Ed-Tech Division)</p>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-xl transition-shadow cursor-pointer hover:scale-105" onClick={() => window.location.href="/consultancy"}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="text-vlge-secondary text-2xl" />
                    </div>
                    <h4 className="text-xl font-bold vlge-secondary mb-2">STUDY ABROAD</h4>
                    <p className="text-sm text-gray-600 mb-2">WITH VLGE</p>
                    <p className="text-vlge-primary font-semibold">(Educational Consultancy)</p>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-xl transition-shadow cursor-pointer hover:scale-105" onClick={() => window.location.href="/services"}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Code className="text-vlge-accent text-2xl" />
                    </div>
                    <h4 className="text-xl font-bold vlge-secondary mb-2">VLGE TECH</h4>
                    <p className="text-sm text-gray-600 mb-2">SERVICES</p>
                    <p className="text-vlge-primary font-semibold">(Technology & Innovation)</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 bg-gradient-to-r from-vlge-secondary to-vlge-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center vlge-primary mb-12">OUR MILESTONES</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center" data-testid="milestone-courses">
                <div 
                  className="text-5xl font-bold vlge-primary mb-2" 
                  ref={(el) => milestoneRefs.current[0] = el}
                >
                  0
                </div>
                <p className="text-xl font-bold vlge-secondary mb-2">TOTAL COURSES</p>
              </div>
              <div className="text-center" data-testid="milestone-registrations">
                <div 
                  className="text-5xl font-bold vlge-primary mb-2"
                  ref={(el) => milestoneRefs.current[1] = el}
                >
                  0
                </div>
                <p className="text-xl font-bold vlge-secondary mb-2">REGISTRATIONS</p>
              </div>
              <div className="text-center" data-testid="milestone-tieups">
                <div 
                  className="text-5xl font-bold vlge-primary mb-2"
                  ref={(el) => milestoneRefs.current[2] = el}
                >
                  0
                </div>
                <p className="text-xl font-bold vlge-secondary mb-2">TIE UPS</p>
              </div>
              <div className="text-center" data-testid="milestone-learners">
                <div 
                  className="text-5xl font-bold vlge-primary mb-2"
                  ref={(el) => milestoneRefs.current[3] = el}
                >
                  0
                </div>
                <p className="text-xl font-bold vlge-secondary mb-2">SATISFIED LEARNERS</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Approvals & Registrations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center vlge-primary mb-12">
              REGISTERED AND APPROVED BY
            </h2>
            <div className="overflow-hidden">
              <div className="flex space-x-12 animate-marquee" data-testid="approvals-carousel">
                <img src="https://i.postimg.cc/V5QqCfXT/1000241419-removebg-preview.png" alt="AICTE" className="h-16 object-contain" />

                <img src="https://i.postimg.cc/C5Z78rXZ/1000241422-removebg-preview.png" alt="DPIIT" className="h-16 object-contain" />

                <img src="https://i.postimg.cc/RZ1RwHsT/1000241423-removebg-preview.png" alt="EGAC" className="h-16 object-contain" />

                <img src="https://i.postimg.cc/rstGs0Rx/1000241424-removebg-preview.png" alt="IAF" className="h-16 object-contain" />

                <img src="https://i.postimg.cc/1zJrjZZn/1000241425-removebg-preview.png" alt="MCA" className="h-16 object-contain" />

                <img src="https://i.postimg.cc/rpcfHJ0b/1000241426-removebg-preview.png
" alt="MSME" className="h-16 object-contain" />

                <img src="
https://i.postimg.cc/XqT8kc6s/aicte.png" alt="National Internship" className="h-16 object-contain" />

                <img src="https://i.postimg.cc/jdpgHKsR/DPIIT.png" alt="Startup India" className="h-16 object-contain" />

                <img src="https://i.postimg.cc/Mp1st4TV/tnstart-jpeg.jpg" alt="Startup TN" className="h-16 object-contain" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

