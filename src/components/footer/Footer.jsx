import React from "react";
import Logo from "../../assets/images/header-img/logo.svg";
import Teg from "../../assets/images/footer-img/telegram (11) 1.png";
import Insta from "../../assets/images/footer-img/instagram (9) 1.png";
import Facebook from "../../assets/images/footer-img/facebook (4) 1.png";
export default function footer() {
  return (
    <div className="bg-[#5855e7]">
      <div className="container max-w-[1180] px-4 mx-auto">
        <div className="flex items-center justify-between mt-[97px] pt-7">
          <img src={Logo} alt="" />
          <div className="flex items-center gap-6">
            <h6 className="font-medium text-[20px] text-white">Контакты:</h6>
            <div>
              <p className="text-[20px] text-white">+998971970771</p>
              <p className="text-[20px] text-white">+998970020771</p>
            </div>
          </div>
          <div>
            <p className="font-medium text-[20px] mb-[5px] text-white">
              Будьте с нами:
            </p>
            <div className="flex gap-[21px]">
              <img src={Teg} alt="" />
              <img src={Insta} alt="" />
              <img src={Facebook} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
