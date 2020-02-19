import React, {useState} from 'react';


const AddCommentForm = ({articleName, setArticleInfo}) => {

    const [username, setUserName] = useState('');

    const [commentText, setCommentText] = useState('');

    const AddComment = async () => {
        
        if(commentText !== '' && username !== ''){
            const result = await fetch(`/api/articles/${articleName}/add-comment`, {
                method: 'post',
                body: JSON.stringify({ username, text: commentText }),
                headers: { 'Content-Type': 'application/json' }
            });

            const body = await result.json();

            setArticleInfo(body);
                    setUserName('');
            setCommentText('');
        } else {
            alert("Name and Comments are required.")
        }
    };

    return (
    <div id="add-comment-form">
        <h3>Add a Comment</h3>
        <label>
            Name:
            <input type="text" value={username} onChange={(event) => setUserName(event.target.value)} />
        </label> 
        <label>
            Comments:
            <textarea rows="4" cols="50" value={commentText} onChange={(event) => setCommentText(event.target.value)} />
        </label>
        
        <button type="submit" onClick={() => AddComment()}>Add Comment</button>
    </div>
)};

export default AddCommentForm;

