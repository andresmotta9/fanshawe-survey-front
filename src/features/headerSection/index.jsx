import React from 'react'
import './styles.css'
import PrimaryQuizButton from '../../components/primaryQuizButton'
import { useMediaQuery } from 'react-responsive'


import { useState,useEffect } from 'react'



export default function HeaderSection({props}) {
    const isDesktop = useMediaQuery({minWidth: 750})

    return (
        <div className='headerSection'>
            <div className='logo'>FanSurvey</div>
            <div><PrimaryQuizButton mobileHeader= {!isDesktop} name="start Quiz"/></div>
        </div>
    )
}