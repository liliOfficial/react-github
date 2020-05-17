import React, { useEffect, useState } from "react";

import Input from "../common/input";
import Pagination from "../common/pagination";
import ListItem from "../common/listItem";

import { getRepositories } from "../../services/repositoryService";

export default function Main() {
  const [pagination, setPagination] = useState({
    currentPage: 1,
    total: 20,
    step: 10,
  });
  const [repositories, setRepositories] = useState([]);
  const [keywords, setKeywords] = useState("");

  const searchPagination = (num) => {
    const newPagination = { ...pagination, currentPage: num };
    setPagination(newPagination);
  };

  const sortByStar = () => {
    //Fetch data from API
    const sortRepositories = getRepositories().sort((a, b) => a.star - b.star);
    setRepositories(sortRepositories);
  };

  const search = (e) => {
    //Change input value
    const input = e.target.value;
    setKeywords(input);

    //Search in the front end, nomally should
    const repositories = getRepositories()
      .sort((a, b) => a.star - b.star)
      .filter((e) => e.name.toLowerCase().includes(input.toLowerCase()));
    setRepositories(repositories);

    //Set Pagination
    const newPagination = {
      ...pagination,
      currentPage: 1,
      total: repositories.length,
    };
    setPagination(newPagination);
  };

  useEffect(() => {
    sortByStar();
  }, []);

  return (
    <div className="container mt-3">
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
        changeCurrentPage={searchPagination}
      />
      <div>
        {repositories
          .slice(
            (pagination.currentPage - 1) * pagination.step + 1,
            Math.min(pagination.currentPage * pagination.step, pagination.total)
          )
          .map((e) => {
            return <ListItem repository={e} key={e.id} />;
          })}
      </div>
    </div>
  );
}
