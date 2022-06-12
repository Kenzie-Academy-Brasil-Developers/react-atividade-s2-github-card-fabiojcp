//DivMain, Img, Name, DivText, Text, LinkText

import { Text, LinkText } from "../User/UserCompStyle";
import { DivMain, Clone, Name } from "./UserReposStyle";
import copy from "copy-text-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UserRepos({ repo }) {
  function CloneSSH() {
    copy(repo.ssh_url);
    toast.success("URL copiada para a área de transferência", {
      position: "bottom-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      toastId: 1,
    });
  }

  return (
    <DivMain>
      <Name>{repo.name}</Name>
      <Text>Description: {repo.description}</Text>
      <Text>
        Created: {repo.created_at.split("T")[0].split("-").reverse().join("/")}
      </Text>
      <Text>Language: {repo.language}</Text>
      <LinkText href={repo.html_url} target="_blank" rel="noreferrer">
        GitHub Repository page
      </LinkText>
      <Clone onClick={() => CloneSSH()}>Clonar com SSH</Clone>
      <ToastContainer />
    </DivMain>
  );
}

/*


created_at: "2018-05-24T18:25:19Z"

html_url: "https://github.com/swkane/accordion"

ssh_url: "git@github.com:swkane/accordion.git"


<DivText>{repos}</DivText>
    <DivText>{repos}</DivText>
    <DivText>{repos}</DivText>
    <DivText>{repos}</DivText>
    <DivText>{repos}</DivText>
    <DivText>{repos}</DivText>
  */
