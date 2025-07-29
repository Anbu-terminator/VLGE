import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/student-verification", label: "Student Verification" },
    { href: "/consultancy", label: "Consultancy" },
    { href: "/services", label: "Services" },
    { href: "/courses", label: "Courses" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-white"
      }`}
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo & Company Name */}
          <Link href="/" className="flex items-center space-x-4" data-testid="logo-link">
            <img
              src="https://i.postimg.cc/fygFn9nd/VLGE.png"
              alt="VLGE Logo"
              className="w-20 h-20 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              data-testid="header-logo"
            />
            <div>
              <h2 className="text-2xl font-bold mb-6 leading-tight">
  <span className="text-vlge-secondary">VLGE INSTITUTE </span>
  <span className="text-red-500">PRIVATE LIMITED</span>
</h2>

            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" data-testid="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-vlge-secondary hover:text-vlge-primary transition-colors font-semibold"
                data-testid={`nav-link-${link.label.toLowerCase().replace(" ", "-")}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-vlge-secondary hover:text-vlge-primary"
                data-testid="mobile-menu-button"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]" data-testid="mobile-menu">
              <nav className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-vlge-secondary hover:text-vlge-primary transition-colors font-semibold text-lg"
                    data-testid={`mobile-nav-link-${link.label.toLowerCase().replace(" ", "-")}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
