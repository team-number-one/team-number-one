import React from 'react';

const Post = () => (
  <div class="post">
    <form>
      <label>
        Post a Squeak:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Post" />
    </form>
  </div>
);

export default Post;
