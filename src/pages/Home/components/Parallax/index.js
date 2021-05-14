// NODE MODULES
import React from 'react';

// SVG ICONS
import { TiArrowSortedDown } from 'react-icons/ti';

// STYLES
import './Parallax.scss';

class Parallax extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };

    this.shadow = React.createRef();
    this.mountain3 = React.createRef();
    this.mountain2 = React.createRef();
    this.mountain1 = React.createRef();
    this.mountain = React.createRef();

    this.explore = this.explore.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    if (
      !this.mountain3.current ||
      !this.mountain2.current ||
      !this.mountain1.current ||
      !this.mountain.current
    ) {
      return null;
    }

    const windowY = window.pageYOffset;

    this.shadow.current.style.height = `${200 + windowY * 0.5}px`;

    this.mountain2.current.style.top = `${-windowY * 0.5}px`;
    this.mountain1.current.style.top = `${-windowY * 0.9}px`;
    this.mountain.current.style.top = `${-windowY * 1.2}px`;
  }

  explore() {
    window.scrollTo(0, window.innerHeight);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <section id="parallax">
        <div className="title">
          <h1>Sahiltepe Villaları</h1>
          <h2>Cennete Açılan Yeni Bir Kapı</h2>
        </div>

        <div className="explore" onClick={this.explore}>
          <h2>Explore</h2>
          <TiArrowSortedDown id="down-arrow" />
        </div>

        <div className="shadow" ref={this.shadow} />

        <div className="images">
          <img
            ref={this.mountain3}
            id="mountain3"
            src="/assets/media/parallax-mountain3.png"
            alt="Mountain"
          />
          <img
            ref={this.mountain2}
            id="mountain2"
            src="/assets/media/parallax-mountain2.png"
            alt="Mountain"
          />
          <img
            ref={this.mountain1}
            id="mountain1"
            src="/assets/media/parallax-mountain1.png"
            alt="Mountain"
          />
          <img
            ref={this.mountain}
            id="mountain"
            src="/assets/media/parallax-mountain.png"
            alt="Cliff"
          />
        </div>

        <div className="blend" />
      </section>
    );
  }
}

export default Parallax;
