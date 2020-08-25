import React, { useState, useEffect } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  MoreVert,
  SearchOutlined,
  InsertEmoticon,
  
} from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic"
import {useParams} from "react-router-dom";

function Chat() {
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("");
  const {roomID} = useParams();

  useEffect(() => {
    setSeed(Math.floor(Math.random()*5000));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(input);
    setInput("");
  }

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last Seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton aria-label="">
            <SearchOutlined />
          </IconButton>
          <IconButton aria-label="">
            <AttachFile />
          </IconButton>
          <IconButton aria-label="">
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        <p className={`chat__message ${true && "chat__reciever"}`}>
          <span className="chat__name">Karan</span>
          Hey Guys
          <span className="chat__timestamp">3.52</span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form action="">
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message" name="" id=""/>
          <button onClick={sendMessage} type="submit">Send a message</button>
        </form>
        <MicIcon/>
      </div>
    </div>
  );
}

export default Chat;
