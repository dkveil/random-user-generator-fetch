import styled from "styled-components";

const UserCardWrapper = styled.div`
    height: 200px;
`

const UserCard = (props) => {
    return(
        <UserCardWrapper>
            {props.children}
        </UserCardWrapper>
    );
};

export default UserCard;
