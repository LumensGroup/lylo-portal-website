import Icon from "@/bases/components/icon";
import clsx from "clsx";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import "./styles.scss";
interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options?: Option[];
  multiple?: boolean;
  name: string;
  defaultValue?: Option;
  handleClick?: (value: any) => void;
  children?: ReactNode;
}

const Select: React.FC<SelectProps> = ({
  options,
  multiple,
  name,
  defaultValue,
  handleClick,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Option[]>(
    defaultValue ? [defaultValue] : []
  );
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
      // 判断该选项是否已被选中
      const isSelected = selectedOptions.some(
        (selectedOption) => selectedOption.value === option.value
      );

      // 更新选中的选项
      if (isSelected) {
        setSelectedOptions((prevOptions) =>
          prevOptions.filter(
            (selectedOption) => selectedOption.value !== option.value
          )
        );
      } else {
        setSelectedOptions((prevOptions) => [...prevOptions, option]);
      }

      // 触发 handleClick 函数时只包含新选中的选项
      const newlySelectedOptions = isSelected
        ? selectedOptions.filter(
            (selectedOption) => selectedOption.value !== option.value
          )
        : [...selectedOptions, option];
      handleClick?.(newlySelectedOptions);
    } else {
      setSelectedOptions([option]);
      setIsOpen(false);
      handleClick?.(option);
    }
  };

  return (
    <div className="select" ref={selectRef}>
      <div className="select__control" onClick={toggleDropdown}>
        <div className="select__selected-options">
          <span className="select__placeholder">
            {multiple ? name : selectedOptions?.[0]?.label}
            {multiple && selectedOptions?.length > 0 && (
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
        {options?.map((option) => (
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
        {children}
      </div>
    </div>
  );
};

export default Select;
