

"use client"

import { Github, Linkedin, Facebook } from "lucide-react"

const SocialIcons = () => {
  const socialLinks = [
    { icon: <Github size={20} />, url: "hhttps://github.com/HumayunKabirSobuj", label: "GitHub" },
    { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/devhumayun123", label: "LinkedIn" },
    { icon: <Facebook size={20} />, url: "https://web.facebook.com/md.humayunkabirsobuj506034", label: "Facebook" },
  ]

  return (
    <div className="flex gap-4">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="h-10 w-10 rounded-full bg-gray-800 hover:bg-blue-500 flex items-center justify-center transition-colors duration-300"
        >
          {social.icon}
        </a>
      ))}
    </div>
  )
}

export default SocialIcons
