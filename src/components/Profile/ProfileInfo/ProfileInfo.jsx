import React from 'react';
import s from'./ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div >
            <div>
                <img src='https://bogatyr.club/uploads/posts/2023-03/1679470786_bogatyr-club-p-les-panorama-foni-vkontakte-13.jpg' alt='background' />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;
