import React from 'react';
import profilePic from '../../images/John.png';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import surveyImg from '../../images/sale.png';
import MiniCalendar from './calendar/mini_calendar';
import BulletinBoard from './bulletin_board/bulletin_board';

class Home extends React.Component {
  constructor(props) {
    super(props);
    
  }

formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

  render() {
    const { isAuthenticated } = this.props.auth;
    var monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri",
      "Sat"
       ];

    var d = new Date();
    var month = monthNames[d.getMonth()];
    var day = dayNames[d.getDay()];
    var date = d.getDate();
    var time = this.formatAMPM(d);



    return (
      <main className="main">
        <div className="container" style={{paddingTop: 35}}>
          <div className="main-wrapper">
            <div className="col-sm-3" style={{padding: 0, paddingRight: 5}}>
              <div className="panel">
                <div className="user-info">
                  <a href="tenant-self-profile.html"><div className="avatar" style={{cursor: 'pointer'}}>
                      <img src={profilePic} alt />
                    </div></a>
                  <div className="welcome-text">
                    <div style={{fontSize: '14pt'}}><span style={{display: 'inline-block', paddingBottom: 5}}>{isAuthenticated ? "Authorized" : "Not Authorized"}</span><br /><span style={{fontSize: '9pt', color: '#bbb'}}>Star Clox</span><br /><span style={{fontSize: '9pt', color: '#bbb'}}>Property Manager</span></div>
                  </div>
                  <div className="follower-count-container" style={{marginTop: 25, marginBottom: 0}}>
                    <Link to="/followers"><div className="follower-counter">
                        <div className="counter-title">Followers</div>
                        <div className="counter-number">10</div>
                      </div></Link>
                    <a href="followers.html"><div className="follower-counter">
                        <div className="counter-title">Following</div>
                        <div className="counter-number">22</div>
                      </div></a>
                    <div className="follower-counter">
                      <div className="counter-title">Posts</div>
                      <div className="counter-number">4</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel">
                <div className="date-time">
                  <div className="date-container">
                    <div className="date-label">Today</div>
                    <div className="date-date">{month} {date}, 2017</div>
                  </div>
                  <div className="date-container-right">
                    <div className="date-label">Time</div>
                    <div className="date-date">{time}</div>
                  </div>
                </div>
                <div className="weather">
                  <i style={{color: '#FFBE00'}} className="fa fa-sun-o" /> Sunny
                  <a href="biscuit.html"><div className="temp">27° F</div></a>
                </div>	
              </div>
              <div className="panel">
                <div className="quick-btns">
                  <Link to="/editprofile"><div className="quick-btn"><i className="fa fa-gear" /> Edit Profile</div></Link>
                  <div className="quick-btn"><i className="fa fa-line-chart" /> Manage Promotions</div>
                  <div className="quick-btn"><i className="fa fa-send-o" /> Invite Friends</div>
                  <div className="quick-btn"><i className="fa fa-plus-circle" /> Create Survey</div>
                </div>
              </div>
              <div className="panel">
                <div className="maintenance-title"><i className="fa fa-wrench" />&nbsp;&nbsp;Maintenance Requests</div><br />
                <a href="maintenance-tenant-dash.html"><div className="quick-btn"><i className="fa fa-wrench" /> Request Maintenance</div></a>
                <ul className="maintenance-info">
                  <li><a href="#">Thur Mar 3</a></li>
                  <li className="text-warning">Pending</li>
                  <li><a href="#" className="link-cancel text-danger">Cancel Request</a></li>
                </ul>
              </div>
              {/*featured survey*/}
              <div className="panel" style={{overflow: 'auto'}}>
                <div className="survey-title" style={{marginBottom: 10}}>Featured Survey</div>
                <div className="survey-top">
                  <div className="survey-img">
                    <img src={surveyImg} style={{width: '100%'}} alt />
                  </div>
                  <div className="survey-desc">Complete this survey to be entered to win a $20 gift card to Starbucks Coffee.  The winner will be announced Friday Oct 21. </div>
                  <div className="take-survey-btn">Take Survey</div>
                </div>
                <div className="survey-bottom" style={{display: 'none'}}>
                  <div className="survey-question">
                    <div className="question-header">How many events do you have this week?</div>
                    <div className="question-answer">
                      <ul className="radio-checks">
                        <form>
                          <li>
                            <input type="radio" id="1-option" name="selector" />
                            <label htmlFor="1-option">0</label>
                            <div className="check" />
                          </li>
                          <li>
                            <input type="radio" id="2-option" name="selector" />
                            <label htmlFor="2-option">1</label>
                            <div className="check"><div className="inside" /></div>
                          </li>
                          <li>
                            <input type="radio" id="3-option" name="selector" />
                            <label htmlFor="3-option">2</label>
                            <div className="check"><div className="inside" /></div>
                          </li>
                          <li>
                            <input type="radio" id="4-option" name="selector" />
                            <label htmlFor="4-option">3+</label>
                            <div className="check"><div className="inside" /></div>
                          </li>
                        </form>
                      </ul>
                    </div>
                  </div>
                  <div className="survey-question">
                    <div className="question-header">How long do you usually spend on work related projects?</div>
                    <div className="question-answer">
                      <ul className="radio-checks">
                        <form>
                          <li>
                            <input type="radio" id="21-option" name="selector" />
                            <label htmlFor="21-option">20 hours a week</label>
                            <div className="check" />
                          </li>
                          <li>
                            <input type="radio" id="22-option" name="selector" />
                            <label htmlFor="22-option">30 hours a week</label>
                            <div className="check"><div className="inside" /></div>
                          </li>
                          <li>
                            <input type="radio" id="23-option" name="selector" />
                            <label htmlFor="23-option">40 hours a week</label>
                            <div className="check"><div className="inside" /></div>
                          </li>
                          <li>
                            <input type="radio" id="24-option" name="selector" />
                            <label htmlFor="24-option">50 hours + a week</label>
                            <div className="check"><div className="inside" /></div>
                          </li>
                        </form>
                      </ul>
                    </div>
                  </div>
                  <div className="survey-question">
                    <div className="question-header">Have you gone to a sporting even this year?</div>
                    <div className="question-answer">
                      <ul className="radio-checks">
                        <form>
                          <li>
                            <input type="radio" id="31-option" name="selector" />
                            <label htmlFor="31-option">Yes</label>
                            <div className="check" />
                          </li>
                          <li>
                            <input type="radio" id="32-option" name="selector" />
                            <label htmlFor="32-option">No</label>
                            <div className="check"><div className="inside" /></div>
                          </li>
                        </form>
                      </ul>
                    </div>
                  </div>
                  <div className="submit-survey-btn">Submit Survey</div>
                </div>
              </div>
            </div>{/* /.widgets */}
            <div className="col-sm-9" style={{padding: 0, paddingLeft: 5}}>
              {/*mini calendar*/}
              <div className="panel">
                <MiniCalendar />
              </div>
              {/*Middle Section*/}
              <div className="col-sm-8" style={{padding: 0, paddingRight: 10}}>
                <div className="panel" style={{padding: 0}}>	
                  <div className="tab-selector">
                    <div id="news-feed" className="tab-selector-tab">News Feed</div>
                    <div id="bulletin-board" className="tab-selector-tab active">Bulletin Board</div>
                    <div id="events" className="tab-selector-tab ">Events</div>
                  </div>
                </div>
                {/*bulletin board*/}
                <BulletinBoard />
                {/*events board*/}
                <div id="events-content" className="events-container" style={{display: 'none'}}>
                  <div className="panel">
                    <div className="create-post">
                      <div className="create-post-title">Create Event</div>
                      <form className="post-event-form" style={{display: 'none'}}>
                        <div className="post-event-field" style={{flex: 2}}>
                          <div className="post-event-input-title">Event Name</div>
                          <div className="post-event-input"><input type="text" /></div>
                        </div>
                        <div className="post-event-field" style={{flex: 2}}>
                          <div className="post-event-input-title">Location</div>
                          <div className="post-event-input"><input type="text" /></div>
                        </div>
                        <div className="post-event-field">
                          <div className="post-event-input-title">Event Date</div>
                          <p>
                            <label htmlFor="user-first-name">mm/dd/yyyy</label>
                            <input type="text" name="field_id" id="user-first-name" />
                          </p>
                        </div>
                        <div className="post-event-field">
                          <div className="post-event-input-title">Event Time</div>
                          <div className="post-event-input"><input type="text" /></div>
                        </div>
                      </form>
                      <textarea className="create-post-input" placeholder="Post an activity or event" type="text" defaultValue={""} />
                      <div className="create-post-bottom">
                        <div className="create-post-btn"><i className="fa fa-camera" /> Add Photo</div>
                        <div className="create-post-post">Post</div>
                        <div className="create-post-dropdown">Everyone <i className="fa fa-eye" />
                          <div className="create-post-dropdown-content">
                            <ul>
                              <a href="#"><li>Everyone <i className="fa fa-check" /></li></a>
                              <a href="#"><li>Tenants</li></a>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="panel" style={{padding: '0 !important'}}>
                    <div className="event-item-container">
                      <div className="event-img">
                        <div className="event-time-badge">Feb 15, 2017 @ 2:00pm - 3:00pm</div>
                        <a href="https://www.google.com/maps/place/2420+Camino+Ramon,+San+Ramon,+CA+94583/data=!4m2!3m1!1s0x808ff29688862617:0x72fb2262f58ac91?sa=X&ved=0ahUKEwia5o_eot7RAhUGzWMKHbw5BPMQ8gEIGTAA"><div className="location-badge">
                            <i style={{color: '#469df5', fontSize: '12pt'}} className="fa fa-map-marker" />
                            <div className="event-address"><span style={{color: '#000', fontWeight: 'bold'}}>2420 Camino Ramon</span><br /><span style={{color: '#808080'}}>San Francisco CA, 94545</span></div>
                          </div></a>
                      </div>
                      <div style={{padding: 15, overflow: 'auto', paddingTop: 0}}>
                        <div className="event-item-title">Wells Fargo Job Fair</div>
                        <div className="create-post-dropdown" style={{background: '#469df5', color: '#fff !important', borderRadius: 3}}>Add To Calendar
                          <div className="create-post-dropdown-content">
                            <ul>
                              <a href="#"><li>Gmail</li></a>
                              <a href="#"><li>Outlook</li></a>
                            </ul>
                          </div>
                        </div>
                        <div className="event-item-desc">Come on down to the Wells Fargo Job Fair and check out the booths we have set up for you!  There will be food and drinks provided so come hungry and leave happy!</div>
                        <div className="bulletin-options">
                          <div className="like"><i className="fa fa-heart" />&nbsp;&nbsp;0 Likes</div>
                          <div className="comment"><i className="fa fa-comment" />&nbsp;&nbsp;0 Comments</div>
                        </div>
                        <div className="comment-section">
                          <div className="add-new-comment-container">
                            <div className="add-comment-img" />
                            <textarea className="add-comment-input" defaultValue={""} />
                            <label className="add-comment-label">Add Comment...</label>
                            <div className="add-comment-btn">Comment</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="panel" style={{padding: '0 !important'}}>
                    <div className="event-item-container">
                      <div className="event-img" style={{backgroundImage: 'url(images/movie-night.jpg)'}}>
                        <div className="event-time-badge">Feb 19, 2017 @ 2:00pm - 3:00pm</div>
                        <div className="location-badge">
                          <i style={{color: '#469df5', fontSize: '12pt'}} className="fa fa-map-marker" />
                          <div className="event-address"><span style={{color: '#000', fontWeight: 'bold'}}>2420 Camino Ramon</span><br /><span style={{color: '#808080'}}>San Francisco CA, 94545</span></div>
                        </div>
                      </div>
                      <div style={{padding: 15, overflow: 'auto', paddingTop: 0}}>
                        <div className="event-item-title">Movie Night!  Jurassic Park</div>
                        <div className="create-post-dropdown" style={{background: '#469df5', color: '#fff !important', borderRadius: 3}}>Add To Calendar
                          <div className="create-post-dropdown-content">
                            <ul>
                              <a href="#"><li>Gmail</li></a>
                              <a href="#"><li>Outlook</li></a>
                            </ul>
                          </div>
                        </div>
                        <div className="event-item-desc">Come join us tonight to watch Jurassic Park!  Bring your family and friends for a relaxing night at Bishop Ranch.  There will be food and drinks served as well.</div>
                        <div className="bulletin-options">
                          <div className="like"><i className="fa fa-heart" />&nbsp;&nbsp;0 Likes</div>
                          <div className="comment"><i className="fa fa-comment" />&nbsp;&nbsp;0 Comments</div>
                        </div>
                        <div className="comment-section">
                          <div className="add-new-comment-container">
                            <div className="add-comment-img" />
                            <textarea className="add-comment-input" defaultValue={""} />
                            <label className="add-comment-label">Add Comment...</label>
                            <div className="add-comment-btn">Comment</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="panel" style={{padding: '0 !important'}}>
                    <div className="event-item-container">
                      <div className="event-img" style={{backgroundImage: 'url(images/iphone-6-plus.jpg)'}}>
                        <div className="event-time-badge">Feb 2, 2017 @ 2:00pm - 3:00pm</div>
                        <div className="location-badge">
                          <i style={{color: '#469df5', fontSize: '12pt'}} className="fa fa-map-marker" />
                          <div className="event-address"><span style={{color: '#000', fontWeight: 'bold'}}>2420 Camino Ramon</span><br /><span style={{color: '#808080'}}>San Francisco CA, 94545</span></div>
                        </div>
                      </div>
                      <div style={{padding: 15, overflow: 'auto', paddingTop: 0}}>
                        <div className="event-item-title">Learn to Code Iphone Applications</div>
                        <div className="create-post-dropdown" style={{background: '#469df5', color: '#fff !important', borderRadius: 3}}>Add To Calendar
                          <div className="create-post-dropdown-content">
                            <ul>
                              <a href="#"><li>Gmail</li></a>
                              <a href="#"><li>Outlook</li></a>
                            </ul>
                          </div>
                        </div>
                        <div className="event-item-desc">If you have ever wanted to learn to code, then tonight is your night!  There is an iphone app coder who is available to teach us all how to become expert app developers.  Theres no time like the present to get to coding!  See you there.</div>
                        <div className="bulletin-options">
                          <div className="like"><i className="fa fa-heart" />&nbsp;&nbsp;0 Likes</div>
                          <div className="comment"><i className="fa fa-comment" />&nbsp;&nbsp;0 Comments</div>
                        </div>
                        <div className="comment-section">
                          <div className="add-new-comment-container">
                            <div className="add-comment-img" />
                            <textarea className="add-comment-input" defaultValue={""} />
                            <label className="add-comment-label">Add Comment...</label>
                            <div className="add-comment-btn">Comment</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*News Feed*/}
                <div id="news-feed-content" className="events-container" style={{display: 'none'}}>
                  <div className="panel">
                    <div className="create-post">
                      <div className="create-post-title">Post Article</div>
                      <textarea className="create-post-input" placeholder="Paste a link to an article or video here" type="text" defaultValue={""} />
                      <div className="create-post-bottom">
                        <div className="create-post-post">Post</div>
                        <div className="create-post-dropdown">Everyone <i className="fa fa-eye" />
                          <div className="create-post-dropdown-content">
                            <ul>
                              <a href="#"><li>Everyone <i className="fa fa-check" /></li></a>
                              <a href="#"><li>Tenants</li></a>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="panel" style={{padding: '0 !important'}}>
                    <div className="event-item-container">
                      <div className="event-img" style={{backgroundImage: 'url(images/67f36cd0d5732401db2903239b9744c1.jpg)'}}>
                        <div className="event-time-badge">January 30, 2017</div>
                      </div>
                      <div style={{padding: 15, overflow: 'auto', paddingTop: 0}}>
                        <div className="event-item-title">Riots in the Streets of Oakland</div>
                        <div className="event-item-desc">Protests and riots exploded across California and throughout the nation for the third night after Donald Trump’s surprise victory in the presidential election. In Oakland, the East Bay Times reports, the rioting is almost out of control.
                          However, the link between the protests and the election is increasingly unclear. “This has nothing to do with Trump,” one resident told the Times. “It was just an excuse for people who want to get their frustrations out. It makes me feel really bad for my city.”</div>
                        <div className="bulletin-options">
                          <div className="like"><i className="fa fa-heart" />&nbsp;&nbsp;0 Likes</div>
                          <div className="comment"><i className="fa fa-comment" />&nbsp;&nbsp;0 Comments</div>
                        </div>
                        <div className="comment-section">
                          <div className="add-new-comment-container">
                            <div className="add-comment-img" />
                            <textarea className="add-comment-input" defaultValue={""} />
                            <label className="add-comment-label">Add Comment...</label>
                            <div className="add-comment-btn">Comment</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="panel" style={{padding: '0 !important'}}>
                    <div className="event-item-container">
                      <div className="event-img" style={{backgroundImage: 'url(images/nikkihaley-guterres-820x577.jpg)', backgroundPosition: '0 0'}}>
                        <div className="event-time-badge">Feb 15, 2017</div>
                      </div>
                      <div style={{padding: 15, overflow: 'auto', paddingTop: 0}}>
                        <div className="event-item-title">Nikki Haley Arrives at the U.N.</div>
                        <div className="event-item-desc">(by Michelle Nichols, Reuters) from the UN — The new U.S. ambassador to the United Nations, Nikki Haley, pledged on Friday to overhaul the world body and warned U.S. allies that if they do not support Washington, then the U.S. is “taking names” and will respond accordingly.
                          Haley made brief remarks to reporters as she arrived at the world body’s headquarters in New York to present her credentials to U.N. Secretary-General Antonio Guterres.
                          “Our goal with the administration is to show value at the U.N. and the way that we’ll show value is to show our strength, show our voice, have the backs of our allies and make sure that our allies have our back as well,” Haley said.
                          “For those that don’t have our back, we’re taking names, we will make points to respond to that accordingly,” added Republican President Donald Trump’s U.N. envoy.</div>
                        <div className="bulletin-options">
                          <div className="like"><i className="fa fa-heart" />&nbsp;&nbsp;0 Likes</div>
                          <div className="comment"><i className="fa fa-comment" />&nbsp;&nbsp;0 Comments</div>
                        </div>
                        <div className="comment-section">
                          <div className="add-new-comment-container">
                            <div className="add-comment-img" />
                            <textarea className="add-comment-input" defaultValue={""} />
                            <label className="add-comment-label">Add Comment...</label>
                            <div className="add-comment-btn">Comment</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Right side Panels*/}
              <div className="col-sm-4" style={{padding: 0}}>
                {/*Security Roster panel*/}
                <div className="panel">
                  <div className="panel-title">
                    <div>Security Roster <small className="meta">Last Updated: 04/07/2016</small></div>
                    <a href="#" className="btn alignright">Add Contact</a>
                  </div>
                  <ul className="contact-list" style={{maxHeight: 200, overflow: 'auto'}}>
                    <li>
                      <div className="contact-img" style={{backgroundImage: 'url(images/129.jpg)'}} />
                      <div className="contact-title">Brad Nills</div>
                    </li>
                    <li>
                      <div className="contact-img" style={{backgroundImage: 'url(images/134.jpg)'}} />
                      <div className="contact-title">Gary Gill</div>
                    </li>
                    <li>
                      <div className="contact-img" style={{backgroundImage: 'url(images/133.jpg)'}} />
                      <div className="contact-title">Justin Ortiz</div>
                    </li>
                    <li>
                      <div className="contact-img" style={{backgroundImage: 'url(images/135.jpg)'}} />
                      <div className="contact-title">Austin Johnson</div>
                    </li>
                    <li>
                      <div className="contact-img" style={{backgroundImage: 'url(images/136.jpg)'}} />
                      <div className="contact-title">Joey Sardella</div>
                    </li>
                    <li>
                      <div className="contact-img" style={{backgroundImage: 'url(images/131.jpg)'}} />
                      <div className="contact-title">Adam Schifano</div>
                    </li>
                    <li>
                      <div className="contact-img" style={{backgroundImage: 'url(images/130.jpg)'}} />
                      <div className="contact-title">Mark Hamilton</div>
                    </li>
                  </ul>
                  <a href="view-all-roster.html"><div className="view-all-people">View All</div></a>
                </div>
                {/*In the Building panel*/}
                <div className="panel">
                  <div className="in-the-building-panel">
                    <div className="panel-title">In The Building</div>
                    <div className="building-item">
                      <div className="building-item-img" />
                      <a href="tenant-business-profile.html"><div className="building-item-title">Wells Fargo<br /><span>(760) 456-3534</span></div></a>
                      <div className="building-item-contact-btn">Contact</div>
                      <div className="building-item-desc">Wells Fargo Bank would like to invite you to join our team.  Check out careers on our website today for a chance to join our award winning team!</div>
                    </div>
                    <div className="building-item">
                      <div className="building-item-img" style={{backgroundImage: 'url(images/logo-mtech.png)'}} />
                      <div className="building-item-title">M-Tech<br /><span>(760) 456-3534</span></div>
                      <div className="building-item-contact-btn">Contact</div>
                      <div className="building-item-desc">M-Tech Delivers high quality technology at an affordable price.  We specialize in customer service and make everything customer oriented.</div>
                    </div>
                    <div className="building-item">
                      <div className="building-item-img" style={{backgroundImage: 'url(images/logo-amp.png)'}} />
                      <div className="building-item-title">AMP Technologies<br /><span>(760) 456-3534</span></div>
                      <div className="building-item-contact-btn">Contact</div>
                      <div className="building-item-desc">The Leader in commercial real estate software.  We take pride in our suite of products that offer the most for your business and your buildings tenants.  Get the most out of your business and sign up for a free demo today!</div>
                    </div>
                    <a href="view-all-tenants.html"><div className="view-all-people">View All</div></a>
                  </div>
                </div>
                <div className="panel">
                  <div className="panel-title">
                    <div>Insurance</div>
                    <p className="status">Status: <strong className="text-success">Insured</strong></p>
                  </div>
                  <ul className="info-list">
                    <li>Insurance Company<span>All State Insurance</span></li>
                    <li>Coverage Begin Date<span>04 July, 2015</span></li>
                    <li>Coverage End Date<span>04 July, 2017</span></li>
                    <li>Monthly Fee<span>$775</span></li>
                    <li>Amount Paid to Date<span>$6,900</span></li>
                    <li>Next Bill Date<span>07/04/2016</span></li>
                  </ul>
                  <div className="view-all-people">View All Insurance Information</div>
                </div>
                <div className="panel">
                  <div className="panel-title">
                    <div>Lease Information</div>
                  </div>
                  <ul className="info-list">
                    <li>Begin Date<span>04 July, 2015</span></li>
                    <li>End Date<span>04 July, 2017</span></li>
                    <li>Time at Location<span>1 year 34 days</span></li>
                    <li>Security Deposit<span>$3,000</span></li>
                    <li>Monthly Rent <small>Due: <time>07/19/16</time></small><span>$3,250</span></li>
                    <li>Amount Paid to Date<span>$34,250</span></li>
                  </ul>
                  <div className="view-all-people">View All Lease Information</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    );
  }
}



function mapStateToProps(state){
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Home);