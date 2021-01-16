import profileImg from './images/profilePhoto.png'
import photo1 from './images/photo1.png'
import photo2 from './images/photo2.png'
import photo3 from './images/photo3.png'
import photo4 from './images/photo4.png'
import photo5 from './images/photo5.png'
import photo6 from './images/photo6.png'

const Info = ({ number, crit }) => (
  <div className="bg-gray-200 w-24 text-center rounded-xl p-3">
    <div className="text-gray-600">{number}</div>
    <div className="text-gray-400 text-xs">{crit}</div>
  </div>
)

const Image = ({ className, alt, ...props }) => (
  <img className={`rounded-xl shadow-xl ` + className} alt={alt} {...props} />
)

function App() {
  return (
    <div className="grid grid-rows-layout gap-16 min-h-screen max-w-screen-lg font-bold px-4 py-12 mx-auto">
      <div className="flex flex-col items-center">
        <img className="rounded-2xl w-36 mb-4" src={profileImg} alt="user" />
        <h1 className="text-gray-600 text-xl mb-2">Rodney Cotton</h1>
        <h2 className="text-gray-400 text-xs mb-5">Helsinki, Finland</h2>
        <div className="grid grid-cols-3 gap-6">
          <Info number="100" crit="Posts" />
          <Info number="2,242" crit="Follower" />
          <Info number="1,432" crit="Following" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <Image src={photo1} alt="photo1" />
        <Image className="col-span-2" src={photo2} alt="photo1" />
        <Image className="col-span-2" src={photo3} alt="photo1" />
        <Image className="row-span-2" src={photo4} alt="photo1" />
        <Image src={photo5} alt="photo1" />
        <Image src={photo6} alt="photo1" />
      </div>
      <div className="text-center text-xs text-gray-400">
        Tung Teng @ DevChallenges.io
      </div>
    </div>
  )
}

export default App
