import useSound from 'use-sound';
import { useNavigate } from 'react-router-dom'
import gameStart from '../sounds/game-start.mp3';

function Instruction() {
  const [play, {stop}] = useSound(gameStart);
  const navigate = useNavigate()
  return (
    <div>
      <img src="/Group 156.svg" alt="" className='size-32 fixed top-10 left-10' onClick={() => (navigate("/"))} />
      <div className='flex fixed top-0 left-1/4 -mr-2 '>
        <img src="/Group 148.svg" alt="" width={600} className='' />
        <img src="/Group 154.svg" alt="" width={110} className='-ml-16' />
      </div>
      <div className='absolute bottom-32 -mb-2 left-44'>
        <div className='relative z-20'>
          <div className='-mb-5 ml-10 flex gap-24 '>
            <div className='relative w-60 h-80 transition duration-500 hover:-translate-y-20'>
              <img src="/Rectangle160.svg" alt="" className='w-full h-full' />
              <img src="/card.svg" alt="" className='absolute top-6 left-7 size-40' />
              <img src="/aicard.svg" alt="" className='absolute top-4 left-16 size-40' />
              <div className='absolute top-48 ml-12 w-40 text-3xl font-semibold mx-3 text-center' style={{ color: "#11AEC6" }}>Select a pink card.</div>
              <div className='absolute bottom-6 ml-12 w-40 text-xl font-semibold mx-3 text-center' style={{ color: "#A6C930" }}>It has images.</div>
              <img src="/Group 41.svg" alt="" className='absolute top-48 size-14' />
            </div>
            <div className='relative w-60 h-80 transition duration-500 hover:-translate-y-20'>
              <img src="/Rectangle160.svg" alt="" className='w-full h-full' />
              <img src="/bluecard.svg" alt="" className='absolute top-6 left-9 size-40' />
              <div className='absolute top-48 ml-12 w-40 text-3xl font-semibold mx-3 text-center' style={{ color: "#11AEC6" }}>Select a blue card.</div>
              <div className='absolute bottom-6 ml-12 w-40 text-xl font-semibold mx-3 text-center' style={{ color: "#A6C930" }}>It has alphabets.</div>
              <img src="/Group 667.svg" alt="" className='absolute top-48 size-14' />
            </div>
            <div className='relative w-60 h-80 transition duration-500 hover:-translate-y-20'>
              <img src="/Rectangle160.svg" alt="" className='w-full h-full' />
              <img src="/Group 157.svg" alt="" className='absolute top-7 left-5 size-52' />
              <div className='absolute top-52 ml-12 w-40 text-md font-semibold mx-3 text-center' style={{ color: "#A6C930" }}>If they're same</div>
              <div className='absolute top-56 mt-1 ml-12 w-40 text-2xl font-semibold mx-3 text-center' style={{ color: "#11AEC6" }}>Its a match !</div>
              <div className='absolute bottom-9 ml-12 w-40 text-md font-semibold mx-3 text-center' style={{ color: "#A6C930" }}>otherwise retry :(</div>
              <img src="/Group 41.svg" alt="" className='absolute top-48 size-14' />
            </div>
          </div>
        </div>
        <img src="/Frame 17.svg" alt="" width={1000} className='relative z-10' />
      </div>
      <div className=''>
        <img src="/Play.svg" alt="" width={300} className='absolute bottom-5 right-44' onClick={() =>{play(); navigate("/activity")}} />
      </div>
    </div>
  )
}

export default Instruction