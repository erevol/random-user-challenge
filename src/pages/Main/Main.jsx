import React from 'react';
import axios from 'axios';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  componentDidMount() {
    axios.get('https://randomuser.me/api/1.3?results=100&seed=secret&nat=us')
      .then(res => {
        // eslint-disable-next-line no-console
        console.log(res.data);
        const results = res.data.results;

        this.setState({
          results,
        });
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }

  render(){
    return(
      <p>test</p>
    );
  }
}

export default Main;