import SocialIcons from "../SocialIcons/SocialIcons";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="container mx-auto px-5 py-12 border-t border-gray-800 text-white">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold ">HUMAYUN</h1>
        </div>
        <div className="flex justify-center flex-col md:flex-row items-center gap-5 pt-5">
          <h1 className="text-xl font-semibold">Follow Me : </h1>
          <SocialIcons />
        </div>
      </div>
      <p className="pt-10 text-center md:text-end">
        &copy;{currentYear} All Right Reserved By HUMAYUN
      </p>
    </div>
  );
};

export default Footer;
