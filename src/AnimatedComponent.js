import React, { useState } from 'react';
import 'animate.css';

function PopUp({ title, description1, description2, description3, url, company, startDate, endDate, skills }) {
  const [open, setOpen] = useState(false);
  
  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className="text-xs text-red-700 hover:text-blue-950 hover:text-sm lg:text-sm hover:text-md" onClick={openModal}>
        Read More
      </button>
      
      {open && (
        <div className="modal-overlay fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 animate__animated animate__fadeIn">
          <div className="modal w-[80vw] md:w-3/5 bg-white rounded-lg shadow-lg animate__animated animate__zoomIn">
            <div className="modal-header flex justify-between items-center p-4 border-b">
              <div className="text-xl font-bold text-red-700 underline lg:text-2xl">{title}</div>
              <button className="text-xs p-2 border border-solid rounded-full border-blue-950 hover:bg-red-700 hover:text-gray-300 lg:text-base" onClick={closeModal}>
                Close
              </button>
            </div>
            
            <div className="modal-header p-4">
              <div className="text-lg font-bold text-blue-950 lg:text-2xl">{company}</div>
            </div>
            
            <div className="modal-header p-4">
              <div className="text-sm font-bold italic text-red-700 lg:text-base">{startDate} - {endDate}</div>
            </div>
            
            <div className="modal-body flex flex-col items-center p-4">
              <div className="inline-flex w-full justify-center items-center">
                <img src={url} className="experience-img w-auto h-[30vh] pt-5 pb-5" alt="Experience" />
              </div>
              
              <div className="text-base px-4 py-2 mt-2 w-full bg-blue-950 text-gray-300 font-semibold">
                <div className="pb-1 text-[0.8em] leading-none md:text-sm lg:text-base">{description1}</div>
                <br />
                <div className="pb-1 text-[0.8em] leading-none md:text-sm lg:text-base">{description2}</div>
                <br />
                <div className="pb-1 text-[0.8em] leading-none md:text-sm lg:text-base">{description3}</div>
              </div>
              
              <div className="text-red-700 bg-blue-950 w-full pt-3 pb-2 text-sm font-light text-left px-4 lg:text-base">
                SKILLS:
                <br />
                {skills}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopUp;
