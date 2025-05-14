# GenesisTheRealm.com

Website for the Genesis community

## dev

`npm run dev`

## deploying

remember to set `BASE_PATH` in your `.env` if where you're deploying it to is served at a subpath.

then simply do `npm run deploy`, fill in the commit message for the deployment, and save+close the editor. This makes a commit on the gh-pages orphaned branch and pushes it to origin

uses `git worktree`. had set up an initial commit as follows:
```sh
mkdir dist
cd dist
git switch --orphan gh-pages
echo "Initial gh-pages commit" > index.html
git add index.html
git commit -m "Initial gh-pages commit"
git push -u origin gh-pages
git switch live
```
then
```sh
git worktree add dist gh-pages
```
this makes `dist/` the orphaned `gh-pages` branch