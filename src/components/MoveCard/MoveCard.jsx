import { Menu, MenuItem, SvgIcon } from '@mui/material';
import sprite from '../../assets/sprite.svg';

const MoveCard = ({ columns, onSelect, onClose }) => {
  const handleSelectColumn = columnId => {
    onSelect(columnId);
    onClose();
  };

  return (
    <Menu onClose={onClose}>
      {columns.map(column => (
        <MenuItem key={column.id} onClick={() => handleSelectColumn(column.id)}>
          {column.title}
          <SvgIcon>
            <svg>
              <use href={`${sprite}#icon-arrow-circles`} />
            </svg>
          </SvgIcon>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default MoveCard;
