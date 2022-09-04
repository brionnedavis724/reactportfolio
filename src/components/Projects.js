// import react
import React from 'react'
import nftHW from '../images/nftHW.png'
import basicPortfolio from '../images/basicPortfolio.png'
import myNFT from '../images/myNFT.jpg'
import tipCalc from '../images/tipCalc.jpg'
import tipCalcRange from '../images/tipCalcRange.jpg'
import reactPortfolio from '../images/reactPortfolio.jpg'


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
                {/* <img id="thumbnails" src='./basicPortfolio.png' alt="basicPortfolio" /> */}
                <img id="thumbnails" src={basicPortfolio} alt="basicPortfolio" />
            </a>
            <a href="https://nfthw.netlify.app/">
                {/* <img id="thumbnails" src='./nftHW.png' alt="nftHW" /> */}
                <img id="thumbnails" src={nftHW} alt="nftHW" />
            </a>
            <a href="https://github.com/brionnedavis724/myNFT.git">
                {/* <img id="thumbnails" src='./myNFT.jpg' alt="myNFT" /> */}
                <img id="thumbnails" src={myNFT} alt="myNFT" />
            </a>
            <a href="https://tipcalculatorbdavis.netlify.app/">
                {/* <img id="thumbnails" src='./tipCalc.jpg' alt="tipCalc" /> */}
                <img id="thumbnails" src={tipCalc} alt="tipCalc" />
            </a>
            <a href="https://tipcalculatorbdavis.netlify.app/">
                {/* <img id="thumbnails" src='./tipCalcRange.jpg' alt="tipCalcRange"/> */}
                <img id="thumbnails" src={tipCalcRange} alt="tipCalcRange" />
            </a>
            <a href="https://github.com/brionnedavis724/reactportfolio">
                {/* <img id="thumbnails" src='reactPortfolio.jpg' alt="reactPortfolio" /> */}
                <img id="thumbnails" src={reactPortfolio} alt="reactPortfolio" />
            </a>
            {/* <img id="thumbnails" src='' alt="projects" /> */}
        </div>
    </div>
  )
}