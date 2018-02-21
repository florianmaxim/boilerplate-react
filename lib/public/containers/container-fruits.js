"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

var fruits = _interopRequireWildcard(require("../actions/actions-fruits"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContainerFruits =
/*#__PURE__*/
function (_Component) {
  _inherits(ContainerFruits, _Component);

  function ContainerFruits(props) {
    _classCallCheck(this, ContainerFruits);

    return _possibleConstructorReturn(this, (ContainerFruits.__proto__ || Object.getPrototypeOf(ContainerFruits)).call(this, props));
  }

  _createClass(ContainerFruits, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      addEventListener('click', function () {
        return _this.props.fetchFruits();
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.fruits === null) {
        return _react.default.createElement("h2", null, "No fruits loaded.");
      }

      return _react.default.createElement("div", null, this.props.fruits.map(function (fruit, index) {
        return _react.default.createElement("div", {
          key: index
        }, _react.default.createElement("h1", null, fruit.name));
      }));
    }
  }]);

  return ContainerFruits;
}(_react.Component);

function props(state) {
  return {
    fruits: state.fruits
  };
}

function actions(dispatch) {
  return (0, _redux.bindActionCreators)({
    fetchFruits: fruits.fetchFruits
  }, dispatch);
}

var _default = (0, _reactRedux.connect)(props, actions)(ContainerFruits);

exports.default = _default;