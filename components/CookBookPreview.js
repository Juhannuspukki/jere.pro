import Link from 'next/link'
import React from 'react'


const CookBookPreview = (props) => (
  <Link prefetch as={`/cookbook/${props.slug}`} href={`/cookbookpost?link=${props.slug}`} key={props.slug}>
    <div className={"row blogLink"}>
      <div className={"col-sm-4 blogPreviewImageContainer"}>
        <img className={"blogPreviewImage"} src={require("../static/img/cookbook/" + props.data.image + ".jpg?resize&size=226?inline")}/>
      </div>
      <div className={"col-sm-8 blogPreviewDescriptionContainer"}>
        <div>
          <h2 className={"blogPreviewTitle"}>{props.data.title}</h2>
          <p className={"blogPreviewDate"}>Published on {new Date(props.data.date).toDateString()}, {props.readingTime} min read</p>
          <p>{props.content.replace(/^(.{300}[^\s]*).*/s, "$1")}...</p>
          <p className={"blogPreviewCTA"}>Read more →</p>
        </div>
      </div>
    </div>
</Link>
);

export default CookBookPreview;
