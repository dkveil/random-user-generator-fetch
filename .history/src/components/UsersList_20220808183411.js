const UsersList = (props) => {

    const {users} = props;

    return (
        <ul>
            {users.map(user => (
                <div key={user.id.value}>
                    <h4>{user.name.title} {user.name.first}</h4>
                </div>
            ))}
        </ul>
    );
}

export default UsersList;