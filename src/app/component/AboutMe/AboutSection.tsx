import Image from "next/image";
import thumb1 from "../../../../public/images/thumb-1.webp";
import thumb2 from "../../../../public/images/thumb-2.webp";
import Globe from "../../../../public/images/globeShape.webp";
const AboutSection = () => {
  return (
    <section className=" bg-white lg:pt-20 lg:px-[100px] pb-20">
      <div className="lg:container lg:m-auto flex flex-col max-sm:flex-col max-sm:pt-20 px-4 ">
        <div className="lg:flex lg:items-end lg:justify-between lg:pb-20 ">
          <p className="w-fit py-2 px-3 text-black border border-gray-300  ">
            ABOUT ME
          </p>
          <div>
            <h2 className="text-[#121314] max-sm:py-3 max-sm:text-7xl lg:text-8xl lg:w-[700px]">
              EMMA MITCHELL
            </h2>
            <p className="max-sm:text-2xl text-[#121314] max-sm:pt-2 max-sm:pb-16 lg:text-3xl lg:w-[700px] lg:py-[20px]">
              I have expanded in comparison for faced here with an open form in
              a state of phase transition.
            </p>
          </div>
          <Image
            src={Globe}
            alt="Globe icon"
            width={150}
            height={150}
            className="max-sm:hidden contrast-[0]"
          ></Image>
        </div>
        <div className="lg:flex lg:justify-between lg:items-center">
          <Image
            src={thumb1}
            alt="photographer's Image"
            className="lg:w-[350px] max-sm:w-[95dvw] max-sm:flex max-sm:self-center max-sm:justify-self-center max-sm:pb-20"
          ></Image>

          <div className="flex flex-col items-center lg:w-[500px]">
            <p className="text-black lg:py-10">
              Photography was always my passion and my dream job. It’s even
              difficult for me to call it a job, as I consider my profession as
              a hobby of my life. New people, catching their mood being part of
              the happiest momentы of their life. Kale chips subway tile before
              direct trade cliched hammock kinfolk deep photography.
            </p>
            <div className="max-sm:py-14 max-sm:flex gap-10 lg:flex">
              <div>
                <p className="text-black text-2xl">Years</p>
                <p className="text-black text-6xl">17+</p>
              </div>
              <div>
                <p className="text-black text-2xl">People</p>
                <p className="text-black text-6xl">100+</p>
              </div>
            </div>
          </div>
          <Image src={thumb2} alt="lady Image" className="max-sm:pb-5 "></Image>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
