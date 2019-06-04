import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

//app rerenders itself when the state is changed

//Dont do data loading in constructor -> do it in componentDidMount method(best practice)
class App extends React.Component {
  state = { lat: null, errorMessage: "" }; //Babel declares the constructor for us

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat)
      return <div>Error: {this.state.errorMessage}</div>;

    if (!this.state.errorMessage && this.state.lat) return <SeasonDisplay lat={this.state.lat} />;

    return <Spinner message='loooooaaaaading....' />;
  }

  //do not have conditional, multiple cases in render because it gets hard to add extra classes, divs etc.
  render() {
    return <div className='border red'>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
