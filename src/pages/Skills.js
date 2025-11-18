import leftImage from '../assets/images/about-left-image-1.png';

function Skills() {
  return (
    <div className="skills">
      <section className="analytics-section" id="analytics">
      <div className="dashboard-container">
        <h2 className="section-title">My Skills</h2>

        <h4>Turning ideas into interactive experiences through the tools and tech</h4>
        

        <div className='row'>
          <div className='col-lg-7'>
            <p>I specialize in developing dynamic and responsive websites using PHP, CodeIgniter, and WordPress, blending clean code with user-focused design. With a strong grasp of HTML, CSS, and Bootstrap, I craft visually appealing and mobile-friendly interfaces. My creative side shines through tools like Photoshop, Canva, and Figma, where I design layouts, graphics, and visual assets that enhance the overall user experience.</p>
            <div className="metrics-grid">
          {[
            { value: "PHP" },
            { value: "CodeIgniter" },
            { value: "Wordpress" },
            { value: "HTML & CSS" },
            { value: "Bootstrap" },
            { value: "React" },
            { value: "Designing" }
          ].map((m, i) => (
            <div className="metric-item" key={i}>
              <div className="metric-value">{m.value}</div>
              <div className="metric-label">{m.label}</div>
            </div>
          ))}
        </div>
          </div>

          <div className='col-lg-5'>
            <div className="charts-grid">

          <div className="chart-card">
            <div className="chart-header">
              <h3 className="chart-title">📈 Skills</h3>
            </div>

            <div className="chart-container">
              <div className="bar-chart" id="barChart">
                {[
                  { h: "85%", l: "PHP" },
                  { h: "75%", l: "CodeIgniter" },
                  { h: "90%", l: "Wordpress" },
                  { h: "95%", l: "HTML" },
                  { h: "95%", l: "Bootstrap" },
                  { h: "65%", l: "React" },
                  { h: "75%", l: "Designing" }
                ].map((b, i) => (
                  <div className="bar" style={{ height: b.h }} key={i}>
                    <span className="bar-value">{b.v}</span>
                    <span className="bar-label">{b.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

         

        </div>
          </div>
        </div>

        {/* Chart Cards */}
        
      </div>
    </section>
    </div>
  );
}

export default Skills;
