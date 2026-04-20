# Vault git hooks

Activate once per clone from the vault root:

```
git config core.hooksPath .githooks
```

`commit-msg` enforces [Conventional Commits](https://www.conventionalcommits.org/) format. No Node dependencies required.
