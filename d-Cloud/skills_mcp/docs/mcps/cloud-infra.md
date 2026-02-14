# MCP: cloud-infra

| Field | Value |
|-------|-------|
| **Name** | `cloud-infra` |
| **Version** | `1.0.0` |
| **Transport** | stdio |
| **Runtime** | Node.js (TypeScript) |
| **Repo** | `~/git/cloud/a_solutions/container-nix/bb-sec_mcp-server-skills/` |
| **Entry** | `src/index.ts` |
| **SDK** | `@modelcontextprotocol/sdk ^1.12.0` |

## Tools (21)

| Category | Tool | Description |
|----------|------|-------------|
| **Infra** | `list_vms` | List all 4 VMs with IPs, aliases, descriptions |
| **Infra** | `list_services` | List 42+ services (filter by VM or category) |
| **Infra** | `get_service_detail` | Full service info: flake.nix, secrets, dist files |
| **Repo** | `read_file` | Read file from any repo (cloud, unix, vault, front, tools) |
| **Repo** | `search_repos` | Grep across repositories |
| **Repo** | `list_directory` | List directory contents |
| **Build** | `build_service` | Run build.sh for a service (build/secrets/ship/clean/all) |
| **Build** | `build_all` | Run root orchestrator for all services |
| **SSH** | `ssh_exec` | Execute command on VM via SSH |
| **SSH** | `check_vm` | Test VM reachability + system info |
| **Docker** | `docker_ps` | List containers on a VM |
| **Docker** | `docker_control` | Start/stop/restart container |
| **Docker** | `docker_logs` | Get container logs |
| **Docker** | `docker_compose_up` | Rebuild + restart service on its VM |
| **API** | `api_call` | Call any Flask API endpoint |
| **API** | `api_vm_control` | Start/stop/reset VM via OCI/gcloud CLI |
| **Front** | `front_list_projects` | List all 32 web projects |
| **Front** | `front_get_project` | Full project detail: build.json, deps, dist, dev server |
| **Front** | `front_build` | Build a project using universal build.sh |
| **Front** | `front_dev_server` | Start/stop/status of project dev server |
| **Front** | `front_deploy` | Run deploy.sh (merge deps + build all changed) |

## Resources (5)

| URI | Description |
|-----|-------------|
| `cloud://config` | Full infrastructure config (config.json) |
| `cloud://ssh-config` | SSH configuration file |
| `cloud://services-overview` | Services overview markdown table |
| `cloud://readme` | Container-nix README |
| `cloud://front-projects` | Front-end projects overview |

## Prompts (1)

| Name | Description |
|------|-------------|
| `cloud-architect` | Full cloud architect persona with VM table, services, architecture, and operational principles |
