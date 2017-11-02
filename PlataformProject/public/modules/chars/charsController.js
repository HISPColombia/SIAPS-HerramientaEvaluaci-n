appServersoft.controller('charsController', ['$scope', '$filter', 'commonvariable', 'authentication','$localStorage','variable','user','responsevalue','responsevaluechars','responsevaluesd','responsevaluedm','responsevaluefe','responsevaluesfe','system','qualifidimension','qualifisubdimension','project','dimension','subdimension','feature','subfeature','featuresubdimension','systemproject','facilityproject','facility','qualififeature','qualifisubfeature','dimensiondonut','featuredonut','typesystem', function ($scope, $filter, commonvariable, authentication, $localStorage,variable,user,responsevalue,responsevaluechars,responsevaluesd,responsevaluedm,responsevaluefe,responsevaluesfe,system,qualifidimension,qualifisubdimension,project,dimension,subdimension,feature,subfeature,featuresubdimension,systemproject,facilityproject,facility,qualififeature,qualifisubfeature,dimensiondonut,featuredonut,typesystem) {
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
    $scope.getCharDimension(filter.proid);
    $scope.getCharQtypesystem(filter.proid);
    $scope.getCharSubDimension1(filter.proid, '1');
    $scope.getCharSubDimension2(filter.proid, '2');
    $scope.getCharSubDimension3(filter.proid, '3');
    $scope.getCharFeature(filter.proid);
    $scope.getCharSubFeature1(filter.proid,'1');
    $scope.getCharSubFeature2(filter.proid,'2');
    $scope.getCharSubFeature3(filter.proid,'3');
    $scope.getCharSubFeature4(filter.proid,'4');
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

// Grafica de Barras Calificacion por Dimensions del Proyecto
var chartDimension = null;
function LoadGraphicDim(data) {
    chartDimension.load(data);
}
$scope.getCharDimension = function (proid) {
        qualifidimension.get({proid})
       .$promise.then(function (resp) {
        if(resp != null)
             {
                 var arrayGraphic = [];
                 for (var i = 0; i < resp.length; i++) {
                     arrayGraphic [i] = [resp[i].name, resp[i].item];
                 }
                 var obj = {
                     columns: arrayGraphic
                 };
                 LoadGraphicDim(obj);
           }
       });
 };
   //$scope.getCharDimension();
    
function CreateGraphicDimension(data) {
        chartDimension = c3.generate({
         bindto: '#chartDimension',
         data: {
             columns: data,
             type: 'bar', //type: 'donut',
             color: function (color, d) {
                 // d will be 'id' when called for legends
                 return d.id && d.id === 'data' ? d3.rgb(color).darker(d.value / 150) : color;
             }
         },
     });

 }
 CreateGraphicDimension([]);
 
 //FinGrafica Dimension      
 // Grafica de Barras Calificacion por SubSubDimensions del Proyecto
var chartSubDimension1 = null;
var chartSubDimension2 = null;
var chartSubDimension3 = null;
function LoadGraphicSubDim1(data) {
    chartSubDimension1.load(data);
}
function LoadGraphicSubDim2(data) {
    chartSubDimension2.load(data);
}
function LoadGraphicSubDim3(data) {
    chartSubDimension3.load(data);
}
$scope.getCharSubDimension1 = function (proid, dioid) {
        qualifisubdimension.get({proid, dioid})
       .$promise.then(function (resp) {
        if(resp != null)
             {
                 var arrayGraphic = [];
                 for (var i = 0; i < resp.length; i++) {
                     arrayGraphic [i] = [resp[i].name, resp[i].item];
                 }
                 var obj = {
                     columns: arrayGraphic
                 };
                 LoadGraphicSubDim1(obj);
           }
       });
 };
 $scope.getCharSubDimension2 = function (proid, dioid) {
        qualifisubdimension.get({proid, dioid})
       .$promise.then(function (resp) {
        if(resp != null)
             {
                 var arrayGraphic = [];
                 for (var i = 0; i < resp.length; i++) {
                     arrayGraphic [i] = [resp[i].name, resp[i].item];
                 }
                 var obj = {
                     columns: arrayGraphic
                 };
                 LoadGraphicSubDim2(obj);
           }
       });
 };
 $scope.getCharSubDimension3 = function (proid, dioid) {
        qualifisubdimension.get({proid, dioid})
       .$promise.then(function (resp) {
        if(resp != null)
             {
                 var arrayGraphic = [];
                 for (var i = 0; i < resp.length; i++) {
                     arrayGraphic [i] = [resp[i].name, resp[i].item];
                 }
                 var obj = {
                     columns: arrayGraphic
                 };
                 LoadGraphicSubDim3(obj);
           }
       });
 };
   //$scope.getCharSubDimension();
    
function CreateGraphicSubDimension1(data) {
        chartSubDimension1 = c3.generate({
         bindto: '#chartSubDimension1',
         data: {
             columns: data,
             type: 'bar', //type: 'donut',
             color: function (color, d) {
                 // d will be 'id' when called for legends
                 return d.id && d.id === 'data' ? d3.rgb(color).darker(d.value / 150) : color;
             }
         },
     });

 }
 CreateGraphicSubDimension1([]);

 function CreateGraphicSubDimension2(data) {
        chartSubDimension2 = c3.generate({
         bindto: '#chartSubDimension2',
         data: {
             columns: data,
             type: 'bar', //type: 'donut',
             color: function (color, d) {
                 // d will be 'id' when called for legends
                 return d.id && d.id === 'data' ? d3.rgb(color).darker(d.value / 150) : color;
             }
         },
     });

 }
 CreateGraphicSubDimension2([]);

 function CreateGraphicSubDimension3(data) {
        chartSubDimension3 = c3.generate({
         bindto: '#chartSubDimension3',
         data: {
             columns: data,
             type: 'bar', //type: 'donut',
             color: function (color, d) {
                 // d will be 'id' when called for legends
                 return d.id && d.id === 'data' ? d3.rgb(color).darker(d.value / 150) : color;
             }
         },
     });

 }
 CreateGraphicSubDimension3([]);
 
 //FinGrafica SubDimension  
// Grafica de Barras Calificacion por Features del Proyecto
var chartFeature = null;
function LoadGraphicFeature(data) {
    chartFeature.load(data);
}
$scope.getCharFeature = function (proid) {
        qualififeature.get({proid})
       .$promise.then(function (resp) {
        if(resp != null)
             {
                 var arrayGraphic = [];
                 for (var i = 0; i < resp.length; i++) {
                     arrayGraphic [i] = [resp[i].name, resp[i].item];
                 }
                 var obj = {
                     columns: arrayGraphic
                 };
                 LoadGraphicFeature(obj);
           }
       });
 };
   //$scope.getCharFeature();
    
function CreateGraphicFeature(data) {
        chartFeature = c3.generate({
         bindto: '#chartFeature',
         data: {
             columns: data,
             type: 'bar', //type: 'donut',
             color: function (color, d) {
                 // d will be 'id' when called for legends
                 return d.id && d.id === 'data' ? d3.rgb(color).darker(d.value / 150) : color;
             }
         },
     });

 }
 CreateGraphicFeature([]);
 
 //FinGrafica Feature   
// Grafica de Barras Calificacion por SubFeatures del Proyecto
var chartSubFeature1 = null;
function LoadGraphicSubFeature1(data) {
    chartSubFeature1.load(data);
}
var chartSubFeature2 = null;
function LoadGraphicSubFeature2(data) {
    chartSubFeature2.load(data);
}
var chartSubFeature3 = null;
function LoadGraphicSubFeature3(data) {
    chartSubFeature3.load(data);
}
var chartSubFeature4 = null;
function LoadGraphicSubFeature4(data) {
    chartSubFeature4.load(data);
}
$scope.getCharSubFeature1 = function (proid,feoid) {
        qualifisubfeature.get({proid, feoid})
       .$promise.then(function (resp) {
        if(resp != null)
             {
                 var arrayGraphic = [];
                 for (var i = 0; i < resp.length; i++) {
                     arrayGraphic [i] = [resp[i].name, resp[i].item];
                 }
                 var obj = {
                     columns: arrayGraphic
                 };
                 LoadGraphicSubFeature1(obj);
           }
       });
 };
 $scope.getCharSubFeature2 = function (proid, feoid) {
        qualifisubfeature.get({proid, feoid})
       .$promise.then(function (resp) {
        if(resp != null)
             {
                 var arrayGraphic = [];
                 for (var i = 0; i < resp.length; i++) {
                     arrayGraphic [i] = [resp[i].name, resp[i].item];
                 }
                 var obj = {
                     columns: arrayGraphic
                 };
                 LoadGraphicSubFeature2(obj);
           }
       });
 };
 $scope.getCharSubFeature3 = function (proid, feoid) {
        qualifisubfeature.get({proid, feoid})
       .$promise.then(function (resp) {
        if(resp != null)
             {
                 var arrayGraphic = [];
                 for (var i = 0; i < resp.length; i++) {
                     arrayGraphic [i] = [resp[i].name, resp[i].item];
                 }
                 var obj = {
                     columns: arrayGraphic
                 };
                 LoadGraphicSubFeature3(obj);
           }
       });
 };
 $scope.getCharSubFeature4 = function (proid, feoid) {
        qualifisubfeature.get({proid, feoid})
       .$promise.then(function (resp) {
        if(resp != null)
             {
                 var arrayGraphic = [];
                 for (var i = 0; i < resp.length; i++) {
                     arrayGraphic [i] = [resp[i].name, resp[i].item];
                 }
                 var obj = {
                     columns: arrayGraphic
                 };
                 LoadGraphicSubFeature4(obj);
           }
       });
 };
   //$scope.getCharSubFeature();
    
function CreateGraphicSubFeature1(data) {
        chartSubFeature1 = c3.generate({
         bindto: '#chartSubFeature1',
         data: {
             columns: data,
             type: 'bar', //type: 'donut',
             color: function (color, d) {
                 // d will be 'id' when called for legends
                 return d.id && d.id === 'data' ? d3.rgb(color).darker(d.value / 150) : color;
             }
         },
     });

 }
 CreateGraphicSubFeature1([]);
 function CreateGraphicSubFeature2(data) {
        chartSubFeature2 = c3.generate({
         bindto: '#chartSubFeature2',
         data: {
             columns: data,
             type: 'bar', //type: 'donut',
             color: function (color, d) {
                 // d will be 'id' when called for legends
                 return d.id && d.id === 'data' ? d3.rgb(color).darker(d.value / 150) : color;
             }
         },
         options: {
            scales: {
                yAxes: [{ticks: {mirror: true}}]
            }
        }
     });

 }
 CreateGraphicSubFeature2([]);

 function CreateGraphicSubFeature3(data) {
        chartSubFeature3 = c3.generate({
         bindto: '#chartSubFeature3',
         data: {
             columns: data,
             type: 'bar', //type: 'donut',
             color: function (color, d) {
                 // d will be 'id' when called for legends
                 return d.id && d.id === 'data' ? d3.rgb(color).darker(d.value / 150) : color;
             }
         },
         options: {
            scales: {
                yAxes: [{ticks: {mirror: true}}]
            }
        }
     });

 }
 CreateGraphicSubFeature3([]);
 
 function CreateGraphicSubFeature4(data) {
        chartSubFeature4 = c3.generate({
         bindto: '#chartSubFeature4',
         data: {
             columns: data,
             type: 'bar', //type: 'donut',
             color: function (color, d) {
                 // d will be 'id' when called for legends
                 return d.id && d.id === 'data' ? d3.rgb(color).darker(d.value / 150) : color;
             }
         },
         options: {
            scales: {
                yAxes: [{ticks: {mirror: true}}]
            }
        }
     });

 }
 CreateGraphicSubFeature4([]);
 //FinGrafica SubFeature   
// Grafica de Barras Calificacion por DimensionDonuts del Proyecto
var chartDimensionDonut = null;
function LoadGraphicDimensionDonut(data) {
    chartDimensionDonut.load(data);
}
$scope.getCharDimensionDonut = function (dm,proid) {
      dimensiondonut.get({dm,proid})
       .$promise.then(function (resp) {
        if(resp != null)
             {
                 var arrayGraphic = [];
                 for (var i = 0; i < resp.length; i++) {
                     arrayGraphic [i] = [resp[i].name, resp[i].item];
                 }
                 var obj = {
                     columns: arrayGraphic
                 };
                 LoadGraphicDimensionDonut(obj);
           }
       });
 };

    
function CreateGraphicDimensionDonut(data) {
        chartDimensionDonut = c3.generate({
         bindto: '#CahrDimensionDonut',
         data: {
             columns: data,
             type: 'donut', //type: 'donut',
             color: function (color, d) {
                 // d will be 'id' when called for legends
                 return d.id && d.id === 'data' ? d3.rgb(color).darker(d.value / 150) : color;
             }
         },
         options: {
            scales: {
                yAxes: [{ticks: {mirror: true}}]
            }
        }
     });

 }
 CreateGraphicDimensionDonut([]);
 
 //FinGrafica DimensionDonut   
// Grafica de Donut por Feature del Proyecto
var chartFeatureDonut = null;
function LoadGraphicFeatureDonut(data) {
    chartFeatureDonut.load(data);
}
$scope.getCharFeatureDonut = function (fe,proid) {
        featuredonut.get({fe,proid})
       .$promise.then(function (resp) {
        if(resp != null)
             {
                 var arrayGraphic = [];
                 for (var i = 0; i < resp.length; i++) {
                     arrayGraphic [i] = [resp[i].name, resp[i].item];
                 }
                 var obj = {
                     columns: arrayGraphic
                 };
                 LoadGraphicFeatureDonut(obj);
           }
       });
 };
function CreateGraphicFeatureDonut(data) {
        chartFeatureDonut = c3.generate({
         bindto: '#CahrFeatureDonut',
         data: {
             columns: data,
             type: 'donut', //type: 'donut',
             color: function (color, d) {
                 // d will be 'id' when called for legends
                 return d.id && d.id === 'data' ? d3.rgb(color).darker(d.value / 150) : color;
             }
         },
         options: {
            scales: {
                yAxes: [{ticks: {mirror: true}}]
            }
        }
     });

 }
 CreateGraphicFeatureDonut([]);
 
var chartQtypesystem = null;
function LoadGraphicQtsys(data) {
    chartQtypesystem.load(data);
}
$scope.getCharQtypesystem = function (proid) {
        typesystem.get({proid})
       .$promise.then(function (resp) {
        if(resp != null)
             {
                 var arrayGraphic = [];
                 for (var i = 0; i < resp.length; i++) {
                     arrayGraphic [i] = [resp[i].name, resp[i].item];
                 }
                 var obj = {
                     columns: arrayGraphic
                 };
                 LoadGraphicQtsys(obj);
           }
       });
 };
   //$scope.getCharDimension();
    
function CreateGraphicQtypesystem(data) {
        chartQtypesystem= c3.generate({
         bindto: '#chartQtypesystem',
         data: {
             columns: data,
             type: 'bar', //type: 'donut',
             color: function (color, d) {
                 // d will be 'id' when called for legends
                 return d.id && d.id === 'data' ? d3.rgb(color).darker(d.value / 150) : color;
             }
         },
         options: {
            scales: {
                yAxes: [{ticks: {mirror: true}}]
            }
        }
     });

 }
 CreateGraphicQtypesystem([]);

 //FinGrafica FeaturenDonut   


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
            $scope.getCharDimensionDonut(dm, proid);
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
            $scope.getCharFeatureDonut(fe,proid);
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
                   // return item.qualify.toFixed(1);
                   return (item * 1).toFixed(0);
             };
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