TRUNCATE post_items RESTART IDENTITY CASCADE;
TRUNCATE clothing_items RESTART IDENTITY CASCADE;
TRUNCATE style_posts RESTART IDENTITY CASCADE;

CREATE TABLE style_posts (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username TEXT NOT NULL,
  image_url TEXT,
  caption TEXT
);

CREATE TABLE clothing_items (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  post_id INT REFERENCES style_posts(id),
  brand TEXT NOT NULL,
  price INT,
  link TEXT
);

CREATE TABLE post_items (
  post_id INT REFERENCES style_posts(id),
  clothing_item_id INT REFERENCES clothing_items(id),
  PRIMARY KEY (post_id, clothing_item_id)
);

INSERT INTO style_posts (username, image_url, caption) values
('miss_scarlett', 'https://cdn.mos.cms.futurecdn.net/2VC8jyz2bCiHPSjyGHbfbU.jpg', 'Fall inspo'),
('shaggy.baggy', 'https://cdn.mos.cms.futurecdn.net/rRR7vmpHK29oky3LT9XhsJ.jpg', 'Are you ready all-denim szn?'),
('missfinku', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX8G8sD-pa8WRfCGN64gDsOjnNaIh-tXxP4Q&s', 'Cosy Sunday'),
('coco.tay', 'https://cdn-img.prettylittlething.com/e/5/9/d/e59ddec885d4215cb02b974b3249bf307ea7b617_CNO5175_1_black_slinky_extreme_plunge_bodycon_maxi_dress.jpg', 'The essential LBD'),
('jalitali', 'https://i5.walmartimages.com/seo/Turilly-Women-2-Piece-Tracksuit-Set-Women-Solid-Color-Hooded-Tracksuits-Casual-Pants-Sweatsuit-Winter-Long-Sleeve-Activewear-Outfits-Gray-M_fd01934e-cd14-450b-b09e-a02c81c2bac7.35414d0241c824d821bc839a575f92e4.jpeg', 'Such a lovely set x');

INSERT INTO clothing_items (brand, price, link) values
('ASOS', 60, 'https://www.asos.com/mango/mango-croc-detail-leather-look-jacket-co-ord-in-burgundy/prd/207284892'),
('Next', 35, 'https://www.next.co.uk/style/su481637/aj0439'),
('New Look', 16, 'https://www.newlook.com/uk/womens/footwear/shoes/black-slingback-kitten-heel-court-shoes/p/902862801'),
('Very', 25, 'https://www.very.co.uk/v-by-very-button-detail-denim-co-ord-top-dark-wash/1601180090.prd'),
('ASOS', 20, 'https://www.asos.com/asos-design/asos-design-ultimate-oversized-brushback-sweatshirt-in-grey-marl/prd/208558756?affid=30309&_Cj0KCQiAhtvMBhDBARIsAL26pjHVKR2J5XDqne0jWIqtFrHvUYXjfYNvWovGuGSjZkOvrS6JQYghVUMaAmZrEALw_wcB&channelref=product+search&ppcadref=22699514088||&utm_source=google&utm_medium=cpc&utm_campaign=22699514088&utm_content=&utm_term=&gclsrc=aw.ds&gad_source=1&gad_campaignid=22699518630&gbraid=0AAAAADqFjODDNoSgjNk_VpJiT6DVHFt4f&gclid=Cj0KCQiAhtvMBhDBARIsAL26pjHVKR2J5XDqne0jWIqtFrHvUYXjfYNvWovGuGSjZkOvrS6JQYghVUMaAmZrEALw_wcB'),
('Gymshark', 45, 'https://uk.gymshark.com/products/gymshark-cosy-luxe-cuffed-joggers-pants-grey-aw25?gclsrc=aw.ds&gad_source=1&gad_campaignid=18700514044&gbraid=0AAAAADMZ0irbltKvwWQ4NVEkxkAAWT7bg&gclid=Cj0KCQiAhtvMBhDBARIsAL26pjEap-p6pdHzdHJo-ushFAgAAYPJAQkec0EhgDOmvT09YfAMer3tayIaAjpFEALw_wcB'),
('Fashionnova', 29, 'https://www.fashionnova.com/products/keke-ruched-deep-v-midi-dress-black?variant=39286767485052&currency=GBP&utm_source=google&utm_medium=cpc&utm_id=20463356345&utm_campaign=GBR_NB_PMAX_W_ALL&glid=Cj0KCQiAhtvMBhDBARIsAL26pjFxmUvtwwDUh-WYl-OPOFl5VveZAF3LJoAHKiiHXUY5OjYBBgrDtg4aAlZiEALw_wcB&nbt=nb%3Aadwords%3Ax%3A20463356345%3A%3A&gad_source=1&gad_campaignid=20467335988&gbraid=0AAAAADmA10T01aA3ZF3QrZVNkoJEP6bM7&gclid=Cj0KCQiAhtvMBhDBARIsAL26pjFxmUvtwwDUh-WYl-OPOFl5VveZAF3LJoAHKiiHXUY5OjYBBgrDtg4aAlZiEALw_wcB'),
('Gymshark', 50, 'https://uk.gymshark.com/products/gymshark-cosy-luxe-zip-through-hoodie-pullovers-grey-aw25?gclsrc=aw.ds&gad_source=1&gad_campaignid=18700514044&gbraid=0AAAAADMZ0irbltKvwWQ4NVEkxkAAWT7bg&gclid=Cj0KCQiAhtvMBhDBARIsAL26pjH61SOYWT24qkhg6X1GwOkSN7ZeSTWA27trVvJvmHSnC3KJF-LzTeoaAlDnEALw_wcB');

INSERT INTO post_items (post_id, clothing_item_id) values
(1, 2), 
(1, 3),
(2, 2), 
(3, 6),
(4, 3),
(5, 6);

