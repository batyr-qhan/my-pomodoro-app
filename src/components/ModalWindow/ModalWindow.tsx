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
    // onClose();
    const form = document.getElementById("settings-form");

    if (!form) {
      return;
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("submit");
    });

    // const formData = new FormData(form);
    // console.log(formData);
    // const newMode = formData.get("mode") as Mode;
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="fixed inset-0 bg-black-color opacity-50"></div>
      <div className="relative bg-white-color rounded-2xl shadow-lg z-0 text-secondary-dark-color font-bold">
        <header className="flex justify-between items-center border-b border-b-light-gray-color p-8">
          <h2 className="text-3xl">{title}</h2>
          <button onClick={onClose}>
            <img src={closeIcon} />
          </button>
        </header>
        {children}
        <button
          onClick={handleButtonClick}
          className="absolute -bottom-8 left-2/4 transform -translate-x-2/4 bg-first-theme-primary-color px-16 rounded-full h-16 text-white-color hover:bg-[#fa9a9a] transition-all duration-300 ease-in-out"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default ModalWindow;
