import React from "react";
import { useForm } from "react-hook-form";

function Form() {
    const {register, handleSubmit, formState: {errors}, reset} = useForm()

    function onSubmitForm(data){
        console.log(data)
        reset()
    }
    return ( 
        <div className="bg-green-200 h-screen">
          <h1 className="text-4xl font-bold tracking-tighter text-center p-5">Form Page</h1>
          <form 
              onSubmit = {handleSubmit(onSubmitForm)}
              className="flex flex-col gap-4 w-2/5 mx-auto bg-white p-5 rounded shadow-lg">
            <div className="flex flex-col gap-2">
                <label className="font-bold">Name</label>
                <input 
                    {...register('name', { required: true })} 
                    type="text" 
                    name="name" 
                    className="border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />


            </div>
             <div className="flex flex-col gap-2">
                <label className="font-bold">email</label>
                <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} type="email" name="email" className="border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                {errors.email && <span className="text-red-500 text-sm">Please enter a valid email address</span>}
            </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold">password</label>
                <input {...register('password', { required: true, minLength: 6 })}
                type="password" name="password" className="border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                {errors.password && <span className="text-red-500 text-sm">Password must be at least 6 characters long</span>}
            </div>

            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
          </form>

        </div>
     );
}

export default Form;