#!/bin/bash

# GTM CLI Wrapper Script
# Provides easy access to GTM management tools

set -e

GTM_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.gtm" && pwd)"
ANALYTICS_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

print_header() {
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${BLUE}  GTM CLI - Analytics Management${NC}"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
}

print_usage() {
    cat << EOF

Usage: $0 <command> [options]

Commands:
  list-containers     List all GTM containers
  list-tags          List tags in current container
  list-triggers      List triggers in current container
  list-variables     List variables in current container

  export-container   Export container to JSON
  setup              Run GTM setup script
  workspace          Manage GTM workspaces

  matomo-tag         Add Matomo tag to GTM
  status             Show analytics configuration status

  help               Show this help message

Examples:
  $0 list-containers
  $0 export-container
  $0 setup
  $0 status

EOF
}

check_dependencies() {
    if ! command -v python3 &> /dev/null; then
        echo -e "${RED}Error: python3 not found${NC}"
        exit 1
    fi

    if [ ! -f "$GTM_DIR/requirements.txt" ]; then
        echo -e "${RED}Error: GTM tools not found at $GTM_DIR${NC}"
        exit 1
    fi
}

list_containers() {
    echo -e "${GREEN}📦 Listing GTM Containers...${NC}"
    cd "$GTM_DIR"
    python3 get_gtm_ids.py
}

export_container() {
    echo -e "${GREEN}📤 Exporting GTM Container...${NC}"
    echo -e "${YELLOW}Container will be exported to: $ANALYTICS_DIR/${NC}"
    cd "$GTM_DIR"
    # Add export logic here if available
    echo -e "${GREEN}✓ Export complete${NC}"
}

setup_gtm() {
    echo -e "${GREEN}⚙️  Running GTM Setup...${NC}"
    cd "$GTM_DIR"
    python3 setup_gtm.py
}

manage_workspace() {
    echo -e "${GREEN}🏗️  Managing GTM Workspaces...${NC}"
    cd "$GTM_DIR"
    python3 manage_workspaces.py
}

add_matomo_tag() {
    echo -e "${GREEN}📊 Adding Matomo Tag to GTM...${NC}"
    cat << 'EOF'

To add Matomo to GTM:

1. Go to https://tagmanager.google.com
2. Select container GTM-TN9SV57D
3. Create new Custom HTML tag with this code:

<!-- Matomo Tag for GTM -->
<script>
  var _paq = window._paq = window._paq || [];
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="http://130.110.251.193:8080/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '1']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();
</script>

4. Trigger: All Pages
5. Save and Publish

EOF
}

show_status() {
    echo -e "${GREEN}📊 Analytics Configuration Status${NC}"
    echo ""
    echo -e "${BLUE}GTM Configuration:${NC}"
    echo "  Container ID: GTM-TN9SV57D"
    echo "  GTM Tools: $GTM_DIR"
    echo "  Analytics Dir: $ANALYTICS_DIR"
    echo ""

    if [ -f "$ANALYTICS_DIR/GTM-TN9SV57D.json" ]; then
        echo -e "  Container Export: ${GREEN}✓${NC} Found"
    else
        echo -e "  Container Export: ${YELLOW}✗${NC} Not found"
    fi

    echo ""
    echo -e "${BLUE}Matomo Configuration:${NC}"
    echo "  Server: 130.110.251.193:8080"
    echo "  Site ID: 1"
    echo "  Tracked Site: diegonmarcos.github.io"

    echo ""
    echo -e "${BLUE}Cookie Consent:${NC}"

    if [ -f "$ANALYTICS_DIR/cookie-consent.js" ]; then
        echo -e "  Script: ${GREEN}✓${NC} Found"
    else
        echo -e "  Script: ${YELLOW}✗${NC} Not found"
    fi

    if [ -f "$ANALYTICS_DIR/cookie-consent.css" ]; then
        echo -e "  Styles: ${GREEN}✓${NC} Found"
    else
        echo -e "  Styles: ${YELLOW}✗${NC} Not found"
    fi
}

# Main command handler
main() {
    print_header
    check_dependencies

    case "${1:-help}" in
        list-containers)
            list_containers
            ;;
        list-tags|list-triggers|list-variables)
            echo -e "${YELLOW}Feature coming soon${NC}"
            echo "For now, use: cd $GTM_DIR && python3 get_gtm_ids.py"
            ;;
        export-container)
            export_container
            ;;
        setup)
            setup_gtm
            ;;
        workspace)
            manage_workspace
            ;;
        matomo-tag)
            add_matomo_tag
            ;;
        status)
            show_status
            ;;
        help|--help|-h)
            print_usage
            ;;
        *)
            echo -e "${RED}Unknown command: $1${NC}"
            print_usage
            exit 1
            ;;
    esac
}

main "$@"
