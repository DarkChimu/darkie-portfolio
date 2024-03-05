import { MoonIcon, SunIcon } from "@/components/core/Icons";

const Header = () => {
  return (
    <div className="mx-auto max-w-3xl sticky top-0 z-10">
      <header className="-full bottom-0 static flex justify-end items-center py-1 px-5 z-20 bg-neutral-800 bg-opacity-80 backdrop-blur-lg">
        {
          <button className="py-4 px-2 sm:py-5 flex items-center gap-4 outline-none">
            <div className="text-2xl dark:hidden text-slate-100">
              <SunIcon />
            </div>
            <div className="text-2xl hidden dark:block text-slate-100">
              <MoonIcon />
            </div>
          </button>
        }
      </header>
    </div>
  );
};

export default Header;
