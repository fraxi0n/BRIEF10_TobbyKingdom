Users Story Laurence

### Le client final

le client a besoin de :

. 1 page d'accueil
. 1 page de catalogue categories
. 1 page par categories
. 1 Page de détail dʼun produits
. 1 Page du panier
. 1 page validation de commande /paiement
<!-- . 1 page confirmation de commande -->
<!-- 1 Système dʼauthentification -->


- arriver sur une page d'accueil, qui contient : 
présentation l'activité du site

- lire/voir tous les produits (browse)

- lire/voir toutes les catégories de produit

- selectionner une catégorie de produits
- lire/voir tous les produits d'un cathégorie
- filtrer par type de produits

- selectionner un produit
- lire/voir le détail d'un produit

<!-- Promos :
- lire voir la list des produits en promotion
- selectionner un produit en promotion -->


- ajouter un produit au panier (= 1 commande)

- lire/voir le contenu de son panier (commande)
- valider sa commande
- (préciser les adresses de livraison + facturation)
- (payer sa commande)

- (avoir une confirmation de commande)


### =========================================================================
### L'Admin

- voir la liste de tous les produits
- voir toutes les propriétés de chacun des produits : 
 . name 
 . price
 . picture_path
 . description
 . breed_name
 . stock
 ...

- créer un nouvel enregistrement produit
- modifier un enregistrement produit
- suprimer un enregistrement produit => Verifier la logique métier : pas possible de suprimer un produit qui a déjà été utilisé

- créer un nouvel enregistrement categorie animaux
- modifier un enregistrement categorie animaux
- suprimer un enregistrement pcategorie animaux 

- créer un nouvel enregistrement categorie produit
- modifier un enregistrement categorie produit
- suprimer un enregistrement pcategorie produit 

- créer un nouvel enregistrement promo
- modifier un enregistrement promo
- suprimer un enregistrement promo 



- voir les commandes Clients

- voir l'état de stock
- mettre à jour/modifier l'état de stock


- 


### =========================================================================
### Le dev

# FRONT-END

** créer un page d'accueil :

. Head

. Header : 
 _ 1 bouton catégorie Chien
 _ 1 bouton catégorie Chat
 _ 1 bouton catégorie Poisson
 _ 1 bouton Promotions
 _ 1 bouton Panier

 _ 1 banner

. Body :
 _ 1 container avec 3 cards
 . 1 card Chien
 . 1 card Chat
 . 1 card poisson

 _ 1 container/caroussel ? Promo

.


** créer une view catégorie : 
. chien
. chat
. poisson
. promotions

** créer une view list des produits par catégorie

** créer une view détail d'un produit

** créer une view panier/commande

** créer une view confirmation de commande

** composants
. banner
. bouton
. container
. caroussel
. fetch
. 
. views


# BACK-END

MVC :
routes
controllers
repo/models

Datas
SQL
LDD
fakedatas


