import { Link } from "react-scroll";
import Form from "./Form";

const Hero = () => {
  return (
    <>
      <div
        className="bg-hero min-h-[80vh] flex justify-center items-center"
        id="hero"
      >
        <div className="container mx-auto flex  text-white">
          <div className="grid lg:grid-cols-2 gap-12 justify-center items-center py-12">
            <div className="flex flex-col gap-5">
              <h2 className="text-5xl lg:text-6xl font-bold">
                Libérez le potentiel numérique de votre entreprise
              </h2>
              <div className="">
        Hover me
      </div>
              <div>
                <Link
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={1000}
                  to={"services"}
                  className="bg-white text-[#0049F8] px-12 py-3 rounded-3xl font-bold"
                >
                  Explorez nos solutions
                </Link>
              </div>
            </div>
            <div className="flex justify-end">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
