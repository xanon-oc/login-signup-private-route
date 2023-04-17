import React from "react";

const Carousel = () => {
  return (
    <div>
      <div className="carousel h-[500px] w-8/12 mt-8 mx-auto">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://images.unsplash.com/photo-1614852207179-f21528f68aa0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://images.unsplash.com/photo-1463194537334-3940784aa69a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://images.unsplash.com/photo-1588146256435-63ec0608c415?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=929&q=80"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Carousel;
