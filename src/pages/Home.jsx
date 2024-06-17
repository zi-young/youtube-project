import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Developer from '../components/contents/Developer'
import VideoSlider from '../components/contents/videos'

import {webdText} from '../data/webd'


const Home = () => {
  return (
		<Main 
			title = "웹스토리보이 유튜브"
			description="웹스토리보이 유튜버 사이트에 오신 것을 환영합니다."
		>
			<Today />
			<Developer />
			<VideoSlider videos={webdText} title="😮 웹디자인기능사 준비는 이걸로!" id="wedb" />

		</Main>
  )
}

export default Home