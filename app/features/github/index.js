import angular from 'angular';
import uirouter from 'angular-ui-router';
import firebase from 'firebase';
import angularFire from 'angularfire';

import routing from './github.routes';
import GitHubController from './github.controller';
import GitHubService from './github.service';
import githubUser from './directives/github_user';
import githubRepos from './directives/github_repos';
import userInput from './directives/user_input';

export default angular.module('app.github', [uirouter, angularFire])
                      .config(routing)
                      .controller('GitHubController', GitHubController)
                      .service('GitHubService', GitHubService)
                      .directive('githubUser', githubUser)
                      .directive('githubRepos', githubRepos)
                      .directive('userInput', userInput)
                      .name;

