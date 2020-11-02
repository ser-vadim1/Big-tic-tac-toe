import React, { useState } from "react";
import {Sq, P} from "./styledSquare"
import {useRenderCount} from "../hooks/useRenderCount"

const Square  = React.memo(
   ({value, hand, isFirst}) =>{
      useRenderCount()
      
         return(
            <>
         <Sq onClick={hand} isFirst={isFirst} ><P>{value}</P></Sq>
            </>
         )
      }
      
) 
export default Square