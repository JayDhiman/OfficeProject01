import React from 'react'
import Layout from '../../Components/Layout'

import EmployeeForm from '../../Components/Forms/EmployeeForm'
// import {useForm} from 'react-hook-form'
const AllEmployee = () => {
    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors }
    //   } = useForm();
 
    // const onSubmit =(data)=> console.log(data);

  return (
    <>
   <Layout>
   <EmployeeForm/>
   </Layout>
    </>
  )
}

export default AllEmployee