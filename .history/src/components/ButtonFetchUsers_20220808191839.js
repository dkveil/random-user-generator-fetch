const ButtonWrapper = styled.a``;

const ButtonFetchUsers = (props) => {
    const { click } = props;

    return <ButtonWrapper onClick={click}>button</ButtonWrapper>;
};

export default ButtonFetchUsers;
