import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Input from '../Input'
import Button from '../Button'

const Signup = () => {
    const navigate = useNavigate()
    const {register,handleSubmit,formState:{errors}}  = useForm();

    const Signin =(data)=> {
    console.log(data);
    navigate('/dashboard')    
    }

  return (
   <>
   <div className='mt-24'>

  
 <div className="flex items-center justify-center ">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10 pt-12 shadow-xl`}>
           
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                

                <form onSubmit={handleSubmit(Signin)}>
                    <div className='space-y-5'>
                        <Input
                        label="Full Name: "
                        placeholder="Enter your full name"
                        {...register("name", {
                            required: true,
                        })}
                        />
            {errors.name && errors.name.type === "required" && (
            <p className="text-red-600 mt-8 text-start text-sm">Name is required.</p>
             )}
                        <Input
                        label="Email: "
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", {
                            required: true,
                            pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
                        })}
                        />
          {errors.email && errors.email.type === "required" && (
           <p className="text-red-600 mt-8 text-start">Email is required.</p>
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
                        <Button type="submit" className="w-full">
                            Create Account
                        </Button>
                    </div>
                </form>
            </div>

    </div>
    </div>
   </>
  )
}

export default Signup