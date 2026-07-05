# Roadmap - Medieval Warfare

A React application where I use the global state to interact with items. Items can be put in the cart and bought with the user's gold. After purchase you can see your bought items in your inventory. Monsters attack and you will either kill them or lose HP and item durability... get stronger and level by doing tasks such as commiting on GitHub and/or ticking off todo items in your todo app.

## Upgrades
- React-scripts geüpgraded naar Vite voor betere compile performance
- Tailwind en shadcn/ui geïnstalleerd voor snellere UI improvements
- Redux vervangen door Zustand met sliced store pattern
- Bootstrap & styled-components vervangen door Tailwind CSS v4
- React 16 → React 19, react-router-dom v5 → v7
- TypeScript strict mode ingeschakeld
- Auth0 secrets verplaatst naar `.env`

## Quick Notes
- Moet de app met quick-wins implementen vandaar socket.io i.v.m. 4uur time-frame
- Animaties/sprites komen later, heb al een aantal sprite assets gevonden

---

## In Scope

### Zero-downtime deployment
- Blue/green deployment strategy geïmplementeerd met AWS load balancer
  https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deploy-blue-green-service.html

### Home page
- Betere home page (landingspage) met uitleg app

### Webshop
- De avatar component met de items equipped
- Gekochte items in je inventory zichtbaar

### API Integratie (Node)
- Missions doen (commit, ticktick afvinken) en dan krijg je Armor durability & weapon XP
- Koppelen aan integraties zoals Github en/of TickTick

---

## Extras
- Koop items voor je avatar en start de game
- Blijf actief door commits te maken of taken af te vinken
- Al je XP en durability wordt bijgewerkt in real-time
- Je kunt HP potions kopen en drinken

### Login robuuster maken
- Auth0.com integratie versterken

### API Integratie (Node)
- Missions doen (commit, ticktick afvinken) en dan krijg je Armor durability & weapon XP
- Koppelen aan integraties zoals Github en/of TickTick

### Websockets
https://socket.io/docs/v4/tutorial/introduction
- Voor de mission notificatie (earned XP and armor durability ++)
- Monster attacks; (common, rare, epic, legendary)

---

## To-do
1. *DONE* ~~Implement react-router for components~~
2. *DONE* ~~Fix the cart input~~
3. *DONE* ~~Make buying items in the cart possible~~
4. *DONE* ~~Handle the failed error request~~
5. *DONE* ~~Different view on screen width less then 480px~~
6. *DONE* ~~Implement user authentication (Auth0)~~
7. Make avatar component with equipped items