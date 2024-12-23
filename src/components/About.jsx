import styles from "../assets/css/About.module.css"
function About() {
    return (
      <div className={styles.container}>
        <section className={styles.about} id="about">
          <div className={styles.about__left}>
            <h2 className={styles.title}>About</h2>
            <h3 className={styles.title__left}>
              Technova is an electronic service provider
            </h3>
            <p className={styles.title__desc}>
              Technova provides a variety of electronic services ranging from
              purchasing, repair and maintenance.
            </p>
            <button className={styles.about__button}>Learn More</button>
          </div>
          <div className={styles.about__right}>
            <img className={styles.about__image} src="./img/2.jpg" alt="" />
          </div>
        </section>
      </div>
    );
}

export default About;