import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

import user from '../../data/user.json';
import data from '../../data/data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.app}>
      <div>
        <div className={css.wrapper}>
          <Profile
            avatar={user.avatar}
            username={user.username}
            tag={user.tag}
            location={user.location}
            stats={user.stats}
          />
          <FriendList friends={friends} />
        </div>

        <Statistics title="Upload stats" stats={data} />
         </div>

      <TransactionHistory items={transactions} />
    </div>
  );
};
