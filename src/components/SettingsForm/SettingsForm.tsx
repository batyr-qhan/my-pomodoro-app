import React, { useState } from "react";

import "./styles/SettingsForm.css";
import { IGeneralSettings, TFont } from "../../types/types";

import NumberInputWithArrows from "../NumberInputWithArrows/NumberInputWithArrows";

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
      <section className="px-8 py-8 border-b border-b-color-light-gray max-[768px]:py-2">
        <div>
          <h2
            className="text-left tracking-[.25em] font-bold mb-6 uppercase 
          max-[768px]:mb-3 max-[768px]:text-center"
          >
            Time (Minutes)
          </h2>
          <div className="flex gap-6 max-[768px]:flex-col max-[768px]:gap-4">
            <NumberInputWithArrows
              name="pomodoro"
              value={formState.pomodoro.toString()}
              min={1}
              max={60}
              onChange={(name, value) =>
                handleInputChange(name, value.toString())
              }
            />

            <NumberInputWithArrows
              name="shortBreak"
              value={formState.shortBreak.toString()}
              min={1}
              max={15}
              onChange={(name, value) =>
                handleInputChange(name, value.toString())
              }
            />

            <NumberInputWithArrows
              name="longBreak"
              value={formState.longBreak.toString()}
              min={1}
              max={60}
              onChange={(name, value) =>
                handleInputChange(name, value.toString())
              }
            />
          </div>
        </div>
      </section>
      <section className="flex justify-between p-8 items-center border-b border-b-color-light-gray max-[768px]:flex-col max-[768px]:gap-4 max-[768px]:py-2">
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
      <section className="flex justify-between p-8 pb-16 items-center max-[768px]:flex-col max-[768px]:gap-4 max-[768px]:py-2 max-[768px]:pb-16">
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
