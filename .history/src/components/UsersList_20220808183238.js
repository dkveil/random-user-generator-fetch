const UsersList = (props) => {

    const {users} = props;

    return (
        <ul>
            {users.map(user => (
                <div key={user.id.value}>

                </div>
            ))}
        </ul>
    );
}

export default UsersList;