import css from './Home.module.css';
import postImg from '../../../public/phone.jpg';

export default function Home() {
  return (
    <div className={css.container}>
      <h1>Welcome to the contact book!</h1>
      <img src={postImg} alt='phone' width='300' height='300' />
    </div>
  );
}
