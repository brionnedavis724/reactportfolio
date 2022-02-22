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
            <a href="https://mybasicportfolio.netlify.app/">
                <img id="thumbnails" src='./basicPortfolio.png' alt="projects" />
            </a>
            <a href="https://nfthw.netlify.app/">
                <img id="thumbnails" src='./nftHW.png' alt="projects" />
            </a>
            <a href="https://github.com/brionnedavis724/myNFT.git">
                <img id="thumbnails" src='./myNFT.jpg' alt="projects" />
            </a>
            <a href="https://tipcalculatorbdavis.netlify.app/">
                <img id="thumbnails" src='./tipCalc.jpg' alt="projects" />  
            </a>
            <a href="https://tipcalculatorbdavis.netlify.app/">
                <img id="thumbnails" src='./tipCalcRange.jpg' alt="projects"/>
            </a>
            <a href="https://github.com/brionnedavis724/reactportfolio">
                <img id="thumbnails" src='reactPortfolio.jpg' alt="projects" />
            </a>
            {/* <img id="thumbnails" src='' alt="projects" /> */}
        </div>
    </div>
  )
}