import {
  DivMain,
  DivSub,
  BtnPage,
  ActualPage,
  SelectAmount,
  Option,
  Title,
  Amount,
  BtnAmount,
} from "./TPStyle";
import LeftArrow from "../../Assets/Imgs/leftArrow.png";
import RightArrow from "../../Assets/Imgs/rightArrow.png";
//{total_count: 24603, total_pages: 1203, results: [{...}]}

export default function TypeSearch({
  users,
  repos,
  setData,
  page,
  setPage,
  amountResults,
  setAmountResults,
  setType,
}) {
  function changePage(action) {
    action === "last"
      ? page > 1 && setPage(page - 1)
      : page < amountResults && setPage(page + 1);
  }

  function changeTyper(action) {
    action === "users" ? setType("users") : setType("repositories");
    action === "users" ? setData(users) : setData(repos);
  }
  return (
    <DivMain>
      <DivSub>
        <BtnPage
          image={LeftArrow}
          margin={"0 0 0 35%"}
          onClick={() => changePage("last")}
        ></BtnPage>
        <Title>{page}</Title>
        <BtnPage
          image={RightArrow}
          margin={"0 35% 0 0"}
          onClick={() => changePage("next")}
        ></BtnPage>
      </DivSub>

      <DivSub>
        <Title>Total de resultados</Title>
        <SelectAmount
          value={amountResults}
          onChange={(event) => setAmountResults(event.target.value)}
        >
          <Option value="50">50</Option>
          <Option value="100">100</Option>
        </SelectAmount>
      </DivSub>
      <DivSub>
        <BtnAmount onClick={() => changeTyper("users")}>Usuários</BtnAmount>
        <Amount>
          {users.total_count < 1000
            ? users.total_count
            : users.total_count < 1000000
            ? `${parseInt(users.total_count / 1000)}k`
            : users.total_count && `${parseInt(users.total_count / 1000000)}M`}
        </Amount>
      </DivSub>
      <DivSub>
        <BtnAmount onClick={() => changeTyper("repos")}>Repositórios</BtnAmount>
        <Amount>
          {repos.total_count < 1000
            ? repos.total_count
            : repos.total_count < 1000000
            ? `${parseInt(repos.total_count / 1000)}k`
            : repos.total_count && `${parseInt(repos.total_count / 1000000)}M`}
        </Amount>
      </DivSub>
    </DivMain>
  );
}
