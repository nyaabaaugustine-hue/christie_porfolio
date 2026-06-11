import { useState } from "react";
import { Menu, X } from "lucide-react";

type Page = 'home' | 'about' | 'leadership' | 'speaking' | 'contact';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const navItems: { label: string; page: Page }[] = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Leadership", page: "leadership" },
  { label: "Speaking", page: "speaking" },
  { label: "Contact", page: "contact" },
];

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3"
          >
            <img
              src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781130092/Akua-Feyie-Logo-new-01-768x217_fcurfv.png"
              alt="Christiana Okyere"
              className="h-8 lg:h-10 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.page
                    ? "text-[#C8A14A]"
                    : "text-[#0B1F3A] hover:text-[#C8A14A]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-2.5 bg-[#C8A14A] text-[#0B1F3A] text-sm font-semibold rounded-lg hover:bg-[#b8923f] transition-colors"
            >
              Board Inquiries
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => {
                    onNavigate(item.page);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left py-2 text-sm font-medium transition-colors ${
                    currentPage === item.page
                      ? "text-[#C8A14A]"
                      : "text-[#0B1F3A]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  onNavigate('contact');
                  setIsMenuOpen(false);
                }}
                className="mt-4 px-6 py-2.5 bg-[#C8A14A] text-[#0B1F3A] text-sm font-semibold rounded-lg text-center"
              >
                Board Inquiries
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}