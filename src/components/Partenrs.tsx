import orange from "/clients/ORANGE.png";
import bouyguess from "/clients/BOUYGUESS.png";
import deltaDore from "/clients/DELTA DORE.png";
import hps from "/clients/HPS.png";
import comptacom from "/clients/COMPTACOM.png";

const Partenrs = () => {
  const logos = [orange, bouyguess, deltaDore, hps, comptacom];
  return (
    <div className="container mx-auto py-24" id="partenaires">
      <h2 className="text-xl font-semibold text-center">
        Plus de 200 startups et entreprises internationales nous font confiance
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-12">
        {logos.map((logo) => (
          <div key={logo}>
            <img src={logo} width={150} height={75} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partenrs;
