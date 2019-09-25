import React from 'react';

import module from './Advertising.module.css'
import AdvertisingComponent from './AdvertisingComponent/AdvertisingComponent';

const Advertising = props =>{
    return(
        <div className = 'advertising'>
            <h2 className = 'route__header'>advertising</h2>
            <AdvertisingComponent/>
            <AdvertisingComponent/>
            <AdvertisingComponent/>
        </div>
    )
}

export default Advertising;