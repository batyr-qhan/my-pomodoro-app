import { useState, useEffect } from "react";
import { IGeneralSettings } from "../types/types";

const useLocalStorage = (key: string, initialValue: IGeneralSettings) => {
  // Retrieve the item from localStorage
  const storedValue = localStorage.getItem(key);
  // Parse the stored json or use the initialValue if there's none
  const [value, setValue] = useState(
    storedValue ? JSON.parse(storedValue) : initialValue
  );

  useEffect(() => {
    // If there's a stored value in localStorage, use it, otherwise use the initialValue
    if (storedValue) {
      setValue(JSON.parse(storedValue));
    } else {
      setValue(initialValue);
    }
  }, [key, initialValue, storedValue]);

  useEffect(() => {
    // Store the value in localStorage whenever it changes
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
