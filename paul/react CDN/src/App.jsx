// import React from 'react';
import Trello_Main_Logo from '../Trello_Main_Logo.js';
import Card from '../Card.js';  

class App extends React.Component{
    render(){
        return(
            <div className="flex-container Screen">
            <Trello_Main_Logo></Trello_Main_Logo>
            <Card>

            </Card>
            </div>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))