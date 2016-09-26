DROP DATABASE IF EXISTS igotyou;
DROP ROLE IF EXISTS igotyou;

CREATE USER igotyou WITH PASSWORD 'igotyou';
ALTER ROLE igotyou SET client_encoding TO 'utf8';
ALTER ROLE igotyou SET default_transaction_isolation TO 'read committed';
ALTER ROLE igotyou SET timezone TO 'UTC';

CREATE DATABASE igotyou;
GRANT ALL PRIVILEGES ON DATABASE igotyou TO igotyou;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO igotyou

