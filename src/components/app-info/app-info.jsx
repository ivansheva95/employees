import styled from "styled-components";

const AppInfoWrapper =  styled.div`
  margin-top: 50px;
  padding: 25px;

  line-height: 1.5;

  color: white;
  background: linear-gradient(to right ,orangered, orange);
  border-radius: 5px;
  box-shadow: 15px 15px 30px rgba(0,0,0,.2);
`

export const AppInfo = ({allEmployees, riseEmployees}) => {
  return (
    <AppInfoWrapper>
      <h1>Учет сотрудников в компании N</h1>
      <h2>Общее число сотрудников: {allEmployees}</h2>
      <h2>Премию получат: {riseEmployees}</h2>
    </AppInfoWrapper>
  )
}