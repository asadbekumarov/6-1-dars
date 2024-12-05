import React from "react";
import Mack from "../../assets/images/nashi-img/Mask Group (1).png";
export default function () {
  return (
    <div className="bg-[#5855e7]">
      <div className="container max-w-[1180] px-4 mx-auto">
        <div className="content">
          <h2 className="text-center pt-[73px] mb-[92px] text-white font-bold text-[40px]">
            Наши преимущества
          </h2>
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <div className="flex flex-col items-center">
                <img src={Mack} alt="" />
                <h6 className="mt-[35px] mb-5 font-bold text-2xl text-white">
                  3-х разовое питание{" "}
                </h6>
                <p className="max-w-[255px] text-center font-normal text-white">
                  Для комфотрного времяпровождения в нашей школе, мы готовим
                  вкусную и полезную еду 3 раза в день
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img src={Mack} alt="" />
                <h6 className="mt-[35px] mb-5 font-bold text-2xl text-white">
                  IT технологии
                </h6>
                <p className="max-w-[375px] text-center font-normal text-white">
                  21 век- это век информационных технологий. Ваш ребенок сможет
                  научиться азам програмированния, тенденциям в мире гаджетов и
                  профессиям будущего
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img src={Mack} alt="" />
                <h6 className="mt-[35px] mb-5 font-bold text-2xl text-white">
                  Ментальная арифметика
                </h6>
                <p className="max-w-[221px] text-center font-normal text-white">
                  Мы обучим детей быстро вычислять в уме сложные математические
                  рассчёты
                </p>
              </div>
            </div>
            <div className="flex justify-evenly mt-[73px] mb-[73px] ">
              <div className="flex flex-col items-center">
                <img src={Mack} alt="" />
                <h6 className="mt-[35px] mb-5 font-bold text-2xl text-white">
                  Общение на английском языке{" "}
                </h6>
                <p className="max-w-[274px] text-center font-normal text-white">
                  Для свободного общения на английском языке, у нас
                  предусматривается целый день Speaking
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img src={Mack} alt="" />
                <h6 className="mt-[35px] mb-5 font-bold text-2xl text-white">
                  Иностранные языки
                </h6>
                <p className="max-w-[302px] text-center font-normal text-white">
                  Наши высококвалифицированные учителя обучат детей:
                  Английскому, русскому, арабскому и китайскому языку
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
