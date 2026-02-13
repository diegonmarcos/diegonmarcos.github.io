---
type: api
category: Container Management
items:
  - id: api-container-start
    method: POST
    name: Start Container
    path: "/rust/containers/{name}/start"
    summary: Start a container by name
    description: Start a specific container by name.
    parameters:
      - name: name
        type: string
        required: true
        description: Container name
  - id: api-container-stop
    method: POST
    name: Stop Container
    path: "/rust/containers/{name}/stop"
    summary: Stop a container by name
    description: Stop a specific container by name.
    parameters:
      - name: name
        type: string
        required: true
        description: Container name
  - id: api-container-restart
    method: POST
    name: Restart Container
    path: "/rust/containers/{name}/restart"
    summary: Restart a container by name
    description: Restart a specific container by name.
    parameters:
      - name: name
        type: string
        required: true
        description: Container name
  - id: api-vm-container-start
    method: POST
    name: Start Container on VM
    path: "/rust/vms/{vm_id}/containers/{name}/start"
    summary: Start container on a specific VM
    description: Start a container on a specific VM.
    parameters:
      - name: vm_id
        type: string
        required: true
        description: VM identifier
      - name: name
        type: string
        required: true
        description: Container name
  - id: api-vm-container-stop
    method: POST
    name: Stop Container on VM
    path: "/rust/vms/{vm_id}/containers/{name}/stop"
    summary: Stop container on a specific VM
    description: Stop a container on a specific VM.
    parameters:
      - name: vm_id
        type: string
        required: true
        description: VM identifier
      - name: name
        type: string
        required: true
        description: Container name
  - id: api-vm-container-restart
    method: POST
    name: Restart Container on VM
    path: "/rust/vms/{vm_id}/containers/{name}/restart"
    summary: Restart container on a specific VM
    description: Restart a container on a specific VM.
    parameters:
      - name: vm_id
        type: string
        required: true
        description: VM identifier
      - name: name
        type: string
        required: true
        description: Container name
  - id: api-ondemand-start-all
    method: POST
    name: Start All On-Demand
    path: /rust/containers/on-demand/start-all
    summary: Start all on-demand containers
    description: Start all on-demand containers across VMs.
  - id: api-ondemand-stop-all
    method: POST
    name: Stop All On-Demand
    path: /rust/containers/on-demand/stop-all
    summary: Stop all on-demand containers
    description: Stop all on-demand containers across VMs.
  - id: api-ondemand-restart-all
    method: POST
    name: Restart All On-Demand
    path: /rust/containers/on-demand/restart-all
    summary: Restart all on-demand containers
    description: Restart all on-demand containers across VMs.
  - id: api-matomo-wake
    method: POST
    name: Matomo Wake
    path: /rust/containers/matomo/wake
    summary: Wake Matomo (stop Windmill)
    description: Wake Matomo analytics and stop Windmill (hybrid toggle).
  - id: api-matomo-sleep
    method: POST
    name: Matomo Sleep
    path: /rust/containers/matomo/sleep
    summary: Sleep Matomo (start Windmill)
    description: Sleep Matomo analytics and start Windmill (hybrid toggle).
  - id: api-windmill-start
    method: POST
    name: Windmill Start
    path: /rust/containers/windmill/start
    summary: Start Windmill (sleep Matomo)
    description: Start Windmill and sleep Matomo (hybrid toggle).
  - id: api-windmill-stop
    method: POST
    name: Windmill Stop
    path: /rust/containers/windmill/stop
    summary: Stop Windmill (wake Matomo)
    description: Stop Windmill and wake Matomo (hybrid toggle).
---

Container management endpoints for starting, stopping, and restarting Docker containers.

Includes on-demand bulk operations and Matomo/Windmill hybrid toggle endpoints.
