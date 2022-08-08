import styled from "styled-components";

const UserCardWrapper = styled.div`

`

const UserCard = (props) => {
    return(
        <UserCardWrapper>
            {props.children}
        </UserCardWrapper>
    );
};

export default UserCard;
