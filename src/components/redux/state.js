let state = {
    profilepage: {
        posts: [
            {id: 1, message: 'Hello World', likesCount: 12}, 
            {id: 2, message: 'Hello World', likesCount: 12}, 
            {id: 3, message: 'Hello World', likesCount: 12}, 
            {id: 4, message: 'Hello World', likesCount: 12}, 
            {id: 5, message: 'Hello World', likesCount: 12}, 
            {id: 6, message: 'Hello World', likesCount: 12}
        ],
        dialogs: [
            {id: 1, name: 'A'}, 
            {id: 2, name: 'B'}, 
            {id: 3, name: 'C'}, 
            {id: 4, name: 'D'}, 
            {id: 5, name: 'E'}, 
            {id: 6, name: 'F'}
        ],
      
    },
    messagesPage: {
        messages: [
            {id: 1, message: 'Hi'}, 
            {id: 2, message: 'Hi'}, 
            {id: 3, message: 'Hi'}, 
            {id: 4, message: 'Hi'}, 
            {id: 5, message: 'Hi'}, 
            {id: 6, message: 'Hi'}
        ]
    }
}
export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.posts.push(newPost);
}



export default state;