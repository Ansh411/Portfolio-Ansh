import { mySocials } from "../constants/index";

const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm
     text-neutral-400 c-space">
      <div className="mb-4 bg-linear-to-r from-transparent via-neutral-700 to-transparent h-px w-full" /> 
      <div className="flex gap-2">
        <p className="">Terms & Conditions</p>
        <p className="">|</p>
        <p className="">Privacy Policy</p>
      </div> 
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
           <a href={social.href} key={index}>
            <img src={social.icon} alt={social.name} className="w-5 h-5" />
           </a> 
        ))}
      </div>
      <p>&copy; {new Date().getFullYear()} Ansh. 🤍 All rights reserved. </p>
    </section>
  );
};

export default Footer;