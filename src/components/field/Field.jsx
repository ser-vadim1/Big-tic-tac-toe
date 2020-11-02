import React, { useState, memo, useCallback, useEffect } from "react";
import Square from "../square/Square"
import {WrapperField, 
   WrapperSq,
    ModalWindow, 
    H3Modal, 
    StartAgain, 
    TextInsideButton, 
    FixedTheMove, 
    Restart,
    P,
    AddOptionsl,
    MoveBack,
   } from "./styledField"

const Field = () =>{
   // инициализируем State
   const [board, setBoard] = useState(
   new Array(52).fill().map(() => new Array(50).fill(""))
 );
 const [optionsGame, setOprionsGame] = useState({
    isWinner: "",
    isFirst: true,
    index: 0,
    finishGame: false,
    startGame: false,
    history: [],
 })

const _onClick=  (index1, index2)=>{
   const _board = board.slice()

   if(_board[index1][index2-1]  || 
      _board[index1][index2 + 1] ||
      _board[index1+1][index2]   ||       // Проверяем соответствует ли слде. ход установленным правилам
      _board[index1 -1][index2]  ||
      !optionsGame.startGame ){

         if(!_board[index1][index2]){
         _board[index1][index2] = optionsGame.isFirst ? "X" : "O"
         setBoard(_board)
         setOprionsGame({
            ...optionsGame,
            isFirst: !optionsGame.isFirst,    // Если проверка прошла обновляем State
            index: index1,
            startGame: true,
            history: [...optionsGame.history, [index1, index2]]
         })
   }
   }
}

const FuncMoveBack = () =>{
   const history = optionsGame.history.pop()
   const _board = board.slice()
   _board[history[0]][history[1]] = ""
   setBoard(_board)                                    // Вщзращаем ходы обратно
   setOprionsGame({
      ...optionsGame,
      startGame: !optionsGame.startGame,
      isFirst: !optionsGame.isFirst,
   })
}

useEffect(()=>{
   if(optionsGame.startGame){
      if(
         checkWinner(board[optionsGame.index].join(""), setOprionsGame, optionsGame, board) // Следим за  игрой если есть победитель обновляем State
          ){ 
        setOprionsGame({
           ...optionsGame,
           finishGame: true,            
        })
      }
   }
   
 
}, [optionsGame.index])


const  TryAgain = ()=>{             
   setBoard( new Array(52).fill().map(() => new Array(50).fill("")) ) // Обнуляем State 
  setOprionsGame({
     ...optionsGame,
     finishGame: false,
     startGame: false,
     isFirst: true,
  })
}

   return(
      <>
      <AddOptionsl>
      <Restart onClick={TryAgain}><h3>RESTART</h3></Restart>
      <FixedTheMove>
         <P> Now is Move {optionsGame.isFirst ? "X" : "O"} </P>
      </FixedTheMove>
      <MoveBack onClick={FuncMoveBack}><h3>MOVE BACK</h3></MoveBack>
      </AddOptionsl>
 
      <WrapperField>
         {board.map((el1, index1)=>{

            return(
               <WrapperSq key = {index1} hide={index1 == 0 || index1 == 51 ? 1 : 0}  >
                  {el1.map((el2, index2)=>{
                     return(
                     <Square 
                        key= {index2} 
                        hand={()=>_onClick(index1,index2)}
                        value={el1[index2]} 
                        isFirst={el1[index2]}
                       />
                     )
                  })}
               </WrapperSq>
            )
         })}
         <ModalWindow isOpenModal ={optionsGame.finishGame}>
         <H3Modal>Winner is player {optionsGame.isWinner}</H3Modal>
            <StartAgain onClick={TryAgain}><TextInsideButton>Do you wanna try again?</TextInsideButton></StartAgain>
         </ModalWindow>

      </WrapperField>
      </>
   )
}

function checkWinner (str, setState, obj, array){
if(str.includes("XXXXX") || str.includes("OOOOO") ){

str.includes("XXXXX") ? setState(obj.isWinner = "X") : setState(obj.isWinner = "O")   // Функция для проверки победителя
   return true
   }
}


export default Field