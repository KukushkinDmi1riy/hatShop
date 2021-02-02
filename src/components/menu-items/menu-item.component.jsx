import React from 'react';
import { withRouter } from 'react-router-dom'

import './menu-item.styless.scss'

const MenuItem =({title, imageUrl, size, history, linkURL, match}) => (
    <div className={`${size} menu-item`}
         onClick={()=>history.push(`${match.url}${linkURL}`)}>
        <div className = 'background-image' style={{
        backgroundImage: `url(${imageUrl})`
        }} />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(MenuItem);