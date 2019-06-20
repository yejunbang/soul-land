import React from 'react';
import '../../style/layout/header.css'

class Header extends React.Component {
  constructor(props){
    super(props)
    this.state={mouseleave : false};
    this.mouseOutHandler = this.mouseOutHandler.bind(this);
    this.mouseOverHandler = this.mouseOverHandler.bind(this);
  }
  mouseOverHandler() {
    this.setState({mouseleave:false})
  }
  mouseOutHandler(){
    this.setState({mouseleave:true})
  }
  render() {
    return (
      <header id="header">
        <div className="layout header-logo">
          <svg t="1561040363059" className={`logo ${this.state.mouseleave?'mouseOut':'mouseOver'}`} onMouseOver={this.mouseOverHandler} onMouseOut={this.mouseOutHandler} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="978" width="200" height="200">
            <path
              d="M472.224 576l-28.672 28.672a64 64 0 0 1-16.576 61.824l-45.248 45.28a64 64 0 0 1-90.496 0l-181.024-181.024a64 64 0 0 1 0-90.528l45.248-45.248a64 64 0 0 1 61.824-16.576l193.12-193.12a64 64 0 0 1 16.576-61.824l45.248-45.248a64 64 0 0 1 90.528 0L743.776 259.2a64 64 0 0 1 0 90.496l-45.28 45.248a64 64 0 0 1-61.824 16.576l-28.672 28.672 339.424 339.424a64 64 0 0 1 0 90.496l-45.28 45.28a64 64 0 0 1-90.496 0L472.224 576z m-67.872-22.624l181.024-181.024-135.776-135.776-181.024 181.024 135.776 135.776z m135.776-407.296a32 32 0 1 0-45.248 45.248l135.744 135.776a32 32 0 0 0 45.248-45.248L540.16 146.08z m-316.8 316.8a32 32 0 0 0-45.248 45.248l135.776 135.744a32 32 0 0 0 45.248-45.248l-135.776-135.776zM608 530.688A32 32 0 0 0 562.752 576l271.52 271.52a32 32 0 0 0 45.248-45.248L608 530.752z"
              fill="#1296db" p-id="979"></path>
          </svg>
          <nav>
            <ul className="navbar">
              <li>
                <a href="#">简历</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}
export default Header;
