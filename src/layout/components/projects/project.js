import React, { Component } from 'react'
import './project.css';
import livit from '../../../assets/livit-home.png'
import papaeatz from '../../../assets/papaeatz-home.png'
import parsec from '../../../assets/parsec.png'
import factory from '../../../assets/factory.png'


export default class Project extends Component {
    render() {
        return (
            <div className="project">
                <h3 className='heading'>Projects</h3>
                <div className="portfolio-content">
              <a href="https://livit-theorydev.web.app" target="_blank" className="card">
                <img src={livit} alt="" />
                <div className="cardDetail">
                  <h3 className='title'>Livit</h3>
                  <h4>Livit is a leather goods manufacturing company with an e-commerce website where user will have referal code and will get rewarded when a user signs up using his referal code. </h4>
                </div>
              </a>
              <a href="https://papaeatz.web.app" target="_blank" className="card">
                <img src={papaeatz} alt="" />
                <div className="cardDetail">
                  <h3 className='title'>PapaEatz</h3>
                  <h4>PapaEatz is a restaurant located in America. Their website is an e-commerce webite with a for food orders and delivering locally. </h4>
                </div>
              </a>
              <a href="https://parsec-demo.web.app" target="_blank" className="card">
                <img src={parsec} alt="" />
                <div className="cardDetail">
                  <h3 className='title'>Parsec Demo</h3>
                  <h4>At Parsec we are on a mission to help make your manufacturing operations as simple as possible, by giving you greater visibility, knowledge, and control. </h4>
                  {/* <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed illo eaque voluptatem voluptate labore maiores</h4> */}
                </div>
              </a>
                <a href="https://factory-demo.web.app" target="_blank" className="card">
                  <img src={factory} alt="" />
                  <div className="cardDetail">
                    <h3 className='title'>Factory Demo</h3>
                    <h4>The Website Factory can implement strategies to get your local business to the top of your local search results, as well as increasing your prominence in a number of other local directory listings.</h4>
                  </div>
                </a>
              </div>
            </div>
        )
    }
}
