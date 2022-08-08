import styled from "styled-components";

const ButtonWrapper = styled.button`
    height: 420px;
`;

const ButtonFetchUsers = (props) => {
    const { click } = props;

    return <ButtonWrapper onClick={click}>button</ButtonWrapper>;
};

export default ButtonFetchUsers;
