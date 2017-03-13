import React from 'react';
import profile from '../../../images/136.jpg';


class Followers extends React.Component {
  render() {
    return (
     	<main className="main">
        <div className="container">
          <div className="main-wrapper" style={{textAlign: 'center'}}>
            <div className="panel" style={{overflow: 'hidden', textAlign: 'left', minHeight: 700, padding: 0, paddingTop: 25}}>
              <div className="tab-selector" style={{textAlign: 'left', borderBottom: 'solid 1px #e0e0e0', paddingTop: 5}}>
                <div id="followers" className="tab-selector-tab active">Followers</div>
                <div id="following" className="tab-selector-tab">Following</div>
              </div>
              {/*follower panel*/}
              <div className="follower-content">
                <div className="follower-row">
                  <div className="follower-item">
                    <div className="follower-img" style={{backgroundImage: profile}} />
                    <div className="follower-name"><i style={{color: '#1CCE4D', fontSize: '6pt'}} className="fa fa-circle" /> Jacob Fridley<br /><span>AMP Technologies</span><br /><div className="follower-count"><span style={{color: '#aaa'}} className="glyphicon glyphicon-user" aria-hidden="true" /> 232</div></div>
                  </div>
                  <div className="follower-item">
                    <div className="follower-img" style={{backgroundImage: profile}} />
                    <div className="follower-name"><i style={{color: '#1CCE4D', fontSize: '6pt'}} className="fa fa-circle" /> John Grey<br /><span>Wells Fargo</span><br /><div className="follower-count"><span style={{color: '#aaa'}} className="glyphicon glyphicon-user" aria-hidden="true" /> 45</div></div>
                  </div>
                  <div className="follower-item">
                    <div className="follower-img" style={{backgroundImage: profile}} />
                    <div className="follower-name"><i style={{color: '#1CCE4D', fontSize: '6pt'}} className="fa fa-circle" /> Barry Drewe<br /><span>Wells Fargo</span><br /><div className="follower-count"><span style={{color: '#aaa'}} className="glyphicon glyphicon-user" aria-hidden="true" /> 234</div></div>
                  </div>
                  <div className="follower-item">
                    <div className="follower-img" style={{backgroundImage: profile}} />
                    <div className="follower-name">Hank Numer<br /><span>Wells Fargo</span><br /><div className="follower-count"><span style={{color: '#aaa'}} className="glyphicon glyphicon-user" aria-hidden="true" /> 112</div></div>
                  </div>
                  <div className="follower-item">
                    <div className="follower-img" style={{backgroundImage: profile}} />
                    <div className="follower-name">Brad Fulmer<br /><span>AMP Technologies</span><br /><div className="follower-count"><span style={{color: '#aaa'}} className="glyphicon glyphicon-user" aria-hidden="true" /> 87</div></div>
                  </div>
                  <div className="follower-item">
                    <div className="follower-img" style={{backgroundImage: profile}} />
                    <div className="follower-name">Nicole James<br /><span>AMP Technologies</span><br /><div className="follower-count"><span style={{color: '#aaa'}} className="glyphicon glyphicon-user" aria-hidden="true" /> 33</div></div>
                  </div>
                </div>
                <div className="follower-row">
                  <div className="follower-item">
                    <div className="follower-img" style={{backgroundImage: profile}} />
                    <div className="follower-name">Jason Wills<br /><span>Johnson &amp; Johnson</span><br /><div className="follower-count"><span style={{color: '#aaa'}} className="glyphicon glyphicon-user" aria-hidden="true" /> 234</div></div>
                  </div>
                  <div className="follower-item">
                    <div className="follower-img" style={{backgroundImage: profile}} />
                    <div className="follower-name">Victor Eisner<br /><span>Telamerica</span><br /><div className="follower-count"><span style={{color: '#aaa'}} className="glyphicon glyphicon-user" aria-hidden="true" /> 544</div></div>
                  </div>
                  <div className="follower-item">
                    <div className="follower-img" style={{backgroundImage: profile}} />
                    <div className="follower-name"><i style={{color: '#1CCE4D', fontSize: '6pt'}} className="fa fa-circle" /> Gary Busy<br /><span>The M Group</span><br /><div className="follower-count"><span style={{color: '#aaa'}} className="glyphicon glyphicon-user" aria-hidden="true" /> 123</div></div>
                  </div>
                  <div className="follower-item">
                    <div className="follower-img" style={{backgroundImage: profile}} />
                    <div className="follower-name"><i style={{color: '#1CCE4D', fontSize: '6pt'}} className="fa fa-circle" /> Kevin Randall<br /><span>The M Group</span><br /><div className="follower-count"><span style={{color: '#aaa'}} className="glyphicon glyphicon-user" aria-hidden="true" /> 55</div></div>
                  </div>
                  <div className="follower-item">
                  </div>
                  <div className="follower-item">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    );
  }
}

export default Followers;
