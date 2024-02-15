import { skill } from "../assets";
import { skillsList, workDetail } from "../constant";

const Skills = () => {
  return (
    <section className="px-[5%]" id="skill-section">
      <div className="flex items-center justify-center gap-2">
        <figure className="md:w-[70px] w-[50px] animate-bounce">
          <img src={skill} alt="Skills" />
        </figure>
        <h3 className="md:text-3xl text-2xl font-bold">
          Skill & <span className="text-primary">Expertise</span>
        </h3>
      </div>
      <div className="flex gap-6 justify-around mt-8 md:mt-24 flex-col md:flex-row">
        <div className="flex flex-wrap justify-center w-[100%] md:w-[40%] gap-6 ">
          {skillsList.map((skill) => (
            <figure
              key={skill.id}
              className="md:w-[80px] cursor-pointer rounded-md hover:shadow-md transition-all duration-300 hover:bg-[#f0f0f0] p-2 grid place-items-center h-[80px] w-[90px]"
            >
              <img
                src={skill.icon}
                className="object-cover h-full object-center"
                alt={skill.id}
              />
            </figure>
          ))}
        </div>
        <div className="flex mt-8 md:mt-0 flex-col gap-3">
          {workDetail.map((work) => (
            <div key={work.id} className="flex gap-4 items-start my-4 ">
              <h3 className="text-lg md:text-xl font-bold ">{work.year}</h3>
              <div>
                <h4 className="font-bold text-lg md:text-xl">
                  {work.position}
                </h4>
                <p>{work.companyName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
