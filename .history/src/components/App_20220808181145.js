import React from "react";
import UsersList from "./UsersList";
import ButtonFetchUsers from "./ButtonFetchUsers";

const API = 'https://randomuser.me/api/'

function App() {

    const [users, setUsers] = React.useState(null)

    const handleDataFetch = () => {
        fetch(API)
        .then(res => {
            if(res.ok) {
                return res
            }
            throw Error(res.status)
        })
        .then(res => {
            console.log(res.json()
            return res.json()
        })
        .then(data => {
            console.log(data)
        })
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
