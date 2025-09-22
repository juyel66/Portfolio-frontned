


// "use client"
// import { useState, useEffect } from "react"
// import Link from "next/link"
// import { usePathname } from "next/navigation"

// const Menubar = () => {
//   const pathname = usePathname()
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)

//   // Handle scroll effect for navbar
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20)
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen)
//   }

//   // Prevent scrolling when mobile menu is open
//   useEffect(() => {
//     if (isMenuOpen) {
//       document.body.style.overflow = "hidden"
//     } else {
//       document.body.style.overflow = "unset"
//     }

//     return () => {
//       document.body.style.overflow = "unset"
//     }
//   }, [isMenuOpen])

//   const navLinks = [
//     { path: "/", label: "Home" },
//     { path: "/projects", label: "Projects" },
//     { path: "/contact", label: "Contact" },
//   ]

//   // Helper function to conditionally join class names
//   const classNames = (...classes: (string | boolean | undefined)[]) => {
//     return classes.filter(Boolean).join(" ")
//   }

//   return (
//     <nav
//       className={classNames(
//         "fixed w-full container mx-auto top-0 z-50 transition-all duration-300",
//         scrolled ? "bg-gray-900/95 backdrop-blur-md shadow-lg py-3" : "bg-gray-900 py-4",
//       )}
//     >
//       <div className="container mx-auto px-4 flex justify-between items-center">
//         <Link href="/" className="text-2xl font-bold text-white hover:text-green-400 transition-colors duration-300">
//           <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">HUMAYUN</span>
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center space-x-8">
//           <div className="flex space-x-8">
//             {navLinks.map((link) => (
//               <Link key={link.path} href={link.path} className="group relative">
//                 <span
//                   className={classNames(
//                     "font-medium text-sm tracking-wide transition-colors duration-300",
//                     pathname === link.path ? "text-green-400" : "text-gray-300 hover:text-white",
//                   )}
//                 >
//                   {link.label}
//                 </span>
//                 <span
//                   className={classNames(
//                     "absolute -bottom-1 left-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full",
//                     pathname === link.path ? "w-full" : "w-0",
//                   )}
//                 />
//               </Link>
//             ))}
//           </div>

//           <Link
//             href="https://drive.google.com/uc?export=download&id=1JO2XZZ4wocv5SC5CtjYhSHVJ4DFSIDJo"
//             className="ml-4"
//           >
//             <button className="px-4 py-2 rounded-md bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2">
//               Resume
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="h-4 w-4"
//               >
//                 <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
//                 <polyline points="7 10 12 15 17 10" />
//                 <line x1="12" x2="12" y1="15" y2="3" />
//               </svg>
//             </button>
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={toggleMenu}
//           className="md:hidden p-2 rounded-lg text-gray-200 hover:text-white hover:bg-gray-800 transition-colors z-50"
//           aria-label="Toggle menu"
//         >
//           {isMenuOpen ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="w-6 h-6"
//             >
//               <line x1="18" y1="6" x2="6" y2="18" />
//               <line x1="6" y1="6" x2="18" y2="18" />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="w-6 h-6"
//             >
//               <line x1="4" y1="12" x2="20" y2="12" />
//               <line x1="4" y1="6" x2="20" y2="6" />
//               <line x1="4" y1="18" x2="20" y2="18" />
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu Overlay */}
//       <div
//         className={classNames(
//           "md:hidden fixed inset-0 bg-gray-900/98 backdrop-blur-md z-40 transition-all duration-300 ease-in-out",
//           isMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-10 pointer-events-none",
//         )}
//       >
//         <div className="flex flex-col items-center justify-center h-full space-y-8">
//           {navLinks.map((link, index) => (
//             <div
//               key={link.path}
//               className={classNames(
//                 "transition-all duration-300",
//                 isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
//               )}
//               style={{ transitionDelay: `${index * 50}ms` }}
//             >
//               <Link
//                 href={link.path}
//                 className={classNames(
//                   "text-2xl font-bold relative group",
//                   pathname === link.path ? "text-green-400" : "text-white",
//                 )}
//                 onClick={toggleMenu}
//               >
//                 {link.label}
//                 <span
//                   className={classNames(
//                     "absolute -bottom-2 left-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full",
//                     pathname === link.path ? "w-full" : "w-0",
//                   )}
//                 />
//               </Link>
//             </div>
//           ))}

//           <div
//             className={classNames(
//               "transition-all duration-300",
//               isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
//             )}
//             style={{ transitionDelay: "300ms" }}
//           >
//             <Link
//               href="https://drive.google.com/uc?export=download&id=1JO2XZZ4wocv5SC5CtjYhSHVJ4DFSIDJo"
//               onClick={toggleMenu}
//             >
//               <button className="px-6 py-3 rounded-md bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
//                 Resume
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="20"
//                   height="20"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="h-5 w-5"
//                 >
//                   <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
//                   <polyline points="7 10 12 15 17 10" />
//                   <line x1="12" x2="12" y1="15" y2="3" />
//                 </svg>
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Menubar



"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Menubar = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/blog", label: "Blogs" },
    { path: "/contact", label: "Contact" },
  ]

  // Helper function to conditionally join class names
  const classNames = (...classes: (string | boolean | undefined)[]) => {
    return classes.filter(Boolean).join(" ")
  }

  return (
    <nav
      className={classNames(
        "fixed w-full container mx-auto top-0 z-50 transition-all duration-300",
        scrolled ? "bg-gray-900/95 backdrop-blur-md shadow-lg py-3" : "bg-[#000022] py-4",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white hover:text-green-400 transition-colors duration-300">
          <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent text-3xl ">MD. JUYEL RANA</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-8 ">
        {navLinks.map((link) => (
  <Link key={link.path} href={link.path} className="group relative">
    <span
      className={classNames(
        "font-medium text-xl tracking-wide transition-colors duration-300",
        pathname === link.path ? "text-green-400" : "text-gray-300 hover:text-white",
      )}
    >
      {link.label}
    </span>
    <span
      className={classNames(
        "absolute -bottom-1 left-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full",
        pathname === link.path ? "w-full" : "w-0",
      )}
    />
  </Link>
))}
          </div>

          <Link
            href="https://drive.google.com/uc?export=download&id=1xg-IaIbevVHy-NZEPNk8odRc-uo04Ez9"
            className="ml-4"
          >
            <button className="px-4 py-2 rounded-md bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 flex text-xl items-center gap-2">
              Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg text-gray-200 hover:text-white hover:bg-gray-800 transition-colors z-[101]"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={classNames(
          "md:hidden fixed inset-0 w-screen h-screen bg-gray-900 z-[100] overflow-hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none",
        )}
        style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link, index) => (
            <div
              key={link.path}
              className={classNames(
                "transition-all duration-300",
                isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              )}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <Link
                href={link.path}
                className={classNames(
                  "text-2xl font-bold relative group",
                  pathname === link.path ? "text-green-400" : "text-white",
                )}
                onClick={toggleMenu}
              >
                {link.label}
                <span
                  className={classNames(
                    "absolute -bottom-2 left-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full",
                    pathname === link.path ? "w-full" : "w-0",
                  )}
                />
              </Link>
            </div>
          ))}

          <div
            className={classNames(
              "transition-all duration-300",
              isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            )}
            style={{ transitionDelay: "300ms" }}
          >
            <Link
              href="https://drive.google.com/uc?export=download&id=1JO2XZZ4wocv5SC5CtjYhSHVJ4DFSIDJo"
              onClick={toggleMenu}
            >
              <button className="px-6 py-3 rounded-md bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                Resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Menubar
