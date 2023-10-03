import React, { useContext } from 'react';
import User from "./User";
import { UserContext } from './UserContext';

const UserList = () => {
    const context = useContext(UserContext);  

  return (
    <div>
        <h2>User List</h2>
        {context.users.map(user => (
            <User key={user.id} user={user} />
        ))}
    </div>
  )
}
export default UserList;