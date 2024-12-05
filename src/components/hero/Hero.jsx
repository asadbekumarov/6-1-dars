import React from "react";
import Person from "../../assets/images/hero-img/per.jpg";
export default function Hero() {
  return (
    <section className="bg-[#fafafa]">
      <section className="container max-w-[1180] px-4 mx-auto">
        <section className="flex items-center justify-between">
          <div className="flex flex-col text-center items-center	relative">
            <h1 className="max-w-[600px] text-start	 mt-[180px] font-bold text-[40px] leading-10">
              <span className="text-[#5855e7] font-bold text-[40px] leading-10">
                The Best Future Stars
              </span>{" "}
              - мы заботимся о будущем вашего ребенка
            </h1>
            <p className="text-start mt-10 font-normal text-lg leading-5 max-w-[534px]">
              Наши опытные преподователи сделают процесс обучения максимально
              интересным и эффективным для вашего ребенка
            </p>
            <div className="mt-12 flex gap-10 mb-[142px]">
              <button className="rounded-xl bg-[#6347EB] text-white text-[32px] leading-9 pt-1 pb-3 pr-8 pl-8">
                Позвонить{" "}
              </button>
              <button className="rounded-xl border- border-[3px] border-[#6347EB] outline-[3px] text-black text-[32px] leading-9 pt-1 pb-3 pr-8 pl-8">
                Подробнее{" "}
              </button>
            </div>
          </div>
          <div className="relative w-[700px]">
            <img
              className="absolute top-[-276px] left-[222px] "
              src={Person}
              alt=""
            />
          </div>
        </section>
      </section>
    </section>
  );
}
