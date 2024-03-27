import { Input } from "antd";
import "./style.scss";

const LocationInput = ({ prefix }: { prefix?: string }) => {
  return (
    <Input
      className="location__input"
      prefix={
        <span style={{ color: "rgba(0,0,0,.25)" }}>{prefix || "Location"}</span>
      }
    />
  );
};

export default LocationInput;
