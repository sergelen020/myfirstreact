import React, { useState, useEffect } from 'react'
import "./scss/story.scss"

function Story({images =[
    "https://images.unsplash.com/photo-1620767317854-aa89c01f4dcd?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1620761947706-aeb5eb3a55d7?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1602574938770-6ea401dc3236?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
]}) {
    const [sid, setSid] = useState(0)
    const [percent, setPercent] = useState(0)
    const [pause, setPause] = useState(false)
    const getPercent = (index) => {
        if(index < sid){
            return 100;
        } 
        if(index == sid){
            if(percent == 100) {
                setSid(sid + 1);
                setPercent(0)
            }
            return percent;
        }
        return 0;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if(pause) return
            setPercent((percent) => {
                if(percent > 100){
                    setPause(true)
                }
                return percent + 1
            })
        }, 30)
        return () => {
            clearInterval(interval)
        }
    }, [pause])

    return (
        <div className="story-container flex-center">
            <div className="story-body" style={{ backgroundImage: `url(${images[sid]})`}}>
                <div className="progress-container">
                    {
                        images.map((item,index) => (<div className="progress" style={{ width: `$(100 / images.length)%` }}>
                            <div className="progress-bar" style={{ width: `${ getPercent(index) }%` }}>

                            </div>
                        </div>))
                    }
                </div>
                <ul class="collection">
                    <li class="collection-item avatar valign-wrapper">
                        <img src="https://images.unsplash.com/photo-1620770962362-1fd4be7d6f60?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=356&q=80" alt="" class="circle"/>
                        <span class="title white-text font-bold">seegii</span>
                        <span className="title white-text opacity margin-left font-bold">12h</span>
                        <a href="#!" class="secondary-content white-text valign-wrapper">
                            <svg aria-label="Play" className="" fill="#ffffff" height="16" viewBox="0 0 48 48" width="16"><path d="M9.6 46.5c-1 0-2-.3-2.9-.8-1.8-1.1-2.9-2.9-2.9-5.1V7.3c0-2.1 1.1-4 2.9-5.1 1.9-1.1 4.1-1.1 5.9 0l30.1 17.6c1.5.9 2.3 2.4 2.3 4.1 0 1.7-.9 3.2-2.3 4.1L12.6 45.7c-.9.5-2 .8-3 .8z"></path></svg>
                            <svg aria-label="Video has no audio." className="margin-left" fill="#ffffff" height="16" viewBox="0 0 48 48" width="16"><path clip-rule="evenodd" d="M42.9 24l4.6 4.6c.6.6.6 1.6 0 2.2l-1.4 1.4c-.6.6-1.6.6-2.2 0l-4.6-4.6-4.6 4.6c-.6.6-1.6.6-2.2 0l-1.4-1.4c-.6-.6-.6-1.6 0-2.2l4.6-4.6-4.6-4.6c-.6-.6-.6-1.6 0-2.2l1.4-1.4c.6-.6 1.6-.6 2.2 0l4.6 4.6 4.6-4.6c.6-.6 1.6-.6 2.2 0l1.4 1.4c.6.6.6 1.6 0 2.2L42.9 24zM24.1 47.6L11.3 34.7H1.6C.7 34.7 0 34 0 33.2V14.8c0-.8.7-1.5 1.5-1.5h9.7L24.1.4c.9-.9 2.5-.3 2.5 1v45.1c0 1.3-1.6 2-2.5 1.1z" fill-rule="evenodd"></path></svg>
                            <i className="material-icons margin-left">more_horiz</i>
                        </a>
                    </li>
                </ul>
            </div>
            <img className="insta-logo" src="https://facebookbrand.com/wp-content/uploads/2019/10/Copy-of-instagram.svg"/>
            <svg aria-label="Close" className="close-logo " fill="#ffffff" height="24" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z" fill-rule="evenodd"></path></svg>
        </div>
    )
}

export default Story
