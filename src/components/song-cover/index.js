import React from 'react'

import { SongsCoverWrapper } from './style'

import { getCount } from '../../utils/data-format'

export default function SongCover(props) {
  const { info } = props
  return (
    <SongsCoverWrapper>
      <div className="cover-top">
        <img src={info.picUrl + '?param=140y140'} alt="" />
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <a href="/#" className="text-des">{info.name}</a>
    </SongsCoverWrapper>
  )
}
