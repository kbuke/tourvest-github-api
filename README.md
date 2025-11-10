# GitHub API Fetcher

This application is designed to allow the user to access GitHub users' Repositories and favourite their commits.

It also aims to make sortingthrough repositories easier, where:

- Repositories can be filtered by their name, and/or sorted by the date they were created.
- Commits can be sorted by their time stamps, as well as whether or not the user has favourited that specific one.

## Resources

This application was made using **React.js** and **CSS** primarily, however I also used the following:
- **Vite** for bundling. Which can be used by running:
```
npm create vite@latest .    # select React, then JavaScript + SWC
npm i
npm run dev

```
- **vitest** and **happy-dom** for unit-testing my storage and fetch requests
- **react-router** for handling my routing logic. It can be installed by:
```
npm install react-router
```
-**zustand** for storing my favourited commits (state). it can be installed y:
```
npm install zustand
```
-**react-form-hook** for my form validations. It can be installed by
```
npm install react-form-hook
```
-**Font Awesome** which I used for several icons on the application. The link can be found at [https://fontawesome.com/v4/]

-[https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png] for the GitHub Icon

-[https://github.blog/wp-content/uploads/2021/02/card.png?w=1200] for the Octocat image

-[https://www.pexels.com/photo/planet-earth-87651/] for the image of earth

-[https://www.canva.com/en_gb/] to edit the images

## How It Works
-**Home Page** uses react-form-hook to handle validation and fetch user details

![Demo](gifs/form-validation.gif)

-**Repo Page** displays all the specific users repositiories that they have saved to GutHub. A user can filter repositories based on their names, as well as sort them based on the dates they were created. 
![Demo](gifs/repoFilter.gif)

-**Repo Commits** shows all commits made for that specific repository. A user can sort these based on the commit times, and favourite (and unfavourite) specific commits. They can also filter the commits they wish to see between all or just their favourites
![Demo](gifs/commitFilter.gif)

-**Repo Commit Info** Finally users can view specific information of thei commit. Particularly which files were effected by the commit, and how many additions and deletions there were.
![Demon](gifs/commit-info.gif)



