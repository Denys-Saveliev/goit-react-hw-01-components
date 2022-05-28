import Profile from './profile';
import user from '../data/user.json';
import Statistics from './statistics';
import data from '../data/data.json';
import FriendList from './friendList';
import friends from '../data/friends.json';
import TransactionHistory from './transactionHistory';
import transactions from '../data/transactions.json';

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
      <Statistics stats={data} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
}
