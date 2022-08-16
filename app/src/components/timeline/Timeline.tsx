import React, { FC, PropsWithChildren, useEffect, useState } from 'react'
import { Post } from './Post'

import "./Timeline.css"
import { TweetBox } from './TweetBox'
import db from '../../firebase'
import { collection, getDocs, query, orderBy, onSnapshot } from "firebase/firestore"


type timelineObject = {
  displayName: string;
  username: string;
  verified: boolean;
  text: string;
  avatar: string;
  image?: string;
}

type Props = {
  props: timelineObject;
  ref: any;
}
export const Timeline = () => {
  const [posts, setPosts] = useState<timelineObject[]>([]);
  

  useEffect(() => {
    // dbからデータを読み込む
    const postData = collection(db, "posts");
    const q = query(postData, orderBy("timestamp", "desc"));
    // getDocs(q).then((querySnapshots) => {
    //   setPosts(querySnapshots.docs.map((doc) => doc.data() as timelineObject));
    // });

      // リアルタイムでデータを取得
      onSnapshot(q, (querySnapShot) => {
        setPosts(querySnapShot.docs.map((doc) => doc.data() as timelineObject));      });
  }, [])

  return (
    <div className="timeline">
      {/* header */}
        <div className="timeline_header">
          <h2>ホーム</h2>
        </div>
      {/* TweetBox */}
        <TweetBox />
      {/* Post */}
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar="../icon.jpg"
            image={post.image}
          />
        ))}
  
    </div>
  )
}

// export default Timeline