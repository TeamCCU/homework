// import React from 'react';
import Trello_Main_Logo from './Trello_Main_Logo.jsx';
import Card from './Card.jsx';  

class App extends React.Component{
    render(){
        return(
            <div>
            <Trello_Main_Logo/>
            <Card>

            </Card>
            </div>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))