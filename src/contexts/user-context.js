import React from 'react';

const UserContext = React.createContext({
  name: 'Gabriel Wallén',
  id: null,
  token: false,
});

export default UserContext;