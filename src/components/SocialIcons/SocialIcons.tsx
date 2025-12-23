import { Github, Linkedin, Facebook } from "lucide-react";

const SocialIcons = () => {
  const socialLinks = [
    {
      icon: <Github size={20} className="text-white" />,
      url: "https://github.com/juyel66/",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={20} className="text-white" />,
      url: "https://www.linkedin.com/in/md-juyel-rana/",
      label: "LinkedIn",
    },
    {
      icon: <Facebook size={20} className="text-white" />,
      url: "https://www.facebook.com/juyel99730/",
      label: "Facebook",
    },
  ];

  return (
    <div className="flex gap-4">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="h-10 w-10 rounded-full bg-gray-800 hover:bg-blue-500 flex items-center justify-center transition-colors duration-300 text-white"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
