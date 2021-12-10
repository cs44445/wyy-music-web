import React from 'react'

import { SongsCoverWrapper } from './style'

export default function SongCover() {
  return (
    <SongsCoverWrapper>
      <div className="cover-top">
        <img src="https://p1.music.126.net/NzkL10rQODoUNt1wxUF9aQ==/109951166677815897.jpg?param=140y140" />
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon erji"></i>
              45万
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <a href="/#" className="text-des">应该很失落吧 明明相爱却无法在一起应该很失落吧 明明相爱却无法在一起应该很失落吧 明明相爱却无法在一起</a>
    </SongsCoverWrapper>
  )
}
