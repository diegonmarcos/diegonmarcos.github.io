# Rust API (PRIMARY)

**URL**: `https://api.diegonmarcos.com:8080`

**Swagger docs**: `https://api.diegonmarcos.com:8080/rust/api-docs`

**Repo**: `~/git/cloud/a_solutions/container-nix/bb-sec_rust-api/`

**Stack**: Axum + utoipa on gcp-proxy. 47 endpoints focused on VM/container control and health monitoring.

## Generic Engine Endpoints (GET)

| Endpoint | Description |
|----------|-------------|
| `/rust/health` | API alive check |
| `/rust/health/all` | Full health summary (all VMs + containers) |
| `/rust/health/containers-by-vm` | Container status grouped by VM |
| `/rust/health/containers-by-service` | Container status grouped by service |
| `/rust/health/proxied-by-services` | Proxied service health checks |
| `/rust/health/resources-all` | Resource usage (CPU, RAM, disk) all VMs |
| `/rust/health/ids` | List all VM and container IDs |
| `/rust/health/{vm_id}` | Health for a specific VM |
| `/rust/health/{vm_id}/{container_name}` | Status for a specific container |

## Generic Engine Endpoints (POST)

| Endpoint | Description |
|----------|-------------|
| `/rust/vms/{vm_id}/start` | Start a VM |
| `/rust/vms/{vm_id}/stop` | Stop a VM |
| `/rust/vms/{vm_id}/reset` | Reset/reboot a VM |
| `/rust/vms/{vm_id}/containers/{name}/start` | Start container on VM |
| `/rust/vms/{vm_id}/containers/{name}/stop` | Stop container on VM |
| `/rust/vms/{vm_id}/containers/{name}/restart` | Restart container on VM |
| `/rust/vms/{vm_id}/services/{service}/start` | Start service on VM |
| `/rust/vms/{vm_id}/services/{service}/stop` | Stop service on VM |
