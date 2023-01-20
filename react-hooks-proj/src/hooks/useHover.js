import React from 'react'
export default function useHover(){
    const [hovering,sethovering]=React.useState(false)
    const onMouseOver=()=>sethovering(true)
    const onMouseOut=()=>sethovering(false)
    return [hovering,{onMouseOver,onMouseOut}] 
}