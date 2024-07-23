import NavMobile from "@/layouts/NavMobile";
import ChosseLang from "./ChosseLang";
import { Link } from "react-scroll";

const Navbar = () => {
  const links = [
    {
      title: "Partenaires",
      href: "partenaires",
    },
    {
      title: "Services",
      href: "services",
    },
    {
      title: "Qui sommes-nous ?",
      href: "about-us",
    },
    {
      title: "Chiffres Clés",
      href: "keys",
    },
    {
      title: "Témoignages clients",
      href: "testimonials",
    },
  ];
  return (
    <>
      <div className="py-3  top-0 bg-white z-30 shadow-md ">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <img src={"/logo.svg"} alt="SII MAROC" width={75} height={150} />
          </div>
          <div className="flex gap-5 items-center">
            <ul className="hidden lg:flex items-center gap-5">
              {links.map((link) => (
                <Link
                  key={link.href}
                  activeClass="active"
                  to={link.href}
                  className="font-medium cursor-pointer border-b-4 border-transparent transition-all duration-300 ease-in-out hover:border-b-blue-500 hover:text-main-color"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={1000}
                >
                  {link.title}
                </Link>
              ))}
              <ChosseLang />
            </ul>
          </div>
          <NavMobile links={links} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
