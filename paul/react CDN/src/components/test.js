
// var element = React.createElement("img", { src: "https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/76ceb1faa939ede03abacb6efacdde16/trello-logo-blue.svg",
//     alt: "trello-main-logo" });

// ReactDOM.render(element, document.getElementById('root'));
class Hello extends React.Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.toWhat}`);
  };
};



ReactDOM.render(
  React.createElement(Hello, { toWhat: 'World' }, null),
  document.getElementById('root')
);