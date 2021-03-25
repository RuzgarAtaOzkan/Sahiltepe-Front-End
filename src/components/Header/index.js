
// NODE MODULES
import React from 'react'
import { Link } from 'react-router-dom';

// ICONS
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaSearch } from 'react-icons/fa';

// STYLES
import './Header.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            navToggle: false,
            searchToggle: false
        };

        this.searchIcon = React.createRef();

        this.onHamburgerClick = this.onHamburgerClick.bind(this);
        this.onSearchClick = this.onSearchClick.bind(this);
    }

    onHamburgerClick() {
        this.setState({ navToggle: !this.state.navToggle });
    }

    onSearchClick() {
        this.setState({ searchToggle: !this.state.searchToggle });
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <>
                <header>
                    <nav>
                        <h1>Sahiltepe Villalari</h1>

                        <GiHamburgerMenu
                            id="hamburger"
                            onClick={this.onHamburgerClick}
                        />

                        <ul
                            className={
                                this.state.navToggle ?
                                "active" :
                                ""
                            }
                        >
                            <li>
                                <Link to="sign-in">Sign In</Link>
                            </li>
                            <li>
                                <Link to="sign-up">Sign Up</Link>
                            </li>
                            <li>
                                <Link to="about">About</Link>
                            </li>
                            <li>
                                <Link to="contact">Contact</Link>
                            </li>
                            <li id="search">
                                <input
                                    type="text"
                                    value={this.state.searchTerm}
                                    onChange={(e) => this.setState({ searchTerm: e.target.value })}
                                    placeholder="Search..."
                                    className={
                                        this.state.searchToggle ? 
                                        "active" : 
                                        ""
                                    }
                                />

                                <FaSearch
                                    id="icon"
                                    onClick={this.onSearchClick}
                                />
                            </li>
                        </ul>
                    </nav>
                </header>
            </>
        );
    }
}

export default Header;
