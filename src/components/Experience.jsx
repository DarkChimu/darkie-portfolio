const Experience = ({
  JobName = "",
  startDate = "",
  endDate = "",
  description = "",
  responsabilites = [],
  techs = [],
  animation = "",
  animationDuration,
}) => {
  return (
    <div
      className="flex flex-col gap-10 mb-6"
      data-aos={animation}
      data-aos-duration={animationDuration}
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1 ">
          <h2 className="text-lg font-semibold text-slate-200">{JobName}</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {startDate} — {endDate ?? "Present"}
          </p>
        </div>
        {techs.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {techs.map((tech, index) => (
              <span
                key={index}
                className="text-xs text-slate-500 dark:text-slate-400"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        {description && (
          <div className="text-md text-gray-300" style={{ maxWidth: "70ch" }}>
            {description}
          </div>
        )}
        {responsabilites.length > 0 && (
          <>
            <div className="text-md text-gray-300">Responsabilidades:</div>
            <ul className="list-disc flex flex-col gap-2 ml-5 text-gray-300 text-md">
              {responsabilites.map((responsabilite, index) => (
                <li key={index} style={{ maxWidth: "70ch" }}>
                  {responsabilite}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Experience;
