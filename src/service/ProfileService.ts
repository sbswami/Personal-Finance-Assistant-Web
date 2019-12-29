import { TOKEN_KEY, READ_USER, HEADERS, SEARCH_USER } from "../common/config";

export class ProfileService {
  static getDetail(res: (res) => void, err: (err) => void) {
    fetch(
      READ_USER,
      {
        method: 'GET',
        headers: HEADERS,
      }
    )
      .then(response => response.json())
      .then(response => res(response))
      .catch(error => err(error));
  }

  static getUserList(name: string, res: (res) => void, err: (err) => void) {
    fetch(
      SEARCH_USER,
      {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify({ name }),
      }
    )
      .then(response => response.json())
      .then(response => res(response))
      .catch(error => err(error));
  }
}
