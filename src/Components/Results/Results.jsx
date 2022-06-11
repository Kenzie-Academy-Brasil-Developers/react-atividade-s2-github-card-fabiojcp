import { Div, Name, Img, Url } from "./ResultsStyle";

export default function Results({ user }) {
  return (
    <>
      <Div>
        <Img src={user.avatar_url} alt="" />
        <Name>{user.login}</Name>

        <Url href={user.html_url} target="_blank" rel="noreferrer">
          {user.html_url}
        </Url>
      </Div>
    </>
  );
}
