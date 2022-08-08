import styled from "styled-components";

const ButtonWrapper = styled.button`
    display: inline-flex;
    height: 480px;
    width: 300px;
    margin: 1rem;
`;

const ButtonFetchUsers = (props) => {
    const { click } = props;

    return <ButtonWrapper onClick={click}>button</ButtonWrapper>;
};

export default ButtonFetchUsers;
