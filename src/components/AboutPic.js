import React from 'react'

export default function AboutPic() {
    return (
    // these are components: containers for UI elements
    // this must be imported in App
    <div className='aboutPic'>
        <div className='profilePic'>
            <img className='pic' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Yj3WbOortcYgbSkGBnIVFAHaHa%26pid%3DApi&f=1" alt="biz photo" />
         </div>
        <div className='intro'>
            <div className='myName'>
                Brionne <span id="lastName">Davis</span>
            </div>
            <div className='title'>
                <p id="jobTitle">Student Developer</p>
            </div>
        </div>
        <div className='info'>
            <div className='calenDate icon'>   
                <img src="" className="icons" id="birthdate" alt=""/>
                <p id='birthdate'>November 3, 1993</p>
            </div>
            <div className='gpsLocation icon'>
                <img src="" className="icons" id="location" alt=""/>
                <p id="location">New York, NY</p>
            </div>
            <div className='git icon'>
                <img src="" className='icons' id="github" alt=""/><br></br>
                <a href="https://github.com/brionnedavis724" className='github'>Github</a>
            </div>
        </div>
        <div className='connect'>
            <button id="connectBtn"><a href="https://www.google.com">Let's work together!</a></button>
        </div>
    </div>
    )
}