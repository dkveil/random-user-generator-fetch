import UserCard from "./UserCard";
import styled from "styled-components";

const UserListWrapper = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 0;
    margin: 0;

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
`;

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
                gender={user.gender}
                email={user.email}
                age={user.dob.age}
                imageurl={user.picture.large}
                phonenumber={user.phone}
                country={user.location.country}
                />
            ))}
        </UserListWrapper>
    );
};

export default UsersList;
