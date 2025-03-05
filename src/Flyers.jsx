// EXPERIMENTAL!!


import { motion } from "framer-motion";
import { useState } from "react";
//import { useNavigate } from "react-router-dom"; // If using React Router

export default function Folder() {
  //const navigate = useNavigate(); // For navigation (optional)
  const [hoveredPage, setHoveredPage] = useState(null);

  // Pages data
  const pages = [
    { id: 1, title: "Page 1", color: "bg-red-500" },
    { id: 2, title: "Page 2", color: "bg-blue-500" },
    { id: 3, title: "Page 3", color: "bg-green-500" },
  ];

  return (
    <div className="relative flex items-center justify-center h-screen">     
        {/* Pages Peeking Out */}
        {pages.map((page, index) => (
          <motion.div
            key={page.id}
            className={`absolute top-${index * 6} w-48 h-28 rounded-lg shadow-md text-white flex items-center justify-center font-semibold cursor-pointer ${page.color}`}
            style={{ zIndex: index }}
            initial={{ y: 0, rotate: -5 }}
            whileHover={{ y: -10, rotate: 0, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={hoveredPage === index ? { y: -15, rotate: 2 } : {}}
            onMouseEnter={() => setHoveredPage(index)}
            onMouseLeave={() => setHoveredPage(null)}
          >
            {page.title}
          </motion.div>
        ))}
      </div>
  );
}
