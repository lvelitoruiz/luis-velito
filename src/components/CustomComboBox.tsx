import React, { useState, useRef, useEffect } from "react";
import './CustomComboBox.css';

export interface Option {
  id: number;
  label: string;
}

interface CustomComboBoxProps {
  options: Option[];
  selectedOption: Option | null;
  onSelect: (option: Option) => void;
  placeholder?: string;
}

const CustomComboBox: React.FC<CustomComboBoxProps> = ({
  options,
  selectedOption,
  onSelect,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);
  const [inputValue, setInputValue] = useState("");
  const comboBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedOption) {
      setInputValue(selectedOption.label);
    }
  }, [selectedOption]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setFilteredOptions(
      options.filter((option) =>
        option.label.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleOptionClick = (option: Option) => {
    onSelect(option);
    setIsOpen(false);
  };

  const handleInputClick = () => {
    setIsOpen(!isOpen);
  };

  const handleBlur = () => {
    setTimeout(() => setIsOpen(false), 100);
  };

  return (
    <div className="relative w-52 inline-block" ref={comboBoxRef}>
      <div className={`custom-combo-container ${ isOpen ? 'active' : null }`}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onClick={handleInputClick}
          onBlur={handleBlur}
          placeholder={placeholder}
          aria-expanded={isOpen}
          aria-controls="combo-box-list"
          aria-autocomplete="list"
          className="custom-combo-input"
          disabled
        />
        <i onClick={handleInputClick} className={`icon-arrow-left custom-combo-handler`}></i>
      </div>
      {isOpen && (
        <ul
          id="combo-box-list"
          className="custom-combo-list"
          role="listbox"
        >
          {filteredOptions.map((option) => (
            <li
              key={option.id}
              role="option"
              onClick={() => handleOptionClick(option)}
              tabIndex={-1}
              className="custom-combo-option"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomComboBox;
