import React from 'react'

import Image from './Image'
import Info from './Info'
import ShowcaseImage from './ShowcaseImage'
import photo1 from './images/photo1.png'
import photo2 from './images/photo2.png'
import photo3 from './images/photo3.png'
import photo4 from './images/photo4.png'
import photo5 from './images/photo5.png'
import photo6 from './images/photo6.png'
import profileImg from './images/profilePhoto.png'

function App() {
  return (
    <div className="grid grid-rows-layout gap-16 min-h-screen max-w-screen-lg font-bold px-4 py-12 mx-auto">
      <div className="flex flex-col items-center">
        <Image
          className="rounded-2xl w-36 mb-4"
          src={profileImg}
          alt="user"
          width={600}
          height={600}
        />
        <h1 className="text-gray-600 text-xl mb-2">Rodney Cotton</h1>
        <h2 className="text-gray-400 text-xs mb-5">Helsinki, Finland</h2>
        <div className="grid grid-cols-3 gap-6">
          <Info number={100} crit="Posts" />
          <Info number={2242} crit="Follower" />
          <Info number={1432} crit="Following" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 md:gap-6">
        <ShowcaseImage
          src={photo1}
          alt="photo1"
          width={600}
          height={600}
          left
        />
        <ShowcaseImage
          className="col-span-2"
          src={photo2}
          alt="photo2"
          width={1258}
          height={600}
          right
        />
        <ShowcaseImage
          className="col-span-2"
          src={photo3}
          alt="photo3"
          width={1258}
          height={600}
          left
        />
        <ShowcaseImage
          className="row-span-2"
          src={photo4}
          alt="photo4"
          width={600}
          height={1258}
          right
        />
        <ShowcaseImage
          src={photo5}
          alt="photo5"
          width={600}
          height={600}
          left
        />
        <ShowcaseImage src={photo6} alt="photo6" width={600} height={600} />
      </div>
      <div className="text-center text-xs text-gray-400">
        Tung Teng @ DevChallenges.io
      </div>
    </div>
  )
}

export default App
