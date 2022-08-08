import styled from "styled-components";

const UserCardWrapper = styled.div`
    display: inline-flex;
    padding: 1rem;
    height: 480px;
    width: 300px;
    margin: 1rem;
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
