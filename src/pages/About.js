import rightImage from '../assets/images/banner-right-image-1.png';

export default function About() {
  return (
    <div
        className="main-banner wow fadeIn"
        id="top"
        data-wow-duration="1s"
        data-wow-delay="0.5s"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 align-self-center">
                  <div
                    className="left-content header-text wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay="1s"
                  >
                    
                    <h2>
                      Crafting <em>Digital Solutions</em> with <span>Passion</span>{" "}
                      and <span>Precision</span>
                    </h2>
                    <p align="justify">
                     I’m a passionate Web Developer with over 2 years and 8 months of experience in building dynamic, user-focused websites and web applications.
                    </p>
                    <form id="search" action="#" method="GET">
                      <fieldset>
                        <input
                          type="text"
                          name="address"
                          className="email"
                          placeholder="Explore my path..."
                          autoComplete="on"
                          required
                        />
                      </fieldset>
                      <fieldset>
                        <button type="submit" className="main-button">
                          Resume
                        </button>
                      </fieldset>
                    </form>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div
                    className="right-image wow fadeInRight"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    <img src={rightImage} alt="services" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
