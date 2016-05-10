import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './github.routes';
import GitHubController from './github.controller';
import GitHubService from './github.service';
import githubUser from './directives/github_user';
import githubRepos from './directives/github_repos';

export default angular.module('app.github', [uirouter])
                      .config(routing)
                      .controller('GitHubController', GitHubController)
                      .service('GitHubService', GitHubService)
                      .directive('githubUser', githubUser)
                      .directive('githubRepos', githubRepos)
                      .name;

