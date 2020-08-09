var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Trello_Main_Logo = function (_React$Component) {
    _inherits(Trello_Main_Logo, _React$Component);

    function Trello_Main_Logo() {
        _classCallCheck(this, Trello_Main_Logo);

        return _possibleConstructorReturn(this, (Trello_Main_Logo.__proto__ || Object.getPrototypeOf(Trello_Main_Logo)).apply(this, arguments));
    }

    _createClass(Trello_Main_Logo, [{
        key: "render",
        value: function render() {
            return React.createElement("img", { src: "https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/76ceb1faa939ede03abacb6efacdde16/trello-logo-blue.svg",
                "class": "trello-main-logo",
                alt: "trello-main-logo" });
        }
    }]);

    return Trello_Main_Logo;
}(React.Component);

// export default Trello_Main_Logo;


// ReactDOM.render(<TMC />, document.getElementById('Trello-Main-Container'))


export default Trello_Main_Logo;