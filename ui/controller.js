var drugApp = angular.module('homeapp',['ngMaterial','ngMessages']);

 drugApp.config(function($mdThemingProvider) {
     
    var baseGreenConf = $mdThemingProvider.extendPalette('green', {
    'A100': '19B964',
    'A200': '19B964',
    'A400': '19B964',
    'A700': '19B964',
    'contrastDefaultColor': 'dark'
  });
    var baseIndigoConf = $mdThemingProvider.extendPalette('indigo', {
    '500': '000000',
    'contrastDefaultColor': 'light'
  });
   $mdThemingProvider.definePalette('baseGreen', baseGreenConf);
   $mdThemingProvider.definePalette('baseIndigo', baseIndigoConf);
  
   // Apply theme:
   $mdThemingProvider.theme('default')
     .primaryPalette('baseIndigo')
     .accentPalette('baseGreen');
 });
 
 drugApp
         .controller('basiccontrol', function DemoCtrl($scope,$timeout,$q, $http, $mdDialog){
         var origev;
         $scope.editbtn = function(){
         sub.readonly1=false;
         sub.removable1=true;
         self.isDisabled=false;
         };
         
         this.openMenu = function($mdOpenMenu, ev){
         origev=ev;
         $mdOpenMenu(ev);
         };
         $scope.change = function(){
         $scope.fname = "Manage Generics";
         };
         $scope.change1 = function(){
         $scope.fname = "Publish";
         };
         $scope.change2 = function(){
         $scope.fname = "Classification Master";
         };
         $scope.change3 = function(){
         $scope.fname = "Pregnancy Category Master";
         };
         $scope.change4 = function(){
         $scope.fname = "Schedule Master";
         };
         $scope.change5 = function(){
         $scope.fname = "Route of Administration";
         }
         $scope.getTabContent= function(){
         $scope.tabname = "Summary";
         };
         $scope.getTabContent1= function(){
         $scope.tabname = "Indication";
         };
         $scope.getTabContent2= function(){
         $scope.tabname = "Contra-Indication";
         };
         $scope.getTabContent4= function(){
         $scope.tabname = "Adverse Effects";
         };
         $scope.getTabContent5= function(){
         $scope.tabname = "Precautions";
         };
         $scope.getTabContent6= function(){
         $scope.tabname = "Route and Dose";
         };
         $scope.getTabContent7= function(){
         $scope.tabname = "Availability";
         };
         $scope.getTabContent8= function(){
         $scope.tabname = "Drug-Drug Interaction";
         };
         $scope.getTabContent9= function(){
         $scope.tabname = "Alcohol Interaction";
         };
         $scope.getTabContent10= function(){
         $scope.tabname = "Contraceptive Interaction";
         };
         $scope.getTabContent11= function(){
         $scope.tabname = "Food Interaction";
         };
         $scope.getTabContent12= function(){
         $scope.tabname = "Special Conditions";
         };
         $scope.getTabContent13= function(){
         $scope.tabname = "FAQ";
         };
         $scope.getTabContent14= function(){
         $scope.tabname = "Brands";
         };
     
    var self=this;
    self.states        = loadAll();
    self.selectedItem  = null;
    self.searchText    = null;
    self.querySearch   = querySearch;
    
    self.isDisabled = true;

     
    function querySearch (query) {
      var results = query ? self.states.filter( createFilterFor(query) ) : self.states;
      var deferred = $q.defer();
      $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
      return deferred.promise;
    }
    
     function loadAll() {
      var allStates = 'Ab , Ac , Bd , Br , Cd , Ct';

      return allStates.split(/, +/g).map( function (state) {
        return {
          value: state.toLowerCase(),
          display: state
        };
      });
    }

  function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(state) {
        return (state.value.indexOf(lowercaseQuery) === 0);
      };

    }
    
    var self49=this;
    self49.states        = loadAll49();
    self.selectedItem49  = null;
    self.searchText49    = null;
    self.querySearch49   = querySearch49;

     
    function querySearch49 (query) {
      var results = query ? self.states.filter( createFilterFor49(query) ) : self.states49;
      var deferred = $q.defer();
      $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
      return deferred.promise;
    }
    
     function loadAll49() {
      var allStates = 'Gen , AGen , BGen , Br , Cd , Ct';

      return allStates.split(/, +/g).map( function (state49) {
        return {
          value: state49.toLowerCase(),
          display: state49
        };
      });
    }

  function createFilterFor49(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn49(state49) {
        return (state49.value.indexOf(lowercaseQuery) === 0);
      };

    }

  var self21=this;
    self21.states21        = loadAll21();
    self21.selectedItem21  = null;
    self21.searchText21   = null;
    self21.querySearch21   = querySearch21;

     
    function querySearch21 (query) {
      var results = query ? self.states21.filter( createFilterFor21(query) ) : self.states21;
      var deferred = $q.defer();
      $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
      return deferred.promise;
    }
    
     function loadAll21() {
      var allStates = 'Anku , Ac , Bd , Br , Cd , Ct';

      return allStates.split(/, +/g).map( function (state21) {
        return {
          value: state21.toLowerCase(),
          display: state21
        };
      });
    }

  function createFilterFor21(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn21(state21) {
        return (state21.value.indexOf(lowercaseQuery) === 0);
      };

    }

var self22=this;
    self22.states22        = loadAll22();
    self22.selectedItem22  = null;
    self22.searchText22   = null;
    self22.querySearch22   = querySearch22;

     
    function querySearch22 (query) {
      var results = query ? self.states22.filter( createFilterFor22(query) ) : self.states22;
      var deferred = $q.defer();
      $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
      return deferred.promise;
    }
    
     function loadAll22() {
      var allStates = 'Anku , Ac , Bd , Br , Cd , Ct';

      return allStates.split(/, +/g).map( function (state22) {
        return {
          value: state22.toLowerCase(),
          display: state22
        };
      });
    }

  function createFilterFor22(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn22(state22) {
        return (state22.value.indexOf(lowercaseQuery) === 0);
      };

    }
    
var self23=this;
    self23.states23     = loadAll23();
    self23.selectedItem23  = null;
    self23.searchText23   = null;
    self23.querySearch23   = querySearch23;

     
    function querySearch23 (query) {
      var results = query ? self.states23.filter( createFilterFor23(query) ) : self.states23;
      var deferred = $q.defer();
      $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
      return deferred.promise;
    }
    
     function loadAll23() {
      var allStates = 'Anku , Ac , Bd , Br , Cd , Ct';

      return allStates.split(/, +/g).map( function (state23) {
        return {
          value: state23.toLowerCase(),
          display: state23
        };
      });
    }

  function createFilterFor23(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn23(state23) {
        return (state23.value.indexOf(lowercaseQuery) === 0);
      };

    }

var self24=this;
    self24.states24    = loadAll24();
    self24.selectedItem24  = null;
    self24.searchText24   = null;
    self24.querySearch24   = querySearch24;

     
    function querySearch24 (query) {
      var results = query ? self.states24.filter( createFilterFor24(query) ) : self.states24;
      var deferred = $q.defer();
      $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
      return deferred.promise;
    }
    
     function loadAll24() {
      var allStates = 'Anku , Ac , Bd , Br , Cd , Ct';

      return allStates.split(/, +/g).map( function (state24) {
        return {
          value: state24.toLowerCase(),
          display: state24
        };
      });
    }

  function createFilterFor24(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn24(state24) {
        return (state24.value.indexOf(lowercaseQuery) === 0);
      };

    }


  var sub = this;

   sub.readonly1=true;
   sub.removable1=false;
    sub.subNames = ['Sub 1', 'Sub 2', 'Sub 3'];
    sub.rosubNames = angular.copy(sub.subNames);
    
     this.userState1=' ';
     this.userState2=' ';
        this.pcategory = ('Category1 Category2 Category3 Category4 Category5').split(' ').map(function (pcat) { return { abbrev: pcat }; });
            
        this.schedule = ('Schedule1 Schedule2 Schedule3 Schedule4 Schedule5').split(' ').map(function (sch) { return { abbrev: sch }; });
        
    var bs=this;
    bs.tags=[];
    
    $scope.todoList = [{todoText:'Indication 1',done: false},{todoText:'Indication 2',done: false},{todoText:'Indication 3',done: false}];

    $scope.todoAdd = function() {
        $scope.todoList.push({todoText:$scope.todoInput, done: false});
        $scope.todoInput = "";
    };
    
    $scope.removeIndi = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
        if (!x.done) $scope.todoList.push(x);
        });
    };
    
     var sp=this;
    sp.tags=[];
    
    $scope.notesList = [{notesText:'Note 1',done: false},{notesText:'Note 2',done: false},{notesText:'Note 3',done: false}];

    $scope.notesAdd = function() {
        $scope.notesList.push({notesText:$scope.notesInput, done: false});
        $scope.notesInput = "";
    };
    
    $scope.removeIndi = function() {
        var oldList = $scope.notesList;
        $scope.notesList = [];
        angular.forEach(oldList, function(x) {
        if (!x.done) $scope.notesList.push(x);
        });
    };
    
    
     $scope.colors = [
      {name:'xcxvx'}
    ];
    
     $http.get("http://www.w3schools.com/angular/customers.php")
    .then(function (response) {$scope.names = response.data.records;});
    
    $scope.showMe=false;
    $scope.show=function(){
    $scope.showMe=!$scope.showMe;
    }
    $scope.showIndi=false;
    $scope.showIndication=function(){
    $scope.showIndi=!$scope.showIndi;
    }
    $scope.showIndi1=false;
    $scope.showIndication1=function(){
    $scope.showIndi1=!$scope.showIndi1;
    }
    $scope.abc=false;
    $scope.abcd=function(){
    $scope.abc=!$scope.abc;
    }
    $scope.abb=false;
    $scope.ab=function(){
    $scope.abb=!$scope.abb;
    }
    $scope.cnt=false;
    $scope.tab=true;
    $scope.cntfn=function(){
    $scope.cnt=!$scope.cnt;
    $scope.tab=!$scope.tab;
    }
    $scope.avail=false;
    $scope.avail1=function(){
    $scope.avail=!$scope.avail;
    }
    $scope.alco=false;
    $scope.alco1=function(){
    $scope.alco=!$scope.alco;
    }
    $scope.cont=false;
    $scope.cont1=function(){
    $scope.cont=!$scope.cont;
    }
    $scope.food=false;
    $scope.food1=function(){
    $scope.food=!$scope.food;
    }
    $scope.sp=false;
    $scope.sp1=function(){
    $scope.sp=!$scope.sp;
    }
    $scope.chn=false;
    $scope.chng1=function(){
    $scope.chn=!$scope.chn;
    }
    $scope.schedule=false;
    $scope.chng2=function(){
    $scope.schedule=!$scope.schedule;
    }
    $scope.route=false;
    $scope.chng3=function(){
    $scope.route=!$scope.route;
    }
    $scope.drg=false;
    $scope.drg11=function(){
    $scope.drg=!$scope.drg;
    }
    
  $scope.status = '  ';
  $scope.customFullscreen = false;

  $scope.showAlert = function(ev) {
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Interaction Message')
        .textContent('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
        .ariaLabel('Interaction Message')
        .ok('Close')
        .targetEvent(ev)
    );
  };
  $scope.removeRow = function(productIndex){
      $scope.names.splice(productIndex, 1);
      }
    $scope.removeRow3 = function(productIndex){
      $scope.names.splice(productIndex, 1);
      }
$scope.removeRow4 = function(productIndex){
      $scope.names.splice(productIndex, 1);
      }
    $scope.removeRow5 = function(productIndex){
      $scope.names.splice(productIndex, 1);
      }
$scope.removeInd = function(item) { 
   var index = $scope.todoList.indexOf(item);
  $scope.todoList.splice(index, 1);     
}
 $scope.data2 = {
      group1: 'cls'
    };
$scope.data = {
      group2: 'published'
    };
    });