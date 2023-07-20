import React from 'react'

export default function GalleryImage({data}) {
  return (
    <>
        <div className='gallery-image'>
        <img src={data.image.url} />
        </div>
        <div className='gallery-image'>
            <h2>{data.name}</h2>
        </div>
    </>

  )
};
