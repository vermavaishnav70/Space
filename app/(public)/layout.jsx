import React from 'react'

const PublicLayout = ({
    children
}) => {
  return (
    <div className='h-full dark:bg-[#1F1F1F]'>
        {children}
    </div>
  )
}

export default PublicLayout