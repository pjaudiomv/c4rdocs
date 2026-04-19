---
id: translation-loading-triggered-too-early-wordpress-6-7-0-compatibility-issue
title: Translation loading triggered too early - WordPress 6.7.0+ compatibility issue
description: "### Add a description"
sidebar_position: 9
tags: ["recipe", "getting-started"]
---

# Translation loading triggered too early - WordPress 6.7.0+ compatibility issue

> Getting Started • [Issue #1784](https://github.com/code4recovery/12-step-meeting-list/issues/1784) • _answer by @joshreisner_

## The question

### Add a description

I know this was reported previously but its either still there or back https://github.com/code4recovery/12-step-meeting-list/issues/1582. Note that the PHP Deprecation's I believe started with 8.0 or 8.1

## Description
The plugin triggers translation loading before the `init` action, causing PHP notices in WordPress 6.7.0+ and preventing headers from being sent properly.

## Error Messages
```
PHP Notice: Function _load_textdomain_just_in_time was called incorrectly. Translation loading for the `12-step-meeting-list` domain was triggered too early. This is usually an indicator for some code in the plugin or theme running too early. Translations should be loaded at the `init` action or later. (This message was added in version 6.7.0.)

PHP Warning: Cannot modify header information - headers already sent by (output started at /var/www/html/wp-includes/functions.php:6121)
```

## Additional Issues
The following deprecated warnings also appear:
- `mb_detect_encoding(): Passing null to parameter #1 ($string) of type string is deprecated` in `/includes/functions_import.php` on line 830
- `preg_replace(): Passing null to parameter #3 ($subject) of type array|string is deprecated` in `/includes/functions_import.php` on line 840

## Environment
- **WordPress Version:** 6.8.3
- **PHP Version:** 8.3
- **Plugin Version:** [current version]
- **Server:** Apache (Docker)

## Steps to Reproduce
1. Install WordPress 6.7.0 or later
2. Install and activate the 12-step-meeting-list plugin
3. Enable `WP_DEBUG` mode
4. Access the WordPress admin area or perform any plugin operation (Specifically imports)
5. Check error logs

## Expected Behavior
- Translations should load at the `init` action or later
- No headers-already-sent warnings
- No PHP deprecation notices

## Suggested Fix
Ensure all translation loading calls (`load_plugin_textdomain()`, `__()`, `_e()`, etc.) are hooked to the `init` action or later. Review plugin initialization sequence to ensure proper WordPress hook usage.

## Docker Configuration
&lt;details&gt;
&lt;summary&gt;Click to view Dockerfile and docker-compose.yml&lt;/summary&gt;

**Dockerfile:**
```dockerfile
FROM wordpress:6.8.3-php8.3-apache

RUN apt-get update && \
    apt-get install -y  --no-install-recommends ssl-cert && \
    rm -r /var/lib/apt/lists/* && \
    a2enmod ssl rewrite expires && \
    a2ensite default-ssl

ENV PHP_INI_PATH "/usr/local/etc/php/php.ini"

RUN pecl install xdebug-3.4.5 && docker-php-ext-enable xdebug \
    && echo "xdebug.mode=debug" >> ${PHP_INI_PATH} \
    && echo "xdebug.client_port=9003" >> ${PHP_INI_PATH} \
    && echo "xdebug.client_host=host.docker.internal" >> ${PHP_INI_PATH} \
    && echo "xdebug.start_with_request=yes" >> ${PHP_INI_PATH} \
    && echo "xdebug.log=/tmp/xdebug.log" >> ${PHP_INI_PATH} \
    && echo "xdebug.idekey=IDE_DEBUG" >> ${PHP_INI_PATH}

EXPOSE 80
EXPOSE 443
```

**docker-compose.yml:**
```yaml
services:
  wordpress:
    depends_on:
      - db
    build: .
    restart: always
    ports:
      - 8080:80
      - 7443:443
    environment:
      WORDPRESS_DEBUG: true
      WORDPRESS_DB_HOST: db:3306
      WORDPRESS_DB_USER: wordpress
      WORDPRESS_DB_PASSWORD: wordpress
      WORDPRESS_DB_NAME: wordpress
      WORDPRESS_CONFIG_EXTRA: |
        define('WP_HOME', 'https://localhost:7443');
        define('WP_SITEURL', 'https://localhost:7443');
    volumes:
      - ../:/var/www/html/wp-content/plugins
      - ./logs/:/var/log/apache2

  db:
    image: mariadb:10.11
    restart: always
    ports:
      - 3306:3306
    environment:
      MARIADB_ROOT_PASSWORD: somewordpress
      MARIADB_DATABASE: wordpress
      MARIADB_USER: wordpress
      MARIADB_PASSWORD: wordpress
```
&lt;/details&gt;

## Reference
- [WordPress Developer Documentation: Debugging in WordPress](https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/)
- [WordPress 6.7.0 Release Notes](https://wordpress.org/news/2024/11/wordpress-6-7-rollins/)

## The answer

yeah the error message isn't very helpful, since it doesn't say where we're calling it too early

the quick way to fix the message showing up is to disable debug mode - hopefully this is already done on everyone's production websites.

when you say your whole meetings page is down @cronin4392 , i doubt this is the cause. could you create a new discussion with a link to the page that's down? thanks

## Code


### Snippet 1

```text
PHP Notice: Function _load_textdomain_just_in_time was called incorrectly. Translation loading for the `12-step-meeting-list` domain was triggered too early. This is usually an indicator for some code in the plugin or theme running too early. Translations should be loaded at the `init` action or later. (This message was added in version 6.7.0.)

PHP Warning: Cannot modify header information - headers already sent by (output started at /var/www/html/wp-includes/functions.php:6121)
```


### Snippet 2

```dockerfile
FROM wordpress:6.8.3-php8.3-apache

RUN apt-get update && \
    apt-get install -y  --no-install-recommends ssl-cert && \
    rm -r /var/lib/apt/lists/* && \
    a2enmod ssl rewrite expires && \
    a2ensite default-ssl

ENV PHP_INI_PATH "/usr/local/etc/php/php.ini"

RUN pecl install xdebug-3.4.5 && docker-php-ext-enable xdebug \
    && echo "xdebug.mode=debug" >> ${PHP_INI_PATH} \
    && echo "xdebug.client_port=9003" >> ${PHP_INI_PATH} \
    && echo "xdebug.client_host=host.docker.internal" >> ${PHP_INI_PATH} \
    && echo "xdebug.start_with_request=yes" >> ${PHP_INI_PATH} \
    && echo "xdebug.log=/tmp/xdebug.log" >> ${PHP_INI_PATH} \
    && echo "xdebug.idekey=IDE_DEBUG" >> ${PHP_INI_PATH}

EXPOSE 80
EXPOSE 443
```


### Snippet 3

```yaml
services:
  wordpress:
    depends_on:
      - db
    build: .
    restart: always
    ports:
      - 8080:80
      - 7443:443
    environment:
      WORDPRESS_DEBUG: true
      WORDPRESS_DB_HOST: db:3306
      WORDPRESS_DB_USER: wordpress
      WORDPRESS_DB_PASSWORD: wordpress
      WORDPRESS_DB_NAME: wordpress
      WORDPRESS_CONFIG_EXTRA: |
        define('WP_HOME', 'https://localhost:7443');
        define('WP_SITEURL', 'https://localhost:7443');
    volumes:
      - ../:/var/www/html/wp-content/plugins
      - ./logs/:/var/log/apache2

  db:
    image: mariadb:10.11
    restart: always
    ports:
      - 3306:3306
    environment:
      MARIADB_ROOT_PASSWORD: somewordpress
      MARIADB_DATABASE: wordpress
      MARIADB_USER: wordpress
      MARIADB_PASSWORD: wordpress
```


---

_Original source: [issue #1784](https://github.com/code4recovery/12-step-meeting-list/issues/1784)._
