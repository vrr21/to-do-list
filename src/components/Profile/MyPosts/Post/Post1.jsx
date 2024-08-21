import React from 'react';
import s from './Post1.module.css';

const Post1 = (props) => {
    return (
       <div className={s.item}>
            <img 
                src="https://cdn.pixabay.com/photo/2021/01/04/10/41/icon-5887126_1280.png" 
                alt="Post 1"
            />
            Post 1
            <div>
                <span>like</span>{props.likesCount}
            </div>           
       </div>
    );
}

export default Post1;

/**import React from 'react';
import s from './Post1.module.css';

const Post1 = (props) => {
    return (
        <div className={s.item}>
            <div>{props.message}</div>
            <div>
                <span>Likes: {props.likesCount}</span>
                <button onClick={props.incrementLikes}>Like</button>
            </div>
        </div>
    )
}

export default Post1;
 */