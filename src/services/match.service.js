import http from '../http-common';

class BowlingDataService {
  getAll() {
    return http.get('/match');
  }

  get(id) {
    return null;
  }

  create(data) {
    return http.post('/match', data);
  }

  update(id, data) {
    return http.put(`/match/${id}`, data);
  }
  delete(id) {
    return http.delete(`/match/${id}`);
  }

  deleteAll() {
    return http.delete('/match');
  }

  findByTitle(title) {
    return http.get(`/match?title=${title}`);
  }
}

export default new BowlingDataService();