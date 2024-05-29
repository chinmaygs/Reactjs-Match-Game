import React from 'react'

function Match({ matched, setToggle }) {
    return (
        <div className='min-h-screen w-full bg-black bg-opacity-80 ' onClick={() => { setToggle(prev => !prev) }}>
            <div className='grid grid-cols-3 gap-5 pt-52 ml-96 ' >
                {matched.map((image, index) => (
                    <div key={index} className={`relative transition ${index % 2 == 0 ? "-rotate-12 ml-20 -mt-20" : "rotate-12"} duration-500 w-52 h-60`} >
                        <div className={`absolute w-full h-full bg-contain bg-center bg-no-repeat`} style={{ backgroundImage: "url(/Rcardbg.svg)" }}>
                            <img src={image.value} alt="" className='absolut size-28 mx-auto mt-14' disabled={image.flipped} />
                        </div>
                    </div>

                ))}
            </div>
            <img src="/match.svg" alt="" width={500} className='fixed bottom-20 right-16' />
        </div>

    )
}

export default Match