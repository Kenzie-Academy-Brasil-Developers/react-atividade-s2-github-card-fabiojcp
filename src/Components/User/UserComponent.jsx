import UserRepos from "../UserRepos/UserRepos";
import { DivMain, Img, Name, DivText, Text, LinkText } from "./UserCompStyle";

export default function UserComponent({ data, type, repos }) {
  return (
    <DivMain>
      <Img src={data.avatar_url}></Img>
      <DivText>
        <Name>{data.name}</Name>
        <Text>User name: {data.login}</Text>
        {data.location !== null && <Text>Location:{data.location} </Text>}
        <Text>
          Member since:{" "}
          {data.created_at.split("T")[0].split("-").reverse().join("/")}
        </Text>
        <LinkText href={data.html_url} target="_blank" rel="noreferrer">
          Go to GitHub User page
        </LinkText>
        {data.bio !== undefined && <Text>Bio: {data.bio}</Text>}
        <Name>User repositories:</Name>
        {repos.length > 0 && repos.map((repo) => {return <UserRepos repo={repo} />} ) }

      </DivText>
    </DivMain>
  );
}
