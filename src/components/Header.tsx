import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="relative top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="flex items-center justify-between h-16 bg-gray-900">
          {/* Navigation Links */}
          <nav className="flex items-center space-x-8 bg-[#ffffff00]">
            <a
              href="#"
              className="hover:text-gray-600 transition-colors font-medium text-[#ffffff]"
            >
              О профессии
            </a>
            <a
              href="#"
              className="hover:text-gray-600 transition-colors font-medium text-[#ffffff]"
            >
              Программа
            </a>
            <a
              href="#"
              className="hover:text-gray-600 transition-colors font-medium text-[#ffffff]"
            >
              Трудоустройство
            </a>
            <a
              href="#"
              className="hover:text-gray-600 transition-colors font-medium text-[#ffffff]"
            >
              Как мы учим
            </a>
            <a
              href="#"
              className="hover:text-gray-600 transition-colors font-medium text-[#ffffff]"
            >
              Тарифы
            </a>
          </nav>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-gray-900 hover:text-gray-600 font-medium"
            ></Button>
            <Button className="bg-black text-white hover:bg-gray-800 font-medium px-6">
              Все курсы
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
