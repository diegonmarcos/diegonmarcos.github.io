---
type: api
category: Service Management
items:
  - id: api-service-start
    method: POST
    name: Start Service
    path: "/rust/services/{service}/start"
    summary: Start a service by name
    description: Start a service by name.
    parameters:
      - name: service
        type: string
        required: true
        description: Service name
  - id: api-service-stop
    method: POST
    name: Stop Service
    path: "/rust/services/{service}/stop"
    summary: Stop a service by name
    description: Stop a service by name.
    parameters:
      - name: service
        type: string
        required: true
        description: Service name
  - id: api-vm-service-start
    method: POST
    name: Start Service on VM
    path: "/rust/vms/{vm_id}/services/{service}/start"
    summary: Start service on a specific VM
    description: Start a service on a specific VM.
    parameters:
      - name: vm_id
        type: string
        required: true
        description: VM identifier
      - name: service
        type: string
        required: true
        description: Service name
  - id: api-vm-service-stop
    method: POST
    name: Stop Service on VM
    path: "/rust/vms/{vm_id}/services/{service}/stop"
    summary: Stop service on a specific VM
    description: Stop a service on a specific VM.
    parameters:
      - name: vm_id
        type: string
        required: true
        description: VM identifier
      - name: service
        type: string
        required: true
        description: Service name
---

Service management endpoints for starting and stopping services on VMs.

Services are higher-level abstractions that may manage multiple containers.
