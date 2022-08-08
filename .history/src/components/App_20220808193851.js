import React from "react";
import UsersList from "./UsersList";
import ButtonFetchUsers from "./ButtonFetchUsers";
import styled from "styled-components";

const Wrapper = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
`;

const API = "https://randomuser.me/api/";

function App() {
    const [users, setUsers] = React.useState([]);

    const handleDataFetch = () => {
        fetch(API)
            .then((res) => {
                if (res.ok) {
                    return res;
                }
                throw Error(res.status);
            })
            .then((res) => res.json())
            .then((data) => {
                const user = data.results[0];
                setUsers((prev) => [...prev, user]);
            })
            .catch((error) => console.log(error));
    };

    return (
        <Wrapper>
            {console.log(users)}
            {users ? <UsersList users={users} /> : null}
            <ButtonFetchUsers click={handleDataFetch} />
        </Wrapper>
    );
}

export default App;
