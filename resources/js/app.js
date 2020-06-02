/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
window.io = require('socket.io-client');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});

const socket = io('http://localhost:4000');
let username = document.getElementById('txt-name');
let message = document.getElementById('txt-message');
let btn = document.getElementById('btn-chat');
let feedback = document.getElementById('feedback');
btn.addEventListener('click', function(){
    socket.emit('chat-message', {
        username: username.value,
        message: message.value,
    })
})
message.addEventListener('keyup', function(){
    socket.emit('typing', username.value);
})
socket.on('chat-message' , function(data){
    feedback.innerText = '';
    let chatWin = document.getElementById('chat-window');
    let msg = '<div class="row msg_container base_receive"><div class="col-md-2 col-xs-2 avatar"><strong>'+data.username+'</strong>\
    </div><div class="col-md-10 col-xs-10"><div class="messages msg_receive"><p>'+data.message+'</p></div></div></div>';
   chatWin.innerHTML += msg;
})
socket.on('typing', function(username){
    feedback.innerText = username + " is typing...";
})
