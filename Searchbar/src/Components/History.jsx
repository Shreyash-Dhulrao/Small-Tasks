import React from 'react'
import { useSelector } from 'react-redux'

const History = () => {
    const data = useSelector(items=> items.history.newHistory || [])
    console.log(data)
  return (
    <div>
      {data.map((item, index) => (
          <div key={index}>
            {item}
          </div>
        ))}
    </div>
  )
}

export default History
