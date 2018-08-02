import io from 'socket.io-client';

socket = io('http://10.1.4.233:3000', {
    transports: ['websocket'],
    pingTimeout: 30000
});
this.socket.emit('join', { userId: 1234 });

function Emit(query, param) {
    socket.emit(query, param);
}
export default Emit;