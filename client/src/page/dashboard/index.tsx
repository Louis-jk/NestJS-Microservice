import axios from 'axios';

const BASE_URL = process.env.REACT_APP_HOST;

const Dashboard = () => {
  const users = axios
    .get(`${BASE_URL}/api/v1/users`)
    .then((resp) => console.log(resp));

  console.log('====================================');
  console.log('users?', users);
  console.log('====================================');

  return <h1>Dashboard</h1>;
};

export default Dashboard;
