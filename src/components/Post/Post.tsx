import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpAltOutlined,
  ThumbUpRounded,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import InputOption from "../InputOption/InputOption";
import "./Post.css";

export type PostType = {
  name: string;
  description: string;
  message: string;
  photoUrl?: string;
};

function Post({ name, description, message, photoUrl }: PostType) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlined} title="Like" />
        <InputOption Icon={ChatOutlined} title="Comment" />
        <InputOption Icon={ShareOutlined} title="Share" />
        <InputOption Icon={SendOutlined} title="Send" />
      </div>
    </div>
  );
}

export default Post;
