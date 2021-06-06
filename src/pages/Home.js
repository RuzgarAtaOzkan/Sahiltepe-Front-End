// MODULES
import React from 'react';

// COMPONENTS
import Parallax from '../components/Parallax';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _boxes: [
        // temporary api
        {
          title: 'Lorem Ipsum Dolor Sit Amet',
          img: 'https://i.pinimg.com/564x/3b/de/80/3bde803b531202e6687c86c844447901.jpg',
        },
        {
          title: 'Lorem Ipsum Dolor Sit Amet',
          img: 'https://i.pinimg.com/564x/3b/de/80/3bde803b531202e6687c86c844447901.jpg',
        },
        {
          title: 'Lorem Ipsum Dolor Sit Amet',
          img: 'https://i.pinimg.com/564x/3b/de/80/3bde803b531202e6687c86c844447901.jpg',
        },
        {
          title: 'Lorem Ipsum Dolor Sit Amet',
          img: 'https://i.pinimg.com/564x/3b/de/80/3bde803b531202e6687c86c844447901.jpg',
        },
      ],
      introTriggerOffset: 0,
      introScroll: false,
    };

    this.boxes = React.createRef();

    this.handleLoad = this.handleLoad.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  renderIntroBoxes(boxes) {
    if (!boxes) {
      return (
        <div className="boxes">
          <h1>No Boxes Found :(</h1>
        </div>
      );
    }

    return boxes.map((box, index) => {
      return (
        <div className="box" key={index}>
          <img src={box.img} alt="Intro Information" />
          <h2>{box.title}</h2>
        </div>
      );
    });
  }

  handleLoad() {
    const rect = this.boxes.current.getBoundingClientRect();
    const decVal = rect.top / 3;
    const introTriggerOffset = rect.top - decVal;
    this.setState({ introTriggerOffset });
  }

  handleScroll() {
    if (window.pageYOffset > this.state.introTriggerOffset) {
      window.removeEventListener('scroll', this.handleScroll);
      this.setState({ introScroll: true });
    }
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
      <>
        <Parallax />
        <section id="introduction">
          <div className="shadow" />

          <img
            className="sunset"
            src="/assets/media/sunset-mountain.jpeg"
            alt="Sunset Mountain"
          />
          <div className="overlay"></div>

          <h1>Sitemizde One Cikanlar</h1>

          <div ref={this.boxes} className="boxes">
            {this.renderIntroBoxes(this.state._boxes)}
          </div>
        </section>
      </>
    );
  }
}

export default Home;
