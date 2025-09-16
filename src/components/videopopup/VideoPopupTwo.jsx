import videoPopupBg from '/images/video.jpg';
import VideoModal from './YouTubeVideoModal';

export default function VideoPopupTwo() {
  return (
    <section
      className="video_section_two"
      style={{
        backgroundImage: `url(${videoPopupBg})`,
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="video_content_two">
              <h2>
                Watch our video tutorial orem ipsum dolor sit amet consectetur adipiscing elit.
              </h2>
              <VideoModal videoId="i8leeedH71c" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
