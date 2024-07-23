import { Link } from "react-scroll";

const BandCta = () => {
  return (
    <div className="bg-[#002d98] text-white py-12 my-24">
      <div className="container mx-auto">
        <div className="lg:grid grid-cols-3 lg:gap-2 items-center flex flex-col gap-5">
          <div className="flex flex-col lg:gap-5  gap-2 col-span-2">
            <h2 className="text-xl lg:text-3xl font-bold">
              Transformez votre vision en réalité
            </h2>
            <p className="text-sm lg:text-xl font-medium ">
              Contactez-nous pour partager vos ambitions. Nous avons hâte de
              travailler ensemble et de faire de votre projet un succès.
            </p>
          </div>
          <div className="flex justify-center">
            <Link
              activeClass="active"
              to={"hero"}
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
              className="bg-white cursor-pointer text-main-color border border-main-color rounded-2xl hover:bg-transparent hover:text-white hover:border-white px-32 py-5 font-bold"
            >
              Contactez nous
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BandCta;
