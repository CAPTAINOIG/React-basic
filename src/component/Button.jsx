import React, { useState } from 'react'
import {AiOutlineArrowDown} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Button = () => {
    const right = () => {
        document.querySelector('#myDown').style.display = 'block'
        document.querySelector('#myRight').style.display = 'none'
        document.querySelector('#myP').style.display = 'block'
    }
    const down = () => {
        document.querySelector('#myRight').style.display = 'block'
        document.querySelector('#myDown').style.display = 'none'
        document.querySelector('#myP').style.display = 'none'
    }

    const right1 =()=>{
        document.querySelector('#myDown1').style.display= 'block'
        document.querySelector('#myRight1').style.display= 'none'
        document.querySelector('#myP1').style.display= 'block'
        document.querySelector('#myP2').style.display= 'block'
        
        
    }
    const down1 =()=>{
        document.querySelector('#myRight1').style.display= 'block'
        document.querySelector('#myDown1').style.display= 'none'
        document.querySelector('#myP1').style.display= 'none'
        document.querySelector('#myP2').style.display= 'none'


    }

    return (
        <>

            <div className='flex my-5 rounded-xl'>
                <span className='flex'>
                    <span id='myDown'  style={{display:'none'}} onClick={down}><AiOutlineArrowDown /></span>
                    <span id='myRight' onClick={right} className=' my-1 mx-1'><AiOutlineArrowRight /></span>
                </span>
                <div>
                    <p>Is my mesaage really anonymous as a sender?</p>
                    <p id='myP'  style={{display:'none'}}>- Yeah Absolutely!!. No one, including the receiver of your message would find out who you are.</p>
                </div>
            </div>


            <div className='flex my-5 rounded-xl'>
                <span className='flex'>
                    <span id='myDown1'  style={{display:'none'}} onClick={down1}><AiOutlineArrowDown /></span>
                    <span id='myRight1' onClick={right1} className=' my-1 mx-1'><AiOutlineArrowRight /></span>
                </span>
                <div>
                    <p>Is my mesaage really anonymous as a sender?</p>
                    <p id='myP1'  style={{display:'none'}}>- Yeah Absolutely!!. No one, including the receiver of your message would find out who you are.</p>
                     <h1 id='myP2' style={{display: 'none'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, accusamus. Nesciunt minima voluptatem repellendus quas eius at magni, est saepe eligendi amet, id eum deserunt sit dicta fugit necessitatibus. Facere tempora voluptatum ratione eveniet consequuntur molestias? Ipsum, sunt excepturi nemo et voluptatum placeat, rem iure molestias non in maiores vel, facilis inventore neque quam optio harum ut expedita alias dolor magni exercitationem voluptatibus! Porro debitis sunt consequuntur, similique ut voluptas necessitatibus velit. Hic amet voluptatibus modi sunt exercitationem placeat, similique cum, nisi voluptatem, asperiores soluta nostrum fugiat officia itaque ullam vitae dignissimos quibusdam culpa? Maxime doloribus praesentium quasi cupiditate ea. </h1>
                </div>
            </div>
        </>
    )
}

export default Button