import BlogItem from "@/components/blogItem/BlogItem";
import Underline from "@/components/svgComps/Underline";
import "./blog.scss"

type Props = {};

export const metadata = {
  title: "Blog | Sudhakar's Insights",
  description: "Articles, insights, and tutorials on backend development, system design, microservices, and competitive programming.",
};

export default function page({}: Props) {
  return (
    <div className="blog">
      <h1>Blog</h1>
      <Underline />
      <div className="blogItemWrapper">
        <BlogItem/>
        <BlogItem/>
        <BlogItem/>
      </div>
    </div>
  );
}
