import React from 'react'

const add = () => {
    return (
        <div className='flex justify-center items-center w-full h-[95.7vh]'>
            <div className='w-[60vw] h-full bg-white text-black flex justify-center items-center flex-wrap'>
                <input className='input' type="text" placeholder='User Name' />
                <input className='input' type="text" placeholder='Email' />
                <input className='input' type="text" placeholder='Password' />
                <select name="jobs" id="jobs">
                    <option value="jobs" disabled>Job Role</option>
                    <option value="junior-developer">Junior Developer</option>
                    <option value="senior-developer">Senior Developer</option>
                    <option value="project-lead">Project Lead</option>
                    <option value="intern">Intern</option>
                    <option value="manager">Manager</option>
                    <option value="hr">HR</option>
                </select>
                <input className='input' type="text" placeholder='Salary' />
                <input className='input' type="datetime-local" placeholder='Joining Date' />
            </div>
        </div>
    )
}

export default add
