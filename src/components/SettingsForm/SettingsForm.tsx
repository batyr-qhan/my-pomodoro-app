import React from "react";

import { Input } from "@nextui-org/react";

import "./styles/SettingsForm.css";
import { IGeneralSettings } from "../../types/types";

interface Props {
  generalSettings: IGeneralSettings;
}

const SettingsForm: React.FC<Props> = ({ generalSettings }) => {
  const [formState, setFormState] = React.useState({
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

  return (
    <form
      id="settings-form"
      onSubmit={(e) => {
        e.preventDefault();
        console.log("submit console log");

        // const formData = new FormData(form);
        // formData.forEach((value, key) => {
        //   console.log(key, value);
        // });
        // const values = Object.fromEntries(formData);

        // console.log("values", values);
        // onsole.log();
      }}
    >
      <section className="px-8 pt-8 pb-12 border-b border-b-color-light-gray">
        <div>
          <h2 className="text-left tracking-[.25em] text-xl font-semibold mb-4">
            Time (Minutes)
          </h2>
          <div className="flex gap-4">
            <Input
              label="pomodoro"
              labelPlacement="outside"
              name="pomodoro"
              type="number"
              classNames={{
                input: "bg-color-transparent",
              }}
              value={formState.pomodoro.toString()}
              onChange={(e) => handleInputChange("pomodoro", e.target.value)}
              min={1}
              max={60}
            />

            <Input
              label="short break"
              labelPlacement="outside"
              name="shortBreak"
              type="number"
              classNames={{
                input: "bg-color-transparent",
              }}
              value={formState.shortBreak.toString()}
              onChange={(e) => handleInputChange("shortBreak", e.target.value)}
            />

            <Input
              label="long break"
              labelPlacement="outside"
              name="longBreak"
              type="number"
              classNames={{
                input: "bg-color-transparent",
              }}
              value={formState.longBreak.toString()}
              onChange={(e) => handleInputChange("longBreak", e.target.value)}
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
