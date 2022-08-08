const UsersList = (props) => {

    const {users} = props;

    return (
        <ul>
            {users}
        </ul>
    );
}

export default UsersList;