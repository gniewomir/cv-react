import React from 'react';
import bem from '../../../util/bem';
import Column from '../../Row/Column';
import Row from '../../Row';
import Level from '../Level';

const Skill = ({title, description, level}) => {
    const b = bem('Skill');
    return (
        <Row border gutter>
            <Column>
                <h1 className={b('Row')('Header')}>{title}</h1>
                {description && (
                    () => {
                        return(
                            <p className={b('Row')('Description')}>
                                {description}
                            </p>
                        );
                    }
                )()}
            </Column>
            <Column>
                <Level levels={level} />
            </Column>
        </Row>
    );
};

export default Skill;