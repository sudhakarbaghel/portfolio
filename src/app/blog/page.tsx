import BlogItem from "@/components/blogItem/BlogItem";
import Underline from "@/components/svgComps/Underline";
import "./blog.scss"

type Props = {};

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
