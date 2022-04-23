``` console
npm install twexxor-email-extractor
```
``` javascript
const twexxorEmailExtractor = require('twexxor-email-extractor');
twexxorEmailExtractor('some content email@example.com email(comment((comment(comment(comment)))comment))@example.com not an email address "email.(),:;<>[]\\".address.\\"with@\\\\ \\"special\\".characters"@example.com\n some content " "@example.com\t some content'); // ['email@example.com', 'email(comment((comment(comment(comment)))comment))@example.com', '"email.(),:;<>[]\\".address.\\"with@\\\\ \\"special\\".characters"@example.com', '" "@example.com']
twexxorEmailExtractor('some content with no @email addresses'); // false
```
