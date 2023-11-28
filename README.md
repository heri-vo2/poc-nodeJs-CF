# poc-nodeJs-CF

Créer et tester votre fonction localement
Pour tester votre fonction localement avant de la déployer, vous devez installer le framework des fonctions localement, puis exécuter la fonction.

Exécutez la commande suivante à partir du répertoire inspections pour installer le framework des fonctions sur votre ordinateur local:


        npm install @google-cloud/functions-framework
Exécutez la commande suivante à partir du répertoire inspections pour exécuter votre fonction localement:


        npx @google-cloud/functions-framework --target=helloGET
Testez votre fonction en accédant à https://localhost:8080/inspections/{ref} dans un navigateur ou en exécutant curl localhost:8080 à partir d'une autre fenêtre.

Pour en savoir plus, consultez la section Envoyer des requêtes aux fonctions locales.

La fonction renvoie l'inspection au ref associé.

Déployer la fonction
Pour déployer votre fonction, exécutez la commande gcloud functions deploy dans le répertoire helloworld:


        gcloud functions deploy nomDeLaFonction \
          --gen2 \
          --runtime=nodejs20 \
          --region=REGION \
          --source=. \
          --entry-point=fetchByRef \
          --trigger-http \
          --allow-unauthenticated
Remplacez REGION par le nom de la région Google Cloud dans laquelle vous souhaitez déployer votre fonction (par exemple, us-west1).

Cette opération déploie votre exemple de fonction avec l'environnement d'exécution nodejs20 dans la région de votre choix.

L'option facultative --allow-unauthenticated vous permet d'accéder à votre fonction sans authentification.

