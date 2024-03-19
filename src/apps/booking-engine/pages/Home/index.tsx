import { Button, notification } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Icon from "../../../../bases/components/icon";
import request from "../../../../bases/request";
import { RootState } from "../../../../bases/store/reducers";
import { Search,EnterDriverInfo } from "../../../../bases/components";

const HomePage = () => {
  const { count } = useSelector((state: RootState) => state.count);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/list");
  };

  const handleRequest = () => {
    request
      .get("/api/data")
      .then((res) => {
        console.log(res, "---");
      })
      .catch((e) => {
        notification.error({
          message: `Notification`,
          description: e?.statusText,
          placement: "topRight",
        });
      });
  };
  return (
    <div>
      路由跳转DEMO:
      <Button onClick={handleClick}>click to reduxDemo 计数：{count}</Button>
      <div>
        发请求DEMO:
        <Button onClick={handleRequest}>click to request</Button>
      </div>
      <div>
        ICON demo <Icon source="ic_automatic" className="icon" />
      </div>
      <EnterDriverInfo></EnterDriverInfo>
    </div>
  );
};

export default HomePage;
