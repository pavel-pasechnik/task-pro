import CreateNewBoard from '../CreateNewBoard/CreateNewBoard.jsx';
import LogOut from '../LogOut/LogOut.jsx';
import Logo from '../Logo/Logo.jsx';
import MyBoards from '../MyBoards/MyBoards.jsx';
import NeedHelpBanner from '../NeedHelpBanner/NeedHelpBanner.jsx';
import ProjectList from '../ProjectList/ProjectList.jsx';
import clsx from 'clsx';
import css from './Sidebar.module.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {isOpen && (
        <div
          className={`${css.overlay} ${css.visible}`}
          onClick={toggleSidebar}
          role='button'
          tabIndex={0}
          onKeyDown={toggleSidebar}
          aria-label='Close sidebar'
        />
      )}
      <div className={clsx(css.sidebar, { [css.open]: isOpen })}>
        <Logo />
        <MyBoards />
        <CreateNewBoard />
        <ProjectList />
        <NeedHelpBanner />
        <LogOut />
      </div>
    </>
  );
};

export default Sidebar;
