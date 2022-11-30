


export const getUser = (data) => {
return new Promise ((resolve, reject) => ( fetch("http://localhost:3000/login", {
  method: 'POST', 
  headers: {
    "Content-Type": "application/json",
},
body: JSON.stringify(data)
})
  .then((res) => res.json())
  .then((result) => {
      return resolve(result);
    },
    (error) => {
      console.log(error);
    }
  )
))
};
  
export const postUser = () => {
  return new Promise((resolve, reject) =>
    fetch("http://localhost:3000/signout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then(
        (result) => {
    
          return resolve(result);
        },
        (error) => {
          console.log(error);
        }
      )
  )
};

export const logOut = () => {
  return new Promise ((resolve, reject) => ( fetch("http://localhost:3000/logout", {
    method: 'GET', 
    headers: {
      "Content-Type": "application/json",
  },
  body: JSON.stringify()
  })
    .then((res) => res.json())
    .then((result) => {
        return resolve(result);
      },
      (error) => {
        console.log(error);
      }
    )
  ))
  };