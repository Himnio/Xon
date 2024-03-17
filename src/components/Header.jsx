// import { brainwave } from "../assets";
import { navigation } from "../constants/index";
import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useLocation } from "react-router-dom";
import { HamburgerMenu } from "./design/Header";
import Button from "../components/Button";
import MenuSvg from "../assets/svg/MenuSvg";

const Header = () => {
  const pathname = useLocation();
  const [openNevigation, setOpenNevigation] = useState(true);

  const toogleNaviagation = () => {
    if (openNevigation) {
      setOpenNevigation(false);
      enablePageScroll();
    } else {
      setOpenNevigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNevigation) enablePageScroll();
    setOpenNevigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNevigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img
            src="./src/assets//brainwave-symbol.svg"
            width={50}
            height={40}
            alt="Xon"
          />
        </a>
        <nav
          className={`${
            openNevigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-b-0 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div
            className={`flex relative z-2 flex-col items-center justify-center m-auto lg:flex-row`}
          >
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 translate-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>
        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New account
        </a>
        <Button className="ml-auto lg:flex" href="">
          Sign in
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toogleNaviagation}
        >
          <MenuSvg openNavigation={openNevigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
