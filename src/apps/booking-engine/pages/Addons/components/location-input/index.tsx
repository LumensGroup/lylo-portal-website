import { Input } from "antd";
import "./style.scss";

const LocationInput = ({
  prefix,
  onChange,
}: {
  prefix?: string;
  onChange: (value: string) => void;
  value?: any;
}) => {
  return (
    <Input
      onChange={(e) => {
        onChange(e.target.value);
      }}
      className="location__input"
      prefix={
        <span style={{ color: "rgba(0,0,0,.25)" }}>{prefix || "Location"}</span>
      }
    />
  );
};

export default LocationInput;
