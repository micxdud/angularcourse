export default class GitHubController 
{
  constructor($http, $scope) {
      this.$http = $http;
      this.getUser();
      this.getRepos();
  }

  getUser() {
      this.$http.get('https://api.github.com/users/Microsoft')
        .then(this.handleGetUserSuccess.bind(this));
  }
  
  getRepos() {
      this.$http.get('https://api.github.com/users/Microsoft/repos')
        .then(this.handleGetReposSuccess.bind(this));
  }
  
  handleGetUserSuccess(response) {
      this.User = response.data;
      console.log(this.User);
  }
  
  handleGetReposSuccess(response) {
      this.UserRepos = response.data;
      console.log(this.UserRepos);
  }

}