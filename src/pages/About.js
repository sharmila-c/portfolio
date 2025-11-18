import rightImage from '../assets/images/about.png';

export default function About() {
  return (
    <section className="dashboard-section" id="dashboard">
  <div className="container about">
    <h2 className="section-title">About Me</h2>
    <img src={rightImage} className="about-image img-fluid" />
    <h4>Turning ideas into creative and responsive digital solutions</h4>
          <p>I’m a creative and passionate Web Developer with over 2 years and 8 months of experience in designing and developing interactive, responsive, and user-friendly websites. My expertise lies in PHP, CodeIgniter, WordPress, HTML, CSS, and Bootstrap, with a growing interest in React to build modern web applications.</p>
          <p>Throughout my journey, I’ve worked on a variety of projects, including institutional and organizational websites such as VIT University, UHET, VIT Online, and several conference websites. I focus on creating digital solutions that combine strong functionality with clean, intuitive design — ensuring every project delivers both purpose and visual appeal.</p>
          <p>Beyond development, I have a deep interest in graphic design, creating posters, banners, thumbnails, and digital creatives using Photoshop, Canva, and Figma. I believe in continuous learning, exploring new technologies, and crafting web experiences that reflect both technical precision and creative expression.</p>
  </div>
</section>

  );
}
