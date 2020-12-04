const url = '/api/v2/';

export const fetchLogin = async (user: object) => {
  const endpoint = url + 'users/tokens';
  const data = await fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify(user),
  });
  return data;
};

export const fetchUsers = async (key: string) => {
  const endpoint = url + 'users';
  const data = await (
    await fetch(endpoint, {
      method: 'GET',
      headers: {
        authorization: key,
      },
    })
  ).json();
  return data.users;
};

export const createUser = async (key: string, user: object) => {
  const endpoint = url + 'users';
  const data = await (
    await fetch(endpoint, {
      method: 'POST',
      headers: {
        authorization: key,
      },
      body: JSON.stringify(user),
    })
  ).json();
  return data;
};

export const patchUser = async (key: string, user: object, userId: string) => {
  const endpoint = url + `users/${userId}`;
  const data = await (
    await fetch(endpoint, {
      method: 'PATCH',
      headers: {
        authorization: key,
      },
      body: JSON.stringify(user),
    })
  ).json();
  return data;
};

export const deleteUser = async (key: string, userId: string) => {
  const endpoint = url + `users/${userId}`;
  const data = await (
    await fetch(endpoint, {
      method: 'DELETE',
      headers: {
        authorization: key,
      },
    })
  ).json();
  return data;
};

export const fetchMenus = async () => {
  const endpoint = url + `menus`;
  const data = await (await fetch(endpoint)).json();
  return data;
};
