import React, { useState } from "react";

const AddPostForm = props => {
  const initialFormState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!user.name || !user.username) return;
        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <div className="Name">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="PostDesciption">
        <label>Post Description:</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleInputChange}
        />
      </div>
      <button>Create New Post</button>
    </form>
  );
};

export default AddPostForm;
