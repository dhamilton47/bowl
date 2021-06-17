import http from '../http-common';

class TeamDataService {
  getAll() {
    return http.get('/teams');
  }

  get(id) {
    return null;
  }
/*
  getNew() {
    return http.get('/team-info/add-team');
  }
*/
  create(data) {
    return http.post('/teams', data);
  }

  update(id, data) {
    return http.put(`/teams/${id}`, data);
  }
  delete(id) {
    return http.delete(`/teams/${id}`);
  }

  deleteAll() {
    return http.delete('/teams');
  }

  findByTitle(title) {
    return http.get(`/teams?title=${title}`);
  }
}

export default new TeamDataService();