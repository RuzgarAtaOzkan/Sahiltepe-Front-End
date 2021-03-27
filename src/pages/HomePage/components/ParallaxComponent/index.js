

// NODE MODULES
import React from 'react';

// STYLES
import './ParallaxComponent.scss';

class ParallaxComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }

        this.shadow = React.createRef();

        this.mountain3 = React.createRef();
        this.mountain2 = React.createRef();
        this.mountain1 = React.createRef();
        this.mountain = React.createRef();

        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
        if (!this.mountain3.current || !this.mountain2.current || !this.mountain1.current || !this.mountain.current) {
            return null;
        }

        const windowY = window.pageYOffset;


        console.log(`${200 + (windowY * 0.5)}px`)
        this.shadow.current.style.height = `${200 + (windowY * 0.5)}px`; 

        this.mountain2.current.style.top = `${-windowY * 0.5}px`;
        this.mountain1.current.style.top = `${-windowY * 0.9}px`;

        if (window.innerWidth < 900) {
            this.mountain.current.style.top = `${-windowY * 2.7}px`;
        } else {
            this.mountain.current.style.top = `${-windowY * 1.2}px`;
        }


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

                <div 
                    className="shadow"
                    ref={this.shadow}
                />

                <div className="images">
                    <img ref={this.mountain3} id="mountain3" src="/media/parallax-mountain3.png" alt="Mountain" />
                    <img ref={this.mountain2} id="mountain2" src="/media/parallax-mountain2.png" alt="Mountain" />
                    <img ref={this.mountain1} id="mountain1" src="/media/parallax-mountain1.png" alt="Mountain" />
                    <img ref={this.mountain} id="mountain" src="/media/parallax-mountain.png" alt="Mountain" />
                </div>

                <div className="blend" />

            </section>
        );
    }
}

export default ParallaxComponent;
