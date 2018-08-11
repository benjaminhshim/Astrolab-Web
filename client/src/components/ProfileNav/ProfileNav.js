import React from 'react';
import './ProfileNav.css';
import { Link } from 'react-router-dom';
import Arrow from './profilenav.json';

const ProfileNav = () => (
    <nav className="dt w-100 border-box">
        <div className="dtc v-mid w-75 profile-nav" >

            <article className="dt w-100 b--black-05 pb2 mt2 layers-item" href="#0">
                

                <div className="dtc v-mid ">
                    <h1 className="f6 f5-ns lh-title mv0">
                        <Link to="/profile/settings" className="link dib mr3 mr4-ns nav-item">Profile Settings</Link> 
                    </h1>
                </div>

                <div className="dtc v-mid tr">
                    <img className="f6 profile-arrow h-10 pointer pv1" src={Arrow[0].icon} alt="" />
                </div>
            </article>

            <article className="dt w-100 b--black-05 pb2 mt2 layers-item" href="#0">
                <div className="dtc v-mid ">
                    <h1 className="f6 f5-ns lh-title mv0">
                        <Link to="/profile/notifications" className="link dib mr3 mr4-ns nav-item">Notifications</Link> 
                    </h1>
                </div>

                <div className="dtc v-mid tr">
                    <img className="f6 profile-arrow h-10 pointer pv1 " src={Arrow[0].icon} alt="" />
                </div>
            </article>

     

            <article className="dt w-100 b--black-05 pb2 mt2 layers-item" href="#0">
                <div className="dtc v-mid ">
                    <h1 className="f6 f5-ns lh-title mv0">
                        <Link to="/profile/review-history" className="link dib mr3 mr4-ns nav-item">View Review History</Link> 
                    </h1>
                </div>

                <div className="dtc v-mid tr">
                    <img className="f6 profile-arrow h-10 pointer pv1 " src={Arrow[0].icon} alt="" />
                </div>
            </article>

            <article className="dt w-100 b--black-05 pb2 mt2 layers-item" href="#0">
                <div className="dtc v-mid ">
                    <h1 className="f6 f5-ns lh-title mv0">
                        <Link to="/profile/permissions" className="link dib mr3 mr4-ns nav-item">Manage Permissions</Link> 
                    </h1>
                </div>

                <div className="dtc v-mid tr">
                    <img className="f6 profile-arrow h-10 pointer pv1 " src={Arrow[0].icon} alt="" />
                </div>
            </article>

            <article className="dt w-100 b--black-05 pb2 mt2 layers-item" href="#0">
                <div className="dtc v-mid ">
                    <h1 className="f6 f5-ns lh-title mv0">     
                        <Link to="/profile/logout" className="link dib nav-item" >Log Out</Link> 
                    </h1>
                </div>

                <div className="dtc v-mid tr">
                    <img className="f6 profile-arrow h-10 pointer pv1 " src={Arrow[0].icon} alt="" />
                </div>
            </article>




           
            
           
   
        </div>
    </nav>
);

export default ProfileNav;