import styles from './HomePage.module.scss';

const HomePage = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>
      Добро пожаловать в телефонную книгу!
      <span role="img" aria-label="Иконка приветствия"></span>
    </h1>
  </div>
);

export default HomePage;
