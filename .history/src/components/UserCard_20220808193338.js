import styled from "styled-components";

const UserCardWrapper = styled.div`
    padding: 1rem;
    height: 480px;
    width: 280px;

    border: 1px solid black;
`

const UserCard = (props) => {
    return(
        <UserCardWrapper>
            {props.children}
        </UserCardWrapper>
    );
};

export default UserCard;
