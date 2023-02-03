import React from 'react'
import './components/style.css'

export const Loading = () => {
    return (
        <div style={{marginTop:'15%'}}>

            <div class="loading-bar">
                <div class="load-section">
                    <div class="circle">
                        <div class="dot"></div>
                    </div>
                    <div class="circle">
                        <div class="dot"></div>
                    </div>
                    <div class="circle">
                        <div class="dot"></div>
                    </div>
                    <div class="circle">
                        <div class="dot"></div>
                    </div>
                    <div class="circle">
                        <div class="dot"></div>
                    </div>
                    <div class="circle">
                        <div class="dot"></div>
                    </div>
                    <div class="loading-text">Loading...</div>
                </div>
            </div>


        </div>
    )
}
