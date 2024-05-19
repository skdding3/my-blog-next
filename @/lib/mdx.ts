import { serialize } from "next-mdx-remote/serialize";
import remarkToc from "remark-toc";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeading from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";

export const serializeMdx = (source: string) => {
  return serialize(source, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkToc, remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        rehypeCodeTitles,
        // rehypePrism,
        [
          rehypeAutolinkHeading,
          {
            properties: {
              className: ["anchor"],
            },
          },
        ],
      ],
      format: "mdx",
    },
  });
};
