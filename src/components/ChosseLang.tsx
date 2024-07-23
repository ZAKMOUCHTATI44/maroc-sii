import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

import fr from "/flags/fr.svg";
import en from "/flags/en.svg";

const langs = [
  {
    title: "Français",
    icon: fr,
    key: "fr",
  },
  {
    title: "English",
    icon: en,
    key: "en",
  },
];

const ChosseLang = () => {

  return (
    <Select defaultValue="fr">
      <SelectTrigger className="w-[80px] !outline-none bg-transparent border-transparent">
      <img src={fr} alt={"fr"} className="w-6 h-6" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {langs.map((item) => (
            <SelectItem key={item.title} value={item.key}>
              <div className="flex gap-2">
                <img src={item.icon} alt={item.title} className="w-6 h-6" />
                {item.title}
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};


export default ChosseLang;