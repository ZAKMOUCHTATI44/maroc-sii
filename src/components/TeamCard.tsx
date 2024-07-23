import { Team } from "..";

const TeamCard = ({ team }: { team: Team }) => {

  return (
    <div className="relative py-4">
      <img
        src={team.image}
        alt={team.jobTitle}
        width={500}
        height={500}
        className="grayscale-[20%] rounded-3xl"
      />
      <div className="absolute z-50 top-5 -bottom-0 p-5 text-center text-white w-full h-[95%] flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold">{team.name}</h2>
        </div>
        <div>
          <p className="text-xl font-bold">{team.jobTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
