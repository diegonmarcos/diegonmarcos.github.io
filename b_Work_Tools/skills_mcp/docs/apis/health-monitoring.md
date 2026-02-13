---
type: api
category: Health Monitoring
items:
  - id: api-health
    method: GET
    name: Health Check
    path: /rust/health
    summary: API alive check
    description: Simple health check to verify the Rust API is running.
  - id: api-health-all
    method: GET
    name: Health All
    path: /rust/health/all
    summary: Full health summary
    description: Health of all VMs with services and containers.
  - id: api-health-containers-by-vm
    method: GET
    name: Containers by VM
    path: /rust/health/containers-by-vm
    summary: Container health grouped by VM
    description: Container health across all VMs grouped by VM.
  - id: api-health-containers-by-service
    method: GET
    name: Containers by Service
    path: /rust/health/containers-by-service
    summary: Container health grouped by service
    description: Container health grouped by service across VMs.
  - id: api-health-proxied
    method: GET
    name: Proxied Services
    path: /rust/health/proxied-by-services
    summary: Public route health probes
    description: Public route health probes with redirect chain.
  - id: api-health-resources
    method: GET
    name: Resources All
    path: /rust/health/resources-all
    summary: System resources for all VMs
    description: "System resources, specs, and info for all VMs (CPU, RAM, disk)."
  - id: api-health-ids
    method: GET
    name: Health IDs
    path: /rust/health/ids
    summary: All valid variable IDs
    description: "All valid variable IDs: vm_ids, labels, services, containers."
  - id: api-health-vm
    method: GET
    name: VM Health
    path: "/rust/health/{vm_id}"
    summary: Health for a specific VM
    description: VM health check by identifier.
    parameters:
      - name: vm_id
        type: string
        required: true
        description: VM identifier
  - id: api-health-vm-container
    method: GET
    name: Container Status
    path: "/rust/health/{vm_id}/{container_name}"
    summary: Status for a specific container
    description: Container status on a specific VM.
    parameters:
      - name: vm_id
        type: string
        required: true
        description: VM identifier
      - name: container_name
        type: string
        required: true
        description: Container name
---

Health monitoring endpoints for the Rust API at `api.diegonmarcos.com:8080`.

All endpoints are GET requests that return JSON health data for VMs, containers, and services.
