import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {

    renderLinks() {
        if (this.props.authenticated) {
            return (
                <li className="nav-item">
                    <Link className="nav-link" to="/signout">Sign Out</Link>
                </li>
            );
        } else {
            return [
                <li className="nav-item" key={1}>
                    <Link className="nav-link" to="/signin">Sign In</Link>
                </li>,
                <li className="nav-item" key={2}>
                    <Link className="nav-link" to="/signup">Sign Up</Link>
                </li>
            ];
        }
    }

    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <Link to="/" className="navbar-brand">OA - loops</Link>
                    <ul className="nav navbar-nav">
                        <li><Link className="nav-link" to="/nivels">Níveis</Link></li>
                        <li><Link className="nav-link" to="/stats">Estatísticas</Link></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        {this.renderLinks()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.getIn(['auth', 'authenticated'])
    };
}

export default connect(mapStateToProps)(Header);