import React, { SyntheticEvent } from "react";

export interface FormIF{
    email?: string,
    password?: string
}

interface FormEvent<T> extends SyntheticEvent<T>{
    target: EventTarget & T;
}

export const useForm = (initValue: FormIF) => {
    const [form, setForm] = React.useState<FormIF>(initValue)

    function handleForm(event: FormEvent<HTMLInputElement>){
        setForm({...form, [event.target.name]: event.target.value})
    }

    return [form, handleForm]
}