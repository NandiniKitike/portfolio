// // import { assets, workData } from '@/assets/assets'
// // import Image from 'next/image'
// // import React from 'react'

// // const Work = () => {
// //     return (
// //         <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
// //             <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
// //             <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
// //             <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
// //                 Welcome to my web development portfolio! Here, you'll find a curated selection of my recent projects that showcase my skills
// //                 and expertise in creating dynamic and user-friendly websites. Each project highlights my ability to combine creativity with technical proficiency, delivering solutions that meet client needs and exceed expectations. Feel free to explore and see how I can bring your ideas to life through innovative web design and development.
// //             </p>
// //             <div className="grid grid-cols-auto my-10 gap-5">
// //                 {workData.map((project, index) => (
// //                     <div key={index} className="" style={{ backgroundImage: `url(${project.bgImage})` }}>
// //                         <div>
// //                             <h2>{project.title}</h2>
// //                             <p>{project.description}</p>
// //                         </div>
// //                         <div>
// //                             <Image src={assets.send_icon} alt="" className="w-4" />
// //                         </div>
// //                     </div>

// //                 ))}
// //             </div>
// //         </div>
// //     )
// // }

// // export default Work
// import { assets, workData } from '@/assets/assets'
// import Image from 'next/image'
// import React from 'react'
// import {motion} from "motion/react"
// const Work = () => {
//     return (
//         <motion.div initial={{opacity:0}}
//             whileInView={{opacity:1}}
//                 transition={{duration:1}} id="work" className="w-full px-[12%] py-10 scroll-mt-20">
//             <motion.h4 initial={{y:-20, opacity:0}}
//             whileInView={{y:0, opacity:1}}
//                 transition={{duration:0.5, delay:0.3}} className="text-center mb-2 text-lg font-Ovo">My portfolio</motion.h4>
//             <motion.h2 initial={{y:-20, opacity:0}}
//             whileInView={{y:0, opacity:1}}
//                 transition={{duration:0.5, delay:0.3}} className="text-center text-5xl font-Ovo">My latest work</motion.h2>
//             <motion.p initial={{opacity:0}}
//             whileInView={{opacity:1}}
//                 transition={{duration:0.5, delay:0.7}} className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
//                 Welcome to my web development portfolio! Here, you'll find a curated selection of my recent projects that showcase my skills
//                 and expertise in creating dynamic and user-friendly websites.
//             </motion.p>
//             <motion.div initial={{opacity:0}}
//             whileInView={{opacity:1}}
//                 transition={{duration:0.6, delay:0.9}} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-10 gap-5">
//                 {workData.map((project, index) => (
//                     <motion.div
                  
//             whileHover={{scale:1.05}}
//                 transition={{duration:0.3}} 
//                         key={index} 
//                         className="aspect-square bg-cover bg-center bg-no-repeat rounded-lg relative cursor-pointer group"
//                         style={{ 
//                             backgroundImage: `url(${typeof project.bgImage === 'string' ? project.bgImage : project.bgImage.src})` 
//                         }}
//                     >
//                         <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
//                             <div>
//                                 <h2 className="font-semibold">{project.title}</h2>
//                                 <p className="text-sm text-gray-700">{project.description}</p>
//                             </div>
//                             <div className=" rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
//                                 <Image src={assets.send_icon} alt="link" className="w-5" />
//                             </div>
//                         </div>
//                     </motion.div>
//                 ))}
//             </motion.div>
//             <motion.a initial={{opacity:0}}
//             whileInView={{opacity:1}}
//                 transition={{duration:0.5, delay:1.1}} className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500"  href="">Show more <Image src={assets.right_arrow_bold} alt="" className="w-4"/> </motion.a>
//         </motion.div>
//     )
// }

// export default Work
import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import {motion} from "motion/react"

const Work = () => {
    const workExperience = [
        {
            year: "2023 - Present",
            position: "Full Stack Developer",
            company: "Towner Solution, Bangalore",
            description: "Working on a cutting-edge ride-hailing platform that empowers taxi drivers globally. Built scalable web applications using React, Node.js, and modern databases, focusing on driver management systems, real-time tracking, and payment processing.",
            technologies: ["React", "Node.js", "Next.js", "PostgreSQL", "MongoDB", "TypeScript"],
            achievements: [
                "Developed driver dashboard with real-time analytics",
                "Implemented secure payment gateway integration", 
                "Built responsive admin panels for fleet management",
                "Optimized database queries improving performance by 40%"
            ]
        }
    ]

    return (
        <motion.div initial={{opacity:0}}
            whileInView={{opacity:1}}
                transition={{duration:1}} id="work" className="w-full px-[12%] py-10 scroll-mt-20">
            
            {/* Work Experience Section */}
            <motion.div initial={{opacity:0}}
                whileInView={{opacity:1}}
                    transition={{duration:1}} className="mb-20">
                <motion.h4 initial={{y:-20, opacity:0}}
                whileInView={{y:0, opacity:1}}
                    transition={{duration:0.5, delay:0.3}} className="text-center mb-2 text-lg font-Ovo">Professional Journey</motion.h4>
                <motion.h2 initial={{y:-20, opacity:0}}
                whileInView={{y:0, opacity:1}}
                    transition={{duration:0.5, delay:0.3}} className="text-center text-5xl font-Ovo mb-12">Work Experience</motion.h2>
                
                <motion.div initial={{opacity:0}}
                whileInView={{opacity:1}}
                    transition={{duration:0.6, delay:0.5}} className="max-w-4xl mx-auto">
                    {workExperience.map((exp, index) => (
                        <motion.div 
                            key={index}
                            initial={{x: -50, opacity:0}}
                            whileInView={{x: 0, opacity:1}}
                            transition={{duration:0.5, delay:0.7}}
                            className="relative pl-8 pb-12 last:pb-0"
                        >
                            {/* Timeline Line */}
                            <div className="absolute left-4 top-6 w-0.5 h-full bg-gray-300"></div>
                            
                            {/* Timeline Dot */}
                            <div className="absolute left-2 top-6 w-4 h-4 bg-gray-800 rounded-full border-4 border-white shadow-lg"></div>
                            
                            {/* Content Card */}
                            <div className="bg-white rounded-lg shadow-lg p-6 ml-8 hover:shadow-xl transition-shadow duration-300">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 font-Ovo">{exp.position}</h3>
                                        <p className="text-gray-700 font-semibold font-Ovo">{exp.company}</p>
                                    </div>
                                    <span className="text-gray-600 font-medium bg-gray-100 px-3 py-1 rounded-full text-sm mt-2 sm:mt-0">
                                        {exp.year}
                                    </span>
                                </div>
                                
                                <p className="text-gray-600 mb-4 leading-relaxed font-Ovo">
                                    {exp.description}
                                </p>
                                
                                {/* Technologies */}
                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies Used:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, techIndex) => (
                                            <span 
                                                key={techIndex}
                                                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Key Achievements */}
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Achievements:</h4>
                                    <ul className="list-disc list-inside space-y-1">
                                        {exp.achievements.map((achievement, achIndex) => (
                                            <li key={achIndex} className="text-gray-600 text-sm">
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

          
        </motion.div>
    )
}

export default Work
