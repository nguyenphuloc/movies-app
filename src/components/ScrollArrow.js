import React, {useEffect, useState} from 'react';
import '../index.css';


const ScrollArrow = () =>{

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'})
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop)

    return () => {
      window.removeEventListener('scroll', checkScrollTop)
    }
  }, [showScroll])

  if (showScroll === false) {
    return null;
  }

  return (
    <div  className="scrollTop" onClick={scrollTop} style={{height: 70, width: 70, display: showScroll ? 'flex' : 'none'}}> 
      <i class="fas fa-arrow-up"></i>
    </div>
  );
}

export default ScrollArrow;