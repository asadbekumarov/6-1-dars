import React from "react";
import Mask from "../../assets/images/onas-mg/Mask Group.png";
export default function Contact() {
  return (
    <div>
      <div className="container max-w-[1180] px-4 mx-auto">
        <div>
          <h1 className="font-bold text-[96px] text-center mt-[146px] text-[#EEEEEE]">
            Связаться
          </h1>
          <h2 className="font-bold text-[40px] text-center mt-[-60px] mb-[81px] text-[#000000]">
            Связаться с нами
          </h2>
          <div className="bg-[#5855e7] flex justify-between p-12 rounded-lg">
            <div>
              <h2 className="mb-7 font-medium text-4xl text-white">
                Контакты{" "}
              </h2>
              <div className="flex gap-1 items-center mb-10">
                <div className="bg-[#A23AC1] w-5 h-5"></div>
                <p className="font-normal text-2xl text-white">
                  г.Ташкент, Чиланзар 16-й квартал, ул. Ботирма
                </p>
              </div>
              <div className="flex gap-1 items-center mb-10">
                <div className="bg-[#A23AC1] w-5 h-5"></div>
                <p className="font-normal text-2xl text-white">+998970020771</p>
              </div>
              <div className="flex gap-1 items-center mb-10">
                <div className="bg-[#A23AC1] w-5 h-5"></div>
                <p className="font-normal text-2xl text-white">
                  +998971970771 (Пн.-Пт. с 09:00 до 17:00)
                </p>
              </div>
              <img src={Mask} alt="" />
            </div>
            <div className="flex flex-col gap-7">
              <h2 className="mb-7 font-medium text-4xl text-white">
                Оставьте заявку
              </h2>
              <p className="font-normal text-lg max-w-[329px] text-white">
                В честь открытия нашей школы дарим скидку -20%
              </p>
              <input className="p-2 rounded-md" placeholder="Имя" type="text" />
              <input
                className="p-2 rounded-md"
                placeholder="Фамилия"
                type="text"
              />
              <input
                className="pt-5 pr-[321px] pl-[13px] pb-[224px] rounded-md"
                placeholder="Номер"
                type="number"
              />
              <button className="bg-white pt-3 pb-3 pl-10 w-[197px] pr-10 text-start">
                Отправить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
