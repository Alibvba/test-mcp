# test-mcp

Bonjour depuis Cursor 👋

Ce dépôt a été créé avec l'aide de Cursor, l'IDE du futur !

## Fonctionnalités

Ce projet inclut plusieurs fonctionnalités avancées :

### 1. Intégration Continue (CI)

Le projet utilise GitHub Actions pour l'intégration continue. À chaque push sur les branches `main` ou `master`, les tests sont exécutés automatiquement.

### 2. Tests Unitaires

Le projet utilise Vitest et React Testing Library pour les tests unitaires. Pour exécuter les tests :

```bash
# Exécuter les tests en mode watch
npm test

# Exécuter les tests avec couverture
npm run test:coverage

# Exécuter les tests avec l'interface utilisateur
npm run test:ui
```

### 3. Historique de Développement Automatique

Cursor est configuré pour commenter automatiquement chaque étape du développement. Les fichiers et dossiers à ignorer sont listés dans le fichier `.cursorignore`.

### 4. Détection d'Erreurs Console et GitHub Issues

Le projet inclut un service qui détecte les erreurs console et les envoie automatiquement à GitHub Issues. Pour configurer cette fonctionnalité :

1. Créez un token GitHub avec les permissions `repo` sur [https://github.com/settings/tokens](https://github.com/settings/tokens)
2. Copiez le fichier `.env.example` en `.env` et ajoutez votre token GitHub :
   ```
   VITE_GITHUB_TOKEN=your_github_token_here
   ```

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
