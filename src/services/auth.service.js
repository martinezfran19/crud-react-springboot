import axios from "axios";

const API_URL = "http://localhost:8082/auth";

class AuthService {
  
  login(nombreUsuario, password) {
    return axios
      .post(API_URL.concat("/login"), { nombreUsuario, password })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  } 

  logout() {
    localStorage.removeItem("user");
  }

  register(nombre, nombreUsuario, email, password) {
    return axios.post(API_URL, {
      nombre,
      nombreUsuario,
      email,
      password,
    });
  }
}

export default new AuthService();