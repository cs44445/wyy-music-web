import React, { useEffect } from 'react'

import SongCover from '@/components/song-cover'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getHotRecommendAction } from '../../store/action'
import { HotRecommendWrapper } from './style'

import ThemeRecommendTitle from '@/components/theme-recommend-title'

export default function HotRecommend() {

  const dispatch = useDispatch()
  const { hotRecommend } = useSelector(state => ({
    hotRecommend: state.getIn(["recommend", "hotRecommend"])
  }), shallowEqual)

  useEffect(() => {
    dispatch(getHotRecommendAction(8))
  }, [dispatch])

  return (
    <HotRecommendWrapper>
      <ThemeRecommendTitle title={"热门推荐"} keywords={["华语", "流行", "摇滚", "民谣", "电子"]} />
      <div className="recommend-list">
        {
          hotRecommend.map((item, index) => {
            return (
              <SongCover info={item} key={item.id} />
            )
          })
        }
      </div>
    </HotRecommendWrapper>

  )
}
