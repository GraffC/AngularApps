// Demo-App, just an quick test
(function(n) {
    "use strict";
    var app = angular.module('chatApp', []);


    n.connection.hub.url = "http://dashboarddata.azurewebsites.net/signalr/hubs";



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




        var i, t = n.connection.chatHub;


        t.client.hello = function(n) {
            r(n)
        };
        t.client.send = function(n, t, i) {
            var u = n + " - " + t + ": " + i;
            r(u)
        };


        function loginUser() {
            i = prompt("Wie ist Ihr Chat-Name?");
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
            n("#btnSend").click(sendMessage);
        }).fail(function(msg) {
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