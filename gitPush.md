# Git Push Tutorial: Upload a Folder to GitHub

A step-by-step guide to push a local folder to a GitHub repository.

---

## Step 1: Initialize Git Repository

Navigate to your project folder and initialize a new git repository:

```bash
cd "/path/to/your/folder"
git init
```

This creates a hidden `.git` folder that tracks all your changes.

---

## Step 2: Rename Branch to `main`

GitHub uses `main` as the default branch. Rename your branch:

```bash
git branch -m main
```

---

## Step 3: Configure Your Git Identity

Set your GitHub username and email (required for commits):

```bash
git config --global user.name "YourGitHubUsername"
git config --global user.email "YourEmail@example.com"
```

> **Tip:** Use `username@users.noreply.github.com` if you want to keep your email private.

---

## Step 4: Stage All Files

Add all files to the staging area:

```bash
git add .
```

The `.` means "all files in current directory."

---

## Step 5: Create Initial Commit

Commit your staged files with a message:

```bash
git commit -m "Initial commit - Your description here"
```

---

## Step 6: Add Remote Repository

Link your local repo to your GitHub repository:

```bash
git remote add origin https://github.com/YourUsername/YourRepoName.git
```

---

## Step 7: Push to GitHub

### Option A: If GitHub repo is empty
```bash
git push -u origin main
```

### Option B: If GitHub repo already has content
First pull the remote content, then push:

```bash
git pull origin main --allow-unrelated-histories --no-rebase
git push -u origin main
```

> **Note:** `--allow-unrelated-histories` merges two repos that don't share a common history.

### Handling the Nano Editor (Merge Commit Message)

When Git merges remote content with your local files, it opens the **nano editor** to write a merge commit message. You'll see something like:

```
Merge branch 'main' of https://github.com/...
```

**To save and exit nano:**
1. Press `Ctrl + O` (Write Out / Save)
2. Press `Enter` to confirm the filename
3. Press `Ctrl + X` to exit

> **Tip:** The default merge message is usually fine - just save and exit.

---

## Quick Reference Commands

| Command | Description |
|---------|-------------|
| `git init` | Initialize new repository |
| `git add .` | Stage all files |
| `git commit -m "message"` | Commit staged files |
| `git remote add origin <url>` | Link to GitHub repo |
| `git push -u origin main` | Push to GitHub |
| `git pull origin main` | Pull from GitHub |
| `git status` | Check current status |

---

## Common Issues & Solutions

### "Updates were rejected because the remote contains work"
**Solution:** Pull first, then push:
```bash
git pull origin main --allow-unrelated-histories --no-rebase
git push -u origin main
```

### "Author identity unknown"
**Solution:** Configure your git identity (Step 3)

### "Permission denied"
**Solution:** Make sure you're logged into GitHub or use a personal access token.

---

*Last updated: December 24, 2025*
