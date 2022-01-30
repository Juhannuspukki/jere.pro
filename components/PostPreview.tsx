import React from "react";
import Link from "next/link";
import Image from "next/image";

interface PreviewProps {
  title: string;
  image: string;
  source: string;
  ingredients: string[];
  slug: string;
}

const PostPreview: React.FC<PreviewProps> = (props) => {
  const { slug, image, title, source, ingredients } = props;

  const Thumbnail = require(`../public/img/cookbook/${image}.jpg`);

  return (
    <Link as={`/cookbook/${slug}`} href="/cookbook/[slug]">
      <a className={"chameleon highLightOnHover"}>
        <div className={"row blogLink"}>
          <div className={`col-sm-6 col-md-8 blogPreviewImageContainer`}>
            <Image
              className={"blogPreviewImage"}
              src={Thumbnail}
              objectFit={"cover"}
              layout={"fill"}
              alt={props.image}
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
