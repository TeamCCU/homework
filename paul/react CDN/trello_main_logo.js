// const element = <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/76ceb1faa939ede03abacb6efacdde16/trello-logo-blue.svg" alt="trello-main-logo" />;

// const domContainer = document.querySelector('#trello-main-container');
// ReactDOM.render(
//     element, domContainer,
// );

// class Img extends React.Component {
//     render() {
//         return <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/76ceb1faa939ede03abacb6efacdde16/trello-logo-blue.svg" alt="trello-main-logo" />;
//     }
// }

// ReactDOM.render(
//     <h1>Hello, world!</h1>,
//     document.getElementById('root')
// );


// const element = (<div><h1>Hello, world!</h1></div>);
// const Container = document.getElementById('root');
// ReactDOM.render(
//     element,
//     Container
// );

type='text/babel';
class Img extends React.Component {
  render() {
    return <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/76ceb1faa939ede03abacb6efacdde16/trello-logo-blue.svg" alt = "trello-main-logo"/>
    // React.createElement("img", src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/600px-Cat03.jpg", alt = "trello-main-logo")
  }
}
ReactDOM.render(<Img/>,document.getElementById('trello-main-container'))
