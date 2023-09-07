import BlogIcon from "../svgComps/BlogIcon";
import "./blogItem.scss";

type Props = {};

export default function BlogItem({}: Props) {
  return (
    <div className="blogItem">
      <div className="blogItemImgWrap">
        <img
          src="https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
        />
        <div className="blogItemDate">
          <span>22</span>
          <span>Aug</span>
        </div>
        <div className="blogItemLinkBox">
          <BlogIcon />
          <span>Blogs will be added soon!</span>
        </div>
      </div>
      <div className="blogItemContent">
        {/* <h4>Docker swarm in gcp</h4> */}
        {/* <p>This respresent how the process i learmed about docker swarm.</p> */}
        <h4>Blogs will be added soon!</h4>
      </div>
    </div>
  );
}
