
const url = 'http://localhost:3000/'

export const getUser = (data) => {
  return new Promise ((resolve, reject) => ( fetch(`${url}login`, {
    method: 'POST', 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((result) => resolve(result))
      .catch((error) => reject (error))
  ))};
  
export const postUser = (data) => {
  return new Promise((resolve, reject) =>
    fetch(`${url}signout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((result) => resolve(result))
    .catch((error) => reject (error))
  )
};

export const logOut = () => {
  return new Promise ((resolve, reject) => ( fetch(`${url}logout`, {
    method: 'GET', 
    headers: {
      "Content-Type": "application/json",
  },
  body: JSON.stringify()
  })
  .then((res) => res.json())
  .then((result) => resolve(result))
  .catch((error) => reject (error))
  ))
  };

  
export const getTechnologies = () => {
  return new Promise ((resolve, reject) => ( fetch(`${url}allTech`, {
    method: 'GET', 
    headers: {
      "Content-Type": "application/json",
  },
  body: JSON.stringify()
  })
  .then((res) => res.json())
  .then((result) => resolve(result))
  .catch((error) => reject (error))
  ))
  };

  export const userHome = () => {
    return new Promise ((resolve, reject) => ( fetch(`${url}userHome`, {
      method: 'GET', 
      headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify()
    })
    .then((res) => res.json())
    .then((result) => resolve(result))
    .catch((error) => reject (error))
    ))
    };

    export const profile = () => {
      return new Promise ((resolve, reject) => ( fetch(`${url}userHome`, {
        method: 'POST', 
        headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify()
      })
      .then((res) => res.json())
      .then((result) => resolve(result))
      .catch((error) => reject (error))
      ))
      };

      export const getPoints = () => {
        return new Promise ((resolve, reject) => ( fetch(`${url}`, {
          method: 'GET', 
          headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify()
        })
        .then((res) => res.json())
        .then((result) => resolve(result))
        .catch((error) => reject (error))
        ))
        };

        export const filter = () => {
          return new Promise ((resolve, reject) => (fetch(`${url}`, {   
            mode: 'no-cors',
            method: 'GET',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify()
          })
          .then((res) => res.json())
          .then(result => resolve(result))
          .catch(error => reject(error))
          ))
        }