
## Git Push Troubleshooting (2025-11-25)

If git push fails with HTTP 500 errors:
1. Check .git folder size: `du -sh .git`
2. If over 500MB, the git history is bloated
3. Reset git history to fix:
   ```
   rm -rf .git
   git init
   git add -A
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <repo-url>
   git push -u origin main
   ```
4. This clears all history but keeps current files
5. windloadcalc.com repo works fine - windload-solutions had 2.6GB history bloat

