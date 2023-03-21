import React from 'react'
import TweetComponent from './TweetComponent';
function AppComponent() {
  return (
    
     <div className="app-container">

      <TweetComponent
        username="johndoe"
        name="John Doe"
        date="Mar 20, 2023"
        message="My first tweet!"
      />
      <TweetComponent
        username="janedoe"
        name="Jane Doe"
        date="Mar 20, 2023"
        message="This is my second tweet!"
      />
      <TweetComponent
        username="bobsmith"
        name="Bob Smith"
        date="Mar 20, 2023"
        message="I'm tweeting too!"
      />
    </div>
    
  )
}

export default AppComponent