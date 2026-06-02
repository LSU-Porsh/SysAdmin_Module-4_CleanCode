const agentsList = [
  {
    name: "Breach",
    profile: "Agents-Profiles/Breach.png",
    artwork: "Agents/Breach_artwork.png",
    class: "Controller",
    abilities: [
      {
        name: "Blinding Charge (C)",
        icon: "Abilities/Property 1=c-Breach_Aftershock.png",
        desc: "Breach equips a blinding charge that can be fired through walls. When it detonates, it blinds all players looking at it",
      },
      {
        name: "Seismic Blast (Q)",
        icon: "Abilities/Property 1=q-Breach_Flashpoint.png",
        desc: "Breach holds fire to increase the distance of a seismic blast. Upon release, it creates a quake that dazes all players in its zone and in a line up to the zone",
      },
      {
        name: "Aftershock (E)",
        icon: "Abilities/Property 1=e-Breach_Fault_Line.png",
        desc: "Breach fires a charge that sends a cascading quake through all terrain in a large cone. The quake concusses and knocks up anyone caught in it",
      },
      {
        name: "Rolling Thunder (Ultimate)",
        icon: "Abilities/Property 1=x-Breach_Rolling_Thunder.png",
        desc: " Breach unleashes a massive seismic wave that travels through walls, concussing and knocking up all players in its path",
      },
    ],
  },
  {
    name: "Reyna",
    profile: "Agents-Profiles/Reyna.png",
    artwork: "Agents/Reyna_artwork.png",
    class: "Duelist",
    abilities: [
      {
        name: "Devour (Q)",
        icon: "Abilities/Property 1=q-Reyna_Devour.png",
        desc: "Soul Harvest: Enemies that die within 3 seconds of taking damage from Reyna leave behind Soul Orbs that last 3 seconds. Devour: INSTANTLY consume a soul orb, rapidly gaining Temporary Health. If EMPRESS is active then Devour automatically casts, does not consume the Soul Orb, and Healing is permanent.",
      },
      {
        name: "Dismiss (E)",
        icon: "Abilities/Property 1=e-Reyna_Dismiss.png",
        desc: "INSTANTLY consume a nearby Soul Orb, becoming Intangible for a short duration. If EMPRESS is active, also become Invisible",
      },
      {
        name: "Leer (C)",
        icon: "Abilities/Property 1=c-Reyna_Leer.png",
        desc: "EQUIP an ethereal, destructible eye. ACTIVATE to cast the eye a short distance forward. The eye will Nearsight all enemies who look at it.",
      },
      {
        name: "Empress",
        icon: "Abilities/Property 1=x-Reyna_Empress.png",
        desc: "INSTANTLY enter a frenzy, gaining a Combat Stim that increases firing, equip and reload speed dramatically. Gain infinite charges of Soul Harvest abilities.",
      },
    ],
  },
  {
    name: "Viper",
    profile: "Agents-Profiles/Viper.png",
    artwork: "Agents/Viper_artwork.png",
    class: "Controller",
    abilities: [
      {
        name: "Poison Cloud (Q)",
        icon: "Abilities/Property 1=q-Viper_Poison_Cloud.png",
        desc: "EQUIP a gas emitter. FIRE to throw the emitter that perpetually remains throughout the round. RE-USE the ability to create a toxic gas cloud at the cost of fuel. This ability can be RE-USED more than once and can be picked up to be REDEPLOYED.",
      },
      {
        name: "Toxic Screen (E)",
        icon: "Abilities/Property 1=e-Viper_Toxic_Screen.png",
        desc: "EQUIP a gas emitter launcher. FIRE to deploy a long line of gas emitters. RE-USE the ability to create a tall wall of toxic gas at the cost of fuel. This ability can be RE-USED more than once.",
      },
      {
        name: "Snake Bite (C)",
        icon: "Abilities/Property 1=c-Viper_Snakebite.png",
        desc: "EQUIP a chemical launcher. FIRE to launch a canister that shatters upon hitting the floor, creating a lingering chemical zone that damages and applies Vulnerable",
      },
      {
        name: "Empress",
        icon: "Abilities/Property 1=x-Viper_Viper's_Pit.png",
        desc: "INSTANTLY enter a frenzy, gaining a Combat Stim that increases firing, equip and reload speed dramatically. Gain infinite charges of Soul Harvest abilities.",
      },
    ],
  },
  {
    name: "Brimstone",
    profile: "Agents-Profiles/Brimstone.png",
    artwork: "Agents/Brimstone_artwork.png",
    class: "Controller",
    abilities: [
      {
        name: "Incendiary (Q)",
        icon: "Abilities/Property 1=q-Brimstone_Incendiary.png",
        desc: "EQUIP an incendiary grenade launcher. FIRE to launch a grenade that detonates as it comes to a rest on the floor, creating a lingering fire zone that damages players within the zone.",
      },
      {
        name: "Sky Smoke (E)",
        icon: "Abilities/Property 1=e-Brimstone_Sky_Smoke.png",
        desc: "EQUIP a tactical map. FIRE to set locations where Brimstone's smoke clouds will land. ALTERNATE FIRE to confirm, launching long-lasting smoke clouds that block vision in the selected area.",
      },
      {
        name: "Stim Beacon (C)",
        icon: "Abilities/Property 1=c-Brimstone_Stim_Beacon.png",
        desc: "INSTANTLY toss down a stim beacon. Upon landing, it creates a field that grants players a Combat Stim and a Speed Boost.",
      },
      {
        name: "Orbital Strike (X)",
        icon: "Abilities/Property 1=x-Brimstone_Orbital_Strike.png",
        desc: "EQUIP a tactical map. FIRE to launch a lingering orbital strike laster at the selected location, dealing high damage-over-time to players caught in the selected area",
      },
    ],
  },
  {
    name: "Jett",
    profile: "Agents-Profiles/Jett.png",
    artwork: "Agents/Jett_artwork.png",
    class: "Duelist",
    abilities: [
      {
        name: "Cloudburst (C)",
        icon: "Abilities/Property 1=c-Jett_Cloudburst.png",
        desc: "INSTANTLY throw a projectile that expands into a brief vision-blocking cloud on impact with a surface. HOLD the ability key to curve the smoke in the direction of your crosshair.",
      },
      {
        name: "Updraft (Q)",
        icon: "Abilities/Property 1=q-Jett_Updraft.png",
        desc: "INSTANTLY propel Jett high into the air.",
      },
      {
        name: "Tailwind (E)",
        icon: "Abilities/Property 1=e-Jett_Tailwind.png",
        desc: "ACTIVATE to prepare a gust of wind for a limited time. RE-USE the wind to propel Jett in the direction she is moving. If Jett is standing still, she propels forward. Tailwind charge resets every two kills.",
      },
      {
        name: "Blade Storm (X)",
        icon: "Abilities/Property 1=x-Jett_Blade_Storm.png",
        desc: "EQUIP a set of highly accurate throwing knives. FIRE to throw a single knife and recharge knives on a kill. ALT FIRE to throw all remaining daggers but does not recharge on a kill.",
      },
    ],
  },
  {
    name: "Kayo",
    profile: "Agents-Profiles/KAYO.png",
    artwork: "Agents/Kayo_artwork.png",
    class: "Initiator",
    abilities: [
      {
        name: "Devour (Q)",
        icon: "Abilities/Property 1=q-Reyna_Devour.png",
        desc: "Soul Harvest: Enemies that die within 3 seconds of taking damage from Reyna leave behind Soul Orbs that last 3 seconds. Devour: INSTANTLY consume a soul orb, rapidly gaining Temporary Health. If EMPRESS is active then Devour automatically casts, does not consume the Soul Orb, and Healing is permanent.",
      },
      {
        name: "Dismiss (E)",
        icon: "Abilities/Property 1=e-Reyna_Dismiss.png",
        desc: "INSTANTLY consume a nearby Soul Orb, becoming Intangible for a short duration. If EMPRESS is active, also become Invisible",
      },
      {
        name: "Leer (C)",
        icon: "Abilities/Property 1=c-Reyna_Leer.png",
        desc: "EQUIP an ethereal, destructible eye. ACTIVATE to cast the eye a short distance forward. The eye will Nearsight all enemies who look at it.",
      },
      {
        name: "Empress",
        icon: "Abilities/Property 1=x-Reyna_Empress.png",
        desc: "INSTANTLY enter a frenzy, gaining a Combat Stim that increases firing, equip and reload speed dramatically. Gain infinite charges of Soul Harvest abilities.",
      },
    ],
  },
  {
    name: "Neon",
    profile: "Agents-Profiles/Neon.png",
    artwork: "Agents/Neon_artwork.png",
    class: "Initiator",
    abilities: [
      {
        name: "Devour (Q)",
        icon: "Abilities/Property 1=q-Reyna_Devour.png",
        desc: "Soul Harvest: Enemies that die within 3 seconds of taking damage from Reyna leave behind Soul Orbs that last 3 seconds. Devour: INSTANTLY consume a soul orb, rapidly gaining Temporary Health. If EMPRESS is active then Devour automatically casts, does not consume the Soul Orb, and Healing is permanent.",
      },
      {
        name: "Dismiss (E)",
        icon: "Abilities/Property 1=e-Reyna_Dismiss.png",
        desc: "INSTANTLY consume a nearby Soul Orb, becoming Intangible for a short duration. If EMPRESS is active, also become Invisible",
      },
      {
        name: "Leer (C)",
        icon: "Abilities/Property 1=c-Reyna_Leer.png",
        desc: "EQUIP an ethereal, destructible eye. ACTIVATE to cast the eye a short distance forward. The eye will Nearsight all enemies who look at it.",
      },
      {
        name: "Empress",
        icon: "Abilities/Property 1=x-Reyna_Empress.png",
        desc: "INSTANTLY enter a frenzy, gaining a Combat Stim that increases firing, equip and reload speed dramatically. Gain infinite charges of Soul Harvest abilities.",
      },
    ],
  },
  {
    name: "Omen",
    profile: "Agents-Profiles/Omen.png",
    artwork: "Agents/Omen_artwork.png",
    class: "Initiator",
    abilities: [
      {
        name: "Devour (Q)",
        icon: "Abilities/Property 1=q-Reyna_Devour.png",
        desc: "Soul Harvest: Enemies that die within 3 seconds of taking damage from Reyna leave behind Soul Orbs that last 3 seconds. Devour: INSTANTLY consume a soul orb, rapidly gaining Temporary Health. If EMPRESS is active then Devour automatically casts, does not consume the Soul Orb, and Healing is permanent.",
      },
      {
        name: "Dismiss (E)",
        icon: "Abilities/Property 1=e-Reyna_Dismiss.png",
        desc: "INSTANTLY consume a nearby Soul Orb, becoming Intangible for a short duration. If EMPRESS is active, also become Invisible",
      },
      {
        name: "Leer (C)",
        icon: "Abilities/Property 1=c-Reyna_Leer.png",
        desc: "EQUIP an ethereal, destructible eye. ACTIVATE to cast the eye a short distance forward. The eye will Nearsight all enemies who look at it.",
      },
      {
        name: "Empress",
        icon: "Abilities/Property 1=x-Reyna_Empress.png",
        desc: "INSTANTLY enter a frenzy, gaining a Combat Stim that increases firing, equip and reload speed dramatically. Gain infinite charges of Soul Harvest abilities.",
      },
    ],
  },
  {
    name: "Sage",
    profile: "Agents-Profiles/Sage.png",
    artwork: "Agents/Sage_artwork.png",
    class: "Initiator",
    abilities: [
      {
        name: "Devour (Q)",
        icon: "Abilities/Property 1=q-Reyna_Devour.png",
        desc: "Soul Harvest: Enemies that die within 3 seconds of taking damage from Reyna leave behind Soul Orbs that last 3 seconds. Devour: INSTANTLY consume a soul orb, rapidly gaining Temporary Health. If EMPRESS is active then Devour automatically casts, does not consume the Soul Orb, and Healing is permanent.",
      },
      {
        name: "Dismiss (E)",
        icon: "Abilities/Property 1=e-Reyna_Dismiss.png",
        desc: "INSTANTLY consume a nearby Soul Orb, becoming Intangible for a short duration. If EMPRESS is active, also become Invisible",
      },
      {
        name: "Leer (C)",
        icon: "Abilities/Property 1=c-Reyna_Leer.png",
        desc: "EQUIP an ethereal, destructible eye. ACTIVATE to cast the eye a short distance forward. The eye will Nearsight all enemies who look at it.",
      },
      {
        name: "Empress",
        icon: "Abilities/Property 1=x-Reyna_Empress.png",
        desc: "INSTANTLY enter a frenzy, gaining a Combat Stim that increases firing, equip and reload speed dramatically. Gain infinite charges of Soul Harvest abilities.",
      },
    ],
  },
  {
    name: "Yoru",
    profile: "Agents-Profiles/Yoru.png",
    artwork: "Agents/Yoru_artwork.png",
    class: "Initiator",
    abilities: [
      {
        name: "Devour (Q)",
        icon: "Abilities/Property 1=q-Reyna_Devour.png",
        desc: "Soul Harvest: Enemies that die within 3 seconds of taking damage from Reyna leave behind Soul Orbs that last 3 seconds. Devour: INSTANTLY consume a soul orb, rapidly gaining Temporary Health. If EMPRESS is active then Devour automatically casts, does not consume the Soul Orb, and Healing is permanent.",
      },
      {
        name: "Dismiss (E)",
        icon: "Abilities/Property 1=e-Reyna_Dismiss.png",
        desc: "INSTANTLY consume a nearby Soul Orb, becoming Intangible for a short duration. If EMPRESS is active, also become Invisible",
      },
      {
        name: "Leer (C)",
        icon: "Abilities/Property 1=c-Reyna_Leer.png",
        desc: "EQUIP an ethereal, destructible eye. ACTIVATE to cast the eye a short distance forward. The eye will Nearsight all enemies who look at it.",
      },
      {
        name: "Empress",
        icon: "Abilities/Property 1=x-Reyna_Empress.png",
        desc: "INSTANTLY enter a frenzy, gaining a Combat Stim that increases firing, equip and reload speed dramatically. Gain infinite charges of Soul Harvest abilities.",
      },
    ],
  },
];

let profilesCont = document.querySelector("#profilelist-container");

let agentDisplayCont = document.querySelector(".imageDisplay");
let agentNameVer = document.querySelector(".hero-name");
let agentName = document.querySelector(".hero-name-2");
let classText = document.querySelector(".role-class");
let abiIcons = document.querySelector(".ability-icons");
let abiIconDesc = document.querySelector(".ability-desc");

// Default
agentDisplayCont.style.backgroundImage = `url(${agentsList[0].artwork})`;
agentNameVer.textContent = agentsList[0].name;

//display list of profiles
agentsList.forEach((agent) => {
  let profilePic = document.createElement("img");
  profilePic.setAttribute("class", "profile-pic");
  profilePic.src = agent.profile;
  profilePic.alt = agent.name;
  profilePic.addEventListener("click", () => {
    updateDisplay(agent);
  });
  profilesCont.appendChild(profilePic);
});

function updateDisplay(agent) {
  //for update image display
  clearDiv(abiIcons);
  //should display default ability descript
  clearDiv(abiIconDesc);
  agentDisplayCont.style.backgroundImage = `url(${agent.artwork})`;
  agentName.textContent = agent.name.toUpperCase();
  agentNameVer.textContent = agent.name.toUpperCase();
  classText.textContent = agent.class.toUpperCase();
  checkingTextLength(agent);
  //update abilities list

  //ability icons list
  agent.abilities.forEach((ability) => {
    let abiIcon = document.createElement("img");
    abiIcon.setAttribute("class", "abiIcon");
    abiIcon.src = ability.icon;
    abiIcon.alt = ability.name;
    updateIconDesc(ability);
    abiIcon.addEventListener("click", () => updateIconDesc(ability));
    abiIcons.appendChild(abiIcon);
  });
}

function clearDiv(div) {
  div.innerHTML = "";
}

function updateIconDesc(ability) {
  clearDiv(abiIconDesc);
  let abiName = document.createElement("h3");
  abiName.setAttribute("class", "abiName");
  let abiDesc = document.createElement("p");
  abiName.textContent = ability.name;
  abiDesc.textContent = ability.desc;
  abiIconDesc.appendChild(abiName);
  abiIconDesc.appendChild(abiDesc);
}

function checkingTextLength(agent) {
  if (agent.name.length > 6) {
    agentNameVer.className = "hero-name-smaller";
  } else {
    agentNameVer.className = "hero-name";
    return;
  }
}
