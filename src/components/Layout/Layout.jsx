import css from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={css.layout}>
      <div className={css.mainContent}>{children}</div>
    </div>
  );
};

export default Layout;
