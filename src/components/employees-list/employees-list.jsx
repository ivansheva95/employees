import { EmployeesListItem } from "../employees-list-item/employees-list-item";

import styled from "styled-components";

const EmployeesListWrapper = styled.ul`
  margin-top: 30px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 15px 15px 30px rgba(0,0,0,.2);
  color: #808080;
`

export const EmployeesList = ({visibalData, deleteEmployee, handleEmployeeProp}) => {

  const elements = visibalData.map(element => {
    const {id, ...elementProps} = element

    return <EmployeesListItem 
      key={id} 
      {...elementProps} 
      deleteEmployee={() => deleteEmployee(id)} 
      handleEmployeeProp={event => handleEmployeeProp(id, event.currentTarget.getAttribute('data-handle'))}/>
  })

  return (
    <EmployeesListWrapper>
      {elements}
    </EmployeesListWrapper>
  )
}