// imports
import axios from 'axios'


// functions
const register = async(username, email, password) => {
      const options = {
            method: 'POST',
            url: `${process.env.REACT_APP_BASE_URL}/auth/register`,
            headers: {
              accept: 'application/json',
            },
            data: {
              username: username,
              email: email,
              password: password
            }
      };
          
      await axios.request(options)
                  .then(function (response) {
                        console.log(response.data);
                        return response.data
                  })
                  .catch(function (error) {
                        console.error(error);
                        return error
                  });
}


function Registration() {
      return ( 
            <div>

            </div>
       );
}

export default Registration;