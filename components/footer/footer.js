import classes from './footer.module.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import TelegramIcon from '@material-ui/icons/Telegram';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Footer() {
  return (
    <div className={classes.foot}>
      <div className={classes.icons}>
        <FacebookIcon />
        <TwitterIcon className={classes.icon} />
        <InstagramIcon />
        <YouTubeIcon className={classes.icon} />
        <TelegramIcon />
        <PinterestIcon className={classes.icon} />
      </div>
      <h4>
        Copyright ©2021 All rights reserved | This template is made with by{' '}
        <span> AshrafKan</span>
      </h4>
    </div>
  );
}

export default Footer;
