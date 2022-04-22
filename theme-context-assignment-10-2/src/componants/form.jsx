import styled from "styled-components"
export const Form=styled.form`
  background-color:${(props)=>(props.id=="Light" ? "white":"black")};
  width:500px;
  margin:auto;


`
export const Input=styled.input`
  background-color:${(props)=>(props.id==="Light" ? "black":"white")};
  color:${(props)=>(props.id==="Light"? "red":"black")}
`
