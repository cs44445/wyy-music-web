import React, { memo } from 'react'

import { AlbumWrapper } from './style'

export default memo(function AlbumCover(props) {
  const { info, size = 130, width = 153, bgp = "-845px" } = props
  return (
    <AlbumWrapper size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <img src={info.picUrl + "?param=100y100"} alt="" />
        <a href="/#" className="cover image_cover">{info.name}</a>
      </div>
      <div className="album-info">
        <a href="/" className="name text-nowrap">{info.name}</a>
        <a href="/" className="artist text-nowrap">{info.artist.name}</a>
      </div>
    </AlbumWrapper>
  )
})
