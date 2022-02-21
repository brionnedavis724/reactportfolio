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
            <p id='birthdate'>November 3, 1993</p>
            <p id="location">New York, NY</p>
            <p id="github">Github</p>
        </div>
        <div className='email'>Let's work together!</div>
    </div>
    )
}