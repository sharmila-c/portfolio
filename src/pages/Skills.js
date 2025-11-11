import leftImage from '../assets/images/about-left-image-1.png';

function Skills() {
  return (
    <div className="skills">
      <section id="services" className="our-services section">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-5 align-self-center wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div className="left-image">
                 <img src={leftImage} alt="services" />
              </div>
            </div>

            <div
              className="col-lg-7 wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div className="section-heading">
                <h2>
                  Turning ideas into <em>interactive experiences</em> through the{" "}
                  <span>tools</span> and<span> tech</span>
                </h2>
                <p align="justify">
                  I specialize in developing dynamic and responsive websites using PHP, CodeIgniter, and WordPress, blending clean code with user-focused design. With a strong grasp of HTML, CSS, and Bootstrap, I craft visually appealing and mobile-friendly interfaces. My creative side shines through tools like Photoshop, Canva, and Figma, where I design layouts, graphics, and visual assets that enhance the overall user experience.
                </p>
              </div>

              <div className="row">
                <div className="col-lg-5">
                  <div className="first-bar progress-skill-bar">
                    <h4>PHP</h4>
                    <span>85%</span>
                    <div className="filled-bar"></div>
                    <div className="full-bar"></div>
                  </div>
                </div>
                <div className="col-lg-1"></div>

                <div className="col-lg-5">
                  <div className="second-bar progress-skill-bar">
                    <h4>PHP - CodeIgniter</h4>
                    <span>80%</span>
                    <div className="filled-bar"></div>
                    <div className="full-bar"></div>
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="third-bar progress-skill-bar">
                    <h4>WordPress</h4>
                    <span>90%</span>
                    <div className="filled-bar"></div>
                    <div className="full-bar"></div>
                  </div>
                </div>
                <div className="col-lg-1"></div>

                <div className="col-lg-5">
                  <div className="four-bar progress-skill-bar">
                    <h4>HTML & CSS</h4>
                    <span>95%</span>
                    <div className="filled-bar"></div>
                    <div className="full-bar"></div>
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="five-bar progress-skill-bar">
                    <h4>Bootstrap</h4>
                    <span>95%</span>
                    <div className="filled-bar"></div>
                    <div className="full-bar"></div>
                  </div>
                </div>
                <div className="col-lg-1"></div>

                <div className="col-lg-5">
                  <div className="six-bar progress-skill-bar">
                    <h4>Photoshop, canva and figma</h4>
                    <span>80%</span>
                    <div className="filled-bar"></div>
                    <div className="full-bar"></div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
