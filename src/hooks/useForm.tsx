import React, { ChangeEvent } from "react";

export interface IForm{
    email?: string,
    password?: string
}

export const useForm = (initValue: IForm) => {
    const [form, setForm] = React.useState(initValue)

    function handleForm(event: ChangeEvent<HTMLInputElement>){
        setForm({...form, [event.target.name]: event.target.value})
    }

    return [form, handleForm]
}
