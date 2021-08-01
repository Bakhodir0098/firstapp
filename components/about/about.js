import Image from 'next/image';
import classes from './about.module.css';
import img from '../../public/img/about.svg';

function About() {
  return (
    <div className={classes.head}>
      <div className={classes.about_us}>
        <h1>About Us</h1>
        <div className={classes.about}>
          <div>
            <Image src={img} alt='image' width='550' />
          </div>
          <div className={classes['texts']}>
            <h3>Our Mission</h3>
            <p>
              Eos cumque optio dolores excepturi rerum temporibus magni
              recusandae eveniet, totam omnis consectetur maxime quibusdam
              expedita dolorem dolor nobis dicta labore quaerat esse magnam
              unde, aperiam delectus! At maiores, itaque.
            </p>
            <h4>
              <span>✓</span> Laborum enim quasi at modi
            </h4>
            <h4>
              <span>✓</span> Ad at tempore
            </h4>
            <h4>
              <span>✓</span> Loore quaerat esse
            </h4>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
