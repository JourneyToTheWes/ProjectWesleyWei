# Deployment Guide (to Fly.io)

> Author: Wesley Wei

```javascript
// These two lines are to serve the static React build project that has been manually
// copied over to the server directory '/public' folder. The second line is to match
// any route other than '/api*' to use the React index html build file as it the client
// app cannot route as it normally does locally. Any requests to any route (other than '/api*')
// would be served index.html.
// Note: uncomment out these two lines when building the server directory and deploying the service
// so that the full-stack applicant can work seamlessly.
this.app.use(express.static(path.join(__dirname + '/../public')));
this.app.get(/^\/(?!api).*/, (req, res) => res.sendFile(path.join(__dirname + '/../public/index.html')));
```
> Use these two lines when deploying and only deploying

1. We need to manually CD into the client directory (project-wesley-wei-client) and build the updated React project.
2. Copy over the `build` contents into an "arbitrary" folder called `public` (which we named for Express.js to locate the static client build in the server) in the server directory (project-wesley-wei-server).
3. Execute `cd project-wesley-wei-server` and run `npm run build` to build the Typescript server app.
4. Now we can deploy by calling `fly deploy --app {fly.io-app-name}` while located within `\project-wesley-wei-server`.
    - [fly.io Deployment instructions](https://fly.io/docs/apps/deploy/)
    - Workaround: If this doesn't work, we should delete the builder and app on fly.io for the respective previously deployed app on fly.io. Then retry by calling `fly launch` within the directory that contains our fly.toml (instructions to deploy)
        - [fly.io Launch instructions](https://fly.io/docs/apps/launch/)
5. Next, we need to link A (ipv4) and AAAA (ipv6) records from our target domain name to the free fly.io dev domain name by executing `nslookup -q=A+AAAA {fly.io-dev-domain-name}` and copying over their values to target domain site (should be under advanced DNS settings).
6. Now, we need to add our target domain to the dev application's certificates on fly.io side by executing `flyctl certs create {target-domain} --app {fly.io-dev-domain-name}`.
7. Once the certs are done issuing, the target domain should now reroute to the fly.io dev domain name. We can check the cert status by calling `flyctl certs show westway.space --app {fly.io-app-name}`

## Next Steps
- Automate this process with GitHub Actions (or any similar CI/CD tool).
- Figure out why `fly deploy` sometimes doesn't work as fly launch takes a while to set up the builder and app machines. This slows down the process a lot.



