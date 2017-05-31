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


export class Game extends Component {
    
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
                        <Code gameNivelPath={this.props.gameNivelPath} />
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