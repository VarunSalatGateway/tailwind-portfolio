import { InstagramIcon, LinkedInIcon } from "./icons";
const Footer = () => {
  return (
    <footer className="min-h-[200px] grid items-center justify-center w-screen bg-[#f8f8f8]">
      <div className="text-center">
        <div className="flex justify-center mb-4 gap-12 text-4xl">
          <a
            href="#"
            className="text-[#4a4848] transition-all duration-300 hover:text-black"
            target="_blank"
          >
            <span className="block scale-[1.5]">
              <InstagramIcon />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/varun-salat-709a0a19a"
            className="text-[#4a4848] transition-all duration-300 hover:text-black"
            target="_blank"
            rel="noreferrer"
          >
            <span className="block scale-[1.5]">
              <LinkedInIcon />
            </span>
          </a>
        </div>
        <p className="font-medium mt-6 flex gap-2">
          All rights reserved by
          <span className="text-primary font-bold">Varun Salat</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
