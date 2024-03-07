import React, { useState } from "react";

import { Input } from "@nextui-org/react";

import "./styles/SettingsForm.css";
import { IGeneralSettings } from "../../types/types";

interface Props {
  generalSettings: IGeneralSettings;
  setGeneralSettings: React.Dispatch<React.SetStateAction<IGeneralSettings>>;
}

const SettingsForm: React.FC<Props> = ({ generalSettings }) => {
  const [formState, setFormState] = useState({
    pomodoro: generalSettings.time.pomodoro,
    shortBreak: generalSettings.time.shortBreak,
    longBreak: generalSettings.time.longBreak,
    font: generalSettings.font,
    color: generalSettings.color,
  });

  const handleInputChange = (name: string, value: string) => {
    setFormState({
      ...formState,
      [name]: parseInt(value),
    });
  };

  const [formErrors, setFormErrors] = useState({
    pomodoro: "",
    shortBreak: "",
    longBreak: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("awklejfwej");
    e.preventDefault();

    // Perform form validation
    const errors = {
      pomodoro: "",
      shortBreak: "",
      longBreak: "",
    };

    console.log("wieofjweifowej");

    if (formState.pomodoro < 1 || formState.pomodoro > 60) {
      errors.pomodoro = "Pomodoro time should be between 1 and 60 minutes";
    }

    if (formState.shortBreak < 1 || formState.shortBreak > 15) {
      errors.shortBreak = "Short break time should be between 1 and 15 minutes";
    }

    if (formState.longBreak < 1 || formState.longBreak > 60) {
      errors.longBreak = "Long break time should be between 1 and 60 minutes";
    }

    // Update form errors state
    setFormErrors(errors);

    // If there are no errors, proceed with form submission
    if (Object.values(errors).every((error) => error === "")) {
      console.log("Form submitted successfully");

      alert("no errors");
      // Perform further actions here
    }
  };

  return (
    <form
      id="settings-form"
      onSubmitCapture={(e) => {
        e.preventDefault();
        console.log("this is fawefawefaworm", e.target);

        handleSubmit(e);
      }}
      // onSubmit={(e) => {
      //   e.preventDefault();
      //   console.log("this is form", e.target);
      // }}
    >
      <section className="px-8 pt-8 pb-12 border-b border-b-color-light-gray">
        <div>
          <h2 className="text-left tracking-[.25em] font-bold mb-6 uppercase">
            Time (Minutes)
          </h2>
          <div className="flex gap-4 input-fields">
            <Input
              label="pomodoro"
              labelPlacement="outside"
              name="pomodoro"
              type="number"
              classNames={{
                input: "bg-color-default-gray font-bold",
                inputWrapper: "bg-color-default-gray",
              }}
              value={formState.pomodoro.toString()}
              onChange={(e) => handleInputChange("pomodoro", e.target.value)}
              min={1}
              max={60}
              isInvalid={formErrors.pomodoro !== ""}
            />

            <Input
              label="short break"
              labelPlacement="outside"
              name="shortBreak"
              type="number"
              classNames={{
                input: "bg-color-default-gray font-bold",
                inputWrapper: "bg-color-default-gray",
              }}
              value={formState.shortBreak.toString()}
              onChange={(e) => handleInputChange("shortBreak", e.target.value)}
              isInvalid={formErrors.shortBreak !== ""}
              min={1}
              max={15}
            />

            <Input
              label="long break"
              labelPlacement="outside"
              name="longBreak"
              type="number"
              classNames={{
                input: "bg-color-default-gray font-bold",
                inputWrapper: "bg-color-default-gray",
              }}
              value={formState.longBreak.toString()}
              onChange={(e) => handleInputChange("longBreak", e.target.value)}
              isInvalid={formErrors.longBreak !== ""}
              min={1}
              max={60}
            />
          </div>
        </div>
      </section>
      <section className="flex justify-between p-8 items-center border-b border-b-color-light-gray">
        <h2 className="tracking-[.5em] uppercase">Font</h2>

        <ul className="fonts-section">
          {["font-kumbhSans", "font-robotoSlab", "font-spaceMono"].map(
            (font) => (
              <li
                key={font}
                className={formState.font === font ? "active" : ""}
                onClick={() => {
                  setFormState({
                    ...formState,
                    font: font,
                  });
                }}
              >
                Aa
              </li>
            )
          )}
        </ul>
      </section>
      <section className="flex justify-between p-8 pb-16 items-center">
        <h2 className="tracking-[.5em] uppercase">Color</h2>
        <ul className="colors-section">
          {}
          <li></li>
          <li></li>
          <li
            onClick={() => {
              console.log("clicked");
              document
                .querySelector("html")
                ?.setAttribute("data-theme", "theme2");
            }}
          ></li>
        </ul>
      </section>
    </form>
  );
};

export default SettingsForm;
