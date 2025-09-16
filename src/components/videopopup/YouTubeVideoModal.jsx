import { useRef, useId, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function VideoModal({ videoId }) {
  const iframeRef = useRef(null);
  const modalRef = useRef(null);
  const uniqueId = useId();
  const modalId = `videoModal-${uniqueId}`;
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  useEffect(() => {
    const modalEl = modalRef.current;
    if (!modalEl) return;

    const handleShow = () => {
      modalEl.focus({ preventScroll: true });

      requestAnimationFrame(() => {
        if (iframeRef.current) iframeRef.current.src = videoUrl;
      });
    };

    const handleHide = () => {
      if (document.activeElement) {
        document.activeElement.blur();
      }
      if (iframeRef.current) {
        iframeRef.current.src = '';
      }
    };

    modalEl.addEventListener('shown.bs.modal', handleShow);
    modalEl.addEventListener('hide.bs.modal', handleHide);

    return () => {
      modalEl.removeEventListener('shown.bs.modal', handleShow);
      modalEl.removeEventListener('hide.bs.modal', handleHide);
    };
  }, [videoUrl]);

  return (
    <div className="modal_area">
      <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target={`#${modalId}`}
        aria-label="Play video"
      >
        <i className="fa-solid fa-play" aria-hidden="true"></i>
      </button>

      <div
        ref={modalRef}
        className="modal fade"
        id={modalId}
        tabIndex="-1"
        aria-labelledby={`${modalId}-title`}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-body p-0">
              <div className="ratio ratio-16x9">
                <iframe
                  ref={iframeRef}
                  title="Company Introduction Video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  tabIndex="-1"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

VideoModal.propTypes = {
  videoId: PropTypes.string.isRequired,
};
