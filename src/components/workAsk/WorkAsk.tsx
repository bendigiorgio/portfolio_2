import React from 'react'
import {useEffect, useCallback} from 'react'
import './WorkAsk.scss'
import { gsap } from "gsap";
import AskLine from "../askLine/AskLine"

export default function WorkAsk() {

  return (
    <div className='wrapper ask-section'>
        <div className='ask-line-container'>
            <AskLine />
        </div>
        <div className='heading ask-header'>
            <h1 id='title'>Ask</h1>
        </div>
        
    </div>
  )
}