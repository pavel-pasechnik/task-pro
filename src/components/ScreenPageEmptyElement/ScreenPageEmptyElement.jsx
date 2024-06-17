import css from './ScreenPageEmptyElement.module.css';

const ScreenPageEmptyElement = () => {
  return (
    <div className={css.screensPage}>
      <div className={css.screensPageTextContainer}>
        <p className={css.screensPageText}>
          Before starting your project, it is essential{' '}
          <span className={css.screensPageTextLink}>to create a board</span> to visualize and track
          all the necessary tasks and milestones. This board serves as a powerful tool to organize
          the workflow and ensure effective collaboration among team members.
        </p>
      </div>
    </div>
  );
};

export default ScreenPageEmptyElement;
