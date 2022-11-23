import React from 'react';
import './post.css';

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Tech</span>
          <span className="postCat">Programming</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum vero dolore at, commodi reiciendis mollitia sit totam reprehenderit nemo culpa quod eos praesentium architecto quam nam non dicta consequuntur natus. Error labore magni optio, explicabo impedit obcaecati asperiores voluptas est nesciunt quisquam omnis, ullam quas corporis ducimus blanditiis, accusantium totam? Excepturi, impedit unde veritatis, voluptatibus deleniti harum error, sint quibusdam id voluptate mollitia. Sapiente facilis assumenda temporibus, officiis error ipsa quis numquam fugiat optio aliquam ut quam dolor, expedita provident iusto totam recusandae magnam modi necessitatibus alias dolorum vero nam, voluptatibus maxime. Veritatis adipisci nesciunt delectus neque non! Distinctio, expedita.</p>
    </div>
  );
}
