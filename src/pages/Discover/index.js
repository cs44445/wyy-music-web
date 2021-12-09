import React, { memo } from 'react'
import { NavLink, Outlet } from 'react-router-dom'


import { DiscoverWrapper, TopMenu } from './style'
import { discoverList } from '@/utils/data'

export default memo(function Discover() {
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {
            discoverList.map((item, index) =>
              <div key={item.title} className="item">
                <NavLink to={item.link}> {item.title}</NavLink>
              </div>)
          }
        </TopMenu>
      </div>
      <Outlet />
    </DiscoverWrapper>
  )
})