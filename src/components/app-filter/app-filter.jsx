import styled from "styled-components"

const AppFilterWrapper = styled.div`
  margin-top: 20px;
  button  {
    padding: 10px;

    cursor: pointer;

    color: #808080;
    border: solid 1px white;
    border-left: none;
    background: white;

    transition: 0.3s all;
  }
  button.active {
    color: white;
    background: linear-gradient(to bottom right ,orangered, orange);
    outline: 3px solid silver;
  }
  button:first-child {
    border-left: solid 1px white;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  button:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`

export const AppFilter = ({filter, setFilter}) => {
  const buttonsData = [
    {name: 'all', lable: 'Все сотрудники'},
    {name: 'rise', lable: 'На повишение'},
    {name: 'moreThen1000', lable: 'З/П больше 1000$'}
  ]

  const buttons = buttonsData.map(button => {
    const {name, lable} = button

    const active = filter === name
    const clazz = active ? 'active' : null

    return (
      <button 
        className={clazz}
        key={name} 
        type="button"
        onClick={() => setFilter(name)}>{lable}</button>
    )
  })

  return (
    <AppFilterWrapper>
      {buttons}
    </AppFilterWrapper>
  )
}