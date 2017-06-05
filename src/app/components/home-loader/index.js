import React, { Component } from 'react';
import classnames from 'classnames';
import Flux from 'app/flux';

import UstwoLogoSequence from 'app/components/ustwo-logo-sequence';

class HomeLoader extends Component {

  componentDidMount() {
    Flux.overflowHidden();
  }

  componentWillUnmount() {
    Flux.homeLoaderShown();
    Flux.overflowAuto();
  }

  render() {
    return (
      <div className="home-loader">
        <div className="home-intro-logo">
          <svg className="home-loader-background layer-background" role="img" viewBox="0 0 112 32">
            <g>
              <path d="M305.49,385.17l0.93,0.54c1.38,0.79,1.67,1.44,1.19,3-0.78,2.5-1.59,5-2.39,7.49l-2.15,6.69a1.6,1.6,0,0,0-.06.88c0.18-.17.37-0.33,0.54-0.52q6-6.67,11.91-13.35c1.92-2.16,2.54-2.25,4.88-.56a9.71,9.71,0,0,1,.93.76,2.43,2.43,0,0,1,.73,2.76c-0.84,2.48-1.64,5-2.45,7.47-0.09.29-.17,0.58-0.33,1.11l5.72-5.34c1.53-1.43,3.08-2.86,4.59-4.32a8.17,8.17,0,0,0,1.18-1.5,1.15,1.15,0,0,1,1.77-.55,17.63,17.63,0,0,1,2.35,1.64,1.91,1.91,0,0,1,.59,2.19c-0.77,2.44-1.55,4.87-2.32,7.31-0.08.25-.13,0.5-0.26,1l7.78-8.17c1.32-1.39,2.63-2.79,4-4.16a3.58,3.58,0,0,1,5.27-.44c0.54,0.41,1.1.8,1.61,1.25a2.54,2.54,0,0,1,.58,3.55c-1.1,2-2.26,4-3.22,6.15a23.44,23.44,0,0,0-1.13,3.9,3.06,3.06,0,0,0,0,1.1,2.1,2.1,0,0,0,3.19,1.85,9.75,9.75,0,0,0,4.27-4.13,17,17,0,0,0,2.6-8.12,1.36,1.36,0,0,0-.7-1.38c-0.74-.45-1.44-1-2.15-1.45-0.47-.33-0.59-0.86-0.1-1.15a27.17,27.17,0,0,1,4.16-2.12,2.31,2.31,0,0,1,2.87,1.15,7.1,7.1,0,0,1,1.14,2.88c0.35,6.47-1.64,12.08-6.65,16.34a9.92,9.92,0,0,1-9,2.26,6.47,6.47,0,0,1-4.84-6,17,17,0,0,1,2.16-8.89l0.52-1a2.2,2.2,0,0,0,.06-0.38c-0.38.37-.65,0.61-0.9,0.88l-13.17,14.2c-1.24,1.33-1.77,1.4-3.25.4q-0.84-.57-1.67-1.17a1.66,1.66,0,0,1-.68-2.11c0.81-2.1,1.64-4.19,2.46-6.29a2.53,2.53,0,0,0,.23-1.11l-3.33,3.15q-3.9,3.7-7.79,7.41c-1.08,1-1.49,1-2.75.2l-1.69-1.15c-1-.69-1.22-1.09-0.84-2.27,1.13-3.53,2.32-7,3.48-10.55l1-3.14-0.26-.21a5,5,0,0,1-.41.66l-13.7,15.85c-1.5,1.73-2,1.81-3.9.57-2.82-1.86-2.9-2.09-1.87-5.28l6-18.73c0.13-.4.29-0.8,0.48-1.31h-1.12c-8.44,0-16.87,0-25.31,0a2.49,2.49,0,0,1-2.66-1.68c-0.31-.77-0.75-1.49-1.08-2.25s-0.15-1,.65-1.06c0.25,0,.49,0,0.74,0q30,0,60,0a2.6,2.6,0,0,1,2.84,1.81c0.24,0.63.6,1.22,0.89,1.83,0.49,1.06.32,1.34-.81,1.37H305.54Z" transform="translate(-251.19 -379.65)"/>
              <path d="M259.47,401.3l2.85-2.46c2.12-1.84,4.19-3.76,6.38-5.51a9.19,9.19,0,0,0,2.82-3.91c0.59-1.46,1.23-1.63,2.56-.76,2.56,1.69,2.67,2.14,1.7,5-1.09,3.24-2.09,6.51-3.13,9.77-0.05.16-.07,0.34-0.16,0.77l3.28-3.59,9.95-11c1.52-1.68,2.81-1.81,4.87-.84a4.28,4.28,0,0,1,2.67,4.48c-0.13,4.6-.14,9.2-0.17,13.8a2.71,2.71,0,0,1-1.51,2.56c-0.9.49-1.78,1-2.66,1.51a2.83,2.83,0,0,1-2.57.19c-3.5-1.32-3.88-1.9-3.68-5.8,0.05-1,.45-1.31,1.45-0.94s1.7,0.71,2.69,1.12v-13c-0.19.18-.38,0.33-0.54,0.52l-14.66,16.6c-1.38,1.56-2,1.66-3.69.5-0.56-.39-1.11-0.78-1.65-1.19a2,2,0,0,1-.83-2.37c0.5-1.59,1-3.16,1.57-4.73a2.47,2.47,0,0,0,.19-1l-3.37,3.12-6.79,6.3c-0.93.86-1.19,0.88-2.26,0.17-0.64-.43-1.28-0.86-1.92-1.3-1.23-.84-1.41-1.31-0.93-2.73,1.19-3.54,2.41-7.06,3.61-10.6,0.28-.81.87-1.74,0.67-2.42s-1.25-1-1.92-1.48c-0.2-.14-0.41-0.28-0.61-0.43-0.51-.39-0.57-0.88,0-1.21a38.18,38.18,0,0,1,4-2.23,2.27,2.27,0,0,1,1.65.25A17.22,17.22,0,0,1,261.5,390a1.82,1.82,0,0,1,.84,2.6c-0.89,2.56-1.8,5.12-2.7,7.68-0.11.31-.21,0.62-0.32,0.93Z" transform="translate(-251.19 -379.65)"/>
            </g>
          </svg>
          <UstwoLogoSequence autoAnim={1500} />
        </div>
        <h1>Digital Products, <br />services &amp; businesses</h1>
      </div>
    );
  }
}

export default HomeLoader;