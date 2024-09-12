import React from "react";
import { motion } from "framer-motion"

const ServiceCard = ({title, description}) => {
  return (
    <>
      <motion.div className="card bg-neutral w-96 shadow-sm rounded-lg border border-accent">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </motion.div>
    </>
  );
};

export default ServiceCard;
