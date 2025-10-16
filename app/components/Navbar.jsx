// import { assets } from '@/assets/assets'
// import Image from 'next/image'
// import React, { useEffect, useRef, useState } from 'react'

// const Navbar = () => {
//     const [isScroll, setIsScroll] = useState(false)

//     const sideMenuRef = useRef()
//     const openMenu = () => {
//         sideMenuRef.current.style.transform = "translateX(-16rem"
//     }
//     const closeMenu = () => {
//         sideMenuRef.current.style.transform = "translateX(16rem)"
//     }

//     useEffect(() => {
//         window.addEventListener('scroll', () => {
//             if (scrollY > 50) {
//                 setIsScroll(true)
//             }
//             else {
//                 setIsScroll(false)
//             }
//         })
//     }, [])

//     return (
//         <>
//             <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
//                 <Image src={assets.header_bg_color} alt="" className="w-full" />
//             </div>
//             <nav className={`w-full  px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? 'bg-white bg-opacity-50 shadow-sm backdrop-blur-md' : 'bg-transparent'} transition duration-500 fixed top-0 left-0`}>
//                 <a href="">
//                     <Image src={assets.logo} alt="logo" className="w-28 cursor-pointer mr-14" />
//                 </a>
//                 <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3  ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"} `}>
//                     <li>
//                         <a className="font-Ovo" href="#top">Home</a>
//                     </li>
//                     <li>
//                         <a className="font-Ovo" href="#about">About me</a>
//                     </li>
//                     <li>
//                         <a className="font-Ovo" href="#services">Services</a>
//                     </li>
//                     <li>
//                         <a className="font-Ovo" href="#work">My work</a>
//                     </li>
//                     <li>
//                         <a className="font-Ovo" href="#contact">Contact me</a>
//                     </li>
//                 </ul>
//                 <div className="flex items-center gap-4">
//                     <button>
//                         <Image src={assets.moon_icon} alt="" className="w-6" />
//                     </button>
//                     <a href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo">Contact <Image src={assets.arrow_icon} alt="" className="w-3" /></a>
//                     <button className="block md:hidden ml-3" onClick={openMenu}>
//                         <Image src={assets.menu_black} alt="" className="w-5" />
//                     </button>
//                 </div>



//                 {/* mobile */}
//                 <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500">

//                     <div className="absolute top-6 right-6 cursor-pointer" onClick={closeMenu}>
//                         <Image src={assets.close_black} alt="" className="w-5 cursor-pointer" />
//                     </div>

//                     <li><a className="font-Ovo" onClick={closeMenu} chref="#top">Home</a></li>
//                     <li><a className="font-Ovo" onClick={closeMenu} href="#about">About me</a></li>
//                     <li><a className="font-Ovo" onClick={closeMenu} href="#services">Services</a></li>
//                     <li><a className="font-Ovo" onClick={closeMenu} href="#work">My work</a></li>
//                     <li><a className="font-Ovo" onClick={closeMenu} href="#contact">Contact me</a></li>

//                 </ul>
//             </nav>
//         </>
//     )
// }

// export default Navbar
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef()

    const openMenu = () => {
        sideMenuRef.current.style.transform = "translateX(-16rem)"
    }
    
    const closeMenu = () => {
        sideMenuRef.current.style.transform = "translateX(16rem)"
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        }
        
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
                <Image src={assets.header_bg_color} alt="" className="w-full" />
            </div>

            <nav className={`w-full px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
                isScroll 
                    ? 'bg-white bg-opacity-50 shadow-sm backdrop-blur-md dark:bg-darkTheme/50 dark:shadow-white/20' 
                    : 'bg-transparent'
            } transition duration-500 fixed top-0 left-0`}>
                
                <a href="#top">
                    {/* <Image src={assets.logo} alt="logo" className="w-28 cursor-pointer mr-14 dark:hidden" /> */}
                    <Image src={assets.logo_dark} alt="logo" className="w-28 cursor-pointer mr-14 hidden dark:block" />
                </a>

                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
                    isScroll 
                        ? "" 
                        : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
                }`}>
                    <li><a className="font-Ovo hover:text-gray-600 dark:hover:text-gray-300" href="#top">Home</a></li>
                    <li><a className="font-Ovo hover:text-gray-600 dark:hover:text-gray-300" href="#about">About me</a></li>
                    <li><a className="font-Ovo hover:text-gray-600 dark:hover:text-gray-300" href="#services">Services</a></li>
                    <li><a className="font-Ovo hover:text-gray-600 dark:hover:text-gray-300" href="#work">My work</a></li>
                    <li><a className="font-Ovo hover:text-gray-600 dark:hover:text-gray-300" href="#contact">Contact me</a></li>
                </ul>

                <div className="flex items-center gap-4">
                    <button onClick={() => setIsDarkMode(!isDarkMode)} className="transition-transform hover:scale-110">
                        {/* <Image 
                            src={isDarkMode ? assets.sun_icon : assets.moon_icon} 
                            alt="theme toggle" 
                            className="w-6" 
                        /> */}
                    </button>

                    {/* <a 
                        href="#contact" 
                        className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50 hover:bg-lightHover dark:hover:bg-darkHover transition-colors"
                    >
                        Contact 
                        <Image src={assets.arrow_icon} alt="" className="w-3 dark:hidden" />
                        <Image src={assets.arrow_icon_dark} alt="" className="w-3 hidden dark:block" />
                    </a> */}

                    <button className="block md:hidden ml-3" onClick={openMenu}>
                        <Image src={assets.menu_black} alt="" className="w-5 dark:hidden" />
                        <Image src={assets.menu_white} alt="" className="w-5 hidden dark:block" />
                    </button>
                </div>

                <ul 
                    ref={sideMenuRef} 
                    className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 dark:bg-darkHover transition duration-500"
                >
                    <div className="absolute top-6 right-6 cursor-pointer" onClick={closeMenu}>
                        <Image src={assets.close_black} alt="" className="w-5 cursor-pointer dark:hidden" />
                        <Image src={assets.close_white} alt="" className="w-5 cursor-pointer hidden dark:block" />
                    </div>

                    <li><a className="font-Ovo dark:text-white" onClick={closeMenu} href="#top">Home</a></li>
                    <li><a className="font-Ovo dark:text-white" onClick={closeMenu} href="#about">About me</a></li>
                    <li><a className="font-Ovo dark:text-white" onClick={closeMenu} href="#services">Services</a></li>
                    <li><a className="font-Ovo dark:text-white" onClick={closeMenu} href="#work">My work</a></li>
                    <li><a className="font-Ovo dark:text-white" onClick={closeMenu} href="#contact">Contact me</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar