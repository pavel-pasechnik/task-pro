import 'react-datepicker/dist/react-datepicker.css';
import './Calendar.css';
import CustomInput from './CustonInput.jsx';
import DatePicker from 'react-datepicker';
import clsx from 'clsx';

export default function Calendar({ selectedDate, handleSetDate }) {
  const datepickerWrapper = clsx('reactDatepickerCustomWrapper');

  return (
    <div className={datepickerWrapper}>
      <DatePicker
        selected={selectedDate}
        onChange={handleSetDate}
        dateFormat='eeee, MMMM d'
        customInput={<CustomInput />}
      />
    </div>
  );
}
