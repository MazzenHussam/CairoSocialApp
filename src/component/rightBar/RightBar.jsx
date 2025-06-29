import './rightBar.scss'


const RightBar = () => {
  return (
    <div className="rightBar">
            <div className="container">
              <div className="item">
                <span>Suggestions for you</span>
                <div className="user">
                  <div className="userInfo">
                    <img src="../../../public/assets/10.jpg" alt="profile picture" />
                    <span>John Doe</span>
                  </div>
                  <div className="buttons">
                    <button className="follow">Follow</button>
                    <button className="dismiss">Dismiss</button>
                  </div>
                </div>
                <div className="user">
                  <div className="userInfo">
                    <img src="../../../public/assets/11.jpg" alt="profile picture" />
                    <span>Mike Smi</span>
                  </div>
                  <div className="buttons">
                    <button className="follow">Follow</button>
                    <button className="dismiss">Dismiss</button>
                  </div>
                </div>
              </div>

              <div className="item">
                <span>Last Activites</span>
                <div className="userActions">
                  <div className="user">
                    <img src="../../../public/assets/12.jpg" alt="Profile picture" />
                    <span>John Doe </span>
                  </div>
                  <div className="action">changed their cover picture</div>
                </div>
              </div>
            </div>
      </div>
  )
}

export default RightBar;