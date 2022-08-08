import styled from "styled-components";

const ButtonWrapper = styled.button``;

const ButtonFetchUsers = props => {
    const { click } = props;

    return <ButtonWrapper onClick={click}>button</ButtonWrapper>;
};

export default ButtonFetchUsers;
