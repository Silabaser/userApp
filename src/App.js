import { useState } from 'react';
import './App.css';
import UserList from "./UserList";
import UserContext from './UserContext';

const data = [
  {id: 1, name: "Sla", email: "slabsr@mail.com", age: 22, color: "purple"},
  {id: 2, name: "Ysn", email: "ysndskr@mail.com", age: 21, color: "orange"},
  {id: 3, name: "Öyk", email: "oykozr@mail.com", age: 20, color: "pink"}
];

const App = () => {
  const [users, setUsers] = useState(data);

  const changeColor = (id, color) => 
  setUsers(
    users.map(user => (user.id === id ? {...user, color: color}: user))
  );
  return (
    <UserContext.Provider value={{users, changeColor}}>
    <div className='App'>
      <header>
        <h1>Welcome!</h1>
      </header>
      <UserList />
    </div>
    </UserContext.Provider>
  );
};

export default App;
