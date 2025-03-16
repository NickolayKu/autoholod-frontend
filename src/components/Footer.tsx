import { Link } from "react-router-dom";
import VKIcon from "@/assets/icons/vk.svg?react";
import TGIcon from "@/assets/icons/tg.svg?react";
import Logo from '@/assets/logo.svg?react';

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="flex flex-row items-start py-7 mx-auto justify-between max-w-[1700px] pl-2 pr-6">
        <div className="flex flex-col items-center justify-center">
          <Link to={'/'}>
            <Logo className=""/>
          </Link>
        </div>
        <div className="flex flex-col gap-5 items-start justify-center">
          <Link to={'/'} className="text-zinc-50 hover:text-zinc-200 hover:underline underline-offset-5 transition-all">
            Сертификаты <br/>
            Лицензии
          </Link>
          <Link to={'/'} className="text-zinc-50 hover:text-zinc-200 hover:underline underline-offset-5 transition-all">
            Оплата и доставка
          </Link>
          <Link to={'/'} className="text-zinc-50 hover:text-zinc-200 hover:underline underline-offset-5 transition-all">
            Политика обработки <br/>
            персональных данных
          </Link>
        </div>
        <div className="flex flex-col gap-5 items-start justify-center">
          <Link to={'/'} className="text-zinc-50 hover:text-zinc-200 hover:underline underline-offset-5 transition-all">
            Адрес<br/><br/>
          </Link>
          <Link to={'/'} className="text-zinc-50 hover:text-zinc-200 hover:underline underline-offset-5 transition-all">
            Реквизиты
          </Link>
          <Link to={'/'} className="text-zinc-50 hover:text-zinc-200 hover:underline underline-offset-5 transition-all">
            График работы
          </Link>
        </div>
        <div className="flex flex-col gap-5 items-start justify-center">
          <a href="tel:89033003684" className="text-zinc-50 hover:text-zinc-300 transition-all">
            +7 903 300-36-84
          </a>
          <div className="flex flex-row gap-6 mt-6">
            <Link to={'/'}>
              <VKIcon className="w-8 h-8"/>
            </Link>
            <Link to={'/'}>
              <TGIcon className="w-8 h-8"/>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}