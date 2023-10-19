import React, { useState } from 'react';
import AddUser from './Users/AddUser';
import UsersList from './Users/UsersList';


function App() {
  const [usersList, setUsersList] = useState([])
  setUsersList()
  return (
    <>
      <AddUser />
      <UsersList
        users={[usersList]}
      />
    </>
  )
}

export default App
