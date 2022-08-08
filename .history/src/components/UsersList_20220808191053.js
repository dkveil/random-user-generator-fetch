import styled from "styled-components";

const UserListWrapper = styled.ul`

`

const UsersList = (props) => {

    const { users } = props;

    return (
        <ul>
            {users.map(user => (
                <div key={user.login.uuid}>
                    <img src={user.picture.large} alt={user.name.last} />
                    <h4>{user.name.title} {user.name.first} {user.name.last}</h4>
                    <p>{user.email}</p>
                </div>
            ))}
        </ul>
    );
}

export default UsersList;