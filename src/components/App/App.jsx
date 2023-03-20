import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

import user from '../../data/user.json';
import data from '../../data/data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions';

import css from './App.module.css';

const { avatar, username, tag, location, stats } = user;

export const App = () => {
  return (
    <div className={css.app}>     
      <Profile avatar={avatar} username={username} tag={tag} location={location} stats={stats}/>
      <FriendList friends={friends} />
      <Statistics title="Upload stats" stats={data} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
