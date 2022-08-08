import styled from "styled-components";

const ButtonWrapper = styled.button`
    height: 400px;
`;

const ButtonFetchUsers = (props) => {
    const { click } = props;

    return <ButtonWrapper onClick={click}>button</ButtonWrapper>;
};

export default ButtonFetchUsers;
