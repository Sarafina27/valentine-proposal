import React from "react";
import { motion } from "framer-motion";

const hearts = ["❤️", "💖", "💕", "💘", "💞"];

function Hearts() {
  return (
    <div className="hearts-container">
      {hearts.map((heart, index) => (
        <motion.div
          key={index}
          className="heart"
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: "-10vh", opacity: 1 }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: index * 0.5,
          }}
          style={{ left: `${index * 20}%` }}
        >
          {heart}
        </motion.div>
      ))}
    </div>
  );
}

export default Hearts;
