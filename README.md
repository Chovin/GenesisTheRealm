# GenesisTheRealm.com

Website for the Genesis community

## dev

`npm run dev`

## updating content

In general, just follow the format of the markdown/json files you find. Markdown files are in `regions`/`seasons`/`events`.

Each gallery is automatically generated from the image folders in the `public/images` folders. Sub-folders (like `public/images/Seasons/2/special_segment`) have `data.json` files in them which optionally has more information for the pictures

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

if you ever find yourself with a missing `dist` folder, you can run `git worktree add dist gh-pages -f` to get it back