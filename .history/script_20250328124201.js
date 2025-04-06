document.addEventListener("DOMContentLoaded", function () {
    let agents = [
      "astra", "breach", "brimstone", "chamber", "cypher", "jett", "kay/o",
      "killjoy", "neon", "omen", "phoenix", "raze", "reyna",
      "sage", "skye", "sova", "viper", "yoru", "gekko", "harbor", "fade", "deadlock", "iso"
    ];
  
    const agentImages = {
      "astra": "agents/astra.jpg",
      "breach": "agents/breach.jpg",
      "brimstone": "agents/brimstone.jpg",
      "chamber": "agents/chamber.jpg",
      "cypher": "agents/cypher.jpg",
      "jett": "agents/jett.jpg",
      "kay/o": "agents/kayo.jpg",
      "killjoy": "agents/killjoy.jpg",
      "neon": "agents/neon.jpg",
      "omen": "agents/omen.jpg",
      "phoenix": "agents/phoenix.jpg",
      "raze": "agents/raze.jpg",
      "reyna": "agents/reyna.jpg",
      "sage": "agents/sage.jpg",
      "skye": "agents/skye.jpg",
      "sova": "agents/sova.jpg",
      "viper": "agents/viper.jpg",
      "yoru": "agents/yoru.jpg",
      "gekko": "agents/gekko.jpg",
      "harbor": "agents/harbor.jpg",
      "fade": "agents/fade.jpg",
      "deadlock": "agents/deadlock.jpg",
      "iso": "agents/iso.jpg"
    };
  
    const originalAgents = [...agents];
    const randomizeBtn = document.getElementById("randomizeBtn");
    const rollSound = document.getElementById("rollSound");
    const randomizeGif = document.getElementById("randomizeGif");
    const agentSelectionDiv = document.getElementById("agentSelection");
    agentSelectionDiv.classList.add("hidden");

    const player1AgentDiv = document.getElementById("player1Agent");
    const player2AgentDiv = document.getElementById("player2Agent");
    const player1ReRollBtn = document.getElementById("player1ReRoll");
    const player2ReRollBtn = document.getElementById("player2ReRoll");
    const player1AgentsDiv = document.getElementById("player1Agents");
    const player2AgentsDiv = document.getElementById("player2Agents");
    const randomizingText = document.getElementById("randomizingText");
    
    rollSound.volume = 0.4;
    hideImages(player1AgentDiv);
    hideImages(player2AgentDiv);
  
    randomizeBtn.addEventListener("click", function () {
      rollSound.play();
      loading();
    
      setTimeout(function () {
        endLoading();
        agents = [...originalAgents];
        shuffleArray(agents);
    
        const player1Agent = getRandomAgent();
        removeAgent(player1Agent);
    
        const player2Agent = getRandomAgent();
        removeAgent(player2Agent);
    
        displayAgent(player1AgentDiv, player1Agent);
        displayAgent(player2AgentDiv, player2Agent);
    
        agentSelectionDiv.classList.add("showReRoll");
      }, 2000);
    });

    player1ReRollBtn.addEventListener("click", function () {
        rollSound.play();
        const newAgent = getRandomAgent();
        removeAgent(newAgent);
        displayAgent(player1AgentDiv, newAgent);
    });
      
    player2ReRollBtn.addEventListener("click", function () {
    rollSound.play();
    const newAgent = getRandomAgent();
    removeAgent(newAgent);
    displayAgent(player2AgentDiv, newAgent);
    });

    function loading() {
      hideImages(player1AgentDiv);
      hideImages(player2AgentDiv);
      randomizeGif.style.display = "none";
      randomizingText.style.display = "block";
      player1AgentsDiv.classList.add("hidden");
      player2AgentsDiv.classList.add("hidden");
      player1ReRollBtn.style.display = "none";
      player2ReRollBtn.style.display = "none";
    }
  
    function endLoading() {
      agentSelectionDiv.classList.remove("hidden"); // ← Moved here!
      agentSelectionDiv.classList.add("showPlayers");
      player1AgentsDiv.classList.remove("hidden");
      player2AgentsDiv.classList.remove("hidden");
      player1ReRollBtn.style.display = "inline-block";
      player2ReRollBtn.style.display = "inline-block";
    }
  
    function hideImages(div) {
      div.innerHTML = "";
    }
  
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  
    function getRandomAgent() {
      return agents[Math.floor(Math.random() * agents.length)];
    }
  
    function removeAgent(agent) {
      const index = agents.indexOf(agent);
      if (index !== -1) agents.splice(index, 1);
    }
  
    function displayAgent(div, agent) {
      div.innerHTML = `${agent}<br>`;
      const image = document.createElement("img");
      image.src = agentImages[agent.toLowerCase()];
      image.alt = agent;
      image.classList.add("agent-image");
      div.appendChild(image);
    }
    
  });
  