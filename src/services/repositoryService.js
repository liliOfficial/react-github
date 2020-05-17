import Repositories from '../data/repositories.json';

import http from "./httpService";

const apiEndpoint = "/repositories";

export function getRepositories() {
    // http.get(apiEndpoint);
    return Repositories;
}

export function getRepository(repositoryId) {
    return http.get(`${apiEndpoint}/${repositoryId}`);
} 