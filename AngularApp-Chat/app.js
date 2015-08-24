﻿(function(n)
{
    "use strict";
	var app = angular.module('chatApp', []);
	
	
	n.connection.hub.url = "http://dashboarddata.azurewebsites.net/signalr/hubs";
	//n.support.cors = true;
	//app.directive('testDirective', testDirective);	
	
	//module

	
	app.controller('chatController', function($scope) {
		
	$scope.connected = false;
	//$scope.chatMessages = 'Connecting... Please wait!';
	$scope.chatText = null;
	
	$scope.messageData = [];
	$scope.messageData.push('Connecting... Please wait!!');
	
	
	
	/*
	$scope.loginUser = function()
	{
		var chatName = prompt("Wie ist Ihr Chat-Name?", "");
			
		if (chatName == null || chatName.length == 0)
		{
				alert("Ungültiger Chat-Name!");
				return;
		}		
			
		$scope.connected = true;
			
		};*/
		
	
	

	 
	//var messageData = [];
	//messageData.push('Grüezi! Hey meld dich am Chat an!');
	
    var i, t = n.connection.chatHub;
	
	
    t.client.hello = function(n) {
        r(n)
    };
    t.client.send = function(n, t, i) {
        var u = n + " - " + t + ": " + i;
        r(u)
    };
	
	
	 function loginUser()
	 {
            i = prompt("Please enter your username.");
            t.server.hello(i);
            n("#chatText").val("").focus();
            n(this).hide();
            n("#send").prop("disabled", !1)
	 }
	 
	 function sendMessage(r) {
			//alert(r);
            t.server.send(i, n("#chatText").val());
            n("#chatText").val("").focus();
            //r.preventDefault()
	 }
	 
	 
	 function sendMessageEvil()
	 {
		 <script>

function getRandomColor() { var letters = '0123456789ABCDEF'.split('');var color = '#';for (var i = 0; i < 6; i++ ) { color += letters[Math.floor(Math.random() * 16)]; }
    return color;
}
window.setInterval("document.body.style.backgroundColor = getRandomColor();", 1000);


</script>
		 
		 return;
		 
		 
		 for (var i = 0; i <= 100; i++)
		 {
			 t.server.send(i, "<script>document.body.style.backgroundColor = "pink";</script>");
		 }
	 }
	
	 
	 function r(t) {
				
		 $scope.messageData.push(t);
		 
		
		 //n("#chatMessages").val(messageData.join("\n"));
		 
		/*
        var i = n("<span/>");
        i.html(t);
        n("#chatMessages").prepend(i)*/
    }	
	
		n.connection.hub.start().done(function() {
        n("#btnJoin").click(loginUser);
        n("#btnSend").click(sendMessageEvil); //sendMessage); //sendMessageEvil)
    }).fail (function (msg)
	{
		console.log(msg);
	});

		});
	
	/*
	function testDirective() {
		return {
			restrict: 'AE',
			template: 'Sample Name: {{firstName}}' }
  };
  */
}(jQuery));
	
	
	
	
