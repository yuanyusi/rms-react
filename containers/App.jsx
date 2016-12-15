import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import Header from '../components/Header';
import CustomHeader from '../components/CustomHeader';
import CustomMain from '../components/CustomMain';
//import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/todos';

// For Customization Options, edit  or use
// './src/material_ui_raw_theme_file.jsx' as a template.

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../src/material_ui_raw_theme_file';

import 'material-design-lite/material.min.js';
import 'material-design-lite/material.min.css';

import '../src/material.components.ext.min.js';
import '../src/material.components.ext.min.css';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

import '../src/main.css';
import '../src/custom.css';
import '../src/muidocs.css';




class App extends Component {
  render() {
    const { todos, actions } = this.props;
    return (
      <div>              
        <MuiThemeProvider muiTheme={theme}>
          <div>
            <CustomHeader/>
            <CustomMain/>
            {/*<Header addTodo={actions.addTodo}/>
            <MainSection todos={todos} actions={actions}/>*/}
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
