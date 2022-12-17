# Github Blog - React + Github issues, your personal blog 👨‍💻

<br><br>

<p align="center">
  <a href="#-about-the-project">About the project</a> •
  <a href="#-technologies">Technologies</a> •
  <a href="#-getting-started">Getting started</a> •
  <a href="#-license">License</a>
</p>

<p align="center">
 
 
<img alt="project preview" src="./src/assets/desktop-preview.jpg" width="75%"   >  
</p>

## 👩‍💻 About the project

A web application for building your blog on GitHub using Github Issues.

It consumes the Github REST API, where each issue in the repository is a blog post;

Project built during [Rocketseat](https://rocketseat.com.br/) ReactJS course, Where the objective was the consumption of an API and the improvement of performance in ReactJS.

[click here, see closer](https://github-blog-cs.vercel.app/) 😉

<b>Note</b>: <b>The GitHub API has a limit of 10 requests per minute. If you exceed it, wait 1 minute for the site to return to normal;</b>

## 🔖 Layout

You can view the project layout through the links below:

- [Layout in Figma](<https://www.figma.com/file/c3q0eHQqttYtX32ZAd9WC2/GitHub-Blog-(Community)?t=KXH4mpciPlO0Zbdc-0>)

> Remembering that you need to have a [Figma](http://figma.com/) account to access it.

## 🚀 Technologies

- [ReactJs](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [useForm](https://react-hook-form.com/api/useform/)
- [zod](https://zod.dev/)
- [React Router](https://reactrouter.com/en/main)
- [json-server](https://github.com/typicode/json-server)
- [axios](https://axios-http.com/ptbr/docs/intro)
- [Github API](https://docs.github.com/en/rest?apiVersion=2022-11-28)

## 💻 Getting started

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [NPM](https://www.npmjs.com/) _(examples are with yarn)_

**Clone the project and access the folder**

```bash
$ git clone https://github.com/leandrorodrigues00/github-blog && cd github-blog
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Make a copy of '.env.example' to '.env'
# and set with YOUR environment variables.
$ cp .env.example .env

# Start the app
$ yarn dev
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Made with 💜&nbsp; by  Leandro Rodrigues
</p>
