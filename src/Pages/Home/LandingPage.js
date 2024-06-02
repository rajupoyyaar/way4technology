import React, { useState } from 'react'

//Libraries
import { Col, Container, Navbar, Row } from "react-bootstrap";
import "./LandingPage.css"
import { Link } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Navigation } from "swiper/modules";
import { m } from 'framer-motion';

//Components
import Header, { HeaderNav, Menu } from '../../Components/Header/Header';
import Dropcaps from "../../Components/Dropcaps/Dropcaps"
import Buttons from "../../Components/Button/Button"
import SocialIcons from "../../Components/SocialIcon/SocialIcons"
import BlogClean from '../../Components/Blogs/BlogClean';
import SideButtons from '../../Components/SideButtons';
import Overlap from '../../Components/Overlap/Overlap';
import CustomModal from '../../Components/CustomModal';
import FooterStyle01 from '../../Components/Footers/FooterStyle01';
import { fadeIn } from '../../Functions/GlobalAnimations';
import CommentBox from '../../Components/Blogs/HelperComponents/CommentBox';
import Counter from "../../Components/Counters/Counter"
import {CounterData03} from "../../Components/Counters/CounterData"

//Images
import logo from "../../Images/logo.png"
import laptopImage from "../../Images/laptopImage.png"
import WebDevelopment from "../../Images/WebDevelopment.png"
import DataScience from "../../Images/DataScience.png"
import OnlineEducation from "../../Images/OnlineEducation.png"
import KidsCurriculum from "../../Images/KidsCurriculum.png"
import AdvanceCodingAlltheWay from "../../Images/AdvanceCodingAlltheway.png"
import logowhite from "../../Images/logowhite.png"
import FindingPossibilities from "../../Images/FindingPossibilities.png"

//Data
import { blogData } from '../../Components/Blogs/BlogData';

const SwiperImgData = [
    {
      img: WebDevelopment,
    },
    {
      img: DataScience,
    },
    {
      img: OnlineEducation,
    }
  ];
  
  const SwiperImgData2 = [
    {
      titel: "The French cook we open tins",
      subtitle: "Arduino Explorers: Unleashing Creativity in Robotics & Electronics",
      content: "Our school kids' curriculum includes Arduino Adventures, where they embark on a journey into robotics and electronics! From crafting line-following bots to mastering Bluetooth-controlled marvels, students design, program, and control their creations using Arduino boards, motors, sensors, and more."
    },
    {
      titel: "Good for the conscience",
      subtitle: "Python Explorers: From Basics to Advanced Coding for Kids",
      content: "Join the \"Python Explorers\" journey! This course takes school kids from basic Python programming to advanced concepts. Starting with simple programs and progressing through loops, functions, and data structures like lists and dictionaries, it gradually introduces more complex topics such as object-oriented programming and file handling."
    },
    {
      titel: "I won't eat anything green",
      subtitle: "AI Pioneers: From Machine Learning to Advanced Models for Kids",
      content: "Tailored for young minds, this adventure covers everything from foundational machine learning to advanced models like GPTs (Generative Pre-trained Transformers). Dive into deep learning, computer vision, and natural language processing, unlocking the secrets behind intelligent systems."
    },
    {
      titel: "I won't eat anything green",
      subtitle: "Web Wizards: Exploring from Basics to Advanced Web Technologies for Kids",
      content: "Embark on an exciting journey with \"Web Wizards\"! This adventure is tailored for young minds, guiding them through the captivating world of web technologies. From foundational HTML and CSS to advanced concepts like JavaScript frameworks and responsive design, students will explore the breadth of web development. Dive into topics such as front-end and back-end development, APIs, and database management"
    },
    {
      titel: "I won't eat anything green",
      subtitle: "Hardware Heroes: Discovering Computer Engineering for Kids",
      content: "Join \"Hardware Heroes\" as we explore computer hardware engineering! From basic components like CPUs and GPUs to advanced topics in motherboard architecture and troubleshooting techniques, kids will dive into the heart of technology. Through hands-on experiments and engaging activities."
    }
  ]
  
  const SocialIconsData = [
    {
      color: "#3b5998",
      link: "https://www.facebook.com/",
      icon: "fab fa-facebook-f"
    },
    {
      color: "#00aced",
      link: "https://twitter.com/",
      icon: "fab fa-twitter"
    },
    {
      color: "#fe1f49",
      link: "https://www.instagram.com/",
      icon: "fab fa-instagram"
    },
    {
      color: "#0077b5",
      link: "https://www.linkedin.com/",
      icon: "fab fa-linkedin-in"
    },
    {
      color: "#1769ff",
      link: "https://www.behance.net/",
      icon: "fab fa-behance"
    }
  ]
  
  const SocialIconsHeaderData = [
    {
      color: "#3b5998",
      link: "https://www.facebook.com/",
      icon: "fab fa-facebook-f"
    },
    {
      color: "#fe1f49",
      link: "https://www.instagram.com/",
      icon: "fab fa-instagram"
    },
    {
      color: "#00aced",
      link: "https://twitter.com/",
      icon: "fab fa-twitter"
    },
  ]
  
  // Filter the blog data category wise
  const blogCleanData = blogData.filter((item) => item.blogType === "clean");
  
  const LandingPage = (props) => {
    const swiperRef = React.useRef(null)
    const swiperRef2 = React.useRef(null)
    const [activeSlide, setActiveSlide] = useState(0)
  
    return (
      <div style={props.style}>
  
        {/* Header Start */}
        <Header topSpace={{ desktop: false, md: true }} type="reverse-scroll" theme="light" bg="light" menu="light" className="header">
          <HeaderNav fluid="fluid" theme="light" expand="lg" containerClass="sm:px-0" className="py-[0px] px-[35px] md:py-[18px] md:px-0">
            <Col sm={6} lg={2} className="col-auto me-auto ps-lg-0">
              <Link aria-label="header logo" className="flex items-center" to="/">
                <Navbar.Brand className="inline-block p-0 m-0" style={{display:'flex', alignItems:'center'}}>
                  <img className='default-logo' loading="lazy" src={logo}  alt='logo' style={{ maxWidth: '100%', maxHeight: '100%' }} />
                  <img className="alt-logo" loading="lazy" src={logo}  alt='logo' style={{ maxWidth: '100%', maxHeight: '100%' }} />
                  <img className="mobile-logo" loading="lazy" src={logo}  alt='logo' style={{maxWidth:'100%', maxHeight:'150px'}} />
                </Navbar.Brand>
              </Link>
            </Col>
            <div className="order-last px-[15px] hidden md:block">
              <Navbar.Toggle className="ml-[10px]">
                <span className="navbar-toggler-line"></span>
                <span className="navbar-toggler-line"></span>
                <span className="navbar-toggler-line"></span>
                <span className="navbar-toggler-line"></span>
              </Navbar.Toggle>
            </div>
            <Navbar.Collapse className="col-auto col-lg-8 justify-center">
              <Menu {...props} />
            </Navbar.Collapse>
            <Col className="col-auto col-lg-2 text-end pe-0">
              <SocialIcons data={SocialIconsHeaderData} theme="dark" size="xs" iconColor='black' />
            </Col>
          </HeaderNav>
        </Header>
        {/* Header End */}
        <SideButtons />
        {/* Section Start */}
        <section className="pt-[160px] pb-[500px] cover-background xl:pb-[345px] lg:pt-[120px] lg:pb-[200px] md:pt-[95px] md:pb-[270px] sm:py-[80px] xs:py-[50px] sm:mb-[60px]" style={{ backgroundImage: "url(/assets/img/webp/blog-post-layout-03-img-01.webp)" }}>
          <Container>
            <Row className="justify-center mb-[188px] lg:mb-[245px] md:mb-[90px] sm:mb-0 mxl:mb-[30%]">
              <Col xl={6} lg={7} sm={8} className="text-center">
                <div className="inline-block uppercase font-serif align-middle mb-[25px] text-[#c3964e]">
                  {/* <Link aria-label="link" to="/blogs/blog-grid" className="hover:text-darkgray">nature</Link>
                  <span className="text-xlg">&nbsp;&nbsp;•&nbsp;&nbsp;</span>
                  <span>23 November 2019</span> */}
                </div>
                <h4 className="font-serif text-darkgray font-medium -tracking-[1px] mb-[35px]">Empowering Tomorrow, Innovating Today.</h4>
                <div className="flex justify-center items-center font-serif uppercase">
                  <img width="" height="" className="rounded-full w-[35px] mr-[15px]" src={logo} alt="" style={{backgroundColor:'#CCCCCC'}}/>
                  <span>By <Link aria-label="name" to="/blogs/blog-grid" className="hover:text-[#c3964e]">Way4 Technology</Link></span>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Section End */}
  
        {/* Section Start */}
        <Overlap value={80}>
          <Container fluid className="p-[0px] sm:px-[15px]">
            <Swiper
              className="blogpostlayout-page-02 black-move overflow-hidden swiper-navigation-03 swiper-navigation-light"
              ref={swiperRef2}
              slidesPerView="auto"
              speed={500}
              loop={true}
              modules={[Keyboard, Navigation]}
              keyboard={{ enabled: true, onlyInViewport: true }}
              spaceBetween={30}
              centeredSlides={true}
              pagination={{ clickable: true }}
              navigation={{ clickable: true }}
              onSlideChange={(swiperCore) => {
                const { realIndex } = swiperCore;
                setActiveSlide(realIndex)
              }}
            >
              {SwiperImgData.map((item, i) => {
                return (
                  <SwiperSlide className={`w-[55%] sm:w-full ${activeSlide === i ? "opacity-100" : "opacity-60"}`} key={i}>
                    <img width="" height="" className="rounded-[6px] w-full" src={item.img} alt="" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Container>
        </Overlap>
        {/* Sectiojn End */}
  
        {/* Section Start */}
        <section className="py-[130px] overflow-hidden lg:py-[90px] md:py-[75px] sm:py-[50px]">
          <Container>
            <Row className="justify-center">
              <m.div className="col-12 col-md-10 mb-24" {...{ ...fadeIn, transition: { delay: 0.2 } }}>
                <Dropcaps theme="dropcaps-style04" content="Wway4 Technology is committed to igniting the potential within today's youth. By addressing their questions with precision and depth, we catalyze profound transformation and foster a culture of excellence. Our journey involves not just providing answers, but nurturing a mindset of exploration, empowering young individuals to uncover their innate abilities and embrace a future brimming with limitless possibilities" />
              </m.div>
              <m.div className="col-12 col-lg-5 col-md-10 md:mb-[30px] sm:mb-[15px]" {...{ ...fadeIn, transition: { delay: 0.4 } }}>
                <div className="bg-[#f8f4f0] p-16 md:p-12">
                  <span className="font-serif font-medium block text-darkgray mb-[10px]">Gamified Way of Learning</span>
                  <p>Transform education into an engaging adventure through gamification, where every lesson is a quest and every challenge a chance to level up your knowledge.</p>
                </div>
              </m.div>
              <m.div className="col-12 col-lg-5 col-md-10" {...{ ...fadeIn, transition: { delay: 0.6 } }}>
                <div className="bg-[#f8f4f0] p-16 md:p-12">
                  <span className="font-serif font-medium block text-darkgray mb-[10px]">Level Up Your Learning</span>
                  <p>Embark on an educational journey where learning becomes an exciting game, turning every lesson into an adventure and every challenge into an opportunity to advance your skills.</p>
                </div>
              </m.div>
            </Row>
          </Container>
        </section>
        {/* Section End */}
  
        {/* Parallax Scrolling Start */}
        <div className="relative pb-[430px] lg:pb-[210px] pt-[130px] lg:pt-[90px] md:pt-[75px] sm:py-[50px] overflow-hidden">
          <Parallax className="lg-no-parallax cover-background absolute -top-[150px] left-0 w-full h-[1200px] lg:-top-[100px]" translateY={[-50, 50]} style={{ backgroundImage: `url(${FindingPossibilities})` }}></Parallax>
          <div className="absolute h-full w-full opacity-20 top-0 left-0 bg-darkgray"></div>
          <Container className="h-full relative">
            <m.div className="row justify-center h-full" {...fadeIn}>
              <Col lg={7} md={9} sm={10} className="text-center font-serif font-medium">
                <span className="text-[#c3964e] block mb-[15px] uppercase">Lost in the code, Find in Possiblities?</span>
                <h4 className="text-white mb-32 lg:mb-[12rem] sm:mb-0">Technology, The tool that turns dream into reality.</h4>
              </Col>
            </m.div>
          </Container>
        </div>
        {/* Parallax Scrolling End */}

  
        {/* Section Start*/}
        <section className="py-[130px] pt-[0px] lg:py-[90px] md:py-[75px] sm:pt-[50px] sm:py-[50px]">
          <Container className="py-[130px] pt-0 lg:py-[90px] md:py-[75px] sm:pt-0 sm:py-[50px]">
            <Overlap>
              <Col xs={12} className="text-center relative">
                <div>
                  <m.div className="row" {...{ ...fadeIn, transition: { delay: 0.3 } }}>
                    <Col md={{ span: 6, order: 1 }} className="order-2 bg-[#f8f4f0] text-center p-[6.5rem] lg:p-16">
                      <h6 className="font-serif text-darkgray font-medium inline-block">TechTrek: Empowering Young Minds in Technology</h6>
                      <p>Our School Curriculum engaging educational programs that introduce young learners to a range of technology fields, including robotics, AI, cloud computing, coding, and hardware engineering. Through hands-on experiences, students explore building and programming robots, learn AI algorithms, understand cloud computing infrastructure.</p>
                    </Col>
                    <Col md={{ span: 6, order: 2 }} className="order-1 hover-option-6 cover-background sm:h-[300px]" style={{ backgroundImage: `url(${KidsCurriculum})` }}></Col>
                  </m.div>
                  <m.div className="row" {...{ ...fadeIn, transition: { delay: 0.3 } }}>
                    <Col md={6} className="hover-option-6 cover-background sm:h-[300px]" style={{ backgroundImage: `url(${AdvanceCodingAlltheWay})` }}></Col>
                    <Col md={6} className="bg-[#f8f4f0] text-center p-[6.5rem] lg:p-16">
                      <h6 className="font-serif text-darkgray font-medium inline-block">Tech Nexus: A Comprehensive Tech Curriculum for College Students</h6>
                      <p>Discover "Tech Nexus," a cutting-edge curriculum covering essential tech domains. From web design and app development to data analytics, Python, AI, and more, students delve into front-end and back-end development, data visualization, cloud computing, and cybersecurity. Through hands-on projects, students gain practical experience, preparing them for success in today's tech-driven world.</p>
                    </Col>
                  </m.div>
                </div>
              </Col>
            </Overlap>
          </Container>
          {/* <Container> */}
            {/* <Row className="justify-center"> */}
              {/* <Col md={10} className="mb-24">
                <m.p {...fadeIn}>
                  <span className="float-left text-[50px] leading-normal mr-[20px] text-center font-medium xs:px-[2%] text-darkgray">M</span>
                  Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to
                  <Link aria-label="link" to="#" rel="noreferrer" className="text-[#c3964e] hover:text-darkgray font-medium">&nbsp;make a type specimen book</Link>
                  . It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised with the release of letraset sheets lorem ipsum passages, and more recently with desktop publishing software like aldus page maker including versions.
                </m.p>
              </Col> */}
              {/* <m.div className="col-12 col-md-10 mb-24 relative" {...fadeIn}>
                <img width="" height="" className="rounded-[5px]" src="https://via.placeholder.com/900x555" alt="" />
                <div>
                  <CustomModal.Wrapper
                    className="absolute top-0 right-0 flex justify-center items-center w-full h-full"
                    modalBtn={<Buttons type="submit" className="btn-sonar border-0 mx-auto" themeColor="#fff" y color="#c3964e" size="lg" title={<i className="icon-control-play" />} />} >
                    <div className="w-[1020px] max-w-full relative rounded mx-auto">
                      <div className="fit-video">
                        <iframe width="100%" height="100%" className="shadow-[0_0_8px_rgba(0,0,0,0.06)]" controls src="https://www.youtube.com/embed/g0f_BRYJLJE?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                      </div>
                    </div>
                  </CustomModal.Wrapper>
                </div>
              </m.div> */}
            {/* </Row> */}
            {/* <Row className="justify-center">
              <m.div className="sm:mb-[15px] col-12 col-md-5" {...{ ...fadeIn, transition: { delay: 0.2 } }}>
                <span className="inline-block font-serif text-xlg text-darkgray leading-[34px] w-[95%] sm:w-full">Praesent posuere lectus suscipit lorem facilisis sit amet ultricies nunc maximus aliquam suscipit ligula non risus sagittis dictum neque aliquam.</span>
              </m.div>
              <m.div className="col-12 col-md-5" {...{ ...fadeIn, transition: { delay: 0.4 } }}>
                <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </m.div>
            </Row> */}
          {/* </Container> */}
        </section>
        {/* Section End */}
  
        {/* Section Start */}
        <section>
          <Container fluid className="px-[30px] xs:px-[15px]">
            <Row>
              <m.div className="col-12 col-xl-8 col-lg-7 flex md:mb-[30px] xs:mb-[15px]" {...{ ...fadeIn, transition: { delay: 0.2 } }}>
                <div className="cover-background w-full md:h-[450px]" style={{ backgroundImage: `url(${laptopImage})` }}></div>
              </m.div>
              <m.div className="col-12 col-xl-4 col-lg-5" {...{ ...fadeIn, transition: { delay: 0.4 } }}>
                <div className="p-[7.5rem] xl:p-16 md:p-24 xs:py-24 xs:px-[30px] bg-[#A77EF4]">
                  <Swiper
                    ref={swiperRef}
                    className="black-move mb-[50px] xs:mb-[30px]"
                    loop={true}
                    modules={[Autoplay, Keyboard]}
                    keyboard={{ enabled: true, onlyInViewport: true }}
                    autoplay={{ delay: 4500, disableOnInteraction: false }}
                  >
                    {
                      SwiperImgData2.map((item, i) => {
                        return (
                          <SwiperSlide key={i}>
                            <Row>
                              <Col>
                                {/* <span className="text-darkgray block mb-[25px] uppercase font-serif font-medium">{item.titel}</span> */}
                                <h6 className="font-serif font-medium text-white w-[92%] xs:full">{item.subtitle}</h6>
                                <p className="text-white opacity-80">{item.content}</p>
                              </Col>
                            </Row>
                          </SwiperSlide>
                        )
                      })
                    }
                  </Swiper>
                  <div className="flex">
                    <div onClick={() => swiperRef.current.swiper.slidePrev()} className="btn-slider-next rounded-full flex justify-center items-center text-black bg-white right-inherit left-[65px] h-[40px] w-[40px] cursor-pointer" >
                      <button className="text-xmd"><i className="feather-arrow-left"></i></button>
                    </div>
                    <div onClick={() => swiperRef.current.swiper.slideNext()} className="btn-slider-prev rounded-full flex justify-center items-center text-black bg-white right-inherit h-[40px] w-[40px] ml-[10px] cursor-pointer" >
                      <button className="text-xmd"><i className="feather-arrow-right"></i></button>
                    </div>
                  </div>
                </div>
              </m.div>
            </Row>
          </Container>
        </section>
        {/* Section End */}
  
        {/* Section Start */}
        {/* <section className="py-[130px] overflow-hidden lg:py-[90px] md:py-[75px] sm:py-[50px]">
          <Container>
            <m.div className="row" {...{ ...fadeIn, transition: { delay: 0.2 } }}>
              <Col lg={10} className="flex flex-wrap items-center mx-auto mb-[35px] sm:block">
                <Col md={9} className="md:text-start sm:mb-[10px] xs:text-center px-0 sm:justify-center">
                  <div className="tag-cloud flex flex-wrap sm:justify-center gap-y-5">
                    <Link aria-label="tag" className="!mr-[8px] mb-[10px]" to="/blogs/blog-grid">Development</Link>
                    <Link aria-label="tag" className="!mr-[8px] mb-[10px]" to="/blogs/blog-grid">Events</Link>
                    <Link aria-label="tag" className="!mr-[8px] mb-[10px]" to="/blogs/blog-grid">Media</Link>
                    <Link aria-label="tag" className="!mr-[8px] mb-[10px]" to="/blogs/blog-grid">Mountains</Link>
                  </div>
                </Col>
                <Col md={3} className="text-center md:text-end px-0 flex justify-end sm:justify-center">
                  <Link aria-label="link" className="uppercase text-darkgray text-xs w-auto font-medium inline-block border border-mediumgray rounded pt-[5px] pb-[6px] px-[18px] mb-[10px] leading-[20px] hover:text-black hover:shadow-[0_0_10px_rgba(23,23,23,0.10)] transition-default" to="#">
                    <i className="far fa-heart mr-2 text-[#fa5c47]">
                    </i><span>05 Likes</span>
                  </Link>
                </Col>
              </Col>
            </m.div>
            <m.div className="row" {...{ ...fadeIn, transition: { delay: 0.4 } }}>
              <Col lg={10} className="mx-auto mb-[60px] md:mb-[30px] ">
                <div className="flex items-center w-full bg-white rounded-[5px] p-16 sm:block shadow-[0_0_15px_rgba(0,0,0,0.1)]">
                  <div className="w-[130px] mr-[60px] sm:mx-auto text-center">
                    <img width="" height="" src="https://via.placeholder.com/125x125" className="rounded-full w-[110px] mx-auto" alt="" />
                    <Link aria-label="link" to="/blogs/blog-grid" className="text-darkgray font-serif font-medium mt-[20px] inline-block text-md hover:text-fastblue">Colene Landin</Link>
                    <span className="text-md block leading-[18px] sm:mb-[15px]">Co-founder</span>
                  </div>
                  <div className="w-[75%] md:text-start sm:w-full sm:text-center">
                    <p className="mb-[25px]">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <Buttons to="/blogs/blog-grid" className="font-medium font-serif after:bg-black after:h-[2px] pt-0 hover:text-black uppercase btn-link mb-0" color="#232323" size="lg" title="All author posts" />
                  </div>
                </div>
              </Col>
            </m.div>
            <m.div className="row" {...{ ...fadeIn, transition: { delay: 0.6 } }}>
              <Col className="col-12 justify-center text-center elements-social social-icon-style-09">
                <SocialIcons theme="social-icon-style-09" className="mt-auto justify-center" size="md" iconColor="dark" data={SocialIconsData} animation={fadeIn} animationDelay={0.3} />
              </Col>
            </m.div>
          </Container>
        </section> */}
        {/* Section End */}

        <m.section className="bg-darkgray py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]" {...fadeIn} style={{marginTop:'50px', marginLeft:'30px', marginRight:'30px'}}>
          <Container>
            <Row>
              <Col className="mb-[6%]">
                <h6 className="font-serif text-white text-center font-medium mb-[25px] lg:mb-[15px]">Counters style 03</h6>
              </Col>
            </Row>
            <Counter
              theme="counter-style-03"
              grid="row-cols-1 row-cols-md-4 row-cols-sm-2 items-center justify-center gap-y-10"
              className="font-serif text-white text-center md:text-start"
              data={CounterData03}
              duration={2}
              postfix_sign="+"
              animation={fadeIn}
              animationDelay={0.2}
            />
            </Container>
        </m.section>
  
        {/* Section Start */}
        <section className="bg-lightgray py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] overflow-hidden">
          <Container className="sm:px-0">
            <Row className="justify-center">
              <Col lg={5} md={6} className="text-center mb-20">
                <span className="font-serif font-medium uppercase inline-block">A Year long Curriculum Contains</span>
                <h5 className="font-serif font-medium text-darkgray -tracking-[1px]">School Kids</h5>
              </Col>
            </Row>
            <BlogClean filter={false} overlay={["#0039e3", "#4132e0", "#5e28dd", "#741bd9", "#8600d4"]} pagination="false" grid="grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large" data={blogCleanData.slice(0, 6)} />
          </Container>
        </section>
        {/* Section End */}
  
        {/* <CommentBox /> */}
  
        {/* Footer Start */}
        <FooterStyle01 theme="dark" className="text-slateblue bg-[#262b35]" />
        {/* Footer End */}
      </div>
    )
  }
  
  export default LandingPage