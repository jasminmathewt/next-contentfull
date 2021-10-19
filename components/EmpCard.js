
import Image from 'next/image'
import Link from 'next/link'


export default function RecipeCard({emp}) {
    console.log(emp);
    const {employee_name , employee_salary , employee_age} = emp
   
    return (
        
            <tr>
                <td>{employee_name}</td>
                <td>{employee_salary}</td>
                <td>{employee_age}</td>
            </tr> 
    )
  }