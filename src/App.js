import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import User from "./Pages/User/User";
import Repos from "./Pages/Repos/Repos";
import "./App.css";

export default function App() {
  const BASE_URL = "https://api.github.com/";
  const axios = require("axios").default;
  const [users, setUsers] = useState({ items: [] });
  const [repos, setRepos] = useState({ items: [] });
  const [data, setData] = useState(users);
  const [type, setType] = useState("users");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [amountResults, setAmountResults] = useState(35);
  const [created, setCreated] = useState({
    created_at: "2022-06-11T03:30:00Z",
  });
  const [owner, setOwner] = useState({
    owner: { login: "loading", html_url: "http://www.google.com" },
  });
  
  function handleSearch(event) {
    event.preventDefault();
    setPage(1);
    setType("users");
    setAmountResults(35);
    axios  
      .get(
        BASE_URL +
          `search/users?q=${search}&page=${page}&per_page=${amountResults}`
      )
      .then((res) => {
        setUsers(res.data);
        setData(res.data);
      });
    axios
      .get(
        BASE_URL +
          `search/repositories?q=${search}&page=${page}&per_page=${amountResults}`
      )
      .then((res) => {
        setRepos(res.data);
      });
  }

  useEffect(() => {
    axios
    .get(
      BASE_URL +
        `search/${type}?q=${search}&page=${page}&per_page=${amountResults}`
    )
    .then((res) => {
      setData(res.data);
    });

        //setData(() => {return type === "users" ? users : repos});
        //setCreated(repos);
        //setOwner(repos);

  }, [axios, type, amountResults, page,]);

  // npm install @mui/material @emotion/react @emotion/styled
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setSearch={setSearch}
              handleSearch={handleSearch}
              users={users}
              repos={repos}
              data={data}
              setData={setData}
              page={page}
              setPage={setPage}
              amountResults={amountResults}
              setAmountResults={setAmountResults}
              type={type}
              setType={setType}
              created={created}
              owner={owner}
            />
          }
        />
        <Route path="/user/:user" element={<User />} />
        <Route path="/repos/:repo" element={<Repos />} />
      </Routes>
    </BrowserRouter>
  );
}
