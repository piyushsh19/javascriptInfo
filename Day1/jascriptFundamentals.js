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





*/