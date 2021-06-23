import http from '../http-common';

class PlayerDataService {
  getAll() {
    return http.get('/players');
  }

  get(id) {
    return null;
  }

  create(data) {
    return http.post('/players', data);
  }

  update(id, data) {
    return http.put(`/players/${id}`, data);
  }
  delete(id) {
    return http.delete(`/players/${id}`);
  }

  deleteAll() {
    return http.delete('/players');
  }

  findByTeam(teamId) {
    return http.get(`/players?teamId=${teamId}`);
  }
}

export default new PlayerDataService();