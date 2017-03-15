appServersoft.controller('userController', ['$scope', '$filter', 'commonvariable', 'authentication','$localStorage','person','user','role', 'userrole',function ($scope, $filter, commonvariable, authentication, $localStorage, person, user, role, userrole) {
///verify session
//authentication.checkStatus();
///variables
$scope.lstEstados = [{ Descripcion: "Inactivo", ID: 0 },
                        { Descripcion: "Activo", ID: 1 },];
$scope.alerts = [];
var $translate = $filter('translate');
   $scope.initform = function () {
        $scope.mode = 'create';
        $scope.usoid = 0;
        $scope.usname="";
        $scope.uspassword = "";
        $scope.peoid = 0;
        $scope.usstatus = 0;
    }
    $scope.initform();

    $scope.selectUser = function (usoid,usname,peoid,usstatus) {
        $scope.mode = 'edit';
        $scope.usoid = usoid;
        $scope.uspassword = '';
        $scope.usname=usname;
        var person = $scope.listPerson.filter(function (item) {
            return item.peoid == peoid;
         });
        $scope.peoid = person[0];

        var status = $scope.lstEstados.filter(function (item) {
            return item.ID == usstatus;
        });
        $scope.usstatus = status[0];
    }

    $scope.selectUserrole = function(usoid){//consultar los roles del usuario, luego filtrar el origen y enviar al destino
    for (var i = 0; i < document.getElementById("destino").length; i++) {
            var ru = $scope.listRole.filter(function (item) { return item.rodescription == document.getElementById("destino")[i].label;});
            userrole.post({usoid: usoid, rooid: ru[0].rooid}).$promise.then(function (resp) {  });
        }

    }
   
   $scope.getEstado = function (id) {
        return $scope.lstEstados[id].Descripcion;
    };

    $scope.getUser = function () {
        user.get({})
       .$promise.then(function (resp) {
           $scope.listUser = resp;
       });
    };
   $scope.getUser();

   $scope.deleteUser = function (usoid) {
        user.delete({usoid: usoid })
       .$promise.then(function (resp) {
           $scope.getUser();
           $scope.initform();
       });
    };

    $scope.saveUser = function (usname,uspassword,peoid,usstatus) {
       user.post({usname: usname, uspassword: uspassword, peoid: peoid.peoid, usstatus: usstatus.ID})
      .$promise.then(function (resp) {
          if (resp.usname == usname) {
              $scope.saveUserrole(resp.usoid);
              $scope.getUser();
              $scope.alerts.push({ msg: $translate("ROOM_MSG_SUCCESS"), type: 'success' });
              $scope.initform();
          }
          else {
              $scope.alerts.push({ msg: $translate("ROOM_MSG_ERROR"), type: 'error' });
          }
      });
    };

    $scope.updateUser = function (usoid,usname,uspassword,peoid,usstatus) {
        user.put({ usoid:usoid, usname:usname,uspassword:uspassword ,peoid:peoid.peoid, usstatus:usstatus.ID })
      .$promise.then(function (resp) {
          if (resp.length > 0) {
              $scope.deleteUserrole(usoid);
              $scope.saveUserrole(usoid);
              $scope.getUser();
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

    $scope.saveUserrole = function (usoid, rooid) {
    for (var i = 0; i < document.getElementById("destino").length; i++) {
            var ru = $scope.listRole.filter(function (item) { return item.rodescription == document.getElementById("destino")[i].label;});
            userrole.post({usoid: usoid, rooid: ru[0].rooid}).$promise.then(function (resp) {  });
        }
    };
    
    $scope.deleteUserrole = function (usoid) {
         userrole.delete({usoid: 5 }).$promise.then(function (resp){ });
    };

    $scope.getPerson = function () {
        person.get({})
       .$promise.then(function (resp) {
           $scope.listPerson = resp;
       });
    };
    $scope.getPerson();
    
    $scope.getRole = function () {
        role.get({})
       .$promise.then(function (resp) {
           $scope.listRole = resp;
       });
    };
   $scope.getRole();

   $scope.setuserrole = function (){
        for (var i = 0; i < document.getElementById("destino").length; i++) {
            var ru = $scope.listRole.filter(function (item) { return item.rodescription == document.getElementById("destino")[i].label;});
            alert(ru[0].rooid);
            }
  };

  $scope.getNamePerson = function (peoid) {
      if(peoid > 0){
        var person = $scope.listPerson.filter(function (item) {
            return item.peoid == peoid;
         });
         return person[0].pename;
      }
    };
        
        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };   

     $().ready(function() 
	{
		$('.pasar').click(function() { return !$('#origen option:selected').remove().appendTo('#destino'); });  
		$('.quitar').click(function() { return !$('#destino option:selected').remove().appendTo('#origen'); });
		$('.pasartodos').click(function() { $('#origen option').each(function() { $(this).remove().appendTo('#destino'); }); });
		$('.quitartodos').click(function() { $('#destino option').each(function() { $(this).remove().appendTo('#origen'); }); });
}); 
}]);