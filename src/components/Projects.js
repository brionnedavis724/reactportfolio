// import react
import React from 'react'
// import images from './components/Images.js'

export default function Projects() {
  return (
    // these are components: containers for UI elements
    // this must be imported in App
    <div className='projects'>
        {/* <div className='projectTitle'>
            <h2>Portfolio</h2>
        </div> */}
        <div className='thumbnailDiv'>
            <img id="thumbnails" src='./basicPortfolio.png' alt="projects" />
            <img id="thumbnails" src='./nftHW.png' alt="projects" />
            <img id="thumbnails" src='./myNFT.jpg' alt="projects" />
            <img id="thumbnails" src='./tipCalc.jpg' alt="projects" />
            <img id="thumbnails" src='./tipCalcRange.jpg' alt="projects" />
            {/* <img id="thumbnails" src='' alt="projects" />
            <img id="thumbnails" src='' alt="projects" /> */}
        </div>
    </div>
  )
}