"use strict";

var App = angular.module("todo", ["ui.sortable", "LocalStorageModule"]);

App.controller("TodoCtrl", function ($scope, localStorageService) {

	$scope.init = function () {

		if (!localStorageService.get("todoList")) {
			$scope.model = [
				{
					name: "Primary", list: [
						{ taskName: "Create an Angular-js TodoList", isDone: false },
						{ taskName: "Understanding Angular-js Directives", isDone: true }
					]
				},
				{
					name: "Secondary", list: [
						{ taskName: "Build an open-source website builder", isDone: false },
						{ taskName: "BUild an Email Builder", isDone: false }
					]
				}
			];
		}else{
			$scope.model = localStorageService.get("todoList");
		}
		$scope.show = "All";
		$scope.currentShow = 0;
	};

	$scope.addTodo = function () {
		
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1; //January is 0!
		var yyyy = today.getFullYear();
		var hh = today.getHours();
		var min = today.getMinutes();
			if(dd<10)
					dd='0'+dd
			if(mm<10)
					mm='0'+mm
			if(min<10) 
					min='0'+min
			today = mm+'/'+dd+'/'+yyyy+ '-' +hh+':'+min;
			function navigator(){
				var x = navigator.platform;
			}
		$scope.model[$scope.currentShow].list.splice(0, 0, 
		{
			taskName: $scope.newTodo, 
			isDone: false,
			type: navigator(), 
			date_created: today  
		});
		$scope.newTodo = "";
	};

	$scope.deleteTodo = function (item) {
		var index = $scope.model[$scope.currentShow].list.indexOf(item);
		$scope.model[$scope.currentShow].list.splice(index, 1);
	};

	$scope.todoSortable = {
		containment: "parent",
		cursor: "move",
		tolerance: "pointer"
	};

	$scope.changeTodo = function (i) {
		$scope.currentShow = i;
	};

	/* Filter Function for All | Incomplete | Complete */
	$scope.showFn = function (todo) {
		if ($scope.show === "All") {
			return true;
		}else if(todo.isDone && $scope.show === "Complete"){
			return true;
		}else if(!todo.isDone && $scope.show === "Incomplete"){
			return true;
		}else{
			return false;
		}
	};

	$scope.$watch("model",function (newVal,oldVal) {
		if (newVal !== null && angular.isDefined(newVal) && newVal!==oldVal) {
			localStorageService.add("todoList",angular.toJson(newVal));
		}
	},true);

});