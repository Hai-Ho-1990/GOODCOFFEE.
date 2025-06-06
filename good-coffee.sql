--
-- PostgreSQL database dump
--

-- Dumped from database version 16.9 (Debian 16.9-1.pgdg120+1)
-- Dumped by pg_dump version 17.4 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: goodcoffee_user
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO goodcoffee_user;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: order_items; Type: TABLE; Schema: public; Owner: goodcoffee_user
--

CREATE TABLE public.order_items (
    id integer NOT NULL,
    product_id integer,
    quantity integer,
    order_id integer NOT NULL,
    unit_price numeric NOT NULL
);


ALTER TABLE public.order_items OWNER TO goodcoffee_user;

--
-- Name: order_items_id_seq; Type: SEQUENCE; Schema: public; Owner: goodcoffee_user
--

ALTER TABLE public.order_items ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.order_items_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: orders; Type: TABLE; Schema: public; Owner: goodcoffee_user
--

CREATE TABLE public.orders (
    id integer NOT NULL,
    status text NOT NULL,
    order_date timestamp without time zone NOT NULL,
    user_id integer,
    total_price numeric NOT NULL
);


ALTER TABLE public.orders OWNER TO goodcoffee_user;

--
-- Name: orders_id_seq; Type: SEQUENCE; Schema: public; Owner: goodcoffee_user
--

ALTER TABLE public.orders ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.orders_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: products; Type: TABLE; Schema: public; Owner: goodcoffee_user
--

CREATE TABLE public.products (
    id integer NOT NULL,
    name text NOT NULL,
    price numeric NOT NULL,
    description text NOT NULL,
    stock integer NOT NULL,
    status text NOT NULL,
    discount_price numeric NOT NULL,
    main_image text,
    sub_image text,
    category text
);


ALTER TABLE public.products OWNER TO goodcoffee_user;

--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: goodcoffee_user
--

ALTER TABLE public.products ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.products_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: users; Type: TABLE; Schema: public; Owner: goodcoffee_user
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username text NOT NULL,
    password text NOT NULL,
    email text,
    admin boolean NOT NULL,
    telephone integer,
    address text,
    postcode integer,
    city text
);


ALTER TABLE public.users OWNER TO goodcoffee_user;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: goodcoffee_user
--

ALTER TABLE public.users ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: order_items; Type: TABLE DATA; Schema: public; Owner: goodcoffee_user
--

INSERT INTO public.order_items (id, product_id, quantity, order_id, unit_price) OVERRIDING SYSTEM VALUE VALUES (1, 4, 1, 1, 6.99);
INSERT INTO public.order_items (id, product_id, quantity, order_id, unit_price) OVERRIDING SYSTEM VALUE VALUES (2, 1, 1, 2, 6.99);
INSERT INTO public.order_items (id, product_id, quantity, order_id, unit_price) OVERRIDING SYSTEM VALUE VALUES (3, 1, 5, 3, 6.99);
INSERT INTO public.order_items (id, product_id, quantity, order_id, unit_price) OVERRIDING SYSTEM VALUE VALUES (4, 2, 1, 4, 6.99);
INSERT INTO public.order_items (id, product_id, quantity, order_id, unit_price) OVERRIDING SYSTEM VALUE VALUES (5, 2, 2, 5, 6.99);


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: goodcoffee_user
--

INSERT INTO public.orders (id, status, order_date, user_id, total_price) OVERRIDING SYSTEM VALUE VALUES (1, 'Pending', '2025-06-02 08:55:26.407', 1, 6.99);
INSERT INTO public.orders (id, status, order_date, user_id, total_price) OVERRIDING SYSTEM VALUE VALUES (2, 'Pending', '2025-06-02 18:19:47.439', 1, 6.99);
INSERT INTO public.orders (id, status, order_date, user_id, total_price) OVERRIDING SYSTEM VALUE VALUES (3, 'Pending', '2025-06-03 08:29:38.795', 3, 34.95);
INSERT INTO public.orders (id, status, order_date, user_id, total_price) OVERRIDING SYSTEM VALUE VALUES (4, 'Pending', '2025-06-06 17:34:56.279', 1, 6.99);
INSERT INTO public.orders (id, status, order_date, user_id, total_price) OVERRIDING SYSTEM VALUE VALUES (5, 'Pending', '2025-06-06 20:49:41.857', 1, 13.98);


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: goodcoffee_user
--

INSERT INTO public.products (id, name, price, description, stock, status, discount_price, main_image, sub_image, category) OVERRIDING SYSTEM VALUE VALUES (4, 'excelsa', 13.98, 'Excelsa is a rare and distinctive coffee variety, part of the Liberica family. Grown mainly in Southeast Asia, it’s known for its complex flavor profile—fruity, tart, and often with dark berry or spiced notes. Excelsa adds depth and uniqueness to blends, making it a favorite among adventurous coffee lovers.', 75, 'In Stock', 6.99, 'excelsa-nobg.png', NULL, 'UNIQUE');
INSERT INTO public.products (id, name, price, description, stock, status, discount_price, main_image, sub_image, category) OVERRIDING SYSTEM VALUE VALUES (1, 'ARABICA', 13.98, 'Arabica is the most popular and widely consumed coffee variety, prized for its smooth, balanced flavor. Grown at high altitudes in regions like Latin America and Africa, it offers subtle notes of fruit, chocolate, and floral undertones. Arabica beans produce a refined, aromatic cup beloved by coffee enthusiasts worldwide.', 88, 'in stock', 6.99, 'arabica-nobg.png', NULL, 'SMOOTHER');
INSERT INTO public.products (id, name, price, description, stock, status, discount_price, main_image, sub_image, category) OVERRIDING SYSTEM VALUE VALUES (3, 'LIBERICA', 13.98, 'Liberica is a rare and aromatic coffee variety native to West Africa and now grown in parts of Southeast Asia. It’s known for its large beans and unique flavor—woody, floral, and smoky with a fruity undertone. Liberica offers a distinctive cup that appeals to those seeking something beyond the ordinary.', 0, 'out of stock', 6.99, 'liberica-nobg.png', NULL, 'SWEET');
INSERT INTO public.products (id, name, price, description, stock, status, discount_price, main_image, sub_image, category) OVERRIDING SYSTEM VALUE VALUES (2, 'ROBUSTA', 13.98, 'Robusta is a strong and bold coffee variety known for its high caffeine content and earthy, bitter flavor. Grown mainly in Africa and Southeast Asia, it delivers a full-bodied, intense cup with notes of dark chocolate and nuts. Robusta adds strength and crema, making it ideal for espresso blends.








', 45, 'in stock', 6.99, 'robusta-nobg.png', NULL, 'BITTER');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: goodcoffee_user
--

INSERT INTO public.users (id, username, password, email, admin, telephone, address, postcode, city) OVERRIDING SYSTEM VALUE VALUES (2, 'admin', '$2b$07$Uw9dnXU8TibDds6X7eCVKOXkVkrQaodrszRPRtyXS2IY0t6WVPg7W', 'juno.hu2090@gmail.com', true, NULL, NULL, NULL, NULL);
INSERT INTO public.users (id, username, password, email, admin, telephone, address, postcode, city) OVERRIDING SYSTEM VALUE VALUES (3, 'johan', '$2b$07$ZsSxI.JZQj7nQo.rG.J5/.1Zsb7pL8G41NXbw68oVP8CRnPftHri6', 'juno125@gmail.com', false, 728327632, 'Nekvägen 41', 16358, 'Stockholm');
INSERT INTO public.users (id, username, password, email, admin, telephone, address, postcode, city) OVERRIDING SYSTEM VALUE VALUES (1, 'haiho', '$2b$07$DvL51tet7K45QR/E8tOe8ea0PIS1vJ0zbRaEARc64m20CXu0WZgsu', 'juno.hu123@gmail.com', false, 123456789, 'Nekvägen 39', 16358, 'Stockholm');
INSERT INTO public.users (id, username, password, email, admin, telephone, address, postcode, city) OVERRIDING SYSTEM VALUE VALUES (4, 'lisa', '$2b$07$Z27E0sgxzSr3qBA37LDgH.WF5BZo.LKZS9KC3wy0dcp9x3tYVnA7K', 'juno.hu234@gmail.com', false, NULL, NULL, NULL, 'Katrineholm');


--
-- Name: order_items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: goodcoffee_user
--

SELECT pg_catalog.setval('public.order_items_id_seq', 5, true);


--
-- Name: orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: goodcoffee_user
--

SELECT pg_catalog.setval('public.orders_id_seq', 5, true);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: goodcoffee_user
--

SELECT pg_catalog.setval('public.products_id_seq', 4, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: goodcoffee_user
--

SELECT pg_catalog.setval('public.users_id_seq', 4, true);


--
-- Name: order_items order_items_pkey; Type: CONSTRAINT; Schema: public; Owner: goodcoffee_user
--

ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT order_items_pkey PRIMARY KEY (id);


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: goodcoffee_user
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: goodcoffee_user
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: goodcoffee_user
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: goodcoffee_user
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: goodcoffee_user
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- Name: order_items order_items_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: goodcoffee_user
--

ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT order_items_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(id);


--
-- Name: order_items order_items_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: goodcoffee_user
--

ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT order_items_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id);


--
-- Name: orders orders_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: goodcoffee_user
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: DEFAULT PRIVILEGES FOR SEQUENCES; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON SEQUENCES TO goodcoffee_user;


--
-- Name: DEFAULT PRIVILEGES FOR TYPES; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON TYPES TO goodcoffee_user;


--
-- Name: DEFAULT PRIVILEGES FOR FUNCTIONS; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON FUNCTIONS TO goodcoffee_user;


--
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT SELECT,INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,UPDATE ON TABLES TO goodcoffee_user;


--
-- PostgreSQL database dump complete
--

