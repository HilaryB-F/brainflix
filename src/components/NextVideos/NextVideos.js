import "./NextVideos.scss";
import {Link} from 'react-router-dom'

function NextVideos(props) {
  let id = props.videoId

  return (
    <>
    {props.nextVideo.filter ((upcomingVideo) => {
      return upcomingVideo.id !== id;})

      .map((upcomingVideo)=>{
        return (
          <Link to = {`/videoplayer/${upcomingVideo.id}`} key={upcomingVideo.id} className = "next-video__link">
          <div className="next-video__container">
            <img
              id={upcomingVideo.id}
              className="next-video__thumbnail"
              alt={upcomingVideo.title}
              src={upcomingVideo.image}
            />
            <div className="next-video__info">
              <p className="next-video__title" >
                {upcomingVideo.title}
              </p>
              <p className="next-video__name">
                {upcomingVideo.channel}
              </p>
            </div>
          </div>
          </Link>
        );
      })
  }
  </>
  )
}


export default NextVideos;
