/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import CloseIcon from "@/assets/icons/close.svg?react";
import { Link } from "react-router-dom";

interface CallbackRequestModalProps {
  isOpen: boolean;
  setOpen: any;
  comment?: string;
}

export const CallbackRequestModal: React.FC<CallbackRequestModalProps> = ({isOpen, setOpen, comment}) => {
  const [data, setData] = useState<any>({
    organization: '',
    fullname: '',
    phone: '',
    email: '',
    comment: comment || '',
  });

  useEffect(() => {
    setData({
      organization: '',
      fullname: '',
      phone: '',
      email: '',
      comment: comment || '',
    })
  }, [isOpen])

  return (
    <div className={`modal ${isOpen && "opened"}`}>
      <div className='space-y-8 modal-content bg-zinc-950 text-zinc-50 rounded-lg shadow-lg transition-all px-10 py-3'>
        <div className="flex flex-row justify-end -mr-14 -mt-7">
          <div className="bg-zinc-50 rounded-full p-1 w-8 h-8 flex items-center justify-center absolute" 
            onClick={() => setOpen(false)}>
            <CloseIcon className="w-9 h-9 text-zinc-600 hover:text-zinc-800 cursor-pointer" />
          </div>
        </div>
        <h3 className="text-2xl text-center pt-4 pb-1 font-bold">
          Заказать обратный звонок
        </h3>
        <div className="flex flex-col gap-2">
          <label>Организация</label>
          <input type="text" placeholder="Название организации" value={data.organization} 
            onChange={(e) => setData({...data, organization: e.target.value})}/>
        </div>
        <div className="flex flex-col gap-2">
          <label>ФИО*</label>
          <input type="text" placeholder="Как к вам обращаться" required={true} value={data.fullname} 
            onChange={(e) => setData({...data, fullname: e.target.value})}/>
        </div>
        <div className="flex flex-col gap-2">
          <label>Номер телефона*</label>
          <input type="phone" placeholder="+7 (___) ___-__-__" required={true} value={data.phone}
            onChange={(e) => setData({...data, phone: e.target.value})}/>
        </div>
        <div className="flex flex-col gap-2">
          <label>E-mail</label>
          <input type="email" placeholder="example@yandex.ru" value={data.email}
            onChange={(e) => setData({...data, email: e.target.value})}/>
        </div>
        <div className="flex flex-col gap-2">
          <label>Комментарий</label>
          <input type="text" placeholder="Диагностика" value={data.comment} 
            onChange={(e) => setData({...data, comment: e.target.value})}/>
        </div>
    
        <div className="flex flex-col justify-start items-center gap-3 mb-4 -mt-">
          <button type="button" className="bg-zinc-100 text-zinc-900 rounded-lg py-2 px-4 font-semibold 
            cursor-pointer hover:bg-zinc-400 transition-all shadow">
            Связаться со мной
          </button>

          <div className="flex flex-row gap-2 mt-3">
            <input id="privacy-checkbox" type="checkbox" />
            <label htmlFor="privacy-checkbox" className="text-xs text-zinc-200 cursor-pointer">
              Нажимая на кнопку «Связаться со мной», вы Соглашаетесь с {' '}
              <Link to={'/'} className="hover:text-zinc-50 underline underline-offset-2 transition-all">
                Политикой конфиденциальности
              </Link>
            </label>  
          </div>  
        </div>
      </div>
      <div className={`modal-backdrop transition-all ${isOpen && "opened"}`} onClick={() => setOpen(false)}></div>
    </div>
  )
}