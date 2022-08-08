const UsersList = (props) => {

    const { users } = props;

    return (
        <ul>
            {users.map(user => (
                <div key={user.login.uuid}>
                    <h4>{user.name.title} {user.name.first} {user.name.last}</h4>
                </div>
            ))}
        </ul>
    );
}

export default UsersList;