// import { Link } from "react-router-dom";
// import cls from "./styles.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TrackIcon from "@/assets/icons/track.svg?react";
import StarIcon from "@/assets/icons/star.svg?react";
import HomeIcon from "@/assets/icons/home.svg?react";
import BadgeCheckIcon from "@/assets/icons/badge-check.svg?react";
import LikeIcon from "@/assets/icons/like.svg?react";
import WalletIcon from "@/assets/icons/wallet.svg?react";

export default function Home() {

  const data = [
    {link: "/", image: "/images/изображение.png"},
    {link: "/", image: "/images/изображение.png"},
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section>
      <div className='w-full mt-14'>
        <Slider {...settings}>
          {data.map((item, index) => {
            return (
              <a key={index} href={item.link} className="shadow-sm rounded-lg overflow-hidden">
                <img src={item.image} className="rounded-lg"/>
              </a>
            )
          })}
        </Slider>
      </div>
      <div className='w-full mt-20 text-center'>
        <h2 className="text-zinc-50 text-2xl font-semibold">
          О компании
        </h2>
        <div className="flex flex-row gap-10 mt-8 justify-between items-center block-dark-background rounded-lg p-4 shadow-sm">
          <div className="text-zinc-50 text-base text-left flex-1/2 leading-7">
            С 2000 года мы поставляем холодильно-отопительные установки, производим пуско-наладочные работы, 
            обеспечиваем обслуживание оборудования: автономных жидкостных подогревателей, автономных воздушных отопителей 
            на автомобильный и на железнодорожный транспорт, для воздушных и водных судов, на все виды специальной и сельскохозяйственной 
            техники для прогрева двигателей, гидравлики, а также кабин водителей и машинистов, кают и пассажирских салонов.
          </div>
          <div className="text-zinc-50 text-sm flex-1/2 flex flex-row justify-end">
            <img src="/images/грузовик.png" className="max-w-[430px]"/>
          </div>
        </div>
      </div>
      <div className='w-full mt-20 text-center'>
        <h2 className="text-zinc-50 text-2xl font-semibold">Товары и услуги</h2>
        <div className="flex flex-row mt-10 justify-between gap-10">
          <a href="/" className="text-zinc-50 font-semibold transition-all 
            card-background p-3 rounded-lg flex-1/5 flex flex-col justify-center items-center gap-4 shadow-sm">
            <img src="/images/image1.png" className="max-w-[160px]"/>
            <h3>Авторефрижераторы</h3>
          </a>
          <a href="/" className="text-zinc-50 font-semibold transition-all 
            card-background p-3 rounded-lg flex-1/5 flex flex-col justify-center items-center gap-4 shadow-sm">
            <img src="/images/image3.png" className="max-w-[160px]"/>
            <h3>Автокондиционеры</h3>
          </a>
          <a href="/" className="text-zinc-50 font-semibold transition-all 
            card-background p-3 rounded-lg flex-1/5 flex flex-col justify-center items-center gap-4 shadow-sm">
            <img src="/images/image5.png" className="max-w-[160px]"/>
            <h3>Отопители</h3>
          </a>
          <a href="/" className="text-zinc-50 font-semibold transition-all 
            card-background p-3 rounded-lg flex-1/5 flex flex-col justify-center items-center gap-4 shadow-sm">
            <img src="/images/image7.png" className="max-w-[160px]"/>
            <h3>Запчасти</h3>
          </a>
        </div>
      </div>
      <div className="flex flex-row flex-wrap mt-10 justify-between gap-10">
        <a href="/" className="text-zinc-50 font-semibold transition-all 
          card-background px-3 py-6 rounded-lg flex-1/5 flex flex-col justify-center items-center gap-3 text-center shadow-sm">
          <h3>Пуско-наладочные работы</h3>
        </a>
        <div className="flex-1/5 flex flex-col justify-center items-center gap-5">
          <a href="/" className="text-zinc-50 font-semibold transition-all 
            card-background px-3 py-4 rounded-lg w-full text-center shadow-sm">
            <h3>Диагностика</h3>
          </a>
          <a href="/" className="text-zinc-50 font-semibold transition-all 
            card-background px-3 py-4 rounded-lg w-full text-center shadow-sm">
            <h3>Сервисное <br/>обслуживание<br/> оборудования</h3>
          </a>
        </div>
        <a href="/" className="text-zinc-50 font-semibold transition-all 
          card-background p-3 rounded-lg flex-1/5 flex flex-col justify-center items-center text-center gap-3 shadow-sm">
          <h3>Гарантийное обслуживание</h3>
        </a>
        <a href="/" className="text-zinc-50 font-semibold transition-all 
          card-background p-3 rounded-lg flex-1/5 flex flex-col justify-center items-center gap-3 text-center shadow-sm">
          <h3>Установка кондиционеров на все виды транспорта</h3>
        </a>
      </div>
      <div className='w-full mt-20 text-center'>
        <h2 className="text-zinc-50 text-2xl font-semibold">Преимущества</h2>
        <div className="flex flex-row justify-center mt-8 block-dark-background rounded-lg px-4 py-6 shadow-sm font-semibold">
          <div className="flex flex-row flex-wrap gap-y-4 justify-end max-w-[1100px]">
            <div className="flex flex-row items-center justify-center text-left text-zinc-50 flex-1/2 p-2">
              <div className="flex flex-row items-center gap-6 w-[420px]">
                <TrackIcon className="w-9 h-auto" />
                <span>
                  Являемся официальным дилером<br/> с гарантийным и постгарантийным<br/> обслуживанием на всей территории РФ
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center text-left text-zinc-50 flex-1/2 p-2">
              <div className="flex flex-row items-center gap-6 w-[420px]">
                <StarIcon className="w-9 h-auto" />
                <span>
                  Высокая эффективность, экономия<br/> ресурсов предприятия
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center text-left text-zinc-50 flex-1/2 p-2">
              <div className="flex flex-row items-center gap-6 w-[420px]">
                <BadgeCheckIcon className="w-9 h-auto" />
                <span>
                  Вся выпускаемая нами продукция<br/> обладает сертификатами соответствия
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center text-left text-zinc-50 flex-1/2 p-2">
              <div className="flex flex-row items-center gap-6 w-[420px]">
                <HomeIcon className="w-9 h-auto" />
                <span>
                  Работаем без посредников в РФ с заводом<br/> и с иностранными фирмами<br/> через дистрибьюторов
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center text-left text-zinc-50 flex-1/2 p-2">
              <div className="flex flex-row items-center gap-6 w-[420px]">
                <LikeIcon className="w-9 h-auto" />
                <span>
                  Долгий срок службы, работа<br/> с эффективными теплоносителями
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center text-left text-zinc-50 flex-1/2 p-2">
              <div className="flex flex-row items-center gap-6 w-[420px]">
                <WalletIcon className="w-9 h-auto" />
                <span>
                  Снижение затрат на обслуживание,<br/> нет необходимости в постоянном ремонте
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full mt-20 text-center'>
        <h2 className="text-zinc-50 text-2xl font-semibold">Отзывы</h2>
        <div className="w-full h-auto mb-8 mt-8 flex justify-center">
          <iframe className="rounded-lg overflow-hidden yandex-comments-iframe" 
            style={{maxWidth: '760px', width: '100%', height: '100vh'}} 
            src="https://yandex.ru/maps-reviews-widget/226327670406?comments"></iframe>
        </div>
      </div>
    </section>
  );
}