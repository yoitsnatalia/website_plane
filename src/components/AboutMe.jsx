import { motion, useAnimation } from "framer-motion";
import seal from "../assets/seal.png"
import { useState } from "react"
import headshot from "../assets/headshot1.png"
import airplaneVector from "../assets/airplaneVector.png"


function AboutMe() {
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const controls = useAnimation();
    const textControls = useAnimation();
    const idControls = useAnimation();

    const aboutVariants = {
        initial: { y: "110%" },
        hover: { y: "90%", transition: { ease: "easeInOut"} },
        open: async () => {
            if (isAnimating) return;
            setIsOpen(true);
            setIsAnimating(true);

            await Promise.all([
                controls.start({ y: "-100%", transition: { duration: 1.2, ease: "easeInOut" }}),
                idControls.start({ y: "-100%", transition: { duration: 1.2, ease: "easeInOut" }})
            ]);

            controls.set({ transformOrigin: "left center"});
            idControls.set({ transformOrigin: "left center" });

            await Promise.all([
                controls.start({ y: "-151.5%", x: "50%", scale: 1.5, rotate: 90, transition: { duration: 0.5, ease: "easeInOut" }}),
                idControls.start({ y: "-151.5%", x: "50%", scale: 1.5, rotate: 90, transition: { duration: 0.5, ease: "easeInOut" }})
            ]);
            
            await Promise.all([
                controls.start({ rotateY: 180, transition: { duration: 0.5, ease: "easeInOut" }}),
                textControls.start({ opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } })
            ]);

            setIsAnimating(false);
        },
        close: async () => {
            if (isAnimating) return;
            setIsAnimating(true);

            await Promise.all([
                controls.start({ rotateY: 0, transition: { duration: 0.5, ease: "easeInOut" }}),
                textControls.start({ opacity: 100, transition: { duration: 0.3, ease: "easeInOut" } })
            ]);

            await Promise.all([
                controls.start({ y: 0, x: 0, scale: 1, rotate: 0, transition: { duration: 0.5, ease: "easeInOut" } }),
                idControls.start({ y: 0, x: 0, scale: 1, rotate: 0, transition: { duration: 0.5, ease: "easeInOut" } })
            ]);

            setIsAnimating(false);
            setIsOpen(false);
        }
    };
    
    return (
        <div className="fixed flex inset-0 items-center justify-center pointer-events-none z-49">
            <div className="relative w-screen h-screen">
                {/* Passport */}
                <motion.div
                    id="passport"
                    variants={aboutVariants}
                    initial="initial"
                    whileHover={!isOpen ? "hover" : undefined}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto">

                    {/* Passport Cover */}
                    <motion.div
                        id="cover"
                        variants={aboutVariants}
                        className="absolute cursor-pointer z-50 h-148 w-87 rounded-2xl text-amber-200 flex flex-col items-center justify-between p-15 bg-blue-950"
                        animate={controls}
                        onClick={ () => {
                            !isOpen ? aboutVariants.open() : aboutVariants.close();
                        }}
                        >
                            <motion.h1 animate={textControls} className="text-5xl">PASSPORT</motion.h1>
                            <motion.img
                                src={seal}
                                alt="seal icon"
                                animate={textControls}
                                className="size-50 items-center"
                            />
                            <motion.div animate={textControls} className="justify-items-center">
                                <h3 className="flex text-3xl">United States</h3>
                                <h3 className="flex text-3xl">of America</h3>
                            </motion.div>
                    </motion.div>

                    {/* ID */}
                    <motion.div
                        id="id"
                        variants={aboutVariants}
                        className="flex z-10 rounded-2xl h-148 w-87 relative bg-indigo-50 items-center justify-center"
                        animate={idControls}
                        >
                        <div className="absolute w-148 h-87 rounded-2xl transform -rotate-90 origin-center flex justify-start">
                            <div className="m-10 text-indigo-950 items-center">   
                                <div className="flex flex-inline">
                                    <div>
                                        <img
                                            src={headshot}
                                            alt="Natalia Linn"
                                            className="size-60 object-contain"
                                        />
                                    </div>
                                    <div className="flex flex-col ml-5">
                                        <div className="mb-5">
                                            <h3 className="text-xs">Name</h3>
                                            <h1 className="text-4xl">Natalia Linn</h1>
                                        </div>
                                        <div className="flex flex-inline mb-2">
                                            <div className="mr-5">
                                                <h3 className="text-xs">Class</h3>
                                                <h1 className="text-2xl">'27</h1>
                                            </div>
                                            <div>
                                                <h3 className="text-xs">School</h3>
                                                <h1 className="text-2xl text-nowrap">Stanford University</h1>
                                            </div>
                                        </div>
                                        <div className="mb-2">
                                            <h3 className="text-xs">Major</h3>
                                            <h1 className="text-2xl">Computer Science</h1>
                                        </div>
                                        <div>
                                            <h3 className="text-xs">Home</h3>
                                            <h1 className="text-2xl">Orange County, CA</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex place-self-center text-xs mt-6 ml-10">
                                    <p>Hey! Thanks for checking out my website! </p>
                                </div>
                            </div> 
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default AboutMe;