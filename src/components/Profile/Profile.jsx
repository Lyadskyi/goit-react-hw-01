// import clsx from "clsx";
import css from '../Profile/Profile.module.css';

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <>
      <div className={css.card}>
        <div>
          <img className={css.avatar} src={image} alt="User avatar" />
          <p className={css.username}>{name}</p>
          <p className={css.city}>{tag}</p>
          <p className={css.country}>{location}</p>
        </div>

        <ul className={css.list}>
          <li className={css.listItem}>
            <span className={css.title}>Followers</span>
            <span className={css.desc}>{followers}</span>
          </li>
          <li className={css.listItem}>
            <span className={css.title}>Views</span>
            <span className={css.desc}>{views}</span>
          </li>
          <li className={css.listItem}>
            <span className={css.title}>Likes</span>
            <span className={css.desc}>{likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
}
