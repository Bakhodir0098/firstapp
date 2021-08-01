import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import classes from './team.module.css';

function Team() {
  return (
    <div>
      <div className={classes['team']}>
        <h1>Our Team</h1>
        <p className={classes.txt}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos
          quaerat sapiente nam, id vero.
        </p>
        <div className={classes['cards']}>
          <div className={classes['card']}>
            <div className={classes.img}>
              <div className={classes.blue}>
                <FacebookIcon />
                <TwitterIcon className={classes.icon} />
                <InstagramIcon />
              </div>
            </div>
            <div className={classes.image}></div>

            <h3>Cloe Marena</h3>
            <h4>PRESIDENT</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi
              accusantium repellat.
            </p>
          </div>
          <div className={classes['card']}>
            <div className={classes.img2}>
              <div className={classes.blue2}>
                <FacebookIcon />
                <TwitterIcon className={classes.icon} />
                <InstagramIcon />
              </div>
            </div>
            <div className={classes.image}></div>

            <h3>Cloe Marena</h3>
            <h4>PRESIDENT</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi
              accusantium repellat.
            </p>
          </div>
          <div className={classes['card']}>
            <div className={classes.img3}>
              <div className={classes.blue3}>
                <FacebookIcon />
                <TwitterIcon className={classes.icon} />
                <InstagramIcon />
              </div>
            </div>
            <div className={classes.image}></div>

            <h3>Cloe Marena</h3>
            <h4>PRESIDENT</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi
              accusantium repellat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
