import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import { SidebarOption } from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from "@mui/material"
import "./Sidebar.css"
import { SidebarUser } from './SidebarUser';

function Sidebar() {
  return (
    <div className="sidebar">
      {/* ツイッターアイコン */}
      <TwitterIcon className="sidebar_twitterIcon" />

      {/* SidebarOption */}
      <SidebarOption text="ホーム" Icon={HomeIcon} />
      <SidebarOption text="話題を検索" Icon={SearchIcon} />
      <SidebarOption text="通知" Icon={NotificationsIcon} />
      <SidebarOption text="メッセージ" Icon={MailOutlineIcon} />
      <SidebarOption text="ブックマーク" Icon={BookmarkIcon} />
      <SidebarOption text="リスト" Icon={ListAltIcon} />
      <SidebarOption text="プロフィール" Icon={PermIdentityIcon} />
      <SidebarOption text="もっとみる" Icon={MoreHorizIcon} />
      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}

      {/* ツイートボタン */}
      <Button variant="outlined" className="sidebar_tweet" fullWidth>ツイートする</Button>

      {/* ユーザ */}
      <div className="sidebar_user">
        <SidebarUser />
      </div>

    </div>
  )
}

export default Sidebar