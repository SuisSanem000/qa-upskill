# Day 28 — Docker for QA: Containerising Your Test Suite

> **Phase:** 3 — Automation & CI/CD
> **Duration:** 1 hour
> **Deliverables:** `Dockerfile` + `docker-compose.yml` + `docker-notes.md`

---

## 🎯 Learning Objectives

- Understand what Docker is and why QA uses it
- Write a Dockerfile to containerise your Playwright suite
- Use `docker-compose` to orchestrate test runs
- Run tests in a consistent environment regardless of host OS

---

## 📖 Concepts (15 min)

### What is Docker?

Docker packages an application and ALL its dependencies into a **container** — a portable, isolated environment that runs the same on every machine.

For QA:
- **"Works on my machine"** problem is eliminated
- Tests run in the same environment locally, in CI, and in staging
- Browser versions are pinned — no unexpected upgrades
- Parallel test runs in isolated containers

```
Without Docker:
Developer's Mac (Chrome 118) → Works ✅
CI Linux (Chrome 120) → Fails ❌ ("works on my machine!")

With Docker:
Your Container (Chrome 118) → Works ✅
CI Container (same image, Chrome 118) → Works ✅
```

### Docker Concepts

| Term | Definition |
|------|-----------|
| **Image** | A blueprint/template for a container |
| **Container** | A running instance of an image |
| **Dockerfile** | Instructions to build an image |
| **docker-compose** | Tool to run multiple containers |
| **Registry** | Where images are stored (Docker Hub, GitHub Packages) |
| **Volume** | Persistent storage that survives container restarts |

### Playwright's Official Docker Image

Playwright provides official Docker images with all browsers pre-installed:

```bash
# Pull the official Playwright image
docker pull mcr.microsoft.com/playwright:v1.48.0-jammy

# Run your tests inside it
docker run --rm \
    -v "$(pwd):/tests" \
    -w /tests \
    mcr.microsoft.com/playwright:v1.48.0-jammy \
    npx playwright test
```

---

## 🛠️ Task (40 min)

**Step 1 (10 min):** Install Docker Desktop from https://www.docker.com/products/docker-desktop

**Step 2 (30 min):** Complete the `Dockerfile` and `docker-compose.yml` in `phase3/`. Run your tests inside Docker.

Commands:
```bash
# Build the Docker image
docker build -t qa-upskill-tests ./phase3

# Run tests
docker run --rm qa-upskill-tests

# OR use docker-compose
docker-compose up --exit-code-from playwright
```

---

## 📁 Files in This Folder

```
phase3/day28/
├── day28-guide.md   ← This file
└── docker-notes.md  ← Your notes from Docker setup

Docker files:
phase3/Dockerfile
phase3/docker-compose.yml
```
