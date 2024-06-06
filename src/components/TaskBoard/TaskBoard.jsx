import Task from '../Task/Task.jsx';
import styles from './TaskBoard.module.css';

const TaskBoard = ({ tasks }) => {
  return (
    <div className={styles.taskBoard}>
      {tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskBoard;
