const NosServices = () => {
  const services = [
    {
      title: "Conception et développement d'applications sur mesure",
      description:
        "Nous concevons des applications mobiles, web et de bureau adaptées à vos spécificités, améliorant l'efficacité et l'expérience utilisateur.",
    },
    {
      title: "Transformation digitale et modernisation des applications",
      description:
        "Modernisez vos applications avec les dernières technologies pour rester agile, sécurisé et performant dans un environnement numérique en constante évolution.",
    },
    {
      title: "Design d'interface utilisateur (UX/UI)",
      description:
        "Des interfaces utilisateur harmonieuses et intuitives sont développées pour améliorer l'expérience utilisateur et stimuler l'engagement des clients avec vos applications digitales.",
    },
  ];

  return (
    <div className="container mx-auto my-24">
      <h2 className="text-3xl font-bold text-[#0049F8] text-center">
        Nos services, votre chemin vers la réussite
      </h2>
      <p className="text-gray-700 text-sm font-semibold w-1/2 text-center mx-auto">
        Avec notre expertise en solutions digitales sur mesure, nous vous aidons
        à transformer vos défis en opportunités de croissance et de succès.
      </p>
      <div className="grid grid-cols-3 gap-5 my-12">
        {services.map((item) => (
          <div key={item.title} className="flex flex-col gap-5  text-center">
            <h2 className="text-[#0049F8] font-semibold">{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NosServices;
