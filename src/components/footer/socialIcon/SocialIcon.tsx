import style from './social_icon.module.scss';
export default function SocialIcon() {
  return (
    <div>
        <ul className={style.socialItem}>
            <li><a href="#"><i className={`${style.fab} fab fa-facebook`} aria-hidden="true"></i></a></li>
            <li><a href="#"><i className={`${style.fab} fab fa-twitter`} aria-hidden="true"></i></a></li>
            <li><a href="#"><i className={`${style.fab} fab fa-google-plus-g`} aria-hidden="true"></i></a></li>
            <li><a href="#"><i className={`${style.fab} fab fa-linkedin`} aria-hidden="true"></i></a></li>
            <li><a href="#"><i className={`${style.fab} fab fa-instagram`} aria-hidden="true"></i></a></li>
        </ul>
    </div>
  )
}
