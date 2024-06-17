import React from 'react'
import { webdText } from '../../data/web'
import { Link } from 'react-router-dom'

const Webd = () => {
  return (
    <section id='webd'>
		<h2>💛웹디자인기능사 준비는 이걸로!</h2>
		<div className='video__inner'>
			{webdText.map((video, key) => (
				<div className="video" key={key}>
					<div className="video__thumb play__icon">
						<Link to={`/video/${video.videoId}`}>
							<img src={video.img} alt={video.title} />
						</Link>
					</div>
				</div>
			))};
		</div>
	</section>
  )
}

export default Webd