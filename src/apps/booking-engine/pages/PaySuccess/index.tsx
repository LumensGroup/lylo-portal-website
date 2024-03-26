import React, { useEffect, useRef, useState } from "react";
import { BookingStatus } from "./components/BookingStatus";
import "./index.scss";
import { BookingInfo } from "./components/BookingInfo";
import { DriverInfo } from "./components/DriverInfo";
import { PriceSummary } from "./components/PriceSummary";
import ImportantInfo from "./components/ImportantInfo";
import { Empty, Flex, Spin, notification } from "antd";
import { PopupAddons } from "@/bases/components/AddonsPopup/PopupAddons";
import request from "@/bases/request";
import { useNavigate } from "react-router-dom";
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";

export default function PaySuccess() {
  const [orderData, setOrderData] = useState<any>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [downloading, setDownloading] = useState(false);
  const targetRef = useRef<any>();

  const downloadPdf = async () => {
    try {
      setDownloading(true);

      const canvas = await html2canvas(targetRef.current);
      const img = canvas.toDataURL("image/png");
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [canvas.width, canvas.height],
      });
      const imgProps = doc.getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
      doc.save("download.pdf");
    
      setDownloading(false);
    } catch {
      setDownloading(false);
    }
  };

  const getOrderInfo = () => {
    const urlStr = window.location.href.replace('#','');
    const url = new URL(urlStr);
    const orderId = url.searchParams.get('orderId');
    
    setIsLoading(true);
    request
      .get(`/order/get?id=${orderId}`)
      .then((res) => {
        setOrderData(res);
        setIsLoading(false);
        console.log(res);
        
      })
      .catch((e) => {
        notification.error({
          message: `Notification`,
          description: e?.statusText,
          placement: "topRight",
        });
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getOrderInfo();
  }, []);

  return isLoading ? (
    <Spin style={{ width: "100%" }} />
  ) : orderData ? (
    <Flex vertical gap={10} className="booking-result-index" ref={targetRef}>
      <BookingStatus
        onPrintPdf={downloadPdf}
        loading={downloading}
        orderData={orderData}
      />
      <BookingInfo orderData={orderData} />
      <DriverInfo orderData={orderData} />
      <PriceSummary orderData={orderData} />
      <ImportantInfo />
      <PopupAddons />
      <div className="back-to-home-btn" onClick={() => navigate("/")}>
        Back to Home
      </div>
    </Flex>
  ) : (
    <Empty />
  );
}
