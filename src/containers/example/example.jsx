import React, { PropTypes } from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ExampleComponent from '../../components/exampleComponent/exampleComponent'

import { fetchMessage } from './actions';
import { makeSelectHelloMessage } from './selectors';
import cls from './example.css';

const Example = ({helloMessage, fetchMessage}) => (
  <div className={cls.test}>
    <button onClick={fetchMessage}>load message</button>
    <ExampleComponent message={helloMessage} />
  </div>
);

Example.propTypes = {
  fetchMessage: PropTypes.func.isRequired,
  helloMessage: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  helloMessage: makeSelectHelloMessage(),
});

const mapDispatchToProps = {
  fetchMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Example);
