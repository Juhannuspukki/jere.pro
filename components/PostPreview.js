import React from "react";
import Link from "next/link";
import { Img } from "react-optimized-image";

const PostPreview = (props) => {
  const { slug, image, title, source, ingredients } = props;
  return (
    <Link as={`/cookbook/${slug}`} href="/cookbook/[slug]">
      <a className={"chameleon highLightOnHover"}>
        <div className={"row blogLink"}>
          <div className={`col-sm-6 col-md-8 blogPreviewImageContainer`}>
            <Img
              className={"blogPreviewImage"}
              src={require(`../public/img/cookbook/${image}.jpg`)}
              alt={props.image}
              webp
            />
          </div>
          <div className={`col-sm-6 col-md-4 blogPreviewDescriptionContainer`}>
            <div>
              <h2 className={"blogPreviewTitle"}>{title}</h2>
              <p className={"blogPreviewDate"}>{source}</p>
              <ul>
                {ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
              <p className={"blogPreviewCTA"}>Read more →</p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default PostPreview;
