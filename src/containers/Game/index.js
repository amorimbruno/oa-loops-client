import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
import { createStructuredSelector } from 'reselect';

import Board from '../../components/Board';
import Instructions from '../../components/Instructions';
import Code from '../Code/index';
import { makeSelectUserPath } from '../Code/selectors';
import {
    selectGame,
    makeSelectGameNivel,
    makeSelectGameNivelId,
    makeSelectGameNivelPath,
    makeSelectGameNivelInstructions
} from './selectors';
import { firebaseApp, nivelRef } from '../../firebase';
import * as firebase from 'firebase';


export class Game extends Component {

    componentDidMount() {
    //     const { id } = this.props.match.params;
    //     this.props.fetchPost(id);
    }


    // componentDidMount() {
    //     nivelRef.on('value', snap => {
    //         // console.log("snap:" + JSON.stringify(snap));
    //         // let goals = [];
    //         // const nivels = snap.val();
    //         // console.log("snap 1: " + snap.val());
    //         let nivels = [];
    //         snap.forEach(nivel => {
    //             nivels = nivel.val();
    //             console.log("nivel val " + nivel.val());
    //         // const { email, title } = goal.val();
    //         // const serverKey = goal.key;
    //         // goals.push({ email, title, serverKey });
    //         })
    //         // this.props.setGoals(goals);
    //     })
    // }

     signOut() {
        firebaseApp.auth().signOut();
    }
    
    render() {
        return (
            <Grid>
                <Row>
                    <PageHeader>OA <small>loops - Nível {this.props.gameNivelId}</small></PageHeader>
                   
                    
                    <Col md={6}>
                        <Board rows={5} columns={5} nivels={this.props.gameNivelPath} userPath={this.props.codeUserPath} />
                        <Instructions gameNivelInstructions={this.props.gameNivelInstructions} />
                    </Col>
                    <Col md={6}>
                        <Code gameNivelPath={this.props.gameNivelPath} gameNivelId={this.props.gameNivelId} />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    game: selectGame,
    gameNivel: makeSelectGameNivel(),
    gameNivelId: makeSelectGameNivelId(),
    gameNivelPath: makeSelectGameNivelPath(),
    gameNivelInstructions: makeSelectGameNivelInstructions(),
    codeUserPath: makeSelectUserPath()
});

export default connect(mapStateToProps)(Game);
