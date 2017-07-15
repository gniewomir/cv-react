import React, { Component } from 'react';
import block from '../../util/bem';

import Logo from '../../image/svg/Logo.svg';
import Accent from '../Accent';
import Section from '../Section';
import Column from '../Column';
import Row from '../Row';
import List from '../List';
import Item from '../List/Item';
import Link from '../Link';
import SkillTable from '../SkillTable';

class App extends Component {
    render() {
        const b = block("App");
        return (
            <div className={b()}>
                <Section>
                    <Row>
                        <Column rightgutter>
                            <img className={b("Logo")} src={Logo} alt="Enraged Gniewomir Świechowski - logo" />
                        </Column>
                        <Column leftgutter>
                            <h1>Gniewomir Świechowski</h1>
                            <p>
                                Full Stack Developer <Accent>@</Accent> Enraged<br />
                                Technical Architect <Accent>@</Accent> Gremi Media SA
                            </p>
                            <p>
                                Experienced full stack developer. Focused on creating maintainable, modular code & following industry best practices. Basically your guy, if you have big pile of legacy code and don't mind swearing.
                            </p>
                        </Column>
                    </Row>
                </Section>
                <Section>
                    <SkillTable />
                </Section>
                <Section centered>
                    <h1>Contact</h1>
                    <Row>
                        <Column rightgutter>
                            <List>
                                <Item header="Email">
                                    <Link href="gniewomir.swiechowski@gmail.com" type="email" content="gniewomir.swiechowski@gmail.com"/>
                                </Item>
                                <Item header="Skype">
                                    <Link href="gniewomir.swiechowski" type="skype" content="gniewomir.swiechowski"/>
                                </Item>
                                <Item header="Phone">
                                    <Link href="+48532423322" type="phone" content="+48 532-423-322"/>
                                </Item>
                                <Item header="GitHub">
                                    <Link href="https://github.com/gniewomir"/>
                                </Item>
                            </List>
                        </Column>
                        <Column leftgutter>
                            <List>
                                <Item header="Company" content="Enraged Gniewomir Świechowski" />
                                <Item header="Country" content="Poland" />
                                <Item header="NIP" content="683-19-52-002" />
                                <Item header="REGON" content="363997130" />
                            </List>
                        </Column>
                    </Row>
                </Section>
            </div>
        );
    }
}

export default App;