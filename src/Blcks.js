
import { useState } from "react";

import Upper from "./Upper";

import check_avialblty from "./check_avialblty"; 

function Blcks(){
    // I am creating variables with useState
    // Blcks will be like a squares where will be our signs(X|O)
    const [blck1, setBlck1] = useState("");
    const [blck2, setBlck2] = useState("");
    const [blck3, setBlck3] = useState("");
    const [blck4, setBlck4] = useState("");
    const [blck5, setBlck5] = useState("");
    const [blck6, setBlck6] = useState("");
    const [blck7, setBlck7] = useState("");
    const [blck8, setBlck8] = useState("");
    const [blck9, setBlck9] = useState("");

    // one more variable for sign. We will begin with X
    const [sign, setSign] = useState("X");

    // one more variable for title. When X|O will win he will alert it on the top
    const [title, setTitle] = useState("");

    // two variables for signs positions, which we will add after moves 
    const [x_pos, setX_pos] = useState("");
    const [o_pos, setO_pos] = useState("");        

    // last two variables for points, which we will show in a separate place
    let [x_pts, setX_pts] = useState(0);
    let [o_pts, setO_pts] = useState(0);

    // I am creating functions for game
    // function "restart" will restart a game after win or draw
    function restart(){
        setBlck1("")
        setBlck2("")
        setBlck3("")
        setBlck4("")
        setBlck5("")
        setBlck6("")
        setBlck7("")
        setBlck8("")
        setBlck9("")

        setTitle("")
      
        setSign("X");
      
        setX_pos("");
        setO_pos("");
      
      }

     // function "changer" will changer change sign. When sign equal X, function will change sign to O and conversely
     function changer(){
        if(sign === "X")
          setSign("O");
        if(sign === "O") {
          setSign("X");
        }
      } 
      /* 
       function "update_X" will add X positions (for example block 1 have position 1 and function we add it to the variable x_pos) 
       and also function will check X positions for win(for example x contains positions 1243 and he will win, becauese X positions 1243 
       contains positions for win 123)
       after winning title alerts about it, x_pts are plussing and game is restarting(board coming clear);
      */
      function update_X(value){
      
        setX_pos(x_pos + value);
        
        // function "check_avialblty" checks x positions|o positions with winning combinations(like 123(row), 258(column), 159(diagonal))
        /* 
        return on this "ifs" is playing the role of function exit, because could be variant if last move gonna be victory move and 
        without return function will think that happend draw
        */
        // Rows
        if(check_avialblty("123", (x_pos + value))){
          setTitle("X wins")
          setX_pts(x_pts += 1);
          setTimeout(restart, 500);
          return
        }
        if(check_avialblty("456", (x_pos + value))){
          setTitle("X wins")
          setX_pts(x_pts += 1);
          setTimeout(restart, 500);
          return
        }
        if(check_avialblty("789", (x_pos + value))){
          setTitle("X wins")
          setX_pts(x_pts += 1);
          setTimeout(restart, 500);
          return
        }
        // Columns
        if(check_avialblty("147", (x_pos + value))){
          setTitle("X wins")
          setX_pts(x_pts += 1);
          setTimeout(restart, 500);
          return
        }
        if(check_avialblty("258", (x_pos + value))){
          setTitle("X wins")
          setX_pts(x_pts += 1);
          setTimeout(restart, 500);
          return
        }
        if(check_avialblty("369", (x_pos + value))){
          setTitle("X wins")
          setX_pts(x_pts += 1);
          setTimeout(restart, 500);
          return
        }
        // Diagonals
        if(check_avialblty("159", (x_pos + value))){
          setTitle("X wins")
          setX_pts(x_pts += 1);
          setTimeout(restart, 500);
          return
        }
        if(check_avialblty("357", (x_pos + value))){
          setTitle("X wins")
          setX_pts(x_pts += 1);
          setTimeout(restart, 500);
          return
        }
        /* 
          one more "if" for draw, which will happend if X positions + O positions will equal 123456789. It will mean that all positions 
          are occupied and X positons and O positions aren`t containing winning combinations
        */
        if((x_pos + value).concat(o_pos).split('').sort().join('') === "123456789"){
          setTitle("Draw");
          setTimeout(restart, 500);
          return
        }
      }
       /* 
        function "update_O" will add O positions 
        and also function will check O positions for win
        after winning title alerts about it, o_pts are plussing and game is restarting(board coming clear);
       */
      function update_O(value){
      
        setO_pos(o_pos + value);
      
        // Rows
        if(check_avialblty("123", (o_pos + value))){
          setTitle("O wins")
          setO_pts(o_pts += 1);
          setTimeout(restart, 500);
          return
        }
        if(check_avialblty("456", (o_pos + value))){
          setTitle("O wins")
          setO_pts(o_pts += 1);
          setTimeout(restart, 500);
          return
        }
        if(check_avialblty("789", (o_pos + value))){
          setTitle("O wins")
          setO_pts(o_pts += 1);
          setTimeout(restart, 500);
          return
        }
        // Columns
        if(check_avialblty("147", (o_pos + value))){
          setTitle("O wins")
          setO_pts(o_pts += 1);
          setTimeout(restart, 500);
          return
        }
        if(check_avialblty("258", (o_pos + value))){
          setTitle("O wins")
          setO_pts(o_pts += 1);
          setTimeout(restart, 500);
          return
        }
        if(check_avialblty("369", (o_pos + value))){
          setTitle("O wins")
          setO_pts(o_pts += 1);
          setTimeout(restart, 500);
          return
        }
        // Diagonals
        if(check_avialblty("159", (o_pos + value))){
          setTitle("O wins")
          setO_pts(o_pts += 1);
          setTimeout(restart, 500);
          return
        }
        if(check_avialblty("357", (o_pos + value))){
          setTitle("O wins")
          setO_pts(o_pts += 1);
          setTimeout(restart, 500);
          return
        }
      }  
      // Component Upper contains title and X|O points and will take title, x_pts, o_pts for title and X|O points
      // Buttons are blocks there we have function which adds X|O, changes them and adds X|O positions
    return (
        <div>
          <Upper title={title} x_pts={x_pts} o_pts={o_pts}/>
         <div className='container'>
          <div className='tic-tac-toe'>
            <button onClick={() => {if(blck1 === ""){setBlck1(sign);changer()}if(sign==="X"){update_X("1")}else{update_O("1")}}}>{blck1}</button>
            <button onClick={() => {if(blck2 === ""){setBlck2(sign);changer()}if(sign==="X"){update_X("2")}else{update_O("2")}}}>{blck2}</button>
            <button onClick={() => {if(blck3 === ""){setBlck3(sign);changer()}if(sign==="X"){update_X("3")}else{update_O("3")}}}>{blck3}</button> 
            <button onClick={() => {if(blck4 === ""){setBlck4(sign);changer()}if(sign==="X"){update_X("4")}else{update_O("4")}}}>{blck4}</button>
            <button onClick={() => {if(blck5 === ""){setBlck5(sign);changer()}if(sign==="X"){update_X("5")}else{update_O("5")}}}>{blck5}</button>
            <button onClick={() => {if(blck6 === ""){setBlck6(sign);changer()}if(sign==="X"){update_X("6")}else{update_O("6")}}}>{blck6}</button>        
            <button onClick={() => {if(blck7 === ""){setBlck7(sign);changer()}if(sign==="X"){update_X("7")}else{update_O("7")}}}>{blck7}</button>
            <button onClick={() => {if(blck8 === ""){setBlck8(sign);changer()}if(sign==="X"){update_X("8")}else{update_O("8")}}}>{blck8}</button>
            <button onClick={() => {if(blck9 === ""){setBlck9(sign);changer()}if(sign==="X"){update_X("9")}else{update_O("9")}}}>{blck9}</button>              
          </div>
         </div>
        </div>
    )
}
// exporting component
export default Blcks