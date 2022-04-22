import styled from "styled-components"

export const Body=styled.div`
 background-color:${(props)=>(props.id===true? "white":"black")};
 height:1000px;
 padding:10px
`