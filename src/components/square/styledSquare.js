import styled from "styled-components";


export const Sq = styled.div`
width: 35px;
height: 20px;
border: 1px solid #4a4747;
display: flex;
justify-content: center;
align-items: center;
background-color: ${({isFirst}) => isFirst === "X" ? "#19b811" : isFirst === "O" ? "#c9d91a" : ""};
cursor: pointer;
-webkit-transition:background-color 1s;
&:hover{
   background-color: grey;
}
`
export const P = styled.p`
font-size: 20px;
`