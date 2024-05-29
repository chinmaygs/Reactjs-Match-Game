import { useNavigate } from 'react-router-dom'


function Final() {
    const navigate = useNavigate()

    return (
        <div className='min-h-screen bg-contain bg-center bg-no-repeat' style={{ backgroundImage: "url(/Final.svg)" }}>
            <img src="/Group 156.svg" alt="" className='size-32 fixed top-10 left-10' onClick={() => (navigate("/activity"))} />
            <img src="/monkey.svg" alt="" width={215} className='fixed top-64 mt-2 left-1/2 -ml-28' onClick={() => (navigate("/"))} />
        </div>
    )
}

export default Final