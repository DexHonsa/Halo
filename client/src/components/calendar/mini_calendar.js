import React from 'react';

class MiniCalendar extends React.Component {

	render() {

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

    

		return(
			<div className="calendar-container">
                  <div className="calendar-title"><i className="fa fa-calendar" />&nbsp;&nbsp;{month} {date}</div>
                  <div className="calendar-previous-week"><i className="fa fa-chevron-left" />&nbsp;&nbsp;Previous Week</div>
                  <div className="calendar-next-week">Next Week&nbsp;&nbsp;<i className="fa fa-chevron-right" /></div>
                  <div className="calendar-content">
                    <div className="calendar-day">
                      <div className="calendar-inner">
                        <div className="calendar-inner-day">27</div>
                      </div>
                    </div>
                    <div className="calendar-day">
                      <div className="calendar-inner">
                        <div className="calendar-inner-day">28</div>
                      </div>
                    </div>
                    <div className="calendar-day">
                      <div className="calendar-inner">
                        <div className="calendar-inner-day">1</div>
                      </div>
                    </div>
                    <div className="calendar-day">
                      <div className="calendar-inner today">
                        <div className="calendar-inner-day">2</div>
                      </div>
                    </div>
                    <div className="calendar-day">
                      <div className="calendar-inner">
                        <div className="calendar-inner-day">3 <span style={{color: '#469df5'}}>Today</span></div>
                      </div>
                    </div>
                    <div className="calendar-day">
                      <div className="calendar-inner">
                        <div className="calendar-inner-day">4</div>
                      </div>
                    </div>
                    <div className="calendar-day">
                      <div className="calendar-inner">
                        <div className="calendar-inner-day">5</div>
                      </div>
                    </div>
                  </div>
                  <a href="calendar.html"><div className="view-full-calendar">View Full Calendar</div></a>
                </div>


			);
	}
}
export default MiniCalendar;