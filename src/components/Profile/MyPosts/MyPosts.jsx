import React from 'react';
import s from './MyPosts.module.css';
import Post1 from './Post/Post1';

const MyPosts = (props) => {
    let postsElements = 
        props.posts.map( p => <Post1 message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost('well');
    }
    return (
        <div className={s.postsBlock}>
           <h3> My posts</h3>
            <div>
               <div>
                  <textarea ref={newPostElement}></textarea>
               </div>
               <div>
                   <button onClick={addPost}>Add post</button>
               </div>
            </div>
        <div className={s.posts}>
           {postsElements}
        </div>
    </div>
    );
}

export default MyPosts;

