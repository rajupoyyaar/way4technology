import React, { Suspense, useEffect, useState, lazy } from "react";

//Libraries
import { Routes, Route, useLocation } from "react-router-dom";
import retina from "retinajs";

//Context
import GlobalContext from './Context/Context';

//Components
import ScrollToTopButton from './Components/ScrollToTop';

//Pages
const LandingPage = lazy(()=> import("./Pages/Home/LandingPage"))
const RoboticsKids = lazy(()=> import("./Pages/Home/RoboticsKids"))
const CoachingMethodology = lazy(()=> import("./Pages/Home/CoachingMethodology"))
const Automation = lazy(()=>import("./Pages/Home/Automation"))
const Coding = lazy(()=>import("./Pages/Home/Coding"))
const ArtificialIntelligence = lazy(()=>import("./Pages/Home/ArtificialIntelligence"))
const Plan = lazy(()=>import("./Pages/Home/plan"))


function App() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customModal, setCustomModal] = useState({
    el: null,
    isOpen: false
  })
  const location = useLocation();

  // RetinaJS
  useEffect(() => {
    window.addEventListener('load', retina(document.querySelectorAll('img')));
  }, [])

  useEffect(() => {
    setTimeout(() => {
      import("./Functions/Utilities").then(module => {
        module.SetHeaderMenuPos()
        module.setDocumentFullHeight()
      })
    }, 1000);
  }, [location])

  useEffect(() => {
    if (isModalOpen === true) {
      document.querySelector("body").classList.add("overflow-hidden");
    } else {
      document.querySelector("body").classList.remove("overflow-hidden");
    }
  }, [isModalOpen]);

  // Get the current location and set the window to top
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
    setFooterHeight(0);
    setCustomModal({
      ...customModal,
      el: null,
      isOpen: false
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);


  return (
    <GlobalContext.Provider
       value={{
        headerHeight,
        setHeaderHeight,
        footerHeight,
        setFooterHeight,
        isModalOpen,
        setIsModalOpen,
        customModal,
        setCustomModal,
       }}
      >
        <div className="App" style={{ "--header-height": `${headerHeight}px` }}>
          {
            <main style={{ marginTop: headerHeight, marginBottom: footerHeight }}>
              <ScrollToTopButton />
              <Suspense fallback={<></>}>
                <Routes>
                  <Route exact path="/" element={<LandingPage />} />
                  <Route exact path="/blog-types/blog-standard-post/66" element={<RoboticsKids/>}/>
                  <Route exact path="/blog-types/blog-standard-post/67" element={<CoachingMethodology/>}/>
                  <Route exact path="/blog-types/blog-standard-post/68" element={<Automation/>}/>
                  <Route exact path="/blog-types/blog-standard-post/69" element={<Coding/>}/>
                  <Route exact path="/blog-types/blog-standard-post/70" element={<ArtificialIntelligence/>}/>
                  <Route exact path="/blog-types/blog-standard-post/71" element={<Plan/>}/>
                </Routes>
              </Suspense>
            </main>
          }
        </div>
      </GlobalContext.Provider>
  );
}

export default App;
