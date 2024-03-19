import FriendList from './components/FriendList/FriendList';
import userData from './data/userData.json';
import Profile from './components/Profile/Profile';
import friends from './data/FriendListItem.json';
import transactions from './data/transactions.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import './App.module.css';

function App() {
  
  return (
    <>
      <Profile
        avatar={userData.avatar}
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  )
}

export default App
