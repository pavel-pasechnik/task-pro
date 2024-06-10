import CreateNewBoard from '../CreateNewBoard/CreateNewBoard.jsx';
import LogOut from '../LogOut/LogOut.jsx';
import Logo from '../Logo/Logo.jsx';
import MyBoards from '../MyBoards/MyBoards.jsx';
import NeedHelpBanner from '../NeedHelpBanner/NeedHelpBanner.jsx';
import ProjectList from '../ProjectList/ProjectList.jsx';
import css from './Sidebar.module.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={css.sidebar}>
      <Logo />
      <MyBoards />
      <CreateNewBoard />
      <ProjectList />
      <NeedHelpBanner />
      <LogOut />
      {isOpen && (
        <div
          className={`${css.overlay} ${css.visible}`}
          onClick={toggleSidebar}
          role='button'
          tabIndex={0}
          onKeyDown={toggleSidebar}
          aria-label='Close sidebar'></div>
      )}
    </div>
  );
};

export default Sidebar;
