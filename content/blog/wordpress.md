---
title: Why I don't make WordPress websites
image: crowd
date: 2019-06-16
---
Every now and then people ask me if I'm available for a small website project. People wonder when I refuse
after they tell me that the site has been/will be implemented with WordPress. This question comes up so often that I
decided to write this post to shed some light on the subject.

Steve Jobs died on the fifth of October, 2011. Nineteen days later Simon & Schuster released his biography, simply
titled _Steve Jobs_. Like many other people, I read it as soon as I could get my hands on a copy. I did not have to read
for long before I found the first chapter that was quote material. This is how Jobs describes the work of his
adoptive father, Paul:

_"If we needed a cabinet, he would build it. When he built our fence, he gave me a hammer so I could work with him.”
Fifty years later the fence still surrounds the back and side yards of the house in Mountain View. As Jobs showed it
off to me, he caressed the stockade panels and recalled a lesson that his father implanted deeply in him. It was
important, his father said, to craft the backs of cabinets and fences properly, even though they were hidden.
“He loved doing things right. He even cared about the look of the parts you couldn’t see."_

Relentless and sometimes even unhealthy attention to parts invisible to the user was something that set Jobs apart from
many others during his life. Without it, he would have never created Apple as we know it and I would not be
quoting him right now.

So, what does any of this have to do with WordPress? It is, after all, the most popular Content Management System (CMS)
for websites, so how could it be bad? At the time of writing, WordPress is used on about 1/3rd of all websites. That
is a staggering number. I think most of the popularity can be explained with the following three points:

1. If you do not know how to make a website, WordPress is an easy place to start. You can make a website without knowing
any programming whatsoever. I think this partially explains why so many WordPress sites get hacked.

2. Due to #1, the supply for WordPress coders is high. If you don't like the guy to whom you outsourced your website
project, you can change the provider fairly easily. It is also easy to get support. Everyone uses it, so everyone else
uses it.

3. If you have the funds and the maintainers, WordPress is extremely versatile and you can run the biggest news site of
the country with it. No objection there.

Now, let's take a few minutes to think about the dark side of popularity.

When I visited Prague some years ago, I was warned about pickpockets. They like to operate in big crowds surrounding
Prague's most popular tourist attractions, since the noise and constant bumping to other people make the victims
less likely to notice the theft. Once they got your wallet, they disappear in the crowd. Funnily, popularity is also
one of the reasons that make using WordPress so troublesome. The more popular a platform is, the more hackers start
targeting it. WordPress is well-known for its security vulnerabilities which are, however, usually patched quickly. This
is not the end of the story, though. Most WordPress sites consist of two things: the core and plugins used for a variety
of functions. Most vulnerabilities are caused by the plugins, not the core itself. The author of a plugin might or might
not be interested in patching these vulnerabilities. What this means for the user is that a WordPress website needs to
be _actively maintained_. If you leave it alone for too long, it'll stop working. Sometimes the updates also introduce
_breaking changes_. While the vulnerabilities are patched, some other part of your site (such as your plugins) no
longer work. So, you have three choices:

1. Do not update your site. Eventually, someone else takes control of it and uses it to distribute viruses or mine
bitcoins on the visitor's computer.

2. Keep your site updated. It is unlikely that the site will be targeted by criminals, but every now and then there are
breaking changes and you have to invest time in fixing them.

3. Pay someone else to keep the site updated. Results and costs may vary.

During my relatively short career in software engineering, I have encountered people and companies who have made all of
these choices. The ones that chose option 3 seem to be the happiest, but I still think all of these options are bad
since there is an alternative for most websites.

If I am tasked to make a website whose primary function is just displaying information (such as a blog), I usually make
a static site. When a user goes to a WordPress website, the server running WordPress pieces together an HTML document
based on the content and sends it to the user's browser, which renders it visible to the user. When a user visits a
static site, the server always sends a pre-made HTML document. There is no server-side process that can be hacked to
include malicious code on the website. There is just a regular ordinary unchanging (static) HTML file that is served
as-is. Making websites that work on this principle is perfectly good enough for most cases. 

Hosting a static site is free or cheap (domain names still cost money), it is as secure as it gets and you never
have to spend time or money keeping it up-to-date if you don't want to. It'll look and work just the same until
the sun rises in the west and sets in the east and when the seas go dry and mountains blow in the wind like leaves. 
Completely without maintenance. I also hand-craft the code so the site
doesn't load anything useless (unlike many WordPress themes that style elements that
are never actually used on the website). A little-known fact is that there are also content management
systems for static sites that allow the user to add, remove and modify pages, although they do not allow as extensive
modifications as WordPress does.

These are the reasons why I consider WordPress to be unsuitable for most websites people ask me to make. Like Jobs,
I cannot deliver a product with a good conscience if I know that it is poorly made and cannot stand the test of time.
