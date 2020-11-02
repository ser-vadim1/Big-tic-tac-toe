import styled from "styled-components";


export const WrapperField = styled.div`

padding-top: 10px;
width: 1900px;
margin: 0 auto;
justify-content: center;
display: flex;
flex-wrap: wrap;
`

export const WrapperSq = styled.div`
display: ${({hide})=>hide ? "none" : "flex"};
`

export const ModalWindow = styled.div`
cursor: pointer;
 visibility: ${({isOpenModal})=> isOpenModal ? "visible" : 'hidden'};
position: fixed;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
top: ${({isOpenModal})=> isOpenModal ? "50%" : '-50%'};
left:50%;
transform: translate(-50%, -50%);
background-color:#ced3db;
z-index: 1;
height: 30%;
width: 30%;
transition: all 0.7s ease-in-out;
`

export const H3Modal = styled.h3`
text-align: center;
`

export const StartAgain = styled.div`
border: 2px solid #900020;
width: 200px;
height: 50px;
`
export const TextInsideButton  = styled.p`
text-align: center;
font-weight: bold;
`;


export const FixedTheMove = styled.div`
position: fixed;
display: flex;
justify-content: center;
align-items: center;
left: 50%;
top:2%;
transform: translate(-50%, -50%);
border: 2px solid red;
background-color: black;
width: 300px;
height: 70px;
`

export const P = styled.p`
color: white;
font-size: 18px;
`

export const Restart = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 200px;
height: 50px;
border: 2px solid #19b811;
border-radius: 5px;
cursor: pointer;
`

export const MoveBack = styled(Restart)`
border: 2px solid #c9d91a;

`
export const AddOptionsl = styled.div`
display: flex;
justify-content: space-around;
`