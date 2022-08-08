import styled from "styled-components";

const UserCardWrapper = styled.div`
    height: 500px;
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
