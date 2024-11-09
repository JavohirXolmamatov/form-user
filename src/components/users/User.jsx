import './User.css'

function User({users, deleteUser}) {
    
  return (
    <div className='user-container'>
        <div className="row container">
            {
                users.map((user, index) => (
                    console.log(index),
                    <div className="col" key={index}>
                        <div className="card">
                            <img src={user.image} alt={user.firstName} />
                            <div className="card-body">
                                <h3>{user.firstName} {user.lastName} {user.age}</h3>
                                <p>From: {user.from}</p>
                                <p>Job: {user.job}</p>
                                <p>Gender: {user.gender}</p>
                                <button className='delete-btn'  onClick={() => deleteUser(index)} onChange={(e) => console.log(e)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}


export default User