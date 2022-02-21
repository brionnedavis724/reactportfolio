import React from 'react'

export default function AboutPic() {
    return (
    // these are components: containers for UI elements
    // this must be imported in App
    <div className='aboutPic'>
        <div className='intro'>
            React Portfolio, <span id="name">Brionne Davis</span>
        </div>
         <div className='profilePic'>
            <img className='pic' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Yj3WbOortcYgbSkGBnIVFAHaHa%26pid%3DApi&f=1" alt="biz photo" />
         </div>
    </div>
    )
}