# Setup

Create a symfony skeleton with ApiPlatform:

```
composer create-project symfony/skeleton examples
cd examples
composer require api
```

Use SQLite in `.env`:

```
diff --git a/.env b/.env
index 62f4361..ef21444 100644
--- a/.env
+++ b/.env
@@ -25,7 +25,7 @@ APP_SECRET=669e303b1ea2070f836c2f5cc17f6fb7
 # For an SQLite database, use: "sqlite:///%kernel.project_dir%/var/data.db"
 # For a PostgreSQL database, use: "postgresql://db_user:db_password@127.0.0.1:5432/db_name?serverVersion=11&charset=utf8"
 # IMPORTANT: You MUST configure your server version, either here or in config/packages/doctrine.yaml
-DATABASE_URL=mysql://db_user:db_password@127.0.0.1:3306/db_name?serverVersion=5.7
+DATABASE_URL=sqlite:///%kernel.project_dir%/var/data.db
 ###< doctrine/doctrine-bundle ###
 
 ###> nelmio/cors-bundle ###
```
