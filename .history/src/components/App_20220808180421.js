import React from "react";
import UsersList from "./UsersList";
import ButtonFetchUsers from "./ButtonFetchUsers";

const API = 'https://randomuser.me/api1/'

function App() {

  const [users, setUsers] = React.useState(null)

  const handleDataFetch = () => {
    fetch(API)
    .then(res => {
        if(res.ok) {
            return res
        }
        throw Error("Error")
    })
    .then()
    .catch(error => console.log(error))
  }

  return (
    <div>
        <ButtonFetchUsers click={handleDataFetch}/>
        {users ? <UsersList users={users}/> : null}
    </div>
  );
}

export default App;
