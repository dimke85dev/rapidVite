import styles from './About.module.css';
const AboutPages = () => {
  return (
    <div className=" mobile-form rounded-xl mx-auto px-3">
      <div className={styles.container}>
        <h2>Про нас</h2>
        <div className={styles.carsection + ' flex gap-4 '}>
          <img
            className={styles.carimg + ' w-2/5'}
            src="carservice.jpg"
            alt="автомобиль"
          />
          <p className={styles.about + ' md:w-3/5 text-sm'}>
            Ласкаво просимо до автосервісу "Rapid Service"! Наш автосервіс
            працює на ринку вже більше 15 років і займається професійним
            ремонтом автомобілів різних марок та моделей. Ми пропонуємо широкий
            спектр послуг, зокрема ремонт ходової частини, ремонт двигунів,
            діагностику електронних та електричних частин. Наша команда
            складається з висококваліфікованих механіків, які мають багаторічний
            досвід роботи в автомобільній галузі. Ми використовуємо тільки
            найсучасніші технології та обладнання, щоб забезпечити нашим
            клієнтам якісний та швидкий сервіс. Ми розуміємо, що надійний
            автомобіль - це дуже важливо для наших клієнтів. Тому ми завжди
            намагаємося зробити все можливе, щоб наші послуги були якісними та
            доступними. Ми дбаємо про кожного клієнта та надаємо індивідуальний
            підхід до кожного замовлення. Якщо ви шукаєте надійного та
            професійного автосервісу, який зможе швидко та якісно виконати
            ремонт вашого автомобіля, звертайтеся до нас! Ми будемо раді
            допомогти вам у вирішенні будь-яких проблем з вашим автомобілем.
          </p>
        </div>
        <h3>Наші переваги:</h3>
        <ul className={styles.perevagy + ' text-xs'}>
          <li>Досвідчені та кваліфіковані спеціалісти</li>
          <li>Використання тільки якісних запчастин та матеріалів</li>
          <li>Швидкий та якісний ремонт</li>
          <li>Розумні ціни</li>
        </ul>
        <h3>Наша команда:</h3>
        <div className={styles.team}>
          <div className={styles.member}>
            <img src="member1.jpg" alt="Участник команды 1" />
            <h4>Олег Георгович</h4>
            <p>Головний механік</p>
          </div>
          <div className={styles.member}>
            <img src="member2.jpg" alt="Участник команды 2" />
            <h4>Віталій Євгенович </h4>
            <p>Головний електрик</p>
          </div>
          <div className={styles.member}>
            <img src="ramzes.jpg" alt="Участник команды 3" />
            <h4>Роман</h4>
            <p>Механік</p>
          </div>
          <div className={styles.member}>
            <img src="member3.jpg" alt="Участник команды 3" />
            <h4>Валерій</h4>
            <p>Механік</p>
          </div>
          <div className={styles.member}>
            <img src="nazar.jpg" alt="Участник команды 3" />
            <h4>Назар</h4>
            <p>Моторист</p>
          </div>

          <div className={styles.member}>
            <img src="member3.jpg" alt="Участник команды 3" />
            <h4>Олексій</h4>
            <p>Електрик</p>
          </div>
        </div>
      </div>{' '}
    </div>
  );
};

export default AboutPages;
