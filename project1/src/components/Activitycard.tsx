import React from 'react'

type Props = {
    heading: string,
    para: string
}

function Activitycard({ heading, para }: Props) {
    return (
        <div className=''>
            <h3 className='text-xl lg:text-2xl font-semibold'>{heading}</h3>
            <p className='text-lg lg:text-2xl' >{para}</p>
        </div>
    )
}

export default Activitycard