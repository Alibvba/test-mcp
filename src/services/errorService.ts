import { Octokit } from 'octokit';

// Configuration
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN || '';
const GITHUB_OWNER = 'Alibvba';
const GITHUB_REPO = 'test-mcp';

// Initialisation de l'API GitHub
const octokit = new Octokit({
  auth: GITHUB_TOKEN,
});

/**
 * Service pour gérer les erreurs et les envoyer à GitHub Issues
 */
export const errorService = {
  /**
   * Envoie une erreur à GitHub Issues
   * @param error L'erreur à envoyer
   * @param page La page où l'erreur s'est produite
   */
  async reportError(error: Error | string, page: string = window.location.href): Promise<void> {
    try {
      // Si le token GitHub n'est pas configuré, on ne fait rien
      if (!GITHUB_TOKEN) {
        console.warn('GitHub token not configured. Error reporting disabled.');
        return;
      }

      // Préparation des données de l'erreur
      const errorMessage = typeof error === 'string' ? error : error.message;
      const errorStack = typeof error === 'string' ? '' : error.stack || '';
      const timestamp = new Date().toISOString();

      // Création de l'issue sur GitHub
      await octokit.rest.issues.create({
        owner: GITHUB_OWNER,
        repo: GITHUB_REPO,
        title: `[Error] ${errorMessage.substring(0, 100)}${errorMessage.length > 100 ? '...' : ''}`,
        body: `
## Error Details
- **Message**: ${errorMessage}
- **Page**: ${page}
- **Timestamp**: ${timestamp}
- **User Agent**: ${navigator.userAgent}

## Stack Trace
\`\`\`
${errorStack}
\`\`\`
        `,
        labels: ['bug', 'error-report'],
      });

      console.log('Error reported to GitHub Issues');
    } catch (reportError) {
      console.error('Failed to report error to GitHub Issues:', reportError);
    }
  },

  /**
   * Initialise le service de détection d'erreurs
   */
  init(): void {
    // Capture des erreurs non gérées
    window.addEventListener('error', (event) => {
      this.reportError(event.error || event.message);
    });

    // Capture des rejets de promesses non gérés
    window.addEventListener('unhandledrejection', (event) => {
      this.reportError(event.reason);
    });

    // Capture des erreurs de console
    const originalConsoleError = console.error;
    console.error = (...args) => {
      // Appel de la fonction originale
      originalConsoleError.apply(console, args);

      // Envoi de l'erreur à GitHub Issues
      const errorMessage = args.map(arg => 
        typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
      ).join(' ');
      
      this.reportError(errorMessage);
    };

    console.log('Error reporting service initialized');
  }
}; 