
# MADU Client

Ce repo contient la partie front du projet MADU, nous utilisons React avec TypeScript. Vous pouvez trouver [ici la partie server](https://github.com/PierreTurnbull/heticmadu_api)) , [ici l'infra](https://github.com/PierreTurnbull/heticmadu) et [les maquettes](https://www.figma.com/file/6aBGYH8gCnCshGk8tuRqIP/Back-office) sur Figma.

## Équipes

Nous avons travaillé en équipe pour le développement du back office, voici la composition : 

 - [Dorian Taing](https://github.com/doriantaing)
 - [Théo Larue](https://github.com/Theo-LARUE)
 - [Salah Lamkadem](https://github.com/ikonx)

## Installation

Nous avons utilisé npm pour la gestion des packages, pour lancer le projet suivez ces commandes. Le back office require le port 3000, si le port n'est pas libre pour l'application vous en serez informé sur votre terminal.

```bash
git clone https://github.com/ikonx/heticmadu_client
cd heticmadu_client && npm i && npm start
```


## Technos, lib et framework

Pour la réalisation de ce back office nous avons eu besoin de mettre en place un univers à l'aide de lib et framework.

**[ReactJs](https://github.com/facebook/react)** : Nous avons choisis React car nous étions familier avec et que ce framework correspond à nos besoins.

**[Create-react-app](https://github.com/facebook/create-react-app)** : Ca nous a permit de gagner du temps en générant automatiquement un squelette applicatif et de masquer la complexité potentielle de configuration des briques techniques associées : gestion de JavaScript (ES2015+...), bundling de notre application (avec Webpack), serveur de développement, génération de fichiers de production optimisés, etc. De plus nous pouvons l'utilisé avec TypeScript.

**[TypeScript](https://github.com/facebook/react)** :  TypeScript nous a permit de typer notre application React pour réduire le nombre d'erreur possible dans le code, aide IDE pour l'auto-complétion, améliorer la communication avec le back (définitions des models et dto) et gagner en cohérence et lisibilité dans le code.

**[FramerMotion](https://www.framer.com/api/motion/)** : Cette lib permet l'animation d'éléments dans le dom, nous l'avons choisit pour sa complémentarité avec React et sa facilité à utiliser.

**[MaterialUi](https://material-ui.com/)** : Toujours dans l'optique de gagner du temps, nous avons utilisé MaterialUi qui est un ensemble de composant qu'on peut ré-utiliser dans le BO et re-styliser avec StyledComponents. Évidement MaterialUi est "compatible" avec TypeScript.

**[Styled-components](https://styled-components.com/)** : Styled-components permet de simplifier la ré-écriture du style dans le BO, nous l'avons choisit pour sa simplicité à utiliser et rejoins la philosophie de React.

**[prettier](https://github.com/ikonx/heticmadu_client/blob/master/.prettierrc.js)** : Afin de garder une même indentation nous avons utilisé un fichier config pour le projet. 

## Approche

![atomic design](https://user-images.githubusercontent.com/4838076/33235048-d083dca6-d217-11e7-9aea-9a5ef5ae6fe7.png)
Nous avons utilisé l'[atomic design](https://github.com/danilowoz/react-atomic-design) qui nous permet d'avoir une application flexible et facilement modulable. Ca nous permet également, d'implémenter de nouvelle fonctionnalité facilement en réutilisant les composants déjà intégrés dans un scénario différent.
## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
