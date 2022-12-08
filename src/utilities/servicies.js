


export const getUser = (data) => {
  return new Promise ((resolve, reject) => ( fetch("https://itenseno.up.railway.app/login", {
    method: 'POST', 
    headers: {
      "Content-Type": "application/json",
      "Connection": "keep-alive"
    },
    body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((result) => resolve(result))
      .catch((error) => reject (error))
  ))};
  
export const postUser = (data) => {
  return new Promise((resolve, reject) =>
    fetch("https://itenseno.up.railway.app/signout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Connection": "keep-alive"
      },
      body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((result) => resolve(result))
    .catch((error) => reject (error))
  )
};

export const logOut = () => {
  return new Promise ((resolve, reject) => ( fetch("https://itenseno.up.railway.app/logout", {
    method: 'GET', 
    headers: {
      "Content-Type": "application/json",
      "Connection": "keep-alive"
  },
  body: JSON.stringify()
  })
  .then((res) => res.json())
  .then((result) => resolve(result))
  .catch((error) => reject (error))
  ))
  };

  
export const getTechnologies = () => {
  return new Promise ((resolve, reject) => ( fetch("https://itenseno.up.railway.app/allTech", {
    method: 'GET', 
    headers: {
      "Content-Type": "application/json",
      "Connection": "keep-alive"
  },
  body: JSON.stringify()
  })
  .then((res) => res.json())
  .then((result) => resolve(result))
  .catch((error) => reject (error))
  ))
  };

  export const userHome = () => {
    return new Promise ((resolve, reject) => ( fetch(`https://itenseno.up.railway.app/userHome`, {
      method: 'GET', 
      headers: {
        "Content-Type": "application/json",
        "Connection": "keep-alive"
    },
    body: JSON.stringify()
    })
    .then((res) => res.json())
    .then((result) => resolve(result))
    .catch((error) => reject (error))
    ))
    };

    export const profile = (data) => {
      return new Promise ((resolve, reject) => ( fetch(`https://itenseno.up.railway.app/userHome`, {
        method: 'POST', 
        headers: {
          "Content-Type": "application/json",
          "Connection": "keep-alive"
      },
      body: JSON.stringify(data)
      })
      .then((res) => res.json())
      .then((result) => resolve(result))
      .catch((error) => reject (error))
      ))
      };

      export const getPoints = () => {
        return new Promise ((resolve, reject) => ( fetch("https://itenseno.up.railway.app/", {
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


        export const getHome = () => {
          return new Promise ((resolve, reject) => ( fetch("https://itenseno.up.railway.app/", {
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

          export const getProfile = (id) => {
            return new Promise ((resolve, reject) => ( fetch(`https://itenseno.up.railway.app/profile/${id}`, {
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

      
            export const editProfile = (data) => {
              return new Promise ((resolve, reject) => ( fetch(`https://itenseno.up.railway.app/userHome`, {
                method: 'POST', 
                headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(data)
              })
              .then((res) => res.json())
              .then((result) => resolve(result))
              .catch((error) => reject (error))
              ))
              };
