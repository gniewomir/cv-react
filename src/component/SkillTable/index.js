import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect} from 'react-redux';
import * as actions from '../../service/store/creator/skill';

import Observable from '../Observable';

import bem from '../../util/bem';
import Section from '../Section';
import Listing from './Listing';
import Loader from '../Loader';
import Filter from './Filter';

class SkillTable extends Component {

    componentDidMount() {
        this.props.fetchSkills();
    }

    render() {
        const b = bem('SkillTable');
        const suggestions = [
            {
                label: 'all',
                value: ''
            },
            {
                label: 'important',
                value: 'important'
            },
            {
                label: 'frontend',
                value: 'frontend'
            },
            {
                label: 'backend',
                value: 'backend'
            },
            {
                label: 'server',
                value: 'server'
            },
            {
                label: 'architecture',
                value: 'architecture'
            }
        ];
        return (
            <Observable name="skilltable">
                <Section className={b()}>
                    <h1 className={b('Header')}>Skills</h1>
                    <div className={b('Filter')}>
                        <Filter
                            query={this.props.query}
                            callback={this.props.searchSkills}
                            suggestions={suggestions}
                        />
                    </div>
                    {this.props.loading &&
                        <Loader />
                    }
                    {!this.props.loading && this.props.skills &&
                        <Listing skills={this.props.skills}/>
                    }
                </Section>
            </Observable>
        );
    }
}

export default connect(
    (state, ownProps) => {
        return { skills: state.SkillReducer.skills, query: state.SkillReducer.query }
    },
    (dispatch) => {
        return bindActionCreators(actions, dispatch);
    }
)(SkillTable);