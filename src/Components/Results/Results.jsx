import { Div, Name, Img, Url } from "./ResultsStyle";
import { Link } from "react-router-dom";


export default function Results({ user }) {
  return (
    <>
      <Div>
        <Link to={`/${user.type === "Organization" ? "orgs" : "users"}/${user.login}`} >
          <Img src={user.avatar_url} alt="" />
        </Link>
        <Link to={`/${user.type === "Organization" ? "orgs" : "users"}/${user.login}`}>
          <Name >{user.login}</Name>
        </Link>
        <Url href={user.html_url} target="_blank" rel="noreferrer">
          {user.html_url}
        </Url>
      </Div>
    </>
  );
}
