

import styled from "styled-components";

const InputWrraper = styled.input`
  width: 100%;
  padding: 10px;

  color: #808080;
  border: solid 1px silver;
  border-radius: 5px;
`

export const SearchPanel = ({term, setTerm}) => {
  return (
    <InputWrraper 
      type="text" 
      placeholder="Найти сотрудника"
      value={term}
      onChange={event => setTerm(event.target.value) }/>
  )
}