function Education() {
  return (
    <div className="education">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-12">
            <h2>Studies<em> That</em> Shaped<span> My</span>{" "}
                      Path
                    </h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <section className="main-timeline-section">
              <div className="timeline-start"></div>
              <div className="conference-center-line"></div>

              <div className="conference-timeline-content">
                <div className="timeline-article timeline-article-top">
                  <div className="content-date">
                    <span>2014 - 2015</span>
                  </div>
                  <div className="meta-date"></div>
                  <div className="content-box">
                    <h5>SSLC</h5>
                    <p>
                      King's Matric Higher Secondary School<br>
                      </br>
                      92.8%
                    </p>
                    
                  </div>
                </div>

                <div className="timeline-article timeline-article-bottom">
                  <div className="content-date">
                    <span>2016 - 2017</span>
                  </div>
                  <div className="meta-date"></div>
                  <div className="content-box">
                      <h5>HSC</h5>
                    <p>
                      King's Matric Higher Secondary School<br>
                      </br>
                      88.9%
                    </p>
                  </div>
                </div>

                <div className="timeline-article timeline-article-top">
                  <div className="content-date">
                    <span>2017 - 2022</span>
                  </div>
                  <div className="meta-date"></div>
                  <div className="content-box">
                     <h5>M.Tech. Software Engineering <span><i>(Integrated)</i></span></h5>
                    <p>
                      Vellore Institute of Technolgoy - Vellore<br>
                      </br>
                      8.92
                    </p>
                  </div>
                </div>
              </div>

              <div className="timeline-end"></div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
