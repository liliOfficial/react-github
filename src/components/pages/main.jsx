import React, { useEffect, useState } from "react";

import Input from "../common/input";
import Pagination from "../common/pagination";
import ListItem from "../common/listItem";
import Header from "./header";

import { getRepositories } from "../../services/repositoryService";

export default function Main() {
  const [pagination, setPagination] = useState({
    currentPage: 1,
    total: 0,
    step: 10,
  });
  const [repositories, setRepositories] = useState([]);
  const [keywords, setKeywords] = useState("");

  const initData = () => {
    const repositoriesData = getRepositories();
    setRepositories(repositoriesData);
    resetPagination(repositoriesData);
  };

  const resetPagination = (newRepositories) => {
    const newPagination = {
      ...pagination,
      currentPage: 1,
      total: newRepositories.length,
    };
    setPagination(newPagination);
  };

  const changeCurrentPage = (num) => {
    const newPagination = { ...pagination, currentPage: num };
    setPagination(newPagination);
  };

  const sortBy = (key) => {
    let newRepositories = repositories;
    newRepositories.sort((a, b) => a[key] - b[key]);
    setRepositories(newRepositories);

    resetPagination(newRepositories);
  };

  const search = (e) => {
    const input = e.target.value;
    setKeywords(input);

    filterRepositories(input);
  };

  const filterRepositories = (input) => {
    const newRepositories = getRepositories().filter((e) =>
      e.name.toLowerCase().includes(input.toLowerCase())
    );
    setRepositories(newRepositories);
    resetPagination(newRepositories);
  };

  useEffect(() => {
    initData();
  }, []);

  return (
    <div className="container mt-3">
      <Header sortBy={sortBy} />
      <Input
        name="search"
        value={keywords}
        placeholder="Search repository by name"
        onChange={search}
      />
      <Pagination
        startNum={(pagination.currentPage - 1) * pagination.step + 1}
        endNum={Math.min(
          pagination.currentPage * pagination.step,
          pagination.total
        )}
        totalNum={pagination.total}
        currentPage={pagination.currentPage}
        totalPage={pagination.total / pagination.step}
        changeCurrentPage={changeCurrentPage}
      />
      <div>
        {repositories
          .slice(
            (pagination.currentPage - 1) * pagination.step,
            Math.min(pagination.currentPage * pagination.step, pagination.total)
          )
          .map((e) => {
            return <ListItem repository={e} key={e.id} />;
          })}
      </div>
    </div>
  );
}
