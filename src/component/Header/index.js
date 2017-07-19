import React from 'react';
import bem from '../../util/bem';
import Logo from '../Logo';
import Accent from '../Accent';
import Section from '../Section';
import Column from '../Row/Column';
import Row from '../Row';
import Observable from '../Observable';

const Header = () => {
    return (
        <Observable name="header">
            <Section viewport>
                <div className={bem('Header')}>
                    <Row gutter>
                        <Column>
                            <Logo />
                        </Column>
                        <Column>
                            <h1>Gniewomir Świechowski</h1>
                            <p>
                                Owner/Developer <Accent>@</Accent> Enraged<br />
                                Technical Architect <Accent>@</Accent> Gremi Media SA
                            </p>
                            <p>
                                Experienced full stack developer. Focused on creating maintainable, modular code & following industry best practices. Basically I'am your guy, if you have big pile of legacy code, smaller - but still considerable - pile of money and you don't mind me swearing.
                            </p>
                        </Column>
                    </Row>
                </div>
            </Section>
        </Observable>
    );
};

export default Header;