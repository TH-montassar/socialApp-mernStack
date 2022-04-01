/* Creating Link React component called "App" and setting it to display the logo. */
import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { logout } from "../../actions/auth.action";
import { useDispatch } from "react-redux";
const Header = () => {
  const dispatch = useDispatch();
  return (
    <header>
      <div className="topbar stick">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>

        <div className="top-area">
          <ul className="main-menu">
            <li>
              <Link to="/" title="">
                Home
              </Link>
            </li>
            <li>
              <Link to="/profile" title="">
               Profile
              </Link>
            </li>
            <li>
              <Link to="#" title="">
                account settings
              </Link>
              <ul>
                <li>
                  <Link to="edit-account-setting.html" title="">
                    edit account setting
                  </Link>
                </li>

                <li>
                  <Link to="edit-password.html" title="">
                    edit-password
                  </Link>
                </li>
                <li>
                  <Link to="edit-profile-basic.html" title="">
                    edit profile basics
                  </Link>
                </li>

                <li>
                  <Link to="messages.html" title="">
                    message box
                  </Link>
                </li>
                <li>
                  <Link to="inbox.html" title="">
                    Inbox
                  </Link>
                </li>
                <li>
                  <Link to="notifications.html" title="">
                    notifications page
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/users" title="">
               add Friends
              </Link>
            </li>
          </ul>
          <ul className="setting-area">
            <li>
              <Link to="#" title="Home" data-ripple="">
                <i className="ti-search"></i>
              </Link>
              <div className="searched">
                <form method="post" className="form-search">
                  <input type="text" placeholder="Search Friend" />
                  <button data-ripple>
                    <i className="ti-search"></i>
                  </button>
                </form>
              </div>
            </li>
            <li>
              <Link to="newsfeed.html" title="Home" data-ripple="">
                <i className="ti-home"></i>
              </Link>
            </li>
            <li>
              <Link to="#" title="Notification" data-ripple="">
                <i className="ti-bell"></i>
                <span>20</span>
              </Link>
              <div className="dropdowns">
                <span>4 New Notifications</span>
                <ul className="drops-menu">
                  <li>
                    <Link to="notifications.html" title="">
                      <img src="images/resources/thumb-1.jpg" alt="" />
                      <div className="mesg-meta">
                        <h6>sarah Loren</h6>
                        <span>Hi, how r u dear ...?</span>
                        <i>2 min ago</i>
                      </div>
                    </Link>
                    <span className="tag green">New</span>
                  </li>
                  <li>
                    <Link to="notifications.html" title="">
                      <img src="images/resources/thumb-2.jpg" alt="" />
                      <div className="mesg-meta">
                        <h6>Jhon doe</h6>
                        <span>Hi, how r u dear ...?</span>
                        <i>2 min ago</i>
                      </div>
                    </Link>
                    <span className="tag red">Reply</span>
                  </li>
                  <li>
                    <Link to="notifications.html" title="">
                      <img src="images/resources/thumb-3.jpg" alt="" />
                      <div className="mesg-meta">
                        <h6>Andrew</h6>
                        <span>Hi, how r u dear ...?</span>
                        <i>2 min ago</i>
                      </div>
                    </Link>
                    <span className="tag blue">Unseen</span>
                  </li>
                  <li>
                    <Link to="notifications.html" title="">
                      <img src="images/resources/thumb-4.jpg" alt="" />
                      <div className="mesg-meta">
                        <h6>Tom cruse</h6>
                        <span>Hi, how r u dear ...?</span>
                        <i>2 min ago</i>
                      </div>
                    </Link>
                    <span className="tag">New</span>
                  </li>
                  <li>
                    <Link to="notifications.html" title="">
                      <img src="images/resources/thumb-5.jpg" alt="" />
                      <div className="mesg-meta">
                        <h6>Amy</h6>
                        <span>Hi, how r u dear ...?</span>
                        <i>2 min ago</i>
                      </div>
                    </Link>
                    <span className="tag">New</span>
                  </li>
                </ul>
                <Link to="notifications.html" title="" className="more-mesg">
                  view more
                </Link>
              </div>
            </li>
            <li>
              <Link to="#" title="Messages" data-ripple="">
                <i className="ti-comment"></i>
                <span>12</span>
              </Link>
              <div className="dropdowns">
                <span>5 New Messages</span>
                <ul className="drops-menu">
                  <li>
                    <Link to="notifications.html" title="">
                      <img src="images/resources/thumb-1.jpg" alt="" />
                      <div className="mesg-meta">
                        <h6>sarah Loren</h6>
                        <span>Hi, how r u dear ...?</span>
                        <i>2 min ago</i>
                      </div>
                    </Link>
                    <span className="tag green">New</span>
                  </li>
                  <li>
                    <Link to="notifications.html" title="">
                      <img src="images/resources/thumb-2.jpg" alt="" />
                      <div className="mesg-meta">
                        <h6>Jhon doe</h6>
                        <span>Hi, how r u dear ...?</span>
                        <i>2 min ago</i>
                      </div>
                    </Link>
                    <span className="tag red">Reply</span>
                  </li>
                  <li>
                    <Link to="notifications.html" title="">
                      <img src="images/resources/thumb-3.jpg" alt="" />
                      <div className="mesg-meta">
                        <h6>Andrew</h6>
                        <span>Hi, how r u dear ...?</span>
                        <i>2 min ago</i>
                      </div>
                    </Link>
                    <span className="tag blue">Unseen</span>
                  </li>
                  <li>
                    <Link to="notifications.html" title="">
                      <img src="images/resources/thumb-4.jpg" alt="" />
                      <div className="mesg-meta">
                        <h6>Tom cruse</h6>
                        <span>Hi, how r u dear ...?</span>
                        <i>2 min ago</i>
                      </div>
                    </Link>
                    <span className="tag">New</span>
                  </li>
                  <li>
                    <Link to="notifications.html" title="">
                      <img src="images/resources/thumb-5.jpg" alt="" />
                      <div className="mesg-meta">
                        <h6>Amy</h6>
                        <span>Hi, how r u dear ...?</span>
                        <i>2 min ago</i>
                      </div>
                    </Link>
                    <span className="tag">New</span>
                  </li>
                </ul>
                <Link to="messages.html" title="" className="more-mesg">
                  view more
                </Link>
              </div>
            </li>
            <li>
              <Link to="#" title="Languages" data-ripple="">
                <i className="fa fa-globe"></i>
              </Link>
              <div className="dropdowns languages">
                <Link to="#" title="">
                  <i className="ti-check"></i>English
                </Link>
                <Link to="#" title="">
                  Arabic
                </Link>
                <Link to="#" title="">
                  Dutch
                </Link>
                <Link to="#" title="">
                  French
                </Link>
              </div>
            </li>
            <li>
              <button
                type="button"
                onClick={() => dispatch(logout())}
              
              >
               <i class="fa-solid fa-arrow-right-from-bracket"></i>
              </button>
            </li>
          </ul>

          <div className="user-img">
            <img src="images/resources/admin.jpg" alt="" />
            <span className="status f-online"></span>
            <div className="user-setting">
              <Link to="#" title="">
                <span className="status f-online"></span>online
              </Link>
              <Link to="#" title="">
                <span className="status f-away"></span>away
              </Link>
              <Link to="#" title="">
                <span className="status f-off"></span>offline
              </Link>
              <Link to="#" title="">
                <i className="ti-user"></i> view profile
              </Link>
              <Link to="#" title="">
                <i className="ti-pencil-alt"></i>edit profile
              </Link>
              <Link to="#" title="">
                <i className="ti-target"></i>activity log
              </Link>
              <Link to="#" title="">
                <i className="ti-settings"></i>account setting
              </Link>
              <Link to="#" title="">
                <i className="ti-power-off"></i>log out
              </Link>
            </div>
          </div>
        
        </div>
      </div>

      <div className="responsive-header">
        <div className="mh-head first Sticky">
          <span className="mh-btns-left">
            <Link className="" to="#menu">
              <i className="fa fa-align-justify"></i>
            </Link>
          </span>
          <span className="mh-text">
            <Link to="newsfeed.html" title="">
              <img src={logo} alt="" />
            </Link>
          </span>
          <span className="mh-btns-right">
            <Link className="fa fa-sliders" to="#shoppingbag"></Link>
          </span>
        </div>
        <div className="mh-head second">
          <form className="mh-form">
            <input placeholder="search" />
            <Link to="#/" className="fa fa-search"></Link>
          </form>
        </div>
        <nav id="menu" className="res-menu">
          <ul>
            <li>
              <span>Home</span>
              <ul>
                <li>
                  <Link to="index-2.html" title="">
                    Home Social
                  </Link>
                </li>
                <li>
                  <Link to="index2.html" title="">
                    Home Social 2
                  </Link>
                </li>
                <li>
                  <Link to="index-company.html" title="">
                    Home Company
                  </Link>
                </li>
                <li>
                  <Link to="landing.html" title="">
                    Login page
                  </Link>
                </li>
                <li>
                  <Link to="logout.html" title="">
                    Logout Page
                  </Link>
                </li>
                <li>
                  <Link to="newsfeed.html" title="">
                    news feed
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <span>Time Line</span>
              <ul>
                <li>
                  <Link to="time-line.html" title="">
                    timeline
                  </Link>
                </li>
                <li>
                  <Link to="timeline-friends.html" title="">
                    timeline friends
                  </Link>
                </li>
                <li>
                  <Link to="timeline-groups.html" title="">
                    timeline groups
                  </Link>
                </li>
                <li>
                  <Link to="timeline-pages.html" title="">
                    timeline pages
                  </Link>
                </li>
                <li>
                  <Link to="timeline-photos.html" title="">
                    timeline photos
                  </Link>
                </li>
                <li>
                  <Link to="timeline-videos.html" title="">
                    timeline videos
                  </Link>
                </li>
                <li>
                  <Link to="fav-page.html" title="">
                    favourit page
                  </Link>
                </li>
                <li>
                  <Link to="groups.html" title="">
                    groups page
                  </Link>
                </li>
                <li>
                  <Link to="page-likers.html" title="">
                    Likes page
                  </Link>
                </li>
                <li>
                  <Link to="people-nearby.html" title="">
                    people nearby
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <span>Account Setting</span>
              <ul>
                <li>
                  <Link to="create-fav-page.html" title="">
                    create fav page
                  </Link>
                </li>
                <li>
                  <Link to="edit-account-setting.html" title="">
                    edit account setting
                  </Link>
                </li>
                <li>
                  <Link to="edit-interest.html" title="">
                    edit-interest
                  </Link>
                </li>
                <li>
                  <Link to="edit-password.html" title="">
                    edit-password
                  </Link>
                </li>
                <li>
                  <Link to="edit-profile-basic.html" title="">
                    edit profile basics
                  </Link>
                </li>
                <li>
                  <Link to="edit-work-eductation.html" title="">
                    edit work educations
                  </Link>
                </li>
                <li>
                  <Link to="messages.html" title="">
                    message box
                  </Link>
                </li>
                <li>
                  <Link to="inbox.html" title="">
                    Inbox
                  </Link>
                </li>
                <li>
                  <Link to="notifications.html" title="">
                    notifications page
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <span>forum</span>
              <ul>
                <li>
                  <Link to="forum.html" title="">
                    Forum Page
                  </Link>
                </li>
                <li>
                  <Link to="forums-category.html" title="">
                    Fourm Category
                  </Link>
                </li>
                <li>
                  <Link to="forum-open-topic.html" title="">
                    Forum Open Topic
                  </Link>
                </li>
                <li>
                  <Link to="forum-create-topic.html" title="">
                    Forum Create Topic
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <span>Our Shop</span>
              <ul>
                <li>
                  <Link to="shop.html" title="">
                    Shop Products
                  </Link>
                </li>
                <li>
                  <Link to="shop-masonry.html" title="">
                    Shop Masonry Products
                  </Link>
                </li>
                <li>
                  <Link to="shop-single.html" title="">
                    Shop Detail Page
                  </Link>
                </li>
                <li>
                  <Link to="shop-cart.html" title="">
                    Shop Product Cart
                  </Link>
                </li>
                <li>
                  <Link to="shop-checkout.html" title="">
                    Product Checkout
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <span>Our Blog</span>
              <ul>
                <li>
                  <Link to="blog-grid-wo-sidebar.html" title="">
                    Our Blog
                  </Link>
                </li>
                <li>
                  <Link to="blog-grid-right-sidebar.html" title="">
                    Blog with R-Sidebar
                  </Link>
                </li>
                <li>
                  <Link to="blog-grid-left-sidebar.html" title="">
                    Blog with L-Sidebar
                  </Link>
                </li>
                <li>
                  <Link to="blog-masonry.html" title="">
                    Blog Masonry Style
                  </Link>
                </li>
                <li>
                  <Link to="blog-list-wo-sidebar.html" title="">
                    Blog List Style
                  </Link>
                </li>
                <li>
                  <Link to="blog-list-right-sidebar.html" title="">
                    Blog List with R-Sidebar
                  </Link>
                </li>
                <li>
                  <Link to="blog-list-left-sidebar.html" title="">
                    Blog List with L-Sidebar
                  </Link>
                </li>
                <li>
                  <Link to="blog-detail.html" title="">
                    Blog Post Detail
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <span>Portfolio</span>
              <ul>
                <li>
                  <Link to="portfolio-2colm.html" title="">
                    Portfolio 2col
                  </Link>
                </li>
                <li>
                  <Link to="portfolio-3colm.html" title="">
                    Portfolio 3col
                  </Link>
                </li>
                <li>
                  <Link to="portfolio-4colm.html" title="">
                    Portfolio 4col
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <span>Support & Help</span>
              <ul>
                <li>
                  <Link to="support-and-help.html" title="">
                    Support & Help
                  </Link>
                </li>
                <li>
                  <Link to="support-and-help-detail.html" title="">
                    Support & Help Detail
                  </Link>
                </li>
                <li>
                  <Link to="support-and-help-search-result.html" title="">
                    Support & Help Search Result
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <span>More pages</span>
              <ul>
                <li>
                  <Link to="careers.html" title="">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="career-detail.html" title="">
                    Career Detail
                  </Link>
                </li>
                <li>
                  <Link to="404.html" title="">
                    404 error page
                  </Link>
                </li>
                <li>
                  <Link to="404-2.html" title="">
                    404 Style2
                  </Link>
                </li>
                <li>
                  <Link to="faq.html" title="">
                    faq's page
                  </Link>
                </li>
                <li>
                  <Link to="insights.html" title="">
                    insights
                  </Link>
                </li>
                <li>
                  <Link to="knowledge-base.html" title="">
                    knowledge base
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="about.html" title="">
                about
              </Link>
            </li>
            <li>
              <Link to="about-company.html" title="">
                About Us2
              </Link>
            </li>
            <li>
              <Link to="contact.html" title="">
                contact
              </Link>
            </li>
            <li>
              <Link to="contact-branches.html" title="">
                Contact Us2
              </Link>
            </li>
            <li>
              <Link to="widgets.html" title="">
                Widgts
              </Link>
            </li>
          </ul>
        </nav>
        <nav id="shoppingbag">
          <div>
            <div className="">
              <form method="post">
                <div className="setting-row">
                  <span>use night mode</span>
                  <input type="checkbox" id="nightmode" />
                  <label
                    htmlFor="nightmode"
                    data-on-label="ON"
                    data-off-label="OFF"
                  ></label>
                </div>
                <div className="setting-row">
                  <span>Notifications</span>
                  <input type="checkbox" id="switch2" />
                  <label
                    htmlFor="switch2"
                    data-on-label="ON"
                    data-off-label="OFF"
                  ></label>
                </div>
                <div className="setting-row">
                  <span>Notification sound</span>
                  <input type="checkbox" id="switch3" />
                  <label
                    htmlFor="switch3"
                    data-on-label="ON"
                    data-off-label="OFF"
                  ></label>
                </div>
                <div className="setting-row">
                  <span>My profile</span>
                  <input type="checkbox" id="switch4" />
                  <label
                    htmlFor="switch4"
                    data-on-label="ON"
                    data-off-label="OFF"
                  ></label>
                </div>
                <div className="setting-row">
                  <span>Show profile</span>
                  <input type="checkbox" id="switch5" />
                  <label
                    htmlFor="switch5"
                    data-on-label="ON"
                    data-off-label="OFF"
                  ></label>
                </div>
              </form>
              <h4 className="panel-title">Account Setting</h4>
              <form method="post">
                <div className="setting-row">
                  <span>Sub users</span>
                  <input type="checkbox" id="switch6" />
                  <label
                    htmlFor="switch6"
                    data-on-label="ON"
                    data-off-label="OFF"
                  ></label>
                </div>
                <div className="setting-row">
                  <span>personal account</span>
                  <input type="checkbox" id="switch7" />
                  <label
                    htmlFor="switch7"
                    data-on-label="ON"
                    data-off-label="OFF"
                  ></label>
                </div>
                <div className="setting-row">
                  <span>Business account</span>
                  <input type="checkbox" id="switch8" />
                  <label
                    htmlFor="switch8"
                    data-on-label="ON"
                    data-off-label="OFF"
                  ></label>
                </div>
                <div className="setting-row">
                  <span>Show me online</span>
                  <input type="checkbox" id="switch9" />
                  <label
                    htmlFor="switch9"
                    data-on-label="ON"
                    data-off-label="OFF"
                  ></label>
                </div>
                <div className="setting-row">
                  <span>Delete history</span>
                  <input type="checkbox" id="switch10" />
                  <label
                    htmlFor="switch10"
                    data-on-label="ON"
                    data-off-label="OFF"
                  ></label>
                </div>
                <div className="setting-row">
                  <span>Expose author name</span>
                  <input type="checkbox" id="switch11" />
                  <label
                    htmlFor="switch11"
                    data-on-label="ON"
                    data-off-label="OFF"
                  ></label>
                </div>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

/* Creating Link React component called Header. */

export default Header;
