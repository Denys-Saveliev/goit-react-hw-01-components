import user from '../data/user.json';
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import data from '../data/data.json';

export default function App() {
  return (
    <>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics stats={data} title={'Upload stats'} />
    </>
  );
}
