import { FaGithub } from "react-icons/fa6";

const FooterSection = () => {
  return (
    <footer className="flex justify-center items-baseline space-x-2 bg-white text-zinc-900 text-center py-2">
      <p className="text-lg" ><FaGithub /></p>
      <p>for source code in github:</p>
      <a className="bg-slate-800 py-1 px-2 text-white rounded-md hover:bg-slate-400 hover:text-slate-900 transition" href="https://github.com/boomtnt2843/gsap-showcase" target="_blank">Boom.Phattarapong</a>
    </footer>
  );
};

export default FooterSection;
