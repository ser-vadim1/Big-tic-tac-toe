import {useRef} from 'react'

export const useRenderCount = () =>{
   const countRef = useRef(0)
   console.log('render count', countRef.current++);
   
}