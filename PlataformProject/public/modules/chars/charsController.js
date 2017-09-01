appServersoft.controller('charsController', ['$scope', '$filter', 'commonvariable', 'authentication','$localStorage','variable','user','responsevalue','responsevaluechars','system', function ($scope, $filter, commonvariable, authentication, $localStorage,variable,user,responsevalue,responsevaluechars,system) {
        ///verify session
         //authentication.checkStatus();
         $scope.getsystem = function () {
            system.get({})
           .$promise.then(function (resp) {
               $scope.listsystem = resp;
           });
        };
    
       $scope.getsystem();

        new Chart(document.getElementById("polar-chart"), {
            type: 'polarArea',
            data: {
            labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
            datasets: [
                {
                label: "Population (millions)",
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                data: [2478,5267,734,784,433]
                }
            ]
            },
            options: {
            title: {
                display: true,
                text: 'Predicted world population (millions) in 2050'
            }
            }
        });
    
         var densityCanvas = document.getElementById("densityChart");
         Chart.defaults.global.defaultFontFamily = "Lato";
         Chart.defaults.global.defaultFontSize = 18;
         var densityData = {
           label: 'Density of Planets (kg/m3)',
           data: [5427, 5243, 5514, 3933, 1326, 687, 1271, 1638]
         };
         var barChart = new Chart(densityCanvas, {
         type: 'bar',
           data: {
             labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
             datasets: [densityData]
           }
         });
        ///variables
        var densityCanvas = document.getElementById("densityChart1");
        Chart.defaults.global.defaultFontFamily = "Lato";
        Chart.defaults.global.defaultFontSize = 18;
        var densityData = {
          label: 'Density of Planets (kg/m3)',
          data: [5427, 5243, 5514, 3933, 1326, 687, 1271, 1638],
          backgroundColor: [
            'rgba(0, 99, 132, 0.6)',
            'rgba(30, 99, 132, 0.6)',
            'rgba(60, 99, 132, 0.6)',
            'rgba(90, 99, 132, 0.6)',
            'rgba(120, 99, 132, 0.6)',
            'rgba(150, 99, 132, 0.6)',
            'rgba(180, 99, 132, 0.6)',
            'rgba(210, 99, 132, 0.6)',
            'rgba(240, 99, 132, 0.6)'
          ],
          borderColor: [
            'rgba(0, 99, 132, 1)',
            'rgba(30, 99, 132, 1)',
            'rgba(60, 99, 132, 1)',
            'rgba(90, 99, 132, 1)',
            'rgba(120, 99, 132, 1)',
            'rgba(150, 99, 132, 1)',
            'rgba(180, 99, 132, 1)',
            'rgba(210, 99, 132, 1)',
            'rgba(240, 99, 132, 1)'
          ],
          borderWidth: 2,
          hoverBorderWidth: 0
        };
        var chartOptions = {
          scales: {
            yAxes: [{
              barPercentage: 0.5
            }]
          },
          elements: {
            rectangle: {
              borderSkipped: 'left',
            }
          }
        };
        
        var barChart = new Chart(densityCanvas, {
          type: 'horizontalBar',
          data: {
            labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
            datasets: [densityData],
          },
          options: chartOptions
        });

        ////
        
        $scope.alerts = [];
        var $translate = $filter('translate');
           $scope.initform = function () {
                $scope.mode = 'create';
                $scope.rvoid = 0;
                $scope.vaoid = 0;
                $scope.rvvalue="";
                $scope.rvdate= "";
                $scope.usoid = 0;
                $scope.TotalUsers = 234;
            }
            $scope.initform();
        
            $scope.selectresponsevalue = function (rvoid,vaoid,rvvalue,rvdate,usoid) {
                $scope.mode = 'edit';
                $scope.rvoid = rvoid;
                var variable = $scope.listvariable.filter(function (item) {
                    return item.vaoid == vaoid;
                 });
                $scope.vaoid = variable[0];
                $scope.rvvalue=rvvalue;      
                $scope.rvdate = rvdate;
                var user = $scope.listuser.filter(function (item) {
                    return item.usoid == usoid;
                 });
                 $scope.usoid = user[0];
            }
           
            $scope.getresponsevalue = function () {
                responsevaluechars.get({})
               .$promise.then(function (resp) {
                   $scope.listresponsevalue = resp;
               });
            };
        
           $scope.getresponsevalue();
        
           $scope.deleteresponsevalue = function (rvoid) {
                responsevalue.delete({rvoid:rvoid})
               .$promise.then(function (resp) {
                   $scope.getresponsevalue();
                   $scope.initform();
               });
            };
        
            $scope.saveresponsevalue = function (vaoid,rvvalue,rvdate,usoid) {
               responsevalue.post({ vaoid:vaoid.vaoid, rvvalue: rvvalue, rvdate: rvdate, usoid:usoid.usoid })
              .$promise.then(function (resp) {
                  if (resp.rvvalue == rvvalue) {
                      $scope.getresponsevalue();
                      $scope.alerts.push({ msg: $translate("ROOM_MSG_SUCCESS"), type: 'success' });
                      $scope.initform();
                  }
                  else {
                      $scope.alerts.push({ msg: $translate("ROOM_MSG_ERROR"), type: 'error' });
                  }
              });
            };
        
            $scope.updateresponsevalue = function (rvoid, vaoid, rvvalue, rvdate, usoid) {
                responsevalue.put({ rvoid:rvoid, vaoid:vaoid.vaoid, rvvalue: rvvalue, rvdate: rvdate, usoid:usoid.usoid  })
              .$promise.then(function (resp) {
                  if (resp.length > 0) {
                      $scope.getresponsevalue();
                      $scope.alerts.push({ msg: $translate("BED_MSG_SUCCESS"), type: 'success' });
                      $scope.initform();
                  }
                  else {
                      $scope.alerts.push({ msg: $translate("BED_MSG_ERROR"), type: 'error' });
                  }
              });
            };
                    $scope.addAlert = function (menssage) {
                    $scope.alerts.push({ label: " ", msg: menssage });
                };
        
            $scope.getvariable = function () {
                variable.get({})
               .$promise.then(function (resp) {
                   $scope.listvariable = resp;
               });
            };
            $scope.getvariable();
        
            $scope.getvariableName = function (vaoid) {
                var variable = $scope.listvariable.filter(function (item) {
                    return item.vaoid == vaoid;
                 });
                 return variable[0].vaname;
            };
        
        
            $scope.getuser = function () {
                user.get({})
               .$promise.then(function (resp) {
                   $scope.listuser = resp;
               });
            };
            $scope.getuser();
        
            $scope.getuserName = function (usoid) {
                var user = $scope.listuser.filter(function (item) {
                    return item.usoid == usoid;
                 });
                 return user[0].usname;
            };

            $scope.getResp = function(item){
                switch (item.tqdescription) {
                    case "Likert":
                        return ((item.rvresp * 100)/5)+"%";
                    break;
                    case "Seleccion Multiple":
                        var top = item.optionquestion.split(',').length;
                        var tops = item.rvresp.split('*');
                        var ts=0;
                        for (var i = 0; i < tops.length; i++) {
                            if(tops[i].split(',').length > 0 && tops[i].split(',')[1] == 1 )
                              ts++;
                          }
                         return "Opciones: " + top + " Seleccionadas: "+ ts +" "+ (ts/top)*100+"%";
                    break;
                    case "Si / No":             
                        return (item.rvresp * 100)+"%";
                     break;
                    default:
                      return "";
                    break;
                  }
            }
            //DateTime
            $scope.open = function ($event) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.opened = true;
            };
                
                $scope.closeAlert = function (index) {
                    $scope.alerts.splice(index, 1);
                };   
        }]);