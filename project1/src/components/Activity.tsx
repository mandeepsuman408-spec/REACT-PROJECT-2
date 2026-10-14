import React from 'react'
import Activitycard from './Activitycard'

const activites = [
    {
        id: 1,
        heading: '10k+',
        para:'Active users',
    },
    {
        id: 2,
        heading: '2.5 millon',
        para:'Tasks completed',
    },
    {
        id: 3,
        heading: '2.5 millon',
        para:'Tasks completed',
    },
    {
        id: 4,
        heading: '2.5 millon',
        para:'Tasks completed',
    },
]

function Activity() {
  return (
      <div className='flex gap-4 justify-between items-center mt-30 text-center'>
          {
              activites.map((activity) => {
                  return (
                      <Activitycard heading={ activity.heading} para={activity.para} key={activity.id}/>
                  )
              })
          }
    </div>
  )
}

export default Activity