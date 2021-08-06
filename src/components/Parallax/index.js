// NODE MODULES
import React from 'react';

// SVG ICONS
import { TiArrowSortedDown } from 'react-icons/ti';

// STYLES
import styles from './Parallax.module.scss';

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
    this.handleLoad = this.handleLoad.bind(this);
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

    this.mountain2.current.style.top = `${-windowY * 0.3 - 20}px`;
    this.mountain1.current.style.top = `${-windowY * 0.6 - 50}px`;
    this.mountain.current.style.top = `${-windowY * 0.9}px`;
  }

  handleLoad() {
    //const windowY = window.pageYOffset;

    if (
      !this.mountain.current ||
      !this.mountain2.current ||
      !this.mountain1.current
    ) {
      return;
    }
  }

  explore() {
    window.scrollTo(0, window.innerHeight);
  }

  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('load', this.handleLoad);
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <section id={styles['parallax']}>
        <div className={styles['title']}>
          <h1>Sahiltepe Villalari</h1>
          <h2>Cennete Açılan Yeni Bir Kapı</h2>
        </div>

        <div className={styles['explore']} onClick={this.explore}>
          <h2>Explore</h2>
          <TiArrowSortedDown id={styles['down-arrow']} />
        </div>

        <div className={styles['shadow']} ref={this.shadow} />

        <div className={styles['images']}>
          <img
            ref={this.mountain3}
            id={styles['mountain3']}
            src="/assets/media/parallax-mountain3.png"
            alt="Mountain"
          />
          <img
            ref={this.mountain2}
            id={styles['mountain2']}
            src="/assets/media/parallax-mountain2.png"
            alt="Mountain"
          />
          <img
            ref={this.mountain1}
            id={styles['mountain1']}
            src="/assets/media/parallax-mountain1.png"
            alt="Mountain"
          />
          <img
            ref={this.mountain}
            id={styles['mountain']}
            src="/assets/media/parallax-mountain.png"
            alt="Cliff"
          />
        </div>

        <div className={styles['blend']} />
      </section>
    );
  }
}

export default Parallax;
