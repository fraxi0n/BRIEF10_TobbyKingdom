DROP TABLE IF EXISTS racer CASCADE;
DROP TABLE IF EXISTS contient_produit CASCADE;
DROP TABLE IF EXISTS product CASCADE;
DROP TABLE IF EXISTS product_category CASCADE;
DROP TABLE IF EXISTS user_order CASCADE;
DROP TABLE IF EXISTS animals_categories CASCADE;

CREATE TABLE animals_categories(
   id_animals_categorie SERIAL,
   name VARCHAR(50) ,
   PRIMARY KEY(id_animals_categorie)
);

CREATE TABLE user_order(
   id_order SERIAL,
   mail VARCHAR(50)  NOT NULL,
   last_name VARCHAR(50)  NOT NULL,
   first_name VARCHAR(50)  NOT NULL,
   PRIMARY KEY(id_order)
);

CREATE TABLE product_category(
   id_category_product SERIAL,
   name VARCHAR(50) ,
   PRIMARY KEY(id_category_product)
);

CREATE TABLE product(
   id_product SERIAL,
   name VARCHAR(50)  NOT NULL,
   price NUMERIC(15,2)   NOT NULL,
   picture_path VARCHAR(50) ,
   description VARCHAR(500) ,
   breed_name VARCHAR(50) ,
   stock INTEGER NOT NULL,
   id_category_product INTEGER NOT NULL,
   PRIMARY KEY(id_product),
   FOREIGN KEY(id_category_product) REFERENCES product_category(id_category_product)
);

CREATE TABLE contient_produit(
   id_order INTEGER,
   id_product INTEGER,
   quantity INTEGER NOT NULL,
   PRIMARY KEY(id_order, id_product),
   FOREIGN KEY(id_order) REFERENCES user_order(id_order),
   FOREIGN KEY(id_product) REFERENCES product(id_product)
);

CREATE TABLE racer(
   id_animals_categorie INTEGER,
   id_product INTEGER,
   PRIMARY KEY(id_animals_categorie, id_product),
   FOREIGN KEY(id_animals_categorie) REFERENCES animals_categories(id_animals_categorie),
   FOREIGN KEY(id_product) REFERENCES product(id_product)
);



INSERT INTO animals_categories (name) VALUES
 ('Chats'),
 ('Chiens'),
 ('Poissons');

 INSERT INTO product_category (name) VALUES
('Nourriture'),
('Accessoires'),
('animal');



INSERT INTO product (name, price, picture_path, description, breed_name, stock, id_category_product) VALUES
-- 🐱 Chats
('Croquettes pour chat adulte', 19.99, 'images/croquettes_chat.jpg', 'Croquettes équilibrées riches en protéines et taurine pour chats adultes.', 'Chat européen', 120, 1),
('Jouet souris en peluche', 4.50, 'images/jouet_chat.jpg', 'Petite souris douce avec herbe à chat intégrée pour stimuler le jeu.', NULL, 250, 2),
('Chaton européen', 120.00, 'images/chaton.jpg', 'Chaton joueur et affectueux, vacciné et vermifugé.', 'Chat européen', 10, 3),

-- 🐶 Chiens
('Croquettes premium pour chien', 34.99, 'images/croquettes_chien.jpg', 'Alimentation complète pour chiens actifs de moyenne taille.', 'Berger australien', 90, 1),
('Collier réglable en nylon', 8.90, 'images/collier_chien.jpg', 'Collier solide et confortable avec boucle en acier inoxydable.', NULL, 180, 2),
('Chiot labrador', 250.00, 'images/chiot.jpg', 'Chiot labrador sociable et en pleine santé, prêt à être adopté.', 'Labrador Retriever', 5, 3),

-- 🐠 Poissons
('Flocons pour poissons tropicaux', 6.50, 'images/nourriture_poisson.jpg', 'Mélange équilibré pour poissons tropicaux d’eau douce.', 'Poisson tropical', 200, 1),
('Aquarium 60L', 79.90, 'images/aquarium_60l.jpg', 'Aquarium en verre avec couvercle et pompe intégrée, idéal pour débutants.', NULL, 30, 2),
('Poisson rouge', 5.00, 'images/poisson_rouge.jpg', 'Poisson rouge vif, idéal pour aquarium domestique.', 'Carassius auratus', 50, 3);

;
 
INSERT INTO user_order (mail, last_name, first_name) VALUES
('jean.dupont@example.com', 'Dupont', 'Jean'),
('marie.leroy@example.com', 'Leroy', 'Marie'),
('lucas.martin@example.com', 'Martin', 'Lucas'),
('sarah.moreau@example.com', 'Moreau', 'Sarah'),
('thomas.garcia@example.com', 'Garcia', 'Thomas'),
('emma.bernard@example.com', 'Bernard', 'Emma'),
('nicolas.robin@example.com', 'Robin', 'Nicolas'),
('julie.mercier@example.com', 'Mercier', 'Julie'),
('antoine.petit@example.com', 'Petit', 'Antoine'),
('lea.durand@example.com', 'Durand', 'Léa');


INSERT INTO contient_produit (id_order, id_product, quantity) VALUES
-- Commande 1 : un client a commandé de la nourriture et un jouet pour chat
(1, 1, 2),
(1, 2, 1),

-- Commande 2 : un autre client a acheté un chiot et son collier
(2, 6, 1),
(2, 5, 1),

-- Commande 3 : nourriture et aquarium pour poisson
(3, 7, 3),
(3, 8, 1),

-- Commande 4 : croquettes pour chien seulement
(4, 4, 2),

-- Commande 5 : poisson rouge et flocons
(5, 9, 2),
(5, 7, 1);



INSERT INTO racer (id_animals_categorie, id_product) VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 4),
(2, 5),
(2, 6),
(3, 7),
(3, 8),
(3, 9);

SELECT
    u.id_order,
    u.first_name || ' ' || u.last_name AS client_name,
    u.mail AS client_mail,

    p.id_product,
    p.name AS product_name,
    p.price,
    p.stock,
    p.breed_name,
    p.description,
    p.picture_path,

    pc.name AS product_category,
    ac.name AS animal_category,
    cp.quantity

FROM user_order u
JOIN contient_produit cp
    ON u.id_order = cp.id_order
JOIN product p
    ON cp.id_product = p.id_product
JOIN product_category pc
    ON p.id_category_product = pc.id_category_product
JOIN racer r
    ON p.id_product = r.id_product
JOIN animals_categories ac
    ON r.id_animals_categorie = ac.id_animals_categorie

ORDER BY u.id_order, p.id_product;


