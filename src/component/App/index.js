import React, { Component } from 'react';
import Section from '../Section';
import Column from '../Column';
import Row from '../Row';
import List from '../List';
import Item from '../List/Item';
import Link from '../Link';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Section>
                    <h1>Gniewomir Świechowski</h1>
                    <Row>
                        <Column>
                            <p>
                                Full Stack Developer @ Enraged<br />
                                Technical Architect @ Gremi Media SA
                            </p>
                        </Column>
                        <Column>
                            <p>
                                Experienced full stack developer. Focused on creating maintainable, modular code & following best industry practices.
                            </p>
                        </Column>
                    </Row>
                </Section>
                <Section>
                    <h1>Contact</h1>
                    <Row>
                        <Column>
                            <List>
                                <Item header='Email'>
                                    <Link href='gniewomir.swiechowski@gmail.com' type="email" content='gniewomir.swiechowski@gmail.com'/>
                                </Item>
                                <Item header='Skype'>
                                    <Link href='gniewomir.swiechowski' type="skype" content='gniewomir.swiechowski'/>
                                </Item>
                                <Item header='Phone'>
                                    <Link href='+48532423322' type="phone" content='+48 532-423-322'/>
                                </Item>
                                <Item header='GitHub'>
                                    <Link href='https://github.com/gniewomir'/>
                                </Item>
                            </List>
                        </Column>
                        <Column>
                            <List>
                                <Item header='Company' content='Enraged Gniewomir Świechowski' />
                                <Item header='Country' content='Poland' />
                                <Item header='NIP' content='683-19-52-002' />
                                <Item header='REGON' content='363997130' />
                            </List>
                        </Column>
                    </Row>
                </Section>
            </div>
        );
    }
}

export default App;