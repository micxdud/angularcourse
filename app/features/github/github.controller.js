export default class GitHubController 
{
  constructor(GitHubService) {
  GitHubService.getUser('Microsoft') 
      .then(this.handleGetUserSuccess.bind(this));
  
  GitHubService.getRepos('Microsoft')
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