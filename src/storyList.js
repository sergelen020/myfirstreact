import React, { useState} from 'react';
import "./scss/storyList.scss";
import Story from './story';
import StoryAvatar from './storyAvatar';

function StoryList(props) {
    const stories = [
        {
            avatar: "https://images.unsplash.com/photo-1589111502533-e78e1fae673e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
            name: "boldoo"
        },
        {
            avatar: "https://images.unsplash.com/photo-1620638306111-521756a2522f?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
            name: "hello"
        },
        {
            avatar: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
            name: "world"
        },
        {
            avatar: "https://images.unsplash.com/photo-1589111502533-e78e1fae673e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
            name: "hiiiiiiiiiii"
        },
        {
            avatar: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
            name: "world"
        },
        {
            avatar: "https://images.unsplash.com/photo-1589111502533-e78e1fae673e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
            name: "hiiiiiiiiiii"
        },
        {
            avatar: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
            name: "world"
        },
        {
            avatar: "https://images.unsplash.com/photo-1589111502533-e78e1fae673e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
            name: "hiiiiiiiiiii"
        },
        {
            avatar: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
            name: "world"
        },
    ]
    return(
        <div className="z-depth-1 container">
            <div className="story-list">
                { stories.map(story => (<StoryAvatar {...story}/>))}
            </div>
        </div>
    )
}
    

export default StoryList;