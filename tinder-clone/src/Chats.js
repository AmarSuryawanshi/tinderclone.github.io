import React from "react";
import Chat from "./Chat";
import "./Chats.css";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Sara"
        message="Hey! how are you?"
        timestamp="35 minutes ago"
        profilePic="https://wallpaperaccess.com/full/1468330.jpg"
      />

      <Chat
        name="Emma"
        message="Whats up ?"
        timestamp="55 minutes ago"
        profilePic="https://r1.ilikewallpaper.net/ipad-air-wallpapers/download/33433/Emma-Watson-Country-Field-Photography-ipad-air-wallpaper-ilikewallpaper_com_1024.jpg"
      />

      <Chat
        name="Kristen"
        message="Hello Amar!"
        timestamp="3 days ago"
        profilePic="https://celebmafia.com/wp-content/uploads/2014/01/kristen-stewart-the-twilight-saga-breaking-dawn-portraits-50-hq-photos_3.jpg"
      />

      <Chat
        name="Elizabeth"
        message="Hii..."
        timestamp="1 week ago"
        profilePic="https://wallpapercrafter.com/desktop/47371-elizabeth-olsen-celebrities-girls-hd-4k.jpg"
      />
    </div>
  );
}

export default Chats;
