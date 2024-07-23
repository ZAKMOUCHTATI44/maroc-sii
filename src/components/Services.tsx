const Services = () => {
  const services = [
    {
      title: "Conception et développement d'applications sur mesure",
      image: "/icons/6.png",
      description:
        "Nous concevons des applications mobiles, web et de bureau adaptées à vos spécificités, améliorant l'efficacité et l'expérience utilisateur.",
    },
    {
      title: "Transformation digitale et modernisation des applications",
      image: "/icons/8.png",
      description:
        "Modernisez vos applications avec les dernières technologies pour rester agile, sécurisé et performant dans un environnement numérique en constante évolution.",
    },
    {
      title: "Design d'interface utilisateur (UX/UI)",
      image: "/icons/4.png",
      description:
        "Des interfaces utilisateur harmonieuses et intuitives sont développées pour améliorer l'expérience utilisateur et stimuler l'engagement des clients avec vos applications digitales.",
    },
  ];
  const services1 = [
    {
      title: "Gestion et optimisation des réseaux ",
      image: "/icons/4.png",
      description:
        "Assurez une connectivité réseau fiable et performante avec nos services de gestion et d'optimisation des réseaux. ",
    },
    {
      title: "Solutions de télécommunications unifiées  ",
      image: "/icons/3.png",

      description:
        "Améliorez la collaboration et la communication avec nos solutions de télécommunications unifiées. ",
    },
    {
      title: "Sécurité des infrastructures IT ",
      image: "/icons/1.png",

      description:
        "Protégez vos systèmes et données sensibles avec nos solutions de sécurité des infrastructures IT.",
    },
  ];

  const services2 = [
    {
      title: "Conception et Développement de Produits ",
      image: "/icons/9.png",
      description:
        "Nous accompagnons vos projets de la conception à la réalisation en développant des produits innovants et adaptés à vos besoins spécifiques.",
    },
    {
      title: "Prototypage et Tests",
      image: "/icons/7.png",
      description:
        "Accélérez le développement de vos produits avec nos services de prototypage et de tests pour valider vos concepts avant leur mise en production. ",
    },
    {
      title: "Support et Maintenance",
      image: "/icons/3.png",
      description:
        "Assurez la pérennité et la performance de vos produits avec nos services de support et de maintenance. ",
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
      <div className="grid grid-cols-2 gap-5 my-12 items-center">
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl font-semibold text-main-color">
            Nous transformons vos idées en réalité
          </h2>
          {services.map((item) => (
            <div key={item.title} className="grid grid-cols-9 gap-3">
              <div>
                <img src={item.image} width={75} height={75} alt="" />
              </div>
              <div className="col-span-8">
                <h2 className="text-base text-gray-900 font-semibold">
                  {item.title}
                </h2>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <img
            src="/service-1.jpg"
            className="rounded-3xl"
            width={600}
            height={450}
            alt=""
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 my-12 items-center">
        <div>
          <img
            src="/service-2.avif"
            className="rounded-3xl"
            width={600}
            height={450}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl font-semibold text-main-color">
            Service - Infrastructure IT et télécom
          </h2>
          {services1.map((item) => (
            <div key={item.title} className="grid grid-cols-9 gap-3">
              <div>
                <img src={item.image} width={75} height={75} alt="" />
              </div>
              <div className="col-span-8">
                <h2 className="text-base text-gray-900 font-semibold">
                  {item.title}
                </h2>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 my-12 items-center">
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl font-semibold text-main-color">
            Service - Ingénierie métier et produit
          </h2>
          {services2.map((item) => (
            <div key={item.title} className="grid grid-cols-9 gap-3">
              <div>
                <img src={item.image} width={75} height={75} alt="" />
              </div>
              <div className="col-span-8">
                <h2 className="text-base text-gray-900 font-semibold">
                  {item.title}
                </h2>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <img
            src="/service-2.jpg"
            className="rounded-3xl"
            width={600}
            height={450}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
