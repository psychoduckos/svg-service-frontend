import axios from 'axios'

const register = async(dataObject) => {
      const options = {
            method: 'POST',
            url: `${process.env.REACT_APP_BASE_URL}/auth/register`,
            headers: {
              accept: 'application/json',
            },
            data: {
              username: dataObject?.username,
              email: dataObject?.email,
              password: dataObject?.password
            }
      };
          
      let data = await axios.request(options)
                  .then(function (response) {
                        console.log(response.data);
                        return response.data
                  })
                  .catch(function (error) {
                        console.error(error);
                        return error
                  });
      return data
}

const login = async(dataObject) => {
      const options = {
            method: 'POST',
            url: `${process.env.REACT_APP_BASE_URL}/auth/login`,
            headers: {
              accept: 'application/json',
            },
            data: {
              email: dataObject?.email,
              password: dataObject?.password
            }
      };
          
      let data = await axios.request(options)
                  .then(function (response) {
                        console.log(response.data);
                        return response.data
                  })
                  .catch(function (error) {
                        console.error(error);
                        return error
                  });   
      return data
}

export {register, login}