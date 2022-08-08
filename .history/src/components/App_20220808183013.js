import React from "react";
import UsersList from "./UsersList";
import ButtonFetchUsers from "./ButtonFetchUsers";

const API = 'https://randomuser.me/api/'

function App() {

    const [users, setUsers] = React.useState([])

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
            setUsers(data.results)
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            <ButtonFetchUsers click={handleDataFetch}/>
            {console.log(users)}
            {users ? <UsersList users={users}/> : null}
            {users.map(item => (
                <div>{item.gender}, {item.name}</div>
            ))}
        </div>
    );
}

export default App;
