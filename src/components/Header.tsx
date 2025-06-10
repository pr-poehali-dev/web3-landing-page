import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Программа", href: "#program" },
    { label: "Команда", href: "#team" },
    { label: "Отзывы", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 lg:static lg:z-auto bg-[#121212]/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20 px-4 sm:px-8 lg:px-[46px]">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 from-blue-500 to-purple-600 rounded-md flex items-center justify-center shadow-lg bg-[#ECF86E]">
              <span className="text-[#121212] font-bold text-base">W</span>
            </div>
            <h1 className="lg:text-xl font-bold text-white text-base">
              Academy
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium scroll-smooth"
              >
                {item.label}
              </a>
            ))}
            {/* Removed Contacts button */}
          </nav>

          {/* Mobile Menu Button - removed */}
        </div>

        {/* Mobile Navigation - removed */}
      </div>
    </header>
  );
};

export default Header;
