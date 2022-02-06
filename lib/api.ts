import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = (path: string) => join(process.cwd(), "content/" + path);

export function getPostSlugs(path: string) {
  return fs.readdirSync(postsDirectory(path));
}

export function getPostBySlug(
  slug: string,
  fields: string[] = [],
  path: string
) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory(path), `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(
  fields: string[] = [],
  path: string,
  category?: string
) {
  const slugs = getPostSlugs(path);
  const posts = slugs.map((slug) => getPostBySlug(slug, fields, path));

  // if a category parameter was passed, filter posts by that category
  return category
    ? posts.filter((post) => post.categories.includes(category))
    : posts;
}
