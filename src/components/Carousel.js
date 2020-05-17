import React, {useState} from 'react';
import { Carousel } from 'react-bootstrap'
import carouselOne from './../assets/additional/one.jpg'
import carouselTwo from './../assets/additional/two.jpg'
import carouselThree from './../assets/additional/three.jpg'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carouselOne}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Dezeen newsletter</h3>
          <a href="https://newsletter.dezeen.com/t/ViewEmail/r/D941BE89017C49F82540EF23F30FEDED/23BB27DD531E93AD5887B0F54B92C711" 
            target="blank">See more</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carouselTwo}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Dezeen Virtual Design Festival</h3>
          <a href="https://www.dezeen.com/2020/05/13/students-school-show-interior-design-chelsea-college-of-arts-vdf/ " 
            target="blank">See more</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carouselThree}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>My interview at UAL</h3>
          <a href="https://www.arts.ac.uk/study-at-ual/short-courses/stories/student-story-lucy-morgan-hobbs-interior-design" 
            target="blank">See more</a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;