import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { store } from './Details'

const Student = () => {
    const [student]=useContext(store)
  return (
    <div>

<div className='student'><Link to="/add-student">Add Student</Link></div>

<table border="2" className='classes' width='1000px'>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Course</th>
      <th scope="col">Batch</th>
      <th scope="col">Change</th>

    </tr>
  </thead>

  <tbody>
      {student.map((student)=>(<tr key={student.id}>

<td>{student.Name}</td>
<td>{student.Age}</td>
<td>{student.Course}</td>
<td>{student.Batch}</td>
<td><Link to="/Update">Edit</Link></td>

</tr>


      ))}
  
  
  </tbody>
</table>







    </div>
  )
}

export default Student