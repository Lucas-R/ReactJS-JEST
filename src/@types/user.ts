export interface UserProps{
    avatar_url?: string,
    name?: string,
    username?: string,
    bio?: string,
    location?: string,
    blog?: string,
    twitter?: string,
    public_repos?: number,
    followers?: number,
    following?: number,
    repos_url?: string,
    followers_url?: string,
}

export const user: UserProps = {
    name: "Lucas Rodrigues",
    avatar_url: "https://avatars.githubusercontent.com/u/19714104?v=4",
    username: 'Lucas-R',
    bio: "💻❤🍃 Durma com ideias, acorde com atitudes.",
    location: "Itanhaém-SP",
    blog: "https://www.linkedin.com/in/lucasrodriguesbezerra/",
    twitter: "Shinigamy_lcs",
    public_repos: 17,
    followers: 9,
    following: 7,
    repos_url: "https://api.github.com/users/Lucas-R/repos",
    followers_url: "https://api.github.com/users/Lucas-R/followers",
  }