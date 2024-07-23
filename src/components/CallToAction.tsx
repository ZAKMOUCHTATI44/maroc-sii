const CallToAction = ({title} : {title ?: string }) => {
  return (
    <a
      href={"/"}
      className="bg-[#0049F8] text-white px-12 py-3 rounded-3xl"
    >
      {title ? title : "Explorez nos solutions"}
     
    </a>
  );
};

export default CallToAction;
