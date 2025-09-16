import { Link, useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="notfound_area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="notfound_content text-center">
              <div className="notfound_404 mb-4">
                <h1>404</h1>
              </div>
              <h4>Oops! Page Not Found</h4>
              <p>
                Sorry, the page you are looking for might have been removed or is temporarily
                unavailable.
              </p>
              <div className="notfound_buttons">
                <button onClick={handleGoBack} className="tem_btn tem_btn_border_three">
                  Go Back
                </button>
                <Link to="/" className="tem_btn tem_btn_two">
                  Go Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
