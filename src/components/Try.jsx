import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SidebarCards() {
  const [selectedCard, setSelectedCard] = useState<null | number>(null);

  // Cards data
  const cards = [
    { id: 1, color: "bg-blue-500" },
    { id: 2, color: "bg-green-500" },
    { id: 3, color: "bg-red-500" },
  ];

  return (
    <div className="relative h-screen">
      {/* Sidebar cards */}
      <div className="fixed right-4 top-1/4 space-y-4">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className={`w-40 h-24 ${card.color} text-white flex items-center justify-center rounded-xl shadow-lg cursor-pointer`}
            initial={{ x: 0 }}
            whileHover={{ x: -10 }}
            animate={selectedCard === card.id ? { scale: 1.05 } : {}}
            onClick={() => setSelectedCard(card.id)}
          >
            Card {card.id}
          </motion.div>
        ))}
      </div>

      {/* Selected Card Overlay */}
      <AnimatePresence>
        {selectedCard !== null && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCard(null)}
          >
            <motion.div
              className={`w-80 h-48 ${cards.find(c => c.id === selectedCard)?.color} flex items-center justify-center rounded-xl shadow-xl text-white cursor-pointer`}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // Prevent background click from closing
            >
              Click to Close
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
