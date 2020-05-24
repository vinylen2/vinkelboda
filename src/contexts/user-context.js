import React from 'react';

const UserContext = React.createContext({
  name: 'Gabriel Wallén',
  id: null,
  token: false,
  setUserInfo: (data) => {
    this.name = data.name;
    this.id = data.id;
  },
});

export default UserContext;