import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        postData: [
            {id:"1", message:"Hi,fksdjgflsdg", likeCounter:"500"},
            {id:"2", message:"fsafsdfsdggs", likeCounter:"500"},
            {id:"3", message:"dsfgsdvvsvdg", likeCounter:"400"},
            {id:"4", message:"fasfavvcxv", likeCounter:"2200"},
            {id:"5", message:"Hvvvvvvvvvvvvvvvvvg", likeCounter:"500"},
            {id:"6", message:"qqqqqqqqqqqqqqqqqqqqqq", likeCounter:"500"},
            {id:"7", message:"rwwwwwwwwwwwwwwwwwfdsfsf", likeCounter:"500"},
        ],
        newPostText: ''
    },
    dialogsPage: {
        messageData: [
            {name:"Vitalii", message:"Hi,fksdjgflsdg"},
            {name:"Danya", message:"Hi,aaaaaaaaaaaaaa"},
            {name:"Rusik", message:"Hi,bbbbbbbbbb"},
            {name:"Zhenya", message:"Hi,sssssssssss"},
            {name:"Ira", message:"Hi,vvvvvvvvvvvvvvv"},

        ],
        dialogData: [
            {id:"1", name:"Vitalii", message:"Hi, it`s me Lionelya Messi"},
            {id:"2", name:"Danya", message:"Hi, it`s me Danya Messi"},
            {id:"3", name:"Rusik", message:"Hi, it`s me Rusik Messi"},
            {id:"4", name:"Zhenya", message:"Hi, it`s me Zhenya Messi"},
            {id:"5", name:"Ira", message:"Hi, it`s me Ira"},
        ],
    }
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCounter: 200
    }
    state.profilePage.postData.push(newPost)
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let addTextValue = (text) => {
    state.profilePage.newPostText = text;
    rerenderEntireTree(state);
}
export default state;