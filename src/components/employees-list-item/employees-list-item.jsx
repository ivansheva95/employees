import styled, { css } from "styled-components";

const EmployeesListItemWrapper =  styled.li`
  padding: 15px 20px;
  border-bottom: solid 1px #808080;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:last-child {
    border-bottom: none;
  }
  span {
    line-height: 1.5;
    font-size: 20px;
    min-width: 550px;

    cursor: pointer;
  }
  input {
    line-height: 1.5;
    font-size: 20px;
    text-align: center;
    border: none;
    color: #808080;
  }
  button {
    width: 35px;
    height: 35px;
    margin: 3px;
    font-size: 17px;
    border: none;

    cursor: pointer;
  }
  & .fa-cookie {
    color: orange;
  }
  & .fa-trash {
    color: orangered;
  }
  & .fa-star {
    width: 35px;
    height: 35px;
    font-size: 16px;
    line-height: 1.5;
    text-align: center;
    color: gold;
    cursor: pointer;

    transition: 0.3s all;
    transform: translateX(30px);
    opacity: 0;
  }
  
  ${props => props.rise && css`
    & .fa-star {
      opacity: 1;
      transform: translateX(0px);
    }
  `}
  ${props => props.increase && css`
    & span,
    & input {
      color: gold;
    }
  `}  
`

export const EmployeesListItem = ({name, salary, increase, rise, deleteEmployee, handleEmployeeProp}) => {
  return (
    <EmployeesListItemWrapper increase={increase} rise={rise}>
      <span data-handle='rise' onClick={handleEmployeeProp}>{name}</span>
      <input type="text" defaultValue={`${salary}$`}/>
      <div>
        <button 
          type="button"
          data-handle='increase'
          onClick={handleEmployeeProp}>
          <i className="fas fa-cookie"></i>
        </button>

        <button 
          type="button"
          onClick={deleteEmployee}>
          <i className="fas fa-trash"></i>
        </button>

        <i className="fas fa-star"></i>
      </div>
    </EmployeesListItemWrapper>
  )
}