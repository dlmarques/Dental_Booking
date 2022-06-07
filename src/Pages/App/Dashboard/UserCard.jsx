import React from 'react'

const UserCard = ({userData}) => {
  return (
    <>
     {userData ? 
            userData.map(({id, name, dob, cell, picture}) => 
            (
                <div className="dashboard-card-user" key={id}>
                <div className="left">
                  <img src={picture.large} alt="" id="user" />
                </div>
                <div className="right">
                  <div className="info-user">
                    <div className="info">
                      <h3>
                         {name.first} {name.last}
                      </h3>
                      <h3>
                        {cell}
                      </h3>
                      <h3>
                         {dob.age} years
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            )
            )  
            : 
            null
        }
    </>
  )
}

export default UserCard