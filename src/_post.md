---
title: '{{title}}'
author:
  display_name: {{display_name}}
  email: {{email}}
date: {{date}}
{{#if categories.length}}
categories:
{{#each categories}}
  - {{this}}
{{/each}}
{{else}}
categories: []
{{/if}}
{{#if tags.length}}
tags:
{{#each tags}}
  - {{this}}
{{/each}}
{{else}}
tags: []
{{/if}}
---

[post body goes here]
