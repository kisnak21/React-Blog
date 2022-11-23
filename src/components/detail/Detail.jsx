import React from 'react';
import './detail.css';

export default function Detail() {
  return (
    <div className="detailpost">
      <div className="detailpostWrapper">
        <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="detailpostImg" />
        <h1 className="detailpostTitle">
          Lorem ipsum dolor sit amet.
          <div className="detailpostEdit">
            <i className="detailpostIcon fa-solid fa-pen-to-square" />
            <i className="detailpostIcon fa-solid fa-trash" />
          </div>
        </h1>
        <div className="detailpostInfo">
          <span className="detailpostAuthor">
            Author:
            {' '}
            <b>Kisnak</b>
          </span>
          <span className="detailpostDate">1 hour ago</span>
        </div>
        <p className="detailpostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident incidunt repudiandae exercitationem unde possimus? Repellat repellendus quas eligendi? Iusto in nesciunt, veniam iure, debitis nemo optio autem sunt provident maiores incidunt odio quo repellendus eum unde eligendi vitae. Quam, deserunt veritatis possimus incidunt soluta a excepturi pariatur quae et laboriosam beatae, sapiente nisi recusandae culpa accusamus ab saepe animi voluptatibus voluptatum sed. Illum, recusandae ipsum nam distinctio id laboriosam? Magnam, assumenda hic corporis esse voluptate facere dignissimos provident voluptates blanditiis amet necessitatibus ex nobis illo, accusantium ab obcaecati consectetur animi pariatur, ad incidunt commodi! Eveniet quibusdam harum ad iusto expedita? Unde aliquid distinctio magni dolores. Porro quisquam odio facere optio beatae maxime autem quidem, deserunt accusantium, blanditiis veritatis aliquam eveniet placeat aspernatur. Laudantium quos nihil ex enim eaque repellat quas, corporis perferendis maiores ipsa inventore, dolore est, ad aut! Nisi sapiente, quod amet quisquam eius provident nam voluptatum impedit iste?</p>
      </div>
    </div>
  );
}
