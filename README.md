# Git-SHA-Badges
> Fun demo showing different ways you can capture and display the currently deployed SHA in a project.

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