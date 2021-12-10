import React from 'react'
import { HeaderWrapper } from './style'

export default function ThemeRecommendTitle(props) {
  const { title, keywords = [] } = props
  // keywords = []设置默认值，否则遍历会报错
  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {
            keywords.map((item, index) => {
              return (
                <div key={item}>
                  <a href="/#">{item}</a>
                  {index === keywords.length - 1 ? '' : <span className="divider">|</span>}
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="right">
        <a href="/#">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  )
}
