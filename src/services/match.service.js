import http from '../http-common';

class MatchDataService {
  getAll() {
    return http.get('/matches');
  }

  get(id) {
    return null;
  }

  create(data) {
    return http.post('/matches', data);
  }

  update(id, data) {
    return http.put(`/matches/${id}`, data);
  }
  delete(id) {
    return http.delete(`/matches/${id}`);
  }

  deleteAll() {
    return http.delete('/matches');
  }

  findByTitle(title) {
    return http.get(`/matches?title=${title}`);
  }
}

export default new MatchDataService();