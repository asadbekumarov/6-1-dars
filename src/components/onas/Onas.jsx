import React from "react";
import Home from "../../assets/images/onas-mg/Mask Group.png";

export default function Onas() {
  return (
    <div>
      <div className="container max-w-[1180] px-4 mx-auto">
        <div className="content flex justify-between items-start mt-[214px]">
          <img src={Home} alt="home" />
          <div className="items-start text-start mb-[214px]">
            <h2 className="font-bold text-[40px] items-start leading-[49px] mb-[48px] mt-[20px]">
              О нас
            </h2>
            <p className="items-end max-w-[500px] font-normal text-[24px] leading-7">
              Для комфортного образования и времяпровождения, мы объединяем
              детей небольшими комфортными группами, которые разделяются по
              возрастным категориям, а также и по образовательным направлениям.
              Индивидуальный подход к каждому ребёнку. В классе не более 10
              учеников. Углублённое изучение английского языка.Кроме этого, мы
              отправляем наших детей на языковую практику за рубеж. Обучение с
              8.00 до 17.00; 3-х разовое сбалансированное питание ( по желанию),
              выполнение домашних заданий. <br /> <br />
              Все условия и комфорт для ваших детей!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
