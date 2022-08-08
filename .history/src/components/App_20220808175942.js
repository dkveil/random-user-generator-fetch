import React from "react";
import UsersList from "./UsersList";
import ButtonFetchUsers from "./ButtonFetchUsers";

const API = 'https://randomuser.me/api/?result'

function App() {

  const [users, setUsers] = React.useState(null)

  const handleDataFetch = () => {
    fetch(API)
    .then(res => console.log(res))
  }

  return (
    <div>
      <ButtonFetchUsers click={handleDataFetch}/>
      {users ? <UsersList users={users}/> : null}
    </div>
  );
}

export default App;
