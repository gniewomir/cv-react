import React from 'react';
import b from '../../util/bem';

import Section from '../Section';
import Column from '../Row/Column';
import Row from '../Row';
import List from '../List';
import Item from '../List/Item';
import Link from '../Link';
import Observable from '../Observable';

const Contact = () => {
    return (
        <Observable name="contact">
            <Section viewport css={b('Contact')}>
                <h1>Contact</h1>
                <Row gutter>
                    <Column>
                        <List>
                            <Item header="Email">
                                <Link
                                    href="gniewomir.swiechowski@gmail.com"
                                    type="email"
                                    content="gniewomir.swiechowski@gmail.com"
                                />
                            </Item>
                            <Item header="Skype">
                                <Link
                                    href="gniewomir.swiechowski"
                                    type="skype"
                                    content="gniewomir.swiechowski"
                                />
                            </Item>
                            <Item header="Phone">
                                <Link
                                    href="+48532423322"
                                    type="phone"
                                    content="+48 532-423-322"
                                />
                            </Item>
                            <Item header="GitHub">
                                <Link
                                    href="https://github.com/gniewomir"
                                    content="https://github.com/gniewomir"
                                />
                            </Item>
                        </List>
                    </Column>
                    <Column>
                        <List>
                            <Item
                                header="Company"
                                content="Enraged Gniewomir Świechowski"
                            />
                            <Item header="Country" content="Poland" />
                            <Item header="NIP" content="683-19-52-002" />
                            <Item header="REGON" content="363997130" />
                        </List>
                    </Column>
                </Row>
            </Section>
        </Observable>
    );
};

export default Contact;
