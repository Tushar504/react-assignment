import styled from 'styled-components';

export const Button=styled.button`
background-color:${(props)=>props.state ?  "black":"red"};

color:white;
font-weight:bold;
padding:10px`