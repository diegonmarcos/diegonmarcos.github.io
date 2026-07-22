
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * This module provides access to environment variables that are injected _statically_ into your bundle at build time and are limited to _private_ access.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Static environment variables are [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env` at build time and then statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * **_Private_ access:**
 * 
 * - This module cannot be imported into client-side code
 * - This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured)
 * 
 * For example, given the following build time environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { ENVIRONMENT, PUBLIC_BASE_URL } from '$env/static/private';
 * 
 * console.log(ENVIRONMENT); // => "production"
 * console.log(PUBLIC_BASE_URL); // => throws error during build
 * ```
 * 
 * The above values will be the same _even if_ different values for `ENVIRONMENT` or `PUBLIC_BASE_URL` are set at runtime, as they are statically replaced in your code with their build time values.
 */
declare module '$env/static/private' {
	export const CF_API_TOKEN: string;
	export const bc_obs_lgtm_secrets__GF_SECURITY_ADMIN_USER: string;
	export const bc_obs_windmill_secrets__SMTP_FROM: string;
	export const WG_TERMUX_PUBLIC_KEY: string;
	export const npm_node_execpath: string;
	export const aa_sui_mail_mcp_secrets__MAIL_USER: string;
	export const TF_VAR_region: string;
	export const bb_sec_authelia_secrets__AUTHELIA_OIDC_HMAC_SECRET: string;
	export const aa_sui_mail_mcp_secrets__STALWART_ADMIN_USER: string;
	export const OCI_FINGERPRINT: string;
	export const bc_obs_matomo_secrets__MATOMO_DB_NAME: string;
	export const bc_obs_dagu_secrets__RESTIC_PASSWORD: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const __fish_nixos_env_preinit_sourced: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const npm_config_noproxy: string;
	export const bb_sec_authelia_secrets__AUTHELIA_OIDC_CLIENT_NPM_SECRET: string;
	export const XDG_DATA_DIRS: string;
	export const bc_obs_c3_infra_api_secrets__CF_API_EMAIL: string;
	export const OCI_SSH_KEY_PUB: string;
	export const LC_ALL: string;
	export const XDG_DOCUMENTS_DIR: string;
	export const CAS_FACE: string;
	export const aa_sui_mattermost_bots_secrets__BEARER_TOKEN: string;
	export const GCP_T4_SSH_KEY_PUB: string;
	export const aa_sui_tools_stalwart_secrets__OCI_RELAYUSER: string;
	export const XDG_RUNTIME_DIR: string;
	export const aa_sui_tools_stalwart_secrets__ME_PASSWORD: string;
	export const bc_obs_c3_infra_mcp_secrets__CF_API_KEY: string;
	export const CF_API_EMAIL: string;
	export const npm_execpath: string;
	export const WG_DNS: string;
	export const bc_obs_nocodb_secrets__NC_AUTH_JWT_SECRET: string;
	export const DEVICE: string;
	export const aa_sui_photoprism_secrets__MARIADB_DATABASE: string;
	export const bb_sec_authelia_secrets__AUTHELIA_OIDC_CLIENT_CLAUDE_OPUS_SECRET: string;
	export const QML2_IMPORT_PATH: string;
	export const WGPU_BACKEND: string;
	export const aa_sui_photoprism_secrets__PHOTOPRISM_ADMIN_PASSWORD: string;
	export const npm_config_user_agent: string;
	export const bb_sec_authelia_secrets__AUTHELIA_REDIS_PASSWORD: string;
	export const XDG_STATE_HOME: string;
	export const ca_dat_backup_bup_secrets__MYSQL_PASSWORD: string;
	export const npm_package_json: string;
	export const XDG_SESSION_ID: string;
	export const bc_obs_dagu_secrets__DAGU_PASSWORD: string;
	export const aa_sui_tools_smtp_proxy_secrets__SMTP_HOST: string;
	export const SVELTEKIT_FORK: string;
	export const XDG_VTNR: string;
	export const __NIXOS_SET_ENVIRONMENT_DONE: string;
	export const ca_dat_backup_gitea_secrets__GITEA__security__SECRET_KEY: string;
	export const AUTHELIA_OIDC_TOKENS_DIR: string;
	export const bb_sec_authelia_secrets__AUTHELIA_OIDC_CLIENT_CLOUD_ADMIN_SECRET: string;
	export const WG_HUB_ENDPOINT: string;
	export const ca_dat_db_agent_secrets__VM_NAME: string;
	export const bb_sec_authelia_secrets__AUTHELIA_OIDC_CLIENT_DAGU_CC_SECRET: string;
	export const home_manager__shared_secrets__CLAUDE_WEBSERVER_PUB: string;
	export const aa_sui_mail_mcp_secrets__RESEND_API_KEY: string;
	export const __HM_ZSH_SESS_VARS_SOURCED: string;
	export const ca_dat_backup_bup_secrets__PGHOST: string;
	export const LESS_TERMCAP_us: string;
	export const MOZ_ENABLE_WAYLAND: string;
	export const ca_dat_backup_borg_secrets__ARCHIVE_NAME: string;
	export const NODE_PATH: string;
	export const LESS_TERMCAP_ue: string;
	export const npm_lifecycle_event: string;
	export const AUTHELIA_TOKEN_URL: string;
	export const VISUAL: string;
	export const MANPAGER: string;
	export const ca_dat_backup_gitea_secrets__GITEA__security__INTERNAL_TOKEN: string;
	export const bb_sec_authelia_secrets__AUTHELIA_OIDC_JWKS_KEY: string;
	export const GIT_EDITOR: string;
	export const bc_obs_ntfy_secrets__NTFY_ADMIN_PASSWORD: string;
	export const CF_ZONE_ID: string;
	export const ATUIN_SESSION: string;
	export const aa_sui_tools_smtp_proxy_secrets__LISTEN_PORT: string;
	export const ac_fin_crawlee_cloud_secrets__MINIO_USER: string;
	export const aa_sui_photoprism_secrets__MARIADB_ROOT_PASSWORD: string;
	export const FZF_ALT_C_COMMAND: string;
	export const bb_sec_authelia_secrets__AUTHELIA_OIDC_CLIENT_CLI_SECRET: string;
	export const bc_obs_c3_services_mcp_secrets__GITHUB_TOKEN: string;
	export const LESSOPEN: string;
	export const CAS_KONSOLE: string;
	export const bc_obs_umami_secrets__APP_SECRET: string;
	export const npm_config_prefix: string;
	export const bb_sec_authelia_secrets__AUTHELIA_SESSION_SECRET: string;
	export const LESS_TERMCAP_md: string;
	export const WG_INTERFACE: string;
	export const GTK_PATH: string;
	export const OCI_API_KEY_PUB_FILE: string;
	export const WG_SURFACE_PRIVATE_KEY: string;
	export const aa_sui_tools_stalwart_secrets__NOREPLY_PASSWORD: string;
	export const TF_VAR_compartment_ocid: string;
	export const LIBEXEC_PATH: string;
	export const ad_agi_rig_agentic_hai_1_5bq4_secrets__MM_BOT_TOKEN: string;
	export const LESS_TERMCAP_mb: string;
	export const bc_obs_c3_infra_api_secrets__DAGU_PASSWORD: string;
	export const npm_package_name: string;
	export const ab_mic_vaultwarden_secrets__SMTP_SECURITY: string;
	export const TERM: string;
	export const aa_sui_tools_smtp_proxy_secrets__SMTP_PORT: string;
	export const npm_config_init_module: string;
	export const GTK_THEME: string;
	export const aa_sui_photoprism_secrets__MARIADB_PASSWORD: string;
	export const NIX_PATH: string;
	export const WG_OCI_APPS_PUBLIC_KEY: string;
	export const TF_VAR_tenancy_ocid: string;
	export const ac_fin_crawlee_cloud_secrets__POSTGRES_USER: string;
	export const ab_mic_vaultwarden_secrets__SMTP_HOST: string;
	export const WG_OCI_APPS_PRIVATE_KEY: string;
	export const aa_sui_code_server_secrets__CODE_SERVER_PASSWORD: string;
	export const ab_mic_vaultwarden_secrets__SMTP_USERNAME: string;
	export const npm_config_globalconfig: string;
	export const bc_obs_windmill_secrets__OAUTH_CLIENT_ID: string;
	export const OPENAI_BASE_URL: string;
	export const XDG_CONFIG_HOME: string;
	export const bc_obs_windmill_secrets__SMTP_HOST: string;
	export const SSH_S21_ED25519_PUB: string;
	export const WG_GCP_PROXY_PUBLIC_KEY: string;
	export const OCI_S3_ACCESS_KEY: string;
	export const bb_sec_authelia_secrets__AUTHELIA_JWT_SECRET: string;
	export const HUSHLOGIN: string;
	export const ca_dat_backup_bup_secrets__MYSQL_DBS: string;
	export const QT_QPA_PLATFORMTHEME: string;
	export const GDK_PIXBUF_MODULE_FILE: string;
	export const NAUTILUS_4_EXTENSION_DIR: string;
	export const npm_config_global_prefix: string;
	export const GNUPGHOME: string;
	export const NOCODB_ADMIN_EMAIL: string;
	export const bb_sec_authelia_secrets__AUTHELIA_OIDC_CLIENT_DAGU_SECRET: string;
	export const CAS_SELF: string;
	export const home_manager__shared_secrets__GCP_COMPUTE_ENGINE_PUB: string;
	export const bc_obs_umami_secrets__ADMIN_PASSWORD: string;
	export const LIBVA_DRIVER_NAME: string;
	export const ac_fin_quant_lab_light_secrets__POSTGRES_DB: string;
	export const bb_sec_authelia_secrets__AUTHELIA_OIDC_CLIENT_CLAUDE_SONNET_SECRET: string;
	export const ca_dat_backup_borg_secrets__SOURCE_DIRS: string;
	export const bc_obs_c3_infra_mcp_secrets__DAGU_USERNAME: string;
	export const bc_obs_c3_infra_api_secrets__RESEND_API_KEY: string;
	export const TERMINFO_DIRS: string;
	export const GPG_PUBLIC_KEY_FILE: string;
	export const ac_fin_crawlee_cloud_secrets__RUNNER_TOKEN: string;
	export const home_manager__shared_secrets__MATOMO_SERVER_PUB: string;
	export const SSH_S21_ED25519_FILE: string;
	export const LOCALE_ARCHIVE_2_27: string;
	export const COLOR: string;
	export const bc_obs_nocodb_secrets_powersheets__NC_AUTH_JWT_SECRET: string;
	export const bc_obs_windmill_secrets__DB_PASSWORD: string;
	export const CLAUDE_CODE_CHILD_SESSION: string;
	export const ca_dat_db_agent_secrets__NTFY_TOPIC: string;
	export const bc_obs_windmill_secrets__SMTP_PORT: string;
	export const XCURSOR_PATH: string;
	export const ac_fin_quant_lab_full_secrets__POSTGRES_USER: string;
	export const bb_sec_authelia_secrets__AUTHELIA_OIDC_CLIENT_CLOUDFLARE_SECRET: string;
	export const GCP_PROXY_SSH_KEY_FILE: string;
	export const EDITOR: string;
	export const bc_obs_dagu_secrets__OCI_S3_SECRET_KEY: string;
	export const ad_agi_rig_agentic_sonn_14bq8_secrets__SURREAL_ROOT_PASSWORD: string;
	export const FZF_CTRL_T_OPTS: string;
	export const GPG_TTY: string;
	export const bb_sec_authelia_secrets__AUTHELIA_OIDC_CLIENT_CLAUDE_SECRET: string;
	export const MOZ_DRM_DEVICE: string;
	export const CLAUDE_CODE_EXECPATH: string;
	export const PROFILE: string;
	export const vps_resend_secrets__cloudflare_zone_id: string;
	export const GIT_BASE: string;
	export const NIX_LD: string;
	export const ca_dat_redis_secrets__REDIS_PASSWORD: string;
	export const aa_sui_mattermost_bots_secrets__MM_ADMIN_USERNAME: string;
	export const aa_sui_mattermost_bots_secrets__POSTGRES_PASSWORD: string;
	export const bc_obs_nocodb_secrets__NC_OIDC_CLIENT_SECRET: string;
	export const XDG_DATA_HOME: string;
	export const XDG_SEAT: string;
	export const GIO_EXTRA_MODULES: string;
	export const ca_dat_backup_gitea_secrets__GITEA__oauth2__JWT_SECRET: string;
	export const bb_sec_authelia_secrets__AUTHELIA_OIDC_CLIENT_CLAUDE_HAIKU_SECRET: string;
	export const CRAWLEE_API_TOKEN: string;
	export const npm_config_npm_version: string;
	export const ca_dat_backup_bup_secrets__MYSQL_USER: string;
	export const WG_SURFACE_PUBLIC_KEY: string;
	export const npm_config_userconfig: string;
	export const LESS_TERMCAP_me: string;
	export const XDG_SESSION_TYPE: string;
	export const FZF_CTRL_T_COMMAND: string;
	export const XDG_VIDEOS_DIR: string;
	export const WG_GCP_PROXY_PRIVATE_KEY: string;
	export const COREPACK_ENABLE_AUTO_PIN: string;
	export const GCP_PROXY_SSH_KEY_PUB: string;
	export const bc_obs_matomo_secrets__MYSQL_ROOT_PASSWORD: string;
	export const ac_fin_quant_lab_light_secrets__POSTGRES_PASSWORD: string;
	export const ca_dat_backup_bup_secrets__PGPASSWORD: string;
	export const aa_sui_photoprism_secrets__OCI_S3_SECRET_KEY: string;
	export const GPG_PRIVATE_KEY_FILE: string;
	export const bb_sec_authelia_secrets__AUTHELIA_SMTP_PASSWORD: string;
	export const aa_sui_mattermost_mcp_secrets__MM_ADMIN_USERNAME: string;
	export const FZF_DEFAULT_OPTS: string;
	export const INIT_CWD: string;
	export const ac_fin_crawlee_cloud_secrets__MINIO_PASSWORD: string;
	export const ca_dat_kg_graph_secrets__SURREAL_ROOT_PASSWORD: string;
	export const bc_obs_umami_secrets__DB_PASSWORD: string;
	export const C3_API_KEY: string;
	export const WIREGUARD_PUBLIC_IP: string;
	export const OLDPWD: string;
	export const NODE: string;
	export const npm_config_cache: string;
	export const aa_sui_mattermost_bots_secrets__MM_CLAUDE_PASSWORD: string;
	export const bc_obs_windmill_secrets__SMTP_USERNAME: string;
	export const ac_fin_quant_lab_full_secrets__POSTGRES_DB: string;
	export const QT_LOGGING_RULES: string;
	export const bb_sec_authelia_secrets__AUTHELIA_OIDC_CLIENT_MONITORING_SECRET: string;
	export const TZDIR: string;
	export const CAS_API: string;
	export const ac_fin_quant_lab_full_secrets__POSTGRES_PASSWORD: string;
	export const XDG_PICTURES_DIR: string;
	export const aa_sui_photoprism_secrets__MARIADB_USER: string;
	export const bc_obs_c3_infra_mcp_secrets__MM_BOT_TOKEN: string;
	export const SSH_S21_RSA_FILE: string;
	export const aa_sui_mattermost_bots_secrets__MM_ADMIN_EMAIL: string;
	export const bb_sec_authelia_secrets__AUTHELIA_OIDC_CLIENT_MATTERMOST_CC_SECRET: string;
	export const aa_sui_tools_stalwart_secrets__DKIM_PRIVATE_KEY_B64: string;
	export const STARSHIP_SESSION_KEY: string;
	export const bc_obs_c3_infra_api_secrets__AUTHELIA_OIDC_C3_MCP_SECRET: string;
	export const OCI_USER_OCID: string;
	export const NODE_ENV: string;
	export const OCI_REGION: string;
	export const AI_AGENT: string;
	export const NIXPKGS_CONFIG: string;
	export const ab_mic_vaultwarden_secrets__SMTP_FROM: string;
	export const WG_OCI_MAIL_PUBLIC_KEY: string;
	export const CLAUDE_EFFORT: string;
	export const bc_obs_c3_infra_api_secrets__CF_API_KEY: string;
	export const aa_sui_mail_mcp_secrets__MAIL_PASSWORD: string;
	export const LOGNAME: string;
	export const SHELL: string;
	export const CLOUDFLARE_EMAIL: string;
	export const VAULT_DEPLOY_KEY_FILE: string;
	export const CLAUDE_PID: string;
	export const bc_obs_nocodb_secrets_powersheets__NC_ADMIN_EMAIL: string;
	export const AUTHELIA_JWKS_PUBLIC_KEY_FILE: string;
	export const NIX_XDG_DESKTOP_PORTAL_DIR: string;
	export const aa_sui_mattermost_mcp_secrets__CLAUDE_MODEL: string;
	export const XDG_PUBLICSHARE_DIR: string;
	export const SSH_S21_RSA_PUB: string;
	export const home_manager__shared_secrets__VAULT_ID_RSA: string;
	export const bb_sec_caddy_secrets__AUTHELIA_CLI_SECRET: string;
	export const OPENAI_API_KEY: string;
	export const npm_command: string;
	export const ca_dat_backup_bup_secrets__SQLITE_DBS: string;
	export const bc_obs_nocodb_secrets__NC_ADMIN_EMAIL: string;
	export const WG_OCI_ANALYTICS_PUBLIC_KEY: string;
	export const ca_dat_db_agent_secrets__NTFY_URL: string;
	export const WG_OCI_MAIL_PRIVATE_KEY: string;
	export const aa_sui_mattermost_bots_secrets__AUTHELIA_OIDC_MATTERMOST_SECRET: string;
	export const __HM_SESS_VARS_SOURCED: string;
	export const OCI_API_KEY_FILE: string;
	export const TPM2_PKCS11_TCTI: string;
	export const aa_sui_mattermost_bots_secrets__MM_SQLSETTINGS_DATASOURCE: string;
	export const SPEECHD_CMD: string;
	export const TF_VAR_cloudflare_api_key: string;
	export const ba_clo_cloudflare_secrets__cloudflare_api_key: string;
	export const LESS_TERMCAP_se: string;
	export const WG_PRIVATE_KEY: string;
	export const ca_dat_backup_bup_secrets__MYSQL_HOST: string;
	export const SSH_SURFACE_PRO_ED25519_PUB: string;
	export const MOZ_X11_EGL: string;
	export const aa_sui_mattermost_mcp_secrets__MM_URL: string;
	export const bc_obs_nocodb_secrets_powersheets__POSTGRES_PASSWORD: string;
	export const bc_obs_dagu_secrets__AUTHELIA_OIDC_DAGU_SECRET: string;
	export const bb_sec_authelia_secrets__AUTHELIA_STORAGE_ENCRYPTION_KEY: string;
	export const AUTHELIA_OIDC_CLIENT_ID: string;
	export const aa_sui_snappymail_secrets__SNAPPYMAIL_ADMIN_PASSWORD: string;
	export const ANTHROPIC_API_KEY: string;
	export const GITHUB_TOKEN: string;
	export const aa_sui_google_workspace_mcp_secrets__GOOGLE_SERVICE_ACCOUNT_KEY: string;
	export const NIX_GSETTINGS_OVERRIDES_DIR: string;
	export const aa_sui_photoprism_secrets__OCI_S3_ACCESS_KEY: string;
	export const bc_obs_c3_infra_mcp_secrets__C3_API_KEY: string;
	export const bc_obs_c3_services_mcp_secrets__DAGU_BASIC_AUTH: string;
	export const PWD: string;
	export const LESS_TERMCAP_so: string;
	export const FZF_ALT_C_OPTS: string;
	export const TPM2TOOLS_TCTI: string;
	export const RTK_ENABLED: string;
	export const ab_mic_vaultwarden_secrets__ADMIN_TOKEN: string;
	export const LESSKEYIN_SYSTEM: string;
	export const npm_config_local_prefix: string;
	export const ad_agi_rig_agentic_sonn_14bq8_secrets__MM_BOT_TOKEN: string;
	export const GCP_SERVICE_ACCOUNT_KEY_FILE: string;
	export const _: string;
	export const bc_obs_c3_infra_mcp_secrets__DAGU_PASSWORD: string;
	export const RESEND_API_KEY: string;
	export const FZF_CTRL_R_OPTS: string;
	export const FZF_DEFAULT_COMMAND: string;
	export const MOZ_WEBRENDER: string;
	export const bb_sec_caddy_secrets__NTFY_ADMIN_AUTH: string;
	export const WG_TERMUX_PRIVATE_KEY: string;
	export const TF_PLUGIN_CACHE_DIR: string;
	export const ab_mic_vaultwarden_secrets__SMTP_PASSWORD: string;
	export const ab_mic_vaultwarden_secrets__SMTP_PORT: string;
	export const bc_obs_dagu_secrets__BORG_PASSPHRASE: string;
	export const CF_DOMAIN: string;
	export const bc_obs_c3_infra_api_secrets__C3_API_KEY: string;
	export const CLAUDE_SUPERSET_MODE: string;
	export const ac_fin_crawlee_cloud_secrets__ADMIN_PASSWORD: string;
	export const aa_sui_tools_stalwart_secrets__ADMIN_PASSWORD: string;
	export const QTWEBKIT_PLUGIN_PATH: string;
	export const home_manager__shared_secrets__SURFACE_NIXOS_PUB: string;
	export const OCI_TENANCY_OCID: string;
	export const ca_dat_db_agent_secrets__BUP_REMOTE: string;
	export const aa_sui_mattermost_mcp_secrets__MM_TEAM_ID: string;
	export const LOCALE_ARCHIVE: string;
	export const NOCODB_API_TOKEN: string;
	export const NoDefaultCurrentDirectoryInExePath: string;
	export const WG_LOCAL_IP: string;
	export const aa_sui_mail_mcp_secrets__STALWART_ADMIN_PASSWORD: string;
	export const ca_dat_backup_bup_secrets__POSTGRES_DBS: string;
	export const INFOPATH: string;
	export const GTK2_RC_FILES: string;
	export const bc_obs_c3_infra_api_secrets__DAGU_USERNAME: string;
	export const ad_agi_rig_agentic_sonn_14bq8_secrets__SURREAL_URL: string;
	export const bb_sec_authelia_secrets__AUTHELIA_OIDC_CLIENT_C3_MCP_SECRET: string;
	export const bb_sec_authelia_secrets__AUTHELIA_OIDC_CLIENT_NOCODB_SECRET: string;
	export const bc_obs_ntfy_secrets__NTFY_USER_PASSWORD: string;
	export const WG_OCI_ANALYTICS_PRIVATE_KEY: string;
	export const XDG_CACHE_HOME: string;
	export const bc_obs_matomo_secrets__MATOMO_DB_PASSWORD: string;
	export const HOME: string;
	export const GCP_T4_SSH_KEY_FILE: string;
	export const SSH_ASKPASS: string;
	export const LANG: string;
	export const TMUX_TMPDIR: string;
	export const ac_fin_crawlee_cloud_secrets__POSTGRES_PASSWORD: string;
	export const XDG_DESKTOP_DIR: string;
	export const aa_sui_mattermost_mcp_secrets__MM_CLAUDE_PASSWORD: string;
	export const aa_sui_tools_stalwart_secrets__AWS_RELAYPASSWORD: string;
	export const KPACKAGE_DEP_RESOLVERS_PATH: string;
	export const bc_obs_c3_infra_mcp_secrets__CF_API_EMAIL: string;
	export const bc_obs_umami_secrets__ADMIN_USERNAME: string;
	export const ca_dat_backup_bup_secrets__PGUSER: string;
	export const OCI_S3_BUCKET: string;
	export const bc_obs_lgtm_secrets__GF_SECURITY_ADMIN_PASSWORD: string;
	export const bc_obs_c3_infra_api_secrets__MM_BOT_TOKEN: string;
	export const bc_obs_windmill_secrets__SMTP_PASSWORD: string;
	export const STARSHIP_SHELL: string;
	export const LESS: string;
	export const home_manager__shared_secrets__VAULT_ID_RSA_PUB: string;
	export const OCI_S3_SECRET_KEY: string;
	export const vps_resend_secrets__cloudflare_api_token: string;
	export const bc_obs_dagu_secrets__DAGU_USERNAME: string;
	export const OCI_SSH_KEY_FILE: string;
	export const WG_HUB_IP: string;
	export const CLAUDE_CODE_ENTRYPOINT: string;
	export const NOCODB_XC_TOKEN: string;
	export const SSH_SURFACE_PRO_ED25519_FILE: string;
	export const bb_sec_caddy_secrets__CF_API_TOKEN: string;
	export const ac_fin_quant_lab_light_secrets__POSTGRES_USER: string;
	export const CLAUDE_CODE_SESSION_ID: string;
	export const aa_sui_code_server_secrets__sudo_password: string;
	export const CAS_TMUX: string;
	export const XDG_DOWNLOAD_DIR: string;
	export const bc_obs_c3_infra_mcp_secrets__RESEND_API_KEY: string;
	export const HM_PROFILE: string;
	export const ac_fin_crawlee_cloud_secrets__POSTGRES_DB: string;
	export const home_manager__shared_secrets__GCP_COMPUTE_ENGINE: string;
	export const bc_obs_nocodb_secrets_powersheets__NC_ADMIN_PASSWORD: string;
	export const USER: string;
	export const aa_sui_mattermost_bots_secrets__MM_ADMIN_PASSWORD: string;
	export const CF_API_KEY: string;
	export const XDG_CONFIG_DIRS: string;
	export const XDG_MUSIC_DIR: string;
	export const NOCODB_URL: string;
	export const home_manager__shared_secrets__SURFACE_DEPLOY_PUB: string;
	export const NIX_LD_LIBRARY_PATH: string;
	export const aa_sui_tools_stalwart_secrets__CF_DNS_API_TOKEN: string;
	export const AUTHELIA_OIDC_CREDENTIALS_DIR: string;
	export const bb_sec_authelia_secrets__AUTHELIA_USER_DIEGO_HASH: string;
	export const XDG_TEMPLATES_DIR: string;
	export const aa_sui_tools_smtp_proxy_secrets__API_KEY: string;
	export const WG_GHA_RUNNER_PUBLIC_KEY: string;
	export const OCI_S3_ENDPOINT: string;
	export const ANTHROPIC_BASE_URL: string;
	export const bc_obs_nocodb_secrets__POSTGRES_PASSWORD: string;
	export const ac_fin_crawlee_cloud_secrets__JWT_SECRET: string;
	export const aa_sui_tools_stalwart_secrets__AWS_RELAYUSER: string;
	export const OCI_S3_REGION: string;
	export const vps_resend_secrets__resend_api_key: string;
	export const PIP_CACHE_DIR: string;
	export const CAVEMAN_ENABLED: string;
	export const home_manager__shared_secrets__ID_ED25519: string;
	export const bc_obs_nocodb_secrets__NC_ADMIN_PASSWORD: string;
	export const bc_obs_windmill_secrets__OAUTH_CLIENT_SECRET: string;
	export const bc_obs_matomo_secrets__MATOMO_DB_USER: string;
	export const NIX_PROFILES: string;
	export const MOZ_DISABLE_RDD_SANDBOX: string;
	export const aa_sui_mail_mcp_secrets__STALWART_ADMIN_URL: string;
	export const SHLVL: string;
	export const bc_obs_c3_services_mcp_secrets__STALWART_ADMIN_PASSWORD: string;
	export const QT_PLUGIN_PATH: string;
	export const PAGER: string;
	export const npm_lifecycle_script: string;
	export const SOPS_AGE_KEY_FILE: string;
	export const aa_sui_tools_stalwart_secrets__OCI_RELAYPASSWORD: string;
	export const bc_obs_c3_infra_mcp_secrets__AUTHELIA_OIDC_C3_MCP_SECRET: string;
	export const CLAUDECODE: string;
	export const bb_sec_authelia_secrets__AUTHELIA_OIDC_CLIENT_MATTERMOST_SECRET: string;
	export const NIX_USER_PROFILE_DIR: string;
	export const ca_dat_backup_borg_secrets__BORG_PASSPHRASE: string;
	export const ac_fin_crawlee_cloud_secrets__ADMIN_EMAIL: string;
	export const XDG_SESSION_CLASS: string;
	export const AUTHELIA_JWKS_PRIVATE_KEY_FILE: string;
	export const aa_sui_radicale_secrets__RADICALE_USERS: string;
	export const CLOUDFLARE_API_KEY: string;
}

/**
 * This module provides access to environment variables that are injected _statically_ into your bundle at build time and are _publicly_ accessible.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Static environment variables are [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env` at build time and then statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * **_Public_ access:**
 * 
 * - This module _can_ be imported into client-side code
 * - **Only** variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`) are included
 * 
 * For example, given the following build time environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { ENVIRONMENT, PUBLIC_BASE_URL } from '$env/static/public';
 * 
 * console.log(ENVIRONMENT); // => throws error during build
 * console.log(PUBLIC_BASE_URL); // => "http://site.com"
 * ```
 * 
 * The above values will be the same _even if_ different values for `ENVIRONMENT` or `PUBLIC_BASE_URL` are set at runtime, as they are statically replaced in your code with their build time values.
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to environment variables set _dynamically_ at runtime and that are limited to _private_ access.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Dynamic environment variables are defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`.
 * 
 * **_Private_ access:**
 * 
 * - This module cannot be imported into client-side code
 * - This module includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured)
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 * 
 * > [!NOTE] To get correct types, environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * >
 * > ```env
 * > MY_FEATURE_FLAG=
 * > ```
 * >
 * > You can override `.env` values from the command line like so:
 * >
 * > ```sh
 * > MY_FEATURE_FLAG="enabled" npm run dev
 * > ```
 * 
 * For example, given the following runtime environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * 
 * console.log(env.ENVIRONMENT); // => "production"
 * console.log(env.PUBLIC_BASE_URL); // => undefined
 * ```
 */
declare module '$env/dynamic/private' {
	export const env: {
		CF_API_TOKEN: string;
		bc_obs_lgtm_secrets__GF_SECURITY_ADMIN_USER: string;
		bc_obs_windmill_secrets__SMTP_FROM: string;
		WG_TERMUX_PUBLIC_KEY: string;
		npm_node_execpath: string;
		aa_sui_mail_mcp_secrets__MAIL_USER: string;
		TF_VAR_region: string;
		bb_sec_authelia_secrets__AUTHELIA_OIDC_HMAC_SECRET: string;
		aa_sui_mail_mcp_secrets__STALWART_ADMIN_USER: string;
		OCI_FINGERPRINT: string;
		bc_obs_matomo_secrets__MATOMO_DB_NAME: string;
		bc_obs_dagu_secrets__RESTIC_PASSWORD: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		__fish_nixos_env_preinit_sourced: string;
		npm_config_node_gyp: string;
		PATH: string;
		npm_config_noproxy: string;
		bb_sec_authelia_secrets__AUTHELIA_OIDC_CLIENT_NPM_SECRET: string;
		XDG_DATA_DIRS: string;
		bc_obs_c3_infra_api_secrets__CF_API_EMAIL: string;
		OCI_SSH_KEY_PUB: string;
		LC_ALL: string;
		XDG_DOCUMENTS_DIR: string;
		CAS_FACE: string;
		aa_sui_mattermost_bots_secrets__BEARER_TOKEN: string;
		GCP_T4_SSH_KEY_PUB: string;
		aa_sui_tools_stalwart_secrets__OCI_RELAYUSER: string;
		XDG_RUNTIME_DIR: string;
		aa_sui_tools_stalwart_secrets__ME_PASSWORD: string;
		bc_obs_c3_infra_mcp_secrets__CF_API_KEY: string;
		CF_API_EMAIL: string;
		npm_execpath: string;
		WG_DNS: string;
		bc_obs_nocodb_secrets__NC_AUTH_JWT_SECRET: string;
		DEVICE: string;
		aa_sui_photoprism_secrets__MARIADB_DATABASE: string;
		bb_sec_authelia_secrets__AUTHELIA_OIDC_CLIENT_CLAUDE_OPUS_SECRET: string;
		QML2_IMPORT_PATH: string;
		WGPU_BACKEND: string;
		aa_sui_photoprism_secrets__PHOTOPRISM_ADMIN_PASSWORD: string;
		npm_config_user_agent: string;
		bb_sec_authelia_secrets__AUTHELIA_REDIS_PASSWORD: string;
		XDG_STATE_HOME: string;
		ca_dat_backup_bup_secrets__MYSQL_PASSWORD: string;
		npm_package_json: string;
		XDG_SESSION_ID: string;
		bc_obs_dagu_secrets__DAGU_PASSWORD: string;
		aa_sui_tools_smtp_proxy_secrets__SMTP_HOST: string;
		SVELTEKIT_FORK: string;
		XDG_VTNR: string;
		__NIXOS_SET_ENVIRONMENT_DONE: string;
		ca_dat_backup_gitea_secrets__GITEA__security__SECRET_KEY: string;
		AUTHELIA_OIDC_TOKENS_DIR: string;
		bb_sec_authelia_secrets__AUTHELIA_OIDC_CLIENT_CLOUD_ADMIN_SECRET: string;
		WG_HUB_ENDPOINT: string;
		ca_dat_db_agent_secrets__VM_NAME: string;
		bb_sec_authelia_secrets__AUTHELIA_OIDC_CLIENT_DAGU_CC_SECRET: string;
		home_manager__shared_secrets__CLAUDE_WEBSERVER_PUB: string;
		aa_sui_mail_mcp_secrets__RESEND_API_KEY: string;
		__HM_ZSH_SESS_VARS_SOURCED: string;
		ca_dat_backup_bup_secrets__PGHOST: string;
		LESS_TERMCAP_us: string;
		MOZ_ENABLE_WAYLAND: string;
		ca_dat_backup_borg_secrets__ARCHIVE_NAME: string;
		NODE_PATH: string;
		LESS_TERMCAP_ue: string;
		npm_lifecycle_event: string;
		AUTHELIA_TOKEN_URL: string;
		VISUAL: string;
		MANPAGER: string;
		ca_dat_backup_gitea_secrets__GITEA__security__INTERNAL_TOKEN: string;
		bb_sec_authelia_secrets__AUTHELIA_OIDC_JWKS_KEY: string;
		GIT_EDITOR: string;
		bc_obs_ntfy_secrets__NTFY_ADMIN_PASSWORD: string;
		CF_ZONE_ID: string;
		ATUIN_SESSION: string;
		aa_sui_tools_smtp_proxy_secrets__LISTEN_PORT: string;
		ac_fin_crawlee_cloud_secrets__MINIO_USER: string;
		aa_sui_photoprism_secrets__MARIADB_ROOT_PASSWORD: string;
		FZF_ALT_C_COMMAND: string;
		bb_sec_authelia_secrets__AUTHELIA_OIDC_CLIENT_CLI_SECRET: string;
		bc_obs_c3_services_mcp_secrets__GITHUB_TOKEN: string;
		LESSOPEN: string;
		CAS_KONSOLE: string;
		bc_obs_umami_secrets__APP_SECRET: string;
		npm_config_prefix: string;
		bb_sec_authelia_secrets__AUTHELIA_SESSION_SECRET: string;
		LESS_TERMCAP_md: string;
		WG_INTERFACE: string;
		GTK_PATH: string;
		OCI_API_KEY_PUB_FILE: string;
		WG_SURFACE_PRIVATE_KEY: string;
		aa_sui_tools_stalwart_secrets__NOREPLY_PASSWORD: string;
		TF_VAR_compartment_ocid: string;
		LIBEXEC_PATH: string;
		ad_agi_rig_agentic_hai_1_5bq4_secrets__MM_BOT_TOKEN: string;
		LESS_TERMCAP_mb: string;
		bc_obs_c3_infra_api_secrets__DAGU_PASSWORD: string;
		npm_package_name: string;
		ab_mic_vaultwarden_secrets__SMTP_SECURITY: string;
		TERM: string;
		aa_sui_tools_smtp_proxy_secrets__SMTP_PORT: string;
		npm_config_init_module: string;
		GTK_THEME: string;
		aa_sui_photoprism_secrets__MARIADB_PASSWORD: string;
		NIX_PATH: string;
		WG_OCI_APPS_PUBLIC_KEY: string;
		TF_VAR_tenancy_ocid: string;
		ac_fin_crawlee_cloud_secrets__POSTGRES_USER: string;
		ab_mic_vaultwarden_secrets__SMTP_HOST: string;
		WG_OCI_APPS_PRIVATE_KEY: string;
		aa_sui_code_server_secrets__CODE_SERVER_PASSWORD: string;
		ab_mic_vaultwarden_secrets__SMTP_USERNAME: string;
		npm_config_globalconfig: string;
		bc_obs_windmill_secrets__OAUTH_CLIENT_ID: string;
		OPENAI_BASE_URL: string;
		XDG_CONFIG_HOME: string;
		bc_obs_windmill_secrets__SMTP_HOST: string;
		SSH_S21_ED25519_PUB: string;
		WG_GCP_PROXY_PUBLIC_KEY: string;
		OCI_S3_ACCESS_KEY: string;
		bb_sec_authelia_secrets__AUTHELIA_JWT_SECRET: string;
		HUSHLOGIN: string;
		ca_dat_backup_bup_secrets__MYSQL_DBS: string;
		QT_QPA_PLATFORMTHEME: string;
		GDK_PIXBUF_MODULE_FILE: string;
		NAUTILUS_4_EXTENSION_DIR: string;
		npm_config_global_prefix: string;
		GNUPGHOME: string;
		NOCODB_ADMIN_EMAIL: string;
		bb_sec_authelia_secrets__AUTHELIA_OIDC_CLIENT_DAGU_SECRET: string;
		CAS_SELF: string;
		home_manager__shared_secrets__GCP_COMPUTE_ENGINE_PUB: string;
		bc_obs_umami_secrets__ADMIN_PASSWORD: string;
		LIBVA_DRIVER_NAME: string;
		ac_fin_quant_lab_light_secrets__POSTGRES_DB: string;
		bb_sec_authelia_secrets__AUTHELIA_OIDC_CLIENT_CLAUDE_SONNET_SECRET: string;
		ca_dat_backup_borg_secrets__SOURCE_DIRS: string;
		bc_obs_c3_infra_mcp_secrets__DAGU_USERNAME: string;
		bc_obs_c3_infra_api_secrets__RESEND_API_KEY: string;
		TERMINFO_DIRS: string;
		GPG_PUBLIC_KEY_FILE: string;
		ac_fin_crawlee_cloud_secrets__RUNNER_TOKEN: string;
		home_manager__shared_secrets__MATOMO_SERVER_PUB: string;
		SSH_S21_ED25519_FILE: string;
		LOCALE_ARCHIVE_2_27: string;
		COLOR: string;
		bc_obs_nocodb_secrets_powersheets__NC_AUTH_JWT_SECRET: string;
		bc_obs_windmill_secrets__DB_PASSWORD: string;
		CLAUDE_CODE_CHILD_SESSION: string;
		ca_dat_db_agent_secrets__NTFY_TOPIC: string;
		bc_obs_windmill_secrets__SMTP_PORT: string;
		XCURSOR_PATH: string;
		ac_fin_quant_lab_full_secrets__POSTGRES_USER: string;
		bb_sec_authelia_secrets__AUTHELIA_OIDC_CLIENT_CLOUDFLARE_SECRET: string;
		GCP_PROXY_SSH_KEY_FILE: string;
		EDITOR: string;
		bc_obs_dagu_secrets__OCI_S3_SECRET_KEY: string;
		ad_agi_rig_agentic_sonn_14bq8_secrets__SURREAL_ROOT_PASSWORD: string;
		FZF_CTRL_T_OPTS: string;
		GPG_TTY: string;
		bb_sec_authelia_secrets__AUTHELIA_OIDC_CLIENT_CLAUDE_SECRET: string;
		MOZ_DRM_DEVICE: string;
		CLAUDE_CODE_EXECPATH: string;
		PROFILE: string;
		vps_resend_secrets__cloudflare_zone_id: string;
		GIT_BASE: string;
		NIX_LD: string;
		ca_dat_redis_secrets__REDIS_PASSWORD: string;
		aa_sui_mattermost_bots_secrets__MM_ADMIN_USERNAME: string;
		aa_sui_mattermost_bots_secrets__POSTGRES_PASSWORD: string;
		bc_obs_nocodb_secrets__NC_OIDC_CLIENT_SECRET: string;
		XDG_DATA_HOME: string;
		XDG_SEAT: string;
		GIO_EXTRA_MODULES: string;
		ca_dat_backup_gitea_secrets__GITEA__oauth2__JWT_SECRET: string;
		bb_sec_authelia_secrets__AUTHELIA_OIDC_CLIENT_CLAUDE_HAIKU_SECRET: string;
		CRAWLEE_API_TOKEN: string;
		npm_config_npm_version: string;
		ca_dat_backup_bup_secrets__MYSQL_USER: string;
		WG_SURFACE_PUBLIC_KEY: string;
		npm_config_userconfig: string;
		LESS_TERMCAP_me: string;
		XDG_SESSION_TYPE: string;
		FZF_CTRL_T_COMMAND: string;
		XDG_VIDEOS_DIR: string;
		WG_GCP_PROXY_PRIVATE_KEY: string;
		COREPACK_ENABLE_AUTO_PIN: string;
		GCP_PROXY_SSH_KEY_PUB: string;
		bc_obs_matomo_secrets__MYSQL_ROOT_PASSWORD: string;
		ac_fin_quant_lab_light_secrets__POSTGRES_PASSWORD: string;
		ca_dat_backup_bup_secrets__PGPASSWORD: string;
		aa_sui_photoprism_secrets__OCI_S3_SECRET_KEY: string;
		GPG_PRIVATE_KEY_FILE: string;
		bb_sec_authelia_secrets__AUTHELIA_SMTP_PASSWORD: string;
		aa_sui_mattermost_mcp_secrets__MM_ADMIN_USERNAME: string;
		FZF_DEFAULT_OPTS: string;
		INIT_CWD: string;
		ac_fin_crawlee_cloud_secrets__MINIO_PASSWORD: string;
		ca_dat_kg_graph_secrets__SURREAL_ROOT_PASSWORD: string;
		bc_obs_umami_secrets__DB_PASSWORD: string;
		C3_API_KEY: string;
		WIREGUARD_PUBLIC_IP: string;
		OLDPWD: string;
		NODE: string;
		npm_config_cache: string;
		aa_sui_mattermost_bots_secrets__MM_CLAUDE_PASSWORD: string;
		bc_obs_windmill_secrets__SMTP_USERNAME: string;
		ac_fin_quant_lab_full_secrets__POSTGRES_DB: string;
		QT_LOGGING_RULES: string;
		bb_sec_authelia_secrets__AUTHELIA_OIDC_CLIENT_MONITORING_SECRET: string;
		TZDIR: string;
		CAS_API: string;
		ac_fin_quant_lab_full_secrets__POSTGRES_PASSWORD: string;
		XDG_PICTURES_DIR: string;
		aa_sui_photoprism_secrets__MARIADB_USER: string;
		bc_obs_c3_infra_mcp_secrets__MM_BOT_TOKEN: string;
		SSH_S21_RSA_FILE: string;
		aa_sui_mattermost_bots_secrets__MM_ADMIN_EMAIL: string;
		bb_sec_authelia_secrets__AUTHELIA_OIDC_CLIENT_MATTERMOST_CC_SECRET: string;
		aa_sui_tools_stalwart_secrets__DKIM_PRIVATE_KEY_B64: string;
		STARSHIP_SESSION_KEY: string;
		bc_obs_c3_infra_api_secrets__AUTHELIA_OIDC_C3_MCP_SECRET: string;
		OCI_USER_OCID: string;
		NODE_ENV: string;
		OCI_REGION: string;
		AI_AGENT: string;
		NIXPKGS_CONFIG: string;
		ab_mic_vaultwarden_secrets__SMTP_FROM: string;
		WG_OCI_MAIL_PUBLIC_KEY: string;
		CLAUDE_EFFORT: string;
		bc_obs_c3_infra_api_secrets__CF_API_KEY: string;
		aa_sui_mail_mcp_secrets__MAIL_PASSWORD: string;
		LOGNAME: string;
		SHELL: string;
		CLOUDFLARE_EMAIL: string;
		VAULT_DEPLOY_KEY_FILE: string;
		CLAUDE_PID: string;
		bc_obs_nocodb_secrets_powersheets__NC_ADMIN_EMAIL: string;
		AUTHELIA_JWKS_PUBLIC_KEY_FILE: string;
		NIX_XDG_DESKTOP_PORTAL_DIR: string;
		aa_sui_mattermost_mcp_secrets__CLAUDE_MODEL: string;
		XDG_PUBLICSHARE_DIR: string;
		SSH_S21_RSA_PUB: string;
		home_manager__shared_secrets__VAULT_ID_RSA: string;
		bb_sec_caddy_secrets__AUTHELIA_CLI_SECRET: string;
		OPENAI_API_KEY: string;
		npm_command: string;
		ca_dat_backup_bup_secrets__SQLITE_DBS: string;
		bc_obs_nocodb_secrets__NC_ADMIN_EMAIL: string;
		WG_OCI_ANALYTICS_PUBLIC_KEY: string;
		ca_dat_db_agent_secrets__NTFY_URL: string;
		WG_OCI_MAIL_PRIVATE_KEY: string;
		aa_sui_mattermost_bots_secrets__AUTHELIA_OIDC_MATTERMOST_SECRET: string;
		__HM_SESS_VARS_SOURCED: string;
		OCI_API_KEY_FILE: string;
		TPM2_PKCS11_TCTI: string;
		aa_sui_mattermost_bots_secrets__MM_SQLSETTINGS_DATASOURCE: string;
		SPEECHD_CMD: string;
		TF_VAR_cloudflare_api_key: string;
		ba_clo_cloudflare_secrets__cloudflare_api_key: string;
		LESS_TERMCAP_se: string;
		WG_PRIVATE_KEY: string;
		ca_dat_backup_bup_secrets__MYSQL_HOST: string;
		SSH_SURFACE_PRO_ED25519_PUB: string;
		MOZ_X11_EGL: string;
		aa_sui_mattermost_mcp_secrets__MM_URL: string;
		bc_obs_nocodb_secrets_powersheets__POSTGRES_PASSWORD: string;
		bc_obs_dagu_secrets__AUTHELIA_OIDC_DAGU_SECRET: string;
		bb_sec_authelia_secrets__AUTHELIA_STORAGE_ENCRYPTION_KEY: string;
		AUTHELIA_OIDC_CLIENT_ID: string;
		aa_sui_snappymail_secrets__SNAPPYMAIL_ADMIN_PASSWORD: string;
		ANTHROPIC_API_KEY: string;
		GITHUB_TOKEN: string;
		aa_sui_google_workspace_mcp_secrets__GOOGLE_SERVICE_ACCOUNT_KEY: string;
		NIX_GSETTINGS_OVERRIDES_DIR: string;
		aa_sui_photoprism_secrets__OCI_S3_ACCESS_KEY: string;
		bc_obs_c3_infra_mcp_secrets__C3_API_KEY: string;
		bc_obs_c3_services_mcp_secrets__DAGU_BASIC_AUTH: string;
		PWD: string;
		LESS_TERMCAP_so: string;
		FZF_ALT_C_OPTS: string;
		TPM2TOOLS_TCTI: string;
		RTK_ENABLED: string;
		ab_mic_vaultwarden_secrets__ADMIN_TOKEN: string;
		LESSKEYIN_SYSTEM: string;
		npm_config_local_prefix: string;
		ad_agi_rig_agentic_sonn_14bq8_secrets__MM_BOT_TOKEN: string;
		GCP_SERVICE_ACCOUNT_KEY_FILE: string;
		_: string;
		bc_obs_c3_infra_mcp_secrets__DAGU_PASSWORD: string;
		RESEND_API_KEY: string;
		FZF_CTRL_R_OPTS: string;
		FZF_DEFAULT_COMMAND: string;
		MOZ_WEBRENDER: string;
		bb_sec_caddy_secrets__NTFY_ADMIN_AUTH: string;
		WG_TERMUX_PRIVATE_KEY: string;
		TF_PLUGIN_CACHE_DIR: string;
		ab_mic_vaultwarden_secrets__SMTP_PASSWORD: string;
		ab_mic_vaultwarden_secrets__SMTP_PORT: string;
		bc_obs_dagu_secrets__BORG_PASSPHRASE: string;
		CF_DOMAIN: string;
		bc_obs_c3_infra_api_secrets__C3_API_KEY: string;
		CLAUDE_SUPERSET_MODE: string;
		ac_fin_crawlee_cloud_secrets__ADMIN_PASSWORD: string;
		aa_sui_tools_stalwart_secrets__ADMIN_PASSWORD: string;
		QTWEBKIT_PLUGIN_PATH: string;
		home_manager__shared_secrets__SURFACE_NIXOS_PUB: string;
		OCI_TENANCY_OCID: string;
		ca_dat_db_agent_secrets__BUP_REMOTE: string;
		aa_sui_mattermost_mcp_secrets__MM_TEAM_ID: string;
		LOCALE_ARCHIVE: string;
		NOCODB_API_TOKEN: string;
		NoDefaultCurrentDirectoryInExePath: string;
		WG_LOCAL_IP: string;
		aa_sui_mail_mcp_secrets__STALWART_ADMIN_PASSWORD: string;
		ca_dat_backup_bup_secrets__POSTGRES_DBS: string;
		INFOPATH: string;
		GTK2_RC_FILES: string;
		bc_obs_c3_infra_api_secrets__DAGU_USERNAME: string;
		ad_agi_rig_agentic_sonn_14bq8_secrets__SURREAL_URL: string;
		bb_sec_authelia_secrets__AUTHELIA_OIDC_CLIENT_C3_MCP_SECRET: string;
		bb_sec_authelia_secrets__AUTHELIA_OIDC_CLIENT_NOCODB_SECRET: string;
		bc_obs_ntfy_secrets__NTFY_USER_PASSWORD: string;
		WG_OCI_ANALYTICS_PRIVATE_KEY: string;
		XDG_CACHE_HOME: string;
		bc_obs_matomo_secrets__MATOMO_DB_PASSWORD: string;
		HOME: string;
		GCP_T4_SSH_KEY_FILE: string;
		SSH_ASKPASS: string;
		LANG: string;
		TMUX_TMPDIR: string;
		ac_fin_crawlee_cloud_secrets__POSTGRES_PASSWORD: string;
		XDG_DESKTOP_DIR: string;
		aa_sui_mattermost_mcp_secrets__MM_CLAUDE_PASSWORD: string;
		aa_sui_tools_stalwart_secrets__AWS_RELAYPASSWORD: string;
		KPACKAGE_DEP_RESOLVERS_PATH: string;
		bc_obs_c3_infra_mcp_secrets__CF_API_EMAIL: string;
		bc_obs_umami_secrets__ADMIN_USERNAME: string;
		ca_dat_backup_bup_secrets__PGUSER: string;
		OCI_S3_BUCKET: string;
		bc_obs_lgtm_secrets__GF_SECURITY_ADMIN_PASSWORD: string;
		bc_obs_c3_infra_api_secrets__MM_BOT_TOKEN: string;
		bc_obs_windmill_secrets__SMTP_PASSWORD: string;
		STARSHIP_SHELL: string;
		LESS: string;
		home_manager__shared_secrets__VAULT_ID_RSA_PUB: string;
		OCI_S3_SECRET_KEY: string;
		vps_resend_secrets__cloudflare_api_token: string;
		bc_obs_dagu_secrets__DAGU_USERNAME: string;
		OCI_SSH_KEY_FILE: string;
		WG_HUB_IP: string;
		CLAUDE_CODE_ENTRYPOINT: string;
		NOCODB_XC_TOKEN: string;
		SSH_SURFACE_PRO_ED25519_FILE: string;
		bb_sec_caddy_secrets__CF_API_TOKEN: string;
		ac_fin_quant_lab_light_secrets__POSTGRES_USER: string;
		CLAUDE_CODE_SESSION_ID: string;
		aa_sui_code_server_secrets__sudo_password: string;
		CAS_TMUX: string;
		XDG_DOWNLOAD_DIR: string;
		bc_obs_c3_infra_mcp_secrets__RESEND_API_KEY: string;
		HM_PROFILE: string;
		ac_fin_crawlee_cloud_secrets__POSTGRES_DB: string;
		home_manager__shared_secrets__GCP_COMPUTE_ENGINE: string;
		bc_obs_nocodb_secrets_powersheets__NC_ADMIN_PASSWORD: string;
		USER: string;
		aa_sui_mattermost_bots_secrets__MM_ADMIN_PASSWORD: string;
		CF_API_KEY: string;
		XDG_CONFIG_DIRS: string;
		XDG_MUSIC_DIR: string;
		NOCODB_URL: string;
		home_manager__shared_secrets__SURFACE_DEPLOY_PUB: string;
		NIX_LD_LIBRARY_PATH: string;
		aa_sui_tools_stalwart_secrets__CF_DNS_API_TOKEN: string;
		AUTHELIA_OIDC_CREDENTIALS_DIR: string;
		bb_sec_authelia_secrets__AUTHELIA_USER_DIEGO_HASH: string;
		XDG_TEMPLATES_DIR: string;
		aa_sui_tools_smtp_proxy_secrets__API_KEY: string;
		WG_GHA_RUNNER_PUBLIC_KEY: string;
		OCI_S3_ENDPOINT: string;
		ANTHROPIC_BASE_URL: string;
		bc_obs_nocodb_secrets__POSTGRES_PASSWORD: string;
		ac_fin_crawlee_cloud_secrets__JWT_SECRET: string;
		aa_sui_tools_stalwart_secrets__AWS_RELAYUSER: string;
		OCI_S3_REGION: string;
		vps_resend_secrets__resend_api_key: string;
		PIP_CACHE_DIR: string;
		CAVEMAN_ENABLED: string;
		home_manager__shared_secrets__ID_ED25519: string;
		bc_obs_nocodb_secrets__NC_ADMIN_PASSWORD: string;
		bc_obs_windmill_secrets__OAUTH_CLIENT_SECRET: string;
		bc_obs_matomo_secrets__MATOMO_DB_USER: string;
		NIX_PROFILES: string;
		MOZ_DISABLE_RDD_SANDBOX: string;
		aa_sui_mail_mcp_secrets__STALWART_ADMIN_URL: string;
		SHLVL: string;
		bc_obs_c3_services_mcp_secrets__STALWART_ADMIN_PASSWORD: string;
		QT_PLUGIN_PATH: string;
		PAGER: string;
		npm_lifecycle_script: string;
		SOPS_AGE_KEY_FILE: string;
		aa_sui_tools_stalwart_secrets__OCI_RELAYPASSWORD: string;
		bc_obs_c3_infra_mcp_secrets__AUTHELIA_OIDC_C3_MCP_SECRET: string;
		CLAUDECODE: string;
		bb_sec_authelia_secrets__AUTHELIA_OIDC_CLIENT_MATTERMOST_SECRET: string;
		NIX_USER_PROFILE_DIR: string;
		ca_dat_backup_borg_secrets__BORG_PASSPHRASE: string;
		ac_fin_crawlee_cloud_secrets__ADMIN_EMAIL: string;
		XDG_SESSION_CLASS: string;
		AUTHELIA_JWKS_PRIVATE_KEY_FILE: string;
		aa_sui_radicale_secrets__RADICALE_USERS: string;
		CLOUDFLARE_API_KEY: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * This module provides access to environment variables set _dynamically_ at runtime and that are _publicly_ accessible.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Dynamic environment variables are defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`.
 * 
 * **_Public_ access:**
 * 
 * - This module _can_ be imported into client-side code
 * - **Only** variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`) are included
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 * 
 * > [!NOTE] To get correct types, environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * >
 * > ```env
 * > MY_FEATURE_FLAG=
 * > ```
 * >
 * > You can override `.env` values from the command line like so:
 * >
 * > ```sh
 * > MY_FEATURE_FLAG="enabled" npm run dev
 * > ```
 * 
 * For example, given the following runtime environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://example.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.ENVIRONMENT); // => undefined, not public
 * console.log(env.PUBLIC_BASE_URL); // => "http://example.com"
 * ```
 * 
 * ```
 * 
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
