import io from 'socket.io-client';

socket = io('http://10.1.4.233:3000', {
    transports: ['websocket'],
    pingTimeout: 30000
});
this.socket.emit('joinUser', { _id: '5b61e48852f6e412b8ec1b67' });
this.socket.on('clear-the-way', eventdata => {
  this.props.navigation.navigate('Cleartheway', { eventdata });
});
function Emit(query, param) {
    socket.emit(query, param);
}
export default socket;