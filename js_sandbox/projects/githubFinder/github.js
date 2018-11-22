// create class
class Github {
  constructor() {
    this.client_id = "b9315bcd5a07fcd759d8"; // need to change
    this.client_secret = "a2b698bf7e7c02f898197cf136d1a41f704ca8e4"; // need to change
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }
  // get user method
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${
        this.repos_count
      }&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${
        this.client_secret
      }`
    );
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return {
      profile: profile,
      repos: repos
    };
  }
}
