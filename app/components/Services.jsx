// import { assets, serviceData } from '@/assets/assets'
// import Image from 'next/image'
// import React from 'react'
// import {motion} from "motion/react"
// const Services = () => {
//     return (
//         <motion.div initial={{opacity:0}}
//             whileInView={{opacity:1}}
//                 transition={{duration:1}} id="services" className="w-full px-[12%] py-10 scroll-mt-20">
//             <motion.h4 initial={{y:-20, opacity:0}}
//             whileInView={{y:0, opacity:1}}
//                 transition={{delay:0.3, duration:0.5}} className="text-center mb-2 text-lg font-Ovo">
//                 What I Offer
//             </motion.h4>
//             <motion.h2 initial={{opacity:0}}
//             whileInView={{opacity:1}}
//                 transition={{delay:0.5, duration:0.5}} className="text-center text-5xl font-Ovo">My service</motion.h2>
//             <motion.p initial={{y:-20, opacity:0}}
//             whileInView={{y:0, opacity:1}}
//                 transition={{delay:0.7, duration:0.5}} className="text-center max-w-2xl max-auto mt-5 mb-12 font-Ovo">I am a Fullstack Developer with 1 year of professional
//                 experience, currently working at a startup in Bangalore.</motion.p>
//             <motion.div initial={{opacity:0}}
//             whileInView={{opacity:1}}
//                 transition={{delay:0.9, duration:0.6}} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-10">
//               <Image src={assets.ec} className="w-250 h-50"/>
//             </motion.div>
//         </motion.div>
//     )
// }
// export default Services
import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import {motion} from "motion/react"

const Services = () => {
    const projects = [
        {
            image: assets.ec,
            title: "Ecommerce Shopping Platform",
            description: "Shop your favorite products online with seamless experience. Our platform features user registration, product catalog browsing, secure shopping cart, and integrated payment processing. Complete with admin dashboard, order management, and inventory tracking systems."
        
        },
        {
            image: assets.bl, // Add your grocery app image
            title: "Blogging Platform", 
            description: "Discover stories, tips, and insights to inspire your journey. Our platform features multi-category content organization, email subscription system, and user-friendly content management.."
        },
        {
            image: assets.te, // Add your fashion app image
            title: "Expensive Tracker",
            description: "Track and split expenses effortlessly with intelligent financial management. Our app features automated expense categorization, QR code scanning for quick receipt capture, and seamless group expense splitting. Complete with real-time balance tracking, detailed analytics, manual entry options, and comprehensive spending history reports."
        },
       
    ]

    return (
        <motion.div initial={{opacity:0}}
            whileInView={{opacity:1}}
                transition={{duration:1}} id="services" className="w-full px-[12%] py-10 scroll-mt-20">
            <motion.h4 initial={{y:-20, opacity:0}}
            whileInView={{y:0, opacity:1}}
                transition={{delay:0.3, duration:0.5}} className="text-center mb-2 text-lg font-Ovo">
                What I Build
            </motion.h4>
            <motion.h2 initial={{opacity:0}}
            whileInView={{opacity:1}}
                transition={{delay:0.5, duration:0.5}} className="text-center text-5xl font-Ovo">My Projects</motion.h2>
            <motion.p initial={{y:-20, opacity:0}}
            whileInView={{y:0, opacity:1}}
                transition={{delay:0.7, duration:0.5}} className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                Welcome to my web development portfolio! Here, you'll find a curated selection of my recent projects that showcase my skills and expertise in creating dynamic and user-friendly websites.
            </motion.p>
            <motion.div initial={{opacity:0}}
            whileInView={{opacity:1}}
                transition={{delay:0.9, duration:0.6}} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
                {projects.map((project, index) => (
                    <motion.div 
                        key={index}
                        initial={{y: 20, opacity:0}}
                        whileInView={{y: 0, opacity:1}}
                        transition={{delay: index * 0.1, duration:0.5}}
                        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="relative h-48">
                            <Image 
                                src={project.image} 
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold font-Ovo mb-3 text-gray-800">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 font-Ovo leading-relaxed">
                                {project.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Services
