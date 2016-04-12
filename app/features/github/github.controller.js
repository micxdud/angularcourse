export default class GitHubController 
{
  constructor($http, $scope) 
  {
      this.$http = $http;
      this.makeRequest();
  }

  makeRequest() 
  {
      this.$http.get('https://api.github.com/users/Microsoft')
        .then(this.showOutput.bind(this));
  }
  
  showOutput(response) 
  {
      this.User = response.data;
      console.log(this.User)
  }

}