appServersoft.controller('charsController', ['$scope', '$filter', 'commonvariable', 'authentication','$localStorage','variable','user','responsevalue','responsevaluechars','system','questionsubdimension','project', function ($scope, $filter, commonvariable, authentication, $localStorage,variable,user,responsevalue,responsevaluechars,system,questionsubdimension,project) {
        ///verify session
         //authentication.checkStatus();
         $scope.getproject = function () {
            project.get({})
           .$promise.then(function (resp) {
               $scope.listproject = resp;
           });
        };
       $scope.getproject();
         $scope.getsystem = function () {
            system.get({})
           .$promise.then(function (resp) {
               $scope.listsystem = resp;
           });
        };
      $scope.getsystem();

       $scope.getQsubdimension = function () {
        questionsubdimension.get({})
       .$promise.then(function (resp) {
        $scope.lstQsubdimentsion = resp;
        if(resp != null)
             {
                 var arrayGraphic = [];
                 for (var i = 0; i < resp.length; i++) {
                  //   console.log(resp[i].name +" = "+resp[i].item);
                     arrayGraphic [i] = [resp[i].name, resp[i].item];
                 }
                 //Asignamos el array creado a la grafica
                 var obj = {
                     columns: arrayGraphic
                 };
                 LoadGraphicQsub(obj);
           }
       });
    };
   $scope.getQsubdimension();
   var chartQsub = null;
     function LoadGraphicQsub(data) {
         chartQsub.load(data);
         chartQsubdonut.load(data);
    }
    
    function CreateGraphicCitasByTipo(data) {
        chartQsub = c3.generate({
         bindto: '#chartQsub',
         data: {
             columns: data,
             type: 'bar', //type: 'donut',
             color: function (color, d) {
                 // d will be 'id' when called for legends
                 return d.id && d.id === 'data' ? d3.rgb(color).darker(d.value / 150) : color;
             }
         },
     });
     chartQsubdonut = c3.generate({
        bindto: '#chartQsubdonut',
        data: {
            columns: data,
            type: 'donut', //type: 'donut',
            color: function (color, d) {
                // d will be 'id' when called for legends
                return d.id && d.id === 'data' ? d3.rgb(color).darker(d.value / 150) : color;
            }
        },
    });
 }
 CreateGraphicCitasByTipo([]);
 
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
                          }//return "Opciones: " + top + " Seleccionadas: "+ ts +" "+ (ts/top)*100+"%";
                         return ((ts/top)*100).toFixed()+"%";
                    break;
                    case "Si / No":             
                        return (item.rvresp * 100)+"%";
                     break;
                     case "Numerico":             
                     return (item.rvresp);
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