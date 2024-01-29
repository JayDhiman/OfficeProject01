// import { useForm } from "react-hook-form";


// const Input = ({
//   label,
//   placeholder,
//   children
  
// }) => {
//   const {register,handleSubmit} = useForm();
//   const handleFormSubmit = (data) => console.log(data);
//   return (
//     <>
//     <div className='container mx-auto shadow-amber-100 shadow-xl box'>
//       <form onSubmit={handleSubmit(handleFormSubmit)}>
//         <div>
//          <input 
//          type="Email"
//          label= {label}
//          placeholder={placeholder}
//           {...register('email',{
//             required:true,
//           })}
//           className="border-2 bg-slate-50"  
//        />
//        </div>
          
//        <div>
//        <input 
//        type="password"
//        label= {label}
//        placeholder={placeholder}
//           {...register('password',{
//             required:true,
//             pattern: /^[A-Za-z]+$/i
//           })}
//           className="border-2 bg-slate-50"  
//        />
//        </div>
//        <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md">
//           {children}
//         </button>

//       </form>
     
//     </div>
//     </>
//   )
// }

// export default Input

import React, {useId} from 'react'

const Input = React.forwardRef( function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref){
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label 
            className='inline-block mb-1 pl-1' 
            htmlFor={id}>
                {label}
            </label>
            }
            <input
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )
})

export default Input