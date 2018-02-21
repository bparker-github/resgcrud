import * as React from 'react';
import Header from './components/Header/Header';
import MainGrid from './components/MainGrid/MainGrid';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div id="App">
                <Header />
                <MainGrid />
            </div>
        );
    }
}

export default App;
