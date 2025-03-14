import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "@/assets/logo.svg?react";
import PhoneIcon from "@/assets/icons/phone.svg?react";

export default function Header() {
  const location = useLocation();
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isOnTop, setIsOnTop] = useState(true);

  useEffect(() => {
    setIsMenuOpened(false);
  }, [location]);

  useEffect(() => {
    if (isMenuOpened) {
      document.documentElement.style.overflowY = 'hidden';
    } else {
      document.documentElement.style.overflowY = 'auto';
    }

    return () => {
      document.documentElement.style.overflowY = 'auto';
    };
  }, [isMenuOpened]);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if ( (scrollTop > lastScroll) && (scrollTop > 150)) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      if(scrollTop > 50){
        setIsOnTop(false)
      } else {
        setIsOnTop(true)
      }

      lastScroll = scrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // const toggleMenu = () => {
  //   setIsMenuOpened(prev => !prev);
  // };

  return (
    <header className={`header w-full transition-all ${!isOnTop && "header-on-top"} ${(isHidden && isMenuOpened === false) && "header-hidden"}`}>
      <div className="flex flex-row items-center mx-auto justify-between max-w-[1700px] pl-2 pr-6">
        <Link to={'/'}>
          <Logo className="pt-2"/>
        </Link>
        
        <div className="flex flex-row gap-12 items-center">
          <Link to={'/about'} className="text-zinc-50 hover:text-zinc-200 hover:underline underline-offset-5 transition-all">
            О компании
          </Link>
          <Link to={'/services'} className="text-zinc-50 hover:text-zinc-200 hover:underline underline-offset-5 transition-all">
            Оплата и доставка
          </Link>
          <Link to={'/contacts'} className="text-zinc-50 hover:text-zinc-200 hover:underline underline-offset-5 transition-all">
            Контакты
          </Link>

          <a href="tel:89033003684" className="flex flex-row gap-2 font-semibold text-zinc-50 hover:text-zinc-300 transition-all px-3">
            <PhoneIcon className="w-5 h-auto" />
            +7 903 300-36-84
          </a>

          <button type="button" className="bg-zinc-100 text-zinc-900 rounded-lg py-2 px-4 font-semibold 
            cursor-pointer hover:bg-zinc-400 transition-all shadow">
            Заказать звонок
          </button>
        </div>
      </div>
    </header>
  );
}