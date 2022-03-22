import React from "react";
import './userList.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowPointer, faUserMinus} from '@fortawesome/free-solid-svg-icons'

const UsersList = ({UsersData, selecUSer, UserDelete}) => {
    return(
        <div className='UsersList' >
            {
                UsersData.map((userData) => (
                    <div key={userData.id} className='userList' > 
                        <><h2>Usuario</h2>
                        <ul>
                            {/* email */}
                            <li>
                                <b> Correo: </b> {userData.email}
                            </li>

                            {/* first_name */}
                            <li>
                                <b> Nombre: </b> {userData.first_name}
                            </li>

                            {/* last_name */}
                            <li>
                                <b> Apellidos: </b> {userData.last_name}
                            </li>

                            {/* birthday */}
                            <li>
                                <b> Fecha de nacimiento: </b> {userData.birthday}
                            </li>
                        </ul></>
                        <div className="icons-sd">
                            <button onClick={() => selecUSer(userData)}  className='icon-sd' >
                                <FontAwesomeIcon icon={faArrowPointer}/>
                            </button>

                            {/* delete */}
                            <button onClick={() => UserDelete(userData.id)} className='icon-sd' >
                                <FontAwesomeIcon icon={faUserMinus}/>
                            </button>
                        </div>

                    </div>
                ))
            }
        </div>
    );
}

export default UsersList;