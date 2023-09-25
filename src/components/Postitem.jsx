import React from 'react';

const Postitem = (props) => {
    return (
        <div>
            <div className="post">
        <div className="post__content">
          <strong>{props.number}. {props.post.title}</strong>
          <div>
            {props.post.body}
          </div>
          <div className="post__buttons">
            <button>Delete</button>
          </div>
        </div>
      </div>
        </div>
    )
}

export default Postitem;