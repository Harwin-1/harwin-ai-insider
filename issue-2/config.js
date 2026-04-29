// =====================================================================
// Power Automate webhook configuration for Harwin AI Insider rating capture
// =====================================================================
// This URL is consumed by issue-N/index.html via:
//   <script src="config.js"></script>
//
// To regenerate (e.g. if compromised):
//   1. https://make.powerautomate.com -> "Harwin AI Insider - Capture Rating"
//   2. Click the manual trigger -> copy the HTTP POST URL
//   3. Paste between the quotes below and commit
//
// Treat this URL as a credential. Anyone with it can write rows to
// the Ratings Log Excel file on OneDrive.
// =====================================================================

const POWER_AUTOMATE_URL = "https://defaultea9f61bfe57045f1b3714e28698005.c2.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/af76d0ee770d4bd6ab7d285cc367fdbc/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=ZCAZ2GpHVlZRVn3TC9-XNrkAehvDymemIN-qqW4RMG4";
