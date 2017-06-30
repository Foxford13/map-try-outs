angular
.module('yearbookApp')
.controller('StudentsIndexCtrl', StudentsIndexCtrl)
.controller('StudentsNewCtrl', StudentsNewCtrl)
.controller('StudentsShowCtrl', StudentsShowCtrl)
.controller('StudentsEditCtrl', StudentsEditCtrl);



StudentsIndexCtrl.$inject = ['Student'];

function StudentsIndexCtrl(Student) {
  console.log('Index');
  const vm = this;

  vm.all = Student.query();



}
StudentsNewCtrl.$inject = ['Student', '$state'];
function StudentsNewCtrl(Student, $state) {
  const vm = this;
  vm.student = {};
  console.log('new');
  function studentsCreate() {
    if (vm.studentForm.$valid) {
      Student
        .save(vm.student)
        .$promise
        .then(() => $state.go('studentsIndex'));
    }
  }

  vm.create = studentsCreate;
}

StudentsShowCtrl.$inject = ['Student', '$stateParams', '$state'];
function StudentsShowCtrl(Student, $stateParams, $state) {
  const vm = this;
  console.log('Show');
  vm.student = Student.get($stateParams);

  function studentsDelete() {
    vm.student
      .$remove()
      .then(() => $state.go('studentsIndex'));
  }

  vm.delete = studentsDelete;
}

StudentsEditCtrl.$inject = ['Student', '$stateParams', '$state'];
function StudentsEditCtrl(Student, $stateParams, $state) {
  const vm = this;

  vm.student = Student.get($stateParams);

  function studentsUpdate() {
    if (vm.studentForm.$valid) {
      vm.student
        .$update()
        .then(() => $state.go('studentsShow', $stateParams));
    }
  }

  vm.update = studentsUpdate;
}
