---
type: api
category: VM Management
items:
  - id: api-vm-start
    method: POST
    name: Start VM
    path: "/rust/vms/{vm_id}/start"
    summary: Start a VM (generic)
    description: Start a VM by its identifier.
    parameters:
      - name: vm_id
        type: string
        required: true
        description: VM identifier
  - id: api-vm-stop
    method: POST
    name: Stop VM
    path: "/rust/vms/{vm_id}/stop"
    summary: Stop a VM (generic)
    description: Stop a VM by its identifier.
    parameters:
      - name: vm_id
        type: string
        required: true
        description: VM identifier
  - id: api-vm-reset
    method: POST
    name: Reset VM
    path: "/rust/vms/{vm_id}/reset"
    summary: Reset/reboot a VM (generic)
    description: Reset or reboot a VM by its identifier.
    parameters:
      - name: vm_id
        type: string
        required: true
        description: VM identifier
  - id: api-vm-gcp-proxy-start
    method: POST
    name: Start gcp-proxy
    path: /rust/vm/gcp-proxy/start
    summary: Start gcp-proxy VM
    description: Start the gcp-proxy VM directly.
  - id: api-vm-gcp-proxy-stop
    method: POST
    name: Stop gcp-proxy
    path: /rust/vm/gcp-proxy/stop
    summary: Stop gcp-proxy VM
    description: Stop the gcp-proxy VM directly.
  - id: api-vm-gcp-proxy-reset
    method: POST
    name: Reset gcp-proxy
    path: /rust/vm/gcp-proxy/reset
    summary: Reset gcp-proxy VM
    description: Reset the gcp-proxy VM directly.
  - id: api-vm-oci-flex-start
    method: POST
    name: Start oci-flex
    path: /rust/vm/oci-flex/start
    summary: Start oci-flex VM
    description: Start the oci-flex VM directly.
  - id: api-vm-oci-flex-stop
    method: POST
    name: Stop oci-flex
    path: /rust/vm/oci-flex/stop
    summary: Stop oci-flex VM
    description: Stop the oci-flex VM directly.
  - id: api-vm-oci-flex-reset
    method: POST
    name: Reset oci-flex
    path: /rust/vm/oci-flex/reset
    summary: Reset oci-flex VM
    description: Reset the oci-flex VM directly.
  - id: api-vm-oci-analytics-start
    method: POST
    name: Start oci-analytics
    path: /rust/vm/oci-analytics/start
    summary: Start oci-analytics VM
    description: Start the oci-analytics VM directly.
  - id: api-vm-oci-analytics-stop
    method: POST
    name: Stop oci-analytics
    path: /rust/vm/oci-analytics/stop
    summary: Stop oci-analytics VM
    description: Stop the oci-analytics VM directly.
  - id: api-vm-oci-analytics-reset
    method: POST
    name: Reset oci-analytics
    path: /rust/vm/oci-analytics/reset
    summary: Reset oci-analytics VM
    description: Reset the oci-analytics VM directly.
  - id: api-vm-oci-mail-start
    method: POST
    name: Start oci-mail
    path: /rust/vm/oci-mail/start
    summary: Start oci-mail VM
    description: Start the oci-mail VM directly.
  - id: api-vm-oci-mail-stop
    method: POST
    name: Stop oci-mail
    path: /rust/vm/oci-mail/stop
    summary: Stop oci-mail VM
    description: Stop the oci-mail VM directly.
  - id: api-vm-oci-mail-reset
    method: POST
    name: Reset oci-mail
    path: /rust/vm/oci-mail/reset
    summary: Reset oci-mail VM
    description: Reset the oci-mail VM directly.
---

VM management endpoints for starting, stopping, and resetting virtual machines.

Generic endpoints accept a `vm_id` parameter. Named endpoints target specific VMs directly.
