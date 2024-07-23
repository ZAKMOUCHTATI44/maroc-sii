import { Team } from "..";
import TeamCard from "./TeamCard";

const Teams = () => {
  const teams: Team[] = [
    {
      name: "Moncef Rahmouni",
      jobTitle: "Delivery Manager",
      image: "/teams/1648230717560.jpeg",
    },
    {
      name: "Mimouna Boujjouf",
      jobTitle: "Business Manager",
      image: "/teams/1707605147042.jpeg",
    },
    {
        name: "Amine Dendane",
        jobTitle: "Business Manager",
        image: "/teams/1605533153836.jpeg"
    },
  ];
  return (
    <div className="container mx-auto">
      <h2 className="font-bold text-3xl text-center my-12">
        L'ÉQUIPE QUI FAIT LA DIFFÉRENCE
      </h2>
      <div className="grid lg:grid-cols-3 gap-5">
        {teams.map((team) => (
          <TeamCard key={team.name} team={team} />
        ))}
      </div>
    </div>
  );
};

export default Teams;
