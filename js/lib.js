angular.module('socket.io', []).
factory('socket', function ($rootScope) {
  var socket = io.connect(document.angular_module.socket.io.host || null);
  return {
    socket: socket,
    on: function (eventName, callback) {
      socket.on(eventName, function () {  
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(socket, args); }); });
    },
    emit: function (eventName, data, callback) {
      socket.emit(eventName, data, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          if (callback) {
            callback.apply(socket, args);
          } }); }) }
  };
});

