# Git-SHA-Badges
> Fun demo showing different ways you can capture and display the currently deployed SHA in a project.

## Write-Up and Guide:
 📄 [joshuatz.com/posts/2020/git-sha-badges-for-deploys/](https://joshuatz.com/posts/2020/git-sha-badges-for-deploys/)

## Deployed URL
🔗 [git-sha-badges.netlify.app/](https://git-sha-badges.netlify.app/)
## Sample Badges:

These all pull from the deployed build, hosted at: [git-sha-badges.netlify.app](https://git-sha-badges.netlify.app/)

Simple:

<img width="200px" src="https://git-sha-badges.netlify.app/badge-simple.svg" />

Fancy:

<img src="https://git-sha-badges.netlify.app/badge-fancy.svg">

<!-- Deploy is at https://git-sha-badges.netlify.app/ -->
<div>
	<p>Shields.io badge - SHA Short:</p>
	<img src="https://img.shields.io/badge/dynamic/json?color=blue&label=Deployed%20SHA&query=sha&url=https%3A%2F%2Fgit-sha-badges.netlify.app%2Fbuild-info.json" />
</div>
<div>
	<p>Shields.io badge - SHA Full:</p>
	<img src="https://img.shields.io/badge/dynamic/json?color=blue&label=Deployed%20SHA%20Full&query=shaFull&url=https%3A%2F%2Fgit-sha-badges.netlify.app%2Fbuild-info.json" />
</div>
<div>
	<p>Shield.io badge - deploy time:</p>
	<img src="https://img.shields.io/badge/dynamic/json?color=green&label=Deploy%20Time&query=buildTimeStr&url=https%3A%2F%2Fgit-sha-badges.netlify.app%2Fbuild-info.json" />
</div>

<!-- Pulling directly from the Github API -->
<div>
	<p>Shields.io - Pulling directly from Github API</p>
	<img src="https://img.shields.io/badge/dynamic/json?color=orange&label=Github%20SHA&query=object.sha&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fjoshuatz%2Fgit-sha-badges%2Fgit%2Frefs%2Fheads%2Fmain" />
</div>

<!-- Standard Netlify Deploy Badge -->
<div>
	<p>Standard Netlify Status Badge:</p>
	<img src="https://api.netlify.com/api/v1/badges/4b298306-7d69-4214-b790-b37a56e59ec4/deploy-status" alt="Netlify Status" />
</div>