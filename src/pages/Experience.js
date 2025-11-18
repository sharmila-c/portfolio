import experienceImage from '../assets/images/experience.png';

function Experience() {
  return (
    <div className="experience">
            <div className="container">
        <div className="row mb-3">
          <h2 className="section-title mb-5">I Work Hard to Improve My Skills Regularly</h2>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
            <div className="col-lg-7">
                      <ul>
        <li style={{ "--accent-color": "#00ffcc" }}>
          <div className="date">Web Developer</div>
          <div className="title">Vellore Institute of Technology - VIT, Vellore</div>
          <div className="descr">
            <p align="justify">With over 2 years and 8 months of hands-on experience as a Web Developer, I have worked on diverse projects involving both development and design. My expertise spans PHP, CodeIgniter, WordPress, HTML, CSS, and Bootstrap, with a growing focus on React for modern front-end development.</p>
            <p align="justify">I have contributed to several institutional and corporate websites, including VIT University’s official site, UHET, VIT Online, Intranet, and multiple conference websites. Alongside development, I have designed digital posters, event banners, thumbnails, and flyers using tools like Photoshop and Canva.</p>
            <p align="justify">My work reflects a balance of creativity and technical precision, focusing on building functional, responsive, and visually engaging web experiences.</p>
          </div>
        </li>
      </ul>
            </div>
            <div className="col-lg-5">
               <div class="hero-visual">
                <div class="city-container">
                    <div class="building building1">
                        <div class="building-fill"></div>
                        <div class="building-windows"></div>
                    </div>
                    <div class="building building2">
                        <div class="building-fill"></div>
                        <div class="building-windows"></div>
                    </div>
                    <div class="building building3">
                        <div class="building-fill"></div>
                        <div class="building-windows"></div>
                    </div>
                    <div class="building building4">
                        <div class="building-fill"></div>
                        <div class="building-windows"></div>
                    </div>
                    <div class="neon-line neon-line1"></div>
                    <div class="neon-line neon-line2"></div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Experience;
