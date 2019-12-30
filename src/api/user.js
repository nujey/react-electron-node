// const globalAPi = 'http://localhost:9090'

export function getUserList(params) {
  return new Promise((resolve, reject) => {
    fetch('/api/user/getUserList', {
      method: 'post',
      headers: {
        "Content-type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify(params)
    }).then(response => response.json())
    .then(result => resolve(result))
  })
}
