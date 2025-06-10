import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="relative top-0 left-0 right-0 z-50 bg-gray-900 border-b border-gray-700">
      <div className="px-4 md:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Navigation Links */}
          <nav className="flex items-center space-x-8">
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

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-4">
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
      </div>
    </header>
  );
};

export default Header;
