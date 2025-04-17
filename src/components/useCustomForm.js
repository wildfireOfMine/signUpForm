import React, { useState } from 'react'

const useCustomForm = () => {
    const [customForm, setCustomForm] = useState({
        firstName: '',
        lastName:'',
        email:'',
        phoneNumber:'',
        password:'',
        repeatPassword:'',
    });

    return [customForm, setCustomForm];
}

export default useCustomForm
