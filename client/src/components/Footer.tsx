import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Phone, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white py-12 text-black" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="https://i.postimg.cc/fygFn9nd/VLGE.png"
                alt="VLGE Logo"
                className="w-20 h-20"
                data-testid="footer-logo"
              />
              <h3 className="font-bold text-xl">VLGE INSTITUTE PRIVATE LIMITED</h3>
            </div>
            <p className="text-sm mb-4">
              An ISO 9001:2015 Certified Institute, Registered Company Under Govt of India,
              DPIIT Recognised Startup (Govt of India), Recognised by Startup TN and Approved by AICTE
            </p>
            <p className="text-sm">
              No 2/216 2D, Sai Baba Nagar, K G Kandigai, Tiruttani TK, Tiruvallur District,
              Tamil Nadu - 631209
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-gray-700 transition-colors" data-testid="footer-link-home">Home</Link></li>
              <li><Link href="/student-verification" className="hover:text-gray-700 transition-colors" data-testid="footer-link-verification">Student Verification</Link></li>
              <li><Link href="/consultancy" className="hover:text-gray-700 transition-colors" data-testid="footer-link-consultancy">Consultancy</Link></li>
              <li><Link href="/services" className="hover:text-gray-700 transition-colors" data-testid="footer-link-services">Services</Link></li>
              <li><Link href="/courses" className="hover:text-gray-700 transition-colors" data-testid="footer-link-courses">Courses</Link></li>
              <li><Link href="/contact" className="hover:text-gray-700 transition-colors" data-testid="footer-link-contact">Contact</Link></li>
            </ul>
          </div>

          {/* Team */}
          <div>
            <h4 className="font-semibold mb-4">Team</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-medium">Mr. Vibinraj M</p>
                <p>Administrative Officer</p>
                <p>+91 77081 15754</p>
              </div>
              <div>
                <p className="font-medium">Mr. Navin Sundar S D</p>
                <p>Marketing Manager</p>
                <p>+91 94943 84482</p>
              </div>
              <div>
                <p className="font-medium">Mr. Dayanidhi N</p>
                <p>Resource Manager</p>
                <p>support@valuelearn.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact & Social */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row gap-4 mb-4 md:mb-0">
              <a
                href="mailto:info@valuelearn.in"
                className="hover:text-gray-700 transition-colors"
                data-testid="footer-email"
              >
                info@valuelearn.in
              </a>
              <a
                href="tel:+917708115754"
                className="hover:text-gray-700 transition-colors flex items-center gap-2"
                data-testid="footer-phone"
              >
                <Phone className="w-4 h-4" />
                +91 77081 15754
              </a>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a
                href="https://wa.me/9345424497"
                className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                data-testid="footer-whatsapp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/value.learn.academy/"
                className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
                data-testid="footer-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/value-learn-academy/"
                className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                data-testid="footer-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/valuelearnacademy"
                className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                data-testid="footer-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-gray-300">
            <p className="text-sm">
              © 2024 by VLGE INSTITUTE PRIVATE LIMITED | Privacy Policy | Terms & Conditions
            </p>
            <p className="text-xs mt-2">
              "Together Stand For Growth" | "Learning is a lifelong journey."
            </p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <p className="text-xs">Powered and designed by CT TECH SOLUTIONS</p>
              <img
                src="https://i.postimg.cc/Lh7Z9g9K/CT-TECH-SOLUTIONS-LOGO.jpg"
                alt="CT Tech Solutions"
                className="h-4"
                data-testid="footer-ct-tech-logo"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
