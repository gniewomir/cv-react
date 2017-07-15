import React, { Component } from 'react';
import block from '../../util/bem';

import Column from '../Column';
import Row from '../Row';
import List from '../List';
import Item from '../List/Item';
import Block from './Block';

class SkillTable extends Component {
    render() {
        const b = block('SkillTable');
        return (
            <div className={b()}>
                <Row>
                    <Column rightborder>
                        <h1 className={b('Row')('Header')}>OOP PHP/Patterns</h1>
                    </Column>
                    <Column>
                        <List horizontal cssclass={b('List')}>
                            <Item>
                                <Block enabled>
                                    Learning
                                </Block>
                            </Item>
                            <Item>
                                <Block enabled>
                                    Worked with
                                </Block>
                            </Item>
                            <Item>
                                <Block enabled>
                                    Comfortable
                                </Block>
                            </Item>
                            <Item>
                                <Block enabled important>
                                    Experienced
                                </Block>
                            </Item>
                            <Item>
                                <Block>
                                    Expert
                                </Block>
                            </Item>
                        </List>
                    </Column>
                </Row>
                <Row>
                    <Column rightborder>
                        <h1 className={b('Row')('Header')}>Java Script/React/Redux</h1>
                    </Column>
                    <Column>
                        <List horizontal cssclass={b('List')}>
                            <Item>
                                <Block enabled>
                                    Learning
                                </Block>
                            </Item>
                            <Item>
                                <Block enabled>
                                    Worked with
                                </Block>
                            </Item>
                            <Item>
                                <Block enabled important>
                                    Comfortable
                                </Block>
                            </Item>
                            <Item>
                                <Block>
                                    Experienced
                                </Block>
                            </Item>
                            <Item>
                                <Block>
                                    Expert
                                </Block>
                            </Item>
                        </List>
                    </Column>
                </Row>
                <Row>
                    <Column rightborder>
                        <h1 className={b('Row')('Header')}>Shell/Linux</h1>
                    </Column>
                    <Column>
                        <List horizontal cssclass={b('List')}>
                            <Item>
                                <Block enabled>
                                    Learning
                                </Block>
                            </Item>
                            <Item>
                                <Block enabled>
                                    Worked with
                                </Block>
                            </Item>
                            <Item>
                                <Block enabled important>
                                    Comfortable
                                </Block>
                            </Item>
                            <Item>
                                <Block>
                                    Experienced
                                </Block>
                            </Item>
                            <Item>
                                <Block>
                                    Expert
                                </Block>
                            </Item>
                        </List>
                    </Column>
                </Row>
            </div>
        );
    }
}

export default SkillTable;