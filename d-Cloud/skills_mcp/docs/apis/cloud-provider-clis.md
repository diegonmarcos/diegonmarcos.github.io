# Cloud Provider CLIs

Not covered by MCP directly.

| CLI | Auth | Usage |
|-----|------|-------|
| `oci` | Session token | `oci compute instance action --action START --instance-id <ocid>` |
| `gcloud` | Service account | `gcloud compute instances start <name> --zone <zone>` |
| `gh` | OAuth token | `gh api`, `gh pr`, `gh run` |
| `terraform` | Cloudflare API token | DNS record management in `ba-clo_cloudflare/` |
