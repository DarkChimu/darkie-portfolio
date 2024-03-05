const ProjectsSection = () => {
  return (
    <section className="w-full" id="projects">
      <header className="font-bold text-2xl text-amber-300/95 mb-6 flex items-center gap-3">
        <h2 data-aos="zoom-in-right">Proyectos</h2>
        <div className="i-fa-pro:briefcase text-3xl"></div>
      </header>
      <div className="grid grid-cols-3 grid-rows-6 gap-4">
        <div className="col-span-2 row-span-2 flex justify-center items-center gap-3 font-bold px-4 h-full rounded-xl shadow-social-link hover:shadow-social-link-hover transition-shadow text-white/80">
          01
        </div>
        <div className="col-span-1 row-span-2 flex justify-center items-center gap-3 font-bold px-4 h-full rounded-xl shadow-social-link hover:shadow-social-link-hover transition-shadow text-white/80">
          02
        </div>
        <div className="row-span-4 flex justify-center items-center gap-3 font-bold px-4 h-full rounded-xl shadow-social-link hover:shadow-social-link-hover transition-shadow text-white/80">
          03
        </div>
        <div className="col-span-2 row-span-2 flex justify-center items-center gap-3 font-bold px-4 h-full rounded-xl shadow-social-link hover:shadow-social-link-hover transition-shadow text-white/80">
          04
        </div>
        <div className="flex justify-center items-center gap-3 font-bold px-4 h-16 rounded-xl shadow-social-link hover:shadow-social-link-hover transition-shadow text-white/80">
          05
        </div>
        <div className="flex justify-center items-center gap-3 font-bold px-4 h-16 rounded-xl shadow-social-link hover:shadow-social-link-hover transition-shadow text-white/80">
          06
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
