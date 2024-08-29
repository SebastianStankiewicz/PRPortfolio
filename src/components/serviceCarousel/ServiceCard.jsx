import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ title, description, icon, longDescription }) => {
  return (
    <>
<motion.div
  whileHover={{ scale: 1.05 }}
  className="card bg-base-100 w-96 shadow-sm rounded-lg border border-gray-200"
>
  <figure className="text-3xl mt-4">{icon}</figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <div className="card-actions">
      <button className="btn btn-primary" onClick={() => document.getElementById('modal').showModal()}>
        Read more
      </button>
    </div>
  </div>
</motion.div>

      <dialog id="modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">
            {longDescription}
          </p>
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
