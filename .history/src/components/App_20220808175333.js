import React from "react";
import UsersList from "./UsersList";
import ButtonFetchUsers from "./ButtonFetchUsers";

const API = 'https://randomuser.me/api/'

function App() {

  const [users, setUsers] = React.useState(null)

  const handleDataFetch = () => {

  }

  return (
    <div>
      <UsersList />
      <ButtonFetchUsers />
      {users ? <UsersList /> : users}
    </div>
  );
}

export default App;
