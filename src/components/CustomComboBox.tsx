import React, { useState, useRef, useEffect, ReactNode } from "react";
import "./CustomComboBox.css";
import ReactCountryFlag from "react-country-flag";

export interface Option {
  name: string;
  code: string;
}

interface CustomComboBoxProps {
  options: Option[];
  placeholder?: string;
  countryIcon?: boolean;
  ligthMode?: boolean;
  multiple?: boolean;
  beforeInput?: ReactNode;
}

const CustomComboBox: React.FC<CustomComboBoxProps> = ({
  options,
  placeholder,
  countryIcon,
  ligthMode = false,
  multiple = false,
  beforeInput,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);
  const [uniqueId] = useState(`combo-box-${Math.floor(Math.random() * 10000)}`);
  const comboBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setInputValue(selectedOptions.map((option) => option.name).join(", "));
  }, [selectedOptions]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        comboBoxRef.current &&
        !comboBoxRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [comboBoxRef]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setFilteredOptions(
      options.filter((option) =>
        option.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleOptionClick = (option: Option) => {
    if (multiple) {
      if (
        selectedOptions.find(
          (selectedOption) => selectedOption.code === option.code
        )
      ) {
        setSelectedOptions(
          selectedOptions.filter(
            (selectedOption) => selectedOption.code !== option.code
          )
        );
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
    } else {
      setSelectedOptions([option]);
      setIsOpen(false);
    }
  };

  const handleInputClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(true);
  };

  const handleContainerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-72 inline-block" ref={comboBoxRef}>
      <div
        className={`${
          !ligthMode ? "custom-combo-container" : "custom-combo-container-ligth"
        } ${isOpen ? "active" : ""}`}
        onClick={handleContainerClick}
      >
        {beforeInput && <div className="ml-2">{beforeInput}</div>}
        {selectedOptions.length > 0 && countryIcon && (
          <div className="selected-flags">
            {selectedOptions.map((option) => (
              <ReactCountryFlag
                key={option.code}
                countryCode={option.code}
                svg
                style={{
                  margin: "0 8px 0 4px",
                  overflow: "hidden",
                  borderRadius: "8px",
                  width: "24px",
                  height: "24px",
                }}
              />
            ))}
          </div>
        )}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onClick={handleInputClick}
          placeholder={placeholder}
          aria-expanded={isOpen}
          aria-controls={uniqueId}
          aria-autocomplete="list"
          className={`${
            !ligthMode ? "custom-combo-input" : "custom-combo-input-ligth"
          }`}
          readOnly
        />
        <i
          className={`icon-arrow-left ${
            !ligthMode ? "custom-combo-handler" : "custom-combo-handler-ligth"
          }`}
        ></i>
      </div>
      {isOpen && (
        <div
          className={`${
            !ligthMode ? "combo-box-options" : "combo-box-options-ligth"
          }`}
          id={uniqueId}
        >
          <ul
            className={`${
              !ligthMode ? "custom-combo-list" : "custom-combo-list-ligth"
            }`}
            role="listbox"
          >
            {filteredOptions.map((option) => (
              <li
                key={option.code}
                role="option"
                onClick={() => handleOptionClick(option)}
                tabIndex={-1}
                className={`${
                  !ligthMode
                    ? "custom-combo-option"
                    : "custom-combo-option-ligth"
                } ${
                  selectedOptions.find(
                    (selectedOption) => selectedOption.code === option.code
                  )
                    ? "selected"
                    : ""
                }`}
              >
                {countryIcon && (
                  <ReactCountryFlag
                    key={option.code}
                    countryCode={option.code}
                    svg
                    style={{
                      margin: "0 8px 0 0px",
                      overflow: "hidden",
                      borderRadius: "8px",
                      width: "24px",
                      height: "24px",
                    }}
                  />
                )}
                {option.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomComboBox;
