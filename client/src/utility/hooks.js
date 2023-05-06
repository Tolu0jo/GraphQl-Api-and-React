import { useState } from "react";

//This helps in getting data from a form
export const useForm = (callback,initialState ={})=>{
    const [values,setValues]=useState(initialState);

    const onChange = (event)=>{
        setValues({
          ...values,
            [event.target.name]:event.target.value
        })
        console.log(values);
    };
    const onSubmit =(event)=>{
        event.preventDefault();
        callback();
    }
    return{
        values,
        onChange,
        onSubmit
    }
}

