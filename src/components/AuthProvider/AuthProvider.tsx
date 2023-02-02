import axios from "axios";
import React from "react";

export const AuthContext = React.createContext<AuthContext | null>(null);

const { Provider } = AuthContext;

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User | null>(null);
  const [error, setError] = React.useState({ message: "" });
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let storedUser: User | (string | null) = localStorage.getItem("user");
    if (storedUser) {
      storedUser = JSON.parse(storedUser) as User;
      setUser(storedUser);
    }
    setLoading(false);
  }, []);

  function login(user: User) {
    axios
      .post("http://localhost:8000/api/users/login", user)
      .then((res) => {
        setUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
      })
      .catch((err) => {
        if (err.response.status === 404) {
          return setError(err.response.data);
        }
        if (err.response.status === 401) {
          return setError(err.response.data);
        }
        console.error(err);
      });
  }

  function logout() {
    setTimeout(() => {
      setUser(null);
    }, 500);
  }

  function register(user: User) {
    axios
      .post("http://localhost:8000/api/users/signup", user)
      .then((res) => {
        setUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
      })
      .catch((err) => {
        if (err.response.status === 409) {
          return setError(err.response.data);
        }
        console.error(err);
      });
  }

  return (
    <Provider value={{ login, logout, register, user, error }}>
      {loading ? <div>Loading...</div> : children}
    </Provider>
  );
}

export default AuthProvider;
