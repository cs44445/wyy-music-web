import React, { memo, useEffect, useRef } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { Carousel } from 'antd'
import ThemeRecommendTitle from '@/components/theme-recommend-title'
import { AlbumWrapper } from './style'

import { getNewAlbumAction } from '../../store/action'
import AlbumCover from '../../../../../../components/album-cover'

export default memo(function Album() {
  const { newAlbum } = useSelector(state => ({
    newAlbum: state.getIn(["recommend", "newAlbum"])
  }), shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getNewAlbumAction(10))
  }, [dispatch])

  const pageRef = useRef()

  return (
    <AlbumWrapper>
      <ThemeRecommendTitle title={"新碟上架"} />
      <div className="content">
        <button className="arrow arrow-left sprite_02" onClick={e => pageRef.current.prev()}></button>
        <div className="album">
          <Carousel ref={pageRef} dots={false}>
            {
              [0, 1].map((item, index) => {
                return (
                  <div key={item} className="page">
                    {
                      newAlbum.slice(item * 5, (item + 1) * 5).map(iten => {
                        return <AlbumCover info={iten} size={100} width={118} bgp="-570px" key={iten.name} />
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <button className="arrow arrow-right sprite_02" onClick={e => pageRef.current.next()}></button>
      </div>

    </AlbumWrapper>
  )
})