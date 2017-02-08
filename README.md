# WebhookUpdate

1. Add hook.php to your project / repository. hook.php must be on a web server accessible by GitHub's servers.

2. Create a webhook on your GitHub repo using the URL for hook.php as the Payload URL and make sure you select "Just the push event". https://developer.github.com/webhooks/creating/

3. Drop live.js or live.min.js into your project / repository (again, must be accessible via the web) and add "<script src="http://yourdomain.com/pathtoyourproject/live.min.js"></script>" to your page.

4. Reload your application, push to your repo, and enjoy! :)