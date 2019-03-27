---
title: How I Built My Blog
language: en-ZA
---

# How I Built My Blog

Before I start detailing the steps I took to build this blog, I want to give a shout-out to [David Thompson](https://twitter.com/dthompsonza). He noticed the brief window in which the blog was just me testing some empty pages and the Azure DevOps Continuous Integration processes. I say brief, but it lasted a few hours, I had to run out to a client while I was fiddling with this.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I hear they say that when you&#39;ve done something well, people will think you&#39;ve done nothing at all. All I can say <a href="https://twitter.com/akr0n1m?ref_src=twsrc%5Etfw">@akr0n1m</a> is, well done :P <a href="https://t.co/gYRrTWl3bM">pic.twitter.com/gYRrTWl3bM</a></p>&mdash; Dave Thompson 🇿🇦 (@dthompsonza) <a href="https://twitter.com/dthompsonza/status/1110992461109911555?ref_src=twsrc%5Etfw">March 27, 2019</a></blockquote>

## VuePress

I decided to use [VuePress](https://vuepress.vuejs.org) for my blog because I like [VueJS](https://vuejs.org) and I can have the content for my blog posts stored as markdown in a public Git repo.  

I ultimately wanted to use Ghost, but the lack of having my posts stored in a public repo made my unhappy.  

VuePress is ideally used for technical documentation, and since my blog posts will be very technical, I feel that this is a great fit. I am aware that VuePress are working on enabling blogging support, so hopefully in the future, I'll gain native support for blogs as well. I'll also be blogging about VueJS quite a bit, so having a platform running on VueJS will be beneficial.  

### Installation 

To get started with VuePress you'll need to have [Yarn](https://yarnpkg.com/en/) installed.

```
yarn global add vuepress
```

### Create your first files
Next, create a folder somewhere on your system and add some markdown files.

::: tip
VuePress requires at least a readme.md file. This file will be changed into the index.html file during the compilation process.
:::

### Run the development server
Once you have one or more markdown files, you can run the development copy of VuePress.

```
vuepress dev
```

You can now connect to the development copy of VuePress running on your computer. The default url is ```http://localhost:8080```

::: tip
During development, VuePress runs WebPack and the WebPack dev server to enable hot reload.  
When you do a production build, VuePress produces static HTML, CSS and JavaScript files along with your static files.
:::

## Azure DevOps

I am a big fan of Azure DevOps to both build and release software. I usually use the Git repo in Azure DevOps.  

For the purpose of my blog, I decided to use GitHub as the public repo where I host my raw markdown files. I also want to use the GitHub issue system for comments on my blog (see [Blog Comments Powered by GitHub](https://cergos.io/blog-comments-powered-by-github)).

I set up Azure DevOps to connect to my GitHub repo for a build. Azure DevOps have been pushing YAML based build scripts for the last year, which annoys me, since I really like the visual builder. I decided to struggle through learning how to work the YAML way for this blog.

It took some time, below is my final YAML file, but feel free to view the [history](https://github.com/akr0n1m/web/commits/master/azure-pipelines.yml) of this file to see some of my struggles.

```
trigger:
- master

pool:
  vmImage: 'Ubuntu-16.04'

steps:
- script: |
    yarn install
    yarn docs:build

- task: AzureRMWebAppDeployment@4
  displayName: Azure App Service Deploy
  inputs:
    WebAppType: Web App On Windows
    ConnectedServiceName: $(azureSubscriptionEndpoint)
    WebAppName: $(WebAppName)
    Package: .vuepress/dist
```

## Conclusion

This was a real rough first post, I will add some more posts to expand into each topic, such as advanced VuePress configurations and Azure DevOps in future posts. I hope you found this useful.