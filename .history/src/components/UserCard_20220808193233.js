import styled from "styled-components";

const UserCardWrapper = styled.div`
padding: 2pxpx;
    min-height: 400px;
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