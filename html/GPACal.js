angular.module('GPA calculator', [])
  .controller('gpaController', function() {
    var gpaList = this;
    gpaList.courses = {name:"COMP3111",credit:'3',GPA: 4.0};

    gpaList.addCourse = function() {
      gpaList.courses.push({name:gpaList.courseText, credit:gpaList.creditText, GPA:gpaList.GPAText});
      gpaList.courseText = '';
      gpaList.creditText = '';
      gpaList.GPAText = '';
    };

    gpaList.totalcredit = function() {
      var total=0;
      angular.forEach(gpaList.courses, function(todo) {
        total += course.credit;
      });
      return total;
    }

    gpaList.totalmarks = function() {
      var total=0;
      angular.forEach(gpaList.courses, function(todo) {
        total += course.GPA;
      });
      return total;
    }

    gpaList.calculate = function() {
      return totalmarks()/totalcredit();
    };

    function Testing($scope){
      $scope.testing = {text:'Testing'};
    }


  });


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/