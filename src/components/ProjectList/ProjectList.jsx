import css from './ProjectList.module.css';

const ProjectList = () => {
  return (
    <ul className={css.projectList}>
      <li>active project</li>
      <li>another project</li>
    </ul>
  );
};

export default ProjectList;
