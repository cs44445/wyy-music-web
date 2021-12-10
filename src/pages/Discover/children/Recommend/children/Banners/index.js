import React, { memo, useState, useCallback, useEffect, useRef } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { Carousel } from 'antd'

import { getBannersAction } from '../../store/action'
import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
} from './style'

export default memo(function Banners() {
  // state
  const [currentIndex, setCurrentIndex] = useState(0)

  // 组件和redux关联：获取数据和进行操作
  const { banners } = useSelector(state => ({
    banners: state.getIn(["recommend", "banners"])
  }), shallowEqual)
  const dispatch = useDispatch()

  // 其他hooks
  const CarouselRef = useRef()
  useEffect(() => {
    dispatch(getBannersAction())
  }, [dispatch])

  // 其他业务逻辑
  const showBackImg = useCallback((from, to) => {
    setCurrentIndex(to)
  }, [])
  const backImg = banners[currentIndex] && (banners[currentIndex].imageUrl + '?imageView&blur=40x20')

  return (
    <BannerWrapper backImg={backImg}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel ref={CarouselRef} autoplay beforeChange={showBackImg}>
            {
              banners.map((item, index) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img src={item.imageUrl} alt="" className="image" />
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight />
        <BannerControl>
          <button type="" className="btn left" onClick={() => CarouselRef.current.prev()}></button>
          <button type="" className="btn right" onClick={() => CarouselRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper >
  )
})
