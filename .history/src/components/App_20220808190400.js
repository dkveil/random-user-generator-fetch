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
            for(let i = 0; i < 3: i++){
                const user = data.results[0];
                setUsers(prev => ([
                    ...prev,
                    user
                ]))

            }
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            {console.log(users)}
            <ButtonFetchUsers click={handleDataFetch}/>
            {users ? <UsersList users={users}/> : null}
        </div>
    );
}

export default App;
