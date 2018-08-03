import io from 'socket.io-client';

socket = io('http://10.1.4.233:3000', {
    transports: ['websocket'],
    pingTimeout: 30000
});
this.socket.emit('joinUser', { _id: '5b634c992f024a0540f2892e' });

function Emit(query, param) {
    socket.emit(query, param);
}
export default socket;