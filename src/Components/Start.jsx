import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Start() {
    const [start, setStart] = useState('START')
    const navigate = useNavigate()
  return (
    <div>
        <img src="/Group 156.svg" alt=""  onClick={() => navigate('/')} className={`size-32 fixed top-10 left-10 cursor-pointer ${start==="YES" ? 'visible':'invisible'}`} />
        <div className={`flex fixed top-0 left-1/4 -mr-2 ${start==="YES" ? 'visible':'invisible'}`}>
        <img src="/Group 148.svg" alt="" width={600} className=''/>
        <img src="/Group 154.svg" alt="" width={110} className='-ml-16 ' />
        </div>
        {start==='START' ?
      <div  className='absolute right-52 top-14'>
      <img src="/Group 149.svg" alt="" width={400} className='relative top-3'/>
      <div className='relative bottom-32 left-14 text-cyan-500 text-4xl font-semibold' >
         Welcome Kiddo !
        </div>
      </div>:
      start==='NEXT'?
            <div  className='absolute right-52 top-14'>
            <img src="/Group 149.svg" alt="" width={400} className='relative top-3 left-5'/>
            <div className='relative flex bottom-36 left-20 text-cyan-500 text-3xl font-semibold
             scale-100 duration-500'>
        Hi, I'm Mizzo !<br/> and I love bananas
        <img src="/Group 155.svg" alt="" className='size-14 mt-6 -ml-3' />
              </div>
              
            </div>
        :    
        <div  className='absolute right-52 top-14'>
        <img src="/Group 149.svg" alt="" width={400} className='relative top-3'/>
        <div className='relative flex bottom-36 left-14 text-cyan-500 text-3xl font-semibold
         scale-100 duration-500
        ' >
        Can you help me get <br/> some ?
        <img src="/Emoji.svg" alt="" className='size-8 mt-10 -ml-44' />
          </div>
          
        </div>
        }
      <div className='fixed top-36 right-96'>
      <img src="/Vector 123.svg" alt="" className='absolute top-64 mt-4 mr-4 right-52  opacity bg-blend-screen' width={600}/>
      {start==='START' ?
      <img src="/monkey.svg" alt="" width={500.91} className='relative'/>:
      start==='NEXT' ?
      <img src="/monkey.svg" alt="" width={500.91} className='relative pr-5' />:
      <img src="/monkey.svg" alt="" width={500.91} className='relative' /> }
      </div> 
      <div className='flex flex-col gap-1 fixed bottom-10 left-36'>
        <div className="flex flex-row gap-28 ml-16 size-6">
        <img src="/Ellipse 309.svg" alt="" className='mt-2'/>  
        <img src="/Ellipse 308.svg" alt="" className='ml-5'/>
        </div>
        <div className="flex flex-row gap-28 size-12 mb-2">
        <img src="/Cog.svg" alt="" />
        <img src="/Star.svg" alt="" />
        </div>
        <div className='flex flex-row gap-40 size-3 -ml-5'>
        <img src="/Ellipse 310.svg" alt="" />
        <img src="/Ellipse 307.svg" alt="" />
        </div>
      </div>
      <div>{start==='START'?
        <img src="/Group 123.svg" alt="" width={300} className='fixed bottom-7 right-44 cursor-pointer' onClick={()=>setStart('NEXT')}/>
        : 
        start==='YES'?
        <img src="/Yes.svg" alt="" width={300} className='fixed bottom-7 right-44 cursor-pointer' onClick={()=>navigate('/info')}/>    
        :
        <img src="/next.svg" alt="" width={300} className='fixed bottom-7 right-44 cursor-pointer' onClick={()=>setStart('YES')}/>
            }
        </div>
    </div>
  )
}

export default Start