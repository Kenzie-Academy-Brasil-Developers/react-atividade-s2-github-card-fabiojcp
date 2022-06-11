import { Form, SearchInpt, SearchBtn, DivResults } from "./HomeStyle";
import Results from "../../Components/Results/Results";
import ResRepos from "../../Components/ResultsRepos/ResRepos";
import TypeSearch from "../../Components/TypeSearch/TP";
//setData={setData} setPage={setPage} setAmountResults={setAmountResults}

export default function Home({
  setSearch,
  handleSearch,
  users,
  repos,
  data,
  setData,
  page,
  setPage,
  amountResults,
  setAmountResults,
  setType,
  type,
  created,
  owner,
}) {
  console.log(data);
  return (
    <>
      <Form onSubmit={(event) => handleSearch(event)}>
        <SearchInpt
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Pesquise"
        />
        <SearchBtn type="submit">ENVIAR</SearchBtn>
      </Form>
      <DivResults>
        {data.items.length > 0 &&
          type === "users" &&
          data.items.map((user, index) => {
            return <Results key={index} user={user} />;
          })}

        {data.items.length > 0 &&
          type === "repositories" &&
          data.items.map((repo, index) => {
            return (
              <ResRepos
                key={index}
                repo={repo}
                created={created}
                owner={owner}
              />
            );
          })}

        {data.items.length > 0 && (
          <TypeSearch
            users={users}
            repos={repos}
            setData={setData}
            page={page}
            setPage={setPage}
            amountResults={amountResults}
            setAmountResults={setAmountResults}
            setType={setType}
          ></TypeSearch>
        )}
      </DivResults>
    </>
  );
}
