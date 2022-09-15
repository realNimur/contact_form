const baseUrl = 'http://185.91.52.232:5000';

export const getAllProducts = () => {
  return fetch(`${baseUrl}/api/products`)
    .then((data) => data.json())
    .then((data) => data);
};

export const requestToBooking = (data) => {
  fetch(`${baseUrl}/api/book`, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((data) => data.json())
    .then((data) => data);
};

export const getInformationAboutBooking = (from, to) => {
  return fetch(`${baseUrl}/api/get?from=${from}&to=${to}`)
    .then((data) => data.json())
    .then((data) => data);
};
