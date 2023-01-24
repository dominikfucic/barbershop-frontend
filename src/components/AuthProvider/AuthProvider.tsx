import React from "react";

export const AuthContext = React.createContext<AuthContext | null>(null);

const { Provider } = AuthContext;

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let storedUser: User | (string | null) = localStorage.getItem("user");
    if (storedUser) {
      storedUser = JSON.parse(storedUser) as User;
      setUser(storedUser);
    }
    setLoading(false);
  }, []);

  function login() {
    //Make API call to login
    setTimeout(() => {
      const res = {
        id: 1,
        firstName: "Test",
        lastName: "User",
        email: "testuser@test.com",
      };
      setUser(res);
    }, 500);
  }
  function logout() {
    setTimeout(() => {
      setUser(null);
    }, 500);
  }

  function register(user: User) {
    localStorage.setItem("user", JSON.stringify(user));
    setTimeout(() => {
      setUser(user);
    }, 500);
  }

  return (
    <Provider value={{ login, logout, register, user }}>
      {loading ? <div>Loading...</div> : children}
    </Provider>
  );
}

export default AuthProvider;
