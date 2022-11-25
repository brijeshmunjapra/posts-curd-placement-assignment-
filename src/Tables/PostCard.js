import React from 'react'

function PostCard(props) {
    return (
        <div className='postcardContainer'>
            {props.users.length > 0 ? (
                props.users.map(user => (
                    <div className='postcard' key={user.id}>
                        <h2>Name: {user.name}</h2>
                        <h2>Post: {user.username}</h2>
                        <div>
                            <button
                                onClick={() => {
                                    props.editRow(user);
                                }}
                                className="button muted-button"
                            >
                                Edit This Post
                            </button>
                            <button
                                className="button muted-button"
                                onClick={() => props.deleteUser(user.id)}
                            >
                                Delete This Post
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <div>
                    <h2>No Posts</h2>
                </div>
            )}
        </div>
    )
}

export default PostCard