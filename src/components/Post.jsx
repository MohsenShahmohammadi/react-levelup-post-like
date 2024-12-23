import React, { useState } from "react";
import "./Post.css";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { FaRegComments } from "react-icons/fa";
import { BsSend } from "react-icons/bs";
import { MdOutlineBookmark } from "react-icons/md";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";

const Post = ({ item }) => {
  const [like, setLike] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const iconLike = like === true ? <FcLike /> : <FcLikePlaceholder />;
  const iconBookmark =
    bookmark === true ? <MdOutlineBookmark /> : <MdOutlineBookmarkBorder />;
  return (
    <>
      <div className="post-container">
        <div className="card">
          <div className="card-header">
            <div className="left-header">
              <img
                className="img-card-header"
                src={require("../assets/" + item.personImage)}
              />
              <div className="card-title">
                <label className="title-name">{item.personName}</label>
                <span className="title-description">{item.title}</span>
              </div>
            </div>
            <div className="right-header">
              <CiMenuKebab/>
            </div>
          </div>
          <div className="card-body">
            <img
              className="image-body"
              src={require("../assets/" + item.postimage)}
            />
            {item.status === "sponsor" && (
              <a className="card-body-link">
                <span className="footer-title">Learn</span>
                <MdOutlineArrowForwardIos />
              </a>
            )}
          </div>
          <div className="card-footer">
            <div className="nav">
              <div className="nav-left">
                <a className="nav-item" onClick={() => setLike(!like)}>
                  {iconLike}
                </a>
                <a className="nav-item">
                  <FaRegComments />
                </a>
                <a className="nav-item">
                  <BsSend />
                </a>
              </div>
              <div className="nav-right">
                <a className="nav-item" onClick={() => setBookmark(!bookmark)}>
                  {iconBookmark}
                </a>
              </div>
            </div>
            <div className="descr">
              <p>{item.comment}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
