import React from 'react';
import styles from './Task.module.css';

const Task = ({ task }) => {
  return (
    <div className={styles.task}>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
    </div>
  );
};

export default Task;
