import React from 'react'

const add = () => {
    return (
        <div className='flex justify-center items-center w-full h-[95.7vh]'>
            <div className='w-[60vw] h-full bg-white text-black flex justify-center items-center flex-wrap'>
                <div className='mx-25'>
                    <div className='flex'>
                        <h2>Employee User Name: </h2>
                    </div>
                    <input className='input' type="text" placeholder='User Name' />
                </div>
                <div className='mx-25'>

                    <div>
                        <h2>Employee Email id:</h2>
                    </div>
                    <input className='input' type="text" placeholder='Email' />
                </div>
                <div className='mx-25'>

                    <div>
                        <h2>Alot a password: </h2>
                    </div>
                    <input className='input' type="text" placeholder='Password' />
                </div>
                <div className='mx-25'>

                    <div>
                        <h2>Job Role</h2>
                    </div>
                    <select className='input' name="jobs" id="jobs">
                        <option value="jobs" disabled>Job Role</option>
                        <option value="junior-developer">Junior Developer</option>
                        <option value="senior-developer">Senior Developer</option>
                        <option value="project-lead">Project Lead</option>
                        <option value="intern">Intern</option>
                        <option value="manager">Manager</option>
                        <option value="hr">HR</option>
                    </select>
                </div>
                <div className='mx-25'>

                    <div>
                        <h2>Salary</h2>
                    </div>
                    <input className='input' type="text" placeholder='Salary' />
                </div>
                <div className='mx-25'>

                    <div>
                        <h2>Date and Time of Joining</h2>
                    </div>
                    <input className='input' type="datetime-local" placeholder='Joining Date' />
                </div>
                <div className='border border-black mx-25'>
                <button type='submit'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default add
