import React, { useEffect, useState } from 'react'
import Footer from "../../components/Footer";
import Head from "next/head";
import NavBar from "../../components/NavBar";
import { parseCookies, setCookie } from 'nookies'


const Post = ({ blogpost }) => {
  if (!blogpost) return <div>404</div>
  
  const { attributes: {title, image, source, ingredients, tools, instructions}} = blogpost;
  const ingr = {linesFor: title, ingredientLines: [], instructionLines: [], toolLines: []};
  
  const [guideLines, setGuideLines] = useState(ingr)
  
  useEffect(() => {
    const cookies = parseCookies({});
    
    try {
      const ingred = JSON.parse(cookies[title]);
      setGuideLines(ingred);
    }
    catch(err) {
      setGuideLines({...guideLines, ingredientLines: new Array(ingredients.length).fill(false)});
      setGuideLines({...guideLines, instructionLines: new Array(instructions.length).fill(false)});
      setGuideLines({...guideLines, toolLines: new Array(tools.length).fill(false)});
    }
  }, []);
  
  const toggleLine = (type, title, index) => {
    // Copy state to mutate it
    const newState = {...guideLines};
    newState[type][index] = !newState[type][index];
    
    // Set cookie
    setCookie({}, title, JSON.stringify(newState), {
      maxAge: 24 * 60 * 60,
      path: `/cookbook`,
    });
  
    setGuideLines(newState)
  }
  
  return (
    <div className={"test"}>
      <Head>
        <title>jere.pro - {title}</title>
        <meta property="og:title" content={"jere.pro - CookBook - " + title} />
        <meta name="description" content={`Read how to cook "${title}" on jere.pro`} />
        <meta property="og:description" content={`Read how to cook "${title}" on jere.pro`} />
      </Head>
      <NavBar url={"/cookbook"}/>
      <div className={"blogPost"}>
        <div className={"container animated"}>
          <img
            className={"hero cookBookHero"}
            src={require("../../public/img/cookbook/" + image + ".jpg?inline?resize&size=100")}
            height="100%"
          />
          <h1>{title}</h1>
          <p className={"publishDate"}>{source}</p>
          <div className={"row"}>
            <div className={"col-md-6"}>
              <h2 className={"cookBookTitle"}>Ingredients</h2>
              <ul className={"cookBookList"}>
                {ingredients.map((ingredient, index) =>
                   <li
                     key={ingredient+index}
                     className={guideLines.ingredientLines[index] && guideLines.linesFor === title ? "line-through" : undefined}
                     onClick={() => toggleLine("ingredientLines", title, index)}
                   >
                     {ingredient}
                   </li>
                )}
              </ul>
            </div>
            <div className={"col-md-6"}>
              <h2 className={"cookBookTitle"}>Tools</h2>
              <ul className={"cookBookList"}>
                {tools.map((tool, index) =>
                   <li
                     key={tool+index}
                     className={guideLines.toolLines[index] && guideLines.linesFor === title ? "line-through" : undefined}
                     onClick={() => toggleLine("toolLines", title, index)}
                   >
                     {tool}
                   </li>
                )}
              </ul>
            </div>
          </div>
          <h2 className={"cookBookTitle"}>Instructions</h2>
          <ol className={"cookBookList"}>
            {instructions.map((instruction, index) =>
              <li
                key={instruction+index}
                className={guideLines.instructionLines[index] && guideLines.linesFor === title ? "line-through" : undefined}
                onClick={() => toggleLine("instructionLines", title, index)}
              >
                {instruction}
              </li>
            )}
          </ol>
          
        </div>
      </div>
      <Footer url={"/cookbook"}/>
    </div>
  )
}

Post.getInitialProps = async ({ query }) => {
  const { slug } = query
  const blogpost = await import(`../../content/cookbook/${slug}.md`).catch(
    () => null
  )
  return { blogpost }
}

export default Post
