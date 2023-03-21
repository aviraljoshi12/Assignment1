import React from 'react'
import './Tweet.css';

function TweetComponent(props) {
    const { username, name, date, message } = props;
  return (
    
         <div className="tweet-container">
      <div className="tweet-header">
        <div className="tweet-avatar"></div>
        <div className="tweet-user-info">
          <span className="tweet-name">{name}</span>
          <span className="tweet-username">@{username}</span>
          <span className="tweet-date">{date}</span>
        </div>
      </div>
      <div className="tweet-message">{message}</div>
    </div>
    
  )
}

export default TweetComponent