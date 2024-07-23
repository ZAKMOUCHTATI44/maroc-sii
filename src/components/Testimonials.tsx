const Testimonials = () => {
  const items = [
    {
      title: "Salma Mouline, Directrice Générale",
      icon :"/avis/image-1.png",
      description:
        "Collaborer avec SII Maroc a été une véritable avancée pour notre entreprise. Leur approche innovante et personnalisée a transformé notre manière de gérer nos projets. Grâce à leurs solutions, nous avons pu optimiser nos processus de manière significative. Le professionnalisme et l'écoute de leur équipe ont été des atouts précieux pour nous.",
    },
    {
      title: "Nadia Bouziane, Fondatrice",
      icon :"/avis/image-2.png",
      description:
        "L’équipe de SII Maroc a su transformer notre vision en réalité. Leurs solutions technologiques ont révolutionnés notre plateforme d'apprentissage en ligne, la rendant plus interactive et accessible pour nos étudiants. Leur engagement et leur créativité ont été déterminants dans le succès de notre projet.",
    },
  ];
  return <div className="container mx-auto my-24 flex flex-col gap-12">
    <h2 className="text-3xl font-bold text-center uppercase text-main-color">
    Paroles de clients satisfaits
    </h2>
    <div className="grid lg:grid-cols-2 gap-12">
      {items.map((item) => (
        <div className="flex flex-col gap-3 text-center justify-center items-center" key={item.title}>
          <p className="text-gray-500 font-semibold text-sm">{item.description}</p>
          <h2 className="font-semibold text-sm ">{item.title}</h2>
          <img src={item.icon} className="rounded-full" width={75} height={75} alt="" />
        </div>
      ))}
    </div>
  </div>;
};

export default Testimonials;
