import style from "./Demo.module.css";


const imageSection = [
  { name: "image1", para: "BRAND PROMOTION" },
  { name: "image2", para: "COMMERCIAL" },
  { name: "image3", para: "WEDDING" },
  { name: "image4", para: "PORTRAIT" },
];

const DemoSection = () => {
  return (
    <section className="lg:container lg:m-auto flex flex-col items-center justify-center mt-[40px] mb-[128px] overflow-hidden">
      <div className="flex items-center justify-between mb-10 px-5 w-[95%]">
        <span>Scroll to Explore</span>
        <span>Selected Case Studies (04)</span>
      </div>
      <div className={`${style.imageSection} max-sm:flex-col `}>
        {imageSection.map((item, index) => {
          // use bracket notation to access the CSS module class by name
          const cls = style[item.name as keyof typeof style] as
            | string
            | undefined;
          return (
            <div key={index} className={cls ?? ""}>
              <p className="lg:absolute lg:bottom-0">{item.para}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DemoSection;
