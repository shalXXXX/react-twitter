import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';
import "./Widgets.css"


export const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <SearchIcon className="widgets_searchIcon" />
        <input placeholder="キーワード検索" type="text" />
      </div>
      <div className="widgets_widgetContainer">
        <h2>あのね。</h2>
        {/* ライブラリを追加・追記 */}
        <div className="twitter_embed">
          <TwitterTweetEmbed tweetId={"1551444167334973441"} />
        </div>

        <TwitterTimelineEmbed 
          sourceType="profile"
          screenName="gorillaicon"
          options={{height: 400}}
        />
      </div>
    </div>
  )
}

