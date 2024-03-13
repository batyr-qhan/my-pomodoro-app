import React, { useState } from "react";

import { Input } from "@nextui-org/react";

import "./styles/SettingsForm.css";
import { IGeneralSettings, TFont } from "../../types/types";

interface Props {
  generalSettings: IGeneralSettings;
  setGeneralSettings: React.Dispatch<React.SetStateAction<IGeneralSettings>>;
  handleClose: () => void;
}

const SettingsForm: React.FC<Props> = ({
  generalSettings,
  setGeneralSettings,
  handleClose,
}) => {
  const [formState, setFormState] = useState({
    pomodoro: generalSettings.time.pomodoro,
    shortBreak: generalSettings.time.shortBreak,
    longBreak: generalSettings.time.longBreak,
    font: generalSettings.font,
    theme: generalSettings.theme,
  });

  const [formErrors, setFormErrors] = useState({
    pomodoro: "",
    shortBreak: "",
    longBreak: "",
  });

  const handleInputChange = (name: string, value: string) => {
    setFormState({
      ...formState,
      [name]: parseInt(value),
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("awklejfwej");
    e.preventDefault();

    // Perform form validation
    const errors = {
      pomodoro: "",
      shortBreak: "",
      longBreak: "",
    };

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
      setGeneralSettings({
        ...generalSettings,
        time: {
          pomodoro: formState.pomodoro,
          shortBreak: formState.shortBreak,
          longBreak: formState.longBreak,
        },
        font: formState.font,
        theme: formState.theme,
      });

      handleClose();
    }
  };

  return (
    <form
      id="settings-form"
      onSubmitCapture={(e) => {
        e.preventDefault();

        handleSubmit(e);
      }}
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
              errorMessage={formErrors.pomodoro}
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
              errorMessage={formErrors.shortBreak}
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
              errorMessage={formErrors.longBreak}
              min={1}
              max={60}
            />
          </div>
        </div>
      </section>
      <section className="flex justify-between p-8 items-center border-b border-b-color-light-gray">
        <h2 className="tracking-[.5em] uppercase">Font</h2>

        <ul className="fonts-section">
          {[
            "Kumbh Sans, sans-serif",
            "Roboto Slab, serif",
            "Space Mono, monospace",
          ].map((font) => (
            <li
              key={font}
              className={`${
                formState.font === font ? "active" : ""
              } fonts-section__font`}
              onClick={() => {
                setFormState({
                  ...formState,
                  font: font as TFont,
                });
              }}
            >
              Aa
            </li>
          ))}
        </ul>
      </section>
      <section className="flex justify-between p-8 pb-16 items-center">
        <h2 className="tracking-[.5em] uppercase">Color</h2>
        <ul className="colors-section">
          {["initialTheme", "theme2", "theme3"].map((theme) => (
            <li
              key={theme}
              className={`colors-section__circle ${
                formState.theme === theme ? "selected" : ""
              }`}
              onClick={() => {
                setFormState({
                  ...formState,
                  theme: theme as "initialTheme" | "theme2" | "theme3",
                });
              }}
            >
              {formState.theme === theme && (
                <div className="colors-section__check-mark"></div>
              )}
            </li>
          ))}
        </ul>
      </section>
    </form>
  );
};

export default SettingsForm;
