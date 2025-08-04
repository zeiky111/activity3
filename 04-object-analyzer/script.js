// Starter data
const settings = {
  darkMode: true,
  notifications: false,
  autoSave: true,
  spellCheck: false,
  grammarCheck: true
};

// Start coding here...

// Convert to entries and filter for enabled settings
const entries = Object.entries(settings);
const enabledEntries = entries.filter(([key, value]) => value === true);

// List enabled settings
const enabledList = enabledEntries.map(([key, value]) => `${key}: ${value}`);
document.getElementById("enabled-settings").innerHTML = enabledList.join("<br>");

//Count settings set to true
const enabledCount = enabledEntries.length;
document.getElementById("enabled-count").innerText = enabledCount;

//Rebuild object with only enabled settings
const rebuiltSettings = Object.fromEntries(enabledEntries);
document.getElementById("rebuilt-object").innerText = JSON.stringify(rebuiltSettings, null, 2);
