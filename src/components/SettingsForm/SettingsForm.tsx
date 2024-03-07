import React from "react";

import { Input } from "@nextui-org/react";

interface Props {
  generalSettings: {
    time: {
      pomodoro: number;
      shortBreak: number;
      longBreak: number;
    };
    font: string;
    color: string;
  };
}

const SettingsForm: React.FC<Props> = ({ generalSettings }) => {
  return (
    <form
      id="settings-form"
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <section className="px-8 pt-8 pb-12 border-b border-b-light-gray-color">
        <div>
          <h2 className="text-left tracking-[.25em] text-xl font-semibold mb-4">
            Time (Minutes)
          </h2>
          <div className="flex gap-4">
            <Input
              type="number"
              classNames={{
                input: "bg-transparent-color",
              }}
              value={generalSettings.time.pomodoro.toString()}
            />

            <Input
              type="number"
              classNames={{
                input: "bg-transparent-color",
              }}
              value={generalSettings.time.shortBreak.toString()}
            />

            <Input
              type="number"
              classNames={{
                input: "bg-transparent-color",
              }}
              value={generalSettings.time.longBreak.toString()}
            />
          </div>
        </div>
      </section>
      <section className="flex justify-between p-8 items-center border-b border-b-light-gray-color">
        <h2 className="tracking-[.5em] uppercase">Font</h2>
        <ul className="fonts-section">
          <li className="active">Aa</li>
          <li>Aa</li>
          <li>Aa</li>
        </ul>
      </section>
      <section className="flex justify-between p-8 pb-16 items-center">
        <h2 className="tracking-[.5em] uppercase">Color</h2>
        <ul className="colors-section">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </section>
    </form>
  );
};

export default SettingsForm;
