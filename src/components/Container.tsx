import React from 'react'

const Container = ({children,className}:{children:React.ReactNode,className?:string}) => {
  return (
    <div className='w-6xl px-20'>{children}</div>
  )
}

export default Container