import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { images, alphabets } from '../lib/data'
import Match from './Match'

function Activity() {
  const navigate = useNavigate()
  const [iFlip, setIFlip] = useState(false)
  const [aFlip, setAFlip] = useState(false)
  const [imgCard, setImagCard] = useState([])
  const [alphaCard, setAlphaCard] = useState([])
  const [flipped, setFlipped] = useState('')
  const [matched, setMatched] = useState([])
  const [toggle, setToggle] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    setImagCard(shuffleArray(images))
    setAlphaCard(shuffleArray(alphabets))
  }, []);

  const shuffleArray = (arr) => {
    return arr
      .map((a) => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map((a) => a[1]);
  };


  const handleIFlip = (card) => {
    if (!card.flipped) {
      setFlipped({ ...card, flipped: true })
      setTimeout(() => setFlipped(""), 3000);
      setImagCard(prev =>
        prev.map(item => (item.id === card.id ? { ...card, flipped: true } : item))
      )
      setTimeout(() =>
        setImagCard(prev =>
          prev.map(item => (item.id === card.id ? { ...card, flipped: false } : item))
        )
        , 1000);
      setIFlip(true)
      setTimeout(() => setIFlip(false), 300);
    }

  };

  const handleAFlip = (card) => {
    if (!card.flipped)
      setAlphaCard(prev =>
        prev.map(item => (item.id === card.id ? { ...card, flipped: true } : item))
      )
      setTimeout(() =>
        setAlphaCard(prev =>
          prev.map(item => (item.id === card.id ? { ...card, flipped: false } : item))
        )
        , 1000);
      if (card.id == flipped.id) {
        setCount(prev => prev + 1)
        setToggle(true)
        setMatched([{ ...flipped, matched: true }, { ...card, flipped: true, matched: true }])
        setFlipped('')
        console.log(matched)
        setAlphaCard(prev =>
          prev.filter(item => (item.id !== card.id ? item : ''))
        )
        setImagCard(prev =>
          prev.filter(item => (item.id !== flipped.id ? item : ''))
        )
        setAFlip(true)
        setTimeout(() => setAFlip(false), 300);
        if (count == 5) navigate('/final')
      }

    setAFlip(true);
    setTimeout(() => setAFlip(false), 300);

  };

  return (
    <div className='absolute w-full'>
      <div className={`relative z-20 ${toggle ? "visible" : "invisible"}`}>
        <Match matched={matched} setToggle={setToggle} />
      </div>
      <div className='relative z-0'>
        <img src="/Group 156.svg" alt="" className='size-32 fixed top-10 left-10' onClick={() => navigate("/info")} />
        <div className='flex fixed top-0 left-1/4 -mr-2 '>
          <img src="/Group 148.svg" alt="" width={600} className='' />
          <img src="/Group 154.svg" alt="" width={110} className='-ml-16' />
        </div>
      </div>
      <div className='grid grid-cols-2 gap-36 fixed left-36 top-40'>
        <div className='grid grid-cols-3 gap-5'>
          {imgCard.map((image, index) => (
            <div key={image.id} className={`relative transition-transform duration-500 w-36 h-44 hover:scale-110 
             ${iFlip === true ? index == 0 || index == 1 || index == 2 ? "translate-y-full" : "-translate-y-full" : ""}`} >
              <div className={`absolute w-full h-full bg-contain bg-center bg-no-repeat ${image.flipped ? image.matched ? "invisible" : "visible" : "invisible"}`} style={{ backgroundImage: "url(/Rcardbg.svg)" }}>
                <img src={image.value} alt="" className='size-28 mx-auto mt-5' onClick={() => { handleIFlip(image) }} disabled={image.flipped} />
              </div>
              <div className={`absolute w-full h-full bg-contain bg-center bg-no-repeat z-20 ${image.flipped ? "invisible" : "visible"}`}
                style={{ backgroundImage: "url(/RF.svg)" }} onClick={() => { handleIFlip(image) }} disabled={flipped!==0}>
              </div>
            </div>

          ))}
        </div>
        <div className='grid grid-cols-3 gap-5'>
          {alphaCard.map((alpha, index) => (
            <div key={alpha.id} className={`relative w-36 h-44 transition-transform duration-500 hover:scale-110  
            ${aFlip == true ? index == 0 || index == 1 || index == 2 ? "translate-y-full" : "-translate-y-full" : "translate-y-0"}`}>
              <div className={`absolute w-full h-full bg-contain bg-center bg-no-repeat ${alpha.flipped ? alpha.matched ? "invisible" : "visible" : "invisible"}`} style={{ backgroundImage: "url(/Bcardbg.svg)" }}>
                <img src={alpha.value} alt="" className='size-28 mx-auto mt-5' onClick={() => { handleAFlip(alpha) }} />
              </div>
              <div className={`absolute w-full h-full bg-contain bg-center bg-no-repeat z-20 ${alpha.flipped ? "invisible" : "visible"}`}
                style={{ backgroundImage: "url(/BF.svg)" }} onClick={() => { handleAFlip(alpha) }}>
              </div>
            </div>))}
        </div>
      </div>

    </div>
  )
}

export default Activity