import React from "react"
import * as S from "./style"
import { FaRegMoon } from "react-icons/fa";




const Header = ()=>{
   return(
      <S.Header>
            <div className="logo">
               <h1>Where in the world?</h1>
            </div>
            <div className="trade-theme">
               <FaRegMoon/>
               <p>Dark Mode</p>
            </div>
      </S.Header>
   )
}
export default Header 