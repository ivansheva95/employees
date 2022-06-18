import { useState } from 'react'

import styled from 'styled-components'

const EmployeesAddFormWrapper = styled.div`
  margin-top: 30px;
  padding: 25px;
  background: linear-gradient(to right ,orangered, orange);
  border-radius: 5px;
  box-shadow: 15px 15px 30px rgba(0,0,0,.2);
  color: white;
  form {
    margin-top: 20px;
    input {
      width: 350px;
      margin-right: 20px;
      padding: 10px;

      color: #808080;
      border: solid 1px silver;
      border-radius: 5px;
    }
  }
  button  {
    padding: 10px;
    outline: 3px solid silver;

    cursor: pointer;

    color: #808080; 
    border: solid 1px white;
    border-radius: 5px;
    background: white;
  }
`

export const EmployeesAddForm = ({addEmployee}) => {
  let [userInput, setUserInput] = useState({name: '', salary: ''})

  const handleSubmit = event => {
    event.preventDefault()

    if(userInput.name.length > 3 && userInput.salary) {
      addEmployee(userInput.name, userInput.salary)
      setUserInput({name: '', salary: ''})
    }
}

  const handleChange = event => {
    setUserInput({
      ...userInput,
      [event.target.name]: event.target.value
    })
  }

  return (
    <EmployeesAddFormWrapper>
      <h3>Добавьте нового сотрудника</h3>
      <form onSubmit={handleSubmit}>
        <input value={userInput.name} onChange={handleChange} name='name' type="text" placeholder='Как его зовут?'/>
        <input value={userInput.salary} onChange={handleChange} name='salary' type="number" placeholder='З/П в $?'/>
        <button type='submit'>Добавить</button>
      </form>
    </EmployeesAddFormWrapper>
  )
}