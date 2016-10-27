---
layout: {{type}}
status: publish
published: true
title: '{{title}}'
author:
  display_name: {{display_name}}
  email: {{email}}
date: {{date}}
categories:
{{#if featured}}
- Featured
{{else}}

{{/if}}
tags:
{{#each tags}}
- {{this}}
{{/each}}

---

[post body goes here]
