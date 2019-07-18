import Link from 'next/link'
import { withRouter } from 'next/router'
import React from 'react'

const BlogPreview = (props) => (
  <Link prefetch as={`${props.router.pathname}/${props.slug}`} href={`${props.router.pathname}post?link=${props.slug}`} key={props.slug}>
    <a className={"frontLink"}>
      <div className={"row blogLink"}>
        <div className={"col-sm-6 col-md-4 blogPreviewImageContainer"}>
          <img className={"blogPreviewImage"} src={require(`../static/img${props.router.pathname}/${props.data.image}.jpg?inline?resize&size=100`)} alt={props.data.image}/>
        </div>
        <div className={"col-sm-6 col-md-8 blogPreviewDescriptionContainer"}>
            {props.router.pathname === "/blog"
              ? (
              <div>
                <h2 className={"blogPreviewTitle"}>{props.data.title}</h2>
                <p className={"blogPreviewDate"}>Published on {new Date(props.data.date).toDateString()}, {props.readingTime} min read</p>
                <p>{props.content.replace(/^(.{300}[^\s]*).*/s, "$1")}...</p>
                <p className={"blogPreviewCTA"}>Read more →</p>
              </div>
              )
              : (
                <div>
                  <h2 className={"blogPreviewTitle"}>{props.data.title}</h2>
                  <p className={"blogPreviewDate"}>{props.data.source}</p>
                  <ul>
                  {props.data.ingredients.map(ingredient =>
                    <li key={ingredient}>{ingredient}</li>
                  )}
                  </ul>
                  <p className={"blogPreviewCTA"}>Read more →</p>
                </div>
              )
            }
          </div>
      </div>
    </a>
  </Link>
);

export default withRouter(BlogPreview);
