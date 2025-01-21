import { useState, useEffect } from 'react';
import useUsers from './hooks/useUsers';
import { CanceledError } from './services/api-client';
import userService, { User } from './services/user-service';



function App(){
  const {users, error, isLoading, setUsers, setError}=  useUsers();


//   const [users,setUsers] = useState<User[]>([]);
//   const [error , setError] = useState (''); 
//   const [isloading, setLoading] = useState(false);
// }



// useEffect(() => {
//   setLoading(true);

//   const {request, cancel} = userService.getAll<User>();
//   request.then((res) => {
//     setUsers(res.data);
//     setLoading(false);
//   })
//   .catch((err) => {
//     if (err instanceof CanceledError) return;
//     setError(err.message);
//     setLoading(false);
//   });

// return () => cancel();
// }, []);

const deleteUser = (user: User) => {
const originalUsers = [...users];
setUsers(users.filter (u => u.id !== user.id));

userService.delete(user.id).catch(err => {
  setError(err.message);
  setUsers(originalUsers);
});
};
const adduser = () => {
  const originalUsers = [...users];
  const newUser = {id: 0, name: 'sawera'};
setUsers([newUser, ...users]);


userService.create(newUser)
.then(({data: savedUser}) => setUsers([savedUser, ...users]))
.catch(err => {
  setError(err.message);
  setUsers(originalUsers);
});
};

const updateUser = (user: User) => {
const originalUsers = [...users];
  const updatedUser = {...user, name: user.name + '!'};
  setUsers(users.map(u => u.id === user.id ? updatedUser : u));

 userService.update(updatedUser) 
  .catch(err => {
    setError(err.message);
    setUsers(originalUsers);
  });
};


return (
  <>
    {error && <p className="text-danger">{error}</p>}
    {isLoading && <div className="spinner-border"></div>}
    <ul className="list-group">
      {users.map((user) => (
        <li key={user.id} className="list-group-item d-flex justify-content-between">
          {user.name}
          <div>
            <button className="btn btn-outline-secondary mx-1" onClick={() => updateUser(user)}>Update</button>
            <button className="btn btn-outline-danger" onClick={() => deleteUser(user)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  </>
);
}

export default App;