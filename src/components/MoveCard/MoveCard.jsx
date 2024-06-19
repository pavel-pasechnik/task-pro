import { Menu, MenuItem, SvgIcon } from '@mui/material';
import sprite from '../../assets/sprite.svg';

const MoveCard = ({ column, onSelect, onClose }) => {
  const handleMoveCard = newColumnId => {
    onSelect(newColumnId);
    onClose();
  };

  return (
    <Menu open={true} onClose={onClose}>
      <MenuItem key={column.id} onClick={() => handleMoveCard(column.id)}>
        {column.title}
        <SvgIcon>
          <svg>
            <use href={`${sprite}#icon-arrow-circles`} />
          </svg>
        </SvgIcon>
      </MenuItem>
    </Menu>
  );
};

export default MoveCard;
