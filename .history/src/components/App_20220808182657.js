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
        .then(res => res.json())
        .then(data => {
            console.log(data)

            setUsers(prev => ({
                ...prev,
                data
            }))
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            <ButtonFetchUsers click={handleDataFetch}/>
            {users ? <UsersList users={users}/> : null}
            {console.log(users)}
        </div>
    );
}

export default App;
