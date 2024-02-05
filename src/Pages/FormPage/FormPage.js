import React, { useState } from 'react';


const FormPage = () => {

    const [userInfo, setUserInfo] = useState({
        userName: '',
        age: '',
        position: ''
    })

    const changeInput = (event) => {
        setUserInfo({ ...userInfo, [event.target.name]: event.target.value})
    }
    const adduser = () => {
        if (userInfo.userName === '') return alert('Заполните поле Имя')
        if (userInfo.age === '') return alert('Заполните поле age')
        if (userInfo.position === '') return alert('Заполните поле position')
    }

    return (
        <div>
            <input
                type="text"
                name='userName'
                placeholder='user name'
                onChange={changeInput}
            />
            <input
                type="text"
                name='age'
                placeholder='age'
                onChange={changeInput}
            />
            <input
                type="text"
                name='position'
                placeholder='position'
                onChange={changeInput}
            />
            <button onClick={adduser}>add user</button>
        </div>
    );
};

export default FormPage;