appServersoft.controller('charsController', ['$scope', '$filter', 'commonvariable', 'authentication','$localStorage','variable','user','responsevalue','responsevaluechars','responsevaluesd','responsevaluedm','responsevaluefe','responsevaluesfe','system','questionsubdimension','project','dimension','subdimension','feature','subfeature','featuresubdimension','systemproject','facilityproject','facility', function ($scope, $filter, commonvariable, authentication, $localStorage,variable,user,responsevalue,responsevaluechars,responsevaluesd,responsevaluedm,responsevaluefe,responsevaluesfe,system,questionsubdimension,project,dimension,subdimension,feature,subfeature,featuresubdimension,systemproject,facilityproject,facility) {
        ///verify session
         //authentication.checkStatus();
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
         $scope.proid = null;
         $scope.sd = null;
         $scope.project = null;
     }
     $scope.initform();
     $scope.getDimension = function () {
        dimension.get({})
       .$promise.then(function (resp) {
           $scope.listDimension = resp;
       });
    };
    $scope.getDimension();

    $scope.getSubdimension = function () {
        subdimension.get({})
       .$promise.then(function (resp) {
           $scope.listSubdimension = resp;
       });
    };
   $scope.getSubdimension();

   $scope.getfeature = function () {
    feature.get({})
   .$promise.then(function (resp) {
       $scope.listfeature = resp;
   });
};
$scope.getfeature();

$scope.getSubfeature = function () {
    subfeature.get({})
   .$promise.then(function (resp) {
       $scope.listSubfeature = resp;
   });
};
$scope.getSubfeature();

$scope.loadGraphic = function(filter){
    $scope.proid = filter.proid;
    $scope.project = filter.prname;
    $scope.getresponsevalue(filter.proid);
    $scope.getsystemproject();
    $scope.getfacilityproject();
   };

 $scope.getproject = function () {
        project.get({})
        .$promise.then(function (resp) {
        $scope.listproject = resp;});};

       $scope.getproject();

         $scope.getsystem = function () {
            system.get({})
           .$promise.then(function (resp) {
               $scope.listsystem = resp;
           });
        };
      $scope.getsystem();

      $scope.getsystemproject = function () {
        sysproid = $scope.proid; 
         systemproject.get({sysproid})
        .$promise.then(function (resp) {
            $scope.listsystem = resp;
        });
     };

     $scope.getfacilityproject = function () {
        facproid = $scope.proid; 
        facilityproject.get({facproid})
        .$promise.then(function (resp) {
            $scope.listfacility = resp;
        });
     };

     $scope.getfacility = function () {
        facility.get({})
        .$promise.then(function (resp) {
            $scope.listfacility = resp;
        });
     };
     $scope.getfacility();


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
           
             $scope.getresponsevalue = function (proid) {
                 responsevaluechars.get({proid})
                .$promise.then(function (resp) {
                   $scope.listresponsevalue = resp;
                });
             };
            $scope.getresponsevalue($scope.proid);

            $scope.getresponsevalueSD = function () {
                proid = $scope.proid;
                sd = $scope.sdoid.suoid;
                responsevaluesd.get({sd,proid})
               .$promise.then(function (resp) {
                   if(resp == null)
                     alert("No hay Datos");
                   else
                        $scope.listresponsevalue = resp;
               });
            };
            
        //    $scope.getresponsevalueSD($scope.sd);

           $scope.getresponsevalueDM = function () {
            proid = $scope.proid;
            dm= $scope.dioid.dioid;
            responsevaluedm.get({dm, proid})
           .$promise.then(function (resp) {
            if(resp == null)
                alert("No hay Datos");
              else
                   $scope.listresponsevalue = resp;
           });
        };
        $scope.getresponsevalueFE = function () {
            proid = $scope.proid;
            fe= $scope.feoid.feoid;
            responsevaluefe.get({fe, proid})
           .$promise.then(function (resp) {
            if(resp == null)
                alert("No hay Datos");
              else
                   $scope.listresponsevalue = resp;
           });
        };
        $scope.getresponsevalueSFE = function () {
            proid = $scope.proid;
            sfe= $scope.sfoid.sfoid;
            responsevaluesfe.get({sfe, proid})
           .$promise.then(function (resp) {
            if(resp == null)
                alert("No hay Datos");
              else
                   $scope.listresponsevalue = resp;
           });
        };
      // $scope.getresponsevalueSD(null);
        
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
                        return ((item.rvresp * 100)/5).toFixed(2)+"%";
                    break;
                    case "Seleccion Multiple":
                        var top = item.optionquestion.split(',').length;
                        var tops = item.rvresp.split(',');
                        var ts = 0;
                        for (var i = 0; i < tops.length; i++) {
                            console.log(tops[i]);
                            if(tops[i] == 1 )
                              ts++;
                          }//return "Opciones: " + top + " Seleccionadas: "+ ts +" "+ (ts/top)*100+"%";
                        console.log( top+"=>"+tops.length +" Total:"+((ts/top)*100).toFixed(1)+"%"+" rvoid:"+item.rvoid);
                        return ((ts/top)*100).toFixed(1)+"%";
                    break;
                    case "Si / No":             
                        return (item.rvresp * 100).toFixed(1)+"%";
                     break;
                     case "Numerico":             
                     return (item.rvresp);
                  break;
                    default:
                      return "";
                    break;
                  }
            }
            $scope.getItemsResp = function(item){
                switch (item.tqdescription) {
                    case "Likert":
                        return (item.rvresp);
                    break;
                    case "Seleccion Multiple":
                        var top = item.optionquestion.split(',');
                        var tops = item.rvresp.split(',');
                        var resp="";
                        for (var i = 0; i < top.length; i++) {
                            if(tops[i]== 1)
                               resp = resp + top[i]+"/";
                          }//return "Opciones: " + top + " Seleccionadas: "+ ts +" "+ (ts/top)*100+"%";
                         return resp;
                    break;
                    case "Si / No":             
                        return (item.rvresp == 0 ? 'No' : 'Si');
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