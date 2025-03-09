import React from 'react'
import './styles.css'
import StartQuizButton from '../../components/startQuizButton'
import { useMediaQuery } from 'react-responsive'


import { useState,useEffect } from 'react'



export default function HeaderSection({props}) {
    const isDesktop = useMediaQuery({minWidth: 750})

    return (
        <div className='headerSection'>
            <div className='logo'>FanSurvey</div>
            <div><StartQuizButton mobileHeader= {!isDesktop}/></div>
        </div>
    )
}