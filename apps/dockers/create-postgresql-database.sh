#!/bin/bash

set -e
set -u

local database='test'
echo "Creating user and database '$database'"
psql -v ON_ERROR_STOP=1 --username "postgres" <<-EOSQL
  DROP DATABASE IF EXISTS $database;
 	CREATE USER $database;
	CREATE DATABASE $database;
	GRANT ALL PRIVILEGES ON DATABASE $database TO $database;