// import TaskBoard from '../TaskBoard/TaskBoard.jsx';
import css from './ScreensPage.module.css';
import { useParams } from 'react-router-dom';
// import { useState } from 'react';

const ScreensPage = () => {
  const { boardId } = useParams();
  // const [tasks, setTasks] = useState([
  //   { id: 1, title: 'Task 1', description: 'Description for Task 1' },
  //   { id: 2, title: 'Task 2', description: 'Description for Task 2' },
  //   // задачі тут
  // ]);

  return (
    <div className={css.screensPage}>
      <h2>{boardId}</h2>
      <p className={css.screensPageText}>
        Before starting your project, it is essential to create a board to visualize and track all
        the necessary tasks and milestones. This board serves as a powerful tool to organize the
        workflow and ensure effective collaboration among team members.
      </p>

      {/* <TaskBoard tasks={tasks} /> */}
    </div>
  );
};

export default ScreensPage;
