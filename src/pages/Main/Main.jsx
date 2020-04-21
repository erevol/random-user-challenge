import React from 'react';
import axios from 'axios';
import {
  Container,
  Dropdown,
  Grid,
  Header,
} from 'semantic-ui-react';
import UserList from '../../components/UserList/UserList';

const options = [
  { key: 1, text: 'Students', value: 1 },
  { key: 2, text: 'Professors', value: 2 },
];

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  updateResults = (results) => {
    let newResults = [];

    newResults = results.map(item => {
      const random = Math.floor(Math.random() * 2);

      return {
        ...item,
        group: random === 0 ? 'Professors' : 'Students',
        groupValue: random,
      };
    });

    return newResults;
  };

  hydrateStateWithLocalStorage = () => {
    let results = localStorage.getItem('results');

    try {
      results = JSON.parse(results);
      this.setState({ results });
    } catch (e) {
      this.setState({ results });
    }
  };

  componentDidMount() {
    if (localStorage.hasOwnProperty('results')) {
      this.hydrateStateWithLocalStorage();
    } else {
      axios.get('https://randomuser.me/api/1.3?results=50&seed=secret&nat=us')
        .then(res => {
          const results = res.data.results;
          localStorage.setItem("results", JSON.stringify(this.updateResults(results)));
          this.setState({
            results,
          });
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log(error);
        });
    }
  }

  render() {
    return (
      <Container style={{ marginTop: '30px' }}>
        <Header as='h1'>Random User Code Challenge</Header>
        <Grid container columns={2} stackable>
          <Grid.Column>
            <Header as='h2'>Users</Header>
            <p>If you want to get contact information to specific user,
              just select group and then select him from the list below</p>
            <Header as='h3'>Select group of users</Header>
            <Dropdown placeholder='e.g. Students' clearable options={options} selection />
            {this.state.results.length ?
              <UserList results={this.state.results} /> : <p>Loading...</p>}
          </Grid.Column>
          <Grid.Column>
            <div style={{ backgroundColor: 'green', height: '100%' }}></div>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default Main;