import React from 'react'
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Footer from "../components/Footer";
import Head from "next/head";
import NavBar from "../components/NavBar";
import { parseCookies, setCookie } from 'nookies'

class BlogPost extends React.Component {
  static async getInitialProps({query}) {
    const post = require(`../content/cookbook/${query.link}.md`);
    const document = matter(post.default);

    return {
      ...document,
    };
  }

  constructor(props) {
    super(props);
    const { data: {title, ingredients, tools, instructions}} = props;

    const cookies = parseCookies({});
    let ingr = {linesFor: title, ingredientLines: [], instructionLines: [], toolLines: []};

    try {
      ingr = JSON.parse(cookies[title]);
    }
    catch(err) {
      ingr.ingredientLines = new Array(ingredients.length).fill(false);
      ingr.instructionLines = new Array(instructions.length).fill(false);
      ingr.toolLines = new Array(tools.length).fill(false);
    }

    this.state = ingr;
  }

  toggleLine (type, title, index) {
    // Copy state to mutate it
    const newState = {...this.state};
    newState[type][index] = !newState[type][index];

    // Set cookie
    setCookie({}, title, JSON.stringify(newState), {
      maxAge: 24 * 60 * 60,
      path: `/cookbook`,
    });

    this.setState(
      newState
    )
  }

  render() {
    const { data: {title, image, source, ingredients, tools, instructions}} = this.props;
    const { linesFor, ingredientLines, toolLines, instructionLines} = this.state;
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
            <img className={"hero"} src={require("../static/img/cookbook/" + image + ".jpg?inline?resize&size=100")} height="100%"/>
            <h1>{title}</h1>
            <p className={"publishDate"}>{source}</p>
            <div className={"row"}>
              <div className={"col-md-6"}>
                <h2 className={"cookBookTitle"}>Ingredients</h2>
                <ul className={"cookBookList"}>
                  {ingredients.map((ingredient, index) =>
                    <li
                      key={ingredient+index}
                      className={ingredientLines[index] && linesFor === title ? "line-through" : undefined}
                      onClick={() => this.toggleLine("ingredientLines", title, index)}
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
                      className={toolLines[index] && linesFor === title ? "line-through" : undefined}
                      onClick={() => this.toggleLine("toolLines", title, index)}
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
                  className={instructionLines[index] && linesFor === title ? "line-through" : undefined}
                  onClick={() => this.toggleLine("instructionLines", title, index)}
                >
                  {instruction}
                </li>
              )}
            </ol>
            <ReactMarkdown source={this.props.content} />
          </div>
        </div>
        <Footer url={"/cookbook"}/>
      </div>
    )
  }
}

export default BlogPost
