import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { images, alphabets } from '../lib/data'
import Match from './Match'
import gamematch from '../sounds/game-match.mp3';
import gamenomatch from '../sounds/game-notMatch.mp3';
import gamebonus from '../sounds/game-bonus.mp3';
import click from '../sounds/click.mp3';
import useSound from 'use-sound';

function Activity() {
  const [play, {stop}] = useSound(gamematch);
  const [playn, {stopn}] = useSound(gamenomatch);
  const [playb, {stopb}] = useSound(gamebonus);
  const [playc, {stopc}] = useSound(click);
  const navigate = useNavigate()
  const [iFlip, setIFlip] = useState(false)
  const [aFlip, setAFlip] = useState(false)
  const [imgCard, setImagCard] = useState([])
  const [alphaCard, setAlphaCard] = useState([])
  const [flipped, setFlipped] = useState('')
  const [matched, setMatched] = useState([])
  const [toggle, setToggle] = useState(false)
  const [count, setCount] = useState(0)

  // SHUFFLE CARDS

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

// FUNCTION TO HANDLE IMAGE FLIP

  const handleIFlip = (card) => {
    playc()
    if (!card.flipped) {
      setFlipped({ ...card, flipped: true });
      setImagCard(prev =>
        prev.map(item => (item.id === card.id ? { ...card, flipped: true } : item))
      )
      setIFlip(true)
      setTimeout(() => setIFlip(false), 300);
    }

  };

  // FUNCTION TO HANDLE CARD FLIP

  const handleAFlip = (card) => {
    playc()
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
        play()
        setToggle(true)
        setMatched([{ ...flipped, matched: true }, { ...card, flipped: true, matched: true }])
        matched ? setCount(prev => prev + 1) : ''
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
        if (count == 5) {
          navigate('/final')
          setTimeout(()=>{playb()},500)
        }
        }
      if (card.id !== flipped.id){
        playn()
      }
    setTimeout(() => {
      setImagCard(prev =>
        prev.map(item => (item.id === flipped.id ? { ...item, flipped: false } : item))
      )
      
      setFlipped("")
    }, 500); 
    setAFlip(true);
    setTimeout(() => setAFlip(false), 300);

  };

  return (
    <div className='absolute w-full'>
      {/* DISPLAY OF MATCHED CARDS */}
      <div className={`relative z-20 ${toggle ? "visible" : "invisible"}`}>
        <Match matched={matched} setToggle={setToggle} />
      </div>
      {/* HEADER SECTION */}
      <div className='relative z-0'>
        <img src="/Group 156.svg" alt="" className='size-32 fixed top-10 left-10' onClick={() => navigate("/info")} />
        <div className='flex fixed top-10 left-2/4 w-full -ml-48 '>
          <div className='h-10 w-3/5 bg-no-repeat bg-contain -ml-28 -mt-2 ' style={{backgroundImage:"url(/loadbox.svg)"}}>
          <img src="/load.svg" alt="" className={count===4||count===5?`visible`:`invisible`}  />
          </div>
          <img src="/Group 154.svg" alt="" width={120} className='-ml-48 -mt-5' />
        </div>
      </div>
      <div className='grid grid-cols-2 gap-36 fixed left-36 top-40'>
        {/* IMAGE CARDS */}
        <div className='grid grid-cols-3 gap-5'>
          {imgCard.map((image, index) => (
            <div key={image.id} className={`relative transition-transform duration-500 w-36 h-44 hover:scale-110 
             ${iFlip === true ? index == 0 || index == 1 || index == 2 ? "translate-y-full" : "-translate-y-full" : ""}`} >
              <div className={`absolute w-full h-full bg-contain bg-center bg-no-repeat ${image.flipped ? image.matched ? "invisible" : "visible" : "invisible"}`} style={{ backgroundImage: "url(/Rcardbg.svg)" }}>
                <img src={image.value} alt="" className='size-28 mx-auto mt-5' onClick={() => { handleIFlip(image) }} disabled={image.flipped} />
              </div>
              <button className={`absolute w-full h-full bg-contain bg-center bg-no-repeat z-20 ${image.flipped ? "invisible" : "visible"}`}
                style={{ backgroundImage: "url(/RF.svg)" }} onClick={() => { handleIFlip(image) }} disabled={flipped.flipped===true}/>
              </div>

          ))}
        </div>
        {/* ALPHABET CARDS */}
        <div className='grid grid-cols-3 gap-5'>
          {alphaCard.map((alpha, index) => (
            <div key={alpha.id} className={`relative w-36 h-44 transition-transform duration-500 hover:scale-110  
            ${aFlip == true ? index == 0 || index == 1 || index == 2 ? "translate-y-full" : "-translate-y-full" : "translate-y-0"}`}>
              <div className={`absolute w-full h-full bg-contain bg-center bg-no-repeat ${alpha.flipped ? alpha.matched ? "invisible" : "visible" : "invisible"}`} style={{ backgroundImage: "url(/Bcardbg.svg)" }}>
                <img src={alpha.value} alt="" className='size-28 mx-auto mt-5' onClick={() => { handleAFlip(alpha) }} />
              </div>
              <button className={`absolute w-full h-full bg-contain bg-center bg-no-repeat z-20 ${alpha.flipped ? "invisible" : "visible"}`}
                style={{ backgroundImage: "url(/BF.svg)" }} onClick={() => { handleAFlip(alpha) }} disabled={flipped.flipped!==true}/>
            </div>))}
        </div>
      </div>

    </div>
  )
}

export default Activity