import React from 'react';
import axios from 'axios';
import {
  Container,
  Dropdown,
  Grid,
  Header,
} from 'semantic-ui-react';
import UserList from '../../components/UserList/UserList';
import UserDetail from '../../components/UserDetail';

const options = [
  { key: 2, text: 'All', value: 2 },
  { key: 0, text: 'Professors', value: 0 },
  { key: 1, text: 'Students', value: 1 },
];

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      selectedGroup: 2,
      selectedUser: {},
      group: [],
    };
  }

  updateResults = (results) => {
    let newResults = [];

    newResults = results.map((item, index) => {
      const random = Math.floor(Math.random() * 2);

      return {
        ...item,
        group: random === 0 ? 'Professors' : 'Students',
        groupValue: random,
        id: index,
      };
    });

    return newResults;
  };

  hydrateStateWithLocalStorage = () => {
    let group = this.getLocalStorageKey('group');
    let results = this.getLocalStorageKey('results');

    try {
      group = JSON.parse(group);
      results = JSON.parse(results);
      this.setState({ group, results });
    } catch (e) {
      this.setState({ group, results });
    }
  };

  getGroup = (selectedGroup) => {
    const group = this.state.results;

    if (group.length) {
      if (selectedGroup === 2) {
        return group;
      }

      return group.filter(user => {
        return user.groupValue === selectedGroup;
      });
    }
  };

  setLocalStorageKey = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  getLocalStorageKey = (key) => {
    return localStorage.getItem(key);
  };

  componentDidMount() {
    if (localStorage.hasOwnProperty('group') && localStorage.hasOwnProperty('results')) {
    // eslint-disable-next-line no-constant-condition
    // if (false) {
      this.hydrateStateWithLocalStorage();
    } else {
      axios.get('https://randomuser.me/api/1.3?results=10&seed=secret&nat=us')
        .then(res => {
          const results = res.data.results;
          const group = this.updateResults(results);
          this.setLocalStorageKey("group", group);
          this.setLocalStorageKey("results", group);
          this.setState({
            results: group,
            group,
          });
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log(error);
        });
    }
  }

  onChange = (e, data) => {
    const selectedGroup = data.value;
    const group = this.getGroup(selectedGroup);
    this.setState({ selectedGroup, group });
  };

  handleSelectedUser = (selectedUser) => {
    this.setState({ selectedUser });
  };

  // getUserDetail = () => {
  //   const group = this.state.results;
  //   const selectedUser = this.state.selectedUser;

  //   if (group.length) {
  //     return group.filter(user => {
  //       return user.id === selectedUser;
  //     });
  //   }

  //   return false;
  // };

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
            <Dropdown
              defaultValue={this.state.selectedGroup}
              options={options}
              selection
              onChange={this.onChange}
            />
            {this.state.group.length ?
              <UserList
                group={this.state.group}
                onClick={this.handleSelectedUser}
              /> : <p>Loading...</p>}
          </Grid.Column>
          <Grid.Column>
            {this.state.results.length ?
              <UserDetail user={this.state.selectedUser} /> : <p>No user data</p>}
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default Main;