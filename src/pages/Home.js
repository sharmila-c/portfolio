import rightImage from '../assets/images/banner-right-image-1.png';

function Home(){
    return(
      <section className="hero" id="home">
      <div className="hero-bg"></div>
      <div className="geometric-shapes">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
        <div className="shape shape4"></div>
        <div className="shape shape5"></div>
        <div className="shape shape6"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <h1>
           Crafting Digital Solutions with Passion and <br/>Precision
          </h1>
          <p>
            I’m a passionate Web Developer with over 2 years and 8 months of experience in building dynamic, user-focused websites and web applications.
          </p>
          <a href={`${process.env.PUBLIC_URL}/Sharmila-Resume.pdf`} className="cta-button" target='_blank'>
           View Resume..
          </a>
        </div>

        <div className="hero-visual">
          <div className="city-container">
            <img src={rightImage} alt="services" className='img-fluid' />
          </div>
        </div>
      </div>
    </section>
    );
}

export default Home;