import {
  ChevronRight,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPinIcon,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import { Link } from "react-scroll";

const Footer = () => {
  const socailMediaLinK = [
    {
      href: "",
      icon: <Facebook className="h-6 w-6" />,
    },
    {
      href: "",
      icon: <Instagram className="h-6 w-6" />,
    },
    {
      href: "",
      icon: <Twitter className="h-6 w-6" />,
    },
    {
      href: "",
      icon: <Youtube className="h-6 w-6" />,
    },
  ];
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
    <div className="bg-main-color text-white py-12">
      <div className="container mx-auto grid lg:grid-cols-3 gap-5">
        <div className="flex flex-col gap-3">
          <img src="/sii-footer.svg" width={85} height={75} alt="" />
          <p className="text-base font-bold">SII Maroc Services</p>
          <ul className="flex gap-3">
          {socailMediaLinK.map((link) => (
            <li
              key={link.href}
              className="h-10 w-10 flex justify-center items-center bg-transparent text-white p-2 rounded-lg border border-blue-light hover:bg-blue-light transition-all duration-300 ease-in-out"
            >
              <a href={link.href} target="_blank">
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
        </div>
        <div className="flex flex-col gap-3 ">
          <p className="text-xl font-semibold">Lien Rapide </p>
          {links.map((link) => (
                <Link
                  key={link.href}
                  activeClass="active"
                  to={link.href}
                  className="font-medium cursor-pointer border-b-4 border-transparent flex items-center gap-1"
                  smooth={true}
                  offset={50}
                  duration={1000}
                >
                  <ChevronRight className="h-5 w-5" />
                  {link.title}
                </Link>
              ))}
        </div>

        <div className="flex flex-col gap-3 col-span-">
          <p className="text-xl font-semibold">Contact </p>
          <ul className="flex flex-col gap-3">
            <li className="flex gap-2 items-start">
              <MapPinIcon className="h-6 w-6 text-blue-light" />
              <p className="w-[95%]">
                Immeuble Cristal 3 Étage 2 – Marina 20000 Casablanca
              </p>
            </li>
            <li className="flex gap-2 items-center">
              <Mail className="h-5 w-5 text-blue-light" />
              contact@siimaroc.com
            </li>
            <li className="flex gap-2 items-center">
              <Phone className="h-5 w-5 text-blue-light" />
              +212522438390
            </li>
            <li className="flex gap-2 items-center">
              <Clock className="h-5 w-5 text-blue-light" />
              Du Lundi au vendredi - de 08:30 à 12:30
            </li>
          </ul>
        </div>
       
      </div>
      <div className="container mx-auto">
      
      </div>
    </div>
  );
};

export default Footer;
