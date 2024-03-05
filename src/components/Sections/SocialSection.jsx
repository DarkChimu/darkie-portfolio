import { GithubIcon, LinkedInIcon } from "@/components/core/Icons";

const SocialSection = () => {
  return (
    <section className="w-full">
      <header className="font-bold text-2xl text-amber-300/95 mb-6 flex items-center gap-3">
        <h2>Socials</h2>
        <div className="i-fa-pro:at text-3xl"></div>
      </header>
      <div className="flex flex-wrap gap-3">
        <a
          href="https://www.linkedin.com/in/danyhover-bruzual-79035b2b3/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 font-bold px-4 h-16 rounded-xl shadow-social-link hover:shadow-social-link-hover  transition-shadow text-sky-600"
        >
          <div className="text-2xl">
            <LinkedInIcon />
          </div>
          Linkedin
        </a>
        <a
          href="https://github.com/DarkChimu"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 font-bold px-4 h-16 rounded-xl shadow-social-link hover:shadow-social-link-hover  transition-shadow text-white/80"
        >
          <div className="text-2xl">
            <GithubIcon />
          </div>
          Github
        </a>
        {/* <a
          href="https://twitter.com/edurl_dev"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 font-bold px-4 h-16 rounded-xl shadow-social-link hover:shadow-social-link-hover  transition-shadow text-blue-400"
        >
          <div className="i-fa-brand:twitter text-2xl"></div>Twitter
        </a>
        <a
          href="https://dribbble.com/edudotdev"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 font-bold px-4 h-16 rounded-xl shadow-social-link hover:shadow-social-link-hover  transition-shadow text-pink-400"
        >
          <div className="i-fa-brand:dribbble text-2xl"></div>Dribbble
        </a> */}
      </div>
    </section>
  );
};

export default SocialSection;
