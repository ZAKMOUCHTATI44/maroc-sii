import Form from "./Form";

const Hero = () => {
  return (
    <>
      <div className="bg-hero min-h-[80vh] flex justify-center items-center">
        <div className="container mx-auto flex  text-white">
          <div className="grid grid-cols-2 gap-12 justify-center items-center">
            <div className="flex flex-col gap-5">
              <h2 className="text-6xl font-bold ">
                Libérez le potentiel numérique de votre entreprise
              </h2>
              <div>
                <a
                  href={"/"}
                  className="bg-white text-[#0049F8] px-12 py-3 rounded-3xl font-bold"
                >
                  Explorez nos solutions
                </a>
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
