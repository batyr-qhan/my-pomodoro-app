import React from "react";

import closeIcon from "../../assets/closeIcon.svg";

interface ModalWindowProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalWindow: React.FC<ModalWindowProps> = ({
  children,
  onClose,
  title,
}) => {
  const handleButtonClick = () => {
    const form = document.getElementById("settings-form") as HTMLFormElement;

    if (!form) {
      return;
    }

    form.dispatchEvent(new Event("submit"));
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-y-scroll z-20 max-[768px]:px-4">
      <div className="fixed inset-0 bg-color-black opacity-50"></div>
      <div className="relative bg-color-white rounded-2xl shadow-lg text-color-dark-secondary font-bold max-[768px]:w-full">
        <header className="flex justify-between items-center border-b border-b-color-light-gray p-8 max-[768px]:py-2">
          <h2 className="text-3xl max-[768px]:text-xl max-[768px]:py-2">{title}</h2>
          <button className="hover:scale-125 transition " onClick={onClose}>
            <img src={closeIcon} />
          </button>
        </header>
        {children}
        <button
          onClick={handleButtonClick}
          className="absolute -bottom-8 left-2/4 transform -translate-x-2/4 bg-color-primary px-16 rounded-full h-16 text-color-white hover:scale-105 transition-all duration-300 ease-in-out"
          type="submit"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default ModalWindow;
