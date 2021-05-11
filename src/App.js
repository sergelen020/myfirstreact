import React, { useState } from 'react';
import './scss/instagram.scss';
import Post from "./post.js"
import StoryList from "./storyList.js"
import Header from "./header.js"
import Story from "./story.js"
import StoryAvatar from './storyAvatar';


const App = () => {

    const [isStory, setIsStory] = useState(false);


    const [posts, setPosts] = useState([
        {   
            avatarUrl: "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg",
            username: "seegii",
            imageUrl: "https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340",
            dateTime: new Date(),   
            likes: []
        },
        {
            avatarUrl: "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg",
            username: "hi",
            imageUrl: "https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340",
            dateTime: new Date(),
            likes: []
        }
    ])
    return (
        <div>
            {
                <div>
                    <Header />
                    <StoryList />
                    {
                        posts.map(post => (
                            <Post avatarUrl={ post.avatarUrl } username={ post.username } imageUrl={ post.imageUrl } dateTime={ post.dateTime }/>
                        ))
                    }
                </div>
            } 
            
        </div>
    )
}


export default App;