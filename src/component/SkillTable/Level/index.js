import React from 'react';
import b from '../../../util/bem';
import List from '../../List';
import Item from '../../List/Item';
import Block from './../Block';

const Level = ({levels}) => {
    return(
        <List horizontal cssclass={b('List')}>
            {levels.map((level, index) => {
                return (
                    <Item key={index}>
                        <Block enabled={level.enabled} important={level.important} position={index}>
                            {level.label}
                        </Block>
                    </Item>
                );
            })}
        </List>
    );
}

export default Level;