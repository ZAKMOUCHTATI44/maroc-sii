import { Button } from "./ui/button";

const BandCta = () => {
  return (
    <div className="bg-[#002d98] text-white py-12 my-24">
      <div className="container mx-auto grid lg:grid-cols-3 gap-5 items-center">
        <div className="flex flex-col gap-5 col-span-2">
          <h2 className="text-3xl font-bold">Transformez votre vision en réalité</h2>
          <p className="text-xl font-medium">
            Contactez-nous pour partager vos ambitions. Nous avons hâte de
            travailler ensemble et de faire de votre projet un succès.
          </p>
        </div>
        <div className="flex justify-end">
            <Button className="bg-white text-main-color border border-main-color hover:bg-transparent hover:text-white hover:border-white px-32 py-8 font-bold">
                Contactez nous
            </Button>
        </div>
      </div>
    </div>
  );
};

export default BandCta;
