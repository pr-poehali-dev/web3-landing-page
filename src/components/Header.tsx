import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Navigation Links */}
          <nav className="flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-900 hover:text-gray-600 transition-colors font-medium"
            >
              О профессии
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-gray-600 transition-colors font-medium"
            >
              Программа
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-gray-600 transition-colors font-medium"
            >
              Трудоустройство
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-gray-600 transition-colors font-medium"
            >
              Как мы учим
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-gray-600 transition-colors font-medium"
            >
              Тарифы
            </a>
          </nav>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-gray-900 hover:text-gray-600 font-medium"
            >
              Компаниям
            </Button>
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
