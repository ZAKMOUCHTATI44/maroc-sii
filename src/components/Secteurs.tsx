import { BriefcaseBusiness, Cpu, GraduationCap, HeartPulse , Receipt } from "lucide-react";

const Secteurs = () => {
  const items = [
    {
      title: "Tech et Télécoms",
      icon : <Cpu />,
      description:
        "La connectivité et la performance technologique sont boostées par des solutions sur mesure.",
    },
    {
      title: "Finance et Banque",
      icon : <Receipt />,
      description:
        "Des solutions technologiques robustes qui sécurisent et optimisent les opérations financières.",
    },
    {
      title: "Santé et Pharma",
      icon : <Receipt />,
      description:
        "Améliorer la qualité des soins et optimiser les processus pharmaceutiques avec des solutions numériques de pointe",
    },
    {
      title: "Industrie et Manufacture",
      icon : <HeartPulse />,
      description:
        "Maximiser l'efficacité des processus industriels avec des solutions technologiques sur mesure",
    },
    {
      title: "Secteur Public",
      icon : <BriefcaseBusiness />,
      description:
        "Moderniser vos services avec des solutions digitales efficaces",
    },
    {
      title: "Éducation et Recherche",
      icon : <GraduationCap />,
      description:
        "Transformer l'éducation avec des technologies de pointe pour un apprentissage amélioré",
    },
  ];
  return (
    <div className="bg-[#f2f5fe]">
        <div className="container mx-auto py-24">
        <div className="lg:w-1/2 mx-auto text-center">
            <h2 className="text-3xl font-bold uppercase">
            Des solutions sur mesure <br />{" "}
            <span className="text-main-color">pour chaque secteur</span>
            </h2>
            <p className="text-gray-600 my-5">
            Nous comprenons les spécificités de chaque secteur et offrons des
            solutions adaptées à vos besoins. Notre objectif est de comprendre vos
            défis et de vous aider à atteindre vos objectifs.
            </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-5">
            {items.map((item) => (
            <div key={item.title} className="bg-blue-800 p-5 text-white flex flex-col gap-3 rounded-2xl">
                <div className="flex justify-between">
                    <h2 className="text-xl font-semibold">
                        {item.title}
                    </h2>
                    {item.icon}
                </div>
                <p>
                    {item.description}
                </p>
            </div>
            ))}
        </div>
        </div>
    </div>
  );
};

export default Secteurs;
