# server-rest-api
Simple node.js server to provide REST API for 
<a href="https://github.com/ghostmurda/react-social-network">react-social-network</a>.<br>
The server is using <a href="f">Lowdb</a> as a database.
##
For now authentication is working not correctly:
you can be authenticated on login, 
but you can't be authenticated on any other
 endpoints if server isn't on <i>localhost</i>. So I deleted auth check method.