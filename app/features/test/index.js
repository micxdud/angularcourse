import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './test.routes';
import TestController from './test.controller';

export default angular.module('app.test', [uirouter])
                      .config(routing)
                      .controller('TestController', TestController)
                      .name;
