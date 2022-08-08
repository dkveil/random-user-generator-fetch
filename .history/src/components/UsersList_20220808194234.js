import UserCard from "./UserCard";
import styled from "styled-components";

const UserListWrapper = styled.ul`
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
`

const UsersList = (props) => {
    const { users } = props;

    return (
        <UserListWrapper>
            {users.map((user) => (
                <UserCard
                key={user.login.uuid}
                nametitle={user.name.title}
                firstname={user.name.first}
                lastname={user.name.lastname}
                email={user.email}
                imageurl={user.picture.large}
                />
            ))}
        </UserListWrapper>
    );
};

export default UsersList;
