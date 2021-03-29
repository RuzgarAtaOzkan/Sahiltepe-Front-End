
// MODULES
import React from 'react';

// STYLES
import './IntroductionComponent.scss';

class IntroductionComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _boxes: [ // temporary api
                { title: 'Lorem Ipsum Dolor Sit Amet', img: 'https://images.pexels.com/photos/7174579/pexels-photo-7174579.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
                { title: 'Lorem Ipsum Dolor Sit Amet', img: 'https://images.pexels.com/photos/7174579/pexels-photo-7174579.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
                { title: 'Lorem Ipsum Dolor Sit Amet', img: 'https://images.pexels.com/photos/7174579/pexels-photo-7174579.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
                { title: 'Lorem Ipsum Dolor Sit Amet', img: 'https://images.pexels.com/photos/7174579/pexels-photo-7174579.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
            ]
        }
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
                <div
                    className="box"
                    key={box.id || index}
                >
                    <img src={box.img} alt="Intro Information" />
                    <h2>{box.title}</h2>
                </div>
            );
        });
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <>
                <section id="introduction">

                    <div className="shadow" />

                    <div className="boxes">
                        {this.renderIntroBoxes(this.state._boxes)}
                    </div>

                </section>
            </>
        );
    }
}

export default IntroductionComponent;

