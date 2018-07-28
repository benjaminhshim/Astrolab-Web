import React, {Component} from 'react';
import './ProfileNav.css';
import { Link } from 'react-router-dom';


const ProfileNav = () => (
    <nav className="dt w-100 border-box pa3 ph5-ns">
        <div className="dtc v-mid w-75" >
            <ul>
                <li><Link to="/profile/settings" className="link dib mr3 mr4-ns nav-item">Profile Settings</Link></li>
                <li><Link to="/profile/notifications" className="link dib mr3 mr4-ns nav-item">Notifications</Link></li>
                <li ><Link to="/profile/review-history" className="link dib mr3 mr4-ns nav-item">View Review History</Link></li>
                <li><Link to="/profile/permissions" className="link dib mr3 mr4-ns nav-item">Manage Permissions</Link></li>
                <li><Link to="/profile/logout" className="link dib nav-item" >Log Out</Link></li>
            </ul>
        </div>
    </nav>
);

export default ProfileNav;