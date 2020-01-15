import React, { Component } from 'react';
import './App.css';
import LoginPage from './Components/Login/Login';
import { Route } from 'react-router-dom';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import { Grid } from '@material-ui/core';
import Content from './Components/Content/Content'
import { muscles, exercises } from './Store'


class App extends React.Component {
  state = {
    exercises
  }

  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise]

        return exercises
      }, {})
    )
  }

  handleCategorySelected = category => {
    this.setState({
      category
    })
  }

  render() {
    // export default function App() {
    // console.log(this.getExercisesByMuscles());
    const exercises = this.getExercisesByMuscles(),
    {category} = this.state
    return (
      <div className="App">
        <Header />
        <Grid container>
          <Grid item>
            <NavBar />
          </Grid>
          <Grid item sm>
            <Content 
              category={category}
              exercises={exercises} 
            />
          </Grid>
          {/* <Route path='/login' render={() => <LoginPage />} /> */}

        </Grid>
        <Footer 
          category={category}
          muscles={muscles} 
          onSelect={this.handleCategorySelected}
        />
      </div>
    );
  }
}

export default App