import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect} from 'react-redux';
import * as actions from '../../service/store/creator/skill';

import bem from '../../util/bem';
import Section from '../Section';
import Listing from './Listing';
import Loader from '../Loader';

class SkillTable extends Component {

    componentDidMount() {
        this.props.searchSkills('important');
    }

    render() {
        const b = bem('SkillTable');
        return (
            <Section className={b()}>
                <input placeholder="Search..." className={b('Filter')} onChange={(event) => { this.props.searchSkills(event.target.value); }} />
                {this.props.loading &&
                    <Loader />
                }
                {this.props.skills && this.props.skills &&
                    <Listing skills={this.props.skills}/>
                }
            </Section>
        );
    }
}

export default connect(
    (state, ownProps) => {
        return { skills: state.SkillReducer.skills }
    },
    (dispatch) => {
        return bindActionCreators(actions, dispatch);
    }
)(SkillTable);