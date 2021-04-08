import React from 'react';
import PropTypes from 'prop-types';

PostList.propTypes = {
    posts:PropTypes.array,
};
PostList.defaultProp = {
    posts:[],
};

function PostList(props) {

    const { posts } = props;
    return (
        <div>

        <ul>
            hello
            {posts.map(post => (<li>{post.title}</li>))}
        </ul>
        </div>

    );
}

export default PostList;