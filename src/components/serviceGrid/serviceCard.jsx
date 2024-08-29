import React from "react";
import { motion } from "framer-motion"

const ServiceCard = ({title, description}) => {
  return (
    <>
      <motion.div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
      </motion.div>
    </>
  );
};

export default ServiceCard;
