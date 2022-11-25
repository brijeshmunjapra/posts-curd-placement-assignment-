import React, { useState } from "react";
import AddPostForm from "./Forms/AddPostForm";
import EditPostForm from "./Forms/EditPostForm";
import PostCard from "./Tables/PostCard";

const App = () => {
  const addUser = user => {
    user.id = users.length + 1;

    setUsers([...users, user]);
  };

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  const editRow = user => {
    setEditing(true);

    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  const usersData = [
    { id: 1, name: "Tania", username: "How are you world??.." }
  ];

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: "", username: "" };
  const [currentUser, setCurrentUser] = useState(initialFormState);

  return (
    <div className="App">
      <h1>Posts App</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit Post</h2>
              <EditPostForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Create Your Post.....</h2>
              <AddPostForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h1>View Posts</h1>
          <PostCard users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
