import React, { memo, useEffect } from 'react'

import ThemeRecommendTitle from '@/components/theme-recommend-title'
import { RankingWrapper } from './style'
import TopRanking from '@/components/top-ranking'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getRecommendRankingAction } from '../../store/action'

export default memo(function RecommendRanking() {

  const { recommendUpRanking, recommendNewRanking, recommendOriginalRanking } = useSelector(state => ({
    recommendUpRanking: state.getIn(["recommend", "recommendUpRanking"]),
    recommendNewRanking: state.getIn(["recommend", "recommendNewRanking"]),
    recommendOriginalRanking: state.getIn(["recommend", "recommendOriginalRanking"])
  }), shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRecommendRankingAction(0))
    dispatch(getRecommendRankingAction(2))
    dispatch(getRecommendRankingAction(3))
  }, [dispatch])

  return (
    <RankingWrapper>
      <ThemeRecommendTitle title={"榜单"} />
      <div className="tops">
        <TopRanking info={recommendUpRanking} />
        <TopRanking info={recommendNewRanking} />
        <TopRanking info={recommendOriginalRanking} />
      </div>
    </RankingWrapper>
  )
})
