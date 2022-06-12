import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import UserComponent from "../../Components/User/UserComponent";
import UserRepos from "../../Components/UserRepos/UserRepos";
import BtnBack from "./UserStyle.jsx"

export default function User() {
  const axios = require("axios").default;
  const [data, setData] = useState();
  const [repos, setRepos] = useState([]);
  const { type, user } = useParams();
  const BASE_URL = "https://api.github.com/";

  useEffect(() => {
    axios.get(`${BASE_URL}${type}/${user}`).then((response) => {
      setData(response.data);
    });
    axios.get(`${BASE_URL}${type}/${user}/repos?per_page=5`).then((response) => {
      setRepos(response.data);
    });
  }, [user]);

  return (
    <>{data !== undefined && <UserComponent data={data} type={type} repos={repos} > </UserComponent>}
    <Link to="/">
    <BtnBack>Voltar</BtnBack>
    </Link>
    </>

  );
}
