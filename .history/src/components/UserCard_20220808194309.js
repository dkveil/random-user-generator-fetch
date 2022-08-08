import styled from "styled-components";

const UserCardWrapper = styled.div`
    padding: 1rem;
    height: 480px;
    width: 300px;
    margin: 1rem;
    border: 1px solid black;
`

const UserCard = (props) => {

    const {
        nametitle,
        firstname,
        lastname,
        email,
        imageurl
    } = props;

    return (
        <UserCardWrapper>
            <img src={imageurl} alt={lastname} />
            <h4>
                {user.name.title} {user.name.first} {user.name.last}
            </h4>
            <p>{user.email}</p>
        </UserCardWrapper>
    );
};

export default UserCard;
