
// NODE MODULES
import React from 'react'
import { Link } from 'react-router-dom';

// ICONS
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaSearch } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';

// STYLES
import './Header.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            navToggle: false,
            searchToggle: false,
            headerScrolled: false
        };

        this.onHamburgerClick = this.onHamburgerClick.bind(this);
        this.onSearchClick = this.onSearchClick.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    onHamburgerClick() {
        this.setState({ navToggle: !this.state.navToggle });
    }

    onSearchClick() {
        this.setState({ searchToggle: !this.state.searchToggle });
    }

    handleScroll() {
        if (window.pageYOffset > 100) { 
            this.setState({ headerScrolled: true }); 
            window.removeEventListener('scroll', this.handleScroll);
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
            <>
                <header>
                    <nav 
                        className={
                            this.state.headerScrolled ? 
                            "scrolled" :
                            ""
                        }
                    >
                        

                        <h1>
                            <Link to="/">
                                Sahiltepe Villalari
                            </Link>
                        </h1>

                        {
                            this.state.navToggle ?
                            <CgClose
                                id="nav-close"
                                onClick={this.onHamburgerClick}
                            /> :
                            <GiHamburgerMenu
                                id="nav-hamburger"
                                onClick={this.onHamburgerClick}
                            />
                        }

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
                                <Link to="about">Announcements</Link>
                            </li>
                            <li>
                                <Link to="contact">Votes</Link>
                            </li>
                            <li>
                                <Link to="contact">Surveys</Link>
                            </li>
                            <li 
                                id="search"
                            >

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
