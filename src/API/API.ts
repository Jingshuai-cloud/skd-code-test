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

export const fetchMenus = async () => {
  const endpoint = url + `menus`;
  const data = await (await fetch(endpoint)).json();
  return data;
};
