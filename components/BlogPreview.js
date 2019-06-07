import Link from 'next/link'
import React from 'react'


const BlogPreview = (props) => (
  <Link prefetch as={`/blog/${props.slug}`} href={`/blogpost?link=${props.slug}`} key={props.slug}>
    <div className={"row blogLink"}>
      <div className={"col-sm-4 blogPreviewImageContainer"}>
        <img className={"blogPreviewImage"} src={require("../static/img/blog/" + props.data.thumbnail + ".jpg")}/>
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

export default BlogPreview;
