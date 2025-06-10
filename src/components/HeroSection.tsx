import { Button } from "@/components/ui/button";
import { useState } from "react";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section
      className="relative h-[70vh] flex flex-col"
      style={{ backgroundColor: "#111827" }}
    >
      {/* Integrated Header */}
      <header className="relative z-50 px-4 md:px-6 lg:px-8 py-4">
        <div className="container mx-auto px-[13px]">
          <div className="flex items-center justify-between px-0">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#ECF86E] rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">W</span>
              </div>
              <span className="text-white font-bold text-xl">Academy</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#program"
                className="text-gray-300 hover:text-white transition-colors scroll-smooth"
              >
                Программа
              </a>
              <a
                href="#team"
                className="text-gray-300 hover:text-white transition-colors scroll-smooth"
              >
                Команда
              </a>
              <a
                href="#testimonials"
                className="text-gray-300 hover:text-white transition-colors scroll-smooth"
              >
                Отзывы
              </a>
              <a
                href="#formats"
                className="text-gray-300 hover:text-white transition-colors scroll-smooth"
              >
                Форматы
              </a>
              <a
                href="#faq"
                className="text-gray-300 hover:text-white transition-colors scroll-smooth"
              >
                FAQ
              </a>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
              <nav className="flex flex-col space-y-4 pt-4">
                <a
                  href="#program"
                  className="text-gray-300 hover:text-white transition-colors scroll-smooth"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Программа
                </a>
                <a
                  href="#team"
                  className="text-gray-300 hover:text-white transition-colors scroll-smooth"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Команда
                </a>
                <a
                  href="#testimonials"
                  className="text-gray-300 hover:text-white transition-colors scroll-smooth"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Отзывы
                </a>
                <a
                  href="#formats"
                  className="text-gray-300 hover:text-white transition-colors scroll-smooth"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Форматы
                </a>
                <a
                  href="#faq"
                  className="text-gray-300 hover:text-white transition-colors scroll-smooth"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </a>
                <Button
                  size="sm"
                  className="bg-[#ECF86E] text-black hover:bg-[#F87250] hover:text-white transition-all w-fit"
                >
                  Записаться
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Content */}
      <div className="flex-1 flex items-center pt-8 pb-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center h-full px-4 md:px-6 lg:px-8">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8">
              {/* Main Title */}
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight">
                  <span className="bg-gradient-to-r from-slate-100 via-white to-slate-200 bg-clip-text text-4xl sm:text-5xl md:text-7xl text-[#ffffff]">
                    Web3 с нуля
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-gray-300 mt-4 sm:mt-6 leading-relaxed max-w-lg">
                  Освойте полный цикл блокчейн-разработки и криптовалют — с нуля
                  за 6 недель.
                </p>
              </div>

              {/* CTA Button */}
              <Button
                size="lg"
                className="w-full lg:w-auto text-black transition-all duration-300 px-8 py-4 font-semibold rounded-lg hover:text-white"
                style={{ backgroundColor: "#ECF86E" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#F87250")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#ECF86E")
                }
              >
                Оставить заявку
              </Button>

              {/* Additional Info */}
              <div className="text-sm text-gray-400">
                <p>Ближайший старт — 26 июня, 10 июля и 24 июля</p>
              </div>

              {/* Stats */}
              <div className="">
                <div className="flex items-center gap-2">
                  <span></span>
                  <span></span>
                </div>
                <div className="flex items-center gap-2">
                  <span></span>
                  <span></span>
                </div>
                <div className="flex items-center gap-2">
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative lg:block hidden">
              <div className="relative">
                {/* Main Image Placeholder */}
                <div className="w-full h-96 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&crop=faces"
                    alt="Разработчик за работой"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-gray-800 border border-gray-600 rounded-xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 from-neon-purple to-neon-pink rounded-lg flex items-center justify-center bg-[#ECF86E]">
                      <span className="text-white text-sm font-bold">⭐</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">4,5</div>
                      <div className="text-xs text-gray-400">на Отзовике</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 rounded-xl p-4 shadow-xl bg-[#F87250]">
                  <div className="text-white">
                    <div className="text-2xl font-bold">10 000</div>
                    <div className="text-sm opacity-90">
                      выпускников нашли работу
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
