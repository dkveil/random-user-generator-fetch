import styled from "styled-components";

const UserCardWrapper = styled.div`
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
