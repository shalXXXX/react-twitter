import React, { forwardRef } from 'react'
import { Avatar } from "@mui/material"
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutline from "@mui/icons-material/ChatBubbleOutline"
import Repeat from "@mui/icons-material/Repeat"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';
import "./Post.css"

type Props = {
  displayName: string;
  username: string;
  verified: boolean;
  text: string;
  avatar: string;
  image?: any;
}

export const Post = forwardRef(
  ({displayName, username, verified, text, avatar, image}: Props, ref: any) => {
  return (
    <div className="post" ref={ref}>
      <div className="post_avatar">
        <Avatar src={ avatar }/>
      </div>
      <div className="post_body">
        <div className="post_header">
          <div className="post_headeText">
            <h3>
              {displayName}
            <span className="post_headerSpecial">
              <VerifiedUserIcon className="post_badge" />
              @{ username }
            </span>
            </h3>
          </div>
          <div className="post_headerDescription">
            <p>{ text }</p>
          </div>
        </div>
        <img src={ image}></img>
        <div className="post_footer">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishOutlinedIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
  }
  )

