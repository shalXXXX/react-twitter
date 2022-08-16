import React, { useState } from 'react'
import { Avatar, Button } from "@mui/material"
import "./TweetBox.css"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import db from '../../firebase'
import { timeStamp } from 'console'

export const TweetBox = () => {

  const [tweetMessage, setTweetMessage] = useState<string>("")
  const [tweetImage, setTweetImage] = useState<string>("")


  // const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setTweetMessage(e.target.value);
  // }

  const onClicksendTweet = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // firebaseのデータベースを追加する
    e.preventDefault();

    addDoc(collection(db, "posts"), {
      displayName: "sakuren",
      username:"saku_ren8",
      verified: true,
      text:tweetMessage,
      avatar:"../icon.jpg",
      image:tweetImage,
      timestamp: serverTimestamp()
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar src="../icon.jpg"/>
          <input value={tweetMessage} placeholder="いまどうしてる？" type="text" onChange={(e) => setTweetMessage(e.target.value)}></input>
        </div>
        <input value={tweetImage} className="tweetBox_imageInput" placeholder="Input images URL" type="text" 
        onChange={(e) => setTweetImage(e.target.value)}></input>
        <Button className="tweetBox_tweetButton" type="submit" onClick={onClicksendTweet}>ツイートする</Button>
      </form>
    </div>
  )
}
