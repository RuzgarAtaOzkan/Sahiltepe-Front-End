// NODE MODULES
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import cn from 'classnames';

// Translate
import translate from '../../translations/translate';

// ICONS
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaSearch } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';

// STYLES
import styles from './Header.module.scss';

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
          title: translate('header.nav.introduction.title'),
          path: '/introduction',
          dropdown: [
            {
              title: translate(
                'header.nav.introduction.dropdown.aboutSahiltepe'
              ),
              path: '#about',
            },
            {
              title: translate('header.nav.introduction.dropdown.images'),
              path: '#images',
            },
            {
              title: translate('header.nav.introduction.dropdown.videos'),
              path: '#videos',
            },
          ],
        },
        {
          title: translate('header.nav.announcements.title'),
          path: '/announcements',
          dropdown: [
            {
              title: translate(
                'header.nav.announcements.dropdown.allAnnouncements'
              ),
              path: '#all-announcements',
            },
            {
              title: translate(
                'header.nav.announcements.dropdown.floorOwnersBoard'
              ),
              path: '#floor-owners-board',
            },
            {
              title: translate(
                'header.nav.announcements.dropdown.boardOfDirectors'
              ),
              path: '#board-of-directors',
            },
            {
              title: translate(
                'header.nav.announcements.dropdown.floorOwnersBoardAdvisoryBoard'
              ),
              path: '#floor-owners-board-advisory-board',
            },
          ],
        },
        {
          title: translate('header.nav.events.title'),
          path: '/events',
          dropdown: [
            {
              title: translate('header.nav.events.dropdown.votes'),
              path: '#votes',
            },
            {
              title: translate('header.nav.events.dropdown.surveys'),
              path: '#surveys',
            },
          ],
        },
        {
          title: translate('header.nav.legislation.title'),
          path: '/legislation',
          dropdown: [
            {
              title: translate(
                'header.nav.legislation.dropdown.managementPlan'
              ),
              path: '#managemenet-plan',
            },
            {
              title: translate(
                'header.nav.legislation.dropdown.floorOwnershipLaw'
              ),
              path: '#floor-ownership-law',
            },
            {
              title: translate('header.nav.legislation.dropdown.civilLaw'),
              path: '#civil-law',
            },
            {
              title: translate(
                'header.nav.legislation.dropdown.istanbulZoningRegulation'
              ),
              path: '#istanbul-zoning-regulation',
            },
            {
              title: translate('header.nav.legislation.dropdown.jurisprudence'),
              path: '#jurisprudence',
            },
          ],
        },
        {
          title: translate('header.nav.decisions.title'),
          path: '/decisions',
          dropdown: [
            {
              title: translate(
                'header.nav.decisions.dropdown.floorOwnersBoard'
              ),
              path: '#floor-owners-board',
            },
            {
              title: translate(
                'header.nav.decisions.dropdown.boardOfDirectors'
              ),
              path: '#board-of-directors',
            },
            {
              title: translate('header.nav.decisions.dropdown.allDecisions'),
              path: '#all-decisions',
            },
          ],
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
    if (e && e.target) {
      const pathname = e?.target?.pathname?.replace('/', '');
      this.setState({ dropdown: pathname });
    }
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

    const headerElement = this.state.headerElements.find((item, index) => {
      if ((item && item.path.replace('/', '')) === this.state.dropdown) {
        return item;
      } else {
        return null;
      }
    });

    if (!headerElement || !headerElement.dropdown) {
      return null;
    }

    return (
      <ul className={cn(styles['dropdown'], styles['active'])}>
        {headerElement?.dropdown?.map((item, index) => {
          return (
            <li key={index} onClick={() => this.setState({ navToggle: false })}>
              <Link to={`${headerElement.path}${item.path}`}>{item.title}</Link>
            </li>
          );
        })}
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
          onClick={(e) => {
            this.onMouseHeader(e);
          }}
          onMouseEnter={(e) => {
            if (window.innerWidth > 900) {
              this.onMouseHeader(e);
            }
          }}
          onMouseLeave={() => {
            if (window.innerWidth > 900) {
              this.setState({ dropdown: null });
            }
          }}
        >
          <Link to={item.path}>{item.title}</Link>
          {this.renderDropdown(dropdown)}
        </li>
      );
    });
  }

  componentDidMount() {
    this.setState({ headerScrolled: false });
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    this.setState({ headerScrolled: false });
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <>
        <header>
          <nav className={this.state.headerScrolled ? styles['scrolled'] : ''}>
            <h1>
              <Link to="/">{translate('header.title')}</Link>
            </h1>

            {this.state.navToggle ? (
              <CgClose
                id={styles['nav-close']}
                onClick={this.onHamburgerClick}
              />
            ) : (
              <GiHamburgerMenu
                id={styles['nav-hamburger']}
                onClick={this.onHamburgerClick}
              />
            )}

            <ul className={this.state.navToggle ? styles['active'] : ''}>
              {this.props.user ? (
                <li>
                  <Link
                    to="profile"
                    onClick={() => this.setState({ navToggle: false })}
                  >
                    {translate('header.nav.login.title.authorized')}
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    to="sign-in"
                    onClick={() => this.setState({ navToggle: false })}
                  >
                    {translate('header.nav.login.title.normal')}
                  </Link>
                </li>
              )}

              {this.renderHeaderElements(this.state.headerElements)}

              <li>
                <div id={styles['search']}>
                  <input
                    type="text"
                    value={this.state.searchTerm}
                    onChange={(e) =>
                      this.setState({ searchTerm: e.target.value })
                    }
                    placeholder="Search..."
                    className={this.state.searchToggle ? styles['active'] : ''}
                  />

                  <FaSearch id={styles['icon']} onClick={this.onSearchClick} />
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
    user: state.user.user,
  };
}

export default connect(mapStateToProps, null)(withRouter(Header));
