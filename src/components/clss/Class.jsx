import React from "react";
import People from "../../assets/images/clss-img/people.png";
export default function Class() {
  return (
    <div>
      <div className="max-w-[1180] px-4 mx-auto">
        <div>
          <h1 className="font-bold text-[96px] text-center mt-[146px] text-[#EEEEEE]">
            Классы
          </h1>
          <h2 className="font-bold text-[40px] text-center mt-[-60px] mb-[87px] text-[#000000]">
            Классы
          </h2>
          <div className="flex justify-evenly mb-[60px]">
            <div className="bg-[#5855e7] rounded-lg p-5 text-center flex flex-col items-center max-w-[301px]">
              <img className="rounded-lg" src={People} alt="" />
              <h3 className="font-semibold mt-6 text-3xl text-[#FAFBFD]">
                1 классы
              </h3>
              <p className="font-normal text-sm text-white mt-5">
                Изучение калиграфии, логопедия, английский этикет, разговорный
                английский, общеобразовательные предметы и спортивные занятия
              </p>
              <button className="bg-white pt-1 pb-1 pl-[24px] pr-[24px] rounded-sm mt-8">
                Записаться
              </button>
            </div>
            <div className="bg-[#5855e7] rounded-lg p-5 text-center flex flex-col items-center max-w-[301px]">
              <img className="rounded-lg" src={People} alt="" />
              <h3 className="font-semibold mt-6 text-3xl text-[#FAFBFD]">
                1 классы
              </h3>
              <p className="font-normal text-sm text-white mt-5">
                Изучение калиграфии, логопедия, английский этикет, разговорный
                английский, общеобразовательные предметы и спортивные занятия
              </p>
              <button className="bg-white pt-1 pb-1 pl-[24px] pr-[24px] rounded-sm mt-8">
                Записаться
              </button>
            </div>
            <div className="bg-[#5855e7] rounded-lg p-5 text-center flex flex-col items-center max-w-[301px]">
              <img className="rounded-lg" src={People} alt="" />
              <h3 className="font-semibold mt-6 text-3xl text-[#FAFBFD]">
                1 классы
              </h3>
              <p className="font-normal text-sm text-white mt-5">
                Изучение калиграфии, логопедия, английский этикет, разговорный
                английский, общеобразовательные предметы и спортивные занятия
              </p>
              <button className="bg-white pt-1 pb-1 pl-[24px] pr-[24px] rounded-sm mt-8">
                Записаться
              </button>
            </div>
          </div>
          <div className="flex justify-evenly mb-[121px]">
            <div className="bg-[#5855e7] rounded-lg p-5 text-center flex flex-col items-center max-w-[301px]">
              <img className="rounded-lg" src={People} alt="" />
              <h3 className="font-semibold mt-6 text-3xl text-[#FAFBFD]">
                4 классы
              </h3>
              <p className="font-normal text-sm text-white mt-5">
                Изучение калиграфии, логопедия, английский этикет, разговорный
                английский, общеобразовательные предметы и спортивные занятия
              </p>
              <button className="bg-white pt-1 pb-1 pl-[24px] pr-[24px] rounded-sm mt-8">
                Записаться
              </button>
            </div>
            <div className="bg-[#5855e7] rounded-lg p-5 text-center flex flex-col items-center max-w-[301px]">
              <img className="rounded-lg" src={People} alt="" />
              <h3 className="font-semibold mt-6 text-3xl text-[#FAFBFD]">
                0 классы
              </h3>
              <p className="font-normal text-sm text-white mt-5">
                Изучение калиграфии, логопедия, английский этикет, разговорный
                английский, общеобразовательные предметы и спортивные занятия
              </p>
              <button className="bg-white pt-1 pb-1 pl-[24px] pr-[24px] rounded-sm mt-8">
                Записаться
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
