const BASE_RUL = 'https://www.omdbapi.com';

export const request = async (url, options) => {
  let response = await fetch(BASE_RUL + url, { ...options });

  if (response.ok) {
    const data = response.json();
    return data;
  }

  throw new Error('Request failed');
}
