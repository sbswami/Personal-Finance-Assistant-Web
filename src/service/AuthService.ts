import { User } from "../components/Authentication/registerComponent/constants";
import { LogInUser } from "../components/authentication/logInComponent/constants";
import { CREATE_USER_API, LOGIN_USER } from '../common/config';

export class AuthService {
  static registerUser(data: User, res: (res) => void, err: (err) => void) {
    fetch(CREATE_USER_API, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        mode: 'no-cors',
      },
    })
      .then(response => {
        res(response);
      })
      .catch(error => {
        err(error);
      });
  }

  static logInUser(data: LogInUser, res: (res) => void, err: (err) => void) {
    fetch(LOGIN_USER, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        mode: 'no-cors',
      },
    })
    .then(response => response.json())
    .then(response => res(response))
    .catch(error => err(error));
  }

}
