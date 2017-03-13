import React from 'react';
import profilePic from '../../../images/John.png';


class EditProfile extends React.Component {
  render() {
    return (
     <main className="main">
        <div className="container">
          <div className="main-wrapper" style={{}}>
            <div className="panel" style={{overflow: 'auto', padding: 0, height: 'calc(100vh - 50px)'}}>
              <div className="col-sm-3" style={{padding: 15, textAlign: 'left', height: '100%', borderRight: 'solid 1px #e0e0e0', paddingTop: 25}}>
                <div className="edit-options-title"><i className="fa fa-gear" />&nbsp;&nbsp;Edit Profile</div>
                <div className="edit-list">
                  <ul>
                    <li id="basic-info" className="active">Basic Info <i className="fa fa-chevron-right" /></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-9" style={{padding: 25, paddingTop: 25}}>
                <div id="basic-info-content" className="basic-info">
                  <div className="edit-main-title">Basic Information</div>
                  <div className="edit-item">
                    <div className="edit-title">Profile Picture</div>
                    <div className="edit-picture-img" style={{backgroundImage: 'url(' + profilePic + ')'}}><div className="overlay"><i className="fa fa-camera" /></div></div>
                  </div>
                  <div className="edit-item">
                    <div className="edit-title">Name</div>
                    <div className="edit-input"><input type="text" defaultValue="Ashley Rhodes" /></div>
                  </div>
                  <div className="edit-item">
                    <div className="edit-title">Phone</div>
                    <div className="edit-input"><input type="text" defaultValue="(760)534-9625" /></div>
                  </div>
                  <div className="edit-item">
                    <div className="edit-title">Email</div>
                    <div className="edit-input"><input type="text" defaultValue="Ashley@theamp.com" /></div>
                  </div>
                  <div className="edit-item">
                    <div className="edit-title">Address</div>
                    <div className="edit-input"><input type="text" defaultValue="4544 San Leandro Ave, San Francisco CA, 94545" /></div>
                  </div>
                </div>
                {/*education*/}
                <div id="education-info-content" className="education-info" style={{display: 'none'}}>
                  <div className="edit-main-title">Education Information</div>
                  <div className="edit-item">
                    <div className="edit-title">Years Attended</div>
                    <div className="edit-input"><input type="text" defaultValue={3} /></div>
                  </div>
                  <div className="edit-item">
                    <div className="edit-title">Program</div>
                    <div className="edit-input"><input type="text" defaultValue="Masters Program" /></div>
                  </div>
                </div>
                {/*work History*/}
                <div id="work-info-content" className="work-info" style={{display: 'none'}}>
                  <div className="edit-main-title">Work Information</div>
                  <div className="edit-item">
                    <div className="edit-title">Current Employer</div>
                    <div className="edit-input"><input type="text" defaultValue="Wells Fargo" /></div>
                  </div>
                  <div className="edit-item">
                    <div className="edit-title">Position</div>
                    <div className="edit-input"><input type="text" defaultValue="Financial Advisor" /></div>
                  </div>
                  <div className="edit-item">
                    <div className="edit-title">Years at Current Job</div>
                    <div className="edit-input"><input type="text" defaultValue={3} /></div>
                  </div>
                  <div className="edit-item">
                    <div className="edit-title">Resume</div>
                    <div className="edit-upload">Upload Resume</div>
                  </div>
                </div>
                <a href="index.html"><div className="save-changes-btn">Save Changes</div></a>
              </div>
            </div>
          </div>
        </div>
      </main>

    );
  }
}

export default EditProfile;
