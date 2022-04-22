import styled from "styled-components"

export const H1=styled.h1`
color:${(props)=>(props.id===true ? "black":"white")}`