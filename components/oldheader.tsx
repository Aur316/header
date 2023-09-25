import Image from "next/image";
import { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// @ts-ignore
import en_locale from "/locales/en-US.json";
// @ts-ignore
import es_locale from "/locales/es-ES.json";

type TProps = {
  selected?:
    | "about"
    | "home"
    | "services"
    | "news"
    | "contact"
    | "warnings"
    | "drug-policy";
  sticky: boolean;
};
const LangSwitch = () => {
  const { locale } = useRouter();

  return (
    <Link href="#" locale={locale === "en-US" ? "es-ES" : "en-US"}>
      <a className="mx-4">{locale === "en-US" ? "Español" : "English"}</a>
    </Link>
  );
};
export const Header = ({ selected, sticky }: TProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const locales: any = {
    "en-US": en_locale,
    "es-ES": es_locale,
  };

  const { locale } = useRouter();
  const t = locales[locale || "en-US"];

  const toggleRef = useRef(null);

  const closeOverlay = () => {
    if (!toggleRef || !toggleRef.current) {
      return;
    }
    (toggleRef.current as any).checked = false;
    setOpen(false);
  };

  return (
    <div
      id="header"
      className={`bg-accent-1 pr-4 lg:px-8 text-white transition-all ease-in duration-75 z-40 ${
        sticky ? "sticky top-0 left-0 right-0" : "relative"
      }`}
    >
      <div className="mx-auto">
        <div className="flex justify-between font-bold">
          
          <div className="flex flex-row justify-center items-center hidden xl:flex text-white flex-shrink-0">
            {/*<Link href='/'>*/}
            {/*    <div className={`p-8 transition-all ease-in duration-75 hover:text-accent-8 cursor-pointer text-xl ${selected === 'home' ? 'text-accent-8' : ''}`}>*/}
            {/*        {t['nav_home']}*/}
            {/*    </div>*/}
            {/*</Link>*/}

            <div className="relative">
              <label className="services" htmlFor="service_toggle">
                <div
                  className={`p-8 transition-all ease-in duration-75 hover:text-accent-8 cursor-pointer text-xl ${
                    selected === "services" ? "text-accent-8" : ""
                  }`}
                >
                  {t["nav_services"]}
                </div>
              </label>
              <input type="checkbox" id="service_toggle" />
              <ul className="dropdown">
                <li>
                  <Link href="/services/users" passHref>
                    <div className="py-2 px-4 transition-all ease-in duration-75 hover:text-accent-8 cursor-pointer text-xl text-white">
                      Users
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/services/organizations" passHref>
                    <div className="py-2 px-4 transition-all ease-in duration-75 hover:text-accent-8 cursor-pointer text-xl text-white">
                      Organizations
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/services/market-monitoring" passHref>
                    <div className="py-2 px-4 transition-all ease-in duration-75 hover:text-accent-8 cursor-pointer text-xl text-white">
                      Market Monitoring
                    </div>
                  </Link>
                </li>
              </ul>
            </div>

            <Link href="/#news" passHref>
              <divtoggleRef
                className={`p-8 transition-all ease-in duration-75 hover:text-accent-8 cursor-pointer text-xl ${
                  selected === "news" ? "text-accent-8" : ""
                }`}
              >
                {t["nav_news"]}
              </div>
            </Link>

            <Link href="/#warnings" passHref>
              <div
                className={`p-8 transition-all ease-in duration-75 hover:text-accent-7 cursor-pointer text-xl ${
                  selected === "warnings" ? "text-accent-7" : ""
                }`}
              >
                {t["nav_warnings"]}
              </div>
            </Link>

            <Link href="/results" passHref>
              <div className="special-btn mx-4 text-center px-12 py-2 my-4 text-white font-bold transition-all duration-75 ease-in hover:bg-accent-9 cursor-pointer text-xl shadow-xl rounded-lg uppercase font-bold">
                {t["nav_results"]}
              </div>
            </Link>

            <Link href="/drug-policy" passHref>
              <div
                className={`p-8 transition-all ease-in duration-75 hover:text-accent-8 cursor-pointer text-xl ${
                  selected === "drug-policy" ? "text-accent-8" : ""
                }`}
              >
                {t["nav_drug_policy"]}
              </div>
            </Link>

            <div className="about">
              <label className="about" htmlFor="about_toggle">
                <div
                  className={`about p-8 transition-all ease-in duration-75 hover:text-accent-8 cursor-pointer text-xl ${
                    selected === "about" ? "text-accent-8" : ""
                  }`}
                >
                  {t["nav_about"]}
                </div>
              </label>
              <input type="checkbox" id="about_toggle" />
              <ul className="dropdown">
                <li>
                  <Link href="/about/about" passHref>
                    <div className="py-2 px-4 transition-all ease-in duration-75 hover:text-accent-8 cursor-pointer text-xl text-white">
                      About
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/about/partners" passHref>
                    <div className="py-2 px-4 transition-all ease-in duration-75 hover:text-accent-8 cursor-pointer text-xl text-white">
                      Partners
                    </div>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="contact">
              <label className="contact" htmlFor="contact_toggle">
                <div
                  className={`contact p-8 transition-all ease-in duration-75 hover:text-accent-8 cursor-pointer text-xl ${
                    selected === "contact" ? "text-accent-8" : ""
                  }`}
                >
                  {t["nav_contact"]}
                </div>
              </label>
              <input type="checkbox" id="contact_toggle" />
              <ul className="dropdown">
                <li>
                  <Link href="/contact/jobs" passHref>
                    <div className="py-2 px-4 transition-all ease-in duration-75 hover:text-accent-8 cursor-pointer text-xl text-white">
                      Job Openings
                    </div>
                  </Link>
                </li>

                <li>
                  <Link href="/contact/suggest" passHref>
                    <div className="py-2 px-4 transition-all ease-in duration-75 hover:text-accent-8 cursor-pointer text-xl text-white">
                      Suggest A Vendor/Substance
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="items-center hidden xl:flex">
            <LangSwitch />
            {/*<Link href='/results'>*/}
            {/*    <div*/}
            {/*        className='special-btn px-8 py-4 my-4  text-white font-bold transition-all duration-75 ease-in hover:bg-accent-9 cursor-pointer text-xl shadow-xl rounded-lg uppercase font-bold'*/}
            {/*    >*/}
            {/*        {t['nav_results']}*/}
            {/*    </div>*/}
            {/*</Link>*/}
          </div>
          <div className="xl:hidden flex flex-row items-center font-bold">
            <LangSwitch />
            <input
              ref={toggleRef}
              onChange={() => setOpen(!open)}
              id="toggle"
              type="checkbox"
            />
            <label className="hamburger" htmlFor="toggle">
              <div className="top" />
              <div className="meat" />
              <div className="bottom" />
            </label>
          </div>
        </div>
        {open && (
          <div className="flex flex-col md:flex-row justify-center items-center text-white font-bold">
            <Link href="/" passHref>
              <div
                onClick={closeOverlay}
                className={`p-4 lg:p-8 transition-all ease-in duration-75 hover:text-accent-8 cursor-pointer text-xl ${
                  selected === "home" ? "text-accent-8" : ""
                }`}
              >
                {t["nav_home"]}
              </div>
            </Link>
            <Link href="/#services" passHref>
              <div
                onClick={closeOverlay}
                className={`p-4 lg:p-8 transition-all ease-in duration-75 hover:text-accent-8 cursor-pointer text-xl ${
                  selected === "services" ? "text-accent-8" : ""
                }`}
              >
                {t["nav_services"]}
              </div>
            </Link>
            <Link href="/drug-policy" passHref>
              <div
                onClick={closeOverlay}
                className={`p-8 transition-all ease-in duration-75 hover:text-accent-8 cursor-pointer text-xl ${
                  selected === "drug-policy" ? "text-accent-8" : ""
                }`}
              >
                {t["nav_drug_policy"]}
              </div>
            </Link>
            <Link href="/about" passHref>
              <div
                onClick={closeOverlay}
                className={`p-4 lg:p-8 transition-all ease-in duration-75 hover:text-accent-8 cursor-pointer text-xl ${
                  selected === "about" ? "text-accent-8" : ""
                }`}
              >
                {t["nav_about"]}
              </div>
            </Link>
            <Link href="/#news" passHref>
              <div
                onClick={closeOverlay}
                className={`p-4 lg:p-8 transition-all ease-in duration-75 hover:text-accent-8 cursor-pointer text-xl ${
                  selected === "news" ? "text-accent-8" : ""
                }`}
              >
                {t["nav_news"]}
              </div>
            </Link>
            <input type="checkbox" id="contact_toggle" className="hidden" />
            <label
              htmlFor="contact_toggle"
              className={`p-4 lg:p-8 transition-all ease-in duration-75 hover:text-accent-8 cursor-pointer text-xl ${
                selected === "contact" ? "text-accent-8" : ""
              }`}
            >
              {t["nav_contact"]}
            </label>
            <ul className="dropdown hidden">
              <li>
                <Link href="/contact/jobs" passHref>
                  <div className="py-2 px-4 transition-all ease-in duration-75 hover:text-accent-8 cursor-pointer text-xl text-white">
                    Job Openings
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/contact/suggest" passHref>
                  <div className="py-2 px-4 transition-all ease-in duration-75 hover:text-accent-8 cursor-pointer text-xl text-white">
                    Suggest A Vendor/Substance
                  </div>
                </Link>
              </li>
            </ul>
            <Link href="/results" passHref>
              <div
                onClick={closeOverlay}
                className="px-8 py-4 my-4 bg-accent-8 special-btn font-bold transition-all duration-75 ease-in hover:bg-accent-9 cursor-pointer text-xl shadow-xl rounded-lg"
              >
                {t["nav_results"]}
              </div>
            </Link>
            <br />
            <br />
          </div>
        )}
      </div>
    </div>
  );
};