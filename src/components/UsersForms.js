import React, { useEffect, useState } from "react";
import axios from "axios";
import './userForm.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashCanArrowUp, faPlus} from '@fortawesome/free-solid-svg-icons'

const UsersForm = ({getUsers, UserSelected, deselectedUser, UserDelete}) => {

    // estado
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthday, setBirthday] = useState('');

    useEffect(() => {
        if(UserSelected){
            setEmail(UserSelected.email);
            setPassword(UserSelected.password);
            setFirstName(UserSelected.first_name);
            setLastName(UserSelected.last_name);
            setBirthday(UserSelected.birthday);
        }
        else{
            reset();
        }
    }, [UserSelected])


    const submit = e =>{ 
        e.preventDefault();
        const user = {
            email, 
            password,
            first_name: firstName,
            last_name: lastName,
            birthday
        }
        if(UserSelected){
            axios.put(`https://users-crud1.herokuapp.com/users/${UserSelected.id}/`, user)
                .then(() => getUsers());
        } 
        else {
            axios.post(`https://users-crud1.herokuapp.com/users/`, user)
                .then(() => getUsers());
        }        
    }

    const reset = () => {
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
        setBirthday('');
    }

    return(
        <form className='UsersForm' onSubmit={submit} >

            {/* email */}
            <div className='input-container' >
                <label htmlFor='email' >Email</label>
                <input 
                    className='input' 
                    id='email' 
                    type='text'
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />
            </div>

            {/* password */}
            <div className='input-container' >
                <label htmlFor='password' >Contraseña</label>
                <input
                    className='input' 
                    id='password' 
                    type='password'
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                />
            </div>

            {/* first_name */}
            <div className='input-container' >
                <label htmlFor='first_name' >Nombre</label>
                <input
                    className='input' 
                    id='first_name' 
                    type='text'
                    onChange={e => setFirstName(e.target.value)}
                    value={firstName}
                />
            </div>

            {/* last_name */}
            <div className='input-container' >
                <label htmlFor='last_name' >Apellidos</label>
                <input
                    className='input' 
                    id='last_name' 
                    type='text'
                    onChange={e => setLastName(e.target.value)}
                    value={lastName}
                />
            </div>

            {/* birthday */}
            <div className='input-container' >
                <label htmlFor='birthday' >Cumpleaños</label>
                <input
                    className='input' 
                    id='birthday' 
                    type='date'
                    onChange={e => setBirthday(e.target.value)}
                    value={birthday}
                />
            </div>

            {/* button */}
            <div className='button-container' >
                <button className='button-container-ch' >
                    <FontAwesomeIcon 
                        className="icon-form"
                        icon={faPlus}
                    />
                </button>
                {/* clear */}
                <button type='button' onClick={deselectedUser} className='button-container-ch'  > 
                    <FontAwesomeIcon 
                        className="icon-form"
                        icon={faTrashCanArrowUp} 
                    />
                </button>
            </div>


        </form>
    );
}

export default UsersForm;