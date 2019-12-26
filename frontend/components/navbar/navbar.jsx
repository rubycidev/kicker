import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../app/assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          modalAppear: "hidden"
        };

        this.handleExplore = this.handleExplore.bind(this);
    }

  handleExplore() {
    if (this.state.modalAppear === "hidden") {
      this.setState({ modalAppear: "modal" });
    } else if (this.state.modalAppear === "modal") {
      this.setState({ modalAppear: "hidden" });
    }

  }
    
    render() {
        let stateButton;
        if (this.props.currentUser === null) {
            stateButton = <Link to="/login" className="nav-link">Log in</Link>
        } else {
            stateButton = (
              <Link
                to="/"
                className="nav-link"
                onClick={() => this.props.logout()}
              >
                Log out
              </Link>
            );
        }

        let notLogged;

        if (this.props.currentUser === null) {
          notLogged = '/login'
        } else {
          notLogged = '/projects/new'
        }

        return (
          <div className="navbar-and-modal">
              <div className={this.state.modalAppear}>
              <div className="modal-x-btn" onClick={() => this.handleExplore()}>X</div>
                <div className="modal-header">Collections
                  <div className="modal-links">
                  <Link onClick={() => this.handleExplore()} to={{
                      pathname: '/search',
                    state: {
                      category_id: '', location: '', filter: 'loved', filtprojects: ''
                    }
                      }}> Projects We Love </Link>
                  <Link onClick={() => this.handleExplore()} to={{
                    pathname: '/search',
                    state: {
                      category_id: '', location: '', filter: 'funded', filtprojects: ''
                    }
                  }}> Nearly Funded </Link>
                  <Link onClick={() => this.handleExplore()} to={{
                    pathname: '/search',
                    state: {
                      category_id: '', location: '', filter: 'newest', filtprojects: ''
                    }
                  }}>Just Launched </Link>
                  <Link onClick={() => this.handleExplore()} to={{
                    pathname: '/search',
                    state: {
                      category_id: '', location: '', filter: '', filtprojects: ''
                    }
                  }}>Everything </Link>
                  </div>
                </div>
              <div className="modal-header">Categories
                  <div className="modal-links">
                  <Link onClick={() => this.handleExplore()} className="" to="/category/1">Arts</Link>
                  <Link onClick={() => this.handleExplore()} className="" to="/category/2">Comics & Illustration</Link>
                  <Link onClick={() => this.handleExplore()} className="" to="/category/3">Design & Tech</Link>
                  <Link onClick={() => this.handleExplore()} className="" to="/category/4">Film</Link>
                  <Link onClick={() => this.handleExplore()} className="" to="/category/5">Food & Craft</Link>
                  <Link onClick={() => this.handleExplore()} className="" to="/category/6">Games</Link>
                  <Link onClick={() => this.handleExplore()} className="" to="/category/7">Music</Link>
                  <Link onClick={() => this.handleExplore()} className="" to="/category/8">Publishing</Link>
                </div>
              </div>
              </div>
            <div className="navbar">
              <div className="left-bar">
                <p className="nav-link" onClick={ () => this.handleExplore()}>Explore</p>
                <Link to={notLogged} className="nav-link">Start a project</Link>
              </div>
              <div className="logo-bar">
                <Link to="/" className="nav-link">
                  <img className="logo-img" src={Logo} alt="logo" />
                </Link>
              </div>
              <div className="right-bar">
                <div className="nav-link">
                  <Link to="/search" className="link">
                    Search{" "}
                    <FontAwesomeIcon className="search-icon" icon={faSearch} />
                  </Link>
                </div>
                {stateButton}
              </div>
            </div>
          </div>
        );
    }
}

export default Navbar;