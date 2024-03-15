Github Instructions : 

**To Upload the code from local to github**

```
git checkout -b "new_branch_name"
git add .
git commit -m "comment"
git checkout main
git pull origin main
git checkout "new_branch_name"
git rebase main
git push origin "new_branch_name"
```
Go to github repo in chrome and merge the branch

**To download the code from github to local**
```
git checkout main
git pull origin main
```
