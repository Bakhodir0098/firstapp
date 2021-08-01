import Link from 'next/link';
import classes from './navbar.module.css';

function Navbar() {
  return (
    <div className={classes.nav}>
      <div className={classes['navbar']}>
        <h1>
          imgine<span>.</span>
        </h1>
        <ul className={classes.list}>
          <li className={classes.link}>
            <Link href='/'>Home</Link>
          </li>
          <li className={classes.link}>
            <Link href='/features'>Features</Link>
          </li>
          <li className={classes.link}>
            <Link href='/about'>About Us</Link>
          </li>
          <li className={classes.link}>
            <Link href='/testi'>Testimonials</Link>
          </li>

          <li className={classes.link}>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
