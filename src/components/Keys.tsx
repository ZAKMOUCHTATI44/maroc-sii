import React from "react";
import Counter from "./Counter";

const Keys = () => {
  const keys = [
    {
      value: 250,
      label: "Experts engagés à vos côtés",
    },
    {
      value: 12,
      label: "De croissance en 2023",
      icon:"%"
    },
    {
      value: 16 ,
      label: "D'innovation et d'excellence",
      icon:"ans"
    },
    {
      value: 1.6,
      label: "D’euros de CA en 2023",
      icon:"M"
    },
  ];
  return (
    <div className="py-16 bg-keys text-white mt-12 mx-5 rounded-2xl">
      <h3 className="lg:text-5xl  text-2xl font-bold text-center">
        L'ascension fulgurante de SII Maroc
      </h3>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-12 my-14">
        {keys.map((number) => (
          <div key={number.label} className=" text-center  flex flex-col gap-5">
            <span className="lg:text-6xl md:text-5xl text-3xl  font-bold">
              <Counter target={number.value} label={number.icon} />
            </span>
            <span className="lg:text-xl text-2xl font-semibold capitalize">
              {number.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Keys;
