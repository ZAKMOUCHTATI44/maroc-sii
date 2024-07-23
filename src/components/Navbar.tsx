import NavMobile from "@/layouts/NavMobile";
import ChosseLang from "./ChosseLang";

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
      href: "about-us",
    },
    {
      title: "Témoignages clients",
      href: "conseils-airbnb",
    },
  ];
  return (
    <>
      <div className="py-3 sticky top-0 bg-white z-30 shadow-md ">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <img src={"/logo.svg"} alt="SII MAROC" width={75} height={150} />
          </div>
          <div className="flex gap-5 items-center">

          <ul className="hidden lg:flex   gap-5">
            {links.map((link) => (
              <li className="font-medium" key={link.href}>
                {link.title}
              </li>
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
