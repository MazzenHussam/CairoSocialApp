import './leftBar.scss'
import friends from "../../assets/friends.png";
import groups from "../../assets/groups.png";
import marketPlace from "../../assets/market.png";
import watch from "../../assets/watch.png";
import memories from "../../assets/memories.png"; 
import events from "../../assets/events.png";
import games from "../../assets/games.png";
import videos from "../../assets/videos.png";
import chat from "../../assets/chat.png";
import fund from "../../assets/fund.png";
import tutorial from "../../assets/tutorial.png";
import courses from "../../assets/courses.png";



const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
              <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg" alt="profile picture" />
              <span>John Doe</span>
          </div>
          <div className="item">
            <img src={friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={marketPlace} alt="" />
            <span>MarketPlace</span>
          </div>
          <div className="item">
            <img src={watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={memories} alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your Shortcuts</span>
          <div className="item">
            <img src={events} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={games} alt="" />
            <span>Games</span>
          </div>
          <div className="item">
            <img src={videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={chat} alt="" />
            <span>Chat</span>
          </div>
          <div className="item">
            <img src={fund} alt="" />
            <span>Fund</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={tutorial} alt="" />
            <span>Tutorial</span>
          </div>
          <div className="item">
            <img src={courses} alt="" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar