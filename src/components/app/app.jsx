import { AppInfo } from '../app-info/app-info'
import { SearchPanel } from '../search-panel/search-panel'
import { AppFilter } from '../app-filter/app-filter'
import { EmployeesList } from '../employees-list/employees-list'

import styled from "styled-components"
import { EmployeesAddForm } from '../employees-add-form/employees-add-form'
import { useState } from 'react'

const AppWrapper = styled.div`
  margin: 0 auto;
  width: 1000px;
`
const SearchPanelWrapper = styled.div`
  margin-top: 30px;
  padding: 25px;

  color: white;
  background: linear-gradient(to right ,orangered, orange);
  border-radius: 5px;
  box-shadow: 15px 15px 30px rgba(0,0,0,.2);
`

export const App = () => {
  const [data, setData] = useState([
    {id: 1, name: 'Ivan S', salary: 5000, increase: true, rise: true},
    {id: 2, name: 'Artem L', salary: 5000, increase: true, rise: true},
    {id: 3, name: 'Jhon D', salary: 1000, increase: false, rise: false},
    {id: 4, name: 'Mister B', salary: 800, increase: false, rise: false}
  ])
  const [employeeId, setEmployeeId] = useState(5),
      [term, setTerm] = useState(''),
      [filter, setFilter] = useState('all')

  const addEmployee = (name, salary) => {
    const newEmployee = {
      id: employeeId,
      name,
      salary,
      increase: false,
      rise: false
    }

    setEmployeeId(++employeeId)

    setData([...data, newEmployee])
  }
  const deleteEmployee = id => {
    setData([
      ...data.filter(element => element.id !== id)
    ])
  }
  
  const handleEmployeeProp = (id, prop) => {
    setData([
      ...data.map(element => {
        if(element.id === id) {
          return { ...element, [prop]: !element[prop] }
        }  
        return element
      })  
    ])
  }

  const searchEmployees = (data, term) => {
    if(!term) {
      return data
    }
    return data.filter(element => element.name.toLowerCase().includes(term.toLowerCase()))
  }

  const filterEmployees = (data, filter) => {
    switch(filter) {
      case 'rise':
        return data.filter(element => element.rise)
      case 'moreThen1000':
        return data.filter(element => element.salary > 1000)
      default:
        return data
    }
  }

  const visibalData = searchEmployees(filterEmployees(data, filter), term)
  return (
    <AppWrapper>
      <AppInfo allEmployees={data.length} riseEmployees={data.filter(element => element.increase).length}/>

      <SearchPanelWrapper>
        <SearchPanel term={term} setTerm={setTerm}/>
        <AppFilter filter={filter} setFilter={setFilter}/>
      </SearchPanelWrapper>

      <EmployeesList visibalData={visibalData} deleteEmployee={deleteEmployee} handleEmployeeProp={handleEmployeeProp}/>

      <EmployeesAddForm addEmployee={addEmployee}/>
    </AppWrapper>
  )
}