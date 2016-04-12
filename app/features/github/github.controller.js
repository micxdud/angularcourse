export default class GitHubController 
{
  constructor($http, $scope) {
      this.$http = $http;
      this.makeRequest();
      this.getRepos();
  }

  makeRequest() {
      this.$http.get('https://api.github.com/users/Microsoft')
        .then(this.showProfile.bind(this));
  }
  
  getRepos() {
      this.$http.get('https://api.github.com/users/Microsoft/repos')
        .then(this.showRepos.bind(this));
  }
  
  showProfile(response) {
      this.User = response.data;
      console.log(this.User)
  }
  
  showRepos(response) {
      this.UserRepos = response.data;
      console.log(this.UserRepos)
  }

}