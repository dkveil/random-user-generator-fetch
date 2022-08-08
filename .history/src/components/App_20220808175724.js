import React, {useState} from "react";
import UsersList from "./UsersList";
import ButtonFetchUsers from "./ButtonFetchUsers";

const API = 'https://randomuser.me/api/'

function App() {

  const [users, setUsers] = useState(null)

  const handleDataFetch = () => {
    console.log('test')
  }

  return (
    <div>
      <ButtonFetchUsers click={handleDataFetch}/>
      {users ? <UsersList users={users}/> : null}
    </div>
  );
}

export default App;
