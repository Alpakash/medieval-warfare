<div align="center">

# Uit de oude doos: Medieval Warfare #

<div align="left">

## :page_facing_up: Description

A react application where I use Redux to interact with the global state. Items can be put in the cart and bought with the users gold. After purchase you can see your bought items in your inventory. 

## How to install and run
```terminal
pnpm install
pnpm start
```

## Used Technologies
- React
- Styled-components
- Redux
- Made TypeScript available in the project
- react-bootstrap
- react-router-dom

Upgrades:
- React-script geupgrade naar vite voor betere compile performance
- Tailwind en Shadcn UI installed voor snellere UI improvements

# Quick Notes / Roadmap
- Moet de app met quick-wins implementen vandaar socket.io i.v.m. 4uur time-frame
- Animaties/sprites komen later, heb al een aantal sprite assets gevonden

## In Scope
### Zero-downtime-deployment
- blue/green deployment strategy geimplementeerd met AWS load balancer https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deploy-blue-green-service.html

- Betere home page (landingspage) met uitleg app
- Vervang Redux state management met Jotai

### Webshop
- de avatar component met de items equipped
- gekochte items in je inventory zichtbaar

### API Integratie (Node)
- Missions doen (commit, ticktick afvinken) en dan krijg je Armor durability & weapon XP
- Koppelen aan integraties zoals Github en/of TickTick


## Extras
- Koop items voor je avatar en start de game
- Blijf actief door commits te maken of taken af te vinken
- Al je XP en durability wordt bijgewerkt in real-time
- Je kunt HP potions kopen en drinken

- Login robuuster maken auth0.com 

- API Integratie (Node)
    - Missions doen (commit, ticktick afvinken) en dan krijg je Armor durability & weapon XP
    - Koppelen aan integraties zoals Github en/of TickTick

- Websockets https://socket.io/docs/v4/tutorial/introduction
    - voor de mission notificatie (earned XP and armor durability ++)
    - Monster attacks; (common, rare, epic, legendary)

## To-do ##
1. *DONE* ~~Implement react-router for components~~
2. *DONE* ~~Fix the cart input~~
3. *DONE* ~~Make buying items in the cart possible~~
4. *DONE* ~~Handle the failed error request~~
5. *DONE* ~~different view on screen width less then 480px~~
6. *DONE* ~~Create an easter egg in the app~~
7. *DONE* ~~Implement user authentication (Auth0)~~
8. Make avatar component with equipped items