
// NODE MODULES
import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

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
            headerScrolled: false,
            dropdown: null,
            headerElements: [
                { 
                    title: 'Tanitim', 
                    path: '/introduction', 
                    dropdown: [
                        { title: 'Sahiltepe Hakkında', path: '#about' },
                        { title: 'Resimler', path: '#images' },
                        { title: 'Videolar', path: '#videos' }
                    ] 
                },
                { 
                    title: 'Duyurular', 
                    path: '/announcements', 
                    dropdown: [
                        { title: 'Kat Malikleri Kurulu', path: '#floor-owners-board' },
                        { title: 'Yönetim Kurulu', path: '#board-of-directors' },
                        { title: 'KMK Danışma Kurulu', path: '#floor-owners-board-advisory-board' },
                        { title: 'Tüm Duyurular', path: '#all-announcements' }
                    ] 
                },
                { 
                    title: 'Mevzuat', 
                    path: '/legislation', 
                    dropdown: [
                        { title: 'Yönetim planı', path: '#managemenet-plan' },
                        { title: 'Kat Mülkiyeti Kanunu', path: '#floor-ownership-law' },
                        { title: 'Medeni Kanun', path: '#civil-law' },
                        { title: 'İstanbul İmar Yönetmeliği', path: '#istanbul-zoning-regulation' },
                        { title: 'İçtihatlar', path: '#jurisprudence' }
                    ] 
                },
                {
                    title: 'Kararlar',
                    path: '/decisions',
                    dropdown: [
                        { title: 'Kat Malikleri Kurulu', path: '#floor-owners-board' },
                        { title: 'Yönetim Kurulu', path: '#board-of-directors' },
                        { title: 'Tüm kararlar', path: '#all-decisions' }
                    ]
                },
                {
                    title: 'Etkinlikler', 
                    path: '/events', 
                    dropdown: [
                        { title: 'Oylamalar', path: '#votes' },
                        { title: 'Anketler', path: '#surveys' }
                    ] 
                },

            ],
        };

        this.onHamburgerClick = this.onHamburgerClick.bind(this);
        this.onSearchClick = this.onSearchClick.bind(this);
        this.renderDropdown = this.renderDropdown.bind(this);
        this.onMouseHeader = this.onMouseHeader.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    onHamburgerClick() {
        this.setState({ navToggle: !this.state.navToggle });
    }

    onSearchClick() {
        this.setState({ searchToggle: !this.state.searchToggle });
    }

    onMouseHeader(e) {
        const pathname = e.target.pathname.replace('/', '');
        this.setState({ dropdown: pathname });
    }

    handleScroll() {
        if (window.pageYOffset > 150) { 
            this.setState({ headerScrolled: true }); 
            window.removeEventListener('scroll', this.handleScroll);
        } 
    }

    renderDropdown(dropdown) {
        if (dropdown !== this.state.dropdown) {
            return null;
        }

        const dropdownToRender = this.state.headerElements.find((item, index) => {
            if ((item && item.path.replace('/', '')) === this.state.dropdown) {
                return item;
            } else { 
                return null;
            }
        });

        if (!dropdownToRender || !dropdownToRender.dropdown) {
            return null;
        }

        return (
            <ul className="dropdown">
                {
                    dropdownToRender?.dropdown?.map((item, index) => {
                        return (
                            <li 
                                key={index}
                                onClick={() => this.setState({ navToggle: false })}
                            >
                                <Link to={`${dropdownToRender.path}${item.path}`}>
                                    {item.title}
                                </Link>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }

    renderHeaderElements(items) {
        if (!items) {
            return null;
        }

        return items.map((item, index) => {
            const dropdown = item.path.replace('/', '');

            return (
                <li
                    key={index}
                    onClick={() => this.setState({ navToggle: false })}
                    onMouseEnter={this.onMouseHeader}
                    onMouseLeave={() => this.setState({ dropdown: null })}
                >
                    <Link to={item.path}>{item.title}</Link>
                    {this.renderDropdown(dropdown)}
                </li>
            );
        });
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
                                Sahiltepe Villaları
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
                            className={this.state.navToggle ? "active" : ""}
                        >
                            {
                                this.props.user ? 
                                <li>
                                    <Link to="profile">Hesabim</Link>
                                </li> :
                                <li>
                                    <Link to="sign-in">Giris Yap</Link>
                                </li>
                            }

                            {this.renderHeaderElements(this.state.headerElements)}

                            <li>
                                <div id="search">
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
                                </div>
                            </li>
                        </ul>
                    </nav>
                </header>
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user.user
    }
}

export default connect(mapStateToProps, null)(withRouter(Header));
