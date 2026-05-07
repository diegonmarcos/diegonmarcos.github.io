# Containers Control On-Demand API Reference

> **Version**: 1.0.0
> **Generated**: 2026-02-08
> **Source**: `openapi_ondemand.yaml`

REST API for oci-flex VM lifecycle management and Docker container control via SSH.

---


## API Overview

**Title**: Containers Control On-Demand API

**Version**: 1.0.0

**Description**: REST API for oci-flex VM lifecycle management and Docker container control via SSH


### Servers

| Environment | Base URL                     | Description                         |
| ----------- | ---------------------------- | ----------------------------------- |
| production  | https://api.diegonmarcos.com | Production API via NPM proxy        |
| internal    | http://127.0.0.1:5000        | Direct Flask access (internal only) |
| dev         | http://localhost:5000        | Local development                   |

### Authentication

**Type**: bearer

**Provider**: authelia

**Token Endpoint**: `https://auth.diegonmarcos.com/api/oidc/token`


### Auth Scopes

| Scope | Description                               |
| ----- | ----------------------------------------- |
| read  | Read-only access to all data              |
| admin | Full access including VM and container control |

## Endpoints Summary

| Category   | Description                                    | Endpoints |
| ---------- | ---------------------------------------------- | --------- |
| vm         | OCI Flex VM lifecycle (start, stop, reset, status) | 5         |
| containers | Docker container management on oci-flex via SSH    | 7         |


**Total Endpoints**: 12

## Endpoints Detail

### VM

*OCI Flex VM lifecycle (start, stop, reset, status)*

**Target**: `oci-flex` (on-demand VM)


| Method | Path         | Auth  | Description                                                           |
| ------ | ------------ | ----- | --------------------------------------------------------------------- |
| `GET`  | `/vm/status` | read  | Get oci-flex VM state (OCI lifecycle)                                 |
| `POST` | `/vm/start`  | admin | Start oci-flex VM (OCI instance_action START)                         |
| `POST` | `/vm/stop`   | admin | Stop oci-flex VM (OCI instance_action STOP)                           |
| `POST` | `/vm/reboot` | admin | Graceful reboot oci-flex VM (OCI instance_action SOFTRESET)           |
| `POST` | `/vm/reset`  | admin | Hard reset oci-flex VM (OCI instance_action RESET) - use with caution |

### CONTAINERS

*Docker container management on oci-flex via SSH*


| Method | Path                          | Auth  | Description                                    |
| ------ | ----------------------------- | ----- | ---------------------------------------------- |
| `GET`  | `/containers`                 | read  | List all containers on oci-flex (docker ps -a) |
| `GET`  | `/containers/{name}/status`   | read  | Get container status                           |
| `POST` | `/containers/{name}/start`    | admin | Start container                                |
| `POST` | `/containers/{name}/stop`     | admin | Stop container                                 |
| `POST` | `/containers/{name}/restart`  | admin | Restart container                              |
| `POST` | `/containers/{name}/rebuild`  | admin | Rebuild container (docker-compose up -d --build) |
| `GET`  | `/containers/{name}/logs`     | read  | Get container logs                             |

## Curl Examples

### vm

| Endpoint | Curl Command                                                                               |
| -------- | ------------------------------------------------------------------------------------------ |
| status   | `curl -H 'Authorization: Bearer $TOKEN' https://api.diegonmarcos.com/vm/status`            |
| start    | `curl -X POST -H 'Authorization: Bearer $TOKEN' https://api.diegonmarcos.com/vm/start`     |
| stop     | `curl -X POST -H 'Authorization: Bearer $TOKEN' https://api.diegonmarcos.com/vm/stop`      |
| reboot   | `curl -X POST -H 'Authorization: Bearer $TOKEN' https://api.diegonmarcos.com/vm/reboot`    |

### containers

| Endpoint | Curl Command                                                                                              |
| -------- | --------------------------------------------------------------------------------------------------------- |
| list     | `curl -H 'Authorization: Bearer $TOKEN' https://api.diegonmarcos.com/containers`                          |
| status   | `curl -H 'Authorization: Bearer $TOKEN' https://api.diegonmarcos.com/containers/nginx/status`             |
| restart  | `curl -X POST -H 'Authorization: Bearer $TOKEN' https://api.diegonmarcos.com/containers/nginx/restart`    |
| logs     | `curl -H 'Authorization: Bearer $TOKEN' 'https://api.diegonmarcos.com/containers/nginx/logs?lines=50'`    |

## Schemas

### VmState

| Property       | Type   | Required | Description                     |
| -------------- | ------ | -------- | ------------------------------- |
| vmId           | string | No       | Always "oci-flex"               |
| lifecycleState | enum   | No       | RUNNING, STOPPED, STARTING, ... |
| displayName    | string | No       |                                 |
| ip             | string | No       | Public IPv4 address             |
| lastCheck      | string | No       | ISO 8601 timestamp              |

### VmActionResult

| Property | Type   | Required | Description                        |
| -------- | ------ | -------- | ---------------------------------- |
| action   | enum   | No       | START, STOP, SOFTRESET, RESET      |
| status   | string | No       | e.g. "initiated"                   |
| vmId     | string | No       | Always "oci-flex"                  |

### Container

| Property | Type   | Required | Description                                  |
| -------- | ------ | -------- | -------------------------------------------- |
| name     | string | No       | Container name                               |
| state    | enum   | No       | running, exited, paused, restarting, created |
| image    | string | No       | Docker image                                 |
| ports    | string | No       | Port mappings                                |
| uptime   | string | No       | Container uptime                             |

### ContainerActionResult

| Property  | Type   | Required | Description                      |
| --------- | ------ | -------- | -------------------------------- |
| container | string | No       | Container name                   |
| action    | enum   | No       | start, stop, restart, rebuild    |
| status    | string | No       | e.g. "success"                   |

### ApiError

| Property | Type   | Required | Description |
| -------- | ------ | -------- | ----------- |
| error    | string | No       |             |
| code     | string | No       |             |
| message  | string | No       |             |
| details  | object | No       |             |

## Error Codes

| HTTP Code | Error Code          | Message                                  |
| --------- | ------------------- | ---------------------------------------- |
| 400       | BAD_REQUEST         | Invalid request parameters               |
| 401       | UNAUTHORIZED        | Missing or invalid authentication token  |
| 403       | FORBIDDEN           | Insufficient permissions for this action |
| 404       | NOT_FOUND           | Container not found                      |
| 409       | CONFLICT            | VM already running/stopped               |
| 500       | INTERNAL_ERROR      | Internal server error                    |
| 503       | SERVICE_UNAVAILABLE | VM not reachable via SSH                 |
