import { laptop, wave } from "../assets";
import { aboutSection } from "../constant";
import { LocalPhoneIcon } from "./icons";

const AboutMe = () => {
  return (
    <>
      <section className="bg-primary relative py-[95px]" id="about-me-section">
        <img src={wave} alt="wave-img" className="absolute w-full top-[-1px]" />
        <img
          src={laptop}
          alt="laptop"
          className="absolute top-[-30%] md:top-[-45%] scale-50  left-[-23%] md:w-[400px] md:left-[-100px]"
        />
        <div className="text-center my-2">
          <h4 className="text-3xl font-semibold text-white">
            About <span className="text-black">Me</span>
          </h4>
        </div>
        <p className="px-2 mt-6  max-w-[1000px] mx-auto md:text-center text-white text-base">
          My name is Varun Salat. I am a Web Developer. I can make supersonic
          websites, landing pages, and web apps to fulfill your needs. I&rsquo;m
          the web developer you need. I have the skills to make your website or
          landing page.
        </p>
        <a
          href="#"
          className="mx-auto w-fit mt-4 gap-1 border border-white px-2 py-1 transition-all duration-300 hover:bg-white hover:text-black text-white rounded-md flex"
        >
          Contact Me
          <span className="block scale-[0.7]">
            <LocalPhoneIcon />
          </span>
        </a>
      </section>
      <section className=" flex justify-center flex-wrap gap-[4em] mt-[-6em] relative z-20">
        {aboutSection.map((card) => (
          <div
            key={card.id}
            className="group w-[min(300px,90%)] rounded-md overflow-hidden hover:bg-primary hover:text-white transition-all duration-300 p-3"
          >
            <figure className="w-fit rounded-sm overflow-hidden">
              <img src={card.image} alt={card.title} />
            </figure>
            <article className="text-center">
              <h4 className="font-bold text-lg md:text-xl">{card.title}</h4>
              <p className="mt-1 group-hover:text-slate-300 text-secondaryBlack text-sm">
                {card.desc}
              </p>
            </article>
          </div>
        ))}
      </section>
    </>
  );
};

export default AboutMe;
