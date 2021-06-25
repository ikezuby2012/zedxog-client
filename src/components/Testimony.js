import React, {useState, useRef, useEffect} from 'react';
import { TweenLite, Power3 } from "gsap";

import {MdChevronLeft, MdChevronRight} from "react-icons/md";

import photo1 from "../utils/user/user-5.jpg";
import photo2 from "../utils/user/user-7.jpg";
import photo3 from "../utils/user/user-17.jpg";
const testimonials = [
    {
      name: "Julia Cameron",
      title: "Creative Director, VISA",
      image: photo1,
      quote:
        "It's all good. I was amazed at the quality of the Design. We've seen amazing results already."
    },
    {
      name: "Lisa Jonas",
      title: "Bitcoin Trader",
      image: photo2,
      quote:
        "The rebranding has really helped our business. Definitely worth the investment."
    },
    {
      name: "Felix Joelle",
      title: "System Analyst",
      image: photo3,
      quote:
        "The service was excellent. Absolutely wonderful! A complete redesign did it for us."
    }
  ];

const Testimony = () => {
  let imageList = useRef(null);
  let testimonialList = useRef(null);
  const imageWidth = 150;

  const [state, setState] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false
  });

  useEffect(() => {
    TweenLite.to(testimonialList.children[0], 0, {
      opacity: 1
    });
  }, []);

  //Image transition
  const slideLeft = (index, duration, multiplied = 1) => {
    TweenLite.to(imageList.children[index], duration, {
      x: -imageWidth * multiplied,
      ease: Power3.easeOut
    });
  };

  const slideRight = (index, duration, multiplied = 1) => {
    TweenLite.to(imageList.children[index], duration, {
      x: imageWidth * multiplied,
      ease: Power3.easeOut
    });
  };

  const scale = (index, duration) => {
    TweenLite.from(imageList.children[index], duration, {
      scale: 1.2,
      ease: Power3.easeOut
    });
  };

  //Content transition

  const fadeOut = (index, duration) => {
    TweenLite.to(testimonialList.children[index], duration, {
      opacity: 0
    });
  };

  const fadeIn = (index, duration) => {
    TweenLite.to(testimonialList.children[index], duration, {
      opacity: 1,
      delay: 1
    });
  };

  const nextSlide = () => {
    if (imageList.children[0].classList.contains("active")) {
      setState({ isActive1: false, isActive2: true });
      //Image transition
      slideLeft(0, 1);
      slideLeft(1, 1);
      scale(1, 1);
      slideLeft(2, 1);
      slideLeft(2, 0);
      fadeOut(0, 1);
      fadeIn(1, 1);
    } else if (imageList.children[1].classList.contains("active")) {
      setState({ isActive2: false, isActive3: true });
      //Image transition
      slideRight(0, 1);
      slideLeft(1, 1, 2);
      slideLeft(2, 1, 2);
      scale(2, 1);
      //content transition
      fadeOut(1, 1);
      fadeIn(2, 1);
    } else if (imageList.children[2].classList.contains("active")) {
      setState({ isActive1: true, isActive3: false });
      //Image transition
      slideLeft(2, 1, 3);
      slideLeft(0, 1, 0);
      slideLeft(1, 0, 0);
      scale(0, 1);
      //content transition
      fadeOut(2, 1);
      fadeIn(0, 1);
    }
  };

  const prevSlide = () => {
    if (imageList.children[0].classList.contains("active")) {
      setState({ isActive1: false, isActive3: true });
      //Image transition
      slideLeft(2, 0, 3);
      slideLeft(2, 1, 2);
      scale(2, 1);
      slideRight(0, 1);
      slideRight(1, 1);
      //content transtion
      fadeOut(0, 1);
      fadeIn(2, 1);
    } else if (imageList.children[1].classList.contains("active")) {
      setState({ isActive2: false, isActive1: true });
      //Image transition
      slideLeft(0, 0);
      slideRight(0, 1, 0);
      slideRight(1, 1, 0);
      slideRight(2, 1, 2);
      scale(0, 1);
      //content transtion
      fadeOut(1, 1);
      fadeIn(0, 1);
    } else if (imageList.children[2].classList.contains("active")) {
      setState({ isActive2: true, isActive3: false });
      slideLeft(2, 1);
      slideLeft(1, 0, 2);
      slideLeft(1, 1);
      scale(1, 1);
      //content transtion
      fadeOut(2, 1);
      fadeIn(1, 1);
    }
  };
    return (
        <div className="testimonial-container">
          <div className="testimonial-icon-div" onClick={prevSlide}>
            <button className={"testimonial-btn"}>
                <MdChevronLeft className={"testimonial-icon"}/>
            </button>
          </div>
          <div className="testimonial-div">
            <div className="testimonial-images">
              <ul ref={el => (imageList = el)}>
                <li className={state.isActive1 ? "active" : ""}>
                  <img className={"testimonial-img"} src={testimonials[0].image} alt={testimonials[0].name} />
                </li>
                <li className={state.isActive2 ? "active" : ""}>
                  <img className={"testimonial-img"} src={testimonials[1].image} alt={testimonials[0].name} />
                </li>
                <li className={state.isActive3 ? "active" : ""}>
                  <img className={"testimonial-img"} src={testimonials[2].image} alt={testimonials[0].name} />
                </li>
              </ul>
            </div>
            <div className="testimonial-content">
              <ul ref={el => (testimonialList = el)}>
                <li className={state.isActive1 ? "active" : ""}>
                  <div className="testimonial-inner">
                    <p className="testimonial-comment">{testimonials[0].quote}</p>
                    <h3 className="testimonial-name">{testimonials[0].name}</h3>
                    <h4 className="testimonial-title">{testimonials[0].title}</h4>
                  </div>
                </li>
                <li className={state.isActive2 ? "active" : ""}>
                  <div className="content-inner">
                    <p className="testimonial-comment">{testimonials[1].quote}</p>
                    <h3 className="testimonial-name">{testimonials[1].name}</h3>
                    <h4 className="testimonial-title">{testimonials[1].title}</h4>
                  </div>
                </li>
                <li className={state.isActive3 ? "active" : ""}>
                  <div className="content-inner">
                    <p className="testimonial-comment">{testimonials[2].quote}</p>
                    <h3 className="testimonial-name">{testimonials[2].name}</h3>
                    <h4 className="testimonial-title">{testimonials[2].title}</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="testimonial-icon-div" onClick={nextSlide}>
            <button className={"testimonial-btn"}>
                <MdChevronRight className={"testimonial-icon"}/>
            </button>
          </div>
        </div>
    );
}

export default Testimony;
