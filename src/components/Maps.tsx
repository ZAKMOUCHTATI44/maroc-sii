const Maps = () => {
  const items = [
    {
      title: "Compétitivité",
      text: " Optimisez votre position sur le marché avec nos solutions conçues pour maximiser votre compétitivité et répondre aux défis les plus exigeants.",
    },
    {
      title: "Réference solide",
      text: "Bénéficiez de notre expertise reconnue, soutenue par des références solides et des projets réussis à l’échelle locale et internationale.",
    },
    {
      title: "Acteur local et international",
      text: "Nous sommes un acteur stratégique, offrant des solutions de haute qualité adaptées aux besoins spécifiques des marchés locaux et internationaux.",
    },
    {
      title: "Synergie culturelle",
      text: "Profitez de notre proximité géographique et culturelle pour une collaboration fluide et efficace.",
    },
    {
      title: "Extended delivery model",
      text: "Découvrez notre modèle de livraison étendu, offrant flexibilité et rapidité pour répondre efficacement à vos besoins variés et complexes.",
    },
    {
      title: 'Certifié "Great Place to Work"',
      text: "Un Environnement de Travail Exceptionnel !",
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-main-color">
          Simplifiez vos Projets avec le Nearshore
        </h2>
        <p>
          Explorez nos partenaires internationaux avec lesquels nous collaborons{" "}
          <br />
          et découvrez comment le nearshore simplifie vos projets à l’échelle
          mondiale.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-12 my-12">
        <div>
          <h2 className="text-2xl font-semibold">
            <span className="text-main-color">SII Group Morocco ,</span>{" "}
            Excellence Nearshore pour Votre Croissance
          </h2>
          <p className="text-gray-500">
            Explorez comment notre approche nearshore allie réductions de coûts
            et expertise avancée pour booster votre entreprise.
          </p>
          <div className="flex flex-col gap-3 my-5">
            {items.map((item) => (
              <div key={item.title}>
                <h2 className=" text-lg font-bold flex items-center gap-3 text-gray-800">
                  <img src="/badge-check.webp" width={20} height={20} alt="" />
                  <span className="text-main-color">
                  {item.title}
                  </span>
                </h2>
              </div>
            ))}
          </div>
        </div>
        <img src="/public/maps.jpg" alt="MAPS " className="rounded-3xl" />
      </div>
    </div>
  );
};

export default Maps;
