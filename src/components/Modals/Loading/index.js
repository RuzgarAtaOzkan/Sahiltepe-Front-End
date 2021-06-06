// MODULES
import React from 'react';
import { connect } from 'react-redux';

// ACTIONS
import globalActions from '../../../state/global/actions';

// ICONS
import { AiOutlineLoading } from 'react-icons/ai';

import styles from './Loading.module.scss';

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageY: window.pageYOffset,
    };

    this.blur = React.createRef();

    this.onScroll = this.onScroll.bind(this);
  }

  onScroll() {
    try {
      if (this.props.loading) {
        window.scrollTo(0, this.state.pageY);
      } else {
        this.setState({ pageY: window.pageYOffset });
      }

      this.blur.current.style.top = window.pageYOffset + 'px';
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    if (this.blur.current) {
      this.blur.current.style.top = window.pageYOffset + 'px';
    }

    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    if (this.blur.current) {
      this.blur.current.style.top = window.pageYOffset + 'px';
    }
    window.removeEventListener('scroll', this.onScroll);
  }

  render() {
    if (this.blur.current) {
      this.blur.current.style.top = window.pageYOffset + 'px';
    }

    return (
      <>
        <div
          className={
            this.props.loading
              ? `${styles.blur} ${styles.active}`
              : `${styles.blur}`
          }
          ref={this.blur}
        >
          <AiOutlineLoading />
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.global.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setLoading: (payload) => {
      dispatch(globalActions.setLoading(payload));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
