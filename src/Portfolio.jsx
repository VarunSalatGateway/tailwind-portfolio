import { useEffect, useState } from "react";
import { robo } from "./assets";
import { portfolio, portfolioBtns } from "./constant";

const Portfolio = () => {
  const [projectType, setProjectType] = useState("All");
  const [projectList, setProjectList] = useState([]);
  useEffect(() => {
    if (projectType === "All") {
      setProjectList(portfolio);
    } else {
      const updatedList = portfolio.filter((item) => item.type === projectType);
      setProjectList(updatedList);
    }
  }, [projectType]);
  return (
    <section className="px-[5%]" id="portfolio-section">
      <div className="flex items-center justify-center gap-2">
        <h3 className="md:text-3xl text-2xl font-bold">
          My Creative <span className="text-primary">Portfolio</span>
        </h3>
        <figure className="w-[50px] md:w-[70px] animate-bounce">
          <img src={robo} alt="Skills" />
        </figure>
      </div>
      <div className="flex gap-4 justify-center mt-4 flex-wrap">
        {portfolioBtns.map((btn) => (
          <button
            key={btn.id}
            className={`text-primary font-semibold px-2 py-1 rounded-md border-2 transition-all duration-300 ${
              projectType === btn.name ? "bg-primary text-white" : ""
            } hover:bg-primary hover:text-white text-base border-primary`}
            onClick={() => setProjectType(btn.name)}
          >
            {btn.name}
          </button>
        ))}
      </div>
      <div className="flex gap-4 flex-wrap mt-14 justify-center">
        {projectList.map((item) => (
          <a
            href={item.url}
            target="_blank"
            rel="noreferrer"
            key={item.id}
            className="group rounded-md p-2 w-[min(400px,100%)] overflow-hidden transition-all shadow-lg duration-200 hover:bg-[#dcdcdc]"
          >
            <figure className="rounded-md border h-[200px] bg-gray-400 overflow-hidden">
              <img
                className=" h-full w-full object-cover object-center"
                src={item.imageUrl}
                alt=""
              />
            </figure>
            <article className="text-center mt-2">
              <h3 className="font-semibold text-xl">{item.title}</h3>
              <p className="text-sm text-slate-700 group-hover:text-black">
                Technologies: {item.technologies}
              </p>
            </article>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
