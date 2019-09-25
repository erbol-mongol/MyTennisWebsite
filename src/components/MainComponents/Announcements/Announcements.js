import React from 'react';
import module from './Announcements.module.css';
import AnnouncementComponent from './AnnouncementComponent/AnnouncementComponent';


const Announcements = props =>{
    return (
        <div className = 'announcements'>
            <h2 className = 'route__header'>announcements</h2>
            <AnnouncementComponent/>
            <AnnouncementComponent/>
            <AnnouncementComponent/>
        </div>
    )
}

export default Announcements;