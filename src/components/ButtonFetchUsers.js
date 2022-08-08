import styled from "styled-components";

const ButtonWrapper = styled.button`
    display: block;
    padding: 1rem;
    height: 480px;
    width: 280px;
    margin: 1rem;
    border: none;
    background: darkgray;
    border-radius: 4px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    color: white;
    font-size: large;

    &:hover{
        background: #666666;
    }

`;

const ButtonFetchUsers = (props) => {
    const { click } = props;

    return <ButtonWrapper onClick={click}>Add user</ButtonWrapper>;
};

export default ButtonFetchUsers;
