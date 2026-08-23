import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item px-4">
      <img 
        src={icon.imgPath} 
        alt={icon.name} 
        className="max-h-12 md:max-h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
        onError={(e) => {
          e.target.style.display = 'none';
          console.error(`Failed to load logo: ${icon.name}`);
        }}
      />
    </div>
  );
};

const LogoShowcase = () => (
  <div className="md:my-20 my-10 relative">
    <div className="gradient-edge" />
    <div className="gradient-edge" />

    <div className="marquee h-52">
      <div className="marquee-box md:gap-12 gap-5">
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}

        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}
      </div>
    </div>
  </div>
);

export default LogoShowcase;
