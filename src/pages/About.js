import React from 'react';
import image from './../assets/profile/photo.png'
import { SocialIcon } from 'react-social-icons';

function About() {
  return (
    <div className="about-container">
      <div className="about-hero">
        <section className="about-image">
          <img src={image} alt="profile" />
        </section>
        <section className="about-bio">
          <h2>About Me</h2>
          <p>Having begun my professional career in the world of Brand Strategy & Marketing in 2017, I’ve now been consulting on global brands for close to 3 years. Managing global projects for industry leading brands from audience understanding to range evaluations, my specialism in the gaming and fashion industries has certainly given me insight into the world of some of my greatest interests, but one fundamental was missing: my love of Interior Design! I couldn’t ignore my growing desire to move into a career in the interior and architectural design world, and last year took the plunge to start the Introduction to Interior Design course at UAL in my evenings after work. My first two projects at UAL were residential concepts, and I loved it so much that I stepped up to the intermediate module in 2020, a commercial project. I cut down my job to 4 days a week, have been attending college 1 day a week, and using all of my weekends, nights and free time to design! I’m looking forward to completing the final advanced Interior Design module at UAL shortly, and in the meantime I’m working on my first live design project – a residential project converting a stable into a gorgeous indoor-outdoor entertainment and relaxation area. 
          </p>
          <p>You can get a glimpse of these projects on my site, please contact me with any comments, questions, or design requests or career prospects!</p>
        </section>
      </div>
      
      <section className="about-footer">
        <SocialIcon url="http://www.instagram.com/lucyolivia_id" />
        <SocialIcon url="https://www.linkedin.com/in/lucy-morgan-hobbs-09a698150/" />
        <SocialIcon url="mailto:lucyoliviamorganhobbs@gmail.com" />
      </section>
    </div>
  )
}

export default About;