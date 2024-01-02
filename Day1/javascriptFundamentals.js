/* The “script” tag
JavaScript programs can be inserted almost anywhere into an HTML document using the <script> tag.
</script>*/


/* 

The <script> tag has a few attributes that are rarely used nowadays but can still be found in old code:

The type attribute: <script type=…>  
The old HTML standard, HTML4, required a script to have a type. Usually it was type="text/javascript". It’s not required anymore. 

The language attribute: <script language=…>
This attribute was meant to show the language of the script. This attribute no longer makes sense because JavaScript is the default language. There is no need to use it.

External scripts
If we have a lot of JavaScript code, we can put it into a separate file.

Script files are attached to HTML with the src attribute:

<script src="/path/to/script.js"></script>
Here, /path/to/script.js is an absolute path to the script from the site root. One can also provide a relative path from the current page. For instance, src="script.js", just like src="./script.js", would mean a file "script.js" in the current folder.



**NOTE**
As a rule, only the simplest scripts are put into HTML. More complex ones reside in separate files.

The benefit of a separate file is that the browser will download it and store it in its cache.

Other pages that reference the same script will take it from the cache instead of downloading it, so the file is actually downloaded only once.

That reduces traffic and makes pages faster.

..............................................................................................................................

If src is set, the script content is ignored.
A single <script> tag can’t have both the src attribute and code inside.

This won’t work:

<script src="file.js">
  alert(1); // the content is ignored, because src is set
</script>
We must choose either an external <script src="…"> or a regular <script> with code.

The example above can be split into two scripts to work:

<script src="file.js"></script>
<script>
  alert(1);
</script>
.......................................................................................................................................


Code structure
The first thing we’ll study is the building blocks of code.

Statements
Statements are syntax constructs and commands that perform actions.

We’ve already seen a statement, alert('Hello, world!'), which shows the message “Hello, world!”.

Semicolons
A semicolon may be omitted in most cases when a line break exists.JavaScript interprets the line break as an “implicit” semicolon. 
This is called an automatic semicolon insertion.

One-line comments start with two forward slash characters //.

Multiline comments start with a forward slash and an asterisk /* and end with an asterisk and a forward slash */.
/*
Nested comments are not supported!
..................................................................................................................

The modern mode, "use strict"
For a long time, JavaScript evolved without compatibility issues. New features were added to the language while old functionality didn’t change.

That had the benefit of never breaking existing code. But the downside was that any mistake or an imperfect decision made by JavaScript’s creators got stuck in the language forever.

This was the case until 2009 when ECMAScript 5 (ES5) appeared. It added new features to the language and modified some of the existing ones. To keep the old code working, most such modifications are off by default. You need to explicitly enable them with a special directive: "use strict".

“use strict”
The directive looks like a string: "use strict" or 'use strict'. When it is located at the top of a script, the whole script works the “modern” way.

For example:

"use strict";

// this code works the modern way
...
Quite soon we’re going to learn functions (a way to group commands), so let’s note in advance that "use strict" can be put at the beginning of a function. Doing that enables strict mode in that function only. But usually people use it for the whole script.

************
Ensure that “use strict” is at the top
Please make sure that "use strict" is at the top of your scripts, otherwise strict mode may not be enabled.
There’s no way to cancel use strict
There is no directive like "no use strict" that reverts the engine to old behavior.
Once we enter strict mode, there’s no going back.
*************
Browser console
When you use a developer console to run code, please note that it doesn’t use strict by default.

Sometimes, when use strict makes a difference, you’ll get incorrect results.

So, how to actually use strict in the console?

First, you can try to press Shift+Enter to input multiple lines, and put use strict on top, like this:

'use strict'; <Shift+Enter for a newline>
//  ...your code
<Enter to run>
It works in most browsers, namely Firefox and Chrome.

If it doesn’t, e.g. in an old browser, there’s an ugly, but reliable way to ensure use strict. Put it inside this kind of wrapper:

(function() {
  'use strict';

  // ...your code here...
})()
Should we “use strict”?
The question may sound obvious, but it’s not so.

One could recommend to start scripts with "use strict"… But you know what’s cool?

Modern JavaScript supports “classes” and “modules” – advanced language structures (we’ll surely get to them), that enable use strict automatically. So we don’t need to add the "use strict" directive, if we use them.

So, for now "use strict"; is a welcome guest at the top of your scripts. Later, when your code is all in classes and modules, you may omit it.

As of now, we’ve got to know about use strict in general.


*/
