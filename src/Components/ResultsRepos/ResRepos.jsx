import { Div, Name, Url, UrlText, Clone } from "./RRStyle";
import copy from "copy-text-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

export default function ResRepos({ repo, created, owner }) {
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
//   const [created, setCreated] = useState({
//     created_at: "2022-06-11T03:30:00Z",
//   });
//   const [owner, setOwner] = useState({
//     owner: { login: "loading", html_url: "http://www.google.com" },
//   });
//   useEffect(() => {
//     //setCreated(repo);
//     //setOwner(repo);
//   }, [repo]);
  // console.log(setTimeout(() => {
  //   return repo.owner
  // }, 4000))

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     console.log(repo.owner.html_url);
  //   }, 5000);
  
  //   return () => clearTimeout(timeout);
  // }, []);


  return (
    <Div>
      <Name>Name: {repo.name}</Name>
      <UrlText href={ owner.owner.html_url} target="_blank" rel="noreferrer">
        Owner: {owner.owner.login}
      </UrlText>

      <Name>
        Created:{" "}
        {created.created_at.split("T")[0].split("-").reverse().join("/")}
      </Name>
      {/* <Name>{owner}</Name> */}
      <Url href={repo.html_url} target="_blank" rel="noreferrer">
        {repo.html_url}
      </Url>
      <Name>Decription: {repo.description}</Name>
      <Clone onClick={() => CloneSSH()}>Clonar com SSH</Clone>
      <ToastContainer />
    </Div>
  );
}

//created_at: "2021-04-28T07:36:37Z"
