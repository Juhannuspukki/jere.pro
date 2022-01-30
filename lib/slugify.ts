const Slug = (str: string): string => {
  str = str.replace(/^\s+|\s+$/g, "");
  str = str.toLowerCase();

  str = str
    .replace(/\./g, "")
    .replace(/\//g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

  return str;
};

export default Slug;
