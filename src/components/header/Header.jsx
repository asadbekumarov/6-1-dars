import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/header-img/logo.svg";

export default function header() {
  return (
    <header className="bg-[#5855E7]">
      <header className="container max-w-[1180] px-4 mx-auto">
        <header className="content flex justify-between	items-center">
          <img className="w-[156] h-[111]" src={Logo} alt="logo" />
          <Link className="font-medium text-2xl	leading-7	text-white	" to={"/"}>
            О нашей школе
          </Link>
          <br />
          <Link
            className="font-medium text-2xl	leading-7	text-white	"
            to={"/contact"}
          >
            Преимущества
          </Link>
          <br />
          <Link
            className="font-medium text-2xl	leading-7	text-white	"
            to={"/clss"}
          >
            Классы
          </Link>
          <br />
          <Link
            className="font-medium text-2xl	leading-7	text-white	"
            to={"advantages"}
          >
            Контакты
          </Link>
          <br />
          <Link
            className="bg-white pt-3 pb-3 pl-9 pr-9 rounded-lg	font-medium		"
            to={"m"}
          >
            Связаться с нами{" "}
          </Link>
        </header>
      </header>
    </header>
  );
}
