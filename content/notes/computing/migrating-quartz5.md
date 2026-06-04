---
title: Migrating a real site to Quartz 5
---
# Quartz 5 Site Migration and Customization Notes: Lessons Learned the Hard Way

When migrating a real website to Quartz 5, the technical work is often much easier than figuring out where Quartz actually expects things to be.

Most mistakes do not come from CSS, Markdown, TypeScript, or Git. They come from making assumptions based on an earlier version of Quartz, an old project, or incomplete documentation.

This note collects a practical workflow and a list of mistakes worth avoiding.

---

# Before You Touch Anything

Always verify where you are.

```bash
pwd
git remote -v
git branch
git status
```

Many hours can be lost modifying the wrong repository, the wrong branch, or an abandoned local copy.

Never assume that the folder you opened yesterday is the one being deployed today.

---

# Quartz 5 Is Not Quartz 4

This sounds obvious.

It is not.

The most dangerous assumption is:

> "I know how Quartz works."

No. You know how *some version* of Quartz worked.

Before changing anything, identify:

- where the configuration lives;
- where static assets live;
- how the current build process works;
- how the generated HTML is structured;
- how the generated CSS is structured.

Only then begin making changes.

---

# Find the Real Configuration

The first task is always locating the actual configuration file.

Typical candidates include:

```text
quartz.config.ts
quartz.config.default.yaml
quartz.config.yaml
```

Do not assume the file mentioned in documentation is the one currently used by your site.

Verify.

If necessary:

```bash
find . -iname "*config*"
```

and inspect the build process.

---

# Static Assets: Trust the Build, Not Memory

When adding logos, seals, watermarks, decorative graphics, or custom JavaScript, first determine where Quartz expects static assets.

A common pattern is:

```text
quartz/static/
```

which becomes:

```text
public/static/
```

after building.

Verify by building and inspecting the output:

```bash
find public -type f
```

If the files do not appear in the generated output, Quartz will never find them.

---

# Custom CSS Belongs in One Place

Quartz usually provides a dedicated customization file:

```text
quartz/styles/custom.scss
```

Keep site-specific styling there whenever possible.

This dramatically simplifies upgrades and future maintenance.

After modifying CSS, verify that it was actually included:

```bash
grep -RIn "some-selector" public/*.css public/static/*.css
```

If the selector is not present in the generated CSS, Quartz did not compile your change.

---

# Never Guess the HTML Structure

This is probably the most valuable lesson.

When a component does not behave as expected, do not read documentation first.

Read the generated HTML.

Build the site:

```bash
npx quartz build --serve
```

Then inspect:

```bash
less public/index.html
```

or search for a known string:

```bash
grep -n "Some Visible Text" public/index.html
```

or extract surrounding context:

```bash
python3 - <<'PY'
from pathlib import Path

s = Path("public/index.html").read_text()

needle = "Some Visible Text"
i = s.find(needle)

print(s[max(0, i-300):i+300])
PY
```

Quartz documentation describes intentions.

Generated HTML describes reality.

Reality wins.

---

# Debugging Workflow

When something does not appear:

1. Confirm the source file exists.
2. Confirm Quartz sees the file.
3. Confirm the file appears in `public`.
4. Confirm the generated HTML references it.
5. Confirm the generated CSS references it.
6. Only then investigate browsers.

Skipping steps almost always wastes time.

---

# Safe Deployment Workflow

For any significant change:

### Build locally

```bash
npx quartz build --serve
```

### Verify output

```text
public/
```

### Commit

```bash
git add .
git commit -m "Meaningful message"
```

### Push

```bash
git push origin main
```

(or whichever branch is actually deployed)

### Verify production

Never assume deployment succeeded.

Open the live site.

Check the actual page.

---

# Common Rakes Hidden in the Grass

Every experienced administrator eventually develops a collection of personal rakes.

These are some of the most common.

## Working in the Wrong Repository

You may have:

- production repository;
- development repository;
- archived repository;
- test repository.

Verify location before every session.

```bash
pwd
```

is cheaper than an hour of confusion.

---

## Working on the Wrong Branch

Before pushing:

```bash
git branch
```

If you think you are on `dev`, verify.

If you think you are on `main`, verify.

Git is perfectly happy to let you work on the wrong branch all day.

---

## Assuming Old Knowledge Is Still Correct

A surprisingly large fraction of migration problems come from:

> "I remember how this worked."

Memory is not documentation.

Check.

---

## Reading Source Instead of Output

Many hours can disappear inside:

```text
TypeScript
SCSS
Plugins
Components
```

while the generated HTML immediately reveals the answer.

Always inspect the final output.

---

## Fixing a CSS Problem with TypeScript

Sometimes a visual problem is just a visual problem.

Before modifying components, layouts, plugins, or rendering code, ask:

> Can this be solved with CSS?

Frequently the answer is yes.

And the CSS solution is often ten times simpler.

---

## Making Large Changes Without Testing

Quartz rebuilds quickly.

Use that advantage.

Make one change.

Build.

Check.

Repeat.

Large batches of changes create large debugging sessions.

---

# The Most Important Rule

Do not treat Quartz as a framework.

Treat it as a compiler.

Your job is not to understand every internal detail.

Your job is to determine:

```text
Input
   ↓
Quartz
   ↓
Output
```

and then inspect the output.

Once that habit becomes automatic, most Quartz customization tasks become straightforward.

The difficult part is usually not the code.

The difficult part is resisting the temptation to guess.