import { CVicon, RadarIcon } from "@/components/core/Icons";
import useDownload from "@/hooks/useDownload";

const PresentationSection = () => {
  const { handleDownload } = useDownload();

  return (
    <section className="flex flex-col sm:flex-row items-center gap-5">
      <div
        id="avatar"
        className="relative w-44 h-44 bg-amber-300/95 border-8 border-amber-600/30 shadow-lg rounded-full overflow-hidden"
        data-aos="flip-right"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <img src="/yo pixiv.webp" alt="yo" width={"100%"} height={"100%"} />
      </div>
      <div className="flex flex-col items-center sm:items-start gap-3">
        <div className="flex flex-col items-left gap-2">
          <h1
            className="text-2xl sm:text-4xl text-center sm:text-left font-bold text-slate-100"
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
          >
            Danyhover Bruzual
          </h1>
          <p
            className="text-slate-300 text-sm sm:text-lg  max-w-xl rounded-2xl sm:text-left xs:text-center"
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-easing="ease-in-sine"
          >
            Soy Desarrollador FullStack
          </p>
        </div>
        <div className="flex gap-3">
          <div className="relative group/tooltip">
            <div className="p-2.5 rounded-xl grid place-items-center bg-emerald-500">
              <div className=" text-white">
                <RadarIcon />
              </div>
            </div>
            <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">
              Looking for job
            </span>
          </div>
          <button
            className="flex items-center text-sm gap-3 bg-amber-300/95 hover:bg-opacity-90 text-neutral-800 py-2 px-4 rounded-lg font-semibold"
            onClick={() =>
              handleDownload({
                url: "https://darkie-portfolio.vercel.app/Danyhover_Resume.pdf",
                fileName: "Danyhover_Bruzual_Resume.pdf",
              })
            }
          >
            <div className="text-xl sm:text-lg z-auto">
              <CVicon />
            </div>
            Currículum
          </button>
        </div>
      </div>
    </section>
  );
};

export default PresentationSection;
