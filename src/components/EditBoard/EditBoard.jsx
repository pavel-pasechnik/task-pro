// import './AddBoard.css';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { useState } from 'react';

const EditBoard = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [labelColor, setLabelColor] = useState('pink');
  const [deadline, setDeadline] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  if (!isOpen) return null;

  const handleAdd = () => {
    // TODO дописати логіку рудагування карти карточок
    console.log({ title, description, labelColor, deadline });
    onClose();
  };

  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const handleDateChange = date => {
    setDeadline(date);
    setIsCalendarOpen(false);
  };

  return (
    <div className='modal'>
      <div className='modal-content'>
        <button className='close-button' onClick={onClose}>
          ×
        </button>
        <h2>Edit card</h2>
        <input
          type='text'
          className='modal-input'
          placeholder='Title'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          className='modal-textarea'
          placeholder='Description'
          value={description}
          onChange={e => setDescription(e.target.value)}
        ></textarea>
        <div className='label-colors'>
          <span
            className={`label-color ${labelColor === 'pink' ? 'active' : ''}`}
            onClick={() => setLabelColor('pink')}
            role='button'
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                setLabelColor('pink');
              }
            }}
          ></span>
          <span
            className={`label-color ${labelColor === 'blue' ? 'active' : ''}`}
            onClick={() => setLabelColor('blue')}
            role='button'
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                setLabelColor('blue');
              }
            }}
          ></span>
          <span
            className={`label-color ${labelColor === 'green' ? 'active' : ''}`}
            onClick={() => setLabelColor('green')}
            role='button'
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                setLabelColor('green');
              }
            }}
          ></span>
          <span
            className={`label-color ${labelColor === 'gray' ? 'active' : ''}`}
            onClick={() => setLabelColor('gray')}
            role='button'
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                setLabelColor('gray');
              }
            }}
          ></span>
        </div>
        <div className='deadline'>
          <label htmlFor='deadline-input'>Deadline</label>
          <div
            id='deadline-input'
            onClick={toggleCalendar}
            className='deadline-input'
            role='button'
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                toggleCalendar();
              }
            }}
          >
            {deadline.toLocaleDateString()}
          </div>
          {isCalendarOpen && (
            <div className='calendar'>
              <DatePicker selected={deadline} onChange={handleDateChange} inline />
            </div>
          )}
        </div>
        <button className='add-button' onClick={handleAdd}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default EditBoard;
