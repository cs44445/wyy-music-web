// 用redux中的hooks替代
import React, { memo } from 'react'

import Banners from './children/Banners'

function Recommend() {
  return (
    <div>
      <Banners />
    </div>
  )
}

export default memo(Recommend)

// import React, { memo, useEffect } from 'react'
// import { connect } from 'react-redux'

// import { getBannersAction } from './store/action'

// function Recommend(props) {
//   const { getBanners, banners } = props
//   useEffect(() => {
//     getBanners()
//   }, [getBanners])
//   return (
//     <div>
//       <h2>Recommend</h2>
//       {banners.length}
//     </div>
//   )
// }

// const mapStateToProps = state => ({
//   banners: state.recommend.banners
// })

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getBannersAction())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend))
