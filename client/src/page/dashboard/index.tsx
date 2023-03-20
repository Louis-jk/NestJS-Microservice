import axios from 'axios';
import Sidebar from '../../component/dashboard/Sidebar';

const BASE_URL = process.env.REACT_APP_HOST;

const Dashboard = () => {
  const users = axios
    .get(`${BASE_URL}/api/v1/users`)
    .then((resp) => console.log(resp));

  console.log('====================================');
  console.log('users?', users);
  console.log('====================================');

  const people = [
    {
      name: 'Calvin Hawkins',
      email: 'calvin.hawkins@example.com',
      image:
        'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Kristen Ramos',
      email: 'kristen.ramos@example.com',
      image:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Ted Fox',
      email: 'ted.fox@example.com',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ];

  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="flex mx-10 my-10">
        <ul className="divide-y divide-gray-200">
          {people.map((person) => (
            <li key={person.email} className="py-4 flex">
              <img
                className="h-10 w-10 rounded-full"
                src={person.image}
                alt=""
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  {person.name}
                </p>
                <p className="text-sm text-gray-500">{person.email}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
