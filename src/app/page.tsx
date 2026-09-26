import Typewriter from "@/components/ui/Typewriter";
import { PROFILE } from "@/constants/profile";
import { BsJavascript } from "react-icons/bs";
import { DiHtml5 } from "react-icons/di";
import { FaCss3, FaCss3Alt, FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";

export default function Portfolio() {
  return (
    <main className="flex-1 flex gap-10 justify-center mx-30">
      <div className="flex flex-col justify-end mt-30 mx-10 mb-10 items-center">
        <img src="/profile.png" alt="profile.jpg" className="w-150 border-b" />
        <h1 className="text-xl uppercase">
          ~ <span className="font-bold text-blue-900">marcel wang</span> ~
        </h1>
      </div>

      <div className="flex flex-col px-20 justify-center">
        <div className="flex h-5 items-end">
          <p className="text-xl flex items-center">Hello, World!</p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-4xl uppercase z-2 font-medium italic -mb-5">
            my name is ...
          </h1>
          <div className="flex text-9xl font-specialGothicCondensed uppercase">
            <p className="font-normal text-black">
              <span className="text-blue-900 font-black">
                {PROFILE.frontName}
              </span>
            </p>
            <span className="text-blue-900 font-black ml-3">
              {PROFILE.backName}
            </span>
          </div>
        </div>

        <p className="text-lg">Technologies I use:</p>
        <div className="flex flex-wrap gap-x-5">
          <div className="rounded-full shadow-2xl py-1 px-3 flex items-center gap-2 mb-5 cursor-pointer hover:scale-110 bg-[#E34F26] text-white">
            <DiHtml5 size={25} />
            <p className="text-lg">HTML5</p>
          </div>

          <div className="rounded-full shadow-2xl py-1 px-3 flex items-center gap-2 mb-5 cursor-pointer hover:scale-110 bg-[#1572B6] text-white">
            <FaCss3Alt size={25} />
            <p className="text-lg">CSS3</p>
          </div>

          <div className="rounded-full shadow-2xl py-1 px-3 flex items-center gap-2 mb-5 cursor-pointer hover:scale-110 bg-[#38BDF8] text-white">
            <FaReact size={25} />
            <p className="text-lg">TailwindCSS</p>
          </div>

          <div className="rounded-full shadow-2xl py-1 px-3 flex items-center gap-2 mb-5 cursor-pointer hover:scale-110 bg-[#F7DF1E] text-white">
            <BsJavascript size={25} />
            <p className="text-lg">Javascript</p>
          </div>

          <div className="rounded-full shadow-2xl py-1 px-3 flex items-center gap-2 mb-5 cursor-pointer hover:scale-110 bg-[#61DAFB] text-white">
            <FaReact size={25} />
            <p className="text-lg">ReactJS</p>
          </div>

          <div className="rounded-full shadow-2xl py-1 px-3 flex items-center gap-2 mb-5 cursor-pointer hover:scale-110 bg-black text-white">
            <RiNextjsLine size={25} />
            <p className="text-lg">NextJS</p>
          </div>
        </div>

        <div className="flex flex-col gap-5 -mt-2">
          <div className="px-4 py-2 rounded-full bg-black flex w-fit gap-3 items-center">
            <h1 className="font-bold uppercase text-white">web developer</h1>
            <div className="rounded-full w-[18px] h-[18px] bg-green-400"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
