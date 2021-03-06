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
    startNum: 0,
    endNum: 0,
    step: 10,
  });
  const [repositories, setRepositories] = useState([]);
  const [keywords, setKeywords] = useState("");

  const initPageData = () => {
    const repositoriesData = getRepositories();
    setRepositories(repositoriesData);
    resetPagination(repositoriesData);
  };

  const resetPagination = (inputData) => {
    const endNum = Math.min(pagination.step, inputData.length);
    const newPagination = {
      ...pagination,
      currentPage: 1,
      startNum: 0,
      endNum,
      total: inputData.length,
    };
    setPagination(newPagination);
  };

  const changePaginationPage = (num) => {
    const startNum = (num - 1) * pagination.step;
    const endNum = Math.min(num * pagination.step, pagination.total);
    const newPagination = { ...pagination, startNum, endNum, currentPage: num };
    setPagination(newPagination);
  };

  const sortBy = (key) => {
    let newRepositories = repositories;
    newRepositories.sort((a, b) => a[key] - b[key]);
    setRepositories(newRepositories);
    resetPagination(newRepositories);
  };

  const searchKeywords = (e) => {
    const input = e.target.value;
    setKeywords(input);
    filterRepositoriesWithKeywords(input);
  };

  const filterRepositoriesWithKeywords = (input) => {
    const newRepositories = getRepositories().filter((e) =>
      e.name.toLowerCase().includes(input.toLowerCase())
    );
    setRepositories(newRepositories);
    resetPagination(newRepositories);
  };

  useEffect(() => {
    initPageData();
  }, []);

  return (
    <div className="container mt-3">
      <Header sortBy={sortBy} />
      <Input
        name="search"
        value={keywords}
        placeholder="Search repository by name"
        onChange={searchKeywords}
      />
      <Pagination
        startNum={pagination.startNum + 1}
        endNum={pagination.endNum}
        totalNum={pagination.total}
        currentPage={pagination.currentPage}
        totalPage={pagination.total / pagination.step}
        changeCurrentPage={changePaginationPage}
      />
      <div>
        {repositories.slice(pagination.startNum, pagination.endNum).map((e) => {
          return <ListItem repository={e} key={e.id} />;
        })}
      </div>
    </div>
  );
}
