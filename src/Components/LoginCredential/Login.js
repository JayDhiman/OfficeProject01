import React from 'react'
import Input from '../Input'
import Button from '../Button'
import {useForm} from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
const {register,handleSubmit ,formState:{errors}} = useForm();
const navigate = useNavigate()

const loginData =async (data)=>{
    navigate('/signup')
    console.log(data);
}
   
return (
<>


<div className='mt-20 '>


<div className='flex items-center justify-center w-full pt-12  '>
<div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10 shadow-xl`}>
<h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline text-blue-500"
                    >
                        Sign Up
                    </Link>
        </p>
       
        <form onSubmit={handleSubmit(loginData)} className='mt-8'>
            <div className='space-y-5'>
                <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                    required: true,
                    pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/

                })}
                />
          {errors.email && errors.email.type === "required" && (
           <p className="text-red-600 mt-8 text-start">Email is required.</p>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <p className="text-red-600 mt-8 text-start">Email is not valid.</p>
          )}
                <Input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                    required: true,
                    minLength:6

                })}
                />
            {errors.password && errors.password.type === "required" && (
           <p className="text-red-600 mt-8 text-start">Password is required.</p>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <p className="text-red-600 mt-8 text-start">Password should be at-least 6 characters.</p>
          )}
                <Button
                type="submit"
                className="w-full"
                >Sign in</Button>
            </div>
        </form>
</div>
  
</div>
</div>
   </>
  )
}

export default Login