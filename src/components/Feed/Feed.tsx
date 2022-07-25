import {
  CalendarViewDay,
  CreateRounded,
  EventRounded,
  ImageRounded,
  SubscriptionsRounded,
} from "@mui/icons-material";
import React, { Key, useState } from "react";
import InputOption from "../InputOption/InputOption";
import Post, { PostType } from "../Post/Post";
import "./Feed.css";

function Feed() {
  const [posts, setPosts] = useState<[PostType]>([
    { name: "the name", description: "description", message: "the message" },
  ]);
  const [description, setDescription] = useState("");
  const handleSendPost = (e: Event) => {
    e.preventDefault();
    console.log(description);
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateRounded />
          <form onSubmit={(e) => console.log(e.target)}>
            <input
              type="text"
              value={description}
              onChange={(e: any) => setDescription(e.target.value)}
              placeholder="write a post..."
            />
            <button type="submit" onClick={(e: any) => handleSendPost(e)}>
              Send
            </button>
          </form>
        </div>

        <div className="feed__inputOptions">
          <InputOption Icon={ImageRounded} title="Photo" color="#70B5F9" />
          <InputOption
            Icon={SubscriptionsRounded}
            title="Video"
            color="#E7A33E"
          />
          <InputOption Icon={EventRounded} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDay}
            title="Write Article"
            color="#7FC158"
          />
        </div>
      </div>

      {posts &&
        posts.length > 0 &&
        posts.map((post: PostType, key: Key) => (
          <Post
            key={key}
            name={post.name}
            description={post.description}
            message={post.message}
          />
        ))}
    </div>
  );
}

export default Feed;
