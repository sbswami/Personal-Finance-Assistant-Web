import * as socketIo from 'socket.io-client';

import { SOCKET_URL } from '../common/config';

export class SocketService {
  static socket = socketIo(SOCKET_URL);
}