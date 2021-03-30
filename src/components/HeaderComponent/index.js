
// NODE MODULES
import React from 'react'
import { Link, withRouter } from 'react-router-dom';

// ICONS
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaSearch } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';

// STYLES
import './HeaderComponent.scss';

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
                { title: 'Giris Yap', path: '/sign-in', dropdown: false },
                { 
                    title: 'Duyurular', 
                    path: '/announcements', 
                    dropdown: [
                        { title: 'Kat Malikleri Kurulu', path: '/sarmaz' },
                        { title: 'Yönetim Kurulu', path: '#' },
                        { title: 'KMK Danışma Kurulu', path: '#' },
                        { title: 'Tüm Duyurular', path: '#' }
                    ] 
                },
                { 
                    title: 'Etkinlikler', 
                    path: '/legislation', 
                    dropdown: [
                        { title: 'Yönetim planı', path: '#' },
                        { title: 'Kat Mülkiyeti Kanunu', path: '#' },
                        { title: 'Medeni Kanun', path: '#' },
                        { title: 'İstanbul İmar Yönetmeliği', path: '#' },
                        { title: 'İçtihatlar', path: '#' }
                    ] 
                },
                {
                    title: 'Kararlar',
                    path: '/decisions',
                    dropdown: [
                        { title: 'Yönetim planı', path: '#' },
                        { title: 'Kat Mülkiyeti Kanunu', path: '#' },
                        { title: 'Medeni Kanun', path: '#' },
                        { title: 'İstanbul İmar Yönetmeliği', path: '#' },
                        { title: 'İçtihatlar', path: '#' }
                    ]
                },
                {
                    title: 'Etkinlikler', 
                    path: '/events', 
                    dropdown: [
                        { title: 'Oylamalar', path: '/votes' },
                        { title: 'Anketler', path: '/surveys' }
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

    renderDropdown(dropdown) {
        if (dropdown !== this.state.dropdown) {
            return null;
        }

        const dropdownToRender = this.state.headerElements.find((item, index) => {
            if ((item.path.replace('/', '')) === this.state.dropdown) {
                return item;
            }
        });

        if (!dropdownToRender.dropdown) {
            return null;
        }

        console.log(dropdownToRender.dropdown);

        if (dropdownToRender.dropdown) {
            return (
                <ul className="dropdown">
                    {
                        dropdownToRender?.dropdown?.map((item, index) => {
                            return (
                                <li
                                    key={item.id || index}
                                >
                                    <Link to={item.path}>
                                        {item.title}
                                    </Link>
                                </li>
                            );
                        })
                    }
                </ul>
            );
        }

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
                    onMouseEnter={this.onMouseHeader}
                    onMouseLeave={() => this.setState({ dropdown: null })}
                >
                    <Link to={item.path}>{item.title}</Link>
                    {this.renderDropdown(dropdown)}
                </li>
            );
        });
    }

    onMouseHeader(e) {
        const pathname = e.target.pathname.replace('/', '').toString();
        this.setState({ dropdown: pathname });
    }

    handleScroll() {
        if (window.pageYOffset > 150) { 
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

export default withRouter(Header);
