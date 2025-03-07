import { motion, useAnimation } from "framer-motion";
import seal from "../assets/seal.png"
import { useState } from "react"



function AboutMe() {
    const [isOpen, setIsOpen] = useState(false);
    const controls = useAnimation();
    const textControls = useAnimation();
    const [isAnimating, setIsAnimating] = useState(false);
    const passControls = useAnimation();

    const aboutVariants = {
        initial: { top: "115%" },
        hover: { top: "105%" },
        click: async () => {
            if (isAnimating) return;
            setIsOpen(true);
            setIsAnimating(true);

            await controls.start({ y: "-100%", scale: 1.5, rotate: 90, transition: { duration: 1 }});


            await Promise.all([
                controls.start({ y: "-185%", transition: { duration: 0.7 }}),
                controls.start({ rotateY: 145, transition: { duration: 0.6 }}),
                textControls.start({ opacity: 0, transition: { duration: 0.2 } })
            ]);

            setIsAnimating(false);
        },
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
                    animate={controls}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer text-amber-200 flex flex-col items-center justify-between p-15 h-148 w-87 rounded-2xl bg-blue-950"
                    onClick={ () => {
                        aboutVariants.click(); 
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
                    className="absolute origin-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10 rounded-2xl w-222 h-130 bg-black"
                    >

                </motion.div>
            </div>
        </div>
    )
}

export default AboutMe;