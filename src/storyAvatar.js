import React from 'react'
import "./scss/storyAvatar.scss";
import StoryList from "./storyList.js"

function StoryAvatar({avatar, name, setIsStory}) {
    return (
        <div  className="story-avatar flex-center flex-col scroll">
            <div className="story-avatar-border flex-center" onClick={() => {setIsStory(true)}}>
                <img src={ avatar } className="avatar-img"/>
            </div>
            <span>{ name.length > 10 ? `${ name.slice(0, 7) }...`: name }</span>
        </div>
    )
}

export default StoryAvatar;
