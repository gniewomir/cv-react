import React from 'react';
import b from '../../util/bem';

import Header from '../Header';
import SkillTable from '../SkillTable';
import Contact from '../Contact';

export const App = () => {
    return (
        <div className={b('App')}>
            <Header />
            <SkillTable />
            <Contact />
        </div>
    );
};

export default App;