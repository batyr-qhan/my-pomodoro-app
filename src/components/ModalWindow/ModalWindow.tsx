import React from "react";

interface ModalWindowProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalWindow: React.FC<ModalWindowProps> = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="fixed inset-0 bg-black-color opacity-50"></div>
      <div className="relative bg-white-color rounded-2xl shadow-lg z-0 text-secondary-dark-color font-bold">
        {children}
        <button
          onClick={onClose}
          className="absolute -bottom-8 left-2/4 transform -translate-x-2/4 bg-first-theme-primary-color px-16 rounded-full h-16 text-white-color hover:bg-[#fa9a9a] transition-all duration-300 ease-in-out"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default ModalWindow;
