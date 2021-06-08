import Comment from './Comment';

function CommentComponent(){
    const comment = {
        date: new Date(),
        text: 'I hope you enjoy learning React!',
        author: {
          name: 'Hello Kitty',
          avatarUrl: 'https://placekitten.com/g/64/64',
        },
      };
      
    return(
        <Comment 
            date={comment.date}
            text={comment.text}
            author={comment.author}
        />
    );
}

export default CommentComponent;