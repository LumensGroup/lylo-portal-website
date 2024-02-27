import "./styles.scss";
import { NewSearchProps } from "./types";
import { DatePicker } from 'antd';
import type { DatePickerProps, RangePickerProps } from 'antd/es/date-picker';
import { NewDatePicker } from "../index";

const NewSearch: React.FC = () => {
    const { RangePicker } = DatePicker;
    const onChange = (
        value: DatePickerProps['value'] | RangePickerProps['value'],
        dateString: [string, string] | string,
      ) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
      };
      const onOk = (value: DatePickerProps['value'] | RangePickerProps['value']) => {
        console.log('onOk: ', value);
      };
    return (
      <div className='new-search-box'>
        <div className="search-title">
            Rent with us
        </div>
        <div className="saerch-content">
             <div className="saerch-content-left">
                 <div>Pick-up date</div>
                 <div>
                  <NewDatePicker></NewDatePicker>
                  <div className="line-div"></div>
                 </div>
             </div>
        </div>
      </div>
    );
  };
  
  export default NewSearch;