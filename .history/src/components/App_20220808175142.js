import UsersList from "./UsersList";
import ButtonFetchUsers from "./ButtonFetchUsers";

const API = 'https://randomuser.me/api/'

function App() {
  return (
    <div>
      <UsersList />
      <ButtonFetchUsers />
    </div>
  );
}

export default App;
