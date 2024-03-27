import { SiTypescript, SiRedux, SiAxios, SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";

const ProjectsSection = () => {
  const randomize = () => Math.floor(Math.random() * 3) + 1000;

  return (
    <section className="w-full" id="projects">
      <header className="font-bold text-2xl text-amber-300/95 mb-6 flex items-center gap-3">
        <h2 data-aos="zoom-in-right">Projects</h2>
        <div className="i-fa-pro:briefcase text-3xl"></div>
      </header>
      <div className="grid grid-cols-3 grid-rows-6 gap-4">
        {/* <div
          className="col-span-1 row-span-2 flex justify-center items-center gap-3 font-bold px-4 h-full rounded-xl shadow-social-link hover:shadow-social-link-hover transition-shadow text-white/80"
          data-aos="fade-up"
          data-aos-duration={randomize()}
        >
          01
        </div>
        <div
          className="col-span-1 row-span-2 flex justify-center items-center gap-3 font-bold px-4 h-full rounded-xl shadow-social-link hover:shadow-social-link-hover transition-shadow text-white/80"
          data-aos="fade-up"
          data-aos-duration={randomize()}
        >
          02
        </div> */}

        <div
          className="relative row-span-5 has-tooltip w-full"
          data-aos="fade-up"
          data-aos-duration={randomize()}
        >
          <div className="tooltip rounded-lg pt-2 pb-3 px-1 text-slate-300 bg-neutral-800 -right-52 -top-52 shadow-social-link hover:shadow-social-link-hover transition-shadow max-w-fit">
            <div>
              <img
                src="/pokeme.png"
                className="rounded-lg h-64"
                style={{
                  aspectRatio: "1/1",
                  objectFit: "contain",
                  margin: "0 auto",
                }}
              />
              <div className="flex flex-col gap-2 w-full mx-4 pt-2">
                <h3>Darkie&apos;s Pokédex</h3>
                <div className="flex flex-row gap-2 items-center">
                  <h4 className="text-slate-300">Stack:</h4>
                  <div className="flex flex-row gap-2">
                    <SiTypescript title="TypeScript" />
                    <FaReact title="React" />
                    <SiRedux title="Redux Toolkit" />
                    <SiAxios title="Axios" />
                    <SiTailwindcss title="TailwindCSS" />
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <div className="p-1 rounded shadow-social-link hover:shadow-social-link-hover">
                    <a
                      target="_blank"
                      href="https://darkie-pokedex.vercel.app"
                      className="text-amber-300 hover:text-amber-200"
                    >
                      Live Demo
                    </a>
                  </div>

                  <div className="p-1 rounded shadow-social-link hover:shadow-social-link-hover">
                    <a
                      target="_blank"
                      href="https://github.com/DarkChimu/darkie-pokedex"
                      className="text-slate-300 hover:text-slate-200"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex justify-center items-center gap-3 font-bold px-4 h-full rounded-xl transition-shadow text-white/80 cursor-pointer"
            id="project"
          >
            <img src="/POKESCREENSHOTTRANSPARENT.png" alt="" width={"100%"} />
          </div>
        </div>

        {/* <div
          className="col-span-2 row-span-2 flex justify-center items-center gap-3 font-bold px-4 h-full rounded-xl shadow-social-link hover:shadow-social-link-hover transition-shadow text-white/80"
          data-aos="fade-up"
          data-aos-duration={randomize()}
        >
          04
        </div>
        <div
          className="flex justify-center items-center gap-3 font-bold px-4 h-16 rounded-xl shadow-social-link hover:shadow-social-link-hover transition-shadow text-white/80"
          data-aos="fade-up"
          data-aos-duration={randomize()}
        >
          05
        </div>
        <div
          className="flex justify-center items-center gap-3 font-bold px-4 h-16 rounded-xl shadow-social-link hover:shadow-social-link-hover transition-shadow text-white/80"
          data-aos="fade-up"
          data-aos-duration={randomize()}
        >
          06
        </div> */}
      </div>
    </section>
  );
};

export default ProjectsSection;
