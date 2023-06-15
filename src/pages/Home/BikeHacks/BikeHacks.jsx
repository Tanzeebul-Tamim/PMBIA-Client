import { useState, useEffect } from 'react';
import SectionTitle from '../../../reusable/sectionTitle';
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from 'react-icons/io';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import '../PopularClasses/PopularClasses.css';
import HackCard from './HackCard';
import { Slide } from 'react-awesome-reveal';

const bikeHacksDes =
  'Discover innovative ways to maintain and optimize your bike, improve your riding skills, and overcome common challenges on the road or trail. Here we\'re to provide you with helpful knowledge and shortcuts that can make your biking adventures more enjoyable and rewarding.';

const BikeHacks = () => {
  const [numberOfSlides, setNumberOfSlides] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 576) {
        setNumberOfSlides(4);
      } else {
        setNumberOfSlides(1);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className="lg:pb-20 pb-8 relative pt-24 lg:pt-56 px-5 lg:px-10"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.300), rgba(0, 0, 0, 0.300)), url('https://img.redbull.com/images/c_crop,x_0,y_178,h_1728,w_3840/c_fill,w_1680,h_780/q_auto,f_auto/redbullcom/2023/6/5/asp64xcyx7bpnkloetet/loic-bruni-leogang')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Slide>
        <SectionTitle
          title1={'bike hacks'}
          title2={'and tips'}
          description={bikeHacksDes}
        />
      </Slide>
      {numberOfSlides && (
        <Carousel
          className="popularClassSection cursor-pointer z-[10]"
          plugins={[
            "infinite",
            'arrows',
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: numberOfSlides,
                arrowLeft: <IoMdArrowDropleftCircle />,
                arrowLeftDisabled: <IoMdArrowDropleftCircle />,
                arrowRight: <IoMdArrowDroprightCircle />,
                arrowRightDisabled: <IoMdArrowDroprightCircle />,
                addArrowClickHandler: true,
              },
            },
          ]}
        >
          <HackCard
            videoTitle={
              'Beginner Mistakes & How To Avoid Making Them | Mountain Bike Skills'
            }
            videoId={'Z5hLSHX_mw4'}
          />
          <HackCard
            videoTitle={'MTB BASIC MAINTENANCE ROUTINE'}
            videoId={'EviGDB8iMVA'}
          />
          <HackCard
            videoTitle={'10 Hacks for Mountain Biking and Beyond'}
            videoId={'8AwXIOJJQzI'}
          />
          <HackCard
            videoTitle={'10 MTB Tips & Hacks that will knock your socks off!'}
            videoId={'n1-hqwaL4-I'}
          />
          <HackCard
            videoTitle={'5 Cheap Ways To Upgrade Your MTB | Mountain Bike Hacks'}
            videoId={'1Lvhekc1ryI'}
          />
          <HackCard
            videoTitle={
              '10 Easy Ways To Improve Your Mountain Biking | Progress Your Riding'
            }
            videoId={'P5nGQ85ZZgM'}
          />
          <HackCard
            videoTitle={
              'Essential First Upgrades | What To Upgrade On Your New Bike?'
            }
            videoId={'vZ_iG5ixw0A'}
          />
          <HackCard
            videoTitle={'7 Hardtail Hacks | Set-Up Tips & Upgrades For Your MTB'}
            videoId={'eP1wxpKTJnM'}
          />
        </Carousel>
      )}
      <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-b from-transparent to-base-300"></div>
    </div>
  );
};

export default BikeHacks;
