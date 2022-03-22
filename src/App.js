import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import UsersForm from './components/UsersForms';
import UsersList from './components/UsersList';

function App() {

  const [UsersData, setUSersData] = useState([]);
  const [UserSelected, setUserSelected] = useState('');


  useEffect(() => {
    axios.get(`https://users-crud1.herokuapp.com/users/`)
      .then(res => setUSersData(res.data))
  }, [])

  const getUsers = () => {
      axios.get(`https://users-crud1.herokuapp.com/users/`)
        .then(res => setUSersData(res.data))
  }

  // select
  const selecUSer = userData => setUserSelected(userData);
  
  // deselected
  const deselectedUser = () => setUserSelected(null);

  // deleted
  const UserDelete = id => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
    .then(() => getUsers());
  }

  return (
   <div className="App-container">
        <h1 className='title-project' >Crud App | by axelwdf</h1>
        <div className="App">
          <UsersForm 
            getUsers={getUsers}
            UserSelected={UserSelected}
            deselectedUser={deselectedUser}
            UserDelete={UserDelete}
          />

          <UsersList
            UsersData={UsersData}
            selecUSer={selecUSer}
            UserDelete={UserDelete}
          />
      </div>
   </div>
  );
}

export default App;
