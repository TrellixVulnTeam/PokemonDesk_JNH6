import React from 'react';
import cn from 'classnames';

import s from './App.module.scss';

const App = () => {
    console.log('lod');

    return (
        <div className={cn(s.header)}>
            This is App Component!
        </div>
    )
}

export default App;