import { motion } from "framer-motion";
import airplane from "./assets/airplane_icon.png"

function Resume() {
    return (
        <div className="flex absolute h-screen items-center">
            <motion.div className="justify-center">
                <motion.div className="w-123 h-49 bg-pink-100 rounded-2xl text-purple-300">
                    <div className="flex">
                        <h1 className="text-6xl pl-8 pt-7 pb-3 text-black italic">RESUME</h1>
                        <div className="ml-auto justify-items-end pr-8">
                            <p className="text-sm pt-8">FLIGHT</p>
                            <h3 className="text-3xl">NL9490</h3>
                        </div>
                    </div> 
                    <div className="flex justify-between pl-8 pr-8">  
                        <div className="mr-auto">
                            <p className="text-sm">ORANGE COUNTY</p>
                            <h1 className="text-6xl pt-1">SNA</h1>
                        </div>
                        <img
                            src={airplane}
                            alt="airplane icon"
                            className="size-13 self-center"
                        />
                        <div className="ml-auto justify-items-end ">
                            <p className="text-sm">YOUR OFFICE</p>
                            <h1 className="text-6xl pt-1">URO</h1>
                        </div>
                    </div> 
                </motion.div>
                <motion.div className="w-123 h-110 bg-pink-100 rounded-2xl text-purple-300">
                    <div className="flex justify-between pl-8 pr-9">
                        <div>
                            <p className="text-sm pt-8">BOARDING</p>
                            <h3 className="text-3xl">4:19PM</h3>
                        </div>
                        <div>
                            <p className="text-sm pt-8">GATE</p>
                            <h3 className="text-3xl">20</h3>
                        </div>
                        <div>
                            <p className="text-sm pt-8">ZONE</p>
                            <h3 className="text-3xl">4</h3>
                        </div>
                        <div>
                            <p className="text-sm pt-8">SEAT</p>
                            <h3 className="text-3xl">16A</h3>
                        </div>
                    </div>
                </motion.div>
            </motion.div> 
        </div>
    )
}

export default Resume;