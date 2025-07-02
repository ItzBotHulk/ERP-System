import React from 'react'
import Link from 'next/link'

const home = () => {
    return (
        <div className='grid-rows-2 flex my-[10vh]'>
            <div className='w-1/2 h-[60vh] flex justify-center items-center'>
                <div className='border border-black rounded-xl h-[50vh] w-[40vw] flex justify-center items-center bg-violet-500'>
                    <div className="button">
                        <Link href={'/add'}>Add Employee</Link>
                    </div>
                </div>
            </div>
            <div className='w-1/2 flex justify-center items-center'>
                <div className='border border-black rounded-xl h-[50vh] w-[40vw] flex justify-center items-center bg-violet-500'>
                    <div className="button">
                        <Link href={'/find'}>Find Employee</Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default home
