import { Button } from "@/components/ui/button";
import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 border-b border-gray-700">
      <div className="px-4 md:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="hover:text-gray-300 transition-colors font-medium text-white"
            >
              О профессии
            </a>
            <a
              href="#"
              className="hover:text-gray-300 transition-colors font-medium text-white"
            >
              Программа
            </a>
            <a
              href="#"
              className="hover:text-gray-300 transition-colors font-medium text-white"
            >
              Трудоустройство
            </a>
            <a
              href="#"
              className="hover:text-gray-300 transition-colors font-medium text-white"
            >
              Как мы учим
            </a>
            <a
              href="#"
              className="hover:text-gray-300 transition-colors font-medium text-white"
            >
              Тарифы
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>

          {/* Desktop Right Side Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-white hover:text-gray-300 font-medium"
            >
              Войти
            </Button>
            <Button className="bg-[#ECF86E] text-black hover:bg-[#E5F563] font-medium px-6">
              Все курсы
            </Button>
          </div>
        </div>

        {/* Mobile Menu - Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed top-[73px] left-0 right-0 bg-gray-900 border-b border-gray-700 shadow-lg z-50 animate-fade-in">
            <nav className="flex flex-col space-y-4 p-4">
              <a
                href="#"
                className="hover:text-gray-300 transition-colors font-medium text-white"
              >
                О профессии
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors font-medium text-white"
              >
                Программа
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors font-medium text-white"
              >
                Трудоустройство
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors font-medium text-white"
              >
                Как мы учим
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors font-medium text-white"
              >
                Тарифы
              </a>
              <div className="pt-4 border-t border-gray-700">
                <Button
                  variant="ghost"
                  className="text-white hover:text-gray-300 font-medium justify-start w-full"
                >
                  Войти
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
