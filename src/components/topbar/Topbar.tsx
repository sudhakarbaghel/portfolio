import React from "react";
import  "./topbar.scss";
import Image from "next/image";
import Pic from "../../../public/pass.jpeg";
import Linkedin from "../svgComps/Linkedin";
import Github from "../svgComps/Github";
import Twitter from "../svgComps/Twitter";
import CodeChef from "../svgComps/CodeChef";
import Link from "next/link";
type Props = {};

export default function Topbar({}: Props) {
  return (
    <div className="topbar">
      <div className="topbarLeft">
        <div className="imgWrap">
          <Image
            src={Pic}
            width={151}
            height={151}
            alt="Picture of the author"
          />
        </div>
        <div className="topbarLeftRightItem">
          <h4>
            Sudhakar <span>Singh</span>
          </h4>
          <div className="roles">WebDev | 4⭐codechef</div>
          <div className="icons">
            <Link href="https://www.linkedin.com/in/sudhakar-singh-99b8441b2/">
              <Linkedin />
            </Link>
            <Link href="https://github.com/sudhakarbaghel">
              <Github />
            </Link>
            <Link href="https://twitter.com/SUDHAKARBAGHEL2">
              <Twitter />
            </Link>
            <Link href="https://www.codechef.com/users/sudhakar_1112">
              <CodeChef />
            </Link>
          </div>
        </div>
      </div>
      <div className="verticalRule"></div>
      <div className="topbarRight">
        <div>
          <span>EMAIL</span>
          <p>sudhakarsinghbaghel123321@gmail.com</p>
        </div>
        <div>
          <span>CV</span>
          <p>Download</p>
        </div>
        <div>
          <span>Location</span>
          <p>Bhopal,IN</p>
        </div>
        <div>
          <span>Status</span>
          <p>🚀</p>
        </div>
      </div>
    </div>
  );
}
