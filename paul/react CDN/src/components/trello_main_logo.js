
  
  class MainLogo extends React.Component{
  render(){
    return React.createElement('img', {
        className: 'trello-main-logo',
        alt:'Trello',
        src: 'https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/76ceb1faa939ede03abacb6efacdde16/trello-logo-blue.svg'
    });
  
  }
  }
  
  ReactDOM.render(
    React.createElement(MainLogo),
    document.getElementById('trello-main-logo')
  );
