# GenesisTheRealm.com

Website for the Genesis community

## dev

`npm run dev`

## deploying

simply do `npm run deploy`, fill in the commit message for the deployment, and save+close the editor.

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