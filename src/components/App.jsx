import css from './app.module.css';
import { Profile } from './profile/Profile';
import user from './profile/user.json';
import { Statistics } from './statistics/Statistics';

export const App = () => {
  return (
    <div className={css.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" />
    </div>
  );
};
