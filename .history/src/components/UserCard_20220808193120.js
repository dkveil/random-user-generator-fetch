import styled from "styled-components";

const UserCardWrapper = styled.div`

`

const UserCard = () => {
    return(
        <UserCardWrapper>
            {props.children}
        </UserCardWrapper>
    );
};

export default UserCard;
