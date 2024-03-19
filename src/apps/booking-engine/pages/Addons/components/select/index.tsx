import Icon from "@/bases/components/icon";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import "./styles.scss";
interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  multiple?: boolean;
  name: string;
  handleClick?: () => void;
}

const Select: React.FC<SelectProps> = ({
  options,
  multiple,
  name,
  handleClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: { target: any }) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleOptionClick = (option: Option) => {
    if (multiple) {
      const isSelected = selectedOptions.some(
        (selectedOption) => selectedOption.value === option.value
      );
      if (isSelected) {
        setSelectedOptions(
          selectedOptions.filter(
            (selectedOption) => selectedOption.value !== option.value
          )
        );
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
    } else {
      setSelectedOptions([option]);
      setIsOpen(false);
    }
    handleClick?.();
  };

  return (
    <div className="select" ref={selectRef}>
      <div className="select__control" onClick={toggleDropdown}>
        <div className="select__selected-options">
          <span className="select__placeholder">
            {name}{" "}
            {selectedOptions?.length > 0 && (
              <span
                style={{ fontWeight: 600, marginLeft: 8 }}
              >{`(${selectedOptions?.length})`}</span>
            )}
          </span>
        </div>
        <Icon
          source="arrow_down"
          className={clsx("select__arrow", isOpen && "select__arrow--up")}
        />
      </div>

      <div className={clsx("select__dropdown", isOpen && "show")}>
        {options.map((option) => (
          <div
            key={option.value}
            className={`select__option ${
              selectedOptions.some(
                (selectedOption) => selectedOption.value === option.value
              )
                ? "select__option--selected"
                : ""
            }`}
            onClick={() => handleOptionClick(option)}
          >
            {/* <input
                type="checkbox"
                checked={selectedOptions.some(
                  (selectedOption) => selectedOption.value === option.value
                )}
                readOnly
              /> */}
            <Icon
              source={
                selectedOptions.some(
                  (selectedOption) => selectedOption.value === option.value
                )
                  ? "checkbox"
                  : "uncheck_box"
              }
              className="checkbox"
            />
            <span className="select__option-label">{option.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;
