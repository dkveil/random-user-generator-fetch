import UserCard from "./UserCard";
import styled from "styled-components";

const UserListWrapper = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const UsersList = (props) => {
    const { users } = props;

    return (
        <UserListWrapper>
            {users.map((user) => (
                <div key={user.login.uuid}>
                    <img src={user.picture.large} alt={user.name.last} />
                    <h4>
                        {user.name.title} {user.name.first} {user.name.last}
                    </h4>
                    <p>{user.email}</p>
                </div>
            ))}
        </UserListWrapper>
    );
};

export default UsersList;