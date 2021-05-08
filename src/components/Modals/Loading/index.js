
// MODULES
import React from 'react';

// ICONS
import { AiOutlineLoading } from 'react-icons/ai';

import './Loading.scss';

class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.blur = React.createRef();

        this.blurIntervalId = 0;

        this.onScroll = this.onScroll.bind(this);
    }

    displayBlur(loading) {
        if (!loading) {
            return null;
        }

        let blur = .5;

        this.blurIntervalId = setInterval(() => {
            blur = blur + .5;

            if (blur > 4) {
                return clearInterval(this.blurIntervalId);
            }

            if (this.blur.current) {
                this.blur.current.style.backdropFilter = `blur(${blur}px)`;
            }
            
        }, 100);

        return (
            
            <div 
                className="blur"
                style={{ top: window.pageYOffset }}
                ref={this.blur}
            >
                <AiOutlineLoading />
            </div>
        );
    }

    onScroll(e) {

        try {
            this.blur.current.style.top = window.pageYOffset + 'px';
        } catch (error) {
            
        }

    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    }

    render() {
        return (
            <>
                {this.displayBlur(this.props.loading)}
            </>
        );
    }
}

export default Loading;


