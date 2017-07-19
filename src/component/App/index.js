import React from 'react';
import Header from '../Header';
import SkillTable from '../SkillTable';
import Contact from '../Contact';
import ObservablesMenu from '../ObservablesMenu';

export const App = () => {
    return (
        <div>
            <ObservablesMenu
                items={{
                    header: {
                        label: 'Start'
                    },
                    skilltable: {
                        label: 'Skills'
                    },
                    contact: {
                        label: 'Contact'
                    }
                }}
            />
            <Header />
            <SkillTable />
            <Contact />
        </div>
    );
};

export default App;