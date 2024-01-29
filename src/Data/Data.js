
import { GoProjectSymlink } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { FcSupport } from "react-icons/fc";
import { MdPayment } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { SiAuth0 } from "react-icons/si";
import { MdErrorOutline } from "react-icons/md";
import { IoPersonCircleSharp } from "react-icons/io5";
import { GrUserWorker } from "react-icons/gr";
import { nanoid } from 'nanoid'












export const Data =[

    {
        id:nanoid(),
        dropdown:true,
        icon: (GrUserWorker),
        title: 'Employees',
        // path:'/employee',
        dropDownIcon: (IoIosArrowForward),
        items: [
            {
              id: nanoid(),
              title: 'All Employee',
              path: '/employee/allemployee',
            },
            {
              id: nanoid(),
              title: 'Holiday',
              path: '/employee/holiday',
            },
          ],
            
        

    },
    {
        id:nanoid(),
        icon: (IoPersonCircleSharp),
        title: 'Clients',
        path:'/clients'
    },
    {
        id:nanoid(),
        icon: (GoProjectSymlink),
        dropdown:true,
        title: 'Project',
        // path:'/Projects',
        dropDownIcon: (IoIosArrowForward),
        items: [
            {
              id: nanoid(),
              title: 'All Product',
              path: '/allProjects',
            },
            {
              id: nanoid(),
              title: 'Task',
              path: '/Tasks',
            },
          ]
    },
    {
        id:nanoid(),
        icon: (MdPayment),
        title: 'Ticket',
        path:'/ticket'
    }
]



export const Pages =[
{
        id: nanoid(),
        dropDown:true,
        icon:(CgProfile),
        Title:'Profile',
        path:'/profile',
        items:[
          {
            id: nanoid(),
            Title: 'Employee Profile',
            path: '/employee/Projects',
          },
          {
            id: nanoid(),
            Title: 'Client Profile',
            path: '/Products/Projects',
          },
        ]
},
{
    id: nanoid(),
    dropDown:true,
    icon:(SiAuth0),
    Title:'Authentication',
    path:'/auth',
    items:[
      {
        id: nanoid(),
        Title: 'Login',
        path: '/employee/Projects',
      },
      {
        id: nanoid(),
        Title: 'Registar',
        path: '/registar',
      },
      {
        id: nanoid(),
        Title: 'Forget Password',
        path: '/password',
      },
      
    ]
},
{
    id: nanoid(),
    icon:(MdErrorOutline),
    Title:'Error Pages',
    path:'/error'
}
]
export const Others = [
    {
        id: nanoid(),
        icon:(IoSettingsOutline),
        Title:'SETTINGS',
        path:'/setting'
},
{
    id: nanoid(),
    icon:(IoIosHelpCircleOutline),
    Title:'HELP',
    path:'/help'
},
{
    id: nanoid(),
    icon:(FcSupport),
    Title:'SUPPORT',
    path:'/support'
}
]


// data for React Table 
export const tableData = [{
  
  id:1,
  name:'John Doe',
  designation:'Web designer',
  officeEmail:'abc@gmail'

},
{
  id:2,
  name:'abcd',
  designation:'Web developer',
  officeEmail:'abcd01@gmail' 
},
{
  id:2,
  name:'xyz',
  designation:'Software tester',
  officeEmail:'xyz@gmail'
}
]
