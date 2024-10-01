import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ title, description, icon, longDescription }) => {
  const modalId = title;
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="card bg-neutral w-96 shadow-sm rounded-lg border border-primary"
      >
        <figure className="text-3xl mt-4">{icon}</figure>
        <div className="card-body items-center">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions">
            <button
              className="btn btn-outline"
              onClick={() => document.getElementById(modalId).showModal()}
            >
              Read more
            </button>
          </div>
        </div>
      </motion.div>

      <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{longDescription}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ServiceCard;
